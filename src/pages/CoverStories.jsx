import React from 'react';

const tabs = ['All', 'Articles', 'Videos', 'Podcasts', 'Blogs'];

const stories = [
  {
    title: "Beyond Ozempic: How Indian startups are building around GLP-1 drugs",
    author: 'Payal Ganguly',
    theme: 'green',
  },
  {
    title: "From reels to reality: How influencers are driving India's GLP-1 trend",
    author: 'Payal Ganguly, Sarthak Choudhury, Naini Thaker',
    theme: 'mint',
    label: 'NT List',
  },
  {
    title: "'Magic pill' moment: How weight-loss drugs are changing India",
    author: 'Naini Thaker',
    theme: 'purple',
  },
];

function CoverArt({ theme = 'blue', large = false }) {
  const colors = {
    blue: ['#114d5a', '#d9eef2', '#1e293b'],
    green: ['#61b89b', '#f0fbf3', '#facc15'],
    mint: ['#87d8c5', '#f4fff8', '#fbbf24'],
    purple: ['#312e81', '#fde68a', '#7c3aed'],
  }[theme];

  return (
    <div
      className={`relative overflow-hidden ${large ? 'h-[356px]' : 'h-[192px]'}`}
      style={{
        background: `linear-gradient(90deg, ${colors[0]} 0 22%, ${colors[1]} 22% 78%, ${colors[0]} 78% 100%)`,
      }}
    >
      <div className={`absolute left-1/2 top-0 -translate-x-1/2 bg-white shadow-lg ${large ? 'h-full w-[268px]' : 'h-full w-[170px]'}`}>
        <span className="absolute right-3 top-1 bg-red-600 px-1.5 py-0.5 font-sans text-[7px] font-black uppercase text-white">
          Daily Cover
        </span>
        <p className={`absolute left-1/2 top-6 -translate-x-1/2 font-serif font-black leading-none text-white [text-shadow:0_2px_2px_rgba(0,0,0,.45)] ${large ? 'text-[58px]' : 'text-[34px]'}`}>
          NewTimes
        </p>
        <div
          className={`absolute left-1/2 overflow-hidden rounded-t-full bg-[#d7b08a] ${large ? 'bottom-[86px] h-[150px] w-[132px] -translate-x-1/2' : 'bottom-[48px] h-[88px] w-[78px] -translate-x-1/2'}`}
        >
          <span className="absolute left-0 top-0 h-8 w-full bg-[#3b2a1a]" />
          <span className="absolute left-1/2 top-[43%] h-1.5 w-1.5 -translate-x-7 rounded-full bg-black" />
          <span className="absolute left-1/2 top-[43%] h-1.5 w-1.5 translate-x-5 rounded-full bg-black" />
          <span className="absolute left-1/2 top-[57%] h-1 w-10 -translate-x-1/2 rounded-full bg-[#7f1d1d]" />
        </div>
        <p className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif font-normal uppercase tracking-[0.03em] text-white [text-shadow:0_2px_2px_rgba(0,0,0,.55)] ${large ? 'text-[44px]' : 'text-[22px]'}`}>
          {large ? 'Cook Out' : 'Cover'}
        </p>
      </div>
      {large && <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_28%,rgba(250,204,21,.75)_0_8%,transparent_14%)]" />}
    </div>
  );
}

function AdRail() {
  return (
    <aside className="hidden pl-3 border-l border-slate-300 lg:block">
      <div className="border-t border-slate-300 pt-2 text-center font-sans text-[9px] uppercase tracking-wide text-slate-500">
        Advertisement
      </div>
      <div className="mt-2 flex h-[314px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_45%_100%,#ffffff_0_32%,transparent_33%),linear-gradient(135deg,#5b00b8_0_20%,#ffffff_21%_62%,#5b00b8_63%_100%)] px-7 text-center">
        <p className="font-sans text-[24px] font-black leading-tight text-blue-700">
          Watch The Special Coverage
          <br />
          <span className="text-[36px]">27th June | 3pm</span>
          <br />
          Only On TV18
        </p>
      </div>

      <div className="overflow-hidden bg-white border mt-7 border-slate-200">
        <div className="h-[148px] bg-[linear-gradient(135deg,#111827,#020617_45%,#7f1d1d)]" />
        <div className="relative rounded-t-[24px] bg-white px-4 pb-5 pt-5">
          <div className="absolute -top-6 left-4 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-black font-serif text-[22px] font-bold text-white ring-4 ring-white">
            NT
          </div>
          <div className="ml-[92px]">
            <p className="font-sans text-[25px] font-black text-black">
              New-Times <span className="text-blue-600">*</span>
            </p>
            <p className="font-sans text-[16px] text-black">575K followers</p>
          </div>
          <p className="mt-7 font-sans text-[15px] leading-snug text-black">
            New-Times - a business magazine from Network18 -...
          </p>
          <button type="button" className="mt-6 w-full rounded-[6px] bg-blue-600 py-3 font-sans text-[20px] font-bold text-white">
            Follow
          </button>
        </div>
      </div>

      <div className="mt-7 flex min-h-[560px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_0,#ffffff_0_26%,transparent_27%),linear-gradient(135deg,#5b00b8_0_18%,#ffffff_19%_100%)] px-7 text-center">
        <p className="font-sans text-[32px] font-black leading-tight text-blue-700">
          Where Market
          <br />
          Leaders Came
          <br />
          Together To
          <br />
          Decode Fixed
          <br />
          Income.
        </p>
      </div>
    </aside>
  );
}

export default function CoverStories() {
  return (
    <main className="text-black bg-white">
      <div className="mx-auto grid max-w-[1360px] gap-3 px-1 py-0 lg:grid-cols-[minmax(0,1fr)_390px]">
        <section className="min-w-0 overflow-hidden">
          <h1 className="font-serif text-[32px] font-bold leading-tight text-black">
            New-Times Cover Stories
          </h1>

          <div className="flex flex-wrap gap-8 mt-9">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`px-3 py-3 font-sans text-[18px] font-bold ${
                  index === 0 ? 'bg-red-600 text-white' : 'bg-slate-50 text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <article className="mt-[34px] grid gap-5 md:grid-cols-[51%_1fr]">
            <CoverArt large />
            <div className="pt-1">
              <h2 className="max-w-[470px] font-serif text-[30px] font-bold leading-[1.18] text-black">
                How Tim Cook turned Apple&apos;s $350 Billion into $4 Trillion
              </h2>
              <p className="mt-4 max-w-[520px] font-serif text-[22px] leading-[1.28] text-black">
                Fifteen years of operational discipline, not product genius, created the stock market&apos;s favourite returns machine. Under Cook, revenue rose 4x to $416 billion. A look at what led to this surge
              </p>
              <p className="mt-4 font-serif text-[18px] text-black">By New-Times Reporter</p>
            </div>
          </article>

          <div className="mt-[50px] grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title} className="relative">
                <CoverArt theme={story.theme} />
                {story.label && (
                  <span className="absolute right-3 top-[158px] bg-black px-3 py-1 font-sans text-[15px] text-white">
                    {story.label}
                  </span>
                )}
                <h2 className="mt-2 font-serif text-[23px] font-bold leading-[1.25] text-black">
                  {story.title}
                </h2>
                <p className="mt-4 font-serif text-[16px] leading-snug text-black">By {story.author}</p>
              </article>
            ))}
          </div>
        </section>

        <AdRail />
      </div>
    </main>
  );
}
