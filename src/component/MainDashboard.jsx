import React from 'react';

const EXECUTIVE_NEWS = [
  {
    title: "India's Startup Ecosystem Enters New Funding Cycle as Late-Stage Investments Regain Momentum",
    description:
      'Venture capital activity is picking up across growth-stage startups, especially in AI, SaaS, and fintech segments.',
    image: '/b1.png',
  },
  {
    title: 'Global Firms Accelerate India Expansion Plans Amid Strong Talent and AI Capability Growth',
    description:
      'Multinational companies are increasing R&D investments and scaling engineering hubs across major Indian cities.',
    image: '/b2.avif',
  },
  {
    title: 'Private Equity Firms Shift Focus Toward Profitable Consumer and Tech-Driven Businesses',
    description:
      'Investors are prioritizing sustainable growth and strong unit economics over aggressive expansion strategies.',
    image: '/b3.jpg',
  },
  {
    title: 'Enterprise AI Adoption Surges as Companies Rebuild Operations Around Automation and Efficiency',
    description:
      'Businesses across industries are integrating AI tools to streamline workflows and reduce operational costs.',
    image: '/b4.png',
  },
];

export default function MainDashboard() {
  return (
    <section className="h-full px-4 py-8 font-serif bg-white shadow-sm sm:px-6 lg:px-8 text-slate-950">
      <div className="pb-3 mb-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-semibold tracking-tight text-slate-950">
          Executive Overview
        </h2>
      </div>

      <div className="pb-5 border-b border-gray-100 mb-7">
        <h3 className="max-w-4xl m-0 font-serif text-3xl font-semibold leading-tight featured-headline text-slate-950 md:text-4xl">
          High-impact business intelligence and insights for leaders shaping markets and companies.
        </h3>
      </div>

      <div className="grid gap-5">
        {EXECUTIVE_NEWS.map((story) => (
          <article
            key={story.title}
            className="grid gap-5 border-b border-gray-100 pb-5 sm:grid-cols-[190px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]"
          >
            <img
              src={story.image}
              alt={story.title}
              className="h-44 w-full rounded-3xl object-cover sm:h-full sm:min-h-[150px]"
            />

            <div className="flex flex-col justify-center">
              <h3 className="m-0 mt-2 font-serif text-2xl font-semibold leading-tight story-headline text-slate-950 md:text-3xl">
                {story.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {story.description}
              </p>
              <span className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">
                Read Brief
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
