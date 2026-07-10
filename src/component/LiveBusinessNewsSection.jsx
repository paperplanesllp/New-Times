import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const businessTopics = [
  { id: 'business', label: 'Business', to: '/business-live/business' },
  { id: 'finance', label: 'Finance', to: '/business-live/finance' },
  { id: 'marketing', label: 'Marketing', to: '/business-live/marketing' },
  { id: 'technology', label: 'Technology', to: '/business-live/technology' },
  { id: 'ai', label: 'AI', to: '/business-live/ai' },
];

export const liveBusinessContent = {
  // BUSINESS TAB CONTENT - edit only this block for Business.
  business: {
    featured: {
      id: 'business-featured',
      slug: 'vande-bharatam-gautam-adani-birthday-conviction-global',
      title: "Vande Bharatam: The Initiative That Took Gautam Adani's Birthday Conviction Global in Under Two Weeks",
      description:
        "Vande Bharatam, the nationwide entrepreneurship and innovation programme Gautam Adani launched on June 24, 2026, is widening the search for India's next generation of founders beyond the country's familiar startup corridors.",
      image: '/back.webp',
      body: [
        { type: 'heading', text: "Vande Bharatam: The Initiative That Took Gautam Adani's Birthday Conviction Global in Under Two Weeks" },
        "There is a structural problem at the heart of India's startup story that the headline numbers rarely capture. India has over 207,000 DPIIT-recognised startups. It has 127 unicorns. It has produced some of the most consequential technology and consumer companies of the past two decades. And yet, the geography of that achievement is strikingly concentrated. The vast majority of India's celebrated startup founders come from a handful of cities, attended a small number of institutions, and built their companies in ecosystems where access to mentors, investors, co-founders, and early customers was a function of proximity rather than merit. The founder in Lucknow with a solution to a problem that 200 million Indians face, the woman in a small town in Odisha who has developed a method to reduce post-harvest crop losses for farmers in her district, the engineer in a Tier III city who has built a product that could transform rural healthcare delivery, these people exist in their millions across India. They have simply never had a room to walk into.",
        "Vande Bharatam is Gautam Adani's attempt to build that room, and to build it everywhere simultaneously.",
        { type: 'heading', text: "What the Programme Is and How It Works" },
        "Vande Bharatam is a structured national entrepreneurship and innovation initiative designed to identify, evaluate, nurture, and amplify entrepreneurial talent from every corner of India, with no geographic, demographic, or sectoral restriction on who can apply. Applications are open until July 19, 2026, through vandebharatam.org, and the response in the two weeks since launch has already demonstrated that the demand for exactly this kind of access has been both deep and geographically broad.",
        "The evaluation framework prioritises four dimensions: the innovation quality of the idea or venture being submitted, the entrepreneurial potential of the applicant, the scalability of what they are building, and the impact it has the potential to create, whether social, economic, environmental, or some combination of all three. Seventy-five finalists selected through this process will be brought to Ahmedabad for a structured programme of mentorship sessions, industry interactions, and investor engagement. The Grand Finale is scheduled around India's Independence Day on August 15, 2026, a date chosen with deliberate symbolic intention: the programme is designed to declare entrepreneurial independence from the geography and access constraints that have long determined who gets a chance in India's innovation economy.",
        "What happens after the finale is as important as the finale itself. The selected innovators will gain access to ongoing mentorship from practitioners who have built significant businesses, investor relationships capable of providing both early-stage capital and strategic guidance, incubation support that addresses the operational gaps most early-stage ventures face, and strategic partnerships that can accelerate the path from idea to market. The programme is explicitly designed not as a one-time competition but as the beginning of a sustained engagement between Adani Group's resources and networks and the innovators who emerge from the selection process.",
        { type: 'heading', text: "The Global Response: India and Beyond" },
        "The geographic scope of the applications received in Vande Bharatam's first two weeks is one of the most striking aspects of what the initiative has already produced. Applications have come in from all 28 states and 8 union territories of India, meaning that every single administrative region of the country is represented in the applicant pool within a fortnight of launch. That breadth of domestic participation speaks to both the quality of the outreach and the depth of pent-up demand for exactly this kind of programme among innovators who have historically had no comparable platform to approach.",
        "Equally significant is the international dimension. Applications have arrived from the United States, the United Kingdom, the UAE, and Canada, reflecting both the global reach of the Indian diaspora and the recognition among Indians living abroad that a programme of this scale and institutional backing represents a genuine pathway back into India's innovation economy. For diaspora entrepreneurs who carry deep knowledge of global markets, advanced technical education from international institutions, and international professional networks, but who want to build something meaningful for India, Vande Bharatam offers a structured re-entry point that has not previously existed at this level of credibility and resource backing.",
        { type: 'heading', text: "The Sectors That Are Leading" },
        "The category distribution of applications received so far reveals both where India's grassroots innovation energy is concentrated and where the country's most pressing problem-solution opportunities are being worked on by entrepreneurs outside the mainstream startup ecosystem. Technology, AI and Deep Tech has emerged as the leading category by application volume, a finding that challenges the assumption that advanced technology development is the exclusive domain of engineers from premier institutions in major cities. Across India's smaller cities, engineering colleges, and self-taught technical communities, there is clearly a significant population of people building with AI, developing hardware solutions, and thinking about deep technology applications to Indian-specific problems.",
        "The second cluster of strong categories, Agri, Food and Rural Economy, Health and Pharma, and Education, reflects the reality of where India's most consequential unsolved problems actually sit. Agriculture employs a significant portion of India's workforce and remains vulnerable to supply chain inefficiencies, climate unpredictability, and post-harvest losses that technology and entrepreneurship could address far more effectively than they currently do. Healthcare access outside India's major cities remains one of the country's most persistent structural failures, and the entrepreneurs applying from smaller cities and rural areas are frequently building solutions calibrated to the specific constraints and conditions of those environments in ways that urban entrepreneurs rarely manage. Education innovation, particularly for the first-generation learners and rural students who represent the largest underserved population in Indian education, has emerged as another strong cluster of applications.",
        "Manufacturing and Industry 4.0, Retail and Consumer Commerce, and Sustainability round out the major categories, together painting a picture of a national innovation community that is thinking about India's economic challenges with specificity, ambition, and practical grounding.",
        { type: 'heading', text: "The People the Selection Process Has Surfaced" },
        "Perhaps the most meaningful dimension of what Vande Bharatam's early application pool reveals is the diversity of the people building within it. Women entrepreneurs have submitted applications in significant numbers, reflecting both the genuine growth in women-led entrepreneurship across India over the past decade and the appeal of a programme that evaluates ideas on their merits rather than through the social and professional networks that have historically disadvantaged women founders in the Indian startup ecosystem.",
        "Rural changemakers, entrepreneurs who are building solutions rooted in and accountable to the communities they come from, represent another substantial applicant cohort. These are founders whose competitive advantage is not a prestigious educational credential or a network of angel investor contacts. It is direct knowledge of a problem, intimate understanding of the context in which a solution needs to work, and the credibility that comes from being a member of the community they are trying to serve. Sustainability-focused innovators, building across climate solutions, clean energy access, waste management, and environmental services, make up the third significant group, reflecting the growing recognition among India's grassroots innovation community that the country's environmental challenges represent entrepreneurial opportunities of enormous scale.",
        { type: 'heading', text: "The Conviction Behind the Initiative" },
        "Gautam Adani's framing of Vande Bharatam, in his own words at the launch, was unambiguous about what the programme is designed to correct. He described it not as a competition but as a conviction: a conviction that the next idea to change India will not come from where it always has, and that India's greatest chapter is being written by people who were never given a room to begin with. Actor, television host, and entrepreneur Rajeev Khandelwal serves as the programme's Ambassador and Host, bringing his own credibility as a public figure with wide reach across precisely the non-metro India that the programme is designed to serve.",
        "The applications that have poured in from every state and union territory of India, and from four countries beyond India's borders, in the two weeks since launch suggest that the conviction Adani expressed on his birthday has resonated with exactly the people it was designed to reach. The grassroots innovator in a small town who has never had a platform to present their idea to investors, the woman entrepreneur in a rural district whose solution addresses a problem that urban startup founders have never had to think about, the engineer in a Tier III city whose product could change lives at scale if someone would only give it the resources and connections to reach the market, these are the people that 75 finalist selections and one Independence Day Grand Finale in Ahmedabad are designed to find. With applications closing on July 19, the most important question Vande Bharatam will answer is not who wins the finale. It is who gets discovered because of it, and what they go on to build.",
      ],
    },
    sideStories: [
      {
        id: 'business-side-1',
        slug: 'bad-boy-pizza-global-ambition-qsr-industry',
        title: "From One Outlet to a Global Ambition: How Bad Boy Pizza Is Rewriting the Rules of India's QSR Industry on Its First Birthday",
        description:
          "One year ago, Indian music artist Badshah and F&B entrepreneur Karan Tanna opened a single pizza outlet in Mumbai's Lokhandwala. Today, Bad Boy Pizza is announcing a roadmap to 70 outlets, a $24 million annual revenue target, and international expansion into London and New York. The story of how they got here is less about celebrity branding and more about what happens when genuine product conviction meets disciplined unit economics.",
        image: '/ar.jpg',
        body: [
          { type: 'heading', text: "From One Outlet to a Global Ambition: How Bad Boy Pizza Is Rewriting the Rules of India's QSR Industry on Its First Birthday" },
          "India's quick service restaurant sector is littered with celebrity-backed food ventures that launched with considerable fanfare and quietly receded when the novelty of the famous face wore off and the product could not hold customer attention on its own merits.",
          "Bad Boy Pizza, the pizza brand co-founded by rapper and music producer Badshah alongside veteran F&B entrepreneur Karan Tanna, was designed from its inception to be a different kind of story. Not a celebrity licensing arrangement. Not a name on a packaging box with someone else's product inside it. A genuinely built restaurant brand, with a culinary identity, an operational philosophy, and unit economics structured to work at scale.",
          "One year after its first outlet opened, the brand is announcing results that validate that founding ambition. On its first anniversary, Bad Boy Pizza has revealed an aggressive expansion roadmap: scaling to 70 or more outlets across India by 2028, hitting Rs 200 crore in annual recurring revenue which translates to approximately $24 million USD, and making its international debut in London and New York by 2029. Five new experiential flagship outlets will open before the end of December 2026, with three locations in Mumbai and one each in Surat and Ahmedabad. Over 180 franchise inquiries have come in from domestic and international markets. And the financial fundamentals underpinning this ambition are not projections built on optimism. They are numbers the brand has already produced.",
          { type: 'heading', text: "The Dine-In Bet That Everyone Said Was Wrong" },
          "When Bad Boy Pizza launched its flagship outlet at Lokhandwala, Mumbai in 2025, the conventional wisdom in the QSR industry was unambiguous: any new restaurant brand in India needed to be built around food delivery aggregators and quick commerce from day one. The delivery economy had trained Indian consumers to order in, and the unit economics of restaurant delivery, while complex, represented the highest volume channel available to a new entrant. Bad Boy Pizza chose to ignore that conventional wisdom entirely.",
          "For its first ten months of operation, the brand was dine-in only. No Zomato. No Swiggy. No delivery. The decision was deliberate and it was contentious. The logic behind it was straightforward even if the execution required confidence: Badshah and Tanna were not trying to build a delivery volume story. They were trying to build a subculture. A place that people wanted to come to, spend time in, and come back to. A brand that earned loyalty through experience rather than through convenience. That strategy produced results that most QSR brands would consider exceptional by any measure.",
          "The flagship Lokhandwala outlet achieved operational profitability in its second month of operation. Today, 95 per cent of the brand's revenue comes from dine-in customers. The repeat customer ratio exceeds 60 per cent. The outlet payback period stands at 15 to 18 months, and the target store-level EBITDA is 22 to 24 per cent. In a sector where many QSR operators consider a 15 per cent EBITDA margin a strong outcome and where payback periods of three to four years are common, these numbers are structurally significant. They suggest that the dine-in bet, which looked counterintuitive when the brand launched, has produced a customer economics model that is more durable than what aggregator-dependent delivery volumes typically generate.",
          { type: 'heading', text: "The Product: Where East Meets West on a 48-Hour Fermented Crust" },
          "The culinary proposition at the centre of Bad Boy Pizza is built around 48-hour cold-fermented New York-style pizza crusts. The extended cold fermentation process develops gluten structure gradually, produces a more complex flavour profile, and creates the characteristic chew and slight tang of a properly made New York-style crust.",
          "On top of that foundation, Bad Boy Pizza has built a menu that deliberately bridges Indian culinary culture and international pizza conventions in ways that are specific enough to be distinctive rather than generic enough to be forgettable. The fan favourites that have driven repeat visit behaviour include the Pushpa Pizza topped with edible flowers, Butter Chicken Garlic Bread, Kerala Fried Chicken, and a Paan Soft-Serve Sundae that has become one of the brand's most socially shared items. The anniversary menu introduces Dabeli Garlic Bread, a Khao Suey Pizza drawing on the Burmese-influenced cuisine popular in parts of Western India, and a Thai Basil Pizza. The through-line across all of these items is the same: recognisable enough to be approachable, specific enough to be memorable, and executed at a quality standard that justifies a positioning above the mass QSR tier.",
          "This is the market segment that Karan Tanna has described as mass premium, a positioning that sits deliberately between the commodity pricing of the largest QSR chains and the full-service restaurant experience. India's Rs 14,000 crore pizza market, which the founders estimate at approximately $2 billion, has been dominated at the mass end by international franchises and at the premium end by sit-down restaurants. The deliberate positioning of Bad Boy Pizza between those two poles, with dine-in quality at accessible price points, is the market gap the brand is designed to occupy.",
          { type: 'heading', text: "The Expansion Architecture: Clusters, Joint Ventures, and International Ambitions" },
          "The roadmap Badshah and Tanna have announced is structured around what they describe as a cluster-based approach to scaling, a discipline that many F&B brands have learned the hard way is essential to preserving quality and operational consistency as outlet count grows. Rather than attempting simultaneous pan-India expansion across every major city at once, the plan phases geographic entry in a sequence that allows supply chain, team training, and brand awareness to develop in each market before the next cluster opens.",
          "The Western India phase runs through December 2027 and targets 30 outlets across Mumbai, Surat, Ahmedabad, and other cities in the region, with an ARR target of Rs 100 crore by that point. From mid-2027 onwards, the brand will enter Delhi NCR, Bengaluru, and Hyderabad through a combination of joint ventures and franchise partnerships, a model that allows faster geographic coverage while keeping the operational and capital demands manageable relative to fully owned and operated expansion. The international timeline targets London and New York by 2028 to 2029, markets that both have large Indian diaspora communities and an established appetite for premium fast casual dining that the brand's positioning is well suited to address.",
          "The franchise interest the brand has already attracted adds credibility to the expansion ambition. Over 180 inquiries from both domestic and international markets in the first year of operation, before any formal franchise programme has been announced, suggests that the brand's financial performance has been visible enough to attract the attention of experienced F&B operators looking for a concept to back.",
          { type: 'heading', text: "What Bad Boy Pizza Means for India's Celebrity Brand Landscape" },
          "Bad Boy Pizza arrives in a moment when India's celebrity-backed consumer brand sector is maturing rapidly. The landscape now includes Shraddha Kapoor's Palmonas, Katrina Kaif's Kay Beauty, Ranveer Singh's SuperYou, Kriti Sanon's Hyphen, and Kusha Kapila's Underneat, among many others across beauty, wellness, fashion, and food. The quality of these ventures varies considerably, and the market has become sophisticated enough to distinguish between brands that use celebrity equity as a substitute for product quality and brands that use it as an amplifier of something that would have been worth building regardless of who was behind it.",
          "Bad Boy Pizza's first-year performance places it firmly in the second category. The 60 per cent repeat customer rate is the most important number in its entire history, because it is the metric that a celebrity name alone cannot produce. A famous founder can drive a trial. It cannot drive return visits at that rate. Return visits at 60 per cent come from the dough, the menu, the service, the experience of being in the room. They come from products. And product is what Karan Tanna, with his background building F&B brands before Badshah was ever involved, brought to the partnership alongside the cultural credibility and reach that Badshah contributed.",
          "As Badshah himself put it at the anniversary announcement, the growth of the past year has proven that when you build an authentic and uncompromising product, it forms its own community. That community, 95 per cent of whom are walking into a restaurant rather than tapping a delivery app, is the foundation on which 70 outlets, Rs 200 crore in revenue, and a New York flagship will be built.",
          "The first year was proof of concept. The next three are the test of whether Bad Boy Pizza can translate what it built in one Lokhandwala outlet into a brand that scales with the same fidelity to the product and experience that made it work in the first place. The unit economics say it can. The repeat ratio says customers believe it. The next chapter will tell us whether the expansion plan delivers on what both those numbers promise.",
        ],
      },
      {
        id: 'business-side-2',
        title: 'India Sees Hiring Surge as Global Tech Firms Scale AI and R&D Teams',
        description:
          'Strong demand for AI talent is driving global companies to accelerate hiring and research expansion in India.',
        image: '/surge.webp',
      },
      {
        id: 'business-side-3',
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
      url: 'https://share.google/YOnzKfGY0zboJl3V2',
      image: '/A2.webp',
    },
    sideStories: [
      {
        id: 'ai-side-1',
        title: 'Generative AI Becomes Core Infrastructure in Product Development Across Global Tech Firms',
        description:
          'AI tools are now embedded directly into software, design, and engineering workflows.',
        url: 'https://share.google/D9N9yhfhgIuCSeXoh',
        image: '/A1.jpeg',
      },
      {
        id: 'ai-side-2',
        title: 'AI Startup Funding Surges as Investors Bet on Next Wave of Intelligent Applications',
        description:
          'Venture capital interest in AI-native startups continues to grow across sectors.',
        url: 'https://share.google/XHkwVXjpsBbgrSKu9',
        image: '/A3.webp',
      },
    ],
    streamStories: [
      {
        id: 'ai-stream-1',
        title: 'Big Tech Expands AI Data Center Investments to Support Next-Generation Models',
        url: 'https://share.google/JNPZ2Ve0zGpxoMA80',
        image: '/A4.jpg',
      },
      {
        id: 'ai-stream-2',
        title: 'AI Talent Demand Hits Record High as Companies Compete for Specialized Engineers',
        url: 'https://share.google/muKxovBPGe5WJ6mbU',
        image: '/A5.jpg',
      },
      {
        id: 'ai-stream-3',
        title: 'AI-Powered Tools Transform Marketing, Finance, and Customer Experience Industries',
        url: 'https://share.google/I1XixJVLFHg9vYrEX',
        image: '/A6.jpg',
      },
      {
        id: 'ai-stream-4',
        title: 'Governments Push AI Regulation Frameworks as Adoption Outpaces Policy',
        url: 'https://share.google/LjHUdrzC5tJ4NTiYw',
        image: '/A6.jpg',
      },
    ],
  },
};

function BusinessStory({ story, compact = false, topicPath }) {
  if (!story) {
    return null;
  }

  const storyPath = story.slug && topicPath ? `${topicPath}/${story.slug}` : topicPath;
  const readStoryClass = compact
    ? 'news-source-link mt-2 inline-flex text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950'
    : 'news-source-link mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950';

  const media = (
    <img
      src={story.image}
      alt={story.title}
      onError={(event) => {
        event.currentTarget.alt = '';
        event.currentTarget.style.opacity = '0';
      }}
      className={compact ? 'object-cover w-20 h-20 rounded-2xl' : 'mb-4 h-[220px] w-full rounded-3xl object-cover'}
    />
  );

  return (
    <article className={compact ? 'grid grid-cols-[80px_minmax(0,1fr)] gap-4 border-b border-gray-100 pb-5' : 'border-b border-gray-100 pb-7'}>
      {storyPath ? <Link to={storyPath}>{media}</Link> : media}
      <div>
        {storyPath ? (
          <Link to={storyPath} className="text-slate-950 no-underline hover:underline underline-offset-4">
            <h3 className={compact ? 'story-headline m-0 text-[15px] font-semibold leading-tight text-slate-950' : 'story-headline m-0 text-xl font-semibold leading-tight text-slate-950'}>
              {story.title}
            </h3>
          </Link>
        ) : (
          <h3 className={compact ? 'story-headline m-0 text-[15px] font-semibold leading-tight text-slate-950' : 'story-headline m-0 text-xl font-semibold leading-tight text-slate-950'}>
            {story.title}
          </h3>
        )}
        {story.description && (
          <p className={compact ? 'mt-2 text-xs leading-5 text-slate-600' : 'mt-3 text-sm leading-6 text-slate-600'}>
            {story.description}
          </p>
        )}
        {story.url ? (
          <a className={readStoryClass} href={story.url} target="_blank" rel="noreferrer">
            Read Story
          </a>
        ) : storyPath ? (
          <Link className={readStoryClass} to={storyPath}>
            Read Story
          </Link>
        ) : (
          <span className={readStoryClass}>Read Story</span>
        )}
      </div>
    </article>
  );
}

export default function LiveBusinessNewsSection({ initialTopic = 'business', showTopicLinks = false }) {
  const [activeTopic, setActiveTopic] = useState(liveBusinessContent[initialTopic] ? initialTopic : 'business');
  const activeContent = liveBusinessContent[activeTopic] || liveBusinessContent.business;
  const { featured, sideStories, streamStories } = activeContent;
  const activeTopicPath = businessTopics.find((topic) => topic.id === activeTopic)?.to;
  const featuredPath = featured.slug && activeTopicPath ? `${activeTopicPath}/${featured.slug}` : activeTopicPath;

  return (
    <section className="px-4 py-8 bg-white shadow-sm sm:px-6 lg:px-8 text-slate-950">
      <div className="pb-3 mb-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 m-0 text-2xl font-semibold tracking-tight text-slate-950">
          Business news and Updates
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 pb-3 border-b border-gray-100 mb-7" role="tablist" aria-label="Business news topics">
        {businessTopics.map((topic) => {
          const isActive = activeTopic === topic.id;

          return showTopicLinks ? (
            <Link
              key={topic.id}
              to={topic.to}
              className={`border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] no-underline ${
                isActive ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-slate-600'
              }`}
              role="tab"
              aria-selected={isActive}
            >
              {topic.label}
            </Link>
          ) : (
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
            <BusinessStory key={story.id} story={story} topicPath={activeTopicPath} />
          ))}
        </div>

        <article>
          <Link to={featuredPath || '/business-live/business'}>
            <img
              src={featured.image}
              alt={featured.title}
              onError={(event) => {
                event.currentTarget.alt = '';
                event.currentTarget.style.opacity = '0';
              }}
              className="mb-5 h-[360px] w-full rounded-3xl object-cover"
            />
          </Link>
          <Link to={featuredPath || '/business-live/business'} className="text-slate-950 no-underline hover:underline underline-offset-4">
            <h2 className="m-0 text-3xl font-semibold leading-tight featured-headline text-slate-950 md:text-4xl">
              {featured.title}
            </h2>
          </Link>
          <p className="mt-4 text-sm leading-7 text-slate-600">{featured.description}</p>
          {featured.url ? (
            <a className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950" href={featured.url} target="_blank" rel="noreferrer">
              Read Story
            </a>
          ) : (
            <Link to={featuredPath || '/business-live/business'} className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">
              Read Story
            </Link>
          )}
        </article>
      </div>

      {streamStories.length > 0 && (
        <div className="grid gap-6 border-t border-gray-200 pt-7 md:grid-cols-2">
          {streamStories.map((story) => (
            <BusinessStory key={story.id} story={story} compact topicPath={activeTopicPath} />
          ))}
        </div>
      )}

   
    </section>
  );
}
