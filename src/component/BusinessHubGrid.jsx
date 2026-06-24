import React from 'react';

const HUB_CARDS = [
  {
    topic: 'Markets',
    insight: 'Global macro signals are driving sector rotation into software and selective industrial names.',
    status: 'Watch',
    metric: 'S&P +4.3%',
  },
  {
    topic: 'Startups',
    insight: 'AI-native startups are dominating new funding rounds as investors prioritize automation-first business models',
    status: 'Focus',
    metric: 'AI funding share +24%',
  },
  {
    topic: 'Policy',
    insight: 'Global regulators are tightening oversight on AI systems, focusing on transparency, safety, and data governance.',
    status: 'Monitor',
    metric: 'AI regulation  +21%',
  },
  {
    topic: 'Leadership',
    insight: 'Executives are shifting focus from aggressive expansion to profitability and disciplined capital allocation.',
    status: 'High',
    metric: 'Profit-first shift +17%',
  },
];

export default function BusinessHubGrid() {
  return (
    <section className="px-4 py-8 font-serif bg-white shadow-sm sm:px-6 lg:px-8 text-slate-950">
      <div className="pb-3 mb-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-semibold tracking-tight text-slate-950">
         Insight Grid
        </h2>
      </div>

      <div className="pb-5 border-b border-gray-100 mb-7">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
         BUSINESS INTELLIGENCE HUB 

        </div>
        <p className="max-w-4xl text-sm leading-7 text-slate-600">
          Curated intelligence topics with concise insights, status indicators, and key metrics for executive review. 
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {HUB_CARDS.map((card) => (
          <article key={card.topic} className="pb-6 border-b border-gray-100">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {card.topic}
            </div>
            <h3 className="m-0 mt-3 font-serif text-xl font-semibold leading-tight story-headline text-slate-950">
              {card.insight}
            </h3>
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <span className="border border-gray-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                {card.status}
              </span>
              <span className="text-sm font-semibold text-slate-950">{card.metric}</span>
            </div>
          </article>
        ))}
      </div>

      
    </section>
  );
}
