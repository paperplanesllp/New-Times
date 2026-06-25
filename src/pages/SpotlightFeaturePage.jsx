import React from 'react';
import crudeOilImage from './Nn.avif';
import nseIpoImage from './Nn2.jpg';
import fiiSelloffImage from './NN4.webp';
import textileStocksImage from './NN5.webp';

const spotlightPages = {
  'business-features': {
    kicker: 'Business Features',
    title: "India's AI Momentum Shifts Into Execution Mode",
    intro:
      'From large-scale computing infrastructure and indigenous AI models to strategic global collaborations and enterprise deployments, artificial intelligence is rapidly becoming a core business priority across industries in India.',
    badge: 'Feature Desk',
    lead: {
      category: 'MARKETS',
      title: 'Crude Oil Crash Boosts Indian Markets',
      excerpt:
        'Brent crude slipped below $73 a barrel for the first time since February 27, 2026, down 42% from its peak of $126 per barrel on April 30. Indian markets rallied on Wednesday, with the Sensex and Nifty gaining up to 1% amid easing crude prices, supportive global cues, and optimism over India-US trade talks. The Nifty closed above 24,000, with the rupee also strengthening against the dollar.',
      image: crudeOilImage,
    },
    stories: [
      {
        category: 'CAPITAL MARKETS',
        title: "NSE Files for India's Largest-Ever IPO",
        excerpt:
          "The National Stock Exchange has filed its DRHP for a Rs 25,000-30,000 crore IPO, set to be one of the largest public floats in India's capital market history. The issue comprises up to 14.89 crore equity shares, about 6% of NSE's paid-up capital, entirely via an offer for sale route. In FY2026, NSE processed an average of 12-14 billion messages daily and held a dominant 92.99% market share in India's cash equity market.",
        image: nseIpoImage,
      },
      {
        category: 'FOREIGN FLOWS',
        title: 'FIIs Dump Rs 64,761 Crore in First Half of June',
        excerpt:
          'Foreign investors offloaded shares worth a staggering Rs 64,761 crore in the first half of June, the highest since March, driven by elevated oil prices. However, domestic institutional investors countered with strong buying, keeping the overall market afloat.',
        image: fiiSelloffImage,
      },
      {
        category: 'TEXTILES',
        title: 'Textile Stocks Rally on Motilal Oswal Coverage',
        excerpt:
          'Textile exporter stocks witnessed a significant rally, boosted by positive initiation of coverage from Motilal Oswal Financial Services. The brokerage highlighted capacity expansion and supportive government policies as key growth catalysts, projecting substantial gains for leading companies. The surge reflects a new investment cycle in Indian textiles, with companies targeting higher-margin, value-added products to capitalise on global sourcing trends.',
        image: textileStocksImage,
      },
    ],
  },
  'recognise-series': {
    kicker: 'Recognition Series',
    title: 'Recognising the People Behind Progress',
    intro:
      'Showcasing founders, professionals, and teams whose ideas, leadership, and execution are shaping the future of business, technology, and industry.',
    badge: 'Series',
    lead: {
      category: 'FOUNDER MOVES',
      title: 'Deepinder Goyal Bets $54M on Brain Wearables With Temple',
      excerpt:
        "Weeks after stepping down as CEO of Zomato/Eternal, Goyal raised $54M in a friends-and-family round for Temple, a wearable startup targeting elite athlete brain health and performance monitoring, at a $190M post-money valuation. Backers include Peak XV Partners, Steadview Capital, Vijay Shekhar Sharma, Kunal Shah, and Zerodha's Kamath brothers. Over 30 Temple employees invested their own capital at the same valuation as external investors.",
      image: '/d1.webp',
    },
    stories: [
      {
        category: 'ENTERPRISE AI',
        title: 'Mukesh Bansal Launches Nurix AI After Myntra and Cure.fit',
        excerpt:
          "One of India's rare double-unicorn builders, Bansal, co-founder of Myntra and Cure.fit, has launched Nurix AI to build intelligent agents for enterprise workflow automation. The startup raised $27M in its maiden round co-led by Accel. Nurix targets large organisations looking to automate complex operational workflows using AI, with Bansal widely regarded as one of the most credible enterprise AI founders in India given his track record scaling two consumer category leaders.",
        image: '/d2.avif',
      },
      {
        category: 'GRASSROOTS INNOVATION',
        title: "Gautam Adani Launches Vande Bharatam to Find India's Hidden Innovators",
        excerpt:
          "On his 64th birthday, June 24, Adani launched a nationwide search program to discover grassroots entrepreneurs across all 36 states and 800+ districts, addressing the fact that over 80% of India's startup founders come from just five cities. Open to all ages and backgrounds, from metro centers to rural communities, the program covers tech, manufacturing, sustainability, agriculture, and traditional crafts. 75 finalists will receive incubation, mentorship, and investment access in Ahmedabad, with a Grand Finale around Independence Day.",
        image: '/D3.jpg',
      },
      {
        category: 'SECOND ACTS',
        title: "India's First-Gen Internet Founders Converge on AI for Their Second Acts",
        excerpt:
          "A defining pattern of 2026: Deepinder Goyal, Mukesh Bansal, Aman Gupta, Mukund Jha, and Binny Bansal all launched new ventures within the same 18-month window, nearly all converging on AI. Analysts see this as a signal that India's most credible operators believe AI is the decade's defining value-creation opportunity, shifting from distribution and logistics to intelligent automation and consumer AI.",
        image: '/D5.webp',
      },
    ],
  },
  startup: {
    kicker: 'Startup',
    title: "Spotlighting Tomorrow's Industry Leaders",
    intro:
      'Covering ambitious startups, visionary founders, breakthrough innovations, growth milestones, and the strategies shaping the future of business.',
    badge: 'Startup Watch',
    lead: {
      category: 'AI STARTUP',
      title: 'Emergent Hits $100M ARR With Plain-Language App Building',
      excerpt:
        'Mukund Jha, CEO, and Madhav Jha, CTO, alumni of Columbia Engineering and Penn State, built Emergent, a vibe-coding platform that lets anyone create full-stack apps using plain language with no code required. Launched in 2024, Emergent hit $50M ARR in 7 months and doubled to $100M ARR in just 30 more days. With 5M+ users across 190 countries and 6M+ apps built, the startup raised $100M total, including a $70M Series B led by SoftBank Vision Fund 2 and Khosla Ventures, tripling its valuation to $300M. Nearly 40% of users are small businesses, and 70% have zero prior coding experience.',
      image: '/sT1.jpg',
    },
    stories: [
      {
        category: 'DEEPTECH',
        title: "Kalam Labs Builds India's Near-Space Drone Edge",
        excerpt:
          'Harshit Awasthi, Sashakt Tripathi, and Ahmad Faraaz started Kalam Labs in 2018 as a space edtech platform, then pivoted entirely into stratospheric UAV development, a transition Lightspeed called unexpected and spectacular. Their drones operate at 100,000+ ft, cost 1/10th of competing systems, and are already deployed at Pokhran nuclear test site and the Indo-China Line of Control. After Shark Tank India Season 5, Deepinder Goyal entered talks to invest about $1M as part of a $5-7M funding round. Missions are live with the Indian Army and India Meteorological Department.',
        image: '/start.avif',
      },
      {
        category: 'BIOCOMPUTE',
        title: 'BioCompute Stores Data in Bacterial DNA and Heads to Silicon Valley',
        excerpt:
          "In a tiny Bengaluru lab, founder Anagha Rajesh and her team at BioCompute successfully stored and retrieved data inside bacterial DNA. The startup is pioneering next-generation biological data storage, a field projected to outlast silicon-based storage in density and longevity. Now expanding into Silicon Valley, BioCompute is attracting attention as a symbol of India's shift from software services to hard science and deep-tech IP creation. An Emergent Ventures winner, Rajesh represents a new generation of Indian founders entering fields once dominated by global research giants.",
        image: '/stam.avif',
      },
      {
        category: 'STARTUP GEOGRAPHY',
        title: "India's Startup Geography Shifts Beyond the Big Three Cities",
        excerpt:
          "For the first time in India's startup history, nearly 48% of all DPIIT-recognised startups are emerging from Tier II and Tier III cities, not Bengaluru, Mumbai, or Delhi. Lucknow gave us Kalam Labs. Bihar gave us Emergent's twin-founder story. Cities like Jaipur, Bhubaneswar, Surat, and Indore are now hosting some of the fastest-growing startups in deeptech, agritech, and climate solutions.",
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
      },
    ],
  },
  'cover-feature': {
    kicker: 'Cover Feature',
    title: 'Flagship Stories Shaping Business and Industry',
    intro:
      'In-depth features exploring influential leaders, transformative companies, emerging sectors, and the ideas driving change across the business landscape.',
    badge: 'Cover Desk',
    lead: {
      category: 'Dilip Shanghvi · Sun Pharmaceutical Industries',
      title: "India's Biggest-Ever Pharma Bet: Sun Pharma Acquires Organon for $11.75B",
      excerpt:
        "In the largest overseas acquisition ever made by an Indian pharmaceutical company, Sun Pharma's executive chairman Dilip Shanghvi signed a definitive agreement on April 27 to acquire Organon, the women's health and generics company spun off from Merck in 2021, in an all-cash deal at $14 per share. The transaction values Organon at an enterprise value of $11.75 billion and catapults Sun Pharma into the top 25 global pharma companies with a combined revenue of $12.4 billion. The acquisition hands Sun Pharma leadership in women's health across 140 countries, a portfolio of 70+ products including biosimilars, and the position of 7th largest global biosimilar player. Organon reported $6.2B in 2025 revenue and carries $8.6B in debt, creating a significant integration and balance sheet challenge ahead. The deal is expected to close by early 2027.",
      image: '/cover.webp',
    },
    stories: [
      {
        category: 'Ajoy Chawla · Titan Company (Tata Group)',
        title: "Titan's Rs 25,000 Crore Year: How a Tata Watchmaker Rewrote Its Story in Just 12 Months",
        excerpt:
          'Titan Company, which took 40 years to cross Rs 50,000 crore in annual revenue, added the next Rs 25,000 crore in a single year. FY26 total consolidated revenue reached Rs 88,136 crore, about $9.3B, a 34.4% jump, powered almost entirely by its jewellery segment which contributed Rs 79,660 crore. Soaring gold prices, surging consumer demand, and strategic acquisitions, including a majority stake in Dubai-based Damas Jewellery, drove the momentum. Q4 FY26 alone saw jewellery revenue surge 50% year-on-year. MD Ajoy Chawla called it a landmark year, while flagging caution for FY27 amid geopolitical and macro volatility. What began as a modest 1984 Tata-TIDCO watch venture is now the Tata Group\'s second most valuable company after TCS, with a market cap of Rs 3.6 lakh crore.',
      },
      {
        category: 'Reliance & Adani · AI Infrastructure',
        title: "Reliance and Adani Commit $210 Billion to Own India's AI Era",
        excerpt:
          "At India's AI Impact Summit in New Delhi, Mukesh Ambani announced Jio and Reliance will invest Rs 10,000 billion, about $110B, over seven years to build sovereign AI compute infrastructure, including multi-gigawatt data centres, a nationwide edge computing network, and AI services woven into Jio's 526 million-subscriber base. Simultaneously, Gautam Adani pledged $100B through 2035 to build renewable-powered AI data centres, expanding AdaniConnex from 2 GW to 5 GW, and partnered with Jabil to manufacture AI data centre equipment in India. Together, the two commitments, $210B in total, represent the largest private AI infrastructure bet in India's history, designed to make India a cost-competitive global AI hosting destination as the country's stock market valuation crosses $5 trillion. Meanwhile, Jio filed its DRHP with SEBI on June 19 for an IPO expected to raise Rs 27,500 crore.",
      },
      {
        category: 'India · Product Economy',
        title: "From Outsourcing Nation to Product Economy: India's $5 Trillion Market Cap Signals a Structural Transformation",
        excerpt:
          "India's stock market valuation crossed the $5 trillion mark this month, reclaiming sixth place globally and signalling a structural, not just cyclical, shift in the country's economic identity. Goldman Sachs projects real GDP growth of 6.9% for 2026 and 6.8% for 2027, well above consensus, with real consumption growth rising to 7.7% year-on-year. The EU-India Free Trade Agreement, described by PM Modi as representing 25% of global GDP and a third of global trade, is reshaping India's export potential. India's IT giants are pivoting from services delivery to product-building, with companies like Zoho, Razorpay, CRED, and Meesho building globally competitive products natively from India. Product roles, including PM, Design, Growth, and Analytics, are growing faster in India than anywhere else. India's Rs 960 crore disbursed in startup schemes, 127 unicorns, and the emergence of deep-tech IP creation mark the inflection point of a new era, from talent export to innovation leadership.",
      },
    ],
  },
};

export default function SpotlightFeaturePage({ type }) {
  const page = spotlightPages[type] || spotlightPages['business-features'];

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
      <section className="border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
        <div className="mb-6 h-1 w-full bg-slate-950" />

        <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
              NT Spotlight
            </span>
            <h1 className="m-0 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              {page.kicker}
            </h1>
          </div>
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-green-600">
            {page.badge}
          </span>
        </div>

        <div className="mb-10 bg-slate-50 p-7 ring-1 ring-gray-200">
          <h2 className="m-0 max-w-4xl font-serif text-3xl font-extrabold leading-tight text-slate-950">
            {page.title}
          </h2>
          <p className="mt-4 max-w-4xl font-sans text-base leading-7 text-slate-600">
            {page.intro}
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.3fr)_minmax(420px,0.9fr)]">
          <article>
            <img className="mb-5 h-[380px] w-full object-cover" src={page.lead.image} alt={page.lead.title} />
            <span className="mb-2 block font-sans text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
              {page.lead.category}
            </span>
            <h2 className="m-0 font-serif text-3xl font-bold leading-tight text-slate-950">
              {page.lead.title}
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-7 text-slate-600">{page.lead.excerpt}</p>
          </article>

          <div className="space-y-5 border-gray-200 xl:border-l xl:pl-6">
            {page.stories.map((story) => (
              <article key={story.title} className="border-b border-gray-100 pb-5 last:border-b-0">
                <span className="mb-2 block font-sans text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                  {story.category}
                </span>
                <h3 className="m-0 font-serif text-xl font-bold leading-tight text-slate-950 xl:text-lg">{story.title}</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-slate-600">{story.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
