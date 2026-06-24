import React, { useState } from 'react';

const businessTopics = [
  { id: 'business', label: 'Business' },
  { id: 'finance', label: 'Finance' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'technology', label: 'Technology' },
  { id: 'ai', label: 'AI' },
];

const liveBusinessContent = {
  // BUSINESS TAB CONTENT - edit only this block for Business.
  business: {
    featured: {
      id: 'business-featured',
      title: "India's Digital Payments Ecosystem Hits New High as UPI Transactions Cross Record Volume",
      description:
        "UPI continues its rapid growth, driving India's digital payments ecosystem to a new peak with record-breaking transaction volumes across the country.",
      image: '/upi.webp',
    },
    sideStories: [
      {
        id: 'business-side-1',
        title: 'India Sees Hiring Surge as Global Tech Firms Scale AI and R&D Teams',
        description:
          'Strong demand for AI talent is driving global companies to accelerate hiring and research expansion in India.',
        image: '/surge.webp',
      },
      {
        id: 'business-side-2',
        title: 'Private Equity Interest in Indian Consumer Brands Rises on Strong Demand',
        description:
          "Strong domestic demand is driving renewed private equity interest in India's fast-growing consumer brands.",
        image: '/equity.avif',
      },
    ],
    streamStories: [
      {
        id: 'business-stream-1',
        title: "India's Startup Ecosystem Sees Fresh Funding Momentum as Investors Return to Growth Bets",
        description:
          'Venture capital activity is picking up again as investors focus on AI, SaaS, and consumer tech startups.',
        image: '/stam.avif',
      },
      {
        id: 'business-stream-2',
        title: 'Global Tech Companies Expand AI Infrastructure Investments Amid Rising Compute Demand',
        description:
          'Big tech firms are scaling data centers and AI infrastructure to support next-generation applications.',
        image: '/open.avif',
      },
      {
        id: 'business-stream-3',
        title: 'India Strengthens Position as Global Manufacturing Hub Amid Supply Chain Diversification',
        description:
          'Companies continue shifting production to India as global supply chains become more diversified.',
        image: '/PlayerGlobal.webp',
      },
      {
        id: 'business-stream-4',
        title: 'Banking Sector Sees Steady Credit Growth Driven by Retail and SME Lending Expansion',
        description:
          'Rising loan demand across retail and small businesses signals improving economic activity.',
        image:
          'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=700&q=85',
      },
    ],
  },
  // FINANCE TAB CONTENT - edit only this block for Finance.
  finance: {
    featured: {
      id: 'finance-featured',
      title: 'RBI Signals Stable Policy Outlook as Inflation Moderates and Growth Holds Firm',
      description:
        'Markets expect continued policy stability as India balances inflation control and economic expansion.',
      image: '/RBI.avif',
    },
    sideStories: [
      {
        id: 'finance-side-1',
        title: 'Global Investors Increase Exposure to Indian Equities Amid AI-Led Growth Narrative',
        description:
          'Foreign capital flows return as India strengthens its position in the global AI and tech economy.',
        image: '/aiii.avif',
      },
      {
        id: 'finance-side-2',
        title: 'Banking Sector Strengthens as Credit Growth Accelerates Across Retail and SME Segments',
        description:
          'Rising loan demand signals improving consumption and business activity across India.',
        image: '/rupa.avif',
      },
    ],
    streamStories: [
      {
        id: 'finance-stream-1',
        title: 'Indian Rupee Shows Stability Amid Strong Foreign Inflows and Controlled Inflation',
        description:
          'Currency remains steady as foreign investment inflows support overall macroeconomic stability.',
        image: '/rupee.avif',
      },
      {
        id: 'finance-stream-2',
        title: "India's Manufacturing Sector Expands as Output and New Orders Continue to Rise",
        description:
          'Strong domestic and export demand is driving sustained growth in industrial production.',
        image:
          'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=700&q=85',
      },
      {
        id: 'finance-stream-3',
        title: 'Mutual Fund Investments Hit New High as Retail Participation in Markets Expands',
        description:
          "Growing investor confidence and SIP inflows continue to strengthen India's equity markets.",
        image:'/mutual.avif',
      },
      {
        id: 'finance-stream-4',
        title: 'Corporate Earnings Show Steady Growth Driven by Strong Demand and Cost Discipline',
        description:
          'Listed companies report stable profitability supported by improving consumption trends.',
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=85',
      },
    ],
  },
  // MARKETING TAB CONTENT - edit only this block for Marketing.
  marketing: {
    featured: {
      id: 'marketing-featured',
      title: 'AI-Driven Marketing Tools Reshape How Brands Target and Convert Customers',
        description:
          'Companies are rapidly adopting AI to personalize ads, optimize campaigns, and improve ROI.',
        image: '/m2.jpg',
    },
    sideStories: [
      {
        id: 'marketing-side-1',
        title: 'Digital Ad Spending in India Surges as Brands Shift Focus to Performance Marketing',
        description:
          'Marketers are reallocating budgets from traditional media to data-driven online channels.',
        image: '/marketing.jpg',
      },
      {
        id: 'marketing-side-2',
        title: 'Social Media Platforms Evolve Into Full-Funnel Marketing Ecosystems for Brands',
        description:
          'Platforms like Instagram, YouTube, and short-video apps are becoming key sales drivers.',
        image: '/media.jpeg',
      },
    ],
    streamStories: [
      {
        id: 'marketing-stream-1',
        title: 'Influencer Marketing Gains Momentum as Brands Focus on Authentic Audience Engagement',
        description:
          'Companies are increasing partnerships with creators to drive trust and improve conversion rates.',
        image: '/influ.png',
      },
      {
        id: 'marketing-stream-2',
        title: 'SEO and Content Marketing See Revival as Brands Invest in Long-Term Organic Growth',
        description:
          'Businesses are prioritizing search visibility and high-quality content to reduce paid ad dependency.',
        image: '/seo.jpg',
      },
      {
        id: 'marketing-stream-3',
        title: 'Personalization Becomes Core Strategy in Digital Marketing Campaigns Worldwide',
        description:
          'Brands are using customer data and AI to deliver highly targeted and relevant messaging.',
        image: '/per.webp',
      },
      {
        id: 'marketing-stream-4',
        title: 'Video-First Marketing Emerges as Dominant Strategy Across Social Media Platforms',
        description:
          'Short-form and interactive videos are driving higher engagement and brand recall across audiences.',
        image: '/social.png',
      },
    ],
  },
  // TECHNOLOGY TAB CONTENT - edit only this block for Technology.
  technology: {
    featured: {
      id: 'technology-featured',
      title: 'AI Adoption Accelerates as Global Enterprises Integrate Automation Across Core Operations',
      description:
        'Businesses are embedding AI into workflows to improve efficiency, speed, and decision-making.',
      image: '/t2.avif',
    },
    sideStories: [
      {
        id: 'technology-side-1',
        title: 'Semiconductor Race Intensifies as Countries Compete for Chip Manufacturing Dominance',
        description:
          'Governments and firms ramp up investments in advanced chip production and supply chains.',
        image: '/t1.webp',
          
      },
      {
        id: 'technology-side-2',
        title: 'Cloud Computing Demand Surges as Companies Expand Digital Infrastructure Worldwide',
        description:
          'Enterprises continue shifting workloads to cloud platforms for scalability and cost efficiency.',
        image: '/t3.webp',
      },
    ],
    streamStories: [
      {
        id: 'technology-stream-1',
        title: 'Big Tech Firms Increase Investment in AI Infrastructure and Data Center Expansion',
        url: 'https://share.google/wqrmCoyhrCcyRNzPG',
        image:
          'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=700&q=85',
      },
      {
        id: 'technology-stream-2',
        title: 'Cybersecurity Spending Rises as AI-Driven Threats Become More Sophisticated',
        url: 'https://share.google/f01SMH6Ti50K6ZMGq',
        image:
          'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=85',
      },
      {
        id: 'technology-stream-3',
        title: 'India Emerges as a Key Global Hub for AI Development and Engineering Talent',
        url: 'https://share.google/8E0aBC0N4qKwWwuvZ',
        image:
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=85',
      },
      {
        id: 'technology-stream-4',
        title: 'Startup Ecosystem Shifts Toward Deep-Tech Innovation in AI, Robotics, and Quantum Computing',
        url: 'https://share.google/NwvEjNu4QSOO2Cfwu',
        image:
          'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=700&q=85',
      },
    ],
  },
  // AI TAB CONTENT - edit only this block for AI.
  ai: {
    featured: {
      id: 'ai-featured',
      title: 'AI Adoption Accelerates as Enterprises Integrate Automation Across Core Business Functions',
      description:
        'Companies are scaling AI use to improve productivity, decision-making, and operational efficiency.',
      image: 'https://share.google/YOnzKfGY0zboJl3V2',
    },
    sideStories: [
      {
        id: 'ai-side-1',
        title: 'Generative AI Becomes Core Infrastructure in Product Development Across Global Tech Firms',
        description:
          'AI tools are now embedded directly into software, design, and engineering workflows.',
        image: 'https://share.google/D9N9yhfhgIuCSeXoh',
      },
      {
        id: 'ai-side-2',
        title: 'AI Startup Funding Surges as Investors Bet on Next Wave of Intelligent Applications',
        description:
          'Venture capital interest in AI-native startups continues to grow across sectors.',
        image: 'https://share.google/XHkwVXjpsBbgrSKu9',
      },
    ],
    streamStories: [
      {
        id: 'ai-stream-1',
        title: 'Big Tech Expands AI Data Center Investments to Support Next-Generation Models',
        image: 'https://share.google/JNPZ2Ve0zGpxoMA80',
      },
      {
        id: 'ai-stream-2',
        title: 'AI Talent Demand Hits Record High as Companies Compete for Specialized Engineers',
        image: 'https://share.google/muKxovBPGe5WJ6mbU',
      },
      {
        id: 'ai-stream-3',
        title: 'AI-Powered Tools Transform Marketing, Finance, and Customer Experience Industries',
        image: 'https://share.google/I1XixJVLFHg9vYrEX',
      },
      {
        id: 'ai-stream-4',
        title: 'Governments Push AI Regulation Frameworks as Adoption Outpaces Policy',
        image: 'https://share.google/LjHUdrzC5tJ4NTiYw',
      },
    ],
  },
};

function BusinessStory({ story, compact = false }) {
  if (!story) {
    return null;
  }

  const readStoryClass = compact
    ? 'news-source-link mt-2 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950'
    : 'news-source-link mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950';

  return (
    <article className={compact ? 'grid grid-cols-[80px_minmax(0,1fr)] gap-4 border-b border-gray-100 pb-5' : 'border-b border-gray-100 pb-7'}>
      <img
        src={story.image}
        alt={story.title}
        onError={(event) => {
          event.currentTarget.alt = '';
          event.currentTarget.style.opacity = '0';
        }}
        className={compact ? 'object-cover w-20 h-20 rounded-2xl' : 'mb-4 h-[220px] w-full rounded-3xl object-cover'}
      />
      <div>
        <h3 className={compact ? 'story-headline m-0 font-serif text-[15px] font-semibold leading-tight text-slate-950' : 'story-headline m-0 font-serif text-xl font-semibold leading-tight text-slate-950'}>
          {story.title}
        </h3>
        {story.description && (
          <p className={compact ? 'mt-2 text-xs leading-5 text-slate-600' : 'mt-3 text-sm leading-6 text-slate-600'}>
            {story.description}
          </p>
        )}
        {story.url ? (
          <a className={readStoryClass} href={story.url} target="_blank" rel="noreferrer">
            Read Story
          </a>
        ) : (
          <span className={readStoryClass}>Read Story</span>
        )}
      </div>
    </article>
  );
}

export default function LiveBusinessNewsSection() {
  const [activeTopic, setActiveTopic] = useState('business');
  const activeContent = liveBusinessContent[activeTopic] || liveBusinessContent.business;
  const { featured, sideStories, streamStories } = activeContent;

  return (
    <section className="px-4 py-8 font-serif bg-white shadow-sm sm:px-6 lg:px-8 text-slate-950">
      <div className="pb-3 mb-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 m-0 font-sans text-2xl font-semibold tracking-tight text-slate-950">
          Business news and Updates
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 pb-3 font-sans border-b border-gray-100 mb-7" role="tablist" aria-label="Business news topics">
        {businessTopics.map((topic) => {
          const isActive = activeTopic === topic.id;

          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setActiveTopic(topic.id)}
              className={`border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                isActive ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-slate-600'
              }`}
              role="tab"
              aria-selected={isActive}
            >
              {topic.label}
            </button>
          );
        })}
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="space-y-8 border-gray-200 lg:border-r lg:pr-6">
          {sideStories.map((story) => (
            <BusinessStory key={story.id} story={story} />
          ))}
        </div>

        <article>
          <img
            src={featured.image}
            alt={featured.title}
            onError={(event) => {
              event.currentTarget.alt = '';
              event.currentTarget.style.opacity = '0';
            }}
            className="mb-5 h-[360px] w-full rounded-3xl object-cover"
          />
          <h2 className="m-0 font-serif text-3xl font-semibold leading-tight featured-headline text-slate-950 md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{featured.description}</p>
          <span className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">
            Read Story
          </span>
        </article>
      </div>

      {streamStories.length > 0 && (
        <div className="grid gap-6 border-t border-gray-200 pt-7 md:grid-cols-2">
          {streamStories.map((story) => (
            <BusinessStory key={story.id} story={story} compact />
          ))}
        </div>
      )}

   
    </section>
  );
}
