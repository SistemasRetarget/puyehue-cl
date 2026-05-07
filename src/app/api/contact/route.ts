import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";
import { rateLimit } from "@/lib/rateLimit";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "reservas@puyehue.cl";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "contacto@puyehue.cl";

async function sendEmail(data: {
  nombre: string;
  email: string;
  mensaje: string;
  telefono?: string;
  tipo?: string;
}) {
  if (!RESEND_API_KEY) {
    console.warn("[contacto] RESEND_API_KEY no configurada — email no enviado");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Hotel Termas de Puyehue <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: data.email,
      subject: `Nueva consulta: ${data.tipo || "General"} — ${data.nombre}`,
      html: `
        <h2>Nueva consulta desde puyehue.cl</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
          <tr>
            <td style="padding:8px;border:1px solid #e8e1d6;background:#f4efe7;font-weight:bold;width:140px">Nombre</td>
            <td style="padding:8px;border:1px solid #e8e1d6">${data.nombre}</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #e8e1d6;background:#f4efe7;font-weight:bold">Email</td>
            <td style="padding:8px;border:1px solid #e8e1d6"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${data.telefono ? `
          <tr>
            <td style="padding:8px;border:1px solid #e8e1d6;background:#f4efe7;font-weight:bold">Teléfono</td>
            <td style="padding:8px;border:1px solid #e8e1d6">${data.telefono}</td>
          </tr>` : ""}
          ${data.tipo ? `
          <tr>
            <td style="padding:8px;border:1px solid #e8e1d6;background:#f4efe7;font-weight:bold">Tipo</td>
            <td style="padding:8px;border:1px solid #e8e1d6">${data.tipo}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:8px;border:1px solid #e8e1d6;background:#f4efe7;font-weight:bold">Mensaje</td>
            <td style="padding:8px;border:1px solid #e8e1d6;white-space:pre-wrap">${data.mensaje}</td>
          </tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#6b6b6b">
          Enviado desde puyehue.cl/contacto
        </p>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[contacto] Resend error:", err);
    throw new Error("Email no enviado");
  }
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const rl = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes, espera un minuto." },
      { status: 429 }
    );
  }

  const form = await req.formData();
  const raw: Record<string, string> = {};
  form.forEach((v, k) => {
    if (typeof v === "string") raw[k] = v;
  });

  const result = validateContact(raw);
  const redirectBase = "/contacto";

  if (!result.ok) {
    const url = new URL(
      `${redirectBase}?error=${encodeURIComponent(result.errors.join(","))}`,
      req.url
    );
    return NextResponse.redirect(url, 303);
  }

  try {
    await sendEmail({
      nombre: result.data.nombre,
      email: result.data.email,
      mensaje: result.data.mensaje,
      telefono: raw.telefono || undefined,
      tipo: raw.tipo || undefined,
    });
  } catch (err) {
    console.error("[contacto] Error enviando email:", err);
    const url = new URL(`${redirectBase}?error=email`, req.url);
    return NextResponse.redirect(url, 303);
  }

  return NextResponse.redirect(new URL(`${redirectBase}?ok=1`, req.url), 303);
}
