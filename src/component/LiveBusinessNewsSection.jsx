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
        id: 'business-side-ipo-gold-rush',
        slug: 'ipo-gold-rush-2026-dalal-street-startups',
        title: 'The IPO Gold Rush: How 50-Plus Indian Startups Are Racing to Dalal Street in 2026\'s Most Consequential Public Markets Year',
        description:
          'After a record 2025, 2026 is shaping up as the biggest startup public markets year in India as more than 50 companies prepare for IPOs and investors demand proof of profitability.',
        image: '/ipoo.jpg',
        publishedDate: 'July 27, 2026',
        body: [
          { type: 'heading', text: 'The IPO Gold Rush: How 50-Plus Indian Startups Are Racing to Dalal Street in 2026\'s Most Consequential Public Markets Year' },
          'After a record-breaking 2025 in which 18 Indian startups collectively raised Rs 41,248 crore from public markets, the pipeline heading into 2026 is larger, more ambitious, and more structurally significant than anything the Indian startup ecosystem has attempted before.',
          'Twenty-four companies have already filed draft red herring prospectuses with SEBI, more than 26 are in active preparation, and unicorns such as Zepto, OYO, InMobi, and Zetwerk could raise upward of Rs 47,000 crore between them. But the year is also being defined by a more demanding market that is increasingly asking whether the business actually works rather than merely whether the growth story sounds exciting.',
          { type: 'heading', text: 'The Market Is Becoming More Selective' },
          'The first wave of 2026 listings has made the shift clear. Kissht and SEDEMAC delivered strong debuts, backed by real profitability and credible unit economics. Amagi and Fractal, despite strong subscription interest, showed how quickly investors can turn cautious when growth stories are priced too aggressively.',
          'The broader lesson is simple: founders who have spent the past few years building disciplined business models are finding receptive public markets. Companies that still depend on the promise of future margin improvement are being asked to wait for stronger evidence.',
          { type: 'heading', text: 'The Marquee Names in the Pipeline' },
          "PhonePe, Zepto, OYO, Infra.Market, and OfBusiness are all central to the 2026 narrative because they represent the extremes of the current market debate. PhonePe's listing is being watched for how investors value payments leadership without turning a blind eye to losses. Zepto's IPO will test whether quick commerce can attract public-market capital on a credible path to profitability.",
          "OYO's third attempt at a public listing has become a referendum on whether the market is willing to look past a turbulent history and underwrite the current business fundamentals. Infra.Market and OfBusiness, meanwhile, are being watched for how large B2B companies are valued in a market that now rewards proof over promise.",
          { type: 'heading', text: 'What 2026 Is Really Telling Investors' },
          'The 2026 IPO cycle is not a single wave but a bifurcation. On one side are companies that have used the post-2021 funding years to improve margins, reduce burn, and demonstrate operating discipline. On the other are startups whose growth remains impressive but whose bottom line still needs to catch up. The early listings suggest the public markets are now rewarding the first group far more generously than the second.',
          'That is why 2026 may go down as more than a year of listings. It may become the year when Indian startup public markets moved from hype-driven valuation to evidence-driven discipline.',
        ],
      },
      {
        id: 'business-side-spudnik-farms',
        slug: 'sumeet-kaur-spudnik-farms-sustainable-agriculture',
        title: "From Corporate Life to Cultivated Fields: How Sumeet Kaur's Spudnik Farms Is Revolutionising Sustainable Agriculture, Empowering Small Farmers, and Rebuilding India's Broken Food Supply Chain",
        description:
          'Sumeet Kaur turned a personal experiment in farming into a community-supported agriculture model that now partners with 250 small farmers and serves over 1,200 urban subscribers.',
        image: '/spudik.jpg',
        publishedDate: 'July 27, 2026',
        body: [
          { type: 'heading', text: "From Corporate Life to Cultivated Fields: How Sumeet Kaur's Spudnik Farms Is Revolutionising Sustainable Agriculture, Empowering Small Farmers, and Rebuilding India's Broken Food Supply Chain" },
          'In 2012, a tax advisor with a stable corporate career in Delhi asked herself a question that changed everything: what is the real purpose of my life? The answer led Sumeet Kaur to a vacant plot of land in Hoskote on the outskirts of Bengaluru, a pair of farming gloves, and eventually to Spudnik Farms, a community supported agriculture startup that today works with 250 small and marginal farmers across Karnataka, serves more than 1,200 urban subscribers, and is building one of India\'s most compelling models for sustainable, local, seasonal food systems.',
          'This is the story of how she got there, what she built, and why it matters for the future of Indian agriculture, rural livelihoods, and the food that arrives on urban tables.',
          { type: 'heading', text: 'The Journey That Started With Boulders and Ended With a Business' },
          'When a friend\'s father offered Sumeet the use of his vacant plot of land in Hoskote in 2013, the land itself was the first challenge. The initial year was spent clearing boulders and rocks and making the soil usable for cultivation. The second year involved digging, sowing, watering, and learning, drawing on workshops, agricultural literature, and the particular democratic education of YouTube videos, all while following the principles of natural farming that emphasise soil health, biodiversity, and the rejection of chemical inputs that erode the land\'s long-term productive capacity.',
          'The vegetables that came out of that process tasted noticeably different from what commercial supply chains delivered to urban consumers. Friends and acquaintances began asking for regular supply. What had started as a personal experiment in sustainable living and organic food production became, almost without intention, a small direct-to-consumer agriculture business. Sumeet handled the farming, the marketing, the sales, the invoicing, and the delivery coordination herself, with a single farmhand helping in the fields.',
          { type: 'heading', text: 'The CSA Discovery: Adapting a Global Model for Indian Realities' },
          'Community Supported Agriculture is a farm-to-consumer model with deep roots in the United States, Europe, and Japan, built around a simple and powerful principle: consumers commit upfront to supporting a farm for a season or a year, paying in advance for regular deliveries of fresh, seasonal, locally grown produce. The farmer receives income security before the growing season begins, eliminating the market price uncertainty that makes agriculture financially precarious.',
          'The model Sumeet encountered in her research was built for the large-farm contexts of Western agriculture. Indian agriculture is structured entirely differently. The vast majority of India\'s fresh produce comes from small and marginal farmers working on holdings of five acres or less. Adapting CSA for this reality required rethinking the model from first principles for an agricultural context where the farmer\'s land, income, and risk profile are all fundamentally different from the Western template.',
          { type: 'heading', text: '250 Farmers, Two Clusters, and the Rural Livelihoods Being Changed' },
          'Spudnik Farms officially launched its current model in November 2019, just months before the Covid-19 pandemic transformed how urban India thought about food supply chains. When larger, more complex supply chains collapsed under lockdowns and logistical disruption, Spudnik\'s deliberately local, short, and direct supply chain kept delivering without significant disruption.',
          'Today, Spudnik Farms works with approximately 250 small and marginal farmers across two geographic clusters in Karnataka. The first is near Nelamangala on the outskirts of Bengaluru, close enough to the city to make logistics manageable and to maintain the farm visits and relationships that keep the quality standards of a community supported agriculture model honest. The second is in Uttara Kannada, a coastal Karnataka district where tribal farming communities grow indigenous root and tuber vegetables largely absent from conventional urban supply chains.',
          { type: 'heading', text: 'Indigenous Varieties, Value Addition, and the Seasonality Education' },
          'One of the most distinctive elements of Spudnik Farms\' approach is its deliberate focus on indigenous and native crop varieties over commercial hybrids. The incentive structures of conventional agricultural supply chains push farmers toward hybrid varieties developed for visual uniformity, shelf stability, and high yield, qualities that serve the logistics needs of long supply chains rather than the nutritional and flavour needs of the consumer at the end of them.',
          'Spudnik actively encourages its farmer partners to grow naati or native produce varieties rather than commercial hybrids, creating market access and premium pricing for indigenous varieties that conventional channels do not support. In Uttara Kannada, Spudnik is building a value addition business that converts these crops into products like sweet potato poppers, taro chips, and sweet potato chips, creating additional income for farmers while building urban consumer familiarity with ingredients that have been largely invisible to city-based food culture.',
          { type: 'heading', text: 'The Business Model: Subscriptions, B2B, and the Path to Sustainability' },
          'Spudnik Farms operates across two business verticals. The community supported agriculture subscription business serves more than 1,200 subscribers in Bengaluru who place weekly orders, while the B2B channel includes supply to Blinkit and other quick commerce and institutional buyers. The subscription model gives both the farmer and the consumer what the conventional supply chain denies them: predictability, trust, and a direct relationship that eliminates intermediary layers where most of the value is extracted.',
          'The company is bootstrapped and operating close to breakeven, a financial position that reflects both the difficulty of building a sustainable agriculture business without external capital and the discipline Sumeet has applied to keeping the model economically grounded rather than growth-at-all-costs oriented.',
          { type: 'heading', text: "What Spudnik Farms Represents for India's Food Future" },
          'The problem that Spudnik Farms is solving sits at the intersection of several of the most significant challenges in India\'s agricultural and food system: small farmer income insecurity, the erosion of indigenous crop varieties, the disconnection of urban consumers from seasonal and local food systems, and the environmental cost of long supply chains built around cold storage, chemical preservation, and the standardisation demands of mass retail.',
          'Community-supported agriculture as a model for Indian conditions is still in its early stages as a sector, and Spudnik is among the most thoughtful experiments in adapting it for the specific constraints and opportunities of the Indian context. The 250 farmer partnerships, the 1,200 urban subscribers, and the individual stories of farmers whose incomes and living conditions have been transformed by a direct urban consumer relationship are all evidence that the model works at the level it has been built to.',
        ],
      },
      {
        id: 'business-side-one-arena-football-anthem',
        slug: 'one-arena-kochi-football-anthem',
        title: "One Arena: How an 18-Year-Old Singer from Kochi and a Team of Malayali Musicians Created India's Most Talked-About Football Anthem",
        description:
          "While the FIFA World Cup 2026 played out across stadiums in the United States, Canada, and Mexico, a group of Malayali musicians sitting thousands of miles away in Kochi created something that neither required a ticket nor an invitation to the tournament.",
        image: '/aaro.PNG',
        publishedDate: 'July 15, 2026',
        body: [
          { type: 'heading', text: "One Arena: How an 18-Year-Old Singer from Kochi and a Team of Malayali Musicians Created India's Most Talked-About Football Anthem" },
          "There is something specific about the way Kerala relates to football that is unlike anything else in India. While the rest of the country has organised its sporting passions almost entirely around cricket, Kerala has maintained a genuine, multigenerational love affair with the beautiful game that runs deep enough to produce packed stadiums for Santosh Trophy matches, fervent club rivalries that divide neighbourhoods, and a population that watches the FIFA World Cup with the kind of emotional investment that most nations reserve for tournaments in which their own team is actually playing.",
          "India, of course, has never qualified for a FIFA World Cup. That absence, felt particularly acutely in a state that cares about football as seriously as Kerala does, is the emotional foundation on which One Arena was built. Not a song about watching from the sidelines. A song about dreaming of the day India steps onto that stage, and everything that dream costs the players who carry it.",
          { type: 'heading', text: 'The Song and the People Who Made It' },
          "One Arena was composed by Midhun K M and arranged by Vineeth Esthappan, both part of a wider collective of Malayali musicians and football enthusiasts who came together specifically for the project. The production is striking in its ambition: the track blends melody, rap, and orchestration in a way that sounds less like a regional tribute and more like something assembled for an international broadcast. That quality was deliberate. The team set out to make something that could stand alongside the anthems associated with the FIFA World Cup globally, not just something that would circulate within the Malayalam-speaking community.",
          "The voice at the centre of the production is Rosanne Antony, an 18-year-old from Kochi who had been working in commercial recordings before the project found its way to her. She was approached by guitarist Durwin D'Souza, who asked whether she was still doing commercial work. When she heard the track for the first time, the decision was immediate. The blend of styles, the international feel of the production, and the emotional weight of the lyrics about an Indian footballer's dream were enough to make her want to be part of it without hesitation.",
          "What nobody anticipated, including Rosanne herself, was how naturally the song would fit her voice. After the initial recording, the team reportedly experimented with other singers to find alternatives, but the specific combination of accent shifts and the transition into the rap sections of the track proved difficult to replicate. The qualities that make One Arena distinctive as a production, its movement between vocal registers, between lyrical passages and rhythmic spoken word, between the intimate and the anthemic, turned out to be qualities that Rosanne handled more naturally than she or anyone else on the team had quite expected. As she described it herself, the song felt tailor-made for her voice, almost as though it had been written around what she could do rather than the other way around.",
          { type: 'heading', text: 'A Voice Shaped by Decades of Music' },
          "Rosanne Antony's relationship with music began at the age of six, though she waited until she was thirteen before beginning formal professional training. The delay was deliberate on her parents' part. They wanted to be sure she had found the right teacher before committing to serious instruction, and they wanted to know that the passion was genuine rather than the passing enthusiasm of a child who loved everything intensely for a month and then moved on. By the time she was eleven, the answer to that question was clear. Music was not something she did alongside the rest of her life. It was woven through it in a way that was not going to change.",
          "She grew up in a family where music was part of the household atmosphere. The music of the 1980s was a formative presence, the kind of sound that fills a home and shapes the ears of the children growing up in it. When Rosanne talks about the One Arena project and what it means to her to have received it so warmly, she mentions her family and the sense that in some ways she is living out dreams that belong to them as well as to her. The context she comes from, loving and musically literate and quietly ambitious on her behalf, is visible in the way she speaks about her work.",
          { type: 'heading', text: "Kerala's Shakira: The Comparison That Found Her" },
          "When One Arena began circulating on social media, the comparison that appeared most frequently in comments and responses was to Shakira. The Colombian singer's contributions to the 2006 and 2010 FIFA World Cups produced two of the most recognisable football anthems in the tournament's history, and for a generation of football fans in India, those songs are inseparable from the memory of watching the World Cup. The energy of One Arena, the quality of Rosanne's performance, and the production's deliberate international ambition combined to produce a response that the team had not specifically sought but that arrived regardless.",
          "Being described as Kerala's Shakira is, by any reasonable measure, an extraordinary thing to be called at eighteen. Rosanne received it with both gratitude and careful proportion. She is unambiguous about the fact that Shakira is one of her primary inspirations, someone whose range, whose stage presence, and whose ability to make a football anthem feel simultaneously like a sporting event and a cultural moment she has studied and admired. She is equally clear that comparisons of that kind are better understood as expressions of enthusiasm from people who are genuinely moved by the song than as accurate assessments of where she sits relative to an artist with a decades-long global career behind her.",
          "The comparisons have brought their own pressure in the form of requests. Since One Arena gained traction, people have been asking Rosanne to perform Shakira covers. She has a complicated relationship with those requests. She has done covers before, but the specific task of doing justice to a voice as distinctive and technically demanding as Shakira's is one she approaches with caution rather than confidence. She has held back, which is itself a mark of artistic seriousness: the knowledge of what you are not yet ready to attempt is part of what keeps the work honest.",
          { type: 'heading', text: 'The Dream the Song Carries' },
          "One Arena is, at its structural core, a song about longing. The longing of Indian footballers who train for years inside a system that has never put them on the stage they are training for. The longing of fans, particularly in Kerala, who care about the game with a fervour that has no obvious outlet in international competition. The longing that comes with being connected to a sport globally, through broadcasts and fandom and tribal loyalty to clubs in England, Spain, and Brazil, while your own country remains absent from the tournament that defines it.",
          "Rosanne has spoken about the lyrics in terms of what they communicate about every sportsperson chasing a dream, not just footballers specifically. The hope, the struggle, the determination to keep going toward something that has not yet arrived: these are universal feelings that the song articulates in the specific context of Indian football but that resonate beyond it. The response from listeners outside India, including audiences in Latin America and Mexico who were among the last people the production team expected to reach, suggests that the universality of that emotion translates across languages and geographies in ways that pure spectacle rarely manages.",
          { type: 'heading', text: 'The Response That Surprised Everyone' },
          "The production team made a specific decision about timing that could easily have limited the song's reach. One Arena was completed and released after the FIFA World Cup had already begun. The obvious instinct, for a tribute to the tournament, would have been to release it before the competition started, to ride the wave of anticipation rather than entering a conversation already in progress. The team released it anyway, unsure how it would land.",
          "What happened next exceeded any reasonable expectation. Half a million views in under a week. Responses from football fans in Latin America and Mexico, markets with deep emotional connections to the World Cup that make them unusually demanding audiences for football-related content. Sharing patterns that suggested the song was reaching people who had discovered it organically rather than through any formal marketing push. The team is now hoping it crosses a million views, a number that would place it in a different category of cultural reach than almost any previous piece of Malayali music had achieved internationally.",
          { type: 'heading', text: 'What One Arena Means Beyond the Music' },
          "The story of One Arena is partly a music story and partly a story about Kerala's relationship with football. But it is also a story about what becomes possible when a group of people with genuine craft and genuine passion decide to make something that expresses both, without waiting for institutional permission or commercial backing or the validation that comes from having already been successful.",
          "Rosanne Antony is eighteen years old. Midhun K M and Vineeth Esthappan and Durwin D'Souza and the wider collective who built One Arena around her were not operating inside the machinery of the Malayalam film industry or the national music market. They made something because they loved football, they loved music, and they believed the two could be combined into something that would move people. They were right. And the people in Mexico and Latin America and Kerala and wherever else the song has been heard and shared are proof of it.",
          "India has never qualified for the FIFA World Cup. One day, if the game develops here the way the people who love it believe it can, that will change. When it does, there will need to be a song. One Arena has made an early and compelling argument for what that song might sound like.",
        ],
      },
      {
        id: 'business-side-justdial-vss-mani-q1-fy27',
        slug: 'justdial-vss-mani-steps-down-q1-fy27-profit',
        title: 'The End of an Era: VSS Mani Steps Down After 33 Years as JustDial Posts Rs 166 Crore Q1 Profit and Hits Its Fastest Sequential Revenue Growth in a Decade',
        description:
          "JustDial reported its Q1 FY27 financial results on July 11, posting a net profit of Rs 166 crore and operating revenue of Rs 327.5 crore, its fastest sequential quarterly revenue growth in a decade outside the post-Covid recovery window.",
        image: '/Ar12.avif',
        publishedDate: 'July 13, 2026',
        body: [
          { type: 'heading', text: 'The End of an Era: VSS Mani Steps Down After 33 Years as JustDial Posts Rs 166 Crore Q1 Profit and Hits Its Fastest Sequential Revenue Growth in a Decade' },
          `V.S.S. Mani is one of the most underappreciated builders in Indian technology history. When he co-founded JustDial in 1996, the internet in India was in its infancy, mobile penetration was negligible, and the problem he was trying to solve was genuinely universal: how does someone in a large Indian city find a reliable plumber, a good doctor, a trustworthy car mechanic, or the nearest chemist open after nine at night? His answer was a telephone-based local search service that consumers could reach by dialling a single number, and which would connect them to a database of verified local businesses across every conceivable category. The simplicity of the idea belied the operational complexity of building and maintaining it. JustDial required a physical sales force covering every city, a technology team building the database and matching logic, and a trust-building effort with millions of small businesses who had never thought of themselves as entities that needed to be listed anywhere.`,
          `Mani did all of it, and he did it for 33 years without ever losing sight of the core value proposition that made JustDial meaningful: connecting Indians who needed something with Indians who could provide it, quickly, reliably, and at no cost to the searcher. The company went public in 2013 at a valuation that made it one of the most valuable consumer internet companies India had produced at the time. Reliance Retail's acquisition of a controlling stake in 2021 brought new capital and strategic backing. Through all of it, Mani remained the operational and strategic centre of gravity. His departure on July 31 closes a chapter that shaped Indian local commerce in ways that are difficult to fully quantify.`,
          { type: 'heading', text: 'The Q1 FY27 Numbers: Steady Growth and a Sequential Record' },
          `The financial results that accompanied the leadership announcement are worth examining carefully, because they tell a more nuanced story than either the headline profit figure or the sequential growth claim alone would suggest.`,
          `JustDial's net profit rose 4.1 per cent year on year to Rs 166 crore in Q1 FY27, compared to Rs 159.6 crore in the year-ago quarter. On a sequential basis, the company's profit after tax surged 66.2 per cent from Rs 100 crore in Q4 FY26. Operating revenue increased 9.9 per cent year on year and 6.6 per cent quarter on quarter to Rs 327.5 crore. Including other income of Rs 131.5 crore, primarily from treasury gains on the company's substantial cash and investments position, total income for the quarter stood at Rs 458.9 crore.`,
          `EBITDA came in at Rs 87.4 crore for the quarter, with a healthy margin of 26.7 per cent. That margin is strong by the standards of Indian internet companies that are investing in growth, though it represents a compression of approximately 233 basis points from the 29 per cent EBITDA margin delivered in Q1 FY26, reflecting sustained investment in technology capabilities across AI, sales infrastructure, and customer support operations.`,
          `The sequential revenue growth number is the one that JustDial's management chose to emphasise most prominently, and the context they provided around it is meaningful. The company described the 6.6 per cent quarterly revenue growth as its fastest in a decade, excluding the post-Covid recovery period. For a company that has been navigating a challenging competitive environment and significant stock price pressure over the past year, delivering the fastest sequential revenue growth in ten years is a signal that the operational investments being made are beginning to generate commercial returns.`,
          { type: 'heading', text: 'The Platform Metrics: Traffic, Listings, and the Mobile Shift' },
          `Behind the financial numbers, the operational metrics that JustDial disclosed paint a picture of a platform that is simultaneously facing traffic pressure at the margin and building genuine structural depth in its listings database and AI capabilities.`,
          `Total traffic measured by unique visitors stood at 19.3 crore in Q1 FY27, down 0.2 per cent year on year but up 5.8 per cent quarter on quarter. Of the total traffic, 86.5 per cent, representing 16.7 crore users, originated from mobile platforms, while 10.6 per cent came from desktop and 2.9 per cent from the voice platform. The marginal year-on-year traffic decline is a number worth watching, though the sequential recovery suggests it is more cyclical than structural. The overwhelmingly mobile composition of traffic, at 86.5 per cent, reflects the broader reality of how Indian consumers engage with digital platforms in 2026 and has implications for the product investments that new CEO Dinkar Ayilavarapu will need to prioritise.`,
          `Total active listings reached 56.1 million as of June 30, 2026, an increase of 13 per cent year on year and 2.7 per cent quarter on quarter. JustDial added 1,467,180 net listings to its database during the quarter. The listings growth number is strategically significant: a 13 per cent year-on-year expansion in active listings means that the supply side of JustDial's marketplace is growing materially faster than the demand side, which creates the inventory depth that allows the platform to serve increasingly specific and specialised searcher needs. Of the total listings, 4.2 crore listings were geocoded by the end of Q1 FY27, up 19.7 per cent year on year, reflecting the technology investments being made to improve the geographic precision and usefulness of the platform's business data.`,
          `The cash and investments position deserves specific mention because it is one of JustDial's most underappreciated strategic assets. Cash and investments stood at Rs 6,022.1 crore as of June 30, 2026, compared to Rs 5,429.8 crore a year earlier and Rs 5,852.2 crore at the end of March 2026. A cash pile of over Rs 6,000 crore on a company with a total market capitalisation of approximately Rs 5,400 crore at Monday's pre-circuit price means that the market was, until this week's re-rating, valuing JustDial's operating business at effectively zero or negative. The 20 per cent upper circuit on July 13 represents a partial correction of that anomaly, driven by the combination of Q1 results, the new leadership announcement, and renewed investor attention to the cash position relative to the market cap.`,
          { type: 'heading', text: 'The AI Investment: Voice Agents, Lead Qualification, and JD Mart' },
          `During the quarter, JustDial expanded the use of AI across voice, WhatsApp, sales, customer support, and content operations. The company said its AI voice agents are being used to understand customer requirements and help sales teams focus on leads with stronger buying intent. This application of AI to the lead qualification process is one of the most commercially meaningful uses of the technology available to a local search platform. JustDial's core commercial model involves charging businesses for qualified leads, defined as verified connections with consumers who have a genuine purchase intent. AI-driven intent detection and lead scoring improves the quality of those connections, which improves the ROI for business subscribers, which supports the pricing and renewal rates that drive JustDial's revenue growth.`,
          `The company also launched the JD Mart Super Sixer Pack, offering B2B sellers qualified leads, 3D catalogues, and better visibility across the platform. The JD Mart B2B initiative is JustDial's most significant product bet outside its core local search business. India's B2B commerce market is enormous, fragmented, and significantly underserved by digital platforms relative to the consumer commerce space. JustDial's existing relationships with millions of small business owners, its geographic coverage, and its brand recognition in the SME segment give it genuine advantages in building a B2B commerce platform, and the Super Sixer Pack is an early attempt to package those advantages into a premium value proposition for sellers.`,
          `Chief Growth Officer Shwetank Dixit described the quarter's performance in terms that reflect genuine operational confidence: the 6.6 per cent sequential revenue growth, she noted, reflects focused execution across the core business alongside sustained investment in technology capabilities that are now translating into tangible outcomes.`,
          { type: 'heading', text: 'The Transition: Dinkar Ayilavarapu Takes the Helm' },
          `JustDial's board approved the appointment of Dinkar Ayilavarapu as the designated CEO and Key Managerial Personnel of the company with effect from July 10, 2026, with the handover to take effect from August 1, 2026. Ayilavarapu brings a background from Flipkart, one of India's most demanding commercial internet environments, where he would have developed deep experience in the operational complexity of serving Indian consumers and businesses at scale across diverse geographies and categories. The choice of an executive with a marketplace and commerce background, rather than a pure technology or finance profile, signals something about where JustDial's board and its Reliance Retail parent see the company's next chapter being written: in the commercial and marketplace evolution of the platform rather than in pure technology transformation.`,
          `Dinesh Taluja has been appointed as the new Chief Financial Officer and Key Managerial Personnel of the company, effective July 11. Ahead of his appointment, Taluja resigned as the non-executive director on the company's board on July 10. The dual leadership transition, CEO and CFO changing simultaneously, is unusual and reflects the deliberateness of the succession planning that has been underway. The fact that Taluja was already on JustDial's board as a non-executive director before being appointed CFO suggests a considered transition rather than an emergency replacement.`,
          { type: 'heading', text: 'A Year That Demanded a Re-Rating' },
          `On a year-to-date basis, the stock is down 22 per cent, while over the one year from July 2025 to July 2026, it has fallen 40 per cent. The 40 per cent decline over the past year is the context in which Monday's 20 per cent upper circuit needs to be understood. JustDial was not a company experiencing a business collapse. It was a company whose stock had drifted to a valuation that implied the market had either forgotten about its Rs 6,000 crore cash position, lost faith in its ability to generate operating leverage from its technology investments, or both. The Q1 results and the leadership transition have provided the catalyst for a reassessment.`,
          `VSS Mani's 33-year tenure ends with JustDial in a position that reflects both the durability of the platform he built and the challenges of adapting a local search business to a world of AI-driven discovery, app-based commerce, and instant delivery. The 56 million active listings, the Rs 6,022 crore cash pile, the fastest sequential revenue growth in a decade, and the AI investments now beginning to generate measurable commercial outcomes are his legacy in operational terms. The new leadership team that Reliance Retail and JustDial's board have assembled takes over a platform with genuine structural assets and a specific mandate: to build the next version of what Mani started in 1996, for an India that looks very different from the one he was building for then, but that still needs the same fundamental thing. A way to find what it is looking for.`,
        ],
      },
      {
        id: 'business-side-fundamentum-fund-iii',
        slug: 'fundamentum-partnership-fund-iii-nandan-nilekani-transition',
        title: 'The Next Chapter Begins: Fundamentum Partnership Targets Rs 2,200 Crore for Fund III as Nandan Nilekani Steps Back from the General Partner Role',
        description:
          "Fundamentum Partnership, the venture capital firm co-founded by Nandan Nilekani and Sanjeev Aggarwal in 2017, has announced the launch of its third fund with a target corpus of Rs 2,200 crore, including a green shoe option of Rs 400 crore. The announcement comes alongside a structural change that has drawn significant attention across India's investment community: Nilekani, one of India's most consequential technology leaders, is stepping down as general partner while committing to be the fund's anchor investor and making his largest-ever personal commitment to a venture capital fund. The transition, described by Aggarwal as a natural evolution rather than a departure, signals both the maturation of Fundamentum as an independent institution and a broader shift in how India's most experienced technology architects are choosing to deploy their influence as the country's AI moment accelerates.",
        image: '/art.jpg',
        body: [
          { type: 'heading', text: 'The Next Chapter Begins: Fundamentum Partnership Targets Rs 2,200 Crore for Fund III as Nandan Nilekani Steps Back from the General Partner Role' },
          "Fundamentum Partnership, the venture capital firm co-founded by Nandan Nilekani and Sanjeev Aggarwal in 2017, has announced the launch of its third fund with a target corpus of Rs 2,200 crore, including a green shoe option of Rs 400 crore. The announcement comes alongside a structural change that has drawn significant attention across India's investment community: Nilekani, one of India's most consequential technology leaders, is stepping down as general partner while committing to be the fund's anchor investor and making his largest-ever personal commitment to a venture capital fund. The transition, described by Aggarwal as a natural evolution rather than a departure, signals both the maturation of Fundamentum as an independent institution and a broader shift in how India's most experienced technology architects are choosing to deploy their influence as the country's AI moment accelerates.",
          { type: 'heading', text: 'The Next Chapter Begins: Fundamentum Partnership Targets Rs 2,200 Crore for Fund III as Nandan Nilekani Steps Back from the General Partner Role' },
          "Nandan Nilekani has spent his career building things that outlast the specific roles he occupies within them. Infosys, which he co-founded in 1981, became one of the defining companies of India's technology services era. Aadhaar, the biometric identity system he architected as chairman of the Unique Identification Authority of India, became the foundational layer of a digital infrastructure stack that now underpins how hundreds of millions of Indians access banking, benefits, and government services. UPI, whose development and adoption he championed through the India Stack framework, became the world's most used real-time payment system and a model that dozens of countries have studied and sought to replicate. ONDC, the Open Network for Digital Commerce initiative that aims to make India's e-commerce ecosystem as interoperable as its payments infrastructure, is his most recent addition to that stack of institution-building achievements.",
          "Fundamentum Partnership, launched in 2017 alongside Sanjeev Aggarwal, was Nilekani's venture into the capital deployment side of India's technology ecosystem. The firm was designed from inception to be different from the majority of venture capital funds operating in India: patient, thesis-driven, focused on the Series B stage where companies have proven their basic model but need the capital and strategic support to scale it, and explicitly positioned to back Indian-native consumer and enterprise technology businesses rather than India-adapted versions of concepts that had succeeded elsewhere. Seven years later, with 17 investments across two funds and approximately half of the capital from Fund I already returned to investors, the institutional foundations that Nilekani helped lay are sufficiently strong that the transition to a leadership structure built around the investment professionals who have been executing the strategy can happen without disrupting either the firm's direction or its investor relationships.",
          { type: 'heading', text: 'What Changes and What Does Not' },
          'The precise nature of the transition matters, and Aggarwal has been deliberate in characterising it accurately. Nilekani is stepping down as a general partner, which is a formal legal and fiduciary role in the fund structure. He is not stepping away from Fundamentum. He will remain the firm\'s anchor investor, committing the largest sum he has ever personally put into a venture fund. He will continue advising the partnership, providing strategic guidance on investment decisions, and mentoring the founders of portfolio companies. Aggarwal described this mentoring function specifically as the activity Nilekani most values and most enjoys: direct engagement with the people building companies, helping them think through the institutional and strategic challenges that come with scaling a technology business in India.',
          'The shift is therefore best understood as a redistribution of formal responsibility rather than a reduction of involvement. The general partner title carries obligations around fund operations, LP relationships, and fiduciary governance that require sustained operational attention. Stepping back from that title allows Nilekani to concentrate his engagement on the highest-value contribution he makes to portfolio companies, which is strategic counsel from someone who has built at a scale that almost no one else in India has matched, without the operational demands of the GP role consuming the time and energy that counsel requires.',
          "For Fundamentum's limited partners, the continuity of Nilekani's financial commitment as anchor investor is the most important signal. The largest personal cheque he has ever written to a venture fund is not an act of passive association. It is a statement of conviction about the fund's strategy and the team executing it.",
          { type: 'heading', text: 'The Team That Will Run Fund III' },
          "The leadership structure for Fund III reflects both the institutional depth Fundamentum has built over seven years and the deliberate succession planning that good fund management requires. Sanjeev Aggarwal continues as the primary general partner, bringing the founding conviction and institutional relationships that have defined the firm's identity since 2017. Alongside him, Fund III will be led by three partners who between them represent the full history of the firm's development.",
          "Prateek Jain has been with Fundamentum since its inception in 2017 and has developed deep expertise in evaluating and supporting the kinds of growth-stage technology businesses the firm targets. Mayank Kachhwaha joined ahead of Fund II with a specific focus on fintech, a sector where India has produced some of the most globally significant consumer technology outcomes of the past decade and where Fundamentum sees particularly strong opportunity in the AI application layer. Sanjay Chaturvedi, the firm's finance chief, has been part of the organisation for nearly a decade and brings the operational and financial governance depth that institutional fund management demands.",
          "The expansion of the formal GP team beyond Aggarwal and Nilekani is a sign of organisational health, not a sign of crisis. Venture firms that depend on one or two individuals for all decision-making, mentorship, and LP confidence are fragile in ways that only become apparent at moments of transition. Fundamentum's ability to announce Nilekani's move from GP to anchor investor without any suggestion that the firm's strategy or LP relationships are at risk reflects the strength of the team and infrastructure that has been built around the founding partnership.",
          { type: 'heading', text: 'The Fund III Strategy: AI Applications, Fintech, and the Indian Consumer' },
          "The investment mandate for Fund III carries significant continuity from the previous two funds while incorporating the strategic evolution that the emergence of AI as a dominant technology layer demands. The firm plans to back eight to ten early-stage startups across consumer technology, fintech, and AI-native and AI-enabled businesses, writing initial cheques of approximately Rs 100 to 150 crore per company. The target of eight to ten investments in a Rs 2,200 crore fund implies meaningful follow-on capital reserved for winners, a structure consistent with the firm's Series B and later stage focus and its history of supporting companies through multiple financing rounds.",
          "Aggarwal's articulation of where Fundamentum sees India's AI opportunity is one of the most specific and honest assessments to emerge from the Indian venture community on this question. The firm believes that India's biggest AI opportunity lies not in building foundation models or competing with the large language model labs of the United States and China, but in building applications on top of those models that are tailored to Indian consumers, Indian enterprises, and Indian financial services contexts. The specific focus areas identified are financial services, content, and vernacular consumer applications, all three of which reflect a clear-eyed reading of where Indian users and Indian enterprises will derive the most value from AI in the near and medium term.",
          "The financial services application layer in India is particularly fertile ground for this thesis. India's digital financial infrastructure, from UPI to the Account Aggregator framework to ONDC, has created a data and transaction layer that AI applications can use to personalise, automate, and expand financial services access in ways that are genuinely novel. Content and vernacular applications address a market dynamic that is specific to India: the majority of the country's most rapidly growing internet user population is more comfortable in one of India's regional languages than in English, and the current generation of AI tools delivers substantially better performance in English than in Hindi, Tamil, Telugu, Bengali, or the other languages that represent the real scale of the Indian market. Startups that close that gap effectively represent some of the most durable competitive positions available in Indian technology today.",
          { type: 'heading', text: 'The LP Base and What It Tells You About Indian Venture in 2026' },
          "One of the most telling details in Aggarwal's description of Fund III is the composition of the investor base being assembled. The firm expects to raise approximately half of the target corpus from international investors and the remaining half from Indian institutions, family offices, founders, and the firm's own partners. That roughly equal split between domestic and international capital would have been unimaginable when Aggarwal was raising his first fund at Helion Venture Partners in the mid-2000s. At that point, domestic institutional capital for Indian venture funds was effectively non-existent, and every rupee invested came from overseas sources.",
          "The shift reflects a structural maturation of India's investment ecosystem that has accelerated significantly over the past five years. Indian family offices have grown in number and sophistication as the wealth generated by the first and second generation of Indian technology and consumer businesses has compounded. Indian founders who achieved liquidity through exits at the companies they built have become active investors in the next generation. Indian institutional investors, including corporate treasuries, insurance companies, and domestic fund of funds, have developed both the appetite and the analytical frameworks to evaluate venture capital as an asset class. The result is a domestic capital market for venture that gives Indian fund managers genuine optionality in how they structure their LP bases, and that reduces the dependence on US institutional capital that made the entire Indian venture ecosystem vulnerable to cycles in American investor sentiment toward emerging markets.",
          { type: 'heading', text: 'The Departure of Ashish Kumar and the AI Frontier Bet' },
          "The Fund III announcement coincides with the departure of another general partner whose trajectory reflects a different thesis about where India's AI opportunity lies. Ashish Kumar has left Fundamentum to launch Fundamentum Frontier Advisors, known as F2A, an AI-focused venture fund with a target corpus of Rs 3,000 crore that takes a more direct bet on India's ability to develop AI capabilities closer to the frontier rather than exclusively at the application layer. Nilekani is also an anchor investor in F2A, reflecting his characteristic inclination to back multiple approaches to the same opportunity rather than making a single concentrated bet.",
          "Aggarwal was explicit that F2A is a separate firm with no operational connection to Fundamentum, and that Kumar is not involved in Fund III. The two firms represent complementary rather than competing approaches to India's AI future: Fundamentum focused on applying existing global model capabilities to Indian consumer and enterprise contexts, F2A pursuing the more capital-intensive and technically ambitious goal of building toward frontier AI from India.",
          "Fundamentum has made 17 investments across its first two funds, with the first fund having returned approximately half its capital to investors and the second fund now focused on follow-on investments into its existing portfolio. The track record of returning capital, which is the fundamental measure of venture fund performance that most Indian funds of Fundamentum's vintage have struggled to demonstrate convincingly, gives Fund III a credibility advantage in LP conversations that no amount of portfolio company description can substitute for. A fund that has actually given money back has proven something about its investment judgment and exit capabilities that a fund still waiting for its first liquidity event has not.",
          "For the eight to ten founders who receive Fund III's first cheques over the next 12 to 18 months, the backing comes with something that most other Indian venture funds cannot offer in the same combination: the operational rigour of a team that has been executing together for years, the network and institutional relationships of a firm with a genuine track record, the strategic counsel of one of the architects of India's digital public infrastructure, and the conviction of an anchor investor who has made his largest personal venture commitment to the fund that will back them.",
        ],
      },
      {
        id: 'business-side-vguard-fy27',
        slug: 'mithun-chittilappilly-vguard-fy27-growth-solar-lighting-b2b',
        title: 'Building the Next Chapter: How Mithun Chittilappilly Is Steering V-Guard Toward 15 to 17 Per Cent Growth in FY27 Through Solar, Lighting, and a Bold B2B Push',
        description:
          'V-Guard Industries has never been a company that moves loudly. Founded in 1977 by Kochouseph Chittilappilly with an investment of one lakh rupees and two employees, it built its reputation across five decades through the kind of patient, product-first discipline that produces enduring brand trust rather than headline-grabbing expansion announcements. Under Managing Director Mithun Chittilappilly, that foundational character has not changed. What has changed is the scale of ambition and the sophistication of the bets being placed to achieve it. With a 15 to 17 per cent revenue growth target for FY27 and three strategic pillars, solar, lighting, and B2B expansion, at the centre of the plan, the company that started as a voltage stabiliser manufacturer is in the midst of its most consequential reinvention.',
        image: '/arrr.webp',
        body: [
          { type: 'heading', text: 'Building the Next Chapter: How Mithun Chittilappilly Is Steering V-Guard Toward 15 to 17 Per Cent Growth in FY27 Through Solar, Lighting, and a Bold B2B Push' },
          'V-Guard Industries has never been a company that moves loudly. Founded in 1977 by Kochouseph Chittilappilly with an investment of one lakh rupees and two employees, it built its reputation across five decades through the kind of patient, product-first discipline that produces enduring brand trust rather than headline-grabbing expansion announcements. Under Managing Director Mithun Chittilappilly, that foundational character has not changed. What has changed is the scale of ambition and the sophistication of the bets being placed to achieve it. With a 15 to 17 per cent revenue growth target for FY27 and three strategic pillars, solar, lighting, and B2B expansion, at the centre of the plan, the company that started as a voltage stabiliser manufacturer is in the midst of its most consequential reinvention.',
          { type: 'heading', text: 'Building the Next Chapter: How Mithun Chittilappilly Is Steering V-Guard Toward 15 to 17 Per Cent Growth in FY27 Through Solar, Lighting, and a Bold B2B Push' },
          'V-Guard ended FY26 with results that validated the strategic direction Mithun Chittilappilly has been building toward for several years. Revenue grew 16.44 per cent year on year in FY25, profit after tax grew 12.69 per cent, and the company entered FY26 with a net cash position of Rs 231 crore, up sharply from Rs 64 crore the previous year. The balance sheet is clean, the brand is strong across its core categories of wiring cables, fans, water heaters, pumps, and stabilisers, and the manufacturing investments that required significant capital outlay over the past two years are now largely complete and beginning to generate operational output. The conditions for an acceleration phase are in place. The question that FY27 answers is whether the strategic choices Chittilappilly has made about where to grow will produce the returns the numbers suggest they should.',
          "The three bets he has placed are neither random nor reactive. They are the product of a systematic reading of where India's consumer and commercial markets are heading over the next decade, mapped against the capabilities and distribution infrastructure that V-Guard has already built.",
          { type: 'heading', text: 'The Solar Opportunity: Why V-Guard Is Moving Now' },
          "India's solar energy story has shifted fundamentally over the past three years. What was once primarily a utility-scale and commercial rooftop story has become a household story, driven by the government's PM Surya Ghar Muft Bijli Yojana scheme, which offers subsidies for residential rooftop solar installation, and by a sustained decline in panel costs that has made solar economics attractive for middle-income households across both urban and semi-urban markets. The combination of policy push, price correction, and rising electricity costs has created a consumer solar market that is growing faster than almost any other segment in India's consumer durables sector.",
          "V-Guard's entry into solar is not the move of a company chasing a trend. It is the extension of an existing strategic logic: V-Guard already serves the household through its presence in the electrical and appliances space, its dealer and distributor network reaches deep into semi-urban and Tier II markets where residential solar adoption is accelerating most rapidly, and its brand carries the kind of trust on which large capital-expenditure purchase decisions, which residential solar represents for most families, depend. The opportunity to position V-Guard as the trusted name that helps Indian households make the solar transition is genuine, and the timing of the company's entry, before the market becomes as fragmented and commoditised as it eventually will, is strategically sound.",
          "The specific product focus within solar reflects the same discipline that has always defined V-Guard's portfolio decisions: entering segments where quality differentiation is possible and where the company's existing brand equity gives it a meaningful advantage over unbranded or poorly supported alternatives. Solar pumps for agricultural use, solar water heaters, solar home systems, and the balance-of-system components that residential solar installations require are all areas where V-Guard's manufacturing and distribution capabilities translate into competitive positioning.",
          { type: 'heading', text: 'Lighting: The BLDC and Premium Play' },
          "V-Guard's lighting business has been a work in progress for several years, and the FY27 strategy represents a deliberate step-up in both product ambition and market positioning. The broad-based LED lighting market in India has matured to the point where commodity pricing is the norm and margin generation for undifferentiated products is extremely challenging. V-Guard's response to that structural reality is premiumisation rather than volume competition.",
          "The BLDC, Brushless Direct Current, motor technology that has already transformed V-Guard's fan business by enabling significantly higher energy efficiency than conventional motor-driven fans is now being extended into lighting-adjacent product categories. BLDC fans have become one of the company's fastest-growing product lines as Indian consumers have grown increasingly receptive to the value proposition of higher upfront cost offset by substantially lower electricity consumption over the product's lifetime. The same consumer logic applies to premium lighting products with superior energy efficiency, longer rated lifespans, and better light quality than standard LED alternatives.",
          "The lighting expansion also serves a distribution logic. V-Guard's electrician and contractor channel, which is already a primary route to market for wiring cables and switches, is the natural channel for premium lighting products in both residential and commercial applications. Building out lighting within this channel deepens the relationship with a customer segment that already trusts the V-Guard brand for electrical products, and it increases the revenue per relationship in a channel that the company has invested years in developing.",
          { type: 'heading', text: 'The B2B Push: Construction, Real Estate, and Industrial Channels' },
          "The third pillar of Mithun Chittilappilly's FY27 strategy is the one that represents the most significant structural evolution in how V-Guard thinks about its market. The company's heritage is fundamentally a retail and consumer brand story. Its products have historically reached end customers through a dealer and distributor network that serves the replacement market and new construction equally, with the consumer making the final purchase decision. The B2B expansion is a deliberate move to engage the institutional purchaser earlier in the value chain.",
          "India's construction and real estate sector is generating demand for electrical and consumer products at a scale and consistency that retail channel economics cannot fully capture. Large residential projects, commercial complexes, hospitality developments, and infrastructure projects all require bulk procurement of exactly the categories that V-Guard serves: wiring, fans, water heaters, pumps, switches, and lighting. The developers, project managers, electrical contractors, and facility management companies that make these bulk procurement decisions represent a distinct customer segment with distinct needs: specification compliance, supply reliability, volume pricing, and post-installation service capability.",
          "V-Guard's FY27 B2B push involves building the sales team structure, specification support capabilities, and service infrastructure needed to serve this customer segment at scale. The company's existing brand recognition among electricians and contractors gives it a starting advantage in specification discussions, since these professionals are already familiar with V-Guard products from the retail channel. The task is to translate that familiarity into formal procurement relationships at the institutional buyer level.",
          'The Hyderabad fan manufacturing plant, in which V-Guard Consumer Products Ltd has invested approximately Rs 100 crore with operations expected to reach full capacity by FY27, directly supports the B2B strategy by providing the supply reliability and cost structure that institutional buyers require. Similarly, the Rs 50 crore investment in battery plant capacity expansion addresses the requirements of the solar business while also building manufacturing depth that supports competitive pricing in B2B channels.',
          { type: 'heading', text: 'Reading the FY27 Environment: Summer Demand, Commodity Costs, and Kerala' },
          "Mithun Chittilappilly's assessment of the FY27 demand environment, articulated during the company's FY26 earnings call in May 2026, reflects the careful, market-specific reading that has always characterised his public commentary. South India delivered well in the early months of the financial year, with warm temperatures driving strong summer product demand across fans, coolers, water pumps, and air coolers. The non-South geography had a delayed summer start due to unseasonal rainfall, but the window for summer demand in northern and western India runs through June 30, and Chittilappilly expressed confidence that non-South would also deliver a strong performance as that window progressed.",
          'The commodity cost environment is a more complex variable. Raw material prices, particularly copper for wiring cables and steel for appliance components, have moved upward materially, creating pressure on input costs that the company is managing through a combination of price increases passed to the market and operational efficiency within manufacturing. Chittilappilly indicated that price increases have been implemented across relevant product categories, though the question of whether a further round of increases will be required as the year progresses depends on how commodity markets evolve.',
          "Kerala, historically V-Guard's home market and for many years its largest single geography, has reduced in proportional importance as the company's pan-India footprint has grown. Kerala now represents approximately 15 to 16 per cent of total company revenue, down from a significantly higher share in earlier years. Chittilappilly noted that the Kerala market has remained resilient, with real estate activity and household spending holding up despite broader concerns about the economic impact of returning Gulf diaspora families. The diversification of V-Guard's revenue base away from heavy Kerala dependence is itself a strategic achievement that reduces vulnerability and broadens the growth opportunity.",
          { type: 'heading', text: 'The Company Kochouseph Built and Mithun Is Reinventing' },
          'There is a particular quality to the leadership of a family business that has been built over nearly five decades and that a second-generation leader has been given the responsibility of taking into its next chapter. Mithun Chittilappilly joined V-Guard in 2006 after completing his MBA and LLM at the University of Melbourne. He became Managing Director in 2012. In the fourteen years since, he has overseen the acquisition of Sunflame Enterprises, the establishment and scaling of V-Guard Consumer Products Ltd, significant investment in manufacturing capability across multiple product lines, and the geographic expansion that has made V-Guard a genuinely national brand rather than a Kerala and South India story.',
          'The FY27 growth target of 15 to 17 per cent, set against the backdrop of a net cash position of Rs 231 crore and manufacturing investments now largely complete, is the most confident growth target the company has articulated in several years. It is the kind of target that a well-capitalised, well-positioned company sets when it believes the strategic investments of the past several years are ready to generate returns. Whether solar, lighting, and B2B deliver on that belief will tell us a great deal about how well Mithun Chittilappilly has read both the opportunity and the company\'s readiness to capture it. Based on the evidence of the past five years, there is good reason to think he has read both correctly.',
        ],
      },
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
        slug: 'best-crm-small-business-2026-guide',
        title: 'The Right CRM for Your Small Business in 2026: A Complete Guide to the 11 Best Options',
        description:
          'You have built something real. You have a client base, your numbers are moving in the right direction, and now you are thinking about what comes next. The tool that sits at the centre of that next chapter is your CRM.',
        image: '/aaa.jpg',
        body: [
          { type: 'heading', text: 'The Right CRM for Your Small Business in 2026: A Complete Guide to the 11 Best Options' },
          'You have built something real. You have a client base, your numbers are moving in the right direction, and now you are thinking about what comes next. The tool that sits at the centre of that next chapter is your CRM, and choosing the wrong one, either too basic, too expensive, or too complicated, is one of the most common and costly mistakes growing small businesses make. Here is a clear-eyed guide to the eleven best customer relationship management platforms available to small businesses in 2026, what each one does well, who it is best suited for, and what it will cost you.',
          { type: 'heading', text: 'The Right CRM for Your Small Business in 2026: A Complete Guide to the 11 Best Options' },
          'Small businesses shopping for CRM software face a version of the Goldilocks problem. The most basic tools are fine when you have fifty contacts and one salesperson, but they hit a ceiling quickly and force a disruptive migration right when you can least afford it. The enterprise platforms, Salesforce being the most obvious example, are built for organisations with dedicated CRM administrators, six-figure software budgets, and implementation teams. Neither extreme serves the small business that is actively growing, has a real customer pipeline, and needs software that scales with it without making the finance team wince every time the invoice arrives.',
          'The criteria that matter most at this stage are specific. The user experience needs to be good enough that your team will actually use the tool every day rather than work around it. The sales features need to give you genuine visibility into your pipeline without requiring a training course to navigate. Reporting needs to be actionable, not decorative. Integration with the other tools in your stack needs to work reliably. And pricing needs to stay reasonable as headcount grows, not spike sharply the moment you unlock the features that made the platform worth buying in the first place. With those benchmarks in mind, here is what the market offers in 2026.',
          { type: 'heading', text: 'Vtiger: Best for product-based businesses that need everything in one place' },
          'Vtiger earns its position at the top of the all-in-one category by doing something most platforms claim and few deliver: genuinely connecting your sales pipeline, inventory, help desk, project management, and document management into a single coherent system without making the interface feel like five different products bolted together. The navigation is clean, the modules are highly customisable, and the connections between them are logical. When a deal closes, converting it into a project is a single click. When a customer submits a support case, the context from the sales relationship is already visible.',
          'The AI layer, called Calculus AI, has matured considerably and now includes generative capabilities, predictive analytics, a chatbot, and natural language querying, features that most platforms reserve for their most expensive tiers. An Agent Builder lets you create no-code AI agents for tasks like lead qualification, deal management, and expense approvals. The pricing starts at $15 per user per month and scales with a sensible two-tier structure based on whether a user needs access to all modules or just one, which means you are not paying full enterprise rates for every member of your team.',
          { type: 'heading', text: 'Flowlu: Best for service businesses that need sales and delivery in one system' },
          'Flowlu is built around the specific operational challenge of service businesses: the gap between winning a client and delivering for them. The platform connects a standard CRM pipeline directly to project management, time tracking, client portals, and invoicing in a way that eliminates the handoff friction that causes so many service businesses to lose information and momentum between the moment a deal is won and the moment work begins. When a deal closes, a pipeline automation triggers a project template, so the delivery team can begin immediately without waiting for a briefing from sales. Hours logged against project tasks flow automatically into client invoices. Branded client portals with their own domain give clients visibility into progress and a channel for communication that keeps everything in one place. The free plan covers two users and basic functionality; paid plans start at $12 per user per month.',
          { type: 'heading', text: 'Zoho CRM: Best for businesses planning to scale significantly' },
          "Zoho CRM's central advantage is durability: it is a platform that remains affordable and feature-rich as a business grows, without the sharp pricing inflections that make some competitors feel like traps once you have committed to them. The AI assistant Zia offers one of the strongest feature sets in the category, covering predictive analytics, sentiment analysis on emails, workflow suggestions, anomaly detection, and automatic record enrichment from email data. The user interface is functional rather than beautiful, but the depth of capability it gives you at each price tier is genuinely competitive. Non-sales staff can be added on a separate Team user licence at $9 per user per month, which means the platform can serve the whole organisation without forcing everyone onto the full sales tier. Plans start at $20 per user per month.",
          { type: 'heading', text: 'HubSpot: Best for businesses growing through content and inbound' },
          'HubSpot invented the concept of inbound marketing, and its CRM is still best understood as the operational backbone for businesses that want prospects to find them rather than purely pursuing outbound sales. The platform lets you build and host your website and blog, capture lead data through forms, track every subsequent visit a lead makes to your site, and move them through email sequences, meeting bookings, and a visual pipeline all within the same system. The AI platform, called Breeze, adds generative writing assistance, a Copilot for interacting with your workspace by prompt, and agents for automating customer service and social media management. The free plan covers up to 1,000 contacts, and paid plans start at $20 per user per month, though pricing can scale sharply depending on the specific feature set you need, so reviewing the pricing page carefully before committing is genuinely important here.',
          { type: 'heading', text: 'monday CRM: Best for teams that want flexibility and customisation' },
          'Monday CRM has evolved from a work management platform into a genuinely capable CRM with a modular, customisable structure that makes it unusually adaptable to how different businesses actually operate. The interface is intuitive and consistent across all modules, and the AI story has strengthened considerably. The AI assistant Sidekick works across boards and the CRM, letting you create and summarise content conversationally. An AI Notetaker joins your video calls, transcribes them in real time, and auto-fills CRM fields after each conversation. Email sequencing, audience segmentation, and AI-generated copy are all included through Monday Campaigns. The Basic plan starts at $18 per user per month with a three-user minimum.',
          { type: 'heading', text: 'Clarify: Best for teams who want AI to handle the administrative burden' },
          'Clarify takes a different philosophical approach from most CRMs: rather than requiring your team to log every interaction manually, it monitors your email and calendar continuously and builds the relationship record for you. Contact enrichment fills empty fields automatically. A meeting recording bot transcribes calls without joining them visibly and extracts next steps as tasks. An AI agent called Rep lets you interact with your workspace in natural language, updating records, creating lists, and composing emails by instruction rather than by clicking through menus. A built-in Lead Finder lets you describe your ideal prospect in plain language and returns enriched contact lists. The free plan is generous; the Starter plan is priced at $50 per month for unlimited users rather than per seat, which changes the economics favourably for growing teams.',
          { type: 'heading', text: 'Salesflare: Best for B2B teams who need deep contact intelligence' },
          'Salesflare is built around the insight that good research is the differentiator in B2B sales and that most teams do not have time to do it manually. Every time a new contact is added, the platform automatically enriches the record using LinkedIn, company websites, and email signatures, giving you a comprehensive picture without manual research. It detects email conversations you are having with new contacts and suggests adding them to the CRM. It tracks email opens, link clicks, and website page visits automatically. A Chrome extension lets you prospect while browsing LinkedIn. Relationship intelligence features show you who on your team knows each contact best, so you can deploy the strongest relationship at the right moment. Plans start at $39 per user per month.',
          { type: 'heading', text: 'folk: Best for high-touch sales with personalised outreach at scale' },
          'folk is less interested in building complex pipeline dashboards than in helping you send emails that feel genuinely personal to large lists of contacts. The interface is clean, closer in feel to a well-designed database tool than a traditional CRM, and the personalisation functionality is its strongest feature: as you compose an email to a list, you can embed any data field from the contact record directly into the body of the message, so each recipient receives something that reads as individually written rather than templated. AI assistants handle monitoring for conversations that need a response, drafting replies, researching contacts from web sources, and automating outreach sequencing. A Chrome extension works across LinkedIn, Instagram, and Gmail. Plans start at $30 per user per month.',
          { type: 'heading', text: 'Kommo: Best for businesses selling across messaging platforms' },
          'Kommo is designed for the reality that customers in 2026 do not exclusively communicate by email or phone. The platform connects WhatsApp, Instagram, Facebook Messenger, Telegram, Viber, WeChat, Apple Messages, Skype, SMS, and Slack into a single interface where all conversations are managed, logged, and connected to CRM records. Salesbots let you automate initial responses, escalation triggers, and follow-up sequences based on message keywords and timing. AI sentiment detection helps you read conversations as they unfold and steer them accordingly. An AI agent can manage chats autonomously when you are occupied elsewhere. Plans start at $15 per user per month.',
          { type: 'heading', text: 'Salesmate: Best for businesses that rely on phone and SMS' },
          'Salesmate treats phone and SMS as primary sales channels rather than afterthoughts, building its feature set around call and text management with a CRM that connects around them. Once phone access is enabled, you can make and receive calls directly from the platform, with calls triggered from deal cards in the pipeline so you always have the relevant context visible when a conversation begins. SMS is managed in the same interface and appended to contact activity logs automatically. The AI system handles call transcription, conversation intelligence, and summary generation. A Team Inbox manages shared email addresses collectively. Plans start at $29 per user per month.',
          { type: 'heading', text: 'NetHunt: Best for businesses that live in Gmail' },
          'NetHunt embeds directly into Gmail through a browser extension and offers a web application with an interface close enough to Gmail that switching between them feels natural rather than disruptive. It is the right choice for businesses whose primary communication channel is email and whose team resists switching to a separate tool for CRM management. Beyond email, NetHunt connects to WhatsApp Business, Facebook Messenger, Instagram, Telegram, and Viber, and supports VoIP integrations for phones. Automation workflows can span channels, pausing until a customer replies via one platform before triggering a follow-up through another. Plans start at $30 per user per month.',
          'The right CRM for your small business in 2026 is the one that fits where you are now and where you intend to be in three years, at a price that does not require optimistic revenue projections to justify. Every platform listed here offers a free trial. The investment of a few hours testing two or three of them against your actual workflow will save you the far more costly experience of migrating a year from now because you chose on price alone.',
        ],
      },
      {
        id: 'business-side-hcltech-ai-data-centre',
        slug: 'hcltech-q1-fy27-results-ai-data-centre-bet',
        title: "Full Stack and Firing: How HCLTech's Q1 FY27 Results and a Rs 3,500 Crore AI Data Centre Bet Signal the Arrival of India's Next Technology Giant",
        description:
          "HCL Technologies reported its strongest first quarter performance in several years on July 13, posting a 20 per cent rise in net profit and 14 per cent revenue growth for Q1 FY27. Alongside the financial results, the company announced a board-approved investment of up to Rs 3,500 crore to establish AI data centres in India with the potential to scale to 50 megawatts of capacity.",
        image: '/HCl.webp',
        body: [
          { type: 'heading', text: "Full Stack and Firing: How HCLTech's Q1 FY27 Results and a Rs 3,500 Crore AI Data Centre Bet Signal the Arrival of India's Next Technology Giant" },
          "There is a particular kind of corporate announcement that deserves to be read as two separate stories at once. The first story is the financial one: the quarterly results, the profit numbers, the revenue trajectory, the earnings per share. The second story is the strategic one: what the company is betting on, why it is betting on it now, and what kind of organisation it is trying to become. HCLTech's Q1 FY27 results, released on July 13, 2026, are exactly that kind of announcement. The financial story is strong and clear. The strategic story is, if anything, more significant, and understanding both together is the only way to appreciate what CEO C Vijaykumar and the HCLTech board have decided about where the company is going.",
          "The financial numbers first. HCLTech reported a net profit of Rs 4,624 crore for the first quarter of FY27, a 20.3 per cent increase from the Rs 3,843 crore reported in Q1 FY26. Revenue from operations reached Rs 34,579 crore compared to Rs 30,349 crore in the same period of the previous financial year, a year-on-year growth of 14 per cent. These are not just good numbers relative to analyst expectations, though they are that too. They are good numbers in an absolute sense, delivered at a scale that very few Indian IT services companies operate at, and in a quarter that has been challenging for the broader sector. The Iran-US conflict escalation that hit market sentiment on the morning the results were announced, pushing Sensex and Nifty lower on geopolitical concerns, provided an unusual backdrop for what were unambiguously positive corporate earnings. The market's attention was divided between macro anxiety and micro strength, and HCLTech's results represented the latter decisively.",
          { type: 'heading', text: 'The Booking Number That Tells the Real Story' },
          "Among all the metrics in HCLTech's Q1 FY27 disclosure, the net-new bookings figure is the one that carries the most forward-looking significance. The company recorded net-new bookings of $2.4 billion in Q1 FY27, which Vijaykumar described as the highest ever for a first quarter in the company's history. That record is important for a reason that goes beyond the number itself. Net-new bookings represent future revenue, the contracts signed in a given period that will convert into recognised revenue over the coming quarters and years. A record Q1 booking figure, delivered in a period when global enterprises have been cautious about large discretionary technology spending, means that HCLTech is winning deals at a rate that will support its revenue growth trajectory well into FY28 and beyond.",
          "The composition of that booking figure is equally revealing. Vijaykumar specifically called out the performance of what HCLTech calls its Advanced AI business, the segment that encompasses AI strategy consulting, AI implementation, AI-enabled managed services, and the growing range of generative AI and agentic AI solutions the company is delivering to enterprise clients. The Advanced AI business grew 10.6 per cent sequentially quarter on quarter and 62.1 per cent year on year in constant currency terms. A 62 per cent year-on-year growth rate in a business segment is exceptional by any measure, and the fact that it is being delivered at the scale HCLTech operates at, rather than as a small base effect at an early-stage company, makes it more significant still. Enterprises are choosing HCLTech to lead their AI transformation programmes, and the $2.4 billion booking number is the commercial evidence of that choice being made at scale.",
          { type: 'heading', text: 'The Rs 3,500 Crore Bet: What Full Stack AI Actually Means' },
          "The investment announcement that accompanied the Q1 results is the strategic story that the financial results set the stage for. HCLTech's board has approved an investment of up to Rs 3,500 crore in AI data centres to be built in India through new subsidiaries established specifically for this purpose. The infrastructure being built will have the potential to scale to 50 megawatts of capacity, a figure that positions these data centres at the serious end of the AI compute infrastructure spectrum. Fifty megawatts of data centre capacity at current GPU power densities represents a significant amount of compute available for AI training and inference workloads.",
          "The announcement of this investment comes with a specific strategic framing that deserves careful reading. HCLTech describes this as its entry into the full-stack AI market, a term that the company defines as the ability to address the complete spectrum of business opportunities arising from growing demand for AI-led services and solutions. What that means in practice is that HCLTech is building the capability to provide AI services at every layer of the technology stack simultaneously. At the infrastructure layer, it will own and operate the data centres where AI workloads run. At the platform layer, it has existing capabilities across AI data centre design and AI cloud operations. At the software layer, it brings its existing software portfolio covering engineering, analytics, and enterprise applications. And at the services layer, it delivers the consulting, implementation, and managed services that convert AI infrastructure and software into business outcomes for enterprise clients.",
          "The integrated nature of this proposition is what distinguishes it from what most Indian IT services companies are attempting. The majority of the sector is focused on the services and implementation layer of AI, helping enterprise clients deploy AI tools built by the global hyperscalers and software vendors. HCLTech is making a deliberate investment to own more of the value chain below that services layer, building proprietary infrastructure that gives it both the technical capability and the commercial model to offer something closer to an end-to-end AI solution than any pure services provider can match.",
          { type: 'heading', text: 'Why India and Why Now' },
          "The geographic focus of the data centre investment is India, and the timing is not accidental. India's data centre sector is growing at a rate that reflects multiple converging demand drivers. The country's digital economy continues to expand rapidly, driven by the scale and pace of UPI transaction growth, the expansion of e-commerce and digital financial services, and the government's push to digitise public service delivery through platforms that generate and consume data at enormous scale. Data localisation requirements, which mandate that certain categories of sensitive data must be stored and processed within India's borders rather than on overseas servers, are creating structural demand for domestic data centre capacity that cannot be served by foreign cloud infrastructure regardless of price or performance. And the specific requirements of GPU-intensive AI training and inference workloads, which demand power density, cooling infrastructure, and network architecture that not all existing Indian data centres are equipped to provide, create an opportunity for new, purpose-built AI data centre capacity at exactly the moment that enterprise demand for that capacity is accelerating.",
          "Vijaykumar's articulation of the opportunity reflects all three of these demand drivers. He described the convergence of AI-led demand, supply constraints, and the push for digital sovereignty as creating a compelling opportunity for HCLTech to emerge as a full-stack AI technology solutions provider. The digital sovereignty dimension is particularly significant: Indian enterprises and government agencies that want to keep their AI workloads on Indian infrastructure rather than routing sensitive data through overseas hyperscaler facilities represent a captive demand pool for domestic AI data centre capacity, and HCLTech's investment is sized and positioned to serve that demand.",
          { type: 'heading', text: 'The Medium-Term Confidence and What It Is Based On' },
          "Vijaykumar's post-results commentary was notable for its directness about competitive positioning. He expressed confidence that HCLTech would continue to outpace the market over the medium term, a statement that carries more weight when it is accompanied by a record Q1 booking figure and a Rs 3,500 crore infrastructure commitment than it would as a standalone aspiration. The basis for that confidence is visible in the Q1 data: a services business that is growing revenue at 14 per cent annually, an AI segment growing at 62 per cent annually, a booking pipeline at record levels, and now an infrastructure investment that positions the company to capture a share of the AI infrastructure market that services-only competitors cannot access.",
          "The competitive context in which this confidence is expressed is one where the broader Indian IT sector is navigating meaningful headwinds. Global enterprise technology spending has been restrained by macro uncertainty, the Iran-US conflict has added a geopolitical risk dimension to client decision-making in energy and financial services sectors, and the rapid pace of AI adoption is creating demand volatility as enterprises simultaneously accelerate AI budgets and scrutinise legacy IT maintenance spending. HCLTech's ability to deliver 20 per cent profit growth and record bookings in that environment is the empirical foundation for Vijaykumar's medium-term confidence, and the Rs 3,500 crore data centre investment is the structural bet that the next chapter of that growth will be built on owning more of the AI value chain than any Indian IT services company has owned before.",
          { type: 'heading', text: 'What This Means for Indian IT and the AI Infrastructure Race' },
          "HCLTech's full-stack AI announcement positions it in a competitive space that has previously been dominated by global hyperscalers and a small number of specialised data centre operators. AWS, Microsoft Azure, and Google Cloud have built the dominant AI infrastructure globally, and their Indian data centre investments, Amazon's $48 billion commitment announced in June 2026 being the most recent and largest, reflect the scale at which global cloud providers are thinking about India's AI infrastructure opportunity.",
          "HCLTech entering this space is not a claim to hyperscaler scale or capability. It is a claim to a specific and defensible market position: Indian-owned, Indian-operated AI infrastructure, integrated with Indian enterprise IT expertise, serving Indian enterprises and government agencies that have both the regulatory requirement and the strategic preference to keep their AI operations on domestic soil. The Rs 3,500 crore investment, scaled to 50 megawatts of capacity, is sized for that market rather than for competition with global cloud platforms whose Indian investments are an order of magnitude larger.",
          "For India's broader technology sector, HCLTech's Q1 FY27 results and the accompanying infrastructure announcement represent something worth tracking carefully. The country's largest IT services companies have historically been world-class at delivering services on top of technology infrastructure built elsewhere. HCLTech is now making a serious investment in owning a piece of the infrastructure itself, in the AI layer where the next decade of enterprise technology value creation will be concentrated. Whether that investment delivers the returns that justify its scale will become clear over the next three to five years. The Q1 FY27 numbers suggest the company that is making the bet has never been in stronger financial condition to absorb the risk and capture the opportunity.",
        ],
      },
      {
        id: 'business-side-dmart-q1-fy27-results',
        slug: 'dmart-q1-fy27-results-buy-sell-hold',
        title: 'DMart Drops 4 Per Cent After Q1 FY27 Results: What the Numbers Say and Whether You Should Buy, Sell, or Hold',
        description:
          "Avenue Supermarts posted its June quarter results on Saturday, July 12, reporting an 11.3 per cent rise in net profit and 14.8 per cent revenue growth. On Monday morning, the market responded by selling the stock down 4 per cent.",
        image: '/NSE.avif',
        body: [
          { type: 'heading', text: 'DMart Drops 4 Per Cent After Q1 FY27 Results: What the Numbers Say and Whether You Should Buy, Sell, or Hold' },
          "Avenue Supermarts, the company behind India's most profitable hypermarket chain DMart, opened trading on Monday July 13 at Rs 3,950 on the BSE, down from a Friday closing price of Rs 4,083.05. Within the first hour of trading the stock had slipped further to a day low of Rs 3,910, a decline of 4.23 per cent from the previous close. Broader market weakness contributed to the pressure, with the Sensex down over 0.8 per cent in early deals as fresh US-Iran military exchanges reignited West Asia tensions and pushed crude prices higher. But the DMart-specific selling was clearly distinct from the general market softness and driven by investors digesting what the Q1 FY27 numbers actually said once the headline profit growth figure was set aside.",
          "The headline numbers were not bad. Consolidated net profit rose 11.3 per cent year on year to Rs 860 crore. Revenue from operations grew 14.8 per cent to Rs 18,794.53 crore for the quarter ended June 2026. EBITDA came in at Rs 1,499 crore against Rs 1,299 crore in the same quarter last year. Operating margin held steady at 8 per cent compared with 7.9 per cent in the year-ago period. By the standards of most Indian consumer businesses, these are solid results. By the standards that DMart's valuation and competitive positioning have historically demanded, they surfaced two specific concerns that the market found difficult to look past.",
          { type: 'heading', text: 'The LFL Problem: From 10.8 Per Cent to 5.5 Per Cent in One Quarter' },
          "The first and more significant concern is the deceleration in like-for-like growth. Like-for-like or LFL growth measures revenue expansion at stores that have been operating for long enough to strip out the contribution of new store openings, giving you the clearest possible picture of whether existing stores are growing their business. In Q4 FY26, DMart's LFL growth stood at 10.8 per cent. In Q1 FY27, that number fell to 5.5 per cent. That is not a marginal decline. That is a halving of the rate at which established DMart stores are growing their revenues in a single quarter.",
          "The management's own commentary on the Q1 performance provided context that made the LFL deceleration both more understandable and more concerning simultaneously. Revenue growth for older stores in large metropolitan cities was flat. Not slowing, not moderating. Flat. The stores that are supposed to anchor DMart's business in its highest-footfall, highest-spending markets are not growing their revenues at all. Non-metro stores, by contrast, grew well. The geographic divergence in store performance is not a new story at DMart. It has been building over several quarters as quick commerce platforms have established dense delivery infrastructure in the same large metro neighbourhoods where DMart's biggest stores operate. What Q1 FY27 has done is quantify the impact of that divergence in terms stark enough that the investment community can no longer treat it as a manageable background concern.",
          { type: 'heading', text: 'The Quick Commerce Question That Will Not Go Away' },
          "The competitive threat from quick commerce is the defining strategic question for every brick-and-mortar grocery retailer in urban India, and DMart's Q1 performance has reignited it with renewed urgency. Platforms that can deliver groceries to metropolitan consumers within 10 to 15 minutes have fundamentally altered the value proposition of physical hypermarket shopping for at least a segment of the urban consumer base. The DMart model has historically competed on price, and it has done so with genuine structural advantage: its ownership of store properties rather than lease exposure, its extraordinarily tight operational cost discipline, and its supplier relationships built on reliable payment terms that allow it to extract better pricing than competitors give it a unit economics foundation that quick commerce platforms have not replicated.",
          "The question that Q1 FY27 raises is whether price advantage alone is sufficient to retain metro customers who have been conditioned to the convenience of near-instant home delivery, particularly for top-up grocery purchases and high-frequency staples categories. The flat revenue performance at older metro stores suggests that for a meaningful and growing portion of the urban consumer base, the answer is currently no.",
          "Motilal Oswal Financial Services acknowledged this dynamic directly in its post-results note. The brokerage described the growth deceleration in Q1 FY27 as a dampener that has reignited concerns about DMart losing market share to quick commerce in large metro cities. But Motilal Oswal also maintained its long-term conviction on the stock, arguing that DMart's value-focused model and superior store economics ensure its competitiveness and customer relevance over the long run, particularly in Tier II and beyond towns where quick commerce infrastructure remains limited and where DMart's physical store presence continues to represent a genuine consumer convenience advantage rather than a relative inconvenience.",
          { type: 'heading', text: 'The Store Addition Question: Three in a Quarter After Accelerated Q4' },
          "The second concern embedded in the Q1 FY27 results is the pace of store additions. DMart added only three new stores in the quarter, a significant moderation from the accelerated expansion that characterised Q4 FY26. Store additions are the primary mechanism through which DMart generates revenue growth beyond what LFL performance delivers, and with LFL growth slowing in metro markets, the rate of new store openings becomes a more critical variable in the overall growth equation. Three additions in a quarter is not a crisis, and management has consistently indicated that store addition pace can vary significantly quarter to quarter based on property availability, fit-out timelines, and the company's own assessment of market readiness. But against the backdrop of flat metro LFL growth, a slow quarter on new openings concentrates the growth disappointment in both dimensions simultaneously.",
          "Motilal Oswal's forward projections build in a 15 per cent compound annual growth rate in area additions through FY29, suggesting the brokerage expects the store expansion programme to accelerate back toward historical norms over the medium term. PL Capital takes a similar view on the store addition trajectory, projecting approximately 75 new stores in each of FY27 and FY28. The question of execution capacity at that rate, and of whether DMart can find enough suitable properties outside the metro markets where its growth is currently concentrated, will be central to whether those projections prove accurate.",
          { type: 'heading', text: 'What the Brokerages Are Saying: Buy, Hold, and a Negative Bias' },
          "The analyst community is split in a way that reflects the genuine uncertainty around DMart's near-term trajectory. Motilal Oswal has retained its Buy rating and revised its target price upward to Rs 4,800 from Rs 4,750, assigning a roughly 40 times September 2028 estimated EV to EBITDA multiple to arrive at that figure. The brokerage's forward estimates build in a compound annual growth rate of 18 per cent in consolidated revenue, 19 per cent in EBITDA, and 16 per cent in profit after tax over the FY26 to FY29 period, driven by the combination of new area additions and a recovery in LFL growth toward high single digits. The core of the Motilal Oswal bull case is that DMart's structural cost advantages are durable enough to sustain its competitive position in Tier II and Tier III markets even as metro performance remains challenged, and that the current valuation represents a reasonable entry point for investors with a multi-year horizon.",
          "PL Capital takes a more cautious view, maintaining a Hold rating with a price target of Rs 4,103 and an explicitly negative bias. The brokerage's concerns centre on four specific factors: the increasing competitive intensity from quick commerce platforms that is structurally unlikely to ease in metro markets, the sustained deterioration in store-level metrics particularly in metropolitan locations, limited scope for margin expansion given the overhead cost base the company is carrying, and the relatively rich valuation at 73.1 times FY28 estimated earnings that the stock commands even after the post-results decline. PL Capital projects EBITDA margins of 7.4 per cent for FY27 and 7.0 per cent for FY28, a slight compression from the 7.5 per cent delivered in FY26, and estimates an earnings per share compound annual growth rate of just 10.7 per cent over FY26 to FY28. That growth rate, in the brokerage's assessment, is not sufficient to justify the current premium that the market has historically attached to DMart's stock.",
          { type: 'heading', text: 'The Longer View: What DMart Is Actually Worth Watching For' },
          "DMart's Q1 FY27 results are a chapter in a story that has been developing for several quarters rather than a sudden reversal of a company that was performing flawlessly. The competitive pressure from quick commerce in metro markets is real, measurable, and unlikely to diminish as Blinkit, Zepto, and Swiggy Instamart continue to expand their dark store networks and deepen their penetration in the urban consumer categories where DMart historically had its strongest foothold.",
          "The investment thesis that remains intact is the one focused on India's non-metro markets. In Tier II and Tier III cities, the DMart value proposition, large format stores with everyday low prices and a reliable in-stock position across general merchandise and groceries, faces no meaningful quick commerce competition and serves a consumer base that is growing in spending power at a rate that drives consistently strong LFL performance. The management's own indication that non-metro stores grew well in Q1 FY27, even as metro performance was flat, is the clearest signal of where the company's organic growth story is currently alive and where it is under genuine structural pressure.",
          "The stock's trajectory from here depends substantially on whether the metro deterioration stabilises, whether the non-metro expansion generates enough incremental revenue to offset it, and whether DMart's store addition programme in FY27 and FY28 delivers the volume of new locations that both Motilal Oswal and PL Capital are projecting. The next two quarters will provide the data needed to distinguish between a company navigating a cyclical patch and one experiencing a structural erosion of its competitive position in its most important markets.",
          "At Rs 3,910 to Rs 3,950 intraday on July 13, the market is telling you that it is not yet sure which story this is. The Q1 FY27 numbers have not settled that question. They have sharpened it.",
        ],
      },
      {
        id: 'business-side-3',
        title: 'India Sees Hiring Surge as Global Tech Firms Scale AI and R&D Teams',
        description:
          'Strong demand for AI talent is driving global companies to accelerate hiring and research expansion in India.',
        image: '/surge.webp',
      },
      {
        id: 'business-side-4',
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

function EditorialStoryColumn({ story, topicPath, isRight = false }) {
  if (!story) {
    return null;
  }

  const storyPath = story.slug && topicPath ? `${topicPath}/${story.slug}` : topicPath;
  const media = (
    <img
      src={story.image}
      alt={story.title}
      onError={(event) => {
        event.currentTarget.alt = '';
        event.currentTarget.style.opacity = '0';
      }}
      className="h-[220px] w-full rounded-3xl object-cover sm:h-[260px] lg:h-[240px] xl:h-[260px]"
    />
  );

  const headline = (
    <h3 className="editorial-card-headline story-headline m-0 mt-5 font-semibold leading-tight text-slate-950">
      {story.title}
    </h3>
  );

  return (
    <article className={`min-w-0 ${isRight ? 'lg:pl-8' : 'lg:pr-8'}`}>
      {storyPath ? <Link to={storyPath}>{media}</Link> : media}
      {storyPath ? (
        <Link to={storyPath} className="text-slate-950 no-underline hover:underline underline-offset-4">
          {headline}
        </Link>
      ) : (
        headline
      )}
      {story.description && (
        <p className="mt-4 line-clamp-4 text-base leading-7 text-slate-700">
          {story.description}
        </p>
      )}
      {story.url ? (
        <a className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950" href={story.url} target="_blank" rel="noreferrer">
          Read Story
        </a>
      ) : storyPath ? (
        <Link className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950" to={storyPath}>
          Read Story
        </Link>
      ) : (
        <span className="news-source-link mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950">Read Story</span>
      )}
    </article>
  );
}

export default function LiveBusinessNewsSection({ initialTopic = 'business', showTopicLinks = false }) {
  const [activeTopic, setActiveTopic] = useState(liveBusinessContent[initialTopic] ? initialTopic : 'business');
  const activeContent = liveBusinessContent[activeTopic] || liveBusinessContent.business;
  const { featured, sideStories, streamStories } = activeContent;
  const activeTopicPath = businessTopics.find((topic) => topic.id === activeTopic)?.to;
  const featuredPath = featured.slug && activeTopicPath ? `${activeTopicPath}/${featured.slug}` : activeTopicPath;
  const useHomeBusinessLayout = activeTopic === 'business' && !showTopicLinks;
  const useTopicInlineStream = showTopicLinks && streamStories.length > 0;
  const homeEditorialStories = useHomeBusinessLayout
    ? [
        sideStories.find((story) => story.id === 'business-side-vguard-fy27'),
        sideStories.find((story) => story.id === 'business-side-2'),
      ].filter(Boolean)
    : [];
  const remainingSideStories = useHomeBusinessLayout
    ? sideStories.filter((story) => !homeEditorialStories.some((editorialStory) => editorialStory.id === story.id))
    : sideStories;

  return (
    <section className="border border-gray-100 bg-white px-5 py-7 text-slate-950 shadow-sm sm:px-8 lg:px-8">
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h2 className="m-0 text-2xl font-bold leading-tight tracking-tight text-slate-950 md:text-[28px]">
          Business news and Updates
        </h2>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 border-b border-gray-100 pb-3" role="tablist" aria-label="Business news topics">
        {businessTopics.map((topic) => {
          const isActive = activeTopic === topic.id;

          return showTopicLinks ? (
            <Link
              key={topic.id}
              to={topic.to}
              className={`border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] no-underline ${
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
              className={`border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] ${
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

      {useHomeBusinessLayout ? (
        <div className="mb-7">
          <div className="grid gap-8 border-b border-gray-200 pb-8 lg:grid-cols-2 lg:divide-x lg:divide-gray-200">
            {homeEditorialStories.map((story, index) => (
              <EditorialStoryColumn key={story.id} story={story} topicPath={activeTopicPath} isRight={index === 1} />
            ))}
          </div>

          {remainingSideStories.length > 0 && (
            <div className="grid gap-6 pt-7 md:grid-cols-2">
              {remainingSideStories.map((story) => (
                <BusinessStory key={story.id} story={story} compact topicPath={activeTopicPath} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="mb-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="space-y-8 border-gray-200 lg:border-r lg:pr-6">
            {remainingSideStories.map((story) => (
              <BusinessStory key={story.id} story={story} topicPath={activeTopicPath} />
            ))}
          </div>

          <div className="min-w-0">
            <article className={useTopicInlineStream ? 'border-b border-gray-100 pb-7' : ''}>
              <Link to={featuredPath || '/business-live/business'}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  onError={(event) => {
                    event.currentTarget.alt = '';
                    event.currentTarget.style.opacity = '0';
                  }}
                  className="mb-4 h-[240px] w-full rounded-2xl object-cover md:h-[300px]"
                />
              </Link>
              <Link to={featuredPath || '/business-live/business'} className="text-slate-950 no-underline hover:underline underline-offset-4">
                <h2 className="m-0 text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
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
              {featured.secondaryImage && (
                <Link to={featuredPath || '/business-live/business'} className="mt-8 block overflow-hidden rounded-3xl bg-slate-100">
                  <img
                    src={featured.secondaryImage}
                    alt={featured.title}
                    onError={(event) => {
                      event.currentTarget.alt = '';
                      event.currentTarget.style.opacity = '0';
                    }}
                    className="h-[240px] w-full object-cover transition duration-500 hover:scale-[1.03] md:h-[280px]"
                  />
                </Link>
              )}
            </article>

            {useTopicInlineStream && (
              <div className="mt-7 grid gap-x-8 gap-y-9 md:grid-cols-2">
                {streamStories.map((story, index) => (
                  <EditorialStoryColumn key={story.id} story={story} topicPath={activeTopicPath} isRight={index % 2 === 1} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {!useTopicInlineStream && streamStories.length > 0 && (
        <div className="grid gap-6 border-t border-gray-200 pt-7 md:grid-cols-2">
          {streamStories.map((story) => (
            <BusinessStory key={story.id} story={story} compact topicPath={activeTopicPath} />
          ))}
        </div>
      )}

   
    </section>
  );
}
