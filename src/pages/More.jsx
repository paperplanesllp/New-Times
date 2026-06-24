import React from 'react';
import { Link } from 'react-router-dom';

const newsletters = [
  {
    title: 'Data Dive',
    frequency: 'Weekly',
    description: 'Facts, data & multimedia stories behind the headlines',
    art: 'data',
  },
  {
    title: 'Inside AI',
    frequency: 'Weekly',
    description: 'Inside the future of AI',
    art: 'ai',
  },
  {
    title: 'Weekly Digest',
    frequency: 'Weekly',
    description: 'This Week on New-Times',
    art: 'digest',
  },
];

const dispatches = [
  {
    date: 'Jun 22, 2026',
    title: 'Treaty of Versailles yet to put a stop',
  },
  {
    date: 'Jun 19, 2026',
    title: 'Amidst war and truce',
  },
];

const latestNews = [
  'Markets open higher as rate-cut hopes lift banking and IT stocks',
  'India Inc keeps capex plans steady despite global uncertainty',
  'Startups sharpen focus on profitability as funding cycles mature',
];

function NewsletterArt({ type }) {
  if (type === 'ai') {
    return (
      <div className="relative flex h-full min-h-[150px] overflow-hidden bg-white">
        <div className="flex h-full w-[58px] items-center justify-center bg-white text-[44px] font-black uppercase leading-none tracking-[0.04em] text-sky-500 [writing-mode:vertical-rl]">
          inside
        </div>
        <div className="relative flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_82%_18%,#dff4ff_0_11%,transparent_12%),linear-gradient(135deg,#ffffff_0%,#eff9ff_52%,#ffffff_100%)]">
          <span className="font-sans text-[86px] font-black leading-none text-sky-500">ai</span>
          <span className="absolute left-[54%] top-[29%] h-9 w-9 rounded-full bg-rose-500" />
          <span className="absolute rotate-45 border right-4 top-3 h-7 w-7 border-sky-400 bg-sky-100" />
          <span className="absolute w-20 h-20 border rounded-full bottom-4 right-6 border-sky-300" />
          <span className="absolute right-12 top-12 h-px w-24 rotate-[-34deg] bg-sky-300" />
        </div>
      </div>
    );
  }

  if (type === 'digest') {
    return (
      <div className="relative flex h-full min-h-[150px] items-center justify-center overflow-hidden bg-[#758d97]">
        <span className="absolute right-0 top-0 h-24 w-24 bg-yellow-400 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
        <span className="absolute bottom-0 left-0 h-20 w-36 bg-rose-200 [clip-path:polygon(0_55%,100%_0,100%_100%,0_100%)]" />
        <span className="absolute right-6 bottom-2 h-[72px] w-40 bg-slate-300 [clip-path:polygon(0_30%,100%_0,90%_100%,8%_86%)]" />
        <div className="relative rotate-[-6deg] bg-white px-5 py-3 shadow-xl">
          <span className="absolute w-3 border-2 border-r-0 border-red-500 rounded-l-full h-7 -left-2 top-3" />
          <p className="font-sans text-[27px] font-black uppercase leading-[0.92] text-black">
            Weekly
            <br />
            Digest
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-0 overflow-hidden bg-white">
      <div className="absolute right-0 top-0 h-full w-[46%] bg-[radial-gradient(circle,#5fa8ff_1px,transparent_1.5px)] bg-[length:10px_10px] opacity-70" />
      <div className="absolute left-[58px] top-[16px] h-[82px] w-[82px] rounded-full border-[9px] border-sky-300" />
      <div className="absolute left-[70px] top-[30px] h-[54px] w-[54px] rounded-full border-[6px] border-[#1f6da8]" />
      <span className="absolute left-[57px] top-[86px] h-[50px] w-[14px] rotate-45 rounded-full bg-[#1f6da8]" />
      <svg className="absolute left-[76px] top-[47px] h-10 w-16" viewBox="0 0 110 56" fill="none">
        <path d="M2 31L23 47L45 16L69 38L94 12" stroke="#1f6da8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        {[2, 23, 45, 69, 94].map((x, index) => (
          <circle key={x} cx={x} cy={[31, 47, 16, 38, 12][index]} r="5" fill="white" stroke="#1f6da8" strokeWidth="3" />
        ))}
      </svg>
      <p className="absolute bottom-[48px] left-[14px] z-10 font-sans text-[31px] font-black uppercase leading-none tracking-normal text-[#1e4b7a]">
        Data<span className="text-sky-500">Dive</span>
      </p>
      <span className="absolute bottom-0 left-0 h-2.5 w-full bg-[#1e4b7a]" />
      <span className="absolute bottom-0 left-[70px] h-[60px] w-[22px] bg-[#1e4b7a]" />
      <span className="absolute bottom-0 left-[100px] h-[82px] w-[22px] bg-sky-400" />
      <span className="absolute bottom-0 left-[130px] h-[48px] w-[22px] bg-[#1e4b7a]" />
    </div>
  );
}

function AdPanel() {
  return (
    <aside className="hidden pl-3 border-l border-slate-300 lg:block">
      <div className="border-t border-slate-300 pt-2 text-center text-[9px] uppercase tracking-wide text-slate-500">
        Advertisement
      </div>
      <div className="mt-2 flex aspect-[4/3.35] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_0_0,#6d19d8_0_18%,transparent_19%),radial-gradient(circle_at_100%_100%,#6d19d8_0_20%,transparent_21%),linear-gradient(135deg,#fff_0%,#fbfbff_100%)] p-7 text-center">
        <div>
          <p className="text-[13px] font-bold text-slate-600">Watch The Special Coverage</p>
          <p className="mt-4 text-[28px] font-black leading-tight text-blue-700">
            27th June | 3pm
          </p>
          <p className="mt-4 text-[14px] font-bold text-slate-600">Only On Newtimes TV18</p>
        </div>
      </div>
      <div className="mt-6 overflow-hidden bg-white border border-slate-200">
        <div className="grid h-40 grid-cols-4 gap-1 p-1 bg-black opacity-90">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(135deg,#1f2937,#111827_45%,#9f1239)]"
            />
          ))}
        </div>
        <div className="relative px-6 pb-5 -mt-12 bg-white pt-7">
          <div className="absolute flex items-center justify-center w-20 h-20 font-serif text-2xl font-bold text-white bg-black rounded-full -top-10 left-6 ring-4 ring-white">
          NT  
          </div>
          <div className="ml-24">
            <p className="text-2xl font-black text-black">
              New-Times <span className="text-base text-blue-600">●</span>
            </p>
            <p className="mt-1 text-sm text-black">600K followers</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex min-h-[560px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_0_0,#6d19d8_0_22%,transparent_23%),radial-gradient(circle_at_100%_100%,#6d19d8_0_18%,transparent_19%),linear-gradient(180deg,#ffffff,#fbfbff)] px-8 text-center">
        <p className="text-[34px] font-black leading-tight text-blue-700">
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

export default function More() {
  return (
    <main className="bg-white text-slate-950">
      <div className="mx-auto grid max-w-[1360px] gap-7 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-8">
        <section className="min-w-0">
          <div className="mx-auto max-w-[950px]">
            <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-5 py-2 font-serif text-[18px] text-amber-500">
              NewTimes
            </span>
            <h1 className="mt-10 max-w-[850px] font-serif text-[50px] font-bold leading-[1.08] tracking-tight text-[#333] sm:text-[60px]">
              Curated perspectives,
              <span className="block text-amber-500">delivered to your inbox.</span>
            </h1>
            <p className="mt-10 max-w-[720px] font-serif text-[24px] leading-snug text-slate-400">
              Choose from our editorially crafted newsletters across business, markets, and ideas.
            </p>

            <div className="grid justify-center gap-6 mt-5 sm:grid-cols-2 lg:grid-cols-3">
              {newsletters.map((newsletter, index) => (
                <article
                  key={newsletter.title}
                  className={`flex h-[410px] w-full max-w-[296px] flex-col overflow-hidden rounded-[12px] border bg-white ${
                    index === 0 ? 'border-amber-400' : 'border-slate-200'
                  }`}
                >
                  <div className="h-[200px] shrink-0">
                    <NewsletterArt type={newsletter.art} />
                  </div>
                  <div className="flex flex-1 flex-col px-3.5 py-4 border-t border-slate-200">
                    <p className="font-serif text-[15px] uppercase tracking-[0.15em] text-slate-600">
                      {newsletter.frequency}
                    </p>
                    <h2 className="mt-3 font-serif text-[24px] font-normal leading-tight text-slate-950">
                      {newsletter.title}
                    </h2>
                    <p className="mt-3 font-serif text-[18px] leading-snug text-slate-600">
                      {newsletter.description}
                    </p>
                    <button
                      type="button"
                      className="mt-auto w-fit rounded-[6px] bg-amber-400 px-4 py-2 font-serif text-[15px] font-bold text-black transition hover:bg-amber-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <section className="mt-10 rounded-[18px] border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="font-serif text-[29px] font-bold leading-tight text-slate-950">
                Weekly Digest <span className="text-amber-500">&rsaquo;</span> Dispatches
              </h2>
              <p className="mt-1 font-serif text-[17px] text-slate-400">10 editions available</p>

              <div className="relative mt-8 overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 z-10 h-32 pointer-events-none bg-gradient-to-t from-white via-white/90 to-transparent" />
                <div className="grid gap-6 md:grid-cols-2">
                  {dispatches.map((dispatch) => (
                    <article key={dispatch.date} className="relative overflow-hidden rounded-[8px] bg-white p-5 opacity-35 shadow-lg">
                      <div className="flex items-center gap-2 font-serif text-[15px] text-slate-950">
                        <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="5" width="18" height="16" rx="2" />
                          <path d="M8 3v4M16 3v4M3 10h18" />
                        </svg>
                        {dispatch.date}
                      </div>
                      <div className="h-48 mt-3">
                        <NewsletterArt type="data" />
                      </div>
                      <h3 className="mt-4 font-serif text-2xl font-bold text-slate-950">
                        {dispatch.title}
                      </h3>
                    </article>
                  ))}
                </div>
                <div className="relative z-20 flex justify-center pt-7">
                  <button type="button" className="bg-red-600 px-9 py-3 font-serif text-[22px] font-bold text-white transition hover:bg-red-700">
                    Login to view
                  </button>
                </div>
              </div>
            </section>

            <nav className="mt-12 px-5 text-[18px]" aria-label="Breadcrumb">
              <Link to="/" className="font-bold text-black no-underline hover:text-red-600">
                Home
              </Link>
              <span className="mx-1 text-slate-500">/</span>
              <span>NewsL-etters</span>
            </nav>

            <section className="py-5 mt-7 border-y border-slate-300">
              <h2 className="text-2xl font-black tracking-wide text-center uppercase text-slate-800">
                Latest News
              </h2>
              <div className="grid gap-4 mt-6 md:grid-cols-3">
                {latestNews.map((item) => (
                  <article key={item} className="pt-4 border-t border-slate-200">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-red-600">New Times</p>
                    <h3 className="mt-2 font-serif text-xl font-bold leading-tight text-slate-950">
                      {item}
                    </h3>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <AdPanel />
      </div>
    </main>
  );
}
