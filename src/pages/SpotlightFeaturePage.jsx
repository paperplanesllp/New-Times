import React from 'react';
import crudeOilImage from './Nn.avif';
import nseIpoImage from './Nn2.jpg';
import fiiSelloffImage from './NN4.webp';
import textileStocksImage from './NN5.webp';

const spotlightPages = {
  'business-features': {
    kicker: 'Business Features',
    title: "India's AI Momentum Shifts Into Execution Mode",
    intro:
      'From large-scale computing infrastructure and indigenous AI models to strategic global collaborations and enterprise deployments, artificial intelligence is rapidly becoming a core business priority across industries in India.',
    badge: 'Feature Desk',
    lead: {
      category: 'MARKETS',
      title: 'Crude Oil Crash Boosts Indian Markets',
      excerpt:
        'Brent crude slipped below $73 a barrel for the first time since February 27, 2026, down 42% from its peak of $126 per barrel on April 30. Indian markets rallied on Wednesday, with the Sensex and Nifty gaining up to 1% amid easing crude prices, supportive global cues, and optimism over India-US trade talks. The Nifty closed above 24,000, with the rupee also strengthening against the dollar.',
      image: crudeOilImage,
    },
    stories: [
      {
        category: 'CAPITAL MARKETS',
        title: "NSE Files for India's Largest-Ever IPO",
        excerpt:
          "The National Stock Exchange has filed its DRHP for a Rs 25,000-30,000 crore IPO, set to be one of the largest public floats in India's capital market history. The issue comprises up to 14.89 crore equity shares, about 6% of NSE's paid-up capital, entirely via an offer for sale route. In FY2026, NSE processed an average of 12-14 billion messages daily and held a dominant 92.99% market share in India's cash equity market.",
        image: nseIpoImage,
      },
      {
        category: 'FOREIGN FLOWS',
        title: 'FIIs Dump Rs 64,761 Crore in First Half of June',
        excerpt:
          'Foreign investors offloaded shares worth a staggering Rs 64,761 crore in the first half of June, the highest since March, driven by elevated oil prices. However, domestic institutional investors countered with strong buying, keeping the overall market afloat.',
        image: fiiSelloffImage,
      },
      {
        category: 'TEXTILES',
        title: 'Textile Stocks Rally on Motilal Oswal Coverage',
        excerpt:
          'Textile exporter stocks witnessed a significant rally, boosted by positive initiation of coverage from Motilal Oswal Financial Services. The brokerage highlighted capacity expansion and supportive government policies as key growth catalysts, projecting substantial gains for leading companies. The surge reflects a new investment cycle in Indian textiles, with companies targeting higher-margin, value-added products to capitalise on global sourcing trends.',
        image: textileStocksImage,
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
              <article key={story.title} className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-gray-100 pb-5 last:border-b-0">
                {story.image && <img className="h-24 w-24 object-cover" src={story.image} alt={story.title} />}
                <div>
                  <span className="mb-2 block font-sans text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                    {story.category}
                  </span>
                  <h3 className="m-0 font-serif text-xl font-bold leading-tight text-slate-950">{story.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-6 text-slate-600">{story.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
