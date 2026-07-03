import React from 'react';

export default function Magazines() {
  return (
    <main className="min-h-[calc(100vh-140px)] bg-white px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-[420px] overflow-hidden border border-slate-200 bg-black shadow-2xl">
          <img
            src="/magazine.png"
            alt="New Times July 2026 magazine cover"
            className="block h-auto w-full"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="mb-4 font-sans text-xs font-black uppercase tracking-[0.35em] text-red-600">
            Magazine
          </p>
          <h1 className="m-0 font-serif text-5xl font-black uppercase leading-none tracking-normal text-black sm:text-6xl lg:text-7xl">
            Coming Soon
          </h1>
          <div className="mx-auto mt-6 h-1 w-24 bg-black lg:mx-0" />
        </div>
      </section>
    </main>
  );
}
