import React from 'react';
import { Link, useParams } from 'react-router-dom';

const artistFeatureStory = {
  slug: 'one-arena-kochi-football-anthem',
  category: 'ARTIST',
  sectionLabel: 'Music',
  title: "One Arena: How an 18-Year-Old Singer from Kochi and a Team of Malayali Musicians Created India's Most Talked-About Football Anthem",
  excerpt:
    "An 18-year-old singer from Kochi and a collective of Malayali musicians turned India's football longing into a World Cup anthem that travelled far beyond Kerala.",
  image: '/aaro.PNG',
  thumbnailImage: '/aaro.PNG',
  summary:
    "Rosanne Antony and a collective of Malayali musicians built One Arena as a football anthem shaped by Kerala's love for the game, global pop ambition, and creator-led cultural reach.",
  body: [
    "There is something specific about the way Kerala relates to football that is unlike anything else in India. While the rest of the country has organised its sporting passions almost entirely around cricket, Kerala has maintained a genuine, multigenerational love affair with the beautiful game.",
    "India, of course, has never qualified for a FIFA World Cup. That absence, felt particularly acutely in a state that cares about football as seriously as Kerala does, is the emotional foundation on which One Arena was built. Not a song about watching from the sidelines. A song about dreaming of the day India steps onto that stage.",
    "The Song and the People Who Made It",
    "One Arena was composed by Midhun K M and arranged by Vineeth Esthappan, both part of a wider collective of Malayali musicians and football enthusiasts who came together specifically for the project. The track blends melody, rap, and orchestration in a way that sounds less like a regional tribute and more like something assembled for an international broadcast.",
    "The voice at the centre of the production is Rosanne Antony, an 18-year-old from Kochi who had been working in commercial recordings before the project found its way to her. When she heard the track for the first time, the decision was immediate.",
    "What nobody anticipated, including Rosanne herself, was how naturally the song would fit her voice. The qualities that make One Arena distinctive as a production, its movement between vocal registers, lyrical passages, rhythmic spoken word, intimacy, and anthem-scale release, turned out to be qualities she handled naturally.",
    "A Voice Shaped by Decades of Music",
    "Rosanne Antony's relationship with music began at the age of six, though she waited until she was thirteen before beginning formal professional training. By the time she was eleven, it was clear that music was not something she did alongside the rest of her life. It was woven through it.",
    "Kerala's Shakira: The Comparison That Found Her",
    "When One Arena began circulating on social media, the comparison that appeared most frequently in comments and responses was to Shakira. The energy of One Arena, the quality of Rosanne's performance, and the production's international ambition combined to produce a response that the team had not specifically sought but that arrived regardless.",
    "The Dream the Song Carries",
    "One Arena is, at its structural core, a song about longing. The longing of Indian footballers who train for years inside a system that has never put them on the stage they are training for. The longing of fans, particularly in Kerala, who care about the game with a fervour that has no obvious outlet in international competition.",
    "The production team released One Arena after the FIFA World Cup had already begun, unsure how it would land. What happened next exceeded any reasonable expectation: half a million views in under a week, responses from Latin America and Mexico, and sharing patterns that suggested the song was travelling organically.",
    "What One Arena Means Beyond the Music",
    "The story of One Arena is partly a music story and partly a story about Kerala's relationship with football. But it is also a story about what becomes possible when a group of people with craft and passion decide to make something without waiting for institutional permission.",
  ],
};

const creatorStories = [
  artistFeatureStory,
  {
    slug: 'india-creator-economy-1-trillion-consumer-spending-bcg',
    category: 'CREATOR ECONOMY',
    title: "India's Creator Economy Could Influence $1 Trillion in Consumer Spending by 2030: BCG",
    excerpt:
      "New Boston Consulting Group report reveals how India's digital creators are transforming from social media personalities into one of the country's most influential economic forces.",
    image: '/ec.webp',
    summary:
      "India currently has around 2 to 2.5 million monetised digital creators who influence more than 30 per cent of consumer purchase decisions, with creator-led influence already shaping an estimated $350-400 billion in annual consumer spending.",
    body: [
      "India's creator economy has entered a defining phase of growth, evolving from a niche digital trend into one of the country's most influential business ecosystems. According to a landmark report released by Boston Consulting Group, India's creator economy is projected to influence more than $1 trillion in annual consumer spending by 2030.",
      "The report estimates that India currently has between 2 million and 2.5 million monetised digital creators, with content spanning entertainment, education, finance, technology, beauty, health, travel, gaming, and entrepreneurship. Collectively, these creators already influence an estimated $350-400 billion in annual consumer spending.",
      "The findings underline a major shift in how businesses connect with consumers. What was once considered influencer marketing has evolved into a sophisticated ecosystem where creators drive product discovery, educate consumers, build communities, and increasingly influence purchasing behaviour.",
      "The Evolution of India's Creator Economy",
      "Over the past decade, affordable smartphones, low-cost mobile data, expanding internet access, and rapid social platform adoption have enabled millions of individuals to become content creators. Initially dominated by entertainment and lifestyle content, the creator economy now spans investment advice, fitness, education, technology reviews, personal finance, food, travel, and healthcare awareness.",
      "Platforms such as YouTube, Instagram, LinkedIn, Facebook, and short-form video platforms have enabled creators to reach audiences that often rival traditional media. Unlike traditional celebrities, creators build communities through frequent interaction, authenticity, and specialised expertise.",
      "From Influencers to Business Partners",
      "The BCG report suggests that brands are fundamentally changing how they engage with creators. Instead of viewing creators as temporary promotional channels, companies are increasingly forming long-term partnerships that integrate creators into product launches, customer education, brand storytelling, and community-building initiatives.",
      "Many creators now participate in product development, campaign planning, customer feedback collection, and brand strategy. Their understanding of audience preferences enables businesses to communicate more effectively while improving consumer trust.",
      "Consumer Behaviour Is Changing",
      "Consumers increasingly seek authentic opinions before making purchases. Rather than relying exclusively on television commercials or brand messaging, buyers often watch product reviews, comparison videos, tutorials, testimonials, and educational content created by trusted digital personalities.",
      "As a result, creators have become an essential part of the modern consumer journey, from product discovery and research to evaluation and final purchase.",
      "Technology Driving Growth",
      "Artificial intelligence, improved video editing tools, content management platforms, analytics software, and automated production technologies have lowered barriers to content creation. Individual creators can now produce professional-quality content using smartphones, AI-assisted editing software, automated subtitles, virtual production tools, and cloud collaboration platforms.",
      "A Growing Opportunity for Businesses",
      "BCG believes creators will increasingly influence customer acquisition, product development, commerce, education, and customer retention. Direct-to-consumer brands are already leveraging creators to launch products, conduct live commerce events, gather customer insights, and build long-term brand loyalty.",
      "The report suggests that businesses capable of measuring creator performance through business outcomes rather than social media metrics alone will gain a competitive advantage in the coming years.",
      "India's Digital Future Will Be Creator-Led",
      "The projection that creators could influence more than $1 trillion in annual consumer spending by 2030 reflects a fundamental transformation in how products are discovered, trusted, and purchased in the digital age. As technology, commerce, and content continue to converge, India's creator economy is poised to become one of the country's most significant drivers of entrepreneurship, innovation, and economic growth."
    ],
  },
  {
    slug: 'asci-2026-ai-influencer-rules-digital-humans',
    category: 'AI INFLUENCERS',
    title: "ASCI's 2026 AI Influencer Rules Are Here: Why Brands Can No Longer Hide Their Digital Humans",
    excerpt:
      "India's advertising regulator introduces a new compliance framework for AI-generated influencers, signalling a major shift in how brands, agencies, and creators approach transparency in the age of artificial intelligence.",
    image: '/asccc.avif',
    thumbnailImage: '/asccc.avif',
    summary:
      'Every piece of content featuring an AI-generated influencer must carry a clear disclosure stating that the persona is virtual or AI-generated, with stricter rules for video visibility and child-focused campaigns.',
    body: [
      "India's digital advertising landscape has entered a new phase of accountability. As artificial intelligence rapidly transforms content creation and influencer marketing, the Advertising Standards Council of India has introduced its most comprehensive update yet to influencer advertising guidelines.",
      "Virtual influencers, computer-generated personalities that look and behave like real people, have become increasingly common in campaigns across fashion, beauty, technology, finance, and consumer goods. While this presents opportunities for brands, it also raises a crucial question: should consumers always know when they are interacting with an AI rather than a real person?",
      "ASCI's answer is clear: yes.",
      "A New Era of Transparency",
      "Under the updated framework, advertisements featuring AI-generated or virtual influencers must clearly disclose that the personality is artificial. The disclosure should be prominent and easy to notice so consumers immediately understand they are viewing AI-generated content rather than endorsements from a real individual.",
      "For videos longer than 15 seconds, disclosure must appear early and remain visible enough to be understood. ASCI also prohibits AI influencers from making claims based on sensory experiences they cannot actually have.",
      "Why AI Influencers Are Growing So Quickly",
      "Generative AI has changed how brands produce marketing content. Unlike traditional influencers, AI-generated personalities never need rest, can adapt to multiple languages and markets, and allow brands to maintain complete creative control over messaging.",
      "However, as AI-generated content becomes increasingly lifelike, regulators argue that ethical safeguards are essential to prevent confusion, deception, and misuse.",
      "New Guardrails for Responsible Advertising",
      "The guidelines make it clear that AI-generated influencers should not mislead consumers by presenting fabricated experiences or making claims that imply genuine human interaction with a product. The regulator has also reinforced protections for children in sensitive categories.",
      "Consumer Trust Is Becoming a Competitive Advantage",
      "Trust has always been central to influencer marketing. Marketing experts argue that clearly identifying AI-generated content is not simply a regulatory obligation, but a way for brands to build stronger consumer confidence.",
      "Compliance Is No Longer Optional",
      "ASCI's move reflects increasing regulatory attention on influencer marketing. The updated AI influencer guidance builds on broader disclosure expectations and encourages advertisers to adopt compliance processes from the earliest stages of campaign planning.",
      "The Future of AI Advertising in India",
      "Virtual influencers are likely to become more sophisticated, multilingual, and interactive. At the same time, consumers are becoming more aware of synthetic media and increasingly expect honesty from brands. Transparency will define the next generation of digital advertising."
    ],
  },
  {
    slug: 'raj-shamani-delhi-high-court-personality-rights-ai-deepfakes',
    category: 'CREATOR RIGHTS',
    title: 'Raj Shamani Wins Landmark Delhi High Court Personality Rights Case Against AI Deepfakes',
    excerpt:
      "Historic ruling extends personality rights protection to India's digital creators, setting a new legal precedent against AI-driven misuse of names, images, voices, and likenesses.",
    image: '/Del.webp',
    thumbnailImage: '/per.webp',
    summary:
      "In a landmark ruling, podcaster and entrepreneur Raj Shamani secured protection against misuse of his identity, reshaping India's creator economy legal landscape.",
    body: [
      "India's rapidly expanding creator economy has received a significant legal boost after the Delhi High Court granted protection to podcaster and entrepreneur Raj Shamani against alleged misuse of his identity through AI-generated deepfakes and unauthorised digital content.",
      "For years, personality rights in India were largely associated with film actors, musicians, athletes, and public celebrities. The Delhi High Court's order represents one of the clearest judicial acknowledgements that prominent digital creators can also possess commercially valuable identities worthy of legal protection.",
      "The Case That Could Redefine Creator Rights",
      "Raj Shamani approached the Delhi High Court after discovering that unidentified individuals had allegedly misused his name, photographs, likeness, and voice to create misleading digital content. Such misuse has become increasingly common as generative AI makes it easier to clone voices, recreate faces, and fabricate endorsements.",
      "After considering the matter, the court granted an interim injunction restraining unidentified parties from misusing his personality attributes.",
      "Why the Judgment Matters",
      "Legal experts believe the ruling represents an important evolution in India's personality rights jurisprudence. Today, creators build businesses through podcasts, educational content, online courses, brand collaborations, newsletters, events, and community platforms. Their identity is not only personal, it is commercial infrastructure.",
      "By extending protection beyond conventional celebrities, the judgment acknowledges the changing nature of influence in India's digital economy.",
      "The Growing Threat of AI Deepfakes",
      "Modern AI tools can generate convincing videos, clone voices, and recreate facial expressions using limited publicly available material. Deepfake videos have increasingly been used to fabricate interviews, promote investment scams, endorse financial products, or mislead audiences.",
      "For digital creators whose businesses rely heavily on public trust, such misuse can have serious consequences. A fake endorsement may mislead consumers while damaging the creator's reputation.",
      "A Boost for India's Creator Economy",
      "India is home to one of the world's fastest-growing creator ecosystems. As creators become entrepreneurs, their intellectual property increasingly extends beyond copyrights and trademarks to include name, image, voice, likeness, and audience trust.",
      "The ruling carries significance not only for creators but also for advertisers, agencies, technology platforms, and brands that depend on credible creator partnerships.",
      "Looking Ahead",
      "Raj Shamani's victory reflects a broader recognition that digital creators are important economic actors. In an era where AI can replicate almost any face or voice, this case may become one of the most important creator-rights precedents in India's digital economy."
    ],
  },
  {
    slug: 'india-creator-economy-15-billion-62-billion-2033',
    category: 'MARKET SIZE',
    title: "India's Creator Economy Hits $15 Billion, Set to Reach Nearly $62 Billion by 2033",
    excerpt:
      "Rapid digital adoption, expanding monetisation opportunities, and growing brand investment are transforming India's creator economy into one of the world's fastest-growing digital industries.",
    image: '/SSS.webp',
    thumbnailImage: '/SSS.webp',
    summary:
      "A new market intelligence report pegs India's creator economy at $15.03 billion in 2026, growing at a compound annual rate of 22.4% to reach $61.87 billion by 2033.",
    body: [
      "India's creator economy has evolved from a niche social media phenomenon into one of the country's fastest-growing digital industries. According to a recent market intelligence report, the sector is valued at approximately $15.03 billion in 2026 and is projected to expand to $61.87 billion by 2033.",
      "The figures highlight the increasing economic significance of digital creators and the broader ecosystem supporting them, including technology platforms, advertisers, agencies, fintech providers, and e-commerce businesses.",
      "A Digital Revolution Powered by Millions of Creators",
      "India is home to one of the world's largest internet populations, supported by affordable smartphones, inexpensive mobile data, and widespread adoption of digital platforms. These factors have enabled millions of individuals to build audiences in multiple languages across education, finance, gaming, beauty, technology, health, travel, food, and business.",
      "The report estimates that independent creators account for approximately 56.6% of the creator economy, demonstrating the increasing democratisation of digital entrepreneurship.",
      "Social Media Platforms Remain the Foundation",
      "Social media continues to serve as the backbone of India's creator economy. Digital platforms account for a major share of the market, with creators using them to distribute content, engage audiences, and generate revenue through advertising, subscriptions, affiliate marketing, and brand collaborations.",
      "YouTube's Expanding Economic Contribution",
      "YouTube continues to play a significant role in India's creator ecosystem. According to Google's economic impact studies, YouTube contributed an estimated $1.8 billion to India's GDP in 2024 while supporting approximately 930,000 full-time equivalent jobs across the economy.",
      "Recognising India's growing importance as one of its largest creator markets, YouTube has also committed $100 million for FY2025-26 to strengthen creator development initiatives and improve monetisation opportunities.",
      "Monetisation Remains the Biggest Opportunity",
      "Industry estimates suggest that India has more than 80 million content creators, yet only 8-10% currently generate meaningful income from their digital activities. Analysts believe this gap represents one of the industry's greatest opportunities.",
      "As digital commerce evolves, creators are diversifying income through paid memberships, online courses, digital products, consulting services, affiliate marketing, live events, licensing, merchandise, newsletters, podcasts, and subscription communities.",
      "The Rise of Creator Infrastructure",
      "Startups are developing specialised software for analytics, payments, copyright protection, taxation, legal compliance, customer relationship management, audience insights, AI-assisted editing, content scheduling, and brand collaboration.",
      "Outlook",
      "The projected growth from $15.03 billion in 2026 to nearly $61.87 billion by 2033 reflects rising digital consumption and the emergence of creators as entrepreneurs driving innovation, commerce, and employment."
    ],
  },
  {
    slug: 'sebi-asci-finfluencer-rules-accountability-digital-finance',
    category: 'FINFLUENCERS',
    title: "SEBI and ASCI Tighten the Rules for Finfluencers: A New Era of Accountability in India's Digital Finance Ecosystem",
    excerpt:
      "India's financial influencers are entering a stricter regulatory environment as SEBI and ASCI introduce stronger compliance standards aimed at protecting investors and improving transparency in digital content.",
    image: '/ss.avif',
    thumbnailImage: '/ss.avif',
    summary:
      'SEBI draws a clear line between education and advice, while ASCI hardens disclosure requirements across finance, health, beauty, and beyond.',
    body: [
      "India's booming creator economy has transformed the way millions of people consume financial information. From stock market analysis and personal finance tips to mutual fund education and cryptocurrency discussions, financial influencers, commonly known as finfluencers, have become a major source of investment knowledge for retail investors.",
      "However, the rapid growth of financial content on social media has also raised concerns about misinformation, undisclosed promotions, and unqualified individuals offering investment advice. The message from regulators is increasingly clear: influence without accountability is no longer acceptable.",
      "Why Regulators Are Taking Action",
      "India has witnessed an unprecedented rise in retail investing over the past few years. Millions of first-time investors now rely on YouTube channels, Instagram creators, podcasts, Telegram groups, and LinkedIn personalities to understand financial markets.",
      "While many creators genuinely focus on financial literacy, regulators have identified cases involving misleading investment recommendations, exaggerated return claims, undisclosed sponsorships, and paid promotions disguised as personal opinions.",
      "SEBI Draws a Clear Line",
      "SEBI's updated framework distinguishes between educating investors and providing investment advice. Only SEBI-registered investment advisers and research analysts are permitted to recommend specific securities or investment products while complying with disclosure and regulatory requirements.",
      "Content creators who are not registered may continue to educate audiences about financial concepts, market developments, budgeting, taxation, investing principles, and personal finance strategies. However, they cannot provide explicit buy or sell recommendations, guarantee returns, or present promotional content in misleading ways.",
      "ASCI Strengthens Advertising Transparency",
      "Alongside SEBI's financial regulations, ASCI has expanded influencer advertising guidelines to improve disclosure across multiple industries, including finance. Creators must clearly disclose paid partnerships, sponsored content, affiliate relationships, and promotional collaborations in a manner that is immediate, prominent, and understandable.",
      "Building Trust Through Compliance",
      "Many leading financial institutions, fintech companies, mutual fund houses, and brokerage firms are now integrating legal and compliance reviews into influencer campaigns from the earliest planning stages.",
      "A More Professional Creator Economy",
      "Financial creators are increasingly consulting legal advisors, improving disclosure practices, and developing internal review processes before publishing content. Credibility and expertise are becoming more valuable than sensational content designed purely to maximise engagement.",
      "Looking Ahead",
      "India's digital finance ecosystem is entering a new phase where influence must be matched by responsibility. For creators, transparency, compliance, and credibility are becoming long-term competitive advantages. For consumers, stronger oversight promises greater confidence in the financial information they encounter online."
    ],
  },
  {
    slug: 'creator-infrastructure-startups-monetisation-tools-india',
    category: 'CREATOR INFRASTRUCTURE',
    title: "Creator Infrastructure Startups Are Building the Business Stack for India's Digital Entrepreneurs",
    excerpt:
      "As creators move beyond content into commerce, education, memberships, and brand partnerships, a new generation of startups is building the tools that help them operate like full-scale businesses.",
    image: '/cc.jpeg',
    thumbnailImage: '/cc.jpeg',
    summary:
      "Analytics, payments, legal compliance, AI-assisted production, e-commerce, and brand discovery tools are becoming the backbone of India's next creator-led businesses.",
    body: [
      "India's creator economy is no longer limited to posting videos, building followers, or securing occasional brand collaborations. As creators become entrepreneurs, they need infrastructure that helps them manage revenue, audiences, compliance, production, partnerships, and commerce.",
      "This shift is creating a major opportunity for startups building software and services around the creator economy. These companies are not simply serving influencers; they are building the operating systems for a new generation of digital entrepreneurs.",
      "The Rise of Creator Business Tools",
      "Creators today need analytics dashboards, content planning systems, payment tools, tax support, brand collaboration platforms, legal templates, e-commerce integrations, community management products, and AI-powered production tools.",
      "For many creators, managing these functions manually becomes difficult as their audience and revenue grow. Infrastructure startups are stepping in to simplify this work and help creators professionalise faster.",
      "Monetisation Is Moving Beyond Sponsorships",
      "Brand deals remain important, but creators are increasingly building multiple income streams through courses, paid communities, affiliate commerce, live events, newsletters, merchandise, consulting, and direct product sales.",
      "Each revenue stream requires different tools. A creator selling a course needs payments, customer support, email communication, and learning management. A creator launching merchandise needs inventory, fulfilment, design, and commerce integrations. A creator running a membership needs community tools and recurring billing.",
      "Why Investors Are Paying Attention",
      "The creator economy's growth has made infrastructure especially attractive to investors. Instead of betting on individual creators, infrastructure companies can serve thousands or millions of creators across categories.",
      "Software platforms that help creators earn, manage, and scale revenue can benefit from the broader expansion of digital entrepreneurship in India.",
      "AI Will Accelerate the Stack",
      "Artificial intelligence is becoming central to creator infrastructure. AI can help creators write scripts, edit videos, generate thumbnails, translate content, repurpose long videos into short clips, analyse engagement, and plan publishing schedules.",
      "The biggest opportunity will belong to tools that combine automation with authenticity. Creators want efficiency, but audiences still reward trust, originality, and a clear human voice.",
      "A More Professional Creator Economy",
      "As the ecosystem matures, creators will increasingly operate with the discipline of small businesses. They will need accounting, compliance, intellectual property protection, campaign reporting, brand safety processes, and long-term audience strategy.",
      "This professionalisation will create space for a large creator infrastructure market in India, supporting not only influencers but educators, founders, artists, financial educators, podcasters, gamers, community builders, and independent media operators.",
      "Outlook",
      "The next phase of India's creator economy will be shaped not only by creators themselves, but also by the technology companies that help them become sustainable businesses. Infrastructure may become the quiet engine behind the country's creator-led growth story."
    ],
  },
  {
    slug: 'raj-shamani-first-creator-personality-rights-ruling',
    category: 'CREATOR RIGHTS',
    title: "Your Face Is Your IP: Raj Shamani Wins India's First Creator Personality Rights Ruling",
    excerpt:
      "When deepfakes of a podcaster began selling scam products to his own audience, Raj Shamani took the fight to the Delhi High Court and won a ruling India's creator world had been waiting years for.",
    image: '/deep.avif',
    thumbnailImage: '/deep.avif',
    summary:
      "The Delhi High Court recognised a digital creator's face, voice, and online identity as protectable intellectual property, creating a precedent for India's creator class.",
    body: [
      "Raj Shamani built his reputation the slow way. Across hundreds of podcast episodes of Figuring Out, thousands of hours of content on business, entrepreneurship, and personal growth, and 200-plus speaking engagements across 26 countries, he became one of the most recognisable faces in India's creator and entrepreneurship ecosystem.",
      "He has hosted Bill Gates, MrBeast, MS Dhoni, and Vijay Mallya. He wrote the bestselling book Build, Don't Talk. He became an active angel investor in fintech, FMCG, and the passion economy. Then AI arrived, and strangers began using his face to sell things he would never endorse.",
      "The Deepfake Threat",
      "The deepfakes were persuasive, cheap to produce, and damaging to his brand. AI voice clones mimicked his cadence. Morphed videos showed him endorsing financial scams. Fake advertisements ran across YouTube, Instagram, and Telegram, reaching audiences who trusted his face and his voice.",
      "Brands that had partnered with him began asking questions. Followers began sending confused messages. The harm was real, measurable, and accelerating.",
      "The Court Fight",
      "Shamani took his case to the Delhi High Court, seeking a permanent injunction against unnamed third parties misusing his name, likeness, and identity across digital platforms. He sought protection under personality rights, trademark, copyright, and passing off.",
      "The court granted protection. For the first time in India, a court affirmed that a digital content creator's face, voice, and digital presence can constitute intellectual property with the same legal standing as a celebrity's publicity rights.",
      "A Precedent for Creators",
      "The ruling's implications stretch far beyond Raj Shamani. India has millions of active creators, and the threat of AI-generated impersonation scales with popularity. The cheaper and faster AI tools get, the more vulnerable every creator with a recognisable face becomes.",
      "What Shamani has done is establish legal infrastructure for the creator class. Any creator who now faces deepfakes, voice clones, or fake endorsements has a precedent to cite, a framework to operate within, and a court that has recognised digital identity as property worth protecting.",
      "The Larger AI Governance Moment",
      "In the broader context of India's evolving AI governance, including synthetic content labelling rules and the pending Digital India Act, this ruling acts as the judicial arm of a larger regulatory awakening.",
      "For Indian creators, the message is clear: their face, voice, name, and trust are not just audience assets. They are business assets, legal assets, and intellectual property."
    ],
  },
  {
    slug: 'zerodha-zero1-shuts-down-sebi-finfluencer-crackdown',
    category: 'FINFLUENCERS',
    title: "The End of Zero1: Zerodha Shuts Down Its Landmark Creator Network After SEBI's Finfluencer Crackdown",
    excerpt:
      "It had 7 lakh YouTube subscribers, 10 crore views, and 30-plus of India's best financial creators. In April 2026, Zerodha wound down Zero1, and the reason shows where creator finance is headed.",
    image: '/zero.webp',
    thumbnailImage: '/zero.webp',
    summary:
      "Zero1's shutdown shows how SEBI's finfluencer framework is forcing financial creators, platforms, and regulated brands into a stricter compliance era.",
    body: [
      "When Zerodha launched Zero1 in October 2023, it felt like the future of financial education in India. A joint venture between LearnApp and Zerodha, backed by co-founder Nithin Kamath, Zero1 was designed as a new-age content network that would make complex conversations about finance, health, climate, and investing accessible to everyday Indians.",
      "Under the model, creators received research support, production infrastructure, and distribution muscle from Zerodha while retaining editorial independence. The network quickly attracted more than 30 digital creators including Varun Mayya, Loveena Kamath, and Revant Himatsingka. Its YouTube channel crossed 7 lakh subscribers and accumulated more than 10 crore views.",
      "Why Zero1 Shut Down",
      "In April 2026, Zerodha shut it down entirely. The official reason was regulatory uncertainty. The real story is more specific: SEBI's finfluencer framework drew a clear line between financial education and financial advice.",
      "Registered investment advisors may discuss specific products, make recommendations, and address personal financial situations. Everyone else, however large their audience or trusted their brand, must stay in the lane of general financial literacy.",
      "The Compliance Grey Zone",
      "The new rules also barred regulated entities such as Zerodha from directly engaging with unlicensed financial influencers in ways that could be construed as using them to promote financial products.",
      "Zero1's model, which gave creators independence while associating them with Zerodha's brand, sat in a compliance grey zone that the company ultimately decided was not worth the regulatory risk.",
      "A Signal to the Industry",
      "The closure is being read across the industry as a signal: the era of informal, engagement-driven financial content, where charisma and reach substituted for credentials and accountability, is over.",
      "For India's finfluencers, the SEBI framework is not a distant regulatory threat. It is an immediate operational reality reshaping what they can say, how they can say it, and who they can partner with.",
      "What Continues",
      "The closure of Zero1 does not diminish Zerodha's contribution to financial literacy in India. Varsity, Rainmatter, and Markets by Zerodha continue. But Zero1 represents the most high-profile casualty of the regulatory recalibration.",
      "A platform that helped millions of Indians engage with financial concepts disappeared not because it failed commercially, but because the rules changed around it. As agencies, brand managers, and creator platforms absorb this lesson, the creator economy's professionalisation accelerates."
    ],
  },
  {
    slug: 'bhuvan-bam-five-billion-views-production-house',
    category: 'CREATOR IP',
    title: '5 Billion Views and a Production House: How Bhuvan Bam Turned a Phone Camera Into a Media Empire',
    excerpt:
      "From a Delhi bedroom in 2015 to 5 billion cumulative YouTube views, a Filmfare Award, two OTT series, and The Revolutionaries in production, BB Ki Vines is now a studio.",
    image: '/social.png',
    thumbnailImage: '/media.jpeg',
    summary:
      "Bhuvan Bam's journey from individual creator to IP owner and studio head shows the full lifecycle of India's maturing creator economy.",
    body: [
      "Bhuvan Bam was 21 years old when he uploaded his first BB Ki Vines video on Facebook in 2015. He was working as a singer at a Delhi restaurant and living at home.",
      "His first viral moment came from a comment he overheard about flood victims and his outraged response. He filmed it on a front-facing phone camera. There was no crew, no lighting setup, no production budget, and no strategy. There was just a young man who had something to say and a phone in his hand.",
      "A Five Billion View Milestone",
      "In 2026, Bhuvan Bam crossed 5 billion cumulative views on YouTube, placing him among the most-watched individual creators in India's history.",
      "The milestone reflects a decade of consistency across comedy sketches, music releases, short films, and full OTT productions. His 2019 short film Plus Minus won a Filmfare Award. That same year, he appeared on Forbes 30 Under 30. In 2020, he spoke at the World Economic Forum.",
      "From Channel to Studio",
      "The most significant evolution is structural. BB Ki Vines Productions, the company Bam runs with producer Rohit Raj, is now a fully operational content studio.",
      "Taaza Khabar, their flagship Disney+ Hotstar series about a sanitation worker who gains the ability to predict the future, ran to a second season featuring Swanand Kirkire. Another project, The Revolutionaries, is in production for a 2026 OTT release.",
      "The Creator Economy Lesson",
      "What Bhuvan Bam represents is the full creator lifecycle: from individual creator to IP owner to studio head. He is no longer dependent only on platform algorithms for income.",
      "He is building properties, characters, shows, and stories that have value independent of any single platform.",
      "A Different Engine for the Next Era",
      "At 32 in 2026, Bam is one of India's strongest examples of what it looks like when a creator makes the transition from performer to producer.",
      "The next phase of his growth will be built through original IP and cinematic storytelling, not just a front-facing camera."
    ],
  },
  {
    slug: 'food-pharmer-sugar-boards-cbse-creator-influence',
    category: 'CREATOR IMPACT',
    title: "Changemaker of the Year: How Food Pharmer's Campaign Got Sugar Boards Into Every CBSE School in India",
    excerpt:
      "Revant Himatsingka was named Changemaker of the Year at Entrepreneur India's Influencer Awards 2026, but the larger win came when CBSE installed Sugar Boards in classrooms nationwide.",
    image: '/m2.jpg',
    thumbnailImage: '/influ.png',
    summary:
      "Food Pharmer's campaign shows creator influence moving beyond purchase decisions into public health, regulation, and school-level behaviour change.",
    body: [
      "Awards given to creators often measure follower counts, engagement rates, brand deal volumes, and campaign performance. The Changemaker of the Year award at Entrepreneur India's Influencer Awards 2026 measured something different: what actually changed in the world because of what a creator did.",
      "In Revant Himatsingka's case, the change was specific and extraordinary. CBSE mandated the installation of Sugar Boards in schools nationwide.",
      "From Content to Policy Outcome",
      "The Sugar Board initiative is a downstream consequence of Himatsingka's years of campaigns documenting the sugar content in products marketed to children, from Bournvita to breakfast cereals, flavoured milk drinks, and packaged snacks.",
      "He did not just make videos. He wrote to regulators, engaged with FSSAI, submitted evidence, and publicly challenged company claims with documentation.",
      "Why It Matters",
      "CBSE's Sugar Boards, displayed in school cafeterias and canteens, communicate to children how much sugar is in the food they are served in a format they can understand.",
      "For the creator economy, this is a landmark data point. It answers one of the most persistent questions about digital influence: does it actually change anything beyond purchasing behaviour?",
      "A New Kind of Creator Power",
      "Himatsingka's case says yes. A creator with millions of Instagram followers and no institutional backing changed what children read about food in classrooms across one of the world's largest educational systems.",
      "The Changemaker award recognised not just reach or consistency, but the causal chain that led from videos to a policy outcome.",
      "Recognition Infrastructure Is Growing",
      "The award ceremony also highlighted others shaping the creator-influencer landscape, while the National Creators Award continues to institutionalise the recognition of digital creators at the highest levels of public life.",
      "India's creator recognition infrastructure is growing as fast as its creator economy. Himatsingka's story will be remembered as the case of an influencer who changed not just what people bought, but what children learn."
    ],
  },
  {
    slug: 'ranveer-allahbadia-beerbiceps-creator-founder-playbook',
    category: 'CREATOR FOUNDER',
    title: "The Rs 70 Crore Creator: How Ranveer Allahbadia Built BeerBiceps Into a Multi-Venture Business Empire",
    excerpt:
      "From a nervous fitness YouTuber in 2015 to a Rs 60-70 crore net worth, a national award, a talent agency, a wellness app, and an education startup, Ranveer Allahbadia has written India's creator-to-founder playbook.",
    image: '/leader.jpg',
    thumbnailImage: '/star.jpg',
    summary:
      "Ranveer Allahbadia's portfolio shows how creator trust can be converted into companies across talent management, wellness, education, content, and digital products.",
    body: [
      "When Ranveer Allahbadia started uploading fitness content to YouTube in August 2015, he described himself as nervous, underconfident, and angry at life. He was 22, had graduated from engineering college in Mumbai, and was deeply unhappy about where life appeared to be going.",
      "Fitness had changed him, and he wanted to share what he had learned. He had no idea that BeerBiceps would eventually become one of India's most recognised creator brands.",
      "The Evolution of BeerBiceps",
      "The evolution happened in phases. Phase one was fitness content: workout guides, nutrition advice, and accessible health education that was still scarce on Indian YouTube in 2015.",
      "Phase two was the pivot to long-form conversations through The Ranveer Show, which began interviewing Indian entrepreneurs and expanded to global figures, spiritual leaders, scientists, and politicians.",
      "Phase three was business building: the move from creator to operator, and from audience to enterprise.",
      "The Venture Portfolio",
      "In 2026, Allahbadia's business portfolio includes three distinct ventures alongside his content work. Monk-E, formerly Monk Entertainment, is a creator talent management agency representing and building businesses around prominent digital personalities.",
      "Level SuperMind is a mind-performance wellness app focused on meditation, sleep, and cognitive enhancement. BigBrainCo is his education venture, building digital learning products at the intersection of business and personal development.",
      "Across these ventures, plus YouTube revenue, podcast income, brand deals, and digital course sales, his estimated net worth in 2026 stands between Rs 60 crore and Rs 70 crore.",
      "The Creator-to-Founder Playbook",
      "What makes Allahbadia's story instructive is the deliberateness of each transition. He did not stumble into entrepreneurship. He identified where audience trust could be translated into economic value and built companies in those spaces.",
      "Monk-E now helps other creators do what he did. It is a business that monetises the knowledge of how to monetise an audience.",
      "India's next generation of creator-founders are studying this playbook carefully. With a rapidly growing creator economy, there has never been a better moment to put it into practice."
    ],
  },
];

const creatorSignals = [
  {
    category: 'CREATOR RIGHTS',
    title: 'Your Face Is Your IP',
    excerpt:
      "Raj Shamani's court win gives Indian creators a stronger legal shield against deepfakes, fake endorsements, and identity theft.",
    image: '/deep.avif',
    slug: 'raj-shamani-first-creator-personality-rights-ruling',
  },
  {
    category: 'FINFLUENCERS',
    title: 'The End of Zero1',
    excerpt:
      "Zerodha's creator network shutdown shows how SEBI's finfluencer rules are reshaping financial content partnerships.",
    image: '/zero.webp',
    slug: 'zerodha-zero1-shuts-down-sebi-finfluencer-crackdown',
  },
  {
    category: 'CREATOR IP',
    title: '5 Billion Views and a Production House',
    excerpt:
      'Bhuvan Bam has turned BB Ki Vines from a phone-camera channel into a studio with OTT series and original IP.',
    image: '/social.png',
    slug: 'bhuvan-bam-five-billion-views-production-house',
  },
  {
    category: 'CREATOR IMPACT',
    title: "Food Pharmer's Sugar Board Win",
    excerpt:
      "Revant Himatsingka's campaign helped push Sugar Boards into CBSE schools, proving creator influence can drive policy outcomes.",
    image: '/m2.jpg',
    slug: 'food-pharmer-sugar-boards-cbse-creator-influence',
  },
  {
    category: 'CREATOR FOUNDER',
    title: 'The Rs 70 Crore Creator',
    excerpt:
      "Ranveer Allahbadia's BeerBiceps journey shows how audience trust can become a multi-venture business empire.",
    image: '/leader.jpg',
    slug: 'ranveer-allahbadia-beerbiceps-creator-founder-playbook',
  },
  {
    category: 'AI RULES',
    title: 'AI Influencer Disclosure Becomes Mandatory',
    excerpt:
      'Brands using virtual influencers will need clearer labels, stronger creative review, and more transparent campaign planning.',
    image: '/asccc.avif',
    slug: 'asci-2026-ai-influencer-rules-digital-humans',
  },
];

function normalizeHeadingText(value = '') {
  return value.trim().replace(/\s+/g, ' ').toLowerCase();
}

function getVisibleArticleParagraphs(paragraphs = [], articleTitle = '') {
  const normalizedTitle = normalizeHeadingText(articleTitle);
  const seenHeadings = new Set();

  return paragraphs.filter((text) => {
    const isHeading = text.length < 70 && !text.endsWith('.');
    const normalizedText = normalizeHeadingText(text);

    if (normalizedText === normalizedTitle) return false;
    if (!isHeading) return true;
    if (!normalizedText || seenHeadings.has(normalizedText)) return false;

    seenHeadings.add(normalizedText);
    return true;
  });
}

function renderArticleBody(paragraphs, articleTitle) {
  return getVisibleArticleParagraphs(paragraphs, articleTitle).map((text) => {
    const isHeading = text.length < 70 && !text.endsWith('.');

    if (isHeading) {
      return (
        <h2 key={text} className="pt-4 text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
          {text}
        </h2>
      );
    }

    return (
      <p key={text} className="m-0 text-[20px] leading-[1.75] text-slate-800 md:text-[22px]">
        {text}
      </p>
    );
  });
}

function StoryImage({ story, className = '', imageKey = 'image' }) {
  return (
    <img
      src={story[imageKey] || story.image}
      alt={story.title}
      className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${className}`}
    />
  );
}

function ArticleAdvertisement() {
  return (
    <aside
      aria-label="Advertisement"
      className="mt-12 border-y-2 border-slate-950 bg-slate-50 px-5 py-7 sm:px-7 lg:min-h-[360px]"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
          Advertisement
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.18em] text-red-700">
          New Times Brand Studio
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_190px] md:items-stretch">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-amber-700">
            Sponsored Feature Slot
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
            Reach founders, creators, agencies, and digital business leaders.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
            Promote launches, reports, events, tools, and brand stories across New Times creator economy coverage.
          </p>
          <Link
            to="/partner/ad-options"
            className="mt-6 inline-flex bg-slate-950 px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white no-underline transition hover:bg-red-700"
          >
            Book Ad Space
          </Link>
        </div>

        <div className="flex min-h-[190px] flex-col justify-between border border-slate-300 bg-white p-4">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
            Display Package
          </span>
          <div>
            <p className="text-5xl font-extrabold leading-none text-slate-950">
              NT
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-700">
              Creator Economy Ad
            </p>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-red-700">
            Sponsored visibility
          </span>
        </div>
      </div>
    </aside>
  );
}

const hubAdSlots = [
  {
    label: 'Advertisement',
    kicker: 'Creator Growth Report',
    title: "Put your creator tools in front of India's digital entrepreneurs.",
    body: 'Sponsor reports, product launches, creator-tech tools, and business services inside New Times creator economy coverage.',
    cta: 'Explore Ad Options',
  },
  {
    label: 'Partner Spotlight',
    kicker: 'Brand Launch Desk',
    title: 'Announce launches, funding moves, events, and creator campaigns.',
    body: 'Built for agencies, platforms, fintech brands, creator networks, and founder-led companies looking for relevant visibility.',
    cta: 'Book Sponsored Slot',
  },
  {
    label: 'Media Partnership',
    kicker: 'Agency Campaigns',
    title: 'Reach marketers, founders, creators, and digital business readers.',
    body: 'Run a campaign package across category pages, internal stories, spotlight features, and partner placements.',
    cta: 'Start Campaign',
  },
  {
    label: 'Sponsored Insight',
    kicker: 'Research Sponsor',
    title: 'Sponsor reports, surveys, market maps, and trend explainers.',
    body: 'Support thought leadership around creator commerce, AI tools, fintech creators, brand partnerships, and digital entrepreneurship.',
    cta: 'Sponsor Report',
  },
];

function HubAdvertisementStack() {
  return (
    <aside aria-label="Advertisements" className="mt-10 space-y-8">
      {hubAdSlots.map((slot) => (
        <Link
          key={slot.title}
          to="/partner/ad-options"
          className="group block border-y-2 border-slate-950 bg-slate-50 px-6 py-7 text-slate-950 no-underline transition hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
              {slot.label}
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-red-700">
              New Times Brand Studio
            </span>
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-amber-700">
            {slot.kicker}
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-slate-950">
            {slot.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
            {slot.body}
          </p>
          <span className="mt-5 inline-flex bg-slate-950 px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white transition group-hover:bg-red-700">
            {slot.cta}
          </span>
        </Link>
      ))}
    </aside>
  );
}

function CreatorsEconomyArticle({ story }) {
  const nextStory = creatorStories[(creatorStories.findIndex((item) => item.slug === story.slug) + 1) % creatorStories.length];

  return (
    <main className="min-h-[80vh] bg-white px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <Link
          to="/creators-economy"
          className="mb-6 inline-flex text-[12px] font-bold uppercase tracking-[0.16em] text-slate-600 no-underline hover:text-red-700"
        >
          &larr; Creators Economy
        </Link>

        <header className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.8fr)] lg:items-center">
          <div>
            <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-700">
              {story.category}
            </span>
            <h1 className="max-w-3xl text-[30px] font-extrabold leading-[1.15] text-black sm:text-[36px] lg:text-[44px]">
              {story.title}
            </h1>
            <p className="mt-5 max-w-3xl text-[19px] leading-8 text-slate-700 md:text-[22px]">
              {story.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <span>By New Times Desk</span>
              <span>/</span>
              <span>Creators Economy</span>
            </div>
          </div>

          <div>
            <StoryImage
              story={story}
              className={
                story.category === 'ARTIST'
                  ? 'max-h-[560px] object-contain'
                  : 'h-[320px] sm:h-[430px] lg:h-[520px]'
              }
            />
          </div>
        </header>

        <div className="flex justify-end border-b border-slate-200 py-6">
          <Link
            to={`/creators-economy/${nextStory.slug}`}
            className="group inline-flex w-full max-w-md items-center gap-4 border border-slate-200 bg-white p-4 text-left no-underline shadow-[0_14px_35px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-slate-950 sm:w-auto"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-950 text-xl leading-none text-slate-950">
              &rarr;
            </span>
            <span>
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-700">
                Next Article
              </span>
              <span className="mt-2 line-clamp-2 block text-lg font-bold leading-snug text-slate-950 group-hover:underline">
                {nextStory.title}
              </span>
            </span>
          </Link>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(280px,0.3fr)]">
          <section className="space-y-7">
            {renderArticleBody(story.body, story.title)}
            <ArticleAdvertisement />
          </section>

          <aside className="border-slate-200 lg:border-l lg:pl-8">
            <div className="sticky top-8 space-y-6">
              <section className="border border-slate-200 bg-slate-50 p-5">
                <h2 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.18em] text-slate-950">
                  More Creator Stories
                </h2>
                <div className="space-y-4">
                  {creatorStories
                    .filter((item) => item.slug !== story.slug)
                    .slice(0, 4)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        to={`/creators-economy/${item.slug}`}
                        className="group grid grid-cols-[76px_minmax(0,1fr)] gap-3 border-b border-slate-200 pb-4 text-slate-950 no-underline last:border-b-0 last:pb-0"
                      >
                        <StoryImage story={item} imageKey="thumbnailImage" className="h-20" />
                        <div>
                          <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                            {item.category}
                          </span>
                          <h3 className="mt-1 text-base font-bold leading-tight group-hover:underline">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

export default function CreatorsEconomy() {
  const { slug } = useParams();
  const activeStory = creatorStories.find((story) => story.slug === slug);

  if (activeStory) {
    return <CreatorsEconomyArticle story={activeStory} />;
  }

  const artistStories = creatorStories.filter((story) => story.category === 'ARTIST');
  const economyStories = creatorStories.filter((story) => story.category !== 'ARTIST');
  const [leadStory, ...sideStories] = economyStories;

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
      <section className="border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
        <div className="mb-6 h-1 w-full bg-slate-950" />

        <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
              More
            </span>
            <h1 className="m-0 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              Creators Economy
            </h1>
          </div>
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-green-600">
            Creator Business
          </span>
        </div>

        <div className="mb-10 bg-slate-50 p-7 ring-1 ring-gray-200">
          <h2 className="m-0 max-w-4xl text-3xl font-extrabold leading-tight text-slate-950">
            India's Creator Economy Moves From Influence to Business Infrastructure
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
            New Times tracks how creators, platforms, agencies, brands, regulators, and tools are reshaping media, marketing, commerce, and entrepreneurship.
          </p>
        </div>

        {artistStories.length > 0 && (
          <section className="mb-12 border-t border-slate-200 pt-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                  Music
                </span>
                <h2 className="m-0 text-3xl font-extrabold leading-tight text-slate-950">
                  Artist
                </h2>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                New Times Desk
              </span>
            </div>

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {artistStories.map((story) => (
                <Link
                  key={story.slug}
                  to={`/creators-economy/${story.slug}`}
                  className="group block text-slate-950 no-underline"
                >
                  <article>
                    <div className="overflow-hidden rounded-[28px] bg-slate-100">
                      <StoryImage story={story} className="h-[275px] object-top sm:h-[320px]" />
                    </div>
                    <span className="mb-2 mt-5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
                      {story.sectionLabel || story.category}
                    </span>
                    <h3 className="m-0 max-w-3xl text-3xl font-bold leading-tight text-slate-950 underline decoration-slate-950 decoration-2 underline-offset-4 md:text-4xl">
                      {story.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {story.summary}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,1fr)]">
          <div>
            <Link
              to={`/creators-economy/${leadStory.slug}`}
              className="group block text-slate-950 no-underline"
            >
              <article>
                <div className="overflow-hidden bg-slate-100">
                  <StoryImage story={leadStory} className="h-[380px]" />
                </div>
                <span className="mb-2 mt-5 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
                  {leadStory.category}
                </span>
                <h2 className="m-0 text-3xl font-bold leading-tight text-slate-950 underline-offset-4 group-hover:underline">
                  {leadStory.title}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">{leadStory.summary}</p>
                <span className="mt-5 inline-flex bg-slate-950 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition group-hover:bg-red-700">
                  Read More
                </span>
              </article>
            </Link>

            <HubAdvertisementStack />
          </div>

          <div className="space-y-6 border-gray-200 lg:border-l lg:pl-6">
            {sideStories.map((story) => (
              <Link
                key={story.slug}
                to={`/creators-economy/${story.slug}`}
                className="group grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-gray-100 pb-5 text-slate-950 no-underline last:border-b-0"
              >
                <div className="overflow-hidden bg-slate-100">
                  <StoryImage story={story} imageKey="thumbnailImage" className="h-24 w-24" />
                </div>
                <article>
                  <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                    {story.category}
                  </span>
                  <h3 className="m-0 text-lg font-bold leading-tight underline-offset-4 group-hover:underline">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{story.summary}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <section className="mt-12 border-t border-slate-200 pt-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                Internal Pages
              </span>
              <h2 className="m-0 text-3xl font-extrabold leading-tight text-slate-950">
                Creator Economy Power Stories
              </h2>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              New Times Desk
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {creatorSignals.map((signal) => (
              <Link
                key={signal.title}
                to={`/creators-economy/${signal.slug}`}
                className="group block border border-slate-200 bg-white text-slate-950 no-underline transition hover:-translate-y-1 hover:border-slate-950 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="overflow-hidden bg-slate-100">
                  <img
                    src={signal.image}
                    alt={signal.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
                    {signal.category}
                  </span>
                  <h3 className="m-0 text-xl font-bold leading-tight underline-offset-4 group-hover:underline">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {signal.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
