import React from 'react';

const tabs = ['All', 'Articles', 'Videos', 'Podcasts', 'Blogs'];

const stories = [
  {
    title: "'My goal is to change the industry perception so that people respect animation'",
    author: 'Benu Joshi Routh',
    tag: 'Interview',
    art: 'animation',
  },
  {
    title: 'Our fastest-growing category is water: Ashni and Avni Biyani of Foodstories',
    author: 'Pankti Mehta Kadakia, Kathakali Chanda',
    tag: 'Interview',
    art: 'market',
  },
  {
    title: 'Books are literally finding a life of their own: Sonali Bendre',
    author: 'Kunal Purandare',
    tag: 'Interview',
    art: 'gramophone',
  },
  {
    title: 'A Turner masterpiece comes home',
    author: 'Siddhant Konduskar',
    art: 'painting',
  },
  {
    title: "Shaan's second act after Barrie",
    author: 'Samidha Jain',
    tag: 'Interview',
    art: 'video',
  },
  {
    title: 'The fragile silence of old masters',
    author: 'Jasodhara Banerjee',
    art: 'portrait',
  },
  {
    title: 'Good times give rise to bad times and bad times to good: Lloyd Blankfein',
    author: 'Jasodhara Banerjee',
    tag: 'Interview',
    art: 'banker',
  },
  {
    title: 'Isha Ambani to Karan Johar: Couture meets craft at the Met Gala 2026',
    author:'Samidha Jain',
    tag: 'In Photos',
    tagPink: true,
    art: 'fashion',
  },
  {
    title: 'Know your art: Shiva drinking world poison',
    author: 'Jasodhara Banerjee',
    art: 'shiva',
    label: 'NT list',
  },
];

function TabBar() {
  return (
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
  );
}

function StoryTag({ children, pink = false }) {
  return (
    <span className={`ml-2 inline-flex px-3 py-1 align-middle font-sans text-[14px] font-bold leading-none text-white ${pink ? 'bg-pink-600' : 'bg-red-600'}`}>
      {children}
    </span>
  );
}

function LeadArt() {
  return (
    <div className="relative h-[356px] overflow-hidden border-l-[13px] border-black bg-[#d9c68e]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#efe6d1,#c1ad78_48%,#eadbb8)]" />
      <div className="absolute left-8 top-10 h-[150px] w-[74px] rounded-full bg-[#1f2937]" />
      <div className="absolute left-14 top-28 h-[118px] w-[70px] rounded-t-full bg-[#c2410c]" />
      <div className="absolute bottom-9 left-[150px] h-[118px] w-[96px] rounded-t-full bg-[#7c2d12]" />
      <div className="absolute bottom-12 left-[248px] h-[140px] w-[94px] rounded-t-full bg-[#166534]" />
      <div className="absolute bottom-9 left-[350px] h-[126px] w-[90px] rounded-t-full bg-[#0f766e]" />
      <div className="absolute right-14 top-9 h-[190px] w-[62px] rounded-full bg-[#6b4f2a]" />
      <div className="absolute right-28 top-40 h-12 w-36 rounded-full bg-[#c8b17a]" />
      <div className="absolute bottom-0 left-0 h-9 w-full bg-[#d7bd76]/70" />
    </div>
  );
}

function ArtCard({ type }) {
  const backgrounds = {
    animation: 'linear-gradient(135deg,#bfe6ff,#ffffff 52%,#b6e0f8)',
    market: 'linear-gradient(135deg,#ffffff,#f6e9dc 55%,#e5e7eb)',
    gramophone: 'linear-gradient(135deg,#1e3a8a,#83c5e8)',
    painting: 'linear-gradient(180deg,#030712 0 45%,#a08967 45% 100%)',
    video: 'linear-gradient(90deg,#f5f5f4 0 45%,#ffffff 45% 100%)',
    portrait: 'linear-gradient(135deg,#f8fafc,#0ea5e9)',
    banker: 'linear-gradient(135deg,#15321f,#fef3c7)',
    fashion: 'linear-gradient(90deg,#111827 0 8%,#f8fafc 8% 50%,#e9d5ff 50% 100%)',
    shiva: 'linear-gradient(135deg,#8b4513,#f59e0b,#111827)',
  };

  if (type === 'video') {
    return (
      <div className="relative h-[224px] overflow-hidden" style={{ background: backgrounds[type] }}>
        <div className="absolute bottom-0 left-10 h-[172px] w-[92px] rounded-t-full bg-[#d4a17d]" />
        <div className="absolute bottom-20 left-[118px] h-0 w-0 border-y-[22px] border-l-[34px] border-y-transparent border-l-white" />
        <p className="absolute right-4 top-6 font-sans text-[45px] font-black leading-none text-red-600">SHAAN</p>
        <p className="absolute right-5 top-20 max-w-[160px] font-sans text-[18px] font-black leading-tight text-black">
          PUTTING OUT A SONG ISN&apos;T ENOUGH ANYMORE
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[224px] overflow-hidden" style={{ background: backgrounds[type] }}>
      {type === 'animation' && (
        <>
          <div className="absolute bg-green-500 rounded-full left-12 top-8 h-28 w-28" />
          <div className="absolute left-24 bottom-0 h-[168px] w-[108px] rounded-t-full bg-[#c99a7a]" />
          <div className="absolute right-8 top-10 h-24 w-20 rounded-full bg-[#f2c27d]" />
        </>
      )}
      {type === 'market' && (
        <>
          <div className="absolute left-20 bottom-0 h-[178px] w-[82px] rounded-t-full bg-[#c58968]" />
          <div className="absolute right-20 bottom-0 h-[158px] w-[80px] rounded-t-full bg-[#d9a886]" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-[#d6b488]/70" />
        </>
      )}
      {type === 'gramophone' && (
        <>
          <div className="absolute bottom-0 right-16 h-[150px] w-[112px] rounded-t-full bg-[#c08457]" />
          <div className="absolute left-14 top-9 h-24 w-24 rounded-full border-[18px] border-[#9a3412]" />
        </>
      )}
      {['banker', 'fashion'].includes(type) && (
        <>
          <div className="absolute left-1/2 bottom-0 h-[176px] w-[118px] -translate-x-1/2 rounded-t-full bg-[#d7a07a]" />
          <div className="absolute left-1/2 top-8 h-16 w-28 -translate-x-1/2 rounded-t-full bg-[#1f2937]" />
        </>
      )}
      {['painting', 'portrait', 'shiva'].includes(type) && (
        <div className="absolute inset-8 rounded-[2px] bg-white/20 shadow-inner" />
      )}
      {type === 'fashion' && (
        <span className="absolute border-4 border-white rounded-sm bottom-5 left-5 h-9 w-9 before:absolute before:left-1 before:top-1 before:h-4 before:w-4 before:border-l-4 before:border-t-4 before:border-white" />
      )}
    </div>
  );
}

function RightRail() {
  const ranked = [
    { title: "Tamannaah Bhatia's affair to remember", author: 'Kunal Purandare', rank: '#1' },
    { title: 'How restaurateur Aditi Dugar began again', author: 'New-Times Reporter', rank: '#2' },
  ];

  return (
    <aside className="hidden pl-3 border-l border-slate-300 lg:block">
      <div className="border-t border-slate-300 pt-2 text-center font-sans text-[9px] uppercase tracking-wide text-slate-500">
        Advertisement
      </div>
      <div className="mt-2 flex h-[314px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#f6e7c7,#fff7ed_45%,#d2a159)] px-7 text-center">
        <p className="font-sans text-[34px] font-black leading-tight text-[#a16207]">
          Leadership,
          <br />
          Legacy & One
          <br />
          Defining Evening
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

      <div className="pt-8 mt-4 border-t border-slate-800">
        {ranked.map((item, index) => (
          <article key={item.title} className="pb-8 border-b border-slate-300 last:border-b-0">
            <div className="relative h-[250px] overflow-hidden bg-[linear-gradient(135deg,#93c5fd,#e0f2fe)]">
              <div className="absolute bottom-0 left-1/2 h-[190px] w-[120px] -translate-x-1/2 rounded-t-full bg-[#d7a07a]" />
              <span className="absolute right-3 top-3 rounded-[8px] bg-red-600 px-3 py-1 font-sans text-[17px] font-black text-white">
                {item.rank}
              </span>
            </div>
            <h3 className="mt-3 font-serif text-[21px] font-bold leading-snug text-black">
              {item.title}
            </h3>
            <p className="mt-4 font-serif text-[15px] text-slate-600">By {item.author}</p>
            {index === 0 && <div className="mt-6" />}
          </article>
        ))}
      </div>
    </aside>
  );
}

export default function Life() {
  return (
    <main className="text-black bg-white">
      <div className="mx-auto grid max-w-[1360px] gap-3 px-1 py-[50px] lg:grid-cols-[minmax(0,1fr)_390px]">
        <section className="min-w-0 overflow-hidden">
          <h1 className="font-serif text-[32px] font-bold leading-tight text-black">Life</h1>
          <TabBar />

          <article className="mt-[35px] grid gap-5 md:grid-cols-[51%_1fr]">
            <LeadArt />
            <div className="pt-1">
              <h2 className="max-w-[470px] font-serif text-[30px] font-bold leading-[1.18] text-black">
                The story teller by Amrita Sher-Gil
              </h2>
              <p className="mt-4 max-w-[520px] font-serif text-[22px] leading-[1.28] text-black">
                The painting represents Sher-Gil&apos;s unique visual style that blended her formal European training with a deep engagement with Indian subjects and sensibilities
              </p>
              <p className="mt-4 font-serif text-[18px] text-black">By Jasodhara Banerjee</p>
            </div>
          </article>

          <div className="mt-[50px] grid gap-x-5 gap-y-[52px] sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title} className="relative">
                <ArtCard type={story.art} />
                {story.label && (
                  <span className="absolute right-6 top-[192px] bg-black px-3 py-1 font-sans text-[15px] text-white">
                    {story.label}
                  </span>
                )}
                <h2 className="mt-2 font-serif text-[23px] font-bold leading-[1.25] text-black">
                  {story.title}
                </h2>
                <p className="mt-3 font-serif text-[16px] leading-snug text-black">
                  By {story.author}
                  {story.tag && <StoryTag pink={story.tagPink}>{story.tag}</StoryTag>}
                </p>
              </article>
            ))}
          </div>

          <nav className="mt-[58px] flex justify-center" aria-label="Pagination">
            <div className="flex items-center gap-4 rounded-full bg-slate-100 px-6 py-3 font-sans text-[18px] font-bold text-slate-500">
              <button type="button" className="flex items-center justify-center w-10 h-10 text-2xl bg-white rounded-full text-slate-500">‹</button>
              <button type="button" className="flex items-center justify-center w-10 h-10 text-white bg-red-600 rounded-full">1</button>
              {[2, 3, 4, 5].map((page) => (
                <button key={page} type="button" className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                  {page}
                </button>
              ))}
              <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full">...</span>
              <button type="button" className="flex items-center justify-center w-12 h-10 bg-white rounded-full">100</button>
              <button type="button" className="flex items-center justify-center w-10 h-10 text-2xl bg-white rounded-full text-slate-500">›</button>
            </div>
          </nav>
        </section>

        <RightRail />
      </div>
    </main>
  );
}
