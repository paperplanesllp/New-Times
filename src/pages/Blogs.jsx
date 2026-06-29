import React from 'react';

const blogSections = [
  {
    title: 'TECHNOLOGY',
    imageTitle: '$48 Billion and Counting: Amazon bets its AI future on India',
    imageSubtitle:
      "How Andy Jassy's New Delhi meeting with PM Modi became the defining AI infrastructure announcement of the year",
    imageAuthor: 'New Times Tech Desk',
    imageExcerpt:
      "On June 25, Amazon CEO Andy Jassy met Prime Minister Narendra Modi in New Delhi and announced an additional $13 billion investment in India's AI and cloud infrastructure, lifting the company's total planned commitment in India to $48 billion through 2030. The funds expand AWS data centre capacity in Mumbai and Hyderabad, with a focus on custom AI chips, managed AI services, and developer tools. Amazon pledged to support more than 3.8 million jobs, enable $80 billion in cumulative e-commerce exports, and bring AI access to 15 million small businesses and 4 million government school students by 2030. The move follows similar commitments from Google and Microsoft, signalling India has become the defining battleground for global cloud and AI infrastructure dominance.",
    art: 'commerce',
    links: [
      {
        title: "India's Own ChatGPT Moment: Sarvam AI hits $1.5B, and the government may buy in",
        author: 'New Times Tech Desk',
        excerpt:
          "Sarvam AI, the Bengaluru startup founded by IIT Madras researchers Vivek Raghavan and Pratyush Kumar, became India's newest AI unicorn on June 15, raising $234 million in its Series B at a $1.5 billion valuation. HCLTech led with $150 million, acquiring just over 10% of the company. Reports later said the Indian government is in talks to convert its compute subsidies under the IndiaAI Mission into a 1-2% equity stake. Sarvam has built 30B and 105B-parameter models trained from scratch in India, open-sourced under Apache 2.0, supporting 22 Indian languages.",
      },
      {
        title: "India's AI Rulebook Takes Shape: Deepfake labels, accountability bills, and a pro-innovation stance",
        author: 'New Times Tech Desk',
        excerpt:
          'India is assembling its AI governance architecture through a deliberate techno-legal mosaic. MeitY notified amendments to intermediary rules introducing labelling obligations for AI-generated or synthetically generated information, including prominent marks, watermarks, user declarations, and automated systems to block harmful synthetic media. Healthcare frameworks such as SAHI and BODH, plus the AI (Ethics and Accountability) Bill, 2025, signal a safeguards-first approach without imposing a blanket ban.',
      },
    ],
  },
  {
    title: 'HEALTH',
    imageTitle: "Aarogya Setu 2.0 Launches Today: India's pandemic app is now a full national health gateway",
    imageAuthor: 'New Times Health Desk',
    imageExcerpt:
      "On June 29, 2026, Union Health Minister Jagat Prakash Nadda launched India's most ambitious digital health overhaul. Aarogya Setu 2.0 transitions from its pandemic-era roots into a full-scale national health gateway, letting citizens locate nearby hospitals, blood banks, ambulances, and Jan Aushadhi centres, access AB PM-JAY insurance details, and view their complete treatment history. Alongside it, the government launched the National Health Claims Exchange, a digital public infrastructure standardising insurance claim data across public and private programmes. A new WhatsApp-based chatbot, Ayushman Sarathi, allows beneficiaries to interact with PM-JAY services conversationally. The government also rolled out a national Drug Registry and Common LOINC Codes for India to standardise pharmaceutical and diagnostic data across health platforms.",
    art: 'health',
    links: [
      {
        title: 'Surgery Without Borders: AIIMS Delhi mentors AIIMS Raipur remotely, live in the operating theatre',
        author: 'New Times Health Desk',
        excerpt:
          "In a landmark collaboration, the Departments of Surgery at AIIMS Delhi and AIIMS Raipur performed India's first tele-mentored robotic-assisted surgery, a cholecystectomy conducted at AIIMS Raipur with real-time remote guidance from Dr. Sunil Chumber at AIIMS Delhi via Intuitive's da Vinci telepresence platform. AIIMS Delhi has completed over 1,000 robotic-assisted surgeries and is now sharing that expertise remotely, helping specialist surgical knowledge reach Tier II and Tier III hospitals in real time.",
      },
      {
        title: "$310 Million and a Sector Coming of Age: India's HealthTech funding story from H1 2026",
        author: 'New Times Health Desk',
        excerpt:
          "India's healthtech startups raised nearly $310 million in the first half of 2026, with capital flowing into AI diagnostics, oncology, genomics, healthcare fintech, rehabilitation, neurotechnology, and precision medicine. AI-powered diagnostics are being deployed in district hospitals, while startups such as Qure.ai, Niramai, Dozee, and NemoCare are winning on clinical evidence. India now hosts 10,000+ DPIIT-recognised health and life sciences startups, with the medical devices market projected to reach $31.85 billion by 2034.",
      },
    ],
  },
  {
    title: 'SPORTS',
    imageTitle: 'Pro Kabaddi League: How a rustic, rural.',
    imageAuthor: 'Amrit Mathur',
    art: 'sports',
    links: [
      ["The Indian Athlete Has Arrived: Overview of India's sports", 'Divyanshu Singh'],
      ['Why leagues need stronger grassroots pathways', 'Kunal Pradhan'],
    ],
  },
  {
    title: 'MARKETS',
    imageTitle: 'Investing in a high-valuation market',
    imageAuthor: 'Rishabh Parakh',
    art: 'markets',
    links: [
      ['How to remove human biases and build an "all-weather"', 'Prashant Tandon'],
      ["India's Economic Rise: From GDP growth to surge in equities", 'Rishabh Parakh'],
    ],
  },
  {
    title: 'LUXURY-LIFESTYLE',
    imageTitle: 'The 3-P strategy: Navigating.',
    imageAuthor: 'Vinay Golikeri',
    art: 'luxury',
    links: [
      ['How India fashion and lifestyle brands can reinvent their retail...', 'Kearney'],
      ['Zomato, you have bitten off more than you can chew with video...', 'Abhik Choudhury'],
    ],
  },
];

function BlogArt({ type }) {
  const backgrounds = {
    commerce: 'linear-gradient(135deg,#f5f5f4,#fbbf24)',
    health: 'linear-gradient(135deg,#0f172a,#38bdf8)',
    sports: 'linear-gradient(135deg,#581c87,#f97316)',
    markets: 'linear-gradient(135deg,#020617,#0ea5e9)',
    luxury: 'linear-gradient(135deg,#3b1705,#f59e0b)',
  };

  return (
    <div className="relative h-[240px] overflow-hidden" style={{ background: backgrounds[type] }}>
      {type === 'commerce' && (
        <>
          <div className="absolute grid grid-cols-2 gap-3 left-3 top-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index} className="w-16 shadow h-14 bg-amber-300" />
            ))}
          </div>
          <div className="absolute bottom-0 right-10 h-[188px] w-[96px] rounded-t-full bg-[#d6a17d]" />
        </>
      )}
      {type === 'health' && (
        <>
          <div className="absolute border inset-10 rounded-xl border-cyan-200/60 bg-cyan-300/25" />
          <span className="absolute left-1/2 top-12 h-[142px] w-3 -translate-x-1/2 rounded-full bg-cyan-100" />
          <span className="absolute left-16 top-24 h-16 w-16 rounded-full border-[10px] border-cyan-200" />
          <span className="absolute right-16 top-24 h-16 w-16 rounded-full border-[10px] border-cyan-200" />
        </>
      )}
      {type === 'sports' && (
        <div className="absolute inset-x-0 bottom-0 flex h-[170px] items-end justify-center gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} className="h-[92px] w-10 rounded-t-full bg-red-500" />
          ))}
        </div>
      )}
      {type === 'markets' && (
        <>
          <div className="absolute bottom-0 left-12 h-[160px] w-28 rounded-t-full bg-black/50" />
          <div className="absolute flex items-end gap-1 bottom-20 right-10">
            {[40, 58, 82, 68, 96, 115].map((height) => (
              <span key={height} className="w-3 bg-sky-400" style={{ height }} />
            ))}
          </div>
        </>
      )}
      {type === 'luxury' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,.8)_0_16%,transparent_17%)]" />
          <div className="absolute left-1/2 top-10 h-[152px] w-[152px] -translate-x-1/2 rounded-full border-[18px] border-amber-900" />
          <span className="absolute w-16 h-24 -translate-x-1/2 rounded-t-full bottom-12 left-1/2 bg-amber-700" />
        </>
      )}
    </div>
  );
}

function RightRail() {
  return (
    <aside className="hidden pl-3 border-l border-slate-300 lg:block">
      <div className="border-t border-slate-300 pt-2 text-center font-sans text-[9px] uppercase tracking-wide text-slate-500">
        Advertisement
      </div>
      <div className="mt-2 flex h-[314px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_45%_100%,#ffffff_0_32%,transparent_33%),linear-gradient(135deg,#5b00b8_0_20%,#ffffff_21%_62%,#5b00b8_63%_100%)] px-7 text-center">
        <p className="font-sans text-[27px] font-black leading-tight text-blue-700">
          Where Market Leaders
          <br />
          Came Together To
          <br />
          Decode Fixed Income.
        </p>
      </div>

      <div className="mt-7 bg-[#faf8ef] px-5 py-5">
        <div className="border-y border-black py-4 text-center font-sans text-[18px] font-black uppercase tracking-wide text-black">
          On Everyone's Radar
        </div>
        <article className="border-b mt-7 border-slate-300 pb-7">
          <div className="relative h-[250px] overflow-hidden bg-[linear-gradient(135deg,#93c5fd,#e0f2fe)]">
            <div className="absolute bottom-0 left-1/2 h-[190px] w-[120px] -translate-x-1/2 rounded-t-full bg-[#d7a07a]" />
            <span className="absolute right-3 top-3 rounded-[8px] bg-red-600 px-3 py-1 font-sans text-[17px] font-black text-white">
              #1
            </span>
          </div>
          <h3 className="mt-3 font-serif text-[21px] font-bold leading-snug text-black">
            Tamannaah Bhatia&apos;s affair to remember
          </h3>
          <p className="mt-4 font-serif text-[15px] text-slate-600">By Kunal Purandare</p>
        </article>
      </div>

      <div className="mt-7 border-t border-slate-300 pt-2 text-center font-sans text-[9px] uppercase tracking-wide text-slate-500">
        Advertisement
      </div>
      <div className="mt-2 flex min-h-[560px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_30%_0,#ffffff_0_26%,transparent_27%),linear-gradient(135deg,#5b00b8_0_18%,#ffffff_19%_100%)] px-7 text-center">
        <p className="font-sans text-[36px] font-black leading-tight text-blue-700">
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

export default function Blogs() {
  return (
    <main className="text-black bg-white">
      <div className="mx-auto grid max-w-[1360px] gap-3 px-1 py-10 lg:grid-cols-[minmax(0,1fr)_390px]">
        <section className="min-w-0 overflow-hidden">
          <h1 className="font-serif text-[32px] font-bold leading-tight text-black">Blogs</h1>

          <div className="grid mt-8 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {blogSections.map((section) => (
              <article key={section.title}>
                <h2 className="border-y border-slate-300 py-5 text-center font-sans text-[25px] font-black uppercase tracking-wide text-slate-800">
                  {section.title}
                </h2>
                <div className="mt-8">
                  <BlogArt type={section.art} />
                  <h3 className="mt-4 font-serif text-[27px] font-bold leading-[1.22] text-black">
                    {section.imageTitle}
                  </h3>
                  {section.imageSubtitle && (
                    <p className="mt-2 font-serif text-[18px] font-semibold leading-snug text-slate-700">
                      {section.imageSubtitle}
                    </p>
                  )}
                  <p className="mt-3 font-sans text-[15px] font-semibold text-slate-500">
                    By {section.imageAuthor}
                  </p>
                  {section.imageExcerpt && (
                    <p className="mt-3 font-sans text-[15px] leading-7 text-slate-700">
                      {section.imageExcerpt}
                    </p>
                  )}
                </div>
                <div className="mt-5 border-t border-slate-200">
                  {section.links.map((item) => {
                    const story = Array.isArray(item)
                      ? { title: item[0], author: item[1] }
                      : item;

                    return (
                      <div key={story.title} className="py-4 border-b border-slate-200">
                        <h4 className="font-serif text-[20px] font-bold leading-snug text-black">
                          {story.title}
                        </h4>
                        <p className="mt-2 font-sans text-[15px] font-semibold text-slate-500">
                          By {story.author}
                        </p>
                        {story.excerpt && (
                          <p className="mt-3 font-sans text-[14px] leading-6 text-slate-700">
                            {story.excerpt}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <RightRail />
      </div>
    </main>
  );
}
