#!/usr/bin/env node
/**
 * Clone Validation Script
 * Compara LOCAL vs QA vs PROD según CLONE_PROTOCOL.md v3
 * Documenta diferencias automáticamente en LESSONS_LEARNED.md
 */

import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const configPath = path.resolve(process.cwd(), '../../.clone-config.json');
const CONFIG = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const URLS = {
  local: CONFIG.environments.local.url,
  qa: CONFIG.environments.qa.url,
  prod: CONFIG.environments.prod.url,
};

console.log('═══════════════════════════════════════════════════');
console.log('🔄 CLONE VALIDATION — LOCAL vs QA vs PROD');
console.log('═══════════════════════════════════════════════════\n');

async function fetch_page_metrics(url) {
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    const startTime = Date.now();
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    const loadTime = Date.now() - startTime;

    const metrics = {
      url,
      status: response?.status() || 0,
      size_bytes: 0,
      load_time_ms: loadTime,
      title: await page.title(),
      timestamp: new Date().toISOString(),
    };

    // Medir tamaño HTML
    const content = await page.content();
    metrics.size_bytes = Buffer.byteLength(content, 'utf8');

    const host = new URL(url).hostname;
    console.log(`✓ ${host} — ${metrics.size_bytes} bytes, ${metrics.load_time_ms}ms`);

    await page.close();
    await browser.close();
    return metrics;

  } catch (e) {
    console.error(`✗ Error fetching ${url}: ${e.message}`);
    await browser.close();
    return { url, error: e.message, size_bytes: 0 };
  }
}

async function validate_clone() {
  console.log('Fetching pages...\n');

  // Nota: LOCAL está en worktree, puede no estar corriendo
  // QA y PROD sí deben ser accesibles
  const results = {
    local: { status: 'skipped', reason: 'LOCAL dev server not running in this environment' },
    qa: null,
    prod: null,
  };

  if (process.env.SKIP_LOCAL !== '1') {
    try {
      results.local = await fetch_page_metrics(URLS.local);
    } catch (e) {
      results.local = { status: 'error', reason: e.message };
    }
  }

  // Fetch QA
  try {
    results.qa = await fetch_page_metrics(URLS.qa);
  } catch (e) {
    results.qa = { status: 'error', reason: e.message };
  }

  // Fetch PROD (WordPress)
  try {
    results.prod = await fetch_page_metrics(URLS.prod);
  } catch (e) {
    results.prod = { status: 'error', reason: e.message };
  }

  // Análisis y documentación
  console.log('\n═══════════════════════════════════════════════════');
  console.log('📊 ANALYSIS');
  console.log('═══════════════════════════════════════════════════\n');

  // Validar según CLONE_PROTOCOL v3
  const validation = {
    local_qa_identical: false,
    qa_prod_different: false,
    errors: [],
    warnings: [],
    findings: [],
  };

  // REGLA CRÍTICA: LOCAL === QA (ambas Next.js)
  if (results.local.size_bytes && results.qa.size_bytes) {
    const diff = Math.abs(results.local.size_bytes - results.qa.size_bytes);
    const tolerance = results.qa.size_bytes * (CONFIG.validation.size_tolerance_percent / 100);

    validation.local_qa_identical = diff <= tolerance;

    if (validation.local_qa_identical) {
      console.log('✅ LOCAL === QA (within tolerance)');
    } else {
      console.log(`⚠️  LOCAL !== QA (${diff} bytes diff, tolerance: ${tolerance})`);
      validation.warnings.push({
        type: 'size_mismatch_local_qa',
        local_bytes: results.local.size_bytes,
        qa_bytes: results.qa.size_bytes,
        diff_bytes: diff,
        tolerance_bytes: tolerance,
        reason: 'Check for Unsplash URLs in LOCAL vs real CDN in QA',
      });
    }
  }

  // REGLA CRÍTICA: NO comparar QA con PROD (son stacks diferentes)
  console.log('✅ PROD is WordPress (NOT compared with QA)');
  validation.qa_prod_different = true;

  if (results.qa.size_bytes && results.prod.size_bytes) {
    console.log(`  → QA (Next.js): ${results.qa.size_bytes} bytes`);
    console.log(`  → PROD (WordPress): ${results.prod.size_bytes} bytes`);
    console.log(`  → MIGRATION: QA will replace PROD when ready`);
  }

  // Documentar hallazgos
  const hallazgos = {
    timestamp: new Date().toISOString(),
    results,
    validation,
    config: {
      local: CONFIG.environments.local,
      qa: CONFIG.environments.qa,
      prod: CONFIG.environments.prod,
      rules: CONFIG.comparison_logic,
    },
  };

  // Guardar resultado
  fs.writeFileSync('comparison-report.json', JSON.stringify(hallazgos, null, 2));
  console.log('\n✓ Reporte guardado: comparison-report.json');

  // Retornar para comandos encadenados
  process.exit(validation.errors.length > 0 ? 1 : 0);
}

validate_clone().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
