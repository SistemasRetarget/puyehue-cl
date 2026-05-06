'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: '',
    nights: '2',
    adults: '2',
    children: '0',
    infants: '0',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://reservas.puyehue.cl/?checkin=${formData.checkIn}&nights=${formData.nights}&adults=${formData.adults}&children=${formData.children}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm shadow-2xl">
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-6 gap-4 items-end"
      >
        {/* Fecha de entrada */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-[10px] uppercase tracking-widest text-brand-muted mb-2 font-medium">
            Fecha de Entrada
          </label>
          <input
            type="date"
            value={formData.checkIn}
            onChange={(e) => handleChange('checkIn', e.target.value)}
            className="w-full px-3 py-2 border-b border-brand-line focus:outline-none focus:border-brand-accent text-sm bg-transparent"
            required
          />
        </div>

        {/* Número de noches */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-brand-muted mb-2 font-medium">
            Noches
          </label>
          <input
            type="number"
            min="1"
            max="30"
            value={formData.nights}
            onChange={(e) => handleChange('nights', e.target.value)}
            className="w-full px-3 py-2 border-b border-brand-line focus:outline-none focus:border-brand-accent text-sm bg-transparent"
          />
        </div>

        {/* Adultos */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-brand-muted mb-2 font-medium">
            Adultos +12
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={formData.adults}
            onChange={(e) => handleChange('adults', e.target.value)}
            className="w-full px-3 py-2 border-b border-brand-line focus:outline-none focus:border-brand-accent text-sm bg-transparent"
          />
        </div>

        {/* Niños */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-brand-muted mb-2 font-medium">
            Niños 5-11
          </label>
          <input
            type="number"
            min="0"
            max="10"
            value={formData.children}
            onChange={(e) => handleChange('children', e.target.value)}
            className="w-full px-3 py-2 border-b border-brand-line focus:outline-none focus:border-brand-accent text-sm bg-transparent"
          />
        </div>

        {/* Infantes */}
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-brand-muted mb-2 font-medium">
            Infantes 0-4
          </label>
          <input
            type="number"
            min="0"
            max="10"
            value={formData.infants}
            onChange={(e) => handleChange('infants', e.target.value)}
            className="w-full px-3 py-2 border-b border-brand-line focus:outline-none focus:border-brand-accent text-sm bg-transparent"
          />
        </div>

        {/* Botón Reservar */}
        <button
          type="submit"
          className="col-span-2 md:col-span-1 px-6 py-3 bg-[#8B9E7F] text-white text-sm uppercase tracking-widest font-medium hover:bg-[#7a8c70] transition-colors"
        >
          Reservar
        </button>
      </form>
    </div>
  );
}
