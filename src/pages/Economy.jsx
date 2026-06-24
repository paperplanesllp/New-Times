import React from 'react';

const economyArticles = [
  {
    id: 1,
    category: 'Markets',
    source: 'Equity Desk',
    issue: '$5 Trillion Market',
    headline: "India's stock market crosses $5 trillion mark",
    summary:
      'India reclaimed sixth place globally as equity markets surged following the US-Iran peace deal, renewing foreign institutional interest across sectors.',
    image:
      'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 2,
    category: 'Markets',
    source: 'IPO Watch',
    issue: 'NSE Listing',
    headline: "NSE IPO set to be India's largest ever",
    summary:
      'SBI alone stands to earn Rs 5,000 crore from its NSE holdings. Major individual investors like Radhakishan Damani are choosing to hold rather than exit.',
    image:
      'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 3,
    category: 'Industry',
    source: 'Defence Economy',
    issue: 'FY26 Output',
    headline: 'India hits record Rs 1.78 lakh crore in defence production for FY26',
    summary:
      "Policy incentives and surging global demand drove the milestone. Defence stocks have been among the market's strongest performers year-to-date.",
    image:
      'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 4,
    category: 'Trade',
    source: 'Bilateral Desk',
    issue: 'India-US Talks',
    headline: 'India-US trade talks resume with broad bilateral agenda',
    summary:
      "A US delegation held intensive talks in New Delhi June 1-4, building on February's deal that cut reciprocal tariffs. Pharma, textiles, digital trade, and energy are key areas.",
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 5,
    category: 'Policy',
    source: 'RBI Watch',
    issue: 'Rates & Surplus',
    headline: 'RBI holds rates, raises inflation outlook; transfers record surplus',
    summary:
      "The June MPC meeting kept rates unchanged, flagged inflation risks, and trimmed growth forecasts. The RBI's Rs 2.86 lakh crore surplus transfer to the government was a record.",
    image:
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 6,
    category: 'Global',
    source: 'Global Trade',
    issue: 'India-EU FTA',
    headline: 'India-EU "mother of all deals" reshapes global trade architecture',
    summary:
      'The landmark FTA covers 25% of global GDP and a third of world trade. Signed in January 2026, it is paired with a security and defence partnership.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 7,
    category: 'Capital',
    source: 'Institutional Flows',
    issue: 'QIP Boom',
    headline: 'QIP activity hits its highest level since Q4 2017',
    summary:
      "Twenty qualified institutional placements raised $2.3 billion in Q2 2026, the strongest quarter in nearly a decade, as institutions doubled down on India's growth story.",
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=90',
  },
];

export default function Economy() {
  const visibleArticles = economyArticles;
  const mainFeature = visibleArticles[0];
  const sideArticles = visibleArticles.slice(1, 3);
  const streamArticles = visibleArticles.slice(3, 7);

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
      <section className="px-4 py-8 font-serif sm:px-6 lg:px-8 text-slate-950">
        <div className="pb-3 mb-6 border-b border-gray-200">
          <h1 className="m-0 font-sans text-2xl font-semibold tracking-tight text-slate-950">
            Economy
          </h1>
          <p className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Growth Signals
          </p>
        </div>

        <div className="mb-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="space-y-8 border-gray-200 lg:border-r lg:pr-6">
            {sideArticles.map((article, index) => (
              <article key={`${article.id}-economy-side-${index}`} className="border-b border-gray-100 pb-7">
                <img src={article.image} alt={article.headline} className="mb-4 h-[220px] w-full rounded-3xl object-cover" />
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {article.source} / {article.category}
                </div>
                <h2 className="m-0 font-serif text-xl font-semibold leading-tight story-headline text-slate-950">
                  {article.headline}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{article.summary}</p>
                <button type="button" className="news-source-link mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">
                  Read More
                </button>
              </article>
            ))}
          </div>

          <article>
            <img src={mainFeature.image} alt={mainFeature.headline} className="mb-5 h-[360px] w-full rounded-3xl object-cover" />
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {mainFeature.source} / {mainFeature.issue}
            </div>
            <h2 className="m-0 font-serif text-3xl font-semibold leading-tight featured-headline text-slate-950 md:text-4xl">
              {mainFeature.headline}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{mainFeature.summary}</p>
            <button type="button" className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">
              Read More
            </button>
          </article>
        </div>

        <div className="grid gap-6 border-t border-gray-200 pt-7 md:grid-cols-2">
          {streamArticles.map((article, index) => (
            <article key={`${article.id}-economy-small-${index}`} className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 border-b border-gray-100 pb-5">
              <img src={article.image} alt={article.headline} className="object-cover w-20 h-20 rounded-2xl" />
              <div>
                <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{article.issue}</div>
                <h3 className="m-0 font-serif text-[15px] font-semibold leading-tight text-slate-950">{article.headline}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{article.summary}</p>
                <button type="button" className="news-source-link mt-2 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

       
      </section>
    </main>
  );
}
