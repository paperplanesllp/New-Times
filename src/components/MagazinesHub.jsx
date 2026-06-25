import React, { useState } from 'react';

const magazineIssues = [
  {
    id: 1,
    category: 'Luxury',
    title: 'Luxury Brands Rebuild Around Experience, Craft, and Cultural Power',
    description:
      'A premium editorial look at how luxury houses are using private clienteling, craftsmanship, hospitality, and cultural storytelling to protect pricing power.',
    issue: 'Luxury Business Report',
    image: '/mg1.png',
    cta: 'Read Issue',
  },
  {
    id: 2,
    category: 'Innovation',
    title: 'Physical AI and Robotics Move From Labs Into Real-World Operations',
    description:
      'Robotics, automation, and AI-native hardware are becoming a serious investment theme as companies search for productivity beyond software alone.',
    issue: 'Innovation Desk',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=90',
    cta: 'Explore Magazine',
  },
  {
    id: 3,
    category: 'Luxury',
    title: 'The New Luxury Consumer Wants Scarcity, Service, and Sustainability',
    description:
      'From circular fashion to private shopping experiences, luxury demand is shifting toward brands that combine exclusivity with long-term trust.',
    issue: 'Luxury Index',
    image: '/mg2.png',
    cta: 'Read Issue',
  },
  {
    id: 4,
    category: 'Innovation',
    title: 'India Deep-Tech Startups Step Onto the Global Stage',
    description:
      'Indian founders are building across AI, space, semiconductors, biotech, and defense technology as deep-tech ecosystems mature.',
    issue: 'Deep-Tech Brief',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1100&q=90',
    cta: 'Explore Magazine',
  },
  {
    id: 5,
    category: 'Luxury',
    title: 'Beauty, Fragrance, and Wellness Become the Next Luxury Battleground',
    description:
      'Premium beauty and wellness brands are using personalization, design, and founder-led storytelling to win younger high-value consumers.',
    issue: 'Luxury Futures',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1100&q=90',
    cta: 'Read Issue',
  },
  {
    id: 6,
    category: 'Innovation',
    title: 'Climate Tech Innovation Shifts Toward Smarter Industrial Systems',
    description:
      'New companies are targeting energy efficiency, materials, manufacturing, and AI-assisted infrastructure to build more resilient value chains.',
    issue: 'Future Systems',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=90',
    cta: 'Explore Magazine',
  },
];

const magazineSubIssues = [
  {
    id: 'luxury-sub-1',
    category: 'Luxury',
    title: 'Heritage Fashion Houses Turn Archives Into New Growth Engines',
    issue: 'Heritage Strategy',
    image: '/M3.avif',
    cta: 'Read Issue',
  },
  {
    id: 'luxury-sub-2',
    category: 'Luxury',
    title: 'Private Members Clubs Become the New Luxury Brand Playground',
    issue: 'Experience Economy',
    image: '/mg3.webp',
    cta: 'Read Issue',
  },
  {
    id: 'luxury-sub-3',
    category: 'Luxury',
    title: 'Luxury Hospitality Bets on Wellness, Design, and Longer Stays',
    issue: 'Travel Ledger',
    image: '/m5.jpg',
    cta: 'Read Issue',
  },
  {
    id: 'luxury-sub-4',
    category: 'Luxury',
    title: 'Premium Watchmakers Find Younger Collectors Through Digital Drops',
    issue: 'Collector Notes',
    image: '/m6.jpg',
    cta: 'Read Issue',
  },
  {
    id: 'innovation-sub-1',
    category: 'Innovation',
    title: 'AI Chip Startups Chase Efficiency as Compute Costs Keep Rising',
    issue: 'Compute Watch',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    cta: 'Explore Magazine',
  },
  {
    id: 'innovation-sub-2',
    category: 'Innovation',
    title: 'Space-Tech Founders Build Commercial Services Beyond Launches',
    issue: 'Space Economy',
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85',
    cta: 'Explore Magazine',
  },
  {
    id: 'innovation-sub-3',
    category: 'Innovation',
    title: 'Industrial Automation Gets a New Layer of Predictive Intelligence',
    issue: 'Factory Systems',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85',
    cta: 'Explore Magazine',
  },
  {
    id: 'innovation-sub-4',
    category: 'Innovation',
    title: 'Health-Tech Labs Move Faster With Data-Driven Diagnostics',
    issue: 'Bio Innovation',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85',
    cta: 'Explore Magazine',
  },
];

function getIssueSlots(items, startIndex, count) {
  if (!items.length) {
    return [];
  }

  return Array.from({ length: count }, (_, offset) => items[(startIndex + offset) % items.length]);
}

export default function MagazinesHub() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'LUXURY', 'INNOVATION'];
  const filteredIssues =
    selectedCategory === 'ALL'
      ? magazineIssues
      : magazineIssues.filter((issue) => issue.category.toUpperCase() === selectedCategory);
  const visibleIssues = filteredIssues.length ? filteredIssues : magazineIssues;
  const mainFeature = visibleIssues[0];
  const sideIssues = getIssueSlots(visibleIssues, 1, 2);
  const streamIssues =
    selectedCategory === 'ALL'
      ? magazineSubIssues.slice(0, 4)
      : magazineSubIssues
          .filter((issue) => issue.category.toUpperCase() === selectedCategory)
          .slice(0, 4);

  return (
    <section className="px-4 py-8 font-serif sm:px-6 lg:px-8 text-slate-950">
      <div className="pb-3 mb-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-semibold tracking-tight text-slate-950">
          Magazines <span className="text-lg font-normal">-&gt;</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 pb-3 font-sans border-b border-gray-100 mb-7">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              selectedCategory === cat ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-slate-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="space-y-8 border-gray-200 lg:border-r lg:pr-6">
          {sideIssues.map((issue, index) => (
            <article key={`${issue.id}-magazine-side-${index}`} className="border-b border-gray-100 pb-7">
              <img src={issue.image} alt={issue.title} className="mb-4 h-[220px] w-full rounded-3xl object-cover" />
              <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {issue.issue} / {issue.category}
              </div>
              <h3 className="m-0 font-serif text-xl font-semibold leading-tight story-headline text-slate-950">
                {issue.title}
              </h3>
              <div className="mt-3 text-sm leading-6 text-slate-600">
                {issue.description}
              </div>
              <button type="button" className="news-source-link mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">
                {issue.cta}
              </button>
            </article>
          ))}
        </div>

        <article>
          <img src={mainFeature.image} alt={mainFeature.title} className="mb-5 h-[360px] w-full rounded-3xl object-cover" />
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {mainFeature.issue} / {mainFeature.category}
          </div>
          <h2 className="m-0 font-serif text-3xl font-semibold leading-tight featured-headline text-slate-950 md:text-4xl">
            {mainFeature.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{mainFeature.description}</p>
          <button type="button" className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">
            {mainFeature.cta}
          </button>
        </article>
      </div>

      <div className="grid gap-6 border-t border-gray-200 pt-7 md:grid-cols-2">
        {streamIssues.map((issue, index) => (
          <article key={`${issue.id}-magazine-small-${index}`} className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 border-b border-gray-100 pb-5">
            <img src={issue.image} alt={issue.title} className="object-cover w-20 h-20 rounded-2xl" />
            <div>
              <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{issue.issue}</div>
              <h4 className="m-0 font-serif text-[15px] font-semibold leading-tight text-slate-950">{issue.title}</h4>
              <button type="button" className="news-source-link mt-2 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950">
                {issue.cta}
              </button>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
