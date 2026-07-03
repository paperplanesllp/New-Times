import React from 'react';
import { Link } from 'react-router-dom';

const partnerPages = {
  'get-featured': {
    title: 'Get Featured',
    intro:
      'Share your founder story, brand journey, launch, milestone, or leadership insight with the New Times audience.',
    details:
      'Our editorial and branded-content teams help shape strong feature opportunities for businesses, entrepreneurs, and professionals who want credible visibility across business, technology, lifestyle, and startup readers.',
  },
  'ad-options': {
    title: 'Ad Options',
    intro:
      'Explore campaign placements designed for visibility across New Times pages, category hubs, and special editorial properties.',
    details:
      'Choose from display visibility, sponsored placements, newsletter-style promotions, category-led campaigns, and custom digital packages built around reach, timing, and audience relevance.',
  },
  'agency-partnership': {
    title: 'Agency Partnership',
    intro:
      'Partner with New Times to create reliable media opportunities for your clients across campaigns, features, and brand storytelling.',
    details:
      'We work with agencies on repeatable packages, custom briefs, launch calendars, and multi-brand media planning so your clients can connect with the right readers through polished business-first communication.',
  },
  'media-partnership': {
    title: 'Media Partnership',
    intro:
      'Collaborate with New Times for events, summits, awards, conferences, launches, and high-value industry initiatives.',
    details:
      'Media partnerships can include visibility support, editorial coordination, event amplification, interviews, digital coverage, and co-branded storytelling aligned with the audience and purpose of your initiative.',
  },
};

export default function PartnerWithUs({ type }) {
  const page = partnerPages[type] || partnerPages['get-featured'];

  return (
    <main className="min-h-[80vh] bg-white px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)]">
        <div className="border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-600">
            Partner With Us
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            {page.intro}
          </p>
          <div className="mt-8 border-l-4 border-black bg-slate-50 p-6">
            <h2 className="text-2xl font-bold leading-tight text-slate-950">
              How New Times can help
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {page.details}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {Object.values(partnerPages).map((item) => (
              <Link
                key={item.title}
                to={`/partner/${item.title.toLowerCase().replaceAll(' ', '-')}`}
                className={`border px-4 py-2 text-xs font-black uppercase tracking-[0.12em] no-underline ${
                  item.title === page.title
                    ? 'border-black bg-black text-white'
                    : 'border-slate-300 bg-white text-slate-800 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <aside className="border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950">
            Tell us about your requirement
          </h2>
          <form className="mt-6 space-y-4">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600">Name</span>
              <input className="mt-2 h-11 w-full border border-slate-300 bg-white px-3 text-sm outline-none focus:border-red-600" />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600">Email</span>
              <input type="email" className="mt-2 h-11 w-full border border-slate-300 bg-white px-3 text-sm outline-none focus:border-red-600" />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600">Phone</span>
              <input className="mt-2 h-11 w-full border border-slate-300 bg-white px-3 text-sm outline-none focus:border-red-600" />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600">Message</span>
              <textarea
                rows="5"
                defaultValue={`I am interested in ${page.title}.`}
                className="mt-2 w-full resize-none border border-slate-300 bg-white px-3 py-3 text-sm leading-6 outline-none focus:border-red-600"
              />
            </label>
            <button
              type="button"
              className="w-full bg-red-600 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-red-700"
            >
              Submit Enquiry
            </button>
          </form>
        </aside>
      </section>
    </main>
  );
}
