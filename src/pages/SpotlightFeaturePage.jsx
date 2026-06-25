import React from 'react';

const spotlightPages = {
  'business-features': {
    kicker: 'Business Features',
    title: 'Deep Dives on the Companies Shaping New Growth',
    intro:
      'Long-form business reporting on strategy, leadership, market expansion, and the operational choices that separate durable companies from short-term noise.',
    badge: 'Feature Desk',
    lead: {
      category: 'BOARDROOM',
      title: 'How Founders Are Rewriting Scale Plans for a More Disciplined Market',
      excerpt:
        'Capital efficiency, sharper unit economics, and stronger governance are becoming the new markers of ambition for Indian growth companies.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85',
    },
    stories: [
      {
        category: 'MARKET MAP',
        title: 'The Sectors Drawing Patient Capital in 2026',
        excerpt: 'Investors are looking beyond hype cycles toward resilient demand, clean execution, and founders with clear distribution advantages.',
      },
      {
        category: 'LEADERSHIP',
        title: 'Why India Inc Is Building Second-Line Leadership Earlier',
        excerpt: 'Maturing businesses are investing in operating depth before expansion stress exposes management gaps.',
      },
      {
        category: 'STRATEGY',
        title: 'Premium Brands Push Into Tier-Two Demand Pockets',
        excerpt: 'A new consumption map is changing how companies design pricing, distribution, and customer experience.',
      },
    ],
  },
  'recognise-series': {
    kicker: 'Recognition Series',
    title: 'Recognising Builders, Operators, and Emerging Leaders',
    intro:
      'A spotlight series for people and teams creating measurable impact across entrepreneurship, industry, technology, and public-facing business.',
    badge: 'Series',
    lead: {
      category: 'EMERGING LEADERS',
      title: "The Operators Behind India's Quiet Business Breakthroughs",
      excerpt:
        'From product heads to regional sales leaders, the Recognition Series highlights the people turning ambitious plans into repeatable execution.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
    },
    stories: [
      {
        category: 'FOUNDER PROFILE',
        title: 'A Manufacturing Founder Betting on Precision and Patience',
        excerpt: 'The next generation of industrial entrepreneurs is blending legacy know-how with sharper digital systems.',
      },
      {
        category: 'IMPACT',
        title: 'Women Leaders Building Stronger Local Business Networks',
        excerpt: 'Regional entrepreneurship groups are becoming powerful channels for hiring, mentorship, and capital access.',
      },
      {
        category: 'INNOVATION',
        title: 'Product Teams Turning Customer Feedback Into Faster Growth',
        excerpt: 'Recognition increasingly belongs to teams that listen closely and ship with discipline.',
      },
    ],
  },
  startup: {
    kicker: 'Startup',
    title: 'Startup Stories, Funding Moves, and Founder Playbooks',
    intro:
      'Coverage for early and growth-stage companies, from funding and product-market fit to hiring, GTM, profitability, and founder decision-making.',
    badge: 'Startup Watch',
    lead: {
      category: 'FUNDING',
      title: 'Startups Return to Focused Growth as Investors Reward Discipline',
      excerpt:
        'The funding market is warming selectively, with stronger attention on revenue quality, repeat customers, and clear paths to profitability.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
    },
    stories: [
      {
        category: 'PLAYBOOK',
        title: 'What Seed Founders Are Changing Before Raising Again',
        excerpt: 'Founders are entering conversations with cleaner metrics, tighter burn, and sharper customer proof.',
      },
      {
        category: 'PRODUCT',
        title: 'AI Tools Give Small Teams Enterprise-Grade Leverage',
        excerpt: 'Automation is helping compact teams compete on support, analytics, marketing, and workflow speed.',
      },
      {
        category: 'ECOSYSTEM',
        title: 'Incubators Shift From Demo Days to Revenue Support',
        excerpt: 'The best startup programs are now judged by pilots, customers, and repeatable sales motions.',
      },
    ],
  },
  'cover-feature': {
    kicker: 'Cover Feature',
    title: 'Signature Cover Features From the NT Spotlight Desk',
    intro:
      'Big narrative features on founders, companies, sectors, and ideas that deserve deeper treatment and a first-page editorial lens.',
    badge: 'Cover Desk',
    lead: {
      category: 'COVER FEATURE',
      title: "The New Business Icons Building Across India's Next Decade",
      excerpt:
        'A closer look at the leaders and companies defining ambition through resilience, technology adoption, and market creation.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    },
    stories: [
      {
        category: 'SPECIAL REPORT',
        title: 'The Companies Turning Trust Into a Competitive Advantage',
        excerpt: 'Transparent operations, customer service, and governance are becoming core brand assets.',
      },
      {
        category: 'PROFILE',
        title: 'Inside the Making of a Category Leader',
        excerpt: 'A cover-style look at how product clarity, timing, and distribution can compound into dominance.',
      },
      {
        category: 'SECTOR FOCUS',
        title: "Why India's Services Economy Keeps Creating New Champions",
        excerpt: 'Talent density and digital demand are opening room for new scaled services businesses.',
      },
    ],
  },
};

export default function SpotlightFeaturePage({ type }) {
  const page = spotlightPages[type] || spotlightPages['business-features'];

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
      <section className="border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
        <div className="mb-6 h-1 w-full bg-slate-950" />

        <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
              NT Spotlight
            </span>
            <h1 className="m-0 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              {page.kicker}
            </h1>
          </div>
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-green-600">
            {page.badge}
          </span>
        </div>

        <div className="mb-10 bg-slate-50 p-7 ring-1 ring-gray-200">
          <h2 className="m-0 max-w-4xl font-serif text-3xl font-extrabold leading-tight text-slate-950">
            {page.title}
          </h2>
          <p className="mt-4 max-w-4xl font-sans text-base leading-7 text-slate-600">
            {page.intro}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,1fr)]">
          <article>
            <img className="mb-5 h-[380px] w-full object-cover" src={page.lead.image} alt={page.lead.title} />
            <span className="mb-2 block font-sans text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
              {page.lead.category}
            </span>
            <h2 className="m-0 font-serif text-3xl font-bold leading-tight text-slate-950">
              {page.lead.title}
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-7 text-slate-600">{page.lead.excerpt}</p>
          </article>

          <div className="space-y-5 border-gray-200 lg:border-l lg:pl-6">
            {page.stories.map((story) => (
              <article key={story.title} className="border-b border-gray-100 pb-5 last:border-b-0">
                <span className="mb-2 block font-sans text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                  {story.category}
                </span>
                <h3 className="m-0 font-serif text-xl font-bold leading-tight text-slate-950">{story.title}</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-slate-600">{story.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
