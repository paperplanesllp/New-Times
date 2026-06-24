import React from 'react';

const archiveIssues = [
  {
    id: 1,
    category: 'Cover Story',
    title: 'The AI Operating Company',
    description:
      'How lean teams are using automation, data, and distribution to compete with larger incumbents.',
    issue: 'Special Report',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    category: 'Deep Dive',
    title: 'Inside The New Capital Cycle',
    description:
      'Private investors are backing companies with stronger retention, cleaner margins, and sharper governance.',
    issue: 'Investor Desk',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    category: 'Interview',
    title: 'The Founder Distribution Playbook',
    description:
      'Why the best startup leaders are building audience, trust, and sales motion before scaling headcount.',
    issue: 'Founder Room',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    category: 'Luxury Index',
    title: 'Premium Brands After The Boom',
    description:
      'A close look at pricing power, private wealth, and the business models behind modern luxury.',
    issue: 'Luxury Business',
    image:
      'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    category: 'Markets',
    title: 'The Infrastructure Rotation',
    description:
      'Capital is moving toward chips, cloud, energy, and logistics as companies rebuild for resilience.',
    issue: 'Market Moves',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 6,
    category: 'Future List',
    title: 'Companies To Watch',
    description:
      'Emerging businesses building around AI workflow ownership, vertical software, and climate infrastructure.',
    issue: 'Future Companies',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
  },
];

export default function MagazineArchive() {
  return (
    <section className="px-4 py-8 mt-8 font-serif bg-white shadow-sm sm:px-6 lg:px-8 text-slate-950">
      <div className="pb-3 mb-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-semibold tracking-tight text-slate-950">
          Magazine Archive 
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {archiveIssues.map((issue) => (
          <article key={issue.id} className="pb-6 border-b border-gray-100">
            <img src={issue.image} alt={issue.title} className="mb-4 h-[240px] w-full rounded-3xl object-cover" />
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {issue.issue} / {issue.category}
            </div>
            <h3 className="m-0 font-serif text-xl font-semibold leading-tight story-headline text-slate-950">
              {issue.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {issue.description}
            </p>
            <a href="#" className="news-source-link mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">
              Explore Magazine
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-between border-t border-gray-200 pt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        <span>Long Reads And Digital Issues</span>
        <span>Advertisement</span>
      </div>
    </section>
  );
}
