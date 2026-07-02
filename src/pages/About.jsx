import React from 'react';

const pillars = [
  {
    title: 'Business First',
    copy: 'We track companies, founders, markets, technology, wealth, and industry shifts with a clear focus on what matters to decision makers.',
  },
  {
    title: 'Sharp Storytelling',
    copy: 'New Times brings together newsroom discipline and magazine-style presentation so every feature feels useful, current, and polished.',
  },
  {
    title: 'India With A Global Lens',
    copy: 'Our coverage follows Indian ambition while connecting it to global capital, innovation, policy, culture, and entrepreneurship.',
  },
];

export default function About() {
  return (
    <main className="min-h-[80vh] bg-white px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
        <div className="mb-6 h-1 w-full bg-slate-950" />

        <div className="grid gap-8 border-b border-gray-200 pb-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.75fr)] lg:items-end">
          <div>
            <span className="mb-3 block font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
              About New Times
            </span>
            <h1 className="m-0 max-w-4xl font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
              Business stories for a changing generation.
            </h1>
          </div>
          <p className="font-sans text-base leading-7 text-slate-600">
            New Times is a digital-first media platform covering the people, companies, sectors, and ideas shaping modern India. We publish crisp business journalism, profile-led features, market updates, technology coverage, and spotlight stories built for readers who want context without clutter.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="bg-slate-50 p-7 ring-1 ring-gray-200">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-green-600">
              Our Purpose
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-slate-950">
              To make business coverage more readable, relevant, and ambitious.
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-7 text-slate-600">
              We believe business news should be direct enough for daily readers and deep enough for builders, investors, creators, professionals, and brand leaders. Our work highlights momentum, explains change, and gives visibility to the people moving industries forward.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="border border-gray-200 bg-white p-5">
                <h3 className="font-serif text-xl font-bold leading-tight text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-6 text-slate-600">{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-gray-200 pt-8 md:grid-cols-3">
          <div>
            <span className="block font-sans text-[10px] font-extrabold uppercase tracking-[0.16em] text-amber-700">
              Coverage
            </span>
            <p className="mt-2 font-sans text-sm leading-6 text-slate-600">
              Economy, technology, startups, billionaires, money, industry, creators, awards, and long-form spotlight features.
            </p>
          </div>
          <div>
            <span className="block font-sans text-[10px] font-extrabold uppercase tracking-[0.16em] text-amber-700">
              Audience
            </span>
            <p className="mt-2 font-sans text-sm leading-6 text-slate-600">
              Founders, executives, professionals, investors, students, creators, agencies, and readers following India’s growth story.
            </p>
          </div>
          <div>
            <span className="block font-sans text-[10px] font-extrabold uppercase tracking-[0.16em] text-amber-700">
              Voice
            </span>
            <p className="mt-2 font-sans text-sm leading-6 text-slate-600">
              Clear, energetic, premium, and practical, with a strong editorial identity across every New Times page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
