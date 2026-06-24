import React from 'react';

const spotlightStories = [
  {
    category: 'AI INFRASTRUCTURE',
    title: "Meta's India Compute Ambition Puts Data Centers Back in the Spotlight",
    excerpt:
      "As global AI platforms chase massive compute capacity, India is becoming a strategic market for data center buildouts, energy planning, and enterprise AI deployment.",
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85',
  },
  {
    category: 'SOVEREIGN AI',
    title: "Sarvam AI's India-First Models Signal a New Enterprise Software Race",
    excerpt:
      'Indian-language models, voice interfaces, and local deployment needs are creating a new market for AI products built around domestic business workflows.',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=900&q=85',
  },
  {
    category: 'GLOBAL PARTNERSHIPS',
    title: 'India Courts Open-Weight AI Partnerships as Global Labs Look East',
    excerpt:
      'Conversations with global AI companies are shifting from model access to deeper partnerships around trust, open systems, compute, and local adoption.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85',
  },
  {
    category: 'REAL ESTATE',
    title: 'AI Becomes the New Growth Engine for Commercial Real Estate',
    excerpt:
      'Developers are using predictive analytics, automation, and digital sales systems to improve project planning, tenant targeting, and property management.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
  },
  {
    category: 'CREATOR ECONOMY',
    title: "India's Creator Economy Gets an AI Productivity Layer",
    excerpt:
      'AI tools are changing how creators produce, localize, distribute, and monetize content, turning digital media into a more scalable business category.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=85',
  },
  {
    category: 'BOARDROOM STRATEGY',
    title: 'Why CEOs Are Treating AI as Operating Infrastructure, Not a Side Project',
    excerpt:
      'The next phase of AI adoption is moving from pilots to budgets, governance, vendor selection, and measurable productivity gains across business units.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85',
  },
];

export default function NTSpotlight() {
  const [leadStory, ...sideStories] = spotlightStories;

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
        <div className="mb-6 h-1 w-full bg-slate-950" />

        <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
              NT Spotlight
            </span>
            <h1 className="m-0 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              Artificial Intelligence
            </h1>
          </div>
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-green-600">
            Business Focus
          </span>
        </div>

        <div className="mb-10 bg-slate-50 p-7 ring-1 ring-gray-200">
          <h2 className="m-0 max-w-4xl font-serif text-3xl font-extrabold leading-tight text-slate-950">
            India's AI Business Wave Moves From Promise to Operating Plans
          </h2>
          <p className="mt-4 max-w-4xl font-sans text-base leading-7 text-slate-600">
            New compute investments, sovereign models, enterprise pilots, and sector-specific use cases are turning artificial intelligence into a boardroom priority across Indian business.
          </p>
          <p className="mt-4 max-w-4xl font-sans text-sm font-semibold leading-6 text-slate-500">
            Based on recent developments across AI infrastructure, India-first models, global AI partnerships, and enterprise adoption.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
          <article>
            <img className="mb-5 h-[380px] w-full object-cover" src={leadStory.image} alt={leadStory.title} />
            <span className="mb-2 block font-sans text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
              {leadStory.category}
            </span>
            <h2 className="m-0 font-serif text-3xl font-bold leading-tight text-slate-950">
              {leadStory.title}
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-7 text-slate-600">{leadStory.excerpt}</p>
          </article>

          <div className="space-y-6 border-gray-200 lg:border-l lg:pl-6">
            {sideStories.map((story) => (
              <article key={story.title} className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-gray-100 pb-5 last:border-b-0">
                <img className="h-24 w-24 object-cover" src={story.image} alt={story.title} />
                <div>
                  <span className="mb-1 block font-sans text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                    {story.category}
                  </span>
                  <h3 className="m-0 font-serif text-lg font-bold leading-tight text-slate-950">{story.title}</h3>
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
