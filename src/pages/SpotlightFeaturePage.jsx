import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AISummaryBox from "../component/AISummaryBox";

const nikhilKamathImage = '/kammath.jpg';

const businessFeatureArticles = [
  {
    slug: 'nikhil-kamath-zerodha-journey',
    category: 'FINTECH',
    title: "From College Dropout to Fintech Pioneer: Nikhil Kamath's Zerodha Journey",
    excerpt:
      "Bootstrapped without external funding, Zerodha has grown into one of India's largest stockbroking platforms. Nikhil Kamath's journey reflects the power of disciplined execution and long-term thinking.",
    image: nikhilKamathImage,
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
    image: '/vah.jpg',
    body: [
      "How Bala Sarda Built an Indian Wellness Brand into a Global Direct-to-Consumer Success Story",
      "India has long been known as one of the world's largest producers of tea and spices. Yet for decades, much of the value created by these products was captured by international brands rather than Indian businesses. Vahdam India is changing that narrative. By combining premium Indian products with a digital-first, direct-to-consumer strategy, the company has emerged as one of India's fastest-growing global wellness brands.",
      "Founded by entrepreneur Bala Sarda, Vahdam India is now aiming to cross Rs 500 crore in annual revenue, driven by strong international demand for premium teas, herbal infusions, spices, and wellness products. Its growth reflects not only changing consumer preferences but also India's increasing ability to build globally recognized consumer brands.",
      "Bala Sarda launched Vahdam India with a simple but ambitious vision: create an Indian brand that sells directly to consumers worldwide instead of relying on traditional export channels.",
      "Historically, India's tea industry has supplied raw products to international companies, which package, market, and sell them under foreign labels. While India remained one of the largest producers, much of the value addition happened outside the country. Vahdam sought to change this model.",
      "The company sources premium teas directly from Indian plantations and delivers them to customers across the globe with minimal intermediaries. This approach allows the freshness of the products to be preserved while enabling better returns for growers and creating stronger value for consumers.",
      "Unlike many traditional consumer companies that expand through physical retail first, Vahdam adopted a digital-first strategy from the beginning. Its products are sold through its own website as well as leading global e-commerce platforms, allowing the company to reach customers in North America, Europe, Australia, the Middle East, and Asia without investing heavily in physical stores.",
      "Although premium tea remains its flagship category, Vahdam has significantly diversified its portfolio over the past few years. The company now offers herbal infusions, turmeric blends, Ayurvedic wellness products, superfoods, spices, and gift collections designed for international consumers seeking natural and health-focused alternatives.",
      "One of Vahdam India's biggest competitive advantages lies in its direct-to-consumer business model. Products move directly from Indian producers to international consumers, ensuring faster delivery, better quality control, and higher operational efficiency.",
      "Recognizing the growing importance of responsible business, Vahdam has integrated sustainability into its strategy through recyclable packaging, ethical sourcing practices, and initiatives aimed at improving the livelihoods of tea-growing communities.",
      "Vahdam's goal of achieving Rs 500 crore in annual revenue reflects both its confidence in international demand and the scalability of its business model. To reach this milestone, the company plans to strengthen its presence in existing international markets while expanding into new geographies with high demand for premium wellness products.",
      "As international demand for premium wellness products continues to rise, Vahdam is well positioned to benefit from long-term trends in health-conscious consumption, digital commerce, and sustainable living.",
    ],
  },
  {
    slug: 'habilelabs-10-years-global-technology-services',
    category: 'TECHNOLOGY SERVICES',
    title: 'HabileLabs Marks 10 Years of Growth as It Expands Global Technology Services',
    excerpt:
      'What began as a Jaipur startup has evolved into an international technology partner serving businesses worldwide. The company credits customer trust and innovation for its decade-long success.',
    image: '/habi.jpg',
    body: [
      "From a Jaipur Startup to a Global Digital Engineering Partner, HabileLabs Enters Its Next Decade with an AI-First Vision",
      "Completing a decade in business is a significant milestone for any technology company. In an industry where rapid innovation, changing customer expectations, and intense competition define success, surviving and continuing to grow for ten years reflects resilience, adaptability, and consistent execution.",
      "HabileLabs, the Jaipur-founded technology company specializing in digital engineering and enterprise transformation, has reached this landmark while expanding its presence across international markets.",
      "Over the past decade, HabileLabs has evolved from a regional technology startup into a global digital engineering partner serving clients across multiple industries. Through investments in cloud computing, artificial intelligence, enterprise software development, automation, and digital transformation, the company has established itself as a trusted technology provider.",
      "Starting operations in Jaipur, the company focused on building strong engineering capabilities rather than pursuing rapid expansion. During its early years, the emphasis was placed on understanding client requirements, delivering customized technology solutions, and building long-term relationships through consistent execution.",
      "Recognizing changes in technology consulting, HabileLabs broadened its capabilities beyond traditional application development. Today, its portfolio includes digital engineering, enterprise application development, cloud solutions, artificial intelligence, automation, data analytics, quality engineering, DevOps, and digital consulting.",
      "The global pandemic accelerated digital transformation across industries, increasing demand for partners capable of supporting cloud migration, remote collaboration, cybersecurity, automation, and AI-powered business solutions.",
      "Artificial intelligence has become one of the defining technologies of the current decade. HabileLabs has expanded its capabilities in intelligent automation, machine learning, predictive analytics, and AI-powered enterprise solutions to help businesses improve efficiency and unlock new growth opportunities.",
      "One of the defining characteristics of HabileLabs' growth has been its emphasis on customer collaboration. Instead of offering standardized technology solutions, the company works closely with clients to understand specific business challenges before designing customized digital strategies.",
      "Over the past ten years, HabileLabs has also focused on building a culture that encourages continuous learning, collaboration, and technical excellence. As technologies evolve rapidly, engineers are expected to regularly update their skills in cloud computing, AI, cybersecurity, software architecture, and emerging frameworks.",
      "As demand for digital engineering services has grown internationally, HabileLabs has expanded its reach beyond India. Global expansion has strengthened its ability to compete with larger consulting firms by offering flexible engineering teams, specialized expertise, and customer-focused delivery models.",
      "Its tenth anniversary marks not only a celebration of past accomplishments but also the beginning of a new chapter. With AI, cloud computing, and enterprise transformation shaping the future of business, HabileLabs enters its second decade positioned to support organizations seeking scalable, technology-driven growth.",
    ],
  },
  {
    slug: 'bigbasket-ceo-transition',
    category: 'QUICK COMMERCE',
    title: 'BigBasket Begins New Leadership Chapter With CEO Transition',
    excerpt:
      'Founder Hari Menon has stepped down as CEO as the company sharpens its focus on profitability and quick commerce. The leadership change reflects the next phase of growth under new management.',
    image: '/big.avif',
    body: [
      "Tata Digital's online grocery platform enters a new phase as new leadership takes charge amid India's fast-growing quick-commerce race.",
      "India's online grocery industry is undergoing one of its biggest transformations since the rise of e-commerce. Consumer expectations have shifted dramatically, with faster deliveries, wider product selection, and seamless digital experiences becoming the new standard.",
      "At the center of this evolution is BigBasket, one of India's largest online grocery platforms, which has entered a new leadership era following the transition of long-time CEO and co-founder Hari Menon.",
      "After leading the company for more than a decade, Hari Menon has stepped down as Chief Executive Officer, passing the responsibility to former Amazon executive Amit Nanda. Menon will continue contributing as a member of the company's board alongside co-founder Vipul Parekh.",
      "Founded in 2011 by Hari Menon and his co-founders, BigBasket was established with a simple mission: make grocery shopping easier for Indian households. The company introduced a platform that allowed customers to order fresh produce, packaged foods, household essentials, dairy products, and personal care items directly from their homes.",
      "Building consumer trust was not easy. Unlike electronics or fashion, groceries require consistent quality, freshness, and reliable delivery. BigBasket invested heavily in supply chain infrastructure, warehousing, inventory management, and delivery logistics to ensure customers received fresh products on time.",
      "A major turning point came when Tata Digital acquired a majority stake in the company. The acquisition strengthened BigBasket's financial position while integrating it into one of India's most respected business groups.",
      "With Amit Nanda taking over as CEO, the company enters a new chapter focused on operational efficiency, digital innovation, and faster execution. His experience scaling technology-driven businesses is increasingly important in today's competitive commerce landscape.",
      "India's retail landscape has changed dramatically with the rapid growth of quick commerce. Consumers increasingly expect groceries and daily essentials to be delivered within minutes rather than hours or days.",
      "BigBasket has responded by strengthening its quick-commerce offerings while continuing to leverage its established supply chain infrastructure. The company is expanding dark stores, improving inventory management systems, and investing in technology that enables more efficient order processing and faster deliveries.",
      "Competition within India's grocery and quick-commerce sectors continues to accelerate. Rather than competing solely on price, BigBasket has focused on maintaining product quality, reliable delivery, and a broad product assortment.",
      "Future investments are expected to focus on AI-powered recommendations, smarter warehouse management, improved route optimization, and greater integration across Tata Digital's broader ecosystem.",
      "The transition from Hari Menon's leadership to Amit Nanda's marks a strategic shift designed to prepare the company for its next decade of growth. With a strong foundation and the backing of Tata Digital, BigBasket now enters a new era focused on innovation, scalability, and sustainable growth.",
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
      slug: 'deepinder-goyal-temple-brain-wearables',
      category: 'FOUNDER MOVES',
      title: 'Deepinder Goyal Bets $54M on Brain Wearables With Temple',
      excerpt:
        "Weeks after stepping down as CEO of Zomato/Eternal, Goyal raised $54M in a friends-and-family round for Temple, a wearable startup targeting elite athlete brain health and performance monitoring, at a $190M post-money valuation. Backers include Peak XV Partners, Steadview Capital, Vijay Shekhar Sharma, Kunal Shah, and Zerodha's Kamath brothers. Over 30 Temple employees invested their own capital at the same valuation as external investors.",
      image: '/d1.webp',
      body: [
        "Weeks after stepping down as CEO of Zomato/Eternal, Deepinder Goyal has moved into a new founder chapter with Temple, a wearable startup focused on elite athlete brain health and performance monitoring.",
        "The company raised $54 million in a friends-and-family round at a $190 million post-money valuation. Backers include Peak XV Partners, Steadview Capital, Vijay Shekhar Sharma, Kunal Shah, and Zerodha's Kamath brothers.",
        "The round also stands out because more than 30 Temple employees invested their own capital at the same valuation as external investors, signalling internal conviction around the company's long-term opportunity.",
        "For India's founder ecosystem, the move reflects a broader pattern of proven operators building in specialised, high-conviction categories after scaling consumer internet companies.",
      ],
    },
    stories: [
      {
        slug: 'mukesh-bansal-nurix-ai',
        category: 'ENTERPRISE AI',
        title: 'Mukesh Bansal Launches Nurix AI After Myntra and Cure.fit',
        excerpt:
          "One of India's rare double-unicorn builders, Bansal, co-founder of Myntra and Cure.fit, has launched Nurix AI to build intelligent agents for enterprise workflow automation. The startup raised $27M in its maiden round co-led by Accel. Nurix targets large organisations looking to automate complex operational workflows using AI, with Bansal widely regarded as one of the most credible enterprise AI founders in India given his track record scaling two consumer category leaders.",
        image: '/d2.avif',
        body: [
          "Mukesh Bansal, co-founder of Myntra and Cure.fit, has launched Nurix AI to build intelligent agents for enterprise workflow automation.",
          "The startup raised $27 million in its maiden round co-led by Accel, giving it early institutional backing as enterprise AI adoption accelerates across India and global markets.",
          "Nurix is targeting large organisations that want to automate complex operational workflows using AI, a category where founder credibility, product execution, and customer trust matter deeply.",
          "Bansal's track record across two consumer category leaders makes this new venture one of the most closely watched second acts in India's technology ecosystem.",
        ],
      },
      {
        slug: 'gautam-adani-vande-bharatam-hidden-innovators',
        category: 'GRASSROOTS INNOVATION',
        title: "Gautam Adani Launches Vande Bharatam to Find India's Hidden Innovators",
        excerpt:
          "On his 64th birthday, June 24, Adani launched a nationwide search program to discover grassroots entrepreneurs across all 36 states and 800+ districts, addressing the fact that over 80% of India's startup founders come from just five cities. Open to all ages and backgrounds, from metro centers to rural communities, the program covers tech, manufacturing, sustainability, agriculture, and traditional crafts. 75 finalists will receive incubation, mentorship, and investment access in Ahmedabad, with a Grand Finale around Independence Day.",
        image: '/D3.jpg',
        body: [
          "On his 64th birthday, June 24, Gautam Adani launched Vande Bharatam, a nationwide search program designed to discover grassroots entrepreneurs across all 36 states and more than 800 districts.",
          "The program responds to a familiar imbalance in India's startup ecosystem: more than 80% of founders come from just five cities, even as innovation is emerging across smaller towns, rural communities, and traditional industries.",
          "Open to participants across ages and backgrounds, Vande Bharatam covers technology, manufacturing, sustainability, agriculture, and traditional crafts.",
          "Seventy-five finalists will receive incubation, mentorship, and investment access in Ahmedabad, with a Grand Finale planned around Independence Day.",
        ],
      },
      {
        slug: 'first-gen-internet-founders-ai-second-acts',
        category: 'SECOND ACTS',
        title: "India's First-Gen Internet Founders Converge on AI for Their Second Acts",
        excerpt:
          "A defining pattern of 2026: Deepinder Goyal, Mukesh Bansal, Aman Gupta, Mukund Jha, and Binny Bansal all launched new ventures within the same 18-month window, nearly all converging on AI. Analysts see this as a signal that India's most credible operators believe AI is the decade's defining value-creation opportunity, shifting from distribution and logistics to intelligent automation and consumer AI.",
        image: '/D5.webp',
        body: [
          "A defining pattern of 2026 is the return of India's first-generation internet founders with new companies, many of them built around artificial intelligence.",
          "Deepinder Goyal, Mukesh Bansal, Aman Gupta, Mukund Jha, and Binny Bansal have all launched new ventures within the same 18-month window, creating a visible wave of second acts from proven operators.",
          "The convergence around AI suggests that experienced founders see the next decade of value creation moving beyond distribution and logistics into intelligent automation, consumer AI, and enterprise workflows.",
          "For investors and operators, this wave matters because it combines founder-market credibility with a technology shift that is still early enough to shape new category leaders.",
        ],
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
      slug: 'emergent-100m-arr-plain-language-app-building',
      category: 'SPACETECH',
      title: "India's Space Unicorn Has Landed: Is Skyroot's $1.1 Billion Milestone the Coming-of-Age Moment Indian Deep Tech Has Been Waiting For?",
      excerpt:
        "Eight years after two ISRO engineers decided to build a private rocket company in Hyderabad, Skyroot Aerospace has become India's first spacetech unicorn, raising $60 million at a $1.1 billion valuation and standing weeks away from the country's first privately built orbital launch.",
      image: '/starr.webp',
      body: [
        "When Skyroot Aerospace raised $60 million in its Series C on May 7, 2026, crossing the $1.1 billion valuation threshold, totalling $160 million raised overall, and building a rocket that is 95 per cent indigenous, it became India's first spacetech unicorn. But the financial headline told only part of the story.",
        "There is a particular kind of validation that numbers alone cannot convey. The deeper story is about what it took to get here: eight years of building rockets in a country where private companies had never done it before, from a Hyderabad base where two engineers left India's most prestigious space agency to prove that the next era of the country's space ambitions did not have to begin and end with the government.",
        "Pawan Kumar Chandana and Naga Bharath Daka founded Skyroot in 2018. Both had spent years at the Indian Space Research Organisation, Chandana as a propulsion engineer and Daka in systems engineering, and both had watched SpaceX transform the global launch industry with a formula that ISRO, constrained by its mandate and structure, could not replicate: private capital, iterative engineering, commercial pricing, and speed.",
        "The early years were difficult in the way genuinely novel ventures are difficult. India's space sector had been state-controlled since its inception. The regulatory framework for private participation barely existed. Investors familiar with SaaS, e-commerce, and fintech had little framework for evaluating a company whose product took years to build and whose unit of success was measured in orbital trajectories rather than monthly active users.",
        "Skyroot's technical strategy was deliberately counter-intuitive. While the global imagination of space launch gravitates toward the largest and most powerful vehicles, Chandana chose the opposite direction. Skyroot would build small rockets, not as a stepping stone to larger ones, but as the product itself.",
        "The Vikram series, named after Dr Vikram Sarabhai, is the product of that strategy. Built from carbon fibre that is five times lighter than steel, with an upper stage manufactured using 3D printing, Vikram-1 is a four-stage small-lift orbital launch vehicle that is 95 per cent indigenous.",
        "Its propulsion system, the Dhawan series of cryogenic engines, has undergone multiple successful static fire tests, including a 200-second endurance test of the Dhawan-II engine and a 145-second Dhawan-III test completed in February 2026.",
        "In November 2022, Skyroot became the first private Indian company to conduct a rocket launch at all, sending Vikram-S on a suborbital mission from ISRO's Satish Dhawan Space Centre in Sriharikota to an altitude of 89.5 kilometres.",
        "Now, the orbital mission is imminent. Vikram-1 was flagged off to the Sriharikota spaceport in April 2026. Flight qualification tests have been completed. Integration and launch campaign activities are underway. The maiden orbital flight, India's first privately built orbital launch attempt, is targeted for mid-2026.",
        "The Series C round is significant not just for its size, though $60 million in a single tranche is the largest funding event in Indian spacetech history, but for who wrote the cheques. Sherpalo Ventures, led by Ram Sriram, co-led the round alongside Singapore's sovereign wealth fund GIC. BlackRock participated through structured debt. Greenko Group, Arkam Ventures, Playbook Partners, and Shanghvi Family Office also contributed.",
        "That composition matters. Sovereign wealth funds and global asset managers do not back moonshots. They back infrastructure businesses. Their presence signals that investors have re-categorised Skyroot from experimental space startup to long-term commercial infrastructure play.",
        "Skyroot's unicorn status is the product of three forces converging simultaneously: regulatory reform through IN-SPACe, ecosystem density across nearly 400 Indian space-tech startups, and market timing as the global small satellite economy grows rapidly.",
        "The infrastructure being built around Skyroot amplifies those forces. Prime Minister Modi inaugurated the Infinity Campus rocket manufacturing facility in Hyderabad in November 2025, Telangana signed an MoU to establish a 300-acre rocket production complex near Tirupati, and former ISRO chairman S. Somanath joined as Honorary Chief Technical Advisor.",
        "The analogy being drawn in India's startup community is instructive: what Flipkart did for e-commerce, what Zerodha did for fintech, Skyroot could do for space. Each did not just build a business in a nascent sector; they legitimised the sector itself.",
        "When Vikram-1 lifts off from Sriharikota, it will carry more than its commercial payload. It will carry eight years of proof-of-concept moments, funding rounds, engine tests, regulatory negotiations, engineering failures and recoveries, and the collective ambition of an Indian deep-tech ecosystem waiting for exactly this kind of coming-of-age moment.",
        "Whether the launch succeeds immediately or faces the iterative setbacks intrinsic to rocket science, the milestone that matters most has already been achieved. India's private space industry is no longer a promise. It is a company worth over a billion dollars, with a rocket on the launchpad and the world watching.",
      ],
    },
    stories: [
      {
        slug: 'kalam-labs-near-space-drone-edge',
        category: 'LEADERSHIP',
        title: "The Women at the Top: Six Leaders Steering India's Most Powerful Companies",
        excerpt:
          "Priya Nair at HUL. Vibha Padalkar at HDFC Life. Vishakha Mulye at Aditya Birla Capital. Prabha Narasimhan at Colgate. Praveena Rai at MCX. A Manimekhalai at Union Bank. These are not diversity appointments. They are the architects of some of India's most consequential business stories.",
        image: '/women.png',
        body: [
          "According to a 2026 Prime Database analysis, the number of listed Indian companies led by women has grown more than 50 per cent in five years, from 79 in March 2021 to 119 today. Yet those 119 women represent just 5.21 per cent of India's 2,285 listed companies, meaning that for every woman who has reached the corner office of a publicly traded Indian firm, nineteen men hold that same position.",
          "The numbers are simultaneously encouraging and sobering. The glass ceiling has not been shattered so much as developed visible cracks, and the women creating those cracks deserve to be understood not as symbols or statistics but as strategists, operators, and institution-builders.",
          "Priya Nair took charge as MD and CEO of Hindustan Unilever in 2025, becoming the first woman to hold the role in the company's 92-year history in India. HUL had seen revenue and profit growth slow to single digits over two consecutive years, giving Nair a mandate not of maintenance but of reinvention.",
          "Her strategic direction centres on building a company that is more modern, more desirable, and more youthful. That requires rethinking brand positioning, accelerating digital integration across HUL's sprawling portfolio, and reconnecting with younger consumers whose spending patterns and media habits look very different from prior generations.",
          "Vibha Padalkar's re-appointment as MD and CEO of HDFC Life for a further five years from September 2026 speaks as loudly as any award. Since taking charge in 2018, she has navigated the insurance sector through volatility while keeping the company among India's leading private life insurers.",
          "Padalkar's leadership has been defined by expanding insurance access, accelerating digital distribution and claims infrastructure, and building customer-centric solutions rather than relying only on product-led sales strategies.",
          "Vishakha Mulye became MD and CEO of Aditya Birla Capital in 2022, taking charge of one of India's most diversified financial services platforms. Her mandate spans insurance, asset management, housing finance, NBFC lending, health insurance, and digital financial services.",
          "At Aditya Birla Capital, Mulye has focused on integrating multiple financial businesses into a more cohesive consumer-facing platform while pushing the group's digital financial services arm into new consumer segments.",
          "Prabha Narasimhan's appointment as MD and CEO of Colgate-Palmolive India in 2022 made her the first person to lead the company from outside the organisation in twelve years. Her focus has centred on premiumisation, science-backed differentiation, and expanding higher-value oral care and personal care products.",
          "Praveena Rai's career has moved through some of India's most consequential financial infrastructure institutions. After helping shape digital payments at NPCI, she moved to MCX as MD and CEO in 2024, bringing deep experience in digital infrastructure to India's dominant commodity derivatives exchange.",
          "A Manimekhalai's leadership of Union Bank of India has coincided with a period of structural change in Indian banking. Appointed MD and CEO in 2022, she took charge after the merger of Andhra Bank and Corporation Bank into Union Bank, a complex integration involving balance sheets, people, technology systems, and customers across thousands of branches.",
          "The six women profiled here share careers built across decades, credibility earned through measurable outcomes, and resilience developed inside institutions where the Prime Database data makes the structural reality plain. Women hold just 6 per cent of company chairperson positions, and the pipeline of professional women ascending to the top without promoter-family inheritance remains thin.",
          "There is one encouraging signal in the pipeline data: women independent directors are, on average, seven years younger than their male counterparts. Whether that translates into stronger CEO representation will depend on the choices companies, boards, and investors make about who gets access to the roles that build future leadership track records.",
          "The women in this story reached the top of some of India's most significant companies through talent, rigour, and outcomes. The task for Indian corporate life is to make that currency the only one that counts.",
        ],
      },
      {
        slug: 'biocompute-bacterial-dna-silicon-valley',
        category: 'BIOCOMPUTE',
        title: 'The Engineer Who Started at Ten: How Venkatesh Sai Built India\'s Most Consequential Drone Technology Company',
        excerpt:
          "Venkatesh Sai did not arrive at drone technology through a career plan. He arrived through a ten-year-old's fascination with model aircraft, a passion that evolved into one of India's most technically significant innovations in defence and aerospace.",
        image: '/vik.jpg',
        body: [
          "There is a particular kind of engineer whose work is inseparable from their biography. The technology they build is not the product of a market opportunity they identified or a gap a consultant told them about. It is the accumulated output of a life spent thinking about one problem from every possible angle.",
          "Venkatesh Sai, Founder and Technical Director of Zuppa Geo Navigation Technologies Pvt. Ltd., is that kind of engineer. His entry point was aero modelling at age ten. His current work involves international patents, defence contracts, drone swarm architecture, and a product that is doing something no other Indian company has achieved: competing directly with DJI on price, features, and performance while serving the Indian Army with sovereign technology.",
          "That arc, from a child assembling model aircraft to a founder holding an international patent for distributed parallel computing architecture, is not a straight line. It is the result of more than a decade of designing real-time embedded firmware and hardware for the automotive and aerospace sectors before applying that expertise to drone autonomy.",
          "The insight at the centre of Venkatesh Sai's career is deceptively simple and technically profound: the autopilot is the human substitute in any unmanned aerial system. Everything else, the frame, the motors, the sensors, the payload, is hardware that exists in abundance. The autopilot is the intelligence.",
          "The technical core of everything Zuppa builds is a system Venkatesh Sai invented and protected through an international patent: the System of Disseminated Parallel Control Computing in Real Time, known as DPCC.",
          "Conventional autopilot architectures rely on centralized processing, where a single computational unit manages all control decisions. DPCC takes a fundamentally different approach, distributing control computing across multiple parallel processors that operate in real time, sharing computational load and providing redundancy at the architecture level.",
          "The result is a control system that is faster in its responses, more resilient to component failure, more resistant to interference, and more capable of handling navigation, stabilisation, mission management, and communication at the same time.",
          "DPCC is the foundation on which every Zuppa product is built. Its most visible application is NavGati, India's first fully atmanirbhar drone autopilot, with intellectual property, hardware architecture, firmware, and manufacturing controlled in India.",
          "For India's drone operators, particularly in the armed forces, that distinction is operationally important. Control systems used in sensitive environments must not depend on components, software licences, or data pathways controlled by foreign governments or corporations.",
          "Zuppa's response to India's DJI dependency is the Ajeet Mini, positioned as a domestic alternative that can compete on pricing, features, and operational performance while eliminating the supply-chain and security risks associated with Chinese-origin drone hardware.",
          "The defence impact has been concrete. Zuppa is described as the only Indian company currently addressing the Rs 1,000 crore annual COTS drone supply market, the segment that covers commercial off-the-shelf drone procurement for military end-users.",
          "Venkatesh Sai's technical range spans more than 30 programming languages, from embedded chip-level coding used in real-time microcontroller firmware to web application frameworks. That range matters because drone autopilot systems require competence across firmware, communication protocols, mission planning, operator interfaces, and application layers.",
          "He leads cross-functional teams of more than 50 engineers across printed circuit board design, firmware development, software engineering, and system integration. The work requires precise coordination of hardware and software development streams that cannot proceed independently.",
          "Engineers mentored at Zuppa have gone on to global corporations including AMI, Visteon, SAP, and Cognizant, evidence of the technical culture Venkatesh Sai has built inside the company.",
          "Zuppa is now developing plug-and-play modules for heavy-lift logistics drones, drone swarm coordination systems, and loitering munitions, each requiring autonomous control capabilities beyond standard observation or delivery drones.",
          "India's drone industry is at an inflection point. Policy support, defence procurement preferences for indigenous systems, and urgent operational demand for trustworthy autonomous platforms have created conditions in which a company with Zuppa's credentials can grow into a globally significant player.",
          "The foundation for that growth is an international patent, a product validated against the most dominant foreign competitor in the sector, a record of defence deployment, and a founder who began thinking about how aircraft stay in the air when he was ten years old and has not stopped since.",
        ],
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

const shareActions = ['f', 'X', 'in', 'wa', 'save'];

const sidebarRadarStories = businessFeatureArticles.slice(1, 4);

const newTimesLists = [
  {
    title: "India's Most Watched Founder Journeys",
    category: 'Founder Lists',
    image: '/leader.jpg',
  },
  {
    title: 'Breakout Consumer Brands Scaling Globally',
    category: 'Brand Lists',
    image: '/marketing.jpg',
  },
  {
    title: 'Companies Rewriting the Startup Playbook',
    category: 'Business Lists',
    image: '/billio.webp',
  },
];

function getPageArticles(page) {
  if (!page) return [];

  return [page.lead, ...(page.stories || [])].filter((article) => article?.slug);
}

function SpotlightImage({ src, alt, className = '', category }) {
  if (!src) {
    return (
      <div
        className={`flex min-h-[260px] w-full items-end bg-gradient-to-br from-slate-950 via-slate-800 to-slate-500 p-6 text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
          {category || 'NT Spotlight'}
        </span>
      </div>
    );
  }

  return (
    <img
      className={`w-full object-cover ${className}`}
      src={src}
      alt={alt}
    />
  );
}

function SocialActions({ compact = false }) {
  return (
    <div className="flex max-w-full flex-wrap items-center justify-center gap-2 sm:justify-start">
      {shareActions.map((action) => (
        <button
          key={action}
          type="button"
          aria-label={`Share on ${action}`}
          className={`${compact ? 'h-9 w-9 text-[10px]' : 'h-10 w-10 text-[11px]'} inline-flex shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white font-bold uppercase text-slate-950 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white`}
        >
          {action}
        </button>
      ))}
    </div>
  );
}

function NextArticleCard({ article, basePath }) {
  if (!article) return null;

  return (
    <Link
      to={`${basePath}/${article.slug}`}
      className="block w-full max-w-full border border-slate-200 bg-white p-4 text-left no-underline shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:border-slate-950"
    >
      <div className="flex min-w-0 items-start gap-3">
        <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-950 text-sm font-bold text-slate-950">
          &rarr;
        </span>
        <div className="min-w-0">
          <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-700">
            Next Article
          </span>
          <h3 className="mt-1 line-clamp-2 text-[17px] font-bold leading-snug text-slate-950">
            {article.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

function SidebarStoryCard({ story, rank }) {
  return (
    <Link
      to={story.slug ? `/spotlight/business-features/${story.slug}` : '#'}
      className="group grid min-w-0 grid-cols-[84px_minmax(0,1fr)] gap-3 border-b border-slate-100 pb-4 text-slate-950 no-underline last:border-b-0 last:pb-0"
    >
      <div className="relative h-24 overflow-hidden bg-slate-100">
        <SpotlightImage
          src={story.image}
          alt={story.title}
          category={story.category}
          className="h-full transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-2 top-2 bg-slate-950 px-2 py-1 text-[10px] font-bold text-white">
          #{rank}
        </span>
      </div>
      <div className="min-w-0">
        <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
          {story.category}
        </span>
        <h4 className="mt-1 line-clamp-3 text-base font-bold leading-tight text-slate-950 group-hover:underline">
          {story.title}
        </h4>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
          New Times Desk
        </p>
      </div>
    </Link>
  );
}

function SpotlightArticleSidebar() {
  return (
    <aside className="min-w-0 border-slate-200 lg:border-l lg:pl-8">
      <div className="space-y-8 lg:sticky lg:top-8">
        <section>
          <span className="mb-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Advertisement
          </span>
          <div className="flex h-64 items-center justify-center bg-slate-100 ring-1 ring-slate-200">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Ad Space
            </span>
          </div>
        </section>

        <section className="border border-slate-200 bg-white p-5">
          <h3 className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-slate-950">
            On Everyone's Radar
          </h3>
          <div className="space-y-4">
            {sidebarRadarStories.map((story, index) => (
              <SidebarStoryCard key={story.title} story={story} rank={index + 1} />
            ))}
          </div>
        </section>

        <section className="border border-slate-200 bg-slate-50 p-5">
          <h3 className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-slate-950">
            New Times Lists
          </h3>
          <div className="space-y-4">
            {newTimesLists.map((item, index) => (
              <div key={item.title} className="grid min-w-0 grid-cols-[76px_minmax(0,1fr)] gap-3 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                <div className="relative h-20 overflow-hidden bg-white">
                  <SpotlightImage src={item.image} alt={item.title} category={item.category} className="h-full" />
                  <span className="absolute left-2 top-2 bg-white px-2 py-1 text-[10px] font-bold text-slate-950 ring-1 ring-slate-200">
                    #{index + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-red-700">
                    {item.category}
                  </span>
                  <h4 className="mt-1 text-base font-bold leading-tight text-slate-950">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}

function SpotlightArticleDetail({ article, nextArticle, page, basePath }) {
  const publishedDate = 'June 24, 2026';

  return (
    <main className="min-h-[80vh] w-full overflow-x-hidden bg-white px-4 py-6 text-slate-950 sm:px-6 lg:px-8 lg:py-10">
      <article className="mx-auto w-full max-w-[1380px] min-w-0">
        <Link
          to={basePath}
          className="mb-6 inline-flex text-[12px] font-bold uppercase tracking-[0.16em] text-slate-600 no-underline hover:text-red-700"
        >
          &larr; {page.kicker}
        </Link>

        <header className="grid min-w-0 gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.85fr)] lg:items-center xl:gap-12">
          <div className="min-w-0 text-center sm:text-left">
            <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-700">
              {article.category}
            </span>
            <h1 className="mx-auto max-w-[700px] break-words text-[34px] font-extrabold leading-[1.15] text-black sm:mx-0 sm:text-[42px] lg:text-[50px] xl:text-[56px]">
              {article.title}
            </h1>
            <p className="mx-auto mt-5 max-w-[700px] text-[19px] leading-8 text-slate-700 sm:mx-0 md:text-[22px]">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 sm:justify-start">
              <span>By New Times Desk</span>
              <span className="hidden text-slate-300 sm:inline">/</span>
              <span>Last updated {publishedDate}</span>
              <span className="hidden text-slate-300 sm:inline">/</span>
              <span>{Math.max(4, Math.ceil(article.body.join(' ').split(' ').length / 220))} min read</span>
            </div>

            <div className="mt-6">
              <SocialActions />
            </div>

            <div className="mt-6 flex max-w-full flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                to="/partner/get-featured"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white no-underline transition hover:bg-red-700"
              >
                Join Us
              </Link>
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-red-700"
              >
                Prefer us on Google
              </button>
            </div>
          </div>

          <div className="relative min-w-0">
            <SpotlightImage
              src={article.image}
              alt={article.title}
              category={article.category}
              className={`h-[300px] sm:h-[420px] lg:h-[520px] ${article.slug === 'nikhil-kamath-zerodha-journey' ? 'object-top' : ''}`}
            />
            <div className="mt-5 lg:absolute lg:-bottom-8 lg:right-6 lg:w-[360px]">
              <NextArticleCard article={nextArticle} basePath={basePath} />
            </div>
          </div>
        </header>

        <div className="grid min-w-0 gap-10 pt-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(320px,0.32fr)] lg:gap-12">
          <section className="min-w-0">
            <AISummaryBox article={article} />

            <div className="space-y-8 break-words text-[20px] leading-[1.8] text-slate-800 md:text-[23px] lg:text-[25px]">
              {article.body.map((paragraph) => (
                <p key={paragraph} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <section className="mt-12 border-t border-slate-200 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                First Published: {publishedDate}
              </p>
            </section>
          </section>

          <SpotlightArticleSidebar />
        </div>
      </article>
    </main>
  );
}

export default function SpotlightFeaturePage({ type }) {
  const { slug } = useParams();
  const page = spotlightPages[type] || spotlightPages['business-features'];
  const basePath = `/spotlight/${type}`;
  const pageArticles = getPageArticles(page);
  const article = pageArticles.find((item) => item.slug === slug);

  if (article) {
    const currentIndex = pageArticles.findIndex((item) => item.slug === article.slug);
    const nextArticle = pageArticles[(currentIndex + 1) % pageArticles.length];

    return <SpotlightArticleDetail article={article} nextArticle={nextArticle} page={page} basePath={basePath} />;
  }

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
      <section className="border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
        <div className="mb-6 h-1 w-full bg-slate-950" />

        <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
              NT Spotlight
            </span>
            <h1 className="m-0 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
              {page.kicker}
            </h1>
          </div>
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-green-600">
            {page.badge}
          </span>
        </div>

        <div className="mb-10 bg-slate-50 p-7 ring-1 ring-gray-200">
          <h2 className="m-0 max-w-4xl text-3xl font-extrabold leading-tight text-slate-950">
            {page.title}
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
            {page.intro}
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.3fr)_minmax(420px,0.9fr)]">
          <article className="group">
            <img
              className={`mb-5 h-[380px] w-full object-cover ${page.lead.slug === 'nikhil-kamath-zerodha-journey' ? 'object-top' : ''}`}
              src={page.lead.image}
              alt={page.lead.title}
            />
            <span className="mb-2 block text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
              {page.lead.category}
            </span>
            {page.lead.slug ? (
              <>
                <Link to={`${basePath}/${page.lead.slug}`} className="no-underline">
                  <h2 className="m-0 text-3xl font-bold leading-tight text-slate-950 underline-offset-4 group-hover:underline">
                    {page.lead.title}
                  </h2>
                </Link>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">{page.lead.excerpt}</p>
                <Link
                  to={`${basePath}/${page.lead.slug}`}
                  className="mt-5 inline-flex bg-slate-950 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white no-underline transition hover:bg-red-700"
                >
                  Read More
                </Link>
              </>
            ) : (
              <>
                <h2 className="m-0 text-3xl font-bold leading-tight text-slate-950">
                  {page.lead.title}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">{page.lead.excerpt}</p>
              </>
            )}
          </article>

          <div className="space-y-5 border-gray-200 xl:border-l xl:pl-6">
            {page.stories.map((story) => (
              <article key={story.title} className="group border-b border-gray-100 pb-5 last:border-b-0">
                {story.image && (
                  <Link to={story.slug ? `${basePath}/${story.slug}` : '#'} className="mb-4 block overflow-hidden bg-slate-100 no-underline">
                    <img
                      className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      src={story.image}
                      alt={story.title}
                    />
                  </Link>
                )}
                <span className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.12em] text-amber-700">
                  {story.category}
                </span>
                {story.slug ? (
                  <>
                    <Link to={`${basePath}/${story.slug}`} className="no-underline">
                      <h3 className="m-0 text-xl font-bold leading-tight text-slate-950 underline-offset-4 group-hover:underline xl:text-lg">{story.title}</h3>
                    </Link>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{story.excerpt}</p>
                    <Link
                      to={`${basePath}/${story.slug}`}
                      className="mt-4 inline-flex border border-slate-950 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-950 no-underline transition hover:bg-slate-950 hover:text-white"
                    >
                      Read More
                    </Link>
                  </>
                ) : (
                  <>
                    <h3 className="m-0 text-xl font-bold leading-tight text-slate-950 xl:text-lg">{story.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{story.excerpt}</p>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
