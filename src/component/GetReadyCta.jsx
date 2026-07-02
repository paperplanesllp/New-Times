import React from 'react';
import { Link } from 'react-router-dom';

export default function GetReadyCta() {
  return (
    <section className="px-4 py-10 text-white bg-black sm:px-6">
      <div className="flex flex-col items-center justify-between max-w-5xl gap-6 mx-auto text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-300">
            To Join Us
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">
            Get Ready ?
          </h2> 
        </div>

        <div className="flex flex-col w-full gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/spotlight/business-features"
            className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-xs font-black uppercase tracking-[0.22em] text-black no-underline transition hover:bg-zinc-200"
          >
            Read story
          </Link>
          <Link
            to="/partner/get-featured"
            className="inline-flex min-h-12 items-center justify-center bg-blue-700 px-6 text-xs font-black uppercase tracking-[0.22em] text-white no-underline transition hover:bg-blue-800"
          >
            Get featured
          </Link>
        </div>
      </div>
    </section>
  );
}
