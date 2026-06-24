import React from 'react';

const featuredStory = {
  title: 'Where mind is without fear and head is held high',
  dek: 'And where the education system is struggling to answer questions raised by four students armed with modern tech tools',
  author: 'Himani Kothari',
};

const stories = [
  {
    title: 'Social Media',
    author: 'Samidha Jain',
    tag: true,
    art: 'beard',
  },
  {
    title: "Ryanair's Michael O'Leary: an outspoken industry advocate to IndiGo's new chief",
    author: 'Vasudha Mukherjee',
    art: 'suit',
  },
  {
    title: "IndiGo's Rahul Bhatia back in the cockpit",
    author: 'Himani Kothari',
    art: 'chair',
  },
  {
    title: 'Farhan Akhtar and the big Boong theory',
    author: 'Himani Kothari',
    art: 'pink',
  },
  {
    title: "How Meesho's Vidit Aatrey achieved scale by giving up command",
    author: 'Himani Kothari',
    art: 'blue',
  },
  {
    title: 'IndiGo CEO Pieter Elbers: Battling turbulence at the top',
    author: 'Himani Kothari',
    tag: true,
    art: 'plane',
  },
];

function Tag() {
  return (
    <span className="ml-2 inline-flex bg-[#0b8a00] px-3 py-1 align-middle font-sans text-[14px] font-bold leading-none text-white">
      Newsmaker
    </span>
  );
}

function FeaturedArt() {
  return (
    <div className="relative h-[353px] w-full overflow-hidden bg-[#f4eef8]">
      <div className="absolute left-1/2 top-4 h-[300px] w-[210px] -translate-x-1/2 rounded-[48%] bg-[radial-gradient(circle_at_50%_50%,#e6b6df_0_2px,transparent_3px),linear-gradient(180deg,#efe1f2,#f2e9f5)] bg-[length:12px_12px]" />
      <div className="absolute left-1/2 top-[82px] h-[190px] w-[126px] -translate-x-1/2 rounded-[18px] bg-[#49b6a8] shadow-[inset_0_0_0_8px_#d85b96]">
        <div className="absolute left-1/2 top-8 h-[96px] w-[96px] -translate-x-1/2 rounded-full bg-yellow-300 shadow-[inset_0_0_0_4px_#111]" />
        <p className="absolute left-1/2 top-[46px] -translate-x-1/2 font-serif text-[70px] font-black leading-none text-black">
          ?
        </p>
        <p className="absolute left-1/2 top-[118px] -translate-x-1/2 font-serif text-[46px] font-black leading-none text-black">
          ?
        </p>
      </div>
      {['CBSE', 'OSM', 'CJP', 'NEET', 'JEE', 'GEM2'].map((item, index) => (
        <span
          key={item}
          className="absolute font-sans text-[15px] font-black uppercase text-pink-500 [text-shadow:1px_1px_0_#0f766e]"
          style={{
            left: ['45%', '31%', '37%', '65%', '65%', '59%'][index],
            top: ['35px', '70px', '145px', '138px', '230px', '252px'][index],
          }}
        >
          {item}
        </span>
      ))}
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-9 w-2 origin-bottom rotate-[-22deg] bg-emerald-500 shadow-[0_0_0_1px_#075985]"
          style={{
            left: `${205 + index * 22}px`,
            top: `${244 + (index % 3) * 18}px`,
          }}
        />
      ))}
    </div>
  );
}

function PortraitArt({ type }) {
  if (type === 'plane') {
    return (
      <div className="relative h-[240px] overflow-hidden bg-[#e7eef4]">
        <div className="absolute inset-x-10 top-4 h-[170px] rounded-t-full border-[5px] border-blue-700" />
        <div className="absolute left-[46%] top-9 h-[94px] w-8 rounded-t-full border-4 border-blue-700" />
        <div className="absolute left-[29%] top-[84px] h-1.5 w-[150px] rotate-[-18deg] bg-blue-700" />
        <div className="absolute left-[32%] top-[86px] h-1.5 w-[150px] rotate-[18deg] bg-blue-700" />
        <div className="absolute bottom-0 right-16 h-[150px] w-[86px] rounded-t-full bg-[#1e293b]" />
        <div className="absolute right-[98px] top-[98px] h-12 w-12 rounded-full bg-[#c9956d]" />
        <div className="absolute right-[125px] top-[108px] h-3 w-12 -rotate-45 bg-[#c9956d]" />
      </div>
    );
  }

  const palette = {
    beard: ['#eef3f2', '#1f2937', '#d3987c'],
    suit: ['#f8dfd5', '#1e293b', '#e0a98c'],
    chair: ['#e3f2e8', '#d1d5db', '#be8a67'],
    pink: ['#f7e8f1', '#111827', '#c68a68'],
    blue: ['#e8f5fb', '#293241', '#d7a07a'],
  }[type];

  return (
    <div className="relative flex h-[240px] items-end justify-center overflow-hidden" style={{ backgroundColor: palette[0] }}>
      <div className="absolute bottom-8 h-[118px] w-[68px] rounded-t-[36px] bg-slate-800" style={{ backgroundColor: palette[1] }} />
      <div className="absolute bottom-[126px] h-[82px] w-[72px] rounded-[45%] bg-[#d7a07a]" style={{ backgroundColor: palette[2] }} />
      <div className="absolute bottom-[180px] h-10 w-[86px] rounded-t-[50%] bg-[#151515]" />
      <span className="absolute bottom-[154px] left-1/2 h-1.5 w-1.5 -translate-x-5 rounded-full bg-black" />
      <span className="absolute bottom-[154px] left-1/2 h-1.5 w-1.5 translate-x-4 rounded-full bg-black" />
      <span className="absolute bottom-[139px] h-1 w-8 rounded-full bg-[#7c2d12]" />
      <span className="absolute bottom-8 left-1/2 h-[92px] w-[16px] -translate-x-12 rotate-[-22deg] bg-[#8aa0a7]" />
      <span className="absolute bottom-8 left-1/2 h-[92px] w-[16px] translate-x-10 rotate-[22deg] bg-[#8aa0a7]" />
    </div>
  );
}

function AdPanel() {
  return (
    <aside className="hidden pl-3 border-l border-slate-300 lg:block">
      <div className="flex h-[216px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_100%,#ffffff_0_32%,transparent_33%),linear-gradient(135deg,#3f00a8_0_22%,#ffffff_23%_58%,#3f00a8_59%_100%)] px-7 text-center">
        <p className="font-sans text-[20px] font-black leading-tight text-blue-700">
          From Bond Markets To
          <br />
          Capital Formation, Hear
          <br />
          Their Views.
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
          <button type="button" className="mt-6 w-full rounded-[4px] bg-blue-600 py-3 font-sans text-[20px] font-bold text-white">
            Follow
          </button>
        </div>
      </div>

      <div className="mt-7 flex min-h-[560px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_38%_0,#ffffff_0_28%,transparent_29%),linear-gradient(135deg,#5b00b8_0_22%,#ffffff_23%_100%)] px-7 text-center">
        <p className="font-sans text-[29px] font-black leading-tight text-blue-700">
          INDIA
          <br />
          FIXED INCOME
          <br />
          SUMMIT
          <br />
          <br />
          From Bond
          <br />
          Markets To Capital
          <br />
          Formation, Hear
          <br />
          Their Views.
        </p>
      </div>
    </aside>
  );
}

export default function NewsMakers() {
  return (
    <main className="text-black bg-white">
      <div className="mx-auto grid max-w-[1360px] gap-3 px-0 py-0 lg:grid-cols-[minmax(0,1fr)_390px]">
        <section className="min-w-0">
          <article className="grid border-b border-slate-200 md:grid-cols-[49.5%_1fr]">
            <FeaturedArt />
            <div className="px-5 pt-0 pb-8">
              <h1 className="max-w-[470px] font-serif text-[30px] font-bold leading-[1.08] text-black">
                {featuredStory.title}
              </h1>
              <p className="mt-4 max-w-[490px] font-serif text-[20px] leading-[1.42] text-black">
                {featuredStory.dek}
              </p>
              <p className="mt-4 font-serif text-[16px] text-black">
                By {featuredStory.author}
                <Tag />
              </p>
            </div>
          </article>

          <div className="grid gap-x-5 gap-y-[84px] px-1 pt-[50px] sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title}>
                <PortraitArt type={story.art} />
                <h2 className="mt-2 font-serif text-[23px] font-bold leading-[1.25] text-black">
                  {story.title}
                </h2>
                <p className="mt-3 font-serif text-[16px] text-black">
                  By {story.author}
                  {story.tag && <Tag />}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-[86px] rounded-t-[12px] bg-slate-50 px-8 py-7">
            <h2 className="font-serif text-[28px] font-bold text-black">More From Newsmakers</h2>
          </div>
        </section>

        <AdPanel />
      </div>
    </main>
  );
}
