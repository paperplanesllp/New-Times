import React from 'react';
import { Link, useParams } from 'react-router-dom';
import crudeOilImage from '../assets/Nn.avif';
import nseIpoImage from '../assets/Nn2.jpg';
import fiiSelloffImage from '../assets/NN4.webp';
import textileStocksImage from '../assets/NN5.webp';

const businessFeatureArticles = [
  {
    slug: 'nikhil-kamath-zerodha-journey',
    category: 'FINTECH',
    title: "From College Dropout to Fintech Pioneer: Nikhil Kamath's Zerodha Journey",
    excerpt:
      "Bootstrapped without external funding, Zerodha has grown into one of India's largest stockbroking platforms. Nikhil Kamath's journey reflects the power of disciplined execution and long-term thinking.",
    image: crudeOilImage,
    body: [
      "When Nikhil Kamath left school after the 10th grade, few could have predicted that he would go on to build one of India's most influential fintech companies. Starting as a trader at a young age while working in a call centre, Kamath learned the markets through experience rather than formal education. Alongside his brother, Nithin Kamath, he co-founded Zerodha in 2010 with a vision of making stock market investing affordable and accessible to millions of Indians.",
      "Unlike many technology startups, Zerodha was built without raising venture capital. The company introduced a flat-fee brokerage model that disrupted India's traditional brokerage industry, helping millions of first-time investors enter the equity markets. Today, Zerodha is India's largest retail stockbroker and remains one of the country's most successful bootstrapped businesses.",
      "Beyond Zerodha, Kamath has expanded into wealth management through True Beacon, startup investments via Gruhas, and thought leadership through his podcast featuring global business, technology, and policy leaders. His journey continues to inspire aspiring entrepreneurs by proving that disciplined execution, patience, and long-term thinking can outperform aggressive fundraising and rapid expansion.",
      "Nikhil Kamath's entrepreneurial story is unique because it challenges the conventional belief that academic excellence is the only route to business success. Instead of pursuing higher education, Kamath immersed himself in the world of financial markets at a young age. While working night shifts at a call centre, he spent countless hours studying stocks, understanding market movements, and learning the psychology behind investing.",
      "Those early experiences shaped his practical approach to finance. Rather than relying solely on textbooks, he developed his knowledge through real market participation, making mistakes, learning from them, and gradually refining his investment strategies. This hands-on learning became the foundation of his future success.",
      "In 2010, Nikhil and his brother Nithin identified a major gap in India's financial services industry. Traditional stockbrokers charged high brokerage fees, making investing expensive for ordinary individuals. Many potential investors avoided the stock market altogether because of the high costs and complicated trading processes.",
      "The Kamath brothers saw an opportunity to change this landscape. They launched Zerodha with a disruptive pricing model that offered flat brokerage charges instead of percentage-based commissions. The platform also focused on simplicity, technology, and transparency, making investing easier for beginners and experienced traders alike.",
      "Initially, competing against established brokerage firms was not easy. Zerodha had limited financial resources and almost no marketing budget. Instead of spending heavily on advertising, the founders invested in technology, customer support, and product development. Their strategy relied on customer satisfaction and word-of-mouth referrals rather than expensive promotional campaigns.",
      "This approach proved remarkably successful. As more investors experienced Zerodha's low-cost model and easy-to-use platform, the company's customer base expanded rapidly. Within a decade, Zerodha had become India's largest retail stockbroker, serving millions of investors across the country.",
      "One of Zerodha's most remarkable achievements is that it reached industry leadership without raising external venture capital. In an ecosystem where startups often depend on multiple funding rounds, Zerodha chose a different path by focusing on profitability from the very beginning.",
      "This decision gave the founders complete control over the company's long-term vision. Without pressure from outside investors, Zerodha was able to prioritize customer experience, technological innovation, and sustainable growth instead of chasing rapid expansion at any cost.",
      "The company's financial discipline became one of its greatest strengths. Every business decision was evaluated based on long-term value creation rather than short-term valuation increases. As a result, Zerodha became one of India's most profitable fintech companies while remaining entirely founder-owned.",
      "Zerodha's impact extends far beyond brokerage services. The company has played a significant role in democratizing investing across India. By reducing trading costs and simplifying access to financial markets, it has encouraged millions of first-time investors to begin their wealth creation journeys.",
      "The company also invested heavily in financial education. Through initiatives such as Varsity, Zerodha created one of India's most comprehensive free learning platforms for stock market education. The platform covers everything from basic investing concepts to advanced trading strategies, helping individuals make informed financial decisions.",
      "Technology has been another cornerstone of Zerodha's success. Products such as Kite, Coin, and Console have streamlined investing, portfolio management, and mutual fund investments, making sophisticated financial tools accessible to everyday investors.",
      "As Zerodha matured, Nikhil Kamath expanded his entrepreneurial interests beyond stockbroking. He co-founded True Beacon, an asset management firm that focuses on serving high-net-worth individuals with a transparent investment approach.",
      "He also launched Gruhas, an investment platform that backs startups operating in sectors including proptech, consumer technology, sustainability, healthcare, and climate innovation. Through these ventures, Kamath has become an active supporter of India's startup ecosystem, helping founders build businesses through strategic guidance and capital.",
      "In recent years, Nikhil Kamath has become a prominent public voice in India's business ecosystem. Through his podcast and public conversations, he engages with entrepreneurs, economists, policymakers, athletes, and global business leaders on topics ranging from artificial intelligence and investing to leadership and innovation.",
      "Throughout his entrepreneurial journey, Kamath has consistently emphasized discipline, patience, and continuous learning. He believes that sustainable businesses are built through consistent execution rather than aggressive expansion.",
      "Today, Zerodha stands as one of India's most admired fintech companies and a benchmark for sustainable entrepreneurship. For entrepreneurs and investors alike, his story offers a timeless lesson: lasting success is rarely built overnight; it is achieved through consistent effort, disciplined decision-making, and an unwavering commitment to creating value.",
    ],
  },
  {
    slug: 'vahdam-india-global-expansion',
    category: 'GLOBAL BRANDS',
    title: 'Vahdam India Targets Rs 500 Crore Revenue Through Global Expansion',
    excerpt:
      'The premium tea brand is strengthening its international presence while expanding its footprint in India. Its global-first strategy continues to drive strong revenue growth and brand recognition.',
    image: nseIpoImage,
    body: [
      "Vahdam India is sharpening its global expansion strategy as it targets Rs 500 crore in revenue. The premium tea and wellness brand has built its identity around taking Indian-origin products to international consumers while keeping the supply chain closely connected to domestic growers.",
      "The company has focused on digital-first distribution, premium packaging, and direct access to overseas customers. This approach helped Vahdam stand out in crowded international markets where Indian tea has historically been sold more as a commodity than a branded experience.",
      "Global markets remain central to the company's growth story, but India is becoming an increasingly important part of the next phase. Rising demand for premium teas, wellness blends, and gifting-led consumption gives the brand room to deepen its domestic presence.",
      "For Vahdam, the challenge now is execution at scale. The brand must keep quality consistent, manage costs, and expand retail visibility while protecting the premium positioning that helped it gain recognition abroad.",
      "Its journey reflects a larger shift in Indian consumer brands: companies are no longer building only for local markets first. Many are launching with international ambition from day one, using digital channels, strong storytelling, and differentiated products to compete globally.",
    ],
  },
  {
    slug: 'habilelabs-10-years-global-technology-services',
    category: 'TECHNOLOGY SERVICES',
    title: 'HabileLabs Marks 10 Years of Growth as It Expands Global Technology Services',
    excerpt:
      'What began as a Jaipur startup has evolved into an international technology partner serving businesses worldwide. The company credits customer trust and innovation for its decade-long success.',
    image: fiiSelloffImage,
    body: [
      "HabileLabs has completed 10 years of growth, marking its evolution from a Jaipur-based startup into a technology services company with international reach. The milestone reflects the growing strength of India's regional technology hubs beyond the traditional metro centres.",
      "The company has built its business around software engineering, product development, enterprise solutions, and digital transformation services. Over the years, it has worked with clients looking to modernize technology systems, improve digital products, and scale engineering capacity.",
      "Customer trust has been central to HabileLabs' expansion. In services businesses, long-term relationships often matter as much as technical capability, and the company credits consistent delivery and innovation for its decade-long progress.",
      "Its growth also mirrors a broader industry pattern. Businesses worldwide are seeking reliable technology partners that can combine engineering depth with flexibility, speed, and cost efficiency. Indian firms outside the largest technology cities are increasingly competing for this demand.",
      "As HabileLabs enters its next phase, global delivery, talent development, and deeper specialization will likely shape its expansion. The company now stands as an example of how regional startups can grow into international technology partners through sustained execution.",
    ],
  },
  {
    slug: 'bigbasket-ceo-transition',
    category: 'QUICK COMMERCE',
    title: 'BigBasket Begins New Leadership Chapter With CEO Transition',
    excerpt:
      'Founder Hari Menon has stepped down as CEO as the company sharpens its focus on profitability and quick commerce. The leadership change reflects the next phase of growth under new management.',
    image: textileStocksImage,
    body: [
      "BigBasket has entered a new leadership chapter after founder Hari Menon stepped down as CEO. The transition comes at a crucial moment for the online grocery company as quick commerce, profitability, and operational efficiency reshape the sector.",
      "Menon played a defining role in building BigBasket into one of India's best-known grocery platforms. Under his leadership, the company scaled across cities, developed supply chain depth, and became a major player in online grocery before the quick-commerce wave transformed consumer expectations.",
      "The next phase will require sharper execution. Grocery delivery is a high-frequency but operationally demanding business, and companies must balance speed, assortment, margins, inventory control, and customer retention.",
      "BigBasket's leadership transition signals a move toward a more focused operating model. As competition intensifies, the company will need to strengthen its quick-commerce capabilities while improving profitability across core grocery operations.",
      "The change also reflects the maturity of India's digital commerce sector. Founder-led businesses are increasingly moving into professionalized growth phases where systems, discipline, and execution depth matter as much as early-market vision.",
    ],
  },
];

const spotlightPages = {
  'business-features': {
    kicker: 'Business Features',
    title: 'Business Stories Shaping Modern India',
    intro:
      'Founder journeys, global expansion, technology services, and leadership transitions define this edition of New Times Business Features.',
    badge: 'Feature Desk',
    lead: businessFeatureArticles[0],
    stories: businessFeatureArticles.slice(1),
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
  const { slug } = useParams();
  const page = spotlightPages[type] || spotlightPages['business-features'];
  const article = type === 'business-features'
    ? businessFeatureArticles.find((item) => item.slug === slug)
    : null;

  if (article) {
    return (
      <main className="mx-auto min-h-[80vh] max-w-5xl bg-white px-4 py-8 sm:px-6 lg:px-8">
        <article className="border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
          <Link
            to="/spotlight/business-features"
            className="mb-6 inline-flex font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-slate-600 no-underline hover:text-red-600"
          >
            &larr; Business Features
          </Link>

          <div className="mb-6 h-1 w-full bg-slate-950" />

          <span className="mb-3 block font-sans text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
            {article.category}
          </span>
          <h1 className="m-0 max-w-4xl font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl font-sans text-lg leading-8 text-slate-600">
            {article.excerpt}
          </p>

          <img className="my-8 h-[420px] w-full object-cover" src={article.image} alt={article.title} />

          <div className="mx-auto max-w-3xl space-y-5 font-serif text-[18px] leading-8 text-slate-800">
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    );
  }

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
          <article className="group">
            <img className="mb-5 h-[380px] w-full object-cover" src={page.lead.image} alt={page.lead.title} />
            <span className="mb-2 block font-sans text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
              {page.lead.category}
            </span>
            {page.lead.slug ? (
              <Link to={`/spotlight/business-features/${page.lead.slug}`} className="no-underline">
                <h2 className="m-0 font-serif text-3xl font-bold leading-tight text-slate-950 underline-offset-4 group-hover:underline">
                  {page.lead.title}
                </h2>
              </Link>
            ) : (
              <h2 className="m-0 font-serif text-3xl font-bold leading-tight text-slate-950">
                {page.lead.title}
              </h2>
            )}
            <p className="mt-4 font-sans text-[15px] leading-7 text-slate-600">{page.lead.excerpt}</p>
          </article>

          <div className="space-y-5 border-gray-200 xl:border-l xl:pl-6">
            {page.stories.map((story) => (
              <article key={story.title} className="group border-b border-gray-100 pb-5 last:border-b-0">
                <span className="mb-2 block font-sans text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                  {story.category}
                </span>
                {story.slug ? (
                  <Link to={`/spotlight/business-features/${story.slug}`} className="no-underline">
                    <h3 className="m-0 font-serif text-xl font-bold leading-tight text-slate-950 underline-offset-4 group-hover:underline xl:text-lg">{story.title}</h3>
                  </Link>
                ) : (
                  <h3 className="m-0 font-serif text-xl font-bold leading-tight text-slate-950 xl:text-lg">{story.title}</h3>
                )}
                <p className="mt-2 font-sans text-sm leading-6 text-slate-600">{story.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
