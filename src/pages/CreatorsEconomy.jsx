import React from 'react';

const creatorStories = [
  {
    category: 'PLATFORMS',
    title: 'Creators Build Media Businesses as Brand Deals Mature Into Long-Term Partnerships',
    excerpt:
      'The creator economy is moving beyond one-off campaigns as founders, influencers, and niche publishers build repeatable revenue streams.',
    image: '/social.png',
  },
  {
    category: 'MONETIZATION',
    title: 'Subscriptions, Courses, and Communities Become the New Creator Stack',
    excerpt:
      'Independent creators are diversifying income with paid communities, learning products, and direct audience relationships.',
    image: '/media.jpeg',
  },
  {
    category: 'BRANDS',
    title: 'Why Companies Are Treating Creators Like Distribution Partners',
    excerpt:
      'Brands are leaning on creator-led storytelling to reach highly specific audiences with stronger trust and lower production overhead.',
    image: '/influ.png',
  },
  {
    category: 'AI TOOLS',
    title: 'AI Gives Small Creator Teams Studio-Scale Production Power',
    excerpt:
      'New tools are helping creators script, edit, translate, publish, and measure content faster across formats and markets.',
    image: '/m2.jpg',
  },
];

export default function CreatorsEconomy() {
  const [leadStory, ...sideStories] = creatorStories;

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
      <section className="border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
        <div className="mb-6 h-1 w-full bg-slate-950" />

        <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
              More
            </span>
            <h1 className="m-0 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              Creators Economy
            </h1>
          </div>
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-green-600">
            Creator Business
          </span>
        </div>

        <div className="mb-10 bg-slate-50 p-7 ring-1 ring-gray-200">
          <h2 className="m-0 max-w-4xl font-serif text-3xl font-extrabold leading-tight text-slate-950">
            The Business of Influence Moves From Viral Moments to Durable Companies
          </h2>
          <p className="mt-4 max-w-4xl font-sans text-base leading-7 text-slate-600">
            New Times tracks how creators, platforms, agencies, brands, and tools are changing media, marketing, commerce, and entrepreneurship.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,1fr)]">
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
