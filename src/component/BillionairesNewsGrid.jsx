import React from 'react';

export default function BillionairesNewsGrid() {
  const mainFeature = {
    title: "How Mukesh Ambani Built Reliance Into India's Most Valuable Empire",
    author: "New Times Wealth Desk",
    image: "/B2.webp"
  };

  const sideFeatures = [
    {
      id: 1,
      title: "Gautam Adani's Comeback: Rebuilding Investor Confidence After a Turbulent Year",
      author: "New Times Wealth Desk",
      image: "/B1.webp"
    },
    {
      id: 2,
      title: "The Jindal Family: Steel, Power, and a Legacy of Diversification",
      author: "New Times Wealth Desk",
      image: "/bb3.jpg"
    }
  ];

  const subGridFeatures = [
    {
      id: 1,
      title: "India's IT Billionaires: How HCL, Wipro, and Infosys Founders Built Global Empires",
      author: "New Times Wealth Desk",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=260&h=260&q=85"
    },
    {
      id: 2,
      title: "Inside the Pharma Boom: Sun Pharma, Serum Institute, and India's Medicine Cabinet to the World",
      author: "New Times Wealth Desk",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=260&h=260&q=85"
    },
    {
      id: 3,
      title: "DMart's Quiet Billionaire: Radhakishan Damani's Low-Profile Retail Empire",
      author: "New Times Wealth Desk",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=260&h=260&q=85"
    },
    {
      id: 4,
      title: "From Family Business to Global Conglomerate: The Aditya Birla Group Story",
      author: "New Times Wealth Desk",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=260&h=260&q=85"
    }
  ];

  const listFeatures = [
    {
      id: 1,
      time: "Related Article",
      title: "India's Richest Women: Savitri Jindal, Roshni Nadar, and the Rise of Female Wealth",
      excerpt: "While women remain a minority among India's billionaires, a handful of inheritors and entrepreneurs are reshaping the country's wealth landscape. Who they are and how they got there.",
      author: "New Times Wealth Desk",
      image: "/bb4.jpg"
    },
    {
      id: 2,
      time: "Related Article",
      title: "Beyond the Billionaires: India's Unicorn Startups Creating the Next Generation of Wealth",
      excerpt: "While legacy conglomerates dominate the rich list today, a wave of startup founders in fintech, e-commerce, and SaaS are positioning themselves as India's next billionaire class.",
      author: "New Times Wealth Desk",
      image: "/bb5.jpg"
    },
    {
      id: 3,
      time: "Related Article",
      title: "Why India's Billionaire Count Keeps Climbing - and What It Means for the Economy",
      excerpt: "India added billionaires even as global markets wobbled. A look at the structural forces, including IPOs, stock market growth, and family wealth concentration, driving the country's rapid wealth creation.",
      author: "New Times Wealth Desk",
      image: "/BB6.webp"
    }
  ];

  const byline = (author) => {
    const [name, rest] = author.split(/,(.+)/);
    return (
      <p className="m-0 text-[11px] font-medium uppercase tracking-[0.04em] text-gray-500">
        By <span className="font-semibold text-gray-950 underline decoration-gray-400 underline-offset-2">{name}</span>
        {rest ? `,${rest}` : ''}
      </p>
    );
  };

  return (
    <section className="mt-14 w-full bg-white pb-16 text-gray-950">
      <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-4 md:flex-row md:items-end md:justify-between">
        <h1 className="font-serif text-4xl font-normal leading-none text-gray-950 md:text-5xl">
          Related Articles
        </h1>
        <div className="flex gap-5 overflow-x-auto text-xs font-semibold text-gray-500">
          <span className="shrink-0 text-gray-950">India's Richest</span>
          <span className="shrink-0">Reliance</span>
          <span className="shrink-0">Adani Group</span>
          <span className="shrink-0">Family Wealth</span>
          <span className="shrink-0">Startup Wealth</span>
        </div>
      </div>

      <div className="grid gap-8 border-b border-gray-200 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <aside className="order-2 grid gap-8 md:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:border-r lg:border-gray-200 lg:pr-6">
          {sideFeatures.map((article, index) => (
            <article key={article.id} className={index > 0 ? 'border-t border-gray-200 pt-8 md:border-t-0 lg:border-t' : ''}>
              <img className="mb-4 aspect-[16/9] w-full object-cover" src={article.image} alt={article.title} />
              <h3 className="mb-3 font-serif text-2xl font-semibold leading-tight text-gray-950">
                {article.title}
              </h3>
              {byline(article.author)}
            </article>
          ))}
        </aside>

        <article className="order-1 lg:order-2">
          <img className="mb-6 aspect-[16/9] w-full object-cover lg:aspect-[16/8.5]" src={mainFeature.image} alt={mainFeature.title} />
          <h2 className="mx-auto max-w-5xl text-center font-serif text-3xl font-semibold leading-tight text-gray-950 md:text-4xl">
            {mainFeature.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-gray-600">
            Reliance Industries' rise from a textile trading firm to a conglomerate spanning energy, telecom, and retail mirrors India's own economic transformation. A look at the strategic bets that built Ambani's fortune.
          </p>
          <div className="mt-4 text-center">{byline(mainFeature.author)}</div>
        </article>
      </div>

      <div className="grid gap-8 border-b border-gray-200 py-8 md:grid-cols-2">
        {subGridFeatures.map(article => (
          <article key={article.id} className="grid grid-cols-[96px_minmax(0,1fr)] gap-5 border-b border-gray-100 pb-6 last:border-b-0 md:border-b-0">
            <img className="h-24 w-24 object-cover" src={article.image} alt={article.title} />
            <div>
              <h4 className="mb-3 font-serif text-xl font-semibold leading-tight text-gray-950">
                {article.title}
              </h4>
              {byline(article.author)}
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div>
          {listFeatures.map((article, idx) => (
            <article key={article.id} className={`grid gap-5 pb-8 md:grid-cols-[minmax(0,1fr)_220px] ${idx !== listFeatures.length - 1 ? 'mb-8 border-b border-gray-200' : ''}`}>
              <div>
                <span className="mb-2 block text-xs text-gray-500">{article.time}</span>
                <h3 className="mb-3 font-serif text-2xl font-semibold leading-tight text-gray-950">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-600">{article.excerpt}</p>
                {byline(article.author)}
              </div>
              <img className="aspect-[11/7] w-full object-cover md:h-[140px]" src={article.image} alt={article.title} />
            </article>
          ))}

          <div className="mt-5 flex justify-center">
            <button className="bg-gray-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-black">
              More Articles
            </button>
          </div>
        </div>

        <aside className="lg:pl-4">
          <div className="mb-2 text-center text-[10px] uppercase tracking-[0.08em] text-gray-400">Advertisement</div>
          <div className="flex min-h-[480px] flex-col items-center justify-center bg-black bg-[radial-gradient(circle_at_top_right,#064e3b,#000_60%)] p-8 text-center">
            <div className="mb-4 text-3xl font-black text-emerald-500">MIC</div>
            <h3 className="mb-4 text-3xl font-bold leading-tight text-white">Trade the World's Most Dynamic Stocks</h3>
            <p className="mb-6 text-emerald-400">Leverage up to 1:20</p>
            <button className="mb-8 w-full bg-emerald-500 px-6 py-3 font-bold text-black">
              Start Trading
            </button>
            <p className="text-[10px] leading-5 text-gray-500">
              Risk Warning: Trading in securities involves significant risk. Prices may fluctuate and securities may become valueless.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
