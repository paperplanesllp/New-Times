import React from 'react';

export default function GetReadyCta() {
  return (
    <section className="bg-black px-4 py-10 text-white sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-300">
            Spotlight
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">
            Get Ready
          </h2>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="https://www.newtimes.in/spotlight/business-features"
            className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-xs font-black uppercase tracking-[0.22em] text-black no-underline transition hover:bg-zinc-200"
          >
            Read story
          </a>
          <a
            href="https://www.newtimes.in/partner/get-featured"
            className="inline-flex min-h-12 items-center justify-center bg-blue-700 px-6 text-xs font-black uppercase tracking-[0.22em] text-white no-underline transition hover:bg-blue-800"
          >
            Get featured
          </a>
        </div>
      </div>
    </section>
  );
}
