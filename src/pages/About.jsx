import React from 'react';

export default function About() {
  return (
    <main className="min-h-[80vh] bg-white px-4 py-12 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="border-b border-slate-200 pb-8">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-red-600">
            About
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            About New Times
          </h1>
          <p className="mt-5 max-w-4xl font-sans text-lg leading-8 text-slate-700">
            New Times India is a digital-first business publication dedicated to documenting the people,
            ideas, and innovations shaping the future of business.
          </p>
        </div>

        <div className="mt-10 space-y-5 font-sans text-base leading-8 text-slate-700">
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
          <p className="font-semibold text-slate-950">
            New Times India — Stories That Shape Business.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          <article className="border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-3xl font-bold text-slate-950">Vision</h2>
            <p className="mt-4 font-sans text-base leading-8 text-slate-700">
              To become India's most trusted digital business publication, empowering entrepreneurs,
              startups, businesses, business leaders, and creators through impactful storytelling,
              credible journalism, and meaningful recognition.
            </p>
            <p className="mt-4 font-sans text-base leading-8 text-slate-700">
              We envision a platform where innovation is celebrated, leadership is recognized, and
              business success inspires future generations.
            </p>
          </article>

          <article className="border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-3xl font-bold text-slate-950">Mission</h2>
            <p className="mt-4 font-sans text-base leading-8 text-slate-700">
              Our mission is to deliver credible, high-quality business journalism that informs, inspires,
              and connects the entrepreneurial ecosystem. Through insightful stories, founder interviews,
              startup spotlights, leadership features, creator economy coverage, and industry insights,
              we aim to provide meaningful visibility for businesses, entrepreneurs, creators, and
              innovators while upholding strong editorial standards and promoting innovation, leadership,
              and sustainable growth.
            </p>
          </article>

          <article className="border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-3xl font-bold text-slate-950">Who Can Get Featured?</h2>
            <p className="mt-4 font-sans text-base leading-8 text-slate-700">
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
    </main>
  );
}
