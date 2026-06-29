import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const searchItems = [
  { title: 'Home', category: 'Page', description: 'Latest New Times homepage coverage.', to: '/' },
  { title: 'Magazine', category: 'Page', description: 'New Times magazine features and issues.', to: '/magazine' },
  { title: 'NT Billionaires', category: 'Page', description: 'Billionaire rankings, profiles, and wealth coverage.', to: '/billionaires' },
  { title: 'Economy', category: 'Page', description: 'Economic policy, markets, growth, and macro coverage.', to: '/economy' },
  { title: 'NT Spotlight', category: 'Page', description: 'Spotlight coverage across startups, business features, and cover features.', to: '/spotlight' },
  { title: 'Business Features', category: 'Spotlight', description: 'Deep dives on companies, strategy, leadership, and markets.', to: '/spotlight/business-features' },
  { title: 'Recognition Series', category: 'Spotlight', description: 'Profiles of builders, operators, and emerging leaders.', to: '/spotlight/recognise-series' },
  { title: 'Startup', category: 'Spotlight', description: 'Startup stories, funding moves, and founder playbooks.', to: '/spotlight/startup' },
  { title: 'Cover Feature', category: 'Spotlight', description: 'Signature cover features from the NT Spotlight desk.', to: '/spotlight/cover-feature' },
  { title: 'Technology', category: 'Page', description: 'Technology, AI, cloud, chips, and cybersecurity coverage.', to: '/tech' },
  { title: 'Industry', category: 'Page', description: 'Industry analysis, company updates, and operating trends.', to: '/industry' },
  { title: 'Money Today', category: 'Page', description: 'Markets, personal finance, investments, and money coverage.', to: '/money' },
  { title: 'Creators Economy', category: 'More', description: 'The business of influence, creator platforms, and monetization.', to: '/creators-economy' },
  { title: 'Blogs', category: 'More', description: 'Opinion, analysis, explainers, and editorial blogs.', to: '/blogs' },
  {
    title: 'Generative AI Becomes Core Infrastructure in Product Development Across Global Tech Firms',
    category: 'AI',
    description: 'AI tools embedded directly into software, design, and engineering workflows.',
    to: '/?topic=ai',
  },
  {
    title: 'AI Adoption Accelerates as Enterprises Integrate Automation Across Core Business Functions',
    category: 'AI',
    description: 'Companies scaling AI use to improve productivity, decisions, and operations.',
    to: '/?topic=ai',
  },
  {
    title: 'AI Startup Funding Surges as Investors Bet on Next Wave of Intelligent Applications',
    category: 'AI',
    description: 'Venture capital interest in AI-native startups across sectors.',
    to: '/?topic=ai',
  },
  {
    title: 'Big Tech Expands AI Data Center Investments to Support Next-Generation Models',
    category: 'AI',
    description: 'AI infrastructure and data centers for next-generation models.',
    to: '/?topic=ai',
  },
  {
    title: 'AI Talent Demand Hits Record High as Companies Compete for Specialized Engineers',
    category: 'AI',
    description: 'Hiring demand rises for engineers and AI specialists.',
    to: '/?topic=ai',
  },
  {
    title: 'AI-Powered Tools Transform Marketing, Finance, and Customer Experience Industries',
    category: 'AI',
    description: 'AI tools changing marketing, finance, and customer experience workflows.',
    to: '/?topic=ai',
  },
  {
    title: 'Governments Push AI Regulation Frameworks as Adoption Outpaces Policy',
    category: 'AI',
    description: 'Policy frameworks race to keep up with AI adoption.',
    to: '/?topic=ai',
  },
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim();
  const normalizedQuery = query.toLowerCase();
  const results = normalizedQuery
    ? searchItems.filter((item) =>
        `${item.title} ${item.category} ${item.description}`.toLowerCase().includes(normalizedQuery)
      )
    : [];

  return (
    <main className="min-h-[70vh] bg-white px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="border-b border-slate-200 pb-6">
          <span className="font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
            New Times Search
          </span>
          <h1 className="mt-3 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            {query ? `Search results for "${query}"` : 'Search New Times'}
          </h1>
        </div>

        {query && (
          <p className="mt-5 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            {results.length} result{results.length === 1 ? '' : 's'} found
          </p>
        )}

        <div className="mt-8 space-y-4">
          {results.map((item) => (
            <Link
              key={`${item.category}-${item.title}`}
              to={item.to}
              className="block border border-slate-200 bg-white p-5 text-slate-950 no-underline transition hover:border-red-500"
            >
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.16em] text-red-600">
                {item.category}
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-2 font-sans text-sm leading-6 text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>

        {query && results.length === 0 && (
          <div className="mt-8 border border-slate-200 bg-slate-50 p-6">
            <p className="font-sans text-base font-semibold text-slate-700">
              No results found. Try searching for AI, startup, economy, creators, spotlight, or money.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
