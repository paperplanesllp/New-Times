import React from 'react';

export default function About() {
  return (
    <main className="min-h-[80vh] bg-white px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="border-b border-slate-200 pb-8 text-center">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-red-600">
            About Us
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            About New Times
          </h1>
          <p className="mx-auto mt-4 max-w-3xl font-sans text-base leading-7 text-slate-600 md:text-lg">
            New Times is a digital media platform covering business, startups, technology, economy, money, lifestyle, and stories that matter to modern readers.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 font-sans text-base leading-8 text-slate-700">
          <p>
            Our goal is to bring useful and easy-to-read coverage for readers who want to stay updated with the changing world of business and innovation. We focus on clear reporting, meaningful stories, and content that helps people understand what is happening around them.
          </p>
          <p>
            From startup journeys and market updates to technology trends, inspiring leaders, and industry developments, New Times presents information in a simple and engaging way.
          </p>
          <p>
            We believe good media should be informative, trustworthy, and accessible. That is why our content is built for entrepreneurs, professionals, students, creators, investors, and everyday readers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl font-bold text-slate-950">What We Cover</h2>
            <p className="mt-3 font-sans text-sm leading-6 text-slate-600">
              Business, economy, startups, technology, money, industry, billionaires, magazines, awards, and special features.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl font-bold text-slate-950">Our Mission</h2>
            <p className="mt-3 font-sans text-sm leading-6 text-slate-600">
              To share stories and updates that help readers stay informed, inspired, and connected with new opportunities.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-6">
            <h2 className="font-serif text-2xl font-bold text-slate-950">Our Readers</h2>
            <p className="mt-3 font-sans text-sm leading-6 text-slate-600">
              Founders, business leaders, professionals, creators, students, investors, agencies, and curious readers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
