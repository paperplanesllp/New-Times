import React from 'react';

const topStoriesData = [
  { id: 1, title: 'Stocks pause after stronger-than-expected jobs data', time: '2h ago' },
  { id: 2, title: 'Central bank policy meeting keeps markets on edge', time: '3h ago' },
  { id: 3, title: 'Housing starts rise as consumer confidence improves', time: '5h ago' },
  { id: 4, title: 'Retail sales beat estimates despite inflation concerns', time: '7h ago' },
  { id: 5, title: 'Oil prices steady ahead of OPEC production update', time: '9h ago' },
  { id: 6, title: 'Tech earnings show resilience despite macro uncertainty', time: '11h ago' },
  { id: 7, title: 'Inflation outlook shifts after new employment figures', time: '13h ago' }
];

export default function TopStories() {
  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="pb-4 mb-8 border-b border-slate-200">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-slate-950">More Top Stories</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Browse the latest headlines, breaking updates, and expert commentary from around the globe.
        </p>
      </div>

      <div className="grid gap-6">
        {topStoriesData.map((story) => (
          <article key={story.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-slate-300 hover:bg-white">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="text-lg font-semibold leading-tight text-slate-950">{story.title}</h2>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{story.time}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This curated Top Stories collection brings together the most important market, policy, and corporate updates for the day.
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
