import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GetFeaturedAboutAd({ onClose }) {
  return (
    <aside className="sticky top-6 hidden h-fit overflow-hidden border border-black bg-black text-white shadow-[0_22px_60px_rgba(0,0,0,0.22)] lg:block">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-2 top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/35 bg-black text-lg leading-none text-white transition hover:bg-white hover:text-black"
        aria-label="Close get featured advertisement"
      >
        &times;
      </button>

      <Link
        to="/partner/get-featured"
        className="flex min-h-[650px] w-[178px] flex-col items-center justify-between px-4 pb-7 pt-10 text-center no-underline"
        aria-label="Apply to get featured in New Times"
      >
        <div>
          <p className="text-[23px] font-black uppercase leading-[1.08] tracking-[0.03em] text-white">
            Get
            <br />
            Featured.
          </p>
          <p className="mt-4 text-[16px] font-black uppercase leading-snug tracking-[0.1em] text-white/90">
            Unlock
            <br />
            Your Story
          </p>
        </div>

        <div className="relative my-8 h-[245px] w-full">
          <div className="absolute left-1 top-12 h-[170px] w-[108px] rotate-[-11deg] overflow-hidden border border-white/25 bg-zinc-950 shadow-xl">
            <img src="/magazine.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute right-1 top-7 h-[185px] w-[116px] rotate-[8deg] overflow-hidden border border-white/25 bg-zinc-950 shadow-xl">
            <img src="/magazine.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute left-1/2 top-16 h-[180px] w-[122px] -translate-x-1/2 rotate-[-2deg] overflow-hidden border border-white/55 bg-zinc-950 shadow-2xl">
            <img src="/magazine.png" alt="New Times magazine cover" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="w-full">
          <span className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-4 py-4 text-[13px] font-black uppercase leading-none tracking-[0.04em] text-white transition hover:bg-blue-600">
            Apply Now
          </span>
          <p className="mt-8 text-[34px] font-black leading-[0.9] tracking-tight text-white">
            New
            <br />
            Times
          </p>
        </div>
      </Link>
    </aside>
  );
}

export default function About() {
  const [showFeaturedAd, setShowFeaturedAd] = useState(true);

  return (
    <main className="min-h-[80vh] bg-white px-4 py-12 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_178px]">
      <section className="max-w-5xl">
        <div className="pb-8 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
            About
          </span>
          <div className="mt-4 inline-grid grid-cols-[auto_auto] items-baseline">
            <h1 className="contents text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              <span className="pr-3">About</span>
              <span>New Times</span>
            </h1>
            <p className="col-start-2 mt-1 font-semibold text-slate-950">
              New Times India &mdash; Stories That Influence.
            </p>
          </div>
          <p className="max-w-4xl mt-5 text-lg leading-8 text-slate-700">
            New Times India is a digital-first business publication dedicated to documenting the people,
            ideas, and innovations shaping the future of business.
          </p>
        </div>

        <div className="mt-10 space-y-5 text-base leading-8 text-slate-700">
          <p>
            We bring together stories of founders, startups, business leaders, brands, innovators, and
            creators through credible editorial content, in-depth features, interviews, industry insights,
            and thought leadership. Our platform goes beyond reporting news, we spotlight the journeys,
            achievements, and perspectives that inspire the next generation of entrepreneurs and
            professionals.
          </p>
          <p>
            As the creator economy continues to redefine influence and business, New Times also serves
            as a platform for creators who are building meaningful brands, communities, and businesses.
            Through curated stories, cover features, business recognitions, leadership articles, startup
            showcases, and exclusive industry lists, we celebrate individuals and organizations creating
            lasting impact.
          </p>
          <p>
            At New Times India, we believe every successful venture begins with a story. Our mission is
            to ensure those stories are told with credibility, purpose, and influence.
          </p>
        </div>

        <div className="grid gap-6 mt-12">
          <article className="p-6 bg-white border border-slate-200 sm:p-8">
            <h2 className="text-3xl font-bold text-slate-950">Vision</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              To become India's most trusted digital business publication, empowering entrepreneurs,
              startups, businesses, business leaders, and creators through impactful storytelling,
              credible journalism, and meaningful recognition.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We envision a platform where innovation is celebrated, leadership is recognized, and
              business success inspires future generations.
            </p>
          </article>

          <article className="p-6 bg-white border border-slate-200 sm:p-8">
            <h2 className="text-3xl font-bold text-slate-950">Mission</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Our mission is to deliver credible, high-quality business journalism that informs, inspires,
              and connects the entrepreneurial ecosystem. Through insightful stories, founder interviews,
              startup spotlights, leadership features, creator economy coverage, and industry insights,
              we aim to provide meaningful visibility for businesses, entrepreneurs, creators, and
              innovators while upholding strong editorial standards and promoting innovation, leadership,
              and sustainable growth.
            </p>
          </article>

          <article className="p-6 bg-white border border-slate-200 sm:p-8">
            <h2 className="text-3xl font-bold text-slate-950">Who Can Get Featured?</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              New Times India features founders, entrepreneurs, startups, business leaders, established
              brands, innovators, investors, industry experts, and creators who are driving meaningful
              impact in their fields. Whether you're building a business, leading an organization, creating
              influential content, launching innovative ideas, or contributing to the growth of the creator
              economy, our platform provides opportunities to share your story through interviews,
              business features, leadership articles, cover stories, startup spotlights, and editorial
              recognition.
            </p>
          </article>
        </div>
      </section>
      {showFeaturedAd && <GetFeaturedAboutAd onClose={() => setShowFeaturedAd(false)} />}
      </div>
    </main>
  );
}
