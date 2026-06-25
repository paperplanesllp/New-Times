import React, { useState } from 'react';

const DUMMY_BILLIONAIRE_STORIES = [
  {
    id: 1,
    industry: 'WEALTH',
    source: 'New Times Wealth Desk',
    issue: 'Market Wealth',
    headline: 'Indian Equities See Strong Wealth Creation as Large-Cap Stocks Hit New Highs',
    summary:
      'Investor wealth is rising as benchmark indices continue to gain on strong corporate earnings and steady foreign inflows.',
    image: '/w2.avif',
  },
  {
    id: 2,
    industry: 'WEALTH',
    source: 'Wealth Desk',
    issue: 'Retail Wealth',
    headline: 'Mutual Fund Industry Expands as Retail Wealth Participation Reaches Record Levels',
    summary:
      'Systematic investment plans continue to drive long-term wealth creation among Indian retail investors.',
    image: '/w1.avif',
  },
  {
    id: 3,
    industry: 'WEALTH',
    source: 'Property Wealth',
    issue: 'Real Estate',
    headline: 'Real Estate Wealth Growth Accelerates in Major Indian Cities Amid Rising Demand',
    summary:
      'Property values in key urban markets are strengthening, boosting long-term wealth accumulation for investors and developers.',
    image: '/w3.webp',
  },
  {
    id: 4,
    industry: 'CEOS',
    source: 'Nikhil Kamath',
    issue: 'Zerodha',
    headline: "From Young Trader to Billionaire Founder: Nikhil Kamath's Self-Made Wealth Story",
    summary:
      'Quote: "Compounding is the most powerful force in wealth creation."',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 5,
    industry: 'CEOS',
    source: 'Bhavish Aggarwal',
    issue: 'Ola',
    headline: "From Startup Vision to Billion-Dollar Mobility Empire: Bhavish Aggarwal's Rise",
    summary:
      'Quote: "The future of mobility will be electric, intelligent, and built in India."',
    image:
      'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 6,
    industry: 'CEOS',
    source: 'Vijay Shekhar Sharma',
    issue: 'Paytm',
    headline: 'From Small-Town Founder to Fintech Billionaire: Vijay Shekhar Sharma’s Journey',
    summary:
      'Quote: "Don’t wait for opportunities, create them."',
    image:
      'https://images.unsplash.com/photo-1517242027094-631f8c218a0f?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 7,
    industry: 'LEADERSHIP',
    source: 'Leadership Desk',
    issue: 'Founder Playbook',
    headline: 'How Wealth Creators Build Long-Term Power Through Ownership and Focus',
    summary:
      'Great founders compound influence by owning distribution, protecting trust, and staying disciplined through market cycles.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 8,
    industry: 'LEADERSHIP',
    source: 'Boardroom Note',
    issue: 'CEO Strategy',
    headline: 'Modern CEOs Are Balancing Ambition With Operating Discipline',
    summary:
      'The strongest leaders are scaling with clearer capital allocation, tighter teams, and measurable execution rhythms.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1100&q=90',
  },
  {
    id: 9,
    industry: 'LEADERSHIP',
    source: 'Executive Desk',
    issue: 'Power Moves',
    headline: 'Founder-Led Companies Turn Culture Into a Strategic Advantage',
    summary:
      'Culture becomes a business asset when teams move faster, make clearer decisions, and stay aligned around customer outcomes.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=90',
  },
];

function getStorySlots(items, startIndex, count) {
  if (!items.length) {
    return [];
  }

  return Array.from({ length: count }, (_, offset) => items[(startIndex + offset) % items.length]);
}

export default function BillionairesHub() {
  const [selectedIndustry, setSelectedIndustry] = useState('WEALTH');

  const categories = ['WEALTH', 'CEOS', 'LEADERSHIP'];
  const filteredStories = DUMMY_BILLIONAIRE_STORIES.filter((item) => item.industry === selectedIndustry);
  const visibleStories = filteredStories.length ? filteredStories : DUMMY_BILLIONAIRE_STORIES;
  const mainFeature = visibleStories[0];
  const sideStories = getStorySlots(visibleStories, 1, 2);

  return (
    <section className="px-4 py-8 font-serif sm:px-6 lg:px-8 text-slate-950">
      <div className="pb-3 mb-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-semibold tracking-tight text-slate-950">
          Wealth Titans <span className="text-lg font-normal">-&gt;</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 pb-3 font-sans border-b border-gray-100 mb-7">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedIndustry(cat)}
            className={`border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              selectedIndustry === cat ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-slate-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {mainFeature && (
        <>
          <div className="mb-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div className="space-y-8 border-gray-200 lg:border-r lg:pr-6">
              {sideStories.map((story, index) => (
                <article key={`${story.id}-wealth-side-${index}`} className="border-b border-gray-100 pb-7">
                  <img src={story.image} alt={story.headline} className="mb-4 h-[220px] w-full rounded-3xl object-cover" />
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {story.source} / {story.industry}
                  </div>
                  <h3 className="m-0 font-serif text-xl font-semibold leading-tight story-headline text-slate-950">
                    {story.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{story.summary}</p>
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
        </>
      )}
    </section>
  );
}
