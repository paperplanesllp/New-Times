import React from 'react';

export default function TechHubHeader() {
  const sectorSignals = [
    { metric: 'AI Compute Capacity', value: '125 PFLOPS', drift: 'National AI infrastructure' },
    { metric: 'Semiconductor Investments', value: 'Rs 1.52 Lakh Cr', drift: 'Approved chip pipeline' },
    { metric: 'UPI Transactions', value: '18.7B Monthly', drift: 'Digital public rails' },
    { metric: 'ONDC GMV', value: 'Rs 3,200 Cr Monthly', drift: 'Open commerce network' },
    { metric: 'BharatNet Coverage', value: '6.8 Lakh Villages', drift: 'Rural broadband reach' },
  ];

  return (
    <section className="mb-10 bg-white">
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-sky-600">
        <span>The Silicon Agenda</span>
        <span className="text-zinc-300">/</span>
        <span className="text-zinc-500">India Edition</span>
      </div>

      <div className="mb-8 border-b border-zinc-200 pb-6">
        <h1 className="mb-3 font-serif text-4xl font-semibold leading-tight text-zinc-950 md:text-5xl">
          The India Stack Agenda
        </h1>
        <p className="max-w-3xl text-base leading-7 text-zinc-600">
          Tracking infrastructure expansion, sovereign AI, semiconductor manufacturing, and digital public infrastructure.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {sectorSignals.map((signal, index) => (
          <article key={signal.metric} className="relative overflow-hidden border border-zinc-200 bg-white p-5">
            <div className={`absolute left-0 top-0 h-full w-1 ${index === 0 ? 'bg-zinc-950' : 'bg-transparent'}`} />
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.04em] text-zinc-500">
              {signal.metric}
            </span>
            <div className="mb-1 text-2xl font-extrabold tracking-tight text-zinc-950">
              {signal.value}
            </div>
            <span className={`text-xs font-semibold ${index === 0 ? 'text-green-600' : 'text-sky-600'}`}>
              {signal.drift}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
