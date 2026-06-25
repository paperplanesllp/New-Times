import React, { useState } from 'react';

const TECH_SECTIONS = [
  {
    title: 'AI',
    accent: 'text-sky-700',
    stories: [
      {
        id: 'ai-1',
        title: "Inside India's AI Impact Summit: How One Event Triggered $200 Billion in Commitments",
        summary:
          "The February 2026 Delhi summit drew Sam Altman, Sundar Pichai, and Dario Amodei, and became the moment global capital started taking India's AI ambitions seriously.",
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'ai-2',
        title: "Sarvam AI and the Race to Build India's Own Foundation Models",
        summary:
          'Backed by government-allocated GPU clusters under the IndiaAI Mission, Sarvam is among a handful of startups trying to build sovereign, multilingual large language models instead of layering on top of Western ones.',
        image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'ai-3',
        title: "Krutrim: How Ola's AI Bet Became India's First AI Unicorn",
        summary:
          "Bhavish Aggarwal's pivot from ride-hailing to foundation models turned Krutrim into a symbol of India's ambitions to build, not just consume, AI technology.",
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'ai-4',
        title: "Neysa's Billion-Dollar Gamble on AI Infrastructure",
        summary:
          "With backing from Blackstone and plans to deploy over 20,000 GPUs, Neysa is betting that India's AI boom needs compute infrastructure more than it needs another chatbot.",
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'ai-5',
        title: "Adani's $100 Billion Plan to Power AI Data Centers with Renewable Energy",
        summary:
          "The conglomerate's pledge to build fully renewable-powered AI data centers by 2035 could reshape both India's energy mix and its position in global AI infrastructure.",
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85',
      },
    ],
  },
  {
    title: 'Space',
    accent: 'text-indigo-600',
    stories: [
      {
        id: 'space-1',
        title: "Skyroot Becomes India's First Space-Tech Unicorn",
        summary:
          'A $60 million funding round ahead of its debut orbital launch pushed the Hyderabad-based rocket maker past the billion-dollar valuation mark.',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'space-2',
        title: 'Vikram-1 and Agnibaan: The Private Rockets Racing for Small Satellites',
        summary:
          "Skyroot and Agnikul are both targeting commercial launches this year, aiming to become India's first private companies to reach orbit independently.",
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'space-3',
        title: 'How IN-SPACe Opened the Door to 400 Private Space Startups',
        summary:
          "A 2020 policy shift that let private firms access ISRO's facilities has fueled an explosion of startups building rockets, satellites, and space situational awareness systems.",
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'space-4',
        title: "Pixxel's NASA Contract and India's Rising Earth-Observation Industry",
        summary:
          'A nearly half-billion-dollar hyperspectral imaging deal shows Indian space startups competing directly for global government contracts, not just domestic ones.',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'space-5',
        title: "Gaganyaan's Countdown: India's Path to a Crewed Spaceflight by 2027",
        summary:
          'With an uncrewed test flight carrying a humanoid robot already on the calendar, India is inching closer to its first human spaceflight mission.',
        image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=85',
      },
    ],
  },
  {
    title: 'Fintech',
    accent: 'text-cyan-700',
    stories: [
      {
        id: 'fintech-1',
        title: "PhonePe's $15 Billion IPO Bet and the Problem with Zero-Fee UPI",
        summary:
          "India's most valuable private tech company is heading for a public listing even though its core payments business generates almost no direct revenue.",
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'fintech-2',
        title: "RBI's New Two-Factor Authentication Mandate, Explained",
        summary:
          'A sweeping rule taking effect this year requires every digital transaction in India to use two distinct authentication factors, reshaping how banks and fintechs build their apps.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'fintech-3',
        title: 'From Payments to Profits: How Groww and Pine Labs Rewrote the Playbook',
        summary:
          "Both companies' move toward public listings reflects a broader shift in Indian fintech from growth-at-all-costs to sustainable, profitable business models.",
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'fintech-4',
        title: "UPI Goes Global: India's Push to Export Its Payments Stack",
        summary:
          "Now live in over a dozen countries and central to a new cross-border payments network, UPI is becoming one of India's most influential technology exports.",
        image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'fintech-5',
        title: 'The Great Indian Lending Shift',
        summary:
          "Fintech platforms have quietly captured a majority share of India's personal loan market, raising new questions about credit risk and regulatory oversight.",
        image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=85',
      },
    ],
  },
  {
    title: 'EV',
    accent: 'text-green-700',
    stories: [
      {
        id: 'ev-1',
        title: "Tata's Avinya Bet: India's Largest EV Maker Goes Premium",
        summary:
          "A new brand launch and five additional EV models by FY30 signal Tata's plan to compete at every price point in India's electric car market.",
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'ev-2',
        title: "Ola Electric's Bharat Cell: Can India Build Its Own Battery Supply Chain?",
        summary:
          "As the only company producing lithium-ion cells domestically at commercial scale, Ola's bet on in-house battery manufacturing is being closely watched across the industry.",
        image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'ev-3',
        title: "The Gigafactory Race: Tata, Reliance, and Amara Raja's Battery Bets",
        summary:
          "Multiple billion-dollar battery plants are under construction across Gujarat and Telangana, each aiming to reduce India's heavy reliance on imported cells.",
        image: 'https://images.unsplash.com/photo-1565636192335-9c4d9f71ba21?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'ev-4',
        title: "Why India's Battery Cell Manufacturing Still Lags Its EV Ambitions",
        summary:
          "Despite billions in incentives, domestic cell production capacity remains a fraction of what India's automakers will eventually need.",
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=85',
      },
      {
        id: 'ev-5',
        title: 'Two Wheels, One Battle: Ather, TVS, and Ola Fight for the E-Scooter Market',
        summary:
          "As India's largest EV segment by volume, electric two-wheelers have become the most competitive and most closely watched battleground in the industry.",
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=85',
      },
    ],
  },
];

const TECH_ADS = [
  { id: 'ai-ad', label: 'AI Cloud', title: 'Scale sovereign AI workloads with managed GPU clusters', metric: '125', unit: 'PFLOPS Ready', accent: 'text-cyan-300' },
  { id: 'space-ad', label: 'Space Data', title: 'Turn satellite imagery into decision-ready enterprise intelligence', metric: '400+', unit: 'Space Startups', accent: 'text-indigo-300' },
  { id: 'fintech-ad', label: 'Fintech Stack', title: 'Build compliant payments and lending products on resilient rails', metric: '18.7B', unit: 'UPI Monthly', accent: 'text-cyan-300' },
  { id: 'ev-ad', label: 'EV Platform', title: 'Monitor battery supply chains, charging networks, and fleet demand', metric: 'FY30', unit: 'EV Roadmap', accent: 'text-green-300' },
];

function TechAdvertisement({ ad, onClose }) {
  return (
    <aside className="relative max-w-2xl mt-24 overflow-hidden text-white bg-zinc-950">
      <button
        type="button"
        aria-label="Close advertisement"
        onClick={onClose}
        className="absolute flex items-center justify-center w-8 h-8 font-sans text-sm font-bold text-white transition border right-3 top-3 border-white/25 bg-black/30 hover:bg-white hover:text-black"
      >
        X
      </button>
      <div className="mb-2 px-6 pt-6 font-sans text-[10px] uppercase tracking-[0.08em] text-gray-400">Advertisement</div>
      <div className="grid md:grid-cols-[minmax(0,1fr)_160px]">
        <div className="p-6 pt-2">
          <div className={`mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.18em] ${ad.accent}`}>
            {ad.label}
          </div>
          <h3 className="max-w-xl m-0 font-serif text-2xl font-bold leading-tight">
            {ad.title}
          </h3>
          <button className="mt-5 bg-white px-4 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-950 transition hover:bg-cyan-200">
            Explore Stack
          </button>
        </div>
        <div className="min-h-[160px] bg-[radial-gradient(circle_at_top,#22d3ee,transparent_34%),linear-gradient(135deg,#0f172a,#111827_52%,#020617)] p-5">
          <div className="flex flex-col justify-between h-full p-5 border border-white/20">
            <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">
              Sponsored
            </div>
            <div>
              <div className="font-sans text-4xl font-black text-white">{ad.metric}</div>
              <div className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-zinc-300">{ad.unit}</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function TechNewsGrid() {
  const [closedAds, setClosedAds] = useState([]);
  const closeAd = (id) => setClosedAds((current) => [...current, id]);

  return (
    <section className="mt-10 font-serif bg-white text-gray-950">
      <div className="pb-2 border-b border-gray-300 mb-7">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-bold text-black">
          India Deep-Tech Dispatches
        </h2>
      </div>

      <div className="space-y-12">
        {TECH_SECTIONS.map((section, index) => {
          const [leadStory, ...streamStories] = section.stories;
          const ad = TECH_ADS[index % TECH_ADS.length];
          const showAd = !closedAds.includes(ad.id);

          return (
            <React.Fragment key={section.title}>
              <div className="pb-10 border-b border-gray-200 last:border-b-0">
                <div className={`mb-5 font-sans text-[12px] font-bold uppercase tracking-[0.12em] ${section.accent}`}>
                  {section.title}
                </div>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
                  <article>
                    <img className="mb-5 h-[360px] w-full object-cover" src={leadStory.image} alt={leadStory.title} />
                    <h2 className="m-0 font-serif text-3xl font-bold leading-tight text-black underline decoration-black underline-offset-4">
                      {leadStory.title}
                    </h2>
                    <p className="mt-4 font-serif text-[15px] leading-7 text-slate-700">{leadStory.summary}</p>
                    <div className="font-sans text-[11px] font-semibold text-slate-500">By Technology Desk / India Edition</div>
                    {showAd && <TechAdvertisement ad={ad} onClose={() => closeAd(ad.id)} />}
                  </article>

                  <div className="space-y-5 border-gray-200 lg:border-l lg:pl-6">
                    {streamStories.map((story) => (
                      <article key={story.id} className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-gray-100 pb-5 last:border-b-0">
                        <img className="object-cover w-24 h-24" src={story.image} alt={story.title} />
                        <div>
                          <h3 className="m-0 font-serif text-lg font-bold leading-tight text-black">{story.title}</h3>
                          <p className="my-2 font-serif text-sm leading-6 text-slate-600">{story.summary}</p>
                          <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.04em] text-slate-500">
                            Technology Desk
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>        
    </section>
  );
}
