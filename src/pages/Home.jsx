// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LiveBusinessNewsSection, { businessTopics, liveBusinessContent } from '../component/LiveBusinessNewsSection';

import Ticker from '../component/Ticker';
import MainDashboard from '../component/MainDashboard';
import BusinessHubGrid from '../component/BusinessHubGrid';
import FounderSandbox from '../component/FounderSandbox';
import BillionairesHub from '../component/BillionairesHub';

const homeBusinessLead = {
  title: "The Voice Behind Lilly Kutty: How Mariya Johny Became Kerala's Most Unexpected Multi-Hyphenate Talent",
  description:
    "Between a Kochi recording booth and the open highway, Mariya Johny has built a career that won't sit still in one lane. She's the voice behind Lilly Kutty, the sheep character who became an unlikely viral sensation after the Malayalam dub of The Sheep Detectives landed on Amazon Prime Video.",
  image: '/goat.avif',
  imagePosition: 'center 18%',
  to: '/creators-economy/mariya-johny-lilly-kutty-multi-hyphenate-talent',
};

const homeBusinessSecondary = {
  title: 'Swiggy Instamart Appoints Former Myntra CEO Nandita Sinha as Chief, Signals New Phase of Quick-Commerce Growth',
  description:
    "Former Myntra CEO Nandita Sinha takes charge of Swiggy Instamart as the quick-commerce platform sharpens its focus on differentiated assortment, customer loyalty and sustainable growth.",
  image: '/nant.avif',
  to: '/spotlight/business-features/swiggy-instamart-appoints-nandita-sinha-chief',
};

const homeCreatorsStory = {
  title: "From Reels to the Big Screen: How Hashir Turned Everyday Humour Into Kerala's Next Entertainment Brand",
  description:
    "There was a time when becoming a film star meant waiting for a director to discover you. The journey usually began with auditions, years of rejection, supporting roles, and the hope that one breakthrough performance would finally change everything. That isn't the only path anymore.",
  image: '/hash.webp',
  imagePosition: 'center 18%',
  to: '/creators-economy/hashir-reels-big-screen-kerala-entertainment-brand',
};

const homeCreatorStories = [
  {
    title: "The Business of Being Diya Krishna: How a Lifestyle Creator Turned Everyday Life Into One of Kerala's Most Powerful Personal Brands",
    to: '/creators-economy/diya-krishna-lifestyle-creator-personal-brand',
  },
  {
    title: 'The Woman Who Made Authenticity Her Superpower: The Pearle Maaney Story',
    to: '/creators-economy/pearle-maaney-authenticity-superpower-story',
  },
  {
    title: 'Beyond Stardom: How Anu K Aniyan Built a Career Through Authenticity Rather Than Celebrity',
    to: '/creators-economy/anu-k-aniyan-authenticity-rather-than-celebrity',
  },
  {
    title: 'Beyond Viral: How Jisma Vimal Built a Storytelling Brand That Outgrew the Algorithm',
    to: '/creators-economy/jisma-vimal-storytelling-brand-outgrew-algorithm',
  },
];

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
      {
        label: 'Recognition Series',
        title: "India's Startup Founders Are Building Again: The Second Act of Indian Entrepreneurship",
        to: '/spotlight/recognise-series/indias-startup-founders-building-again-second-act',
      },
      {
        label: 'Business Live',
        title: 'The Right CRM for Your Small Business in 2026: A Complete Guide to the 11 Best Options',
        to: '/business-live/business/best-crm-small-business-2026-guide',
      },
      {
        label: 'Business Features',
        title: "The Engineer Who Started at Ten: How Venkatesh Sai Built India's Most Consequential Drone Technology Company from a Childhood Obsession",
        to: '/spotlight/business-features/venkatesh-sai-drone-technology-company',
      },
      {
        label: 'Startup',
        title: "India's Space Unicorn Has Landed: Is Skyroot's $1.1 Billion Milestone the Coming-of-Age Moment Indian Deep Tech Has Been Waiting For?",
        to: '/spotlight/startup/emergent-100m-arr-plain-language-app-building',
      },
      {
        label: 'Green Mobility',
        title: "Battery Smart's Swap Network Turns EV Charging Into an Urban Infrastructure Play",
        to: '/spotlight/startup/battery-smart-swap-network-urban-ev-infrastructure',
      },
      {
        label: 'Agritech',
        title: 'How FarmOS Platforms Are Helping Growers Sell Before the Harvest',
        to: '/spotlight/startup/farmos-platforms-harvest-linked-commerce',
      },
    ],
  },
  {
    title: 'Trending Now ',
    items: [
      { title: 'Bengaluru Strengthens Global Startup Status With $153 Billion Ecosystem Value' },
      { title: 'India’s Startup IPO Pipeline Gains Momentum With 20+ Companies Preparing to List' },
      { title: 'Billion-Dollar Cursor Deal Highlights Growing Influence of Indian AI Talent' },
    ],
  },
  {
    title: "Editors' Choice",
    items: [
      { title: 'Why distribution is the new defensibility for software founders' },
      { title: 'Inside the boardroom shift from growth stories to margin stories' },
      { title: 'The next business icons may be built with smaller teams' },
      { title: 'AI Adoption Surges as Indian Businesses Double Down on Automation' },

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
    image: '/founderss.avif',
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
    category: 'Business Features',
    title: 'Two Resignation Emails That Built a Unicorn: The Story Behind Licious at 11',
    description:
      "Licious began with two friends, two resignation emails, and a stubborn belief that India's meat industry needed an end-to-end quality transformation rather than another asset-light marketplace.",
    image: '/licious.webp',
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
    image: '/ente.avif',
  },
];

const topStories = [
  {
    id: 1,
    category: 'Business',
    title: liveBusinessContent.business.featured.title,
    description:
      liveBusinessContent.business.featured.description,
    image: liveBusinessContent.business.featured.image,
    to: '/business-live/business',
  },
  {
    id: 2,
    category: 'Finance',
    title: liveBusinessContent.finance.featured.title,
    description:
      liveBusinessContent.finance.featured.description,
    image: liveBusinessContent.finance.featured.image,
    to: '/business-live/finance',
  },
  {
    id: 3,
    category: 'Marketing',
    title: liveBusinessContent.marketing.featured.title,
    description:
      liveBusinessContent.marketing.featured.description,
    image: liveBusinessContent.marketing.featured.image,
    to: '/business-live/marketing',
  },
  {
    id: 4,
    category: 'Technology',
    title: liveBusinessContent.technology.featured.title,
    description:
      liveBusinessContent.technology.featured.description,
    image: liveBusinessContent.technology.featured.image,
    to: '/business-live/technology',
  },
  {
    id: 5,
    category: 'AI',
    title: liveBusinessContent.ai.featured.title,
    description:
      liveBusinessContent.ai.featured.description,
    image: liveBusinessContent.ai.featured.image,
    to: '/business-live/ai',
  },
  {
    id: 6,
    category: 'Sustainability',
    title: 'Profitability Meets Responsibility',
    description:
      'Companies are increasingly focusing on long-term value creation through sustainable practices.',
    image: '/T.5.jpeg',
  },
  {
    id: 7,
    category: 'Strategy',
    title: 'Operating Models Shift Toward Customer Economics',
    description:
      'Companies are measuring expansion around retention, margin quality, and customer lifetime value.',
    image: '/T.6.png',
  },
  {
    id: 8,
    category: 'Capital',
    title: 'Private Capital Searches for Stronger Business Models',
    description:
      'Dealmakers are prioritizing durable cash flow, recurring revenue, and clean operating discipline.',
    image: '/T.7.webp',
  },
  {
    id: 9,
    category: 'Operations',
    title: 'Supply Chains Move From Expansion to Resilience',
    description:
      'Executives are investing in smarter sourcing, better inventory systems, and regional manufacturing depth.',
    image: '/T.8.webp',
  },
  {
    id: 10,
    category: 'Economy',
    title: 'CFOs Tighten Spending While Protecting Growth Bets',
    description:
      'Finance leaders are trimming low-return expenses while keeping AI, cloud, and customer growth priorities intact.',
    image: '/T.9.jpg',
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
      <h2 className="inline-block pb-2 text-2xl font-bold leading-none tracking-tight text-black border-b-[3px] border-blue-600 sm:text-3xl">
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
                      <h3 className="mx-auto max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-black underline-offset-4 group-hover:underline sm:text-4xl">
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
    <aside className="h-full px-4 bg-white shadow-sm py-7 sm:px-5 text-slate-950">
      <div className="pb-3 mb-5 border-b border-gray-200">
        <h3 className="flex items-center gap-2 m-0 text-xl font-semibold tracking-tight text-slate-950">
          Top Stories <span className="text-base font-normal">-&gt;</span>
        </h3>
      </div>

      <article className="pb-4 border-b border-gray-100 group">
        <Link to={topStories[0].to} className="block no-underline">
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
          <h4 className="m-0 mt-2 text-[17px] font-bold leading-snug text-slate-950 underline-offset-4 group-hover:underline">
            {topStories[0].title}
          </h4>
        </Link>
      </article>

      <div className="divide-y divide-gray-100">
        {topStories.slice(1, 10).map((story, index) => (
          <article key={story.id} className="py-3 group last:pb-0">
            <Link to={story.to || '/business-live/business'} className="grid grid-cols-[48px_minmax(0,1fr)] gap-3 no-underline">
              <img src={story.image} alt={story.title} className="object-cover w-12 h-12 rounded-2xl" />
              <div>
                <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  <span>{story.category}</span>
                  <span className="text-slate-300">{String(index + 2).padStart(2, '0')}</span>
                </div>
                <h4 className="m-0 text-[15px] font-bold leading-snug text-slate-950 underline-offset-4 group-hover:underline">
                  {story.title}
                </h4>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </aside>
  );
}

function BusinessLiveTopicCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {businessTopics.map((topic) => {
        const content = liveBusinessContent[topic.id];

        return (
          <Link
            key={topic.id}
            to={topic.to}
            className="group block overflow-hidden border border-black/10 bg-white no-underline shadow-sm transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
              <img
                src={content.featured.image}
                alt={content.featured.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {topic.label}
              </div>
              <h3 className="mt-2 text-lg font-bold leading-tight text-black underline-offset-4 group-hover:underline">
                {content.featured.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen text-black bg-white">
      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
        <section>
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-9 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="lg:border-r lg:border-black/30 lg:pr-9">
              <article className="group mx-auto max-w-[720px]">
                <Link to={homeBusinessLead.to} className="block no-underline">
                  <h1 className="mb-5 text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl">
                    Creators Economy
                  </h1>

                  <div className="overflow-hidden rounded-[28px] bg-neutral-100">
                    <img
                      src={homeBusinessLead.image}
                      alt={homeBusinessLead.title}
                      className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[330px]"
                      style={{ objectPosition: homeBusinessLead.imagePosition || 'center 26%' }}
                    />
                  </div>

                  <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black underline-offset-4 group-hover:underline sm:text-4xl">
                    {homeBusinessLead.title}
                  </h2>

                  <div className="mt-4">
                    <p className="text-base leading-7 text-black/65 sm:text-lg">
                      {homeBusinessLead.description}
                    </p>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-black/50">
                      Creators Economy / Creator Profile
                    </p>
                  </div>
                </Link>
              </article>

              <article className="group mx-auto mt-10 max-w-[720px] border-t border-black/15 pt-8">
                <Link to={homeBusinessSecondary.to} className="block no-underline">
                  <div className="overflow-hidden rounded-[28px] bg-neutral-100">
                    <img
                      src={homeBusinessSecondary.image}
                      alt={homeBusinessSecondary.title}
                      className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[330px]"
                    />
                  </div>

                  <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black underline-offset-4 group-hover:underline sm:text-4xl">
                    {homeBusinessSecondary.title}
                  </h2>

                  <p className="mt-4 text-base leading-7 text-black/65 sm:text-lg">
                    {homeBusinessSecondary.description}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-black/50">
                    Business Live / QSR Industry
                  </p>
                </Link>
              </article>
            </div>

            <aside className="space-y-6 lg:max-w-[360px]">
              {sideSections.map((section) => (
                <div key={section.title} className="pt-4 border-t border-black">
                  <h3 className="pb-3 text-xl font-semibold tracking-tight text-black border-b border-black sm:text-2xl">
                    {section.title}
                  </h3>

                  <div className="mt-3 divide-y divide-black/15">
                    {section.items.map((item) => {
                      const content = (
                        <>
                          {item.label && (
                            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                              {item.label}
                            </span>
                          )}
                          <span>{item.title}</span>
                        </>
                      );

                      return item.to ? (
                        <Link
                          key={item.title}
                          to={item.to}
                          className="block py-3 text-base font-semibold leading-snug text-black no-underline transition underline-offset-4 hover:underline sm:text-lg"
                        >
                          {content}
                        </Link>
                      ) : (
                        <div
                          key={item.title}
                          className="block py-3 text-base font-semibold leading-snug text-black transition underline-offset-4 hover:underline sm:text-lg"
                        >
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <EditorialShell className="mt-9">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-9 xl:grid-cols-[minmax(0,1fr)_360px]">
            <article className="group mx-auto max-w-[720px] lg:border-r lg:border-black/30 lg:pr-9">
              <Link to={homeCreatorsStory.to} className="block text-black no-underline">
                <div className="overflow-hidden rounded-[28px] bg-neutral-100">
                  <img
                    src={homeCreatorsStory.image}
                    alt={homeCreatorsStory.title}
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[360px] lg:h-[430px]"
                    style={{ objectPosition: homeCreatorsStory.imagePosition }}
                  />
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-black underline-offset-4 group-hover:underline sm:text-4xl">
                  {homeCreatorsStory.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-black/65 sm:text-lg">
                  {homeCreatorsStory.description}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-black/50">
                  Creators Economy
                </p>
              </Link>
            </article>

            <aside className="lg:max-w-[360px]">
              <div className="border-t border-black pt-4">
              <SectionTitle>Creators</SectionTitle>
                <div className="mt-5 divide-y divide-black/15 border-t border-black/15">
                  {homeCreatorStories.map((item) => (
                    <Link
                      key={item.title}
                      to={item.to}
                      className="block py-4 text-lg font-semibold leading-snug text-black no-underline underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </EditorialShell>

        <EditorialShell className="mt-9">
          <SectionTitle>Featured</SectionTitle>
          <FeaturedCarousel />
        </EditorialShell>

        <EditorialShell>
          <SectionTitle> Business Live</SectionTitle>
          <div className="mt-8">
            <BusinessLiveTopicCards />
          </div>
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

      </div>
    </main>
  );
}
