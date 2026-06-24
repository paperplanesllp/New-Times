// src/pages/Home.jsx
import React, { useState } from 'react';
import LiveBusinessNewsSection from '../component/LiveBusinessNewsSection';

import Ticker from '../component/Ticker';
import MainDashboard from '../component/MainDashboard';
import BusinessHubGrid from '../component/BusinessHubGrid';
import FounderSandbox from '../component/FounderSandbox';
import BillionairesHub from '../component/BillionairesHub';

const tickerItems = [
  { name: 'NIFTY 50', value: '23,269.40', change: '-0.15', percent: '0.23%' },
  { name: 'SENSEX', value: '76,693.36', change: '+0.12', percent: '0.16%' },
  { name: 'USD/INR', value: '83.92', change: '-0.05', percent: '0.06%' },
  { name: 'Gold 24K', value: 'Rs 74,200', change: '+0.20', percent: '0.27%' },
  { name: 'Crude Oil', value: '$75.90', change: '-0.17', percent: '0.22%' },
];

const sideSections = [
  {
    title: 'Highlights',
    items: [
      "Sarvam AI Secures $234 Million, Achieves Unicorn Status at $1.5 Billion Valuation",
      'HCLTech Makes Rs 1,427 Crore Bet on AI, Acquires 10.5% Stake in Sarvam AI',
      'Pramaana Labs Secures $27 Million Seed Funding in Khosla Ventures-Led Round',
    ],
  },
  {
    title: 'Trending Now ',
    items: [
      'Bengaluru Strengthens Global Startup Status With $153 Billion Ecosystem Value',
      'India’s Startup IPO Pipeline Gains Momentum With 20+ Companies Preparing to List',
      'Billion-Dollar Cursor Deal Highlights Growing Influence of Indian AI Talent',
    ],
  },
  {
    title: "Editors' Choice",
    items: [
      'Why distribution is the new defensibility for software founders',
      'Inside the boardroom shift from growth stories to margin stories',
      'The next business icons may be built with smaller teams',
      'AI Adoption Surges as Indian Businesses Double Down on Automation' ,

    ],
  },
];

const articleCards = [
  {
    id: 1,
    category: 'Founders',
    title: ' Inside the World of Modern Entrepreneurs',
    description:
      'A new generation of founders is building and scaling with lean teams, smarter distribution, and relentless executions.',
    image: '/fe1.webp',
  },
  {
    id: 2,
    category: 'Wealth',
    title: 'The Long Game of Billionaire Builders',
    description:
      'The most successful entrepreneurs compound their advantages through ownership, strategic networks, patient capital, and long-term vision.',
    image: '/billio.webp',
  },
  {
    id: 3,
    category: 'Startups',
    title: ' The Future of Startups: 2026 Edition',
    description:
      'Today’s founders are redefining growth through rapid product innovation, disciplined capital management, and deep customer trust.',
    image: '/start.avif',
  },
  {
    id: 4,
    category: 'Leadership',
    title: 'Capital, Strategy and Leadership ',
    description:
      'The best executives balance capital discipline with bold investments in AI, infrastructure, and talent. ',
    image: '/leader.jpg',
  },
  {
    id: 5,
    category: 'Luxury',
    title: 'Luxury Brands Are Redefining Modern Business ',
    description:
      'Premium companies maintain pricing power through scarcity, storytelling, and strong digital communities.',
    image: '/luxur.jpg',
  },
  {
    id: 6,
    category: 'Entrepreneurs',
    title: ' India’s Next Generation of Entrepreneurs ',
    description:
      "India’s next generation of business leaders is building across AI, consumer brands, finance, manufacturing, and global SaaS.",
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85',
  },
];

const topStories = [
  {
    id: 1,
    category: 'Business',
    title: 'The New Business Era',
    description:
      'How AI, automation, and global connectivity are creating the next generation of market leaders.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 2,
    category: 'Startups',
    title: 'Investors Return to High-Growth Startups',
    description:
      'Venture capital activity is showing renewed momentum across AI, fintech, and enterprise software.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 3,
    category: 'Leadership',
    title: "What Today's CEOs Must Get Right",
    description:
      'Leaders are balancing AI adoption, capital discipline, and talent strategy in a faster operating environment.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 4,
    category: 'Economy',
    title: 'Emerging Economies Driving Growth',
    description:
      'New markets across Asia, Africa, and the Middle East are attracting global investment.',
    image:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 5,
    category: 'Technology',
    title: 'Technology Is Redefining Efficiency',
    description:
      'Automation and intelligent software are helping businesses achieve more with fewer resources.',
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 6,
    category: 'Sustainability',
    title: 'Profitability Meets Responsibility',
    description:
      'Companies are increasingly focusing on long-term value creation through sustainable practices.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 7,
    category: 'Strategy',
    title: 'Operating Models Shift Toward Customer Economics',
    description:
      'Companies are measuring expansion around retention, margin quality, and customer lifetime value.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 8,
    category: 'Capital',
    title: 'Private Capital Searches for Stronger Business Models',
    description:
      'Dealmakers are prioritizing durable cash flow, recurring revenue, and clean operating discipline.',
    image:
      'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 9,
    category: 'Operations',
    title: 'Supply Chains Move From Expansion to Resilience',
    description:
      'Executives are investing in smarter sourcing, better inventory systems, and regional manufacturing depth.',
    image:
      'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 10,
    category: 'Economy',
    title: 'CFOs Tighten Spending While Protecting Growth Bets',
    description:
      'Finance leaders are trimming low-return expenses while keeping AI, cloud, and customer growth priorities intact.',
    image:
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 11,
    category: 'Technology',
    title: 'AI infrastructure vendors report stronger enterprise renewals than anticipated',
    description:
      'Renewal momentum is a sign that larger companies are prioritizing capacity over experimentation.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 12,
    category: 'Leadership',
    title: 'Teams are reorganizing around product outcomes to accelerate decision velocity',
    description:
      'Leadership is betting on smaller, faster groups with clearer revenue ownership.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=85',
  },  {
    id: 13,
    category: 'Exit',
    title: 'Secondary market demand rises as investors seek liquidity without surrendering growth exposure',
    description:
      'More founders are packaging structured sale options to preserve optionality while unlocking cash.',
    image:
      'https://images.unsplash.com/photo-1487744889313-1b9137d72f61?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 14,
    category: 'Workforce',
    title: 'High-growth teams are building hybrid models that reward deep collaboration and focus',
    description:
      'The balance between in-person sprints and remote execution is shaping retention strategies.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 15,
    category: 'Performance',
    title: 'Product-led revenue motions are gaining ground as buyers demand immediacy and clarity',
    description:
      'Sales teams are partnering earlier with product and success to shorten the path from trial to renewal.',
    image:
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 16,
    category: 'Macro',
    title: 'Global growth forecasts are being adjusted as cloud spending momentum slows but corporate IT stays stable',
    description:
      'C-level teams are preparing for a more mixed demand environment without cutting core transformation budgets.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=85',
  },];

function SectionTitle({ children }) {
  return (
    <div className="pt-4">
      <h2 className="inline-block pb-2 font-serif text-2xl font-bold leading-none tracking-tight text-black border-b-[3px] border-blue-600 sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

function EditorialShell({ children, className = '' }) {
  return (
    <section className={`border-t border-black bg-white py-7 ${className}`}>
      {children}
    </section>
  );
}

function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = articleCards.length;

  const moveCarousel = (direction) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + total) % total);
  };

  const visibleCards = [-1, 0, 1].map((offset) => {
    const index = (activeIndex + offset + total) % total;
    return {
      article: articleCards[index],
      position: offset,
    };
  });

  return (
    <div className="relative pt-6 mt-10 overflow-hidden">
      <div className="relative mx-auto min-h-[560px] w-full max-w-[1700px] sm:min-h-[640px] lg:min-h-[690px]">
        <button
          type="button"
          onClick={() => moveCarousel(-1)}
          className="absolute left-4 top-[220px] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-red-600 text-2xl font-normal leading-none text-white shadow-[0_10px_24px_rgba(220,38,38,0.28)] transition duration-300 hover:-translate-y-1/2 hover:scale-110 hover:bg-red-700 hover:shadow-[0_14px_30px_rgba(220,38,38,0.38)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95 sm:h-12 sm:w-12 lg:left-[7%] lg:top-[300px]"
          aria-label="Previous featured article"
        >
          &larr;
        </button>

        <button
          type="button"
          onClick={() => moveCarousel(1)}
          className="absolute right-4 top-[220px] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg bg-red-600 text-2xl font-normal leading-none text-white shadow-[0_10px_24px_rgba(220,38,38,0.28)] transition duration-300 hover:-translate-y-1/2 hover:scale-110 hover:bg-red-700 hover:shadow-[0_14px_30px_rgba(220,38,38,0.38)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95 sm:h-12 sm:w-12 lg:right-[7%] lg:top-[300px]"
          aria-label="Next featured article"
        >
          &rarr;
        </button>

        <div className="relative h-[560px] w-full sm:h-[635px] lg:h-[675px]">
          {visibleCards.map(({ article, position }) => {
            const isActive = position === 0;
            const placementClass =
              position === -1
                ? 'left-[1%] top-[138px] hidden w-[390px] scale-[0.86] opacity-45 md:block lg:left-[2%] xl:left-[4%]'
                : position === 1
                  ? 'right-[1%] top-[138px] hidden w-[390px] scale-[0.86] opacity-45 md:block lg:right-[2%] xl:right-[4%]'
                  : 'left-1/2 top-0 w-full max-w-[920px] -translate-x-1/2 scale-100 opacity-100';

            return (
              <article
                key={`${article.id}-${position}`}
                className={`group absolute bg-white transition-all duration-700 ease-out hover:-translate-y-1 ${placementClass} ${
                  isActive ? 'z-20 pointer-events-auto' : 'z-0 pointer-events-none'
                }`}
              >
                <div className="block">
                  <div className="featured-shine relative overflow-hidden bg-neutral-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className={`featured-image-reveal w-full object-cover transition duration-700 ease-out group-hover:scale-[1.055] group-hover:brightness-105 group-hover:saturate-110 ${
                        isActive ? 'h-[330px] sm:h-[410px] lg:h-[470px]' : 'h-[250px] lg:h-[275px]'
                      }`}
                    />
                  </div>

                  {isActive && (
                    <div className="mx-auto max-w-[860px] overflow-hidden px-4 pt-6 text-center sm:px-6">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                        {article.category}
                      </div>
                      <h3 className="mx-auto max-w-[820px] font-serif text-3xl font-bold leading-tight tracking-tight text-black underline-offset-4 group-hover:underline sm:text-4xl">
                        {article.title}
                      </h3>
                      <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-black/60 sm:text-base">
                        {article.description}
                      </p>

                      <div className="flex justify-center gap-2 mt-5">
                        {articleCards.map((dotArticle, index) => (
                          <button
                            key={dotArticle.id}
                            type="button"
                            onClick={(event) => {
                              event.preventDefault();
                              setActiveIndex(index);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                              activeIndex === index ? 'w-9 bg-blue-700 shadow-[0_0_0_4px_rgba(29,78,216,0.12)]' : 'w-2 bg-black/20 hover:w-5 hover:bg-black/50'
                            }`}
                            aria-label={`Show featured article ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CompactTopStories() {
  return (
    <aside className="h-full px-4 font-serif bg-white shadow-sm py-7 sm:px-5 text-slate-950">
      <div className="pb-3 mb-5 border-b border-gray-200">
        <h3 className="flex items-center gap-2 m-0 font-sans text-xl font-semibold tracking-tight text-slate-950">
          Top Stories <span className="text-base font-normal">-&gt;</span>
        </h3>
      </div>

      <article className="pb-4 border-b border-gray-100 group">
        <div className="block">
          <div className="overflow-hidden bg-neutral-100 rounded-3xl">
            <img
              src={topStories[0].image}
              alt={topStories[0].title}
              className="h-28 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            {topStories[0].category}
          </div>
          <h4 className="m-0 mt-2 font-serif text-[17px] font-bold leading-snug text-slate-950 underline-offset-4 group-hover:underline">
            {topStories[0].title}
          </h4>
        </div>
      </article>

      <div className="divide-y divide-gray-100">
        {topStories.slice(1, 10).map((story, index) => (
          <article key={story.id} className="py-3 group last:pb-0">
            <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-3">
              <img src={story.image} alt={story.title} className="object-cover w-12 h-12 rounded-2xl" />
              <div>
                <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  <span>{story.category}</span>
                  <span className="text-slate-300">{String(index + 2).padStart(2, '0')}</span>
                </div>
                <h4 className="m-0 font-serif text-[15px] font-bold leading-snug text-slate-950 underline-offset-4 group-hover:underline">
                  {story.title}
                </h4>
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}

export default function Home() {
  const [showAd, setShowAd] = useState(true);

  return (
    <main className="min-h-screen text-black bg-white">
      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
        <section>
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-9 xl:grid-cols-[minmax(0,1fr)_360px]">
            <article className="group lg:border-r lg:border-black/30 lg:pr-9">
              <div className="block">
                <h1 className="mb-5 font-serif text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl">
                  Business
                </h1>

                <div className="overflow-hidden bg-neutral-100 lg:mr-2">
                  <img
                    src="/NSE.avif"
                    alt="Business leadership editorial feature"
                    className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[330px] lg:h-[400px]"
                  />
                </div>

                <h2 className="mx-auto mt-3 max-w-[820px] text-center font-serif text-2xl font-bold leading-tight tracking-tight text-black underline-offset-4 group-hover:underline sm:text-3xl lg:text-4xl xl:text-4xl">
                  NSE IPO Could Create India's Next Rs 5 Lakh Crore Corporate Giant
                </h2>

                <div className="mx-auto mt-5 max-w-[720px] text-center">
                  <p className="text-sm leading-6 text-black/65 sm:text-base">
                    A major wealth-creation story and a case study in building enduring businesses.
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-black/50">
                    By <span className="font-bold text-black/70">Navomi Gosh</span>, New Times staff
                  </p>
                </div>
              </div>

              {showAd && (
                <div className="group/sponsored relative mx-auto mt-8 max-w-[720px] overflow-hidden border border-black/15 bg-[#faf8f3] text-left transition duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                  <button
                    type="button"
                    onClick={() => setShowAd(false)}
                    className="absolute z-20 flex items-center justify-center w-8 h-8 text-lg leading-none text-black transition border rounded-full right-3 top-3 border-black/20 bg-white/80 hover:bg-black hover:text-white"
                    aria-label="Close sponsored advertisement"
                  >
                    &times;
                  </button>

                  <div className="overflow-hidden bg-neutral-100">
                    <img
                      src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1400&q=85"
                      alt="Founders reviewing AI dashboard screens in a modern office"
                      className="h-[210px] w-full object-cover transition duration-500 group-hover/sponsored:scale-[1.04] sm:h-[250px] lg:h-[280px]"
                    />
                  </div>

                  <div className="px-5 py-6 sm:px-7 lg:px-8">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                      Sponsored
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-bold leading-tight tracking-tight text-black transition duration-300 group-hover/sponsored:text-blue-700 sm:text-3xl lg:text-[34px]">
                      The Future of AI-Native Companies Is Being Built Today
                    </h3>

                    <p className="mt-4 max-w-[760px] text-sm leading-6 text-black/65 sm:text-base">
                      Discover how modern founders are building billion-dollar companies with lean teams, smarter systems, and global ambition.
                    </p>

                    <span className="mt-6 inline-flex w-fit items-center justify-center bg-black px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 group-hover/sponsored:bg-blue-700">
                      Read Special Report -&gt;
                    </span>
                  </div>
                </div>
              )}
            </article>

            <aside className="space-y-6 lg:max-w-[360px]">
              {sideSections.map((section) => (
                <div key={section.title} className="pt-4 border-t border-black">
                  <h3 className="pb-3 font-serif text-xl font-semibold tracking-tight text-black border-b border-black sm:text-2xl">
                    {section.title}
                  </h3>

                  <div className="mt-3 divide-y divide-black/15">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="block py-3 font-serif text-base font-semibold leading-snug text-black transition underline-offset-4 hover:underline sm:text-lg"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <EditorialShell className="mt-9">
          <SectionTitle>Featured</SectionTitle>
          <FeaturedCarousel />
        </EditorialShell>

        <EditorialShell>
          <SectionTitle> Business Live</SectionTitle>
          <div className="mt-8 lg:mt-7">
            <LiveBusinessNewsSection />
          </div>
        </EditorialShell>

        <EditorialShell>
          <SectionTitle>Market Watch</SectionTitle>
          <div className="p-4 bg-white border mt-7 border-black/15">
            <Ticker items={tickerItems} />
          </div>
        </EditorialShell>

        <EditorialShell>
          <SectionTitle>BUSINESS INSIGHT </SectionTitle>

          <div className="grid gap-6 mt-7 xl:grid-cols-[minmax(0,1fr)_320px]">
            <MainDashboard />
            <CompactTopStories />
          </div>

          <div className="mt-6">
            <BusinessHubGrid />
          </div>
        </EditorialShell>

        <EditorialShell>
          <div className="space-y-8">
            <div>
              <SectionTitle>Founder Strategy</SectionTitle>
              <div className="mt-7">
                <FounderSandbox />
              </div>
            </div>
          </div>
        </EditorialShell>

        <EditorialShell>
          <SectionTitle>Wealth & Leadership</SectionTitle>

          <div className="mt-7">
            <BillionairesHub />
          </div>
        </EditorialShell>

        <section className="text-center bg-white border-black py-9 my-9 border-y">
          <div className="max-w-2xl mx-auto">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-700">
              Newsletter
            </div>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
              Get the essential business briefing.
            </h2>

            <p className="mt-4 text-sm leading-6 text-black/65">
              Smart analysis on markets, founders, money and technology, delivered with an editorial lens.
            </p>

            <form className="flex flex-col max-w-xl gap-3 mx-auto mt-7 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 text-sm transition border border-black outline-none min-h-12 focus:border-blue-700"
              />

              <button
                type="submit"
                className="min-h-12 bg-blue-700 px-6 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-blue-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
