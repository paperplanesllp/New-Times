import React from 'react';

export default function Lists() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="text-center">
        <p className="mb-3 font-sans text-[12px] font-black uppercase tracking-[0.24em] text-red-600">
          New Times Lists
        </p>
        <h1 className="mb-4 font-serif text-6xl font-semibold text-slate-950 md:text-7xl">
          Coming Soon
        </h1>
        <p className="mx-auto max-w-2xl font-sans text-lg leading-7 text-slate-600 md:text-xl">
          Curated rankings, special lists, and editorial collections are on the way.
        </p>
      </div>
    </main>
  );
}
