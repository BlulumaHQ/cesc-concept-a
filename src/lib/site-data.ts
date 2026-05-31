import eventSummit from "@/assets/event-summit.jpg";
import featuredEvent from "@/assets/featured-event.jpg";
import eventRomania from "@/assets/event-romania-day.jpg";
import eventSummerRetreat from "@/assets/event-summer-retreat.jpg";
import eventJulyJourney from "@/assets/event-july-journey.jpg";
import eventMexicoSummit from "@/assets/event-mexico-summit.jpg";
import eventAnnualGala from "@/assets/event-annual-gala-2025.jpg";
import eventLionsGateGala from "@/assets/event-lions-gate-gala.jpg";
// News articles
import newsBridge from "@/assets/news/news-bridge-china.jpg";
import newsDalian from "@/assets/news/news-dalian.jpg";
import newsLaos from "@/assets/news/news-laos-consul.jpg";
import newsSco from "@/assets/news/news-sco-trade.jpg";
import newsUk from "@/assets/news/news-uk-consulate.jpg";
import newsMorocco from "@/assets/news/news-morocco-consul.jpg";
import newsLosBeans from "@/assets/news/news-los-beans.jpg";
import newsFairbrothers from "@/assets/news/news-fairbrothers.jpg";
import newsZhangJian from "@/assets/news/news-zhang-jian.jpg";
import newsPmCarney from "@/assets/news/news-pm-carney.jpg";
import newsAssembly from "@/assets/news/news-10th-assembly.jpg";
import newsSecretariatIntro from "@/assets/news/news-secretariat-intro.jpg";
import newsCarneyMeet from "@/assets/news/news-carney-meet.jpg";
import newsCarneyPin from "@/assets/news/news-carney-pin.jpg";
import newsXinxin from "@/assets/news/news-xinxin.jpg";
import newsNewyork from "@/assets/news/news-newyork-mission.jpg";

// 10th Term Board of Directors
import lennyLi from "@/assets/board/lenny-li.jpg";
import davidTan from "@/assets/board/david-tan.png";
import timChen from "@/assets/board/tim-chen.jpg";
import frankLiu from "@/assets/board/frank-liu.jpg";
import jessieXiao from "@/assets/board/jessie-xiao.jpg";
import jennaLiu from "@/assets/board/jenna-liu.png";
import jiantianCui from "@/assets/board/jiantian-cui.jpg";
import bowenLiu from "@/assets/board/bowen-liu.jpg";
import tomYuanBoard from "@/assets/board/tom-yuan.jpg";
import lawrencePan from "@/assets/board/lawrence-pan.png";
import yafuGuo from "@/assets/board/yafu-guo.png";

// 10th Term Secretariat
import secTomYuan from "@/assets/secretariat/tom-yuan.jpg";
import secAlysaChen from "@/assets/secretariat/alysa-chen.jpg";
import secPatrickPan from "@/assets/secretariat/patrick-pan.jpg";
import secVeraLin from "@/assets/secretariat/vera-lin.jpg";
import secSylviaLin from "@/assets/secretariat/sylvia-lin.jpg";
import secAnastasiaLiu from "@/assets/secretariat/anastasia-liu.jpg";
import secLiliNiu from "@/assets/secretariat/lili-niu.jpg";

export type Leader = {
  name: string;
  chineseName?: string;
  title: string;
  group: "President" | "Vice President" | "Secretary General" | "Mentor";
  image: string;
  bio: string;
};

export const leaders: Leader[] = [
  {
    name: "Lenny Li",
    chineseName: "李国超",
    title: "President",
    group: "President",
    image: lennyLi,
    bio: "Elected as President of the 10th term of CESC, Lenny brings deep expertise in resource integration with experience spanning health & wellness, international trade, and global real estate. His leadership and extensive network will drive new growth opportunities and expand CESC's role in Canada–China business collaboration.",
  },
  {
    name: "David Tan",
    chineseName: "谈滢",
    title: "Vice President",
    group: "Vice President",
    image: davidTan,
    bio: "A leader in the health & wellness industry, David brings strong industry insight that will support CESC members operating in and entering this rapidly growing sector.",
  },
  {
    name: "Tim Chen",
    title: "Vice President",
    group: "Vice President",
    image: timChen,
    bio: "Focused on the digital entertainment industry, Tim brings fresh strategic thinking and new opportunities to open up emerging digital sectors for CESC members.",
  },
  {
    name: "Frank Liu",
    title: "Vice President",
    group: "Vice President",
    image: frankLiu,
    bio: "Deeply experienced in the North American automotive and energy storage industries, Frank contributes valuable knowledge to advance CESC's work in adjacent sectors.",
  },
  {
    name: "Jessie Xiao",
    chineseName: "肖嘉雯",
    title: "Vice President",
    group: "Vice President",
    image: jessieXiao,
    bio: "An investor active across international real estate, import/export, luxury resale, health & wellness, hospitality, and the wine industry, Jessie brings a uniquely diversified perspective to CESC.",
  },
  {
    name: "Jenna Liu",
    title: "Vice President",
    group: "Vice President",
    image: jennaLiu,
    bio: "Founder of a high-tech enterprise, investor, and ESG advocate focused on new energy, innovative technology, and financial investment. A long-time community contributor advancing CESC's work in emerging industries.",
  },
  {
    name: "Jiantian Cui",
    chineseName: "崔建天",
    title: "Vice President",
    group: "Vice President",
    image: jiantianCui,
    bio: "Specialist in family wealth succession, international trust planning, tax optimization, and dividend insurance. Advises entrepreneurs on holding structures and investment strategy, and supports families in shaping a new generation of impact-driven leaders.",
  },
  {
    name: "Bowen Liu",
    chineseName: "刘博文",
    title: "Vice President",
    group: "Vice President",
    image: bowenLiu,
    bio: "Focused on financial investment, Bowen helps CESC strengthen investment and financing channels for member enterprises through deep market insight and industry expertise.",
  },
  {
    name: "Tom Yuan",
    chineseName: "苑涛",
    title: "Secretary General",
    group: "Secretary General",
    image: tomYuanBoard,
    bio: "A leading resource integrator across the North American business circle, Tom serves as the 10th term Secretary General. His coordination and operational expertise underpin CESC's internal operations and external partnerships.",
  },
  {
    name: "Lawrence X. Pan",
    chineseName: "劳伦斯•潘小夏",
    title: "CESC Mentor",
    group: "Mentor",
    image: lawrencePan,
    bio: "Founding partner of China Investment Capital Fund. Former Chief China Representative, official spokesperson, and Managing Director Asia-Pacific for NASDAQ, and former President of NASDAQ China — leading 30+ Chinese IPOs including Baidu, Focus Media, and Home Inns, with combined IPO proceeds of US$5.3B and peak market cap above US$1T. Senior advisor to China's SASAC and ChiNext board, and a long-standing advisor at Tsinghua Science Park.",
  },
  {
    name: "Yafu Guo",
    chineseName: "郭亚夫",
    title: "CESC Mentor",
    group: "Mentor",
    image: yafuGuo,
    bio: "Wall Street investment veteran and founder of TJ Capital Management in New York with 30 years of experience as trader, market maker, and hedge fund manager. Author of two books on US securities markets and a long-time on-air commentator for Phoenix TV's financial programs.",
  },
];

export const secretariat: Leader[] = [
  {
    name: "Tom Yuan",
    chineseName: "苑涛",
    title: "Secretary General",
    group: "Secretary General",
    image: secTomYuan,
    bio: "Resource integrator across the North American business circle. As 10th term Secretary General, Tom leads CESC's internal operations and external coordination, ensuring members and partners are connected effectively.",
  },
  {
    name: "Alysa Chen",
    chineseName: "陳孟愈",
    title: "Deputy Secretary General",
    group: "Secretary General",
    image: secAlysaChen,
    bio: "General Manager of Canada United Investment and Regional Manager of Sheer Room luxury resale. Brings extensive experience in team management, sales strategy, and growth across luxury retail, finance, high-end services, and the wellness industry.",
  },
  {
    name: "Patrick Pan",
    chineseName: "潘翊雄",
    title: "Deputy Secretary General",
    group: "Secretary General",
    image: secPatrickPan,
    bio: "Marketing Director at Vancouver's renowned golf group JK World Group. Educated in the UK, US, and Canada, with deep expertise in marketing strategy, brand building, and public relations for premium sports and lifestyle businesses.",
  },
  {
    name: "Vera Lin",
    chineseName: "林芝安",
    title: "Secretariat Member",
    group: "Mentor",
    image: secVeraLin,
    bio: "Manager at Bayou Winery, leading label design and on-site operations. A product designer recognized at the Malaysia International Invention Design competition, blending aesthetics with wellness and energy healing.",
  },
  {
    name: "Sylvia Lin",
    chineseName: "林思韵",
    title: "Secretariat Member",
    group: "Mentor",
    image: secSylviaLin,
    bio: "CEO of LZL Industrial Development Ltd. with deep experience in engineering management, construction, earthworks, demolition, and international trade. Known for sharp market insight and strong execution across cross-border projects.",
  },
  {
    name: "Anastasia Liu",
    title: "Secretariat Member",
    group: "Mentor",
    image: secAnastasiaLiu,
    bio: "UBC undergraduate and UCL graduate, currently practicing law in Vancouver with focus on corporate, family, and real estate law. Combines legal expertise with media production and bilingual MC experience to connect community resources.",
  },
  {
    name: "Lili Niu",
    chineseName: "牛麗麗",
    title: "Secretariat Member",
    group: "Mentor",
    image: secLiliNiu,
    bio: "Financial planner with a decade of experience across wealth management, portfolio optimization, tax planning, and retirement strategy. Also a seasoned philanthropic organizer with deep experience in fundraising and social impact programs.",
  },
];

export const featuredEventData = {
  slug: "2026-vancouver-entrepreneurs-forum",
  category: "Featured Event · Recap",
  title: "2026 CESC Vancouver Entrepreneurs Forum",
  date: "April 5, 2026",
  location: "Richmond, BC",
  image: featuredEvent,
  shortDescription:
    "A landmark CESC forum bringing together government officials, industry leaders, and entrepreneurs to explore how Chinese enterprises can expand into the North American market — and to formalize a strategic partnership with the Canadian Chinese Entrepreneurs Federation.",
  longDescription:
    "On April 5, 2026, the 2026 CESC Vancouver Entrepreneurs Forum convened a high-level audience of government officials, business leaders, and entrepreneurs in Richmond, BC. The forum centered on the development trajectory of Chinese enterprises entering North America, with a keynote by Mr. Wang Xuewei — President of the Canadian Chinese Entrepreneurs Federation and CEO of the Indigenous International Trade Group of Canada (IITGC) — covering Canada's economic landscape, market-entry pathways, federal and Indigenous-priority procurement, and practical experience landing in Canada. A strategic cooperation agreement between CESC and the Canadian Chinese Entrepreneurs Federation was signed on stage, opening a new chapter of resource integration across enterprise services, project matching, policy interpretation, and international market expansion.",
  agenda: [
    { time: "Opening", item: "Welcome remarks from CESC President Lenny Li and partner organizations" },
    { time: "Keynote", item: "Wang Xuewei — Chinese enterprises expanding into the North American market" },
    { time: "Briefing", item: "Canadian government procurement & Indigenous-priority procurement pathways (IITGC)" },
    { time: "Signing", item: "CESC × Canadian Chinese Entrepreneurs Federation strategic cooperation agreement" },
    { time: "Reception", item: "Networking dinner and member roundtables in Richmond" },
  ],
  speakers: [
    "Wang Xuewei (王学玮) — President, Canadian Chinese Entrepreneurs Federation; CEO, IITGC",
    "Liang Yanmin (梁艳敏) — Commercial Counselor, Consulate General of China in Vancouver",
    "Malcolm Brodie (马保定) — Mayor of Richmond",
    "Wang Baijin (王白进) — Burnaby City Councillor",
    "Lenny Li (李国超) — President, CESC",
    "Song Xianghou (宋祥厚) — Founding President, CESC",
    "Jessie Xiao (肖嘉雯) — Executive President, CESC",
    "David Tan (谈滢) & Jiantian Cui (崔建天) — Vice Presidents, CESC",
  ],
};

export const pastEvents = [
  {
    slug: "2025-romania-national-day",
    title: "2025 Romania Food & Wine National Day Celebration",
    date: "November 5, 2025",
    location: "Vancouver, BC",
    image: eventRomania,
  },
  {
    slug: "2025-board-summer-retreat",
    title: "10th Term Board Summer Retreat",
    date: "September 18, 2025",
    location: "Greater Vancouver",
    image: eventSummerRetreat,
  },
  {
    slug: "2025-cesc-july-journey",
    title: "CESC July Journey — A Trip of Connection & Empowerment",
    date: "August 4, 2025",
    location: "China",
    image: eventJulyJourney,
  },
  {
    slug: "2025-mexico-investment-summit",
    title: "Mexico Trade & Investment Summit — Bridging North American Opportunities",
    date: "March 13, 2025",
    location: "Vancouver, BC",
    image: eventMexicoSummit,
  },
  {
    slug: "2025-cesc-annual-gala",
    title: "CESC 2025 Annual Gala",
    date: "February 4, 2025",
    location: "Vancouver, BC",
    image: eventAnnualGala,
  },
  {
    slug: "2024-lions-gate-charity-gala",
    title: "7th Lions Gate Hospital “Light Up Lions Gate” Charity Gala",
    date: "November 6, 2024",
    location: "North Vancouver, BC",
    image: eventLionsGateGala,
  },
];

// Backwards compatibility for any remaining imports
export const events = [
  { ...featuredEventData, description: featuredEventData.shortDescription, image: eventSummit },
  ...pastEvents.map((e) => ({ ...e, description: "" })),
];

export const articles = [
  {
    slug: "tri-region-ny-business-mission",
    title: "Tri-Region Alliance Launches New York Business Mission — New Opportunities in Energy Storage and AI",
    category: "International Collaboration",
    date: "May 7, 2026",
    image: newsNewyork,
    excerpt:
      "CESC joined partners from across three regions to launch a New York business mission, opening new collaboration channels in the energy storage and artificial intelligence sectors.",
    body: [
      "CESC took part in a high-level tri-region business mission to New York, joining forces with partner organizations to explore industrial cooperation in two of today's most strategic sectors — energy storage and artificial intelligence. The delegation met with American counterparts, investors, and technology operators to evaluate joint opportunities across the value chain.",
      "Discussions focused on building a practical pipeline of projects in next-generation battery technology, grid-scale storage, and AI-driven industrial applications. Participants explored how the combined networks of the three regions can support members in accessing the North American market with credible local partners, capital, and operational know-how.",
      "The mission marks a new phase of CESC's international cooperation strategy — moving from association-to-association exchanges to concrete, project-level collaboration that creates measurable value for member enterprises.",
    ],
  },
  {
    slug: "cesc-pin-to-pm-carney",
    title: "CESC Presents Association Pin to Prime Minister Carney — A Symbol of Cooperation",
    category: "Government & Business",
    date: "December 29, 2025",
    image: newsCarneyPin,
    excerpt:
      "President Lenny Li presented the CESC pin to the Right Honourable Prime Minister Mark Carney, marking a symbolic moment of partnership between the Association and the federal government.",
    body: [
      "On behalf of the Association, CESC President Lenny Li presented the CESC pin to the Right Honourable Prime Minister Mark Carney as a symbol of the long-standing partnership between Chinese Canadian entrepreneurs and the Government of Canada. The gesture recognized the federal government's openness to dialogue with the business community and reinforced CESC's role as a trusted convenor.",
      "The exchange underscored the Association's commitment to supporting policy dialogue, investment promotion, and entrepreneurship development in Canada, and to ensuring that the voice of Chinese Canadian enterprises is consistently represented at the highest levels of government.",
      "CESC will continue to act as a bridge between its members, federal and provincial decision-makers, and international partners — translating goodwill into concrete cooperation that benefits Canada's economy and its diverse business communities.",
    ],
  },
  {
    slug: "xinxin-enterprise-visit",
    title: "Enterprise Visit: Inside Xinxin — Three Generations of Aesthetic Craft in Vancouver",
    category: "Enterprise Visit",
    date: "November 23, 2025",
    image: newsXinxin,
    excerpt:
      "CESC members visited Xinxin Enterprise, a three-generation Chinese Canadian business in Vancouver, to learn how craftsmanship, family stewardship, and entrepreneurial spirit have shaped its journey.",
    body: [
      "A CESC delegation visited Xinxin Enterprise, a Chinese Canadian business whose story spans three generations of operation in Vancouver. Hosted by the company's leadership, members toured the working environment and heard first-hand how the family has built a recognizable brand around aesthetics, craftsmanship, and disciplined long-term thinking.",
      "The visit covered product development, market positioning, talent stewardship, and the lessons of running a multi-generation enterprise in Canada. Members also discussed practical ways for CESC companies to collaborate through joint procurement, channel partnerships, and shared brand-building initiatives.",
      "The session is part of CESC's ongoing enterprise visit program — taking members inside successful Chinese Canadian businesses to surface real operating insight and to strengthen the fabric of the Association's business network.",
    ],
  },
  {
    slug: "cesc-attends-pm-carney-vancouver-meet",
    title: "CESC Attends Prime Minister Carney's Vancouver Meet-and-Greet",
    category: "Government & Business",
    date: "August 5, 2025",
    image: newsCarneyMeet,
    excerpt:
      "CESC was invited to attend the Right Honourable Prime Minister Mark Carney's Vancouver meet-and-greet, joining business leaders and community representatives in dialogue with the federal government.",
    body: [
      "CESC representatives were invited to attend a Vancouver meet-and-greet hosted by the Right Honourable Prime Minister Mark Carney, joining business leaders and community representatives in a direct exchange with the federal government. The invitation recognizes the Association's standing as one of British Columbia's most active Chinese Canadian business organizations.",
      "The discussion covered the federal government's economic priorities, the contribution of Chinese Canadian entrepreneurs to Canada's competitiveness, and opportunities for closer collaboration on trade, investment, and community development. CESC members shared perspectives from sectors including health and wellness, real estate, technology, and international trade.",
      "The event reinforced CESC's role as a credible voice for Chinese Canadian enterprise in policy dialogue, and as a platform that channels the experience of its members into the conversation shaping Canada's economic future.",
    ],
  },
  },
  {
    slug: "zhang-jian-sales-masterclass",
    title: "CESC Joins Zhang Jian's Sales Masterclass — Insights on Selling Through a Changing Era",
    category: "Enterprise Visit",
    date: "June 1, 2025",
    image: newsZhangJian,
    excerpt:
      "CESC members joined renowned sales strategist Zhang Jian's hands-on workshop, exploring how entrepreneurs can sharpen their sales capabilities amid shifting global markets.",
    body: [
      "Members of CESC took part in a focused workshop with Mr. Zhang Jian, one of the most respected practitioners in modern sales strategy, exploring how entrepreneurs and managers can adapt their approach to a rapidly changing economic environment.",
      "The session covered customer psychology, team building, negotiation frameworks, and the discipline required to convert opportunities into long-term relationships. Participants engaged in live role-play and case discussions drawn from real situations facing Canadian and Chinese enterprises today.",
      "The visit reflects CESC's commitment to continuous learning for its members — providing access to leading practitioners, practical training, and peer exchange that translates directly into business performance.",
    ],
  },
  {
    slug: "fairbrothers-fw-visit",
    title: "Enterprise Visit: Exploring FAIRBROTHERS FW — The Strength of Chinese Canadian Enterprise",
    category: "Enterprise Visit",
    date: "May 24, 2025",
    image: newsFairbrothers,
    excerpt:
      "CESC visited FAIRBROTHERS FW to learn first-hand how a Chinese Canadian enterprise has built a resilient, multi-generational business in Canada.",
    body: [
      "A CESC delegation visited FAIRBROTHERS FW, gaining an inside look at the company's operations, product lines, and the long-term vision behind its development in Canada. The visit highlighted the discipline, craftsmanship, and entrepreneurial spirit that have allowed the company to grow steadily over the years.",
      "Hosted by the company's leadership, members toured working facilities and discussed market strategy, supply chain resilience, and how Chinese Canadian enterprises can support each other through shared procurement, channel partnerships, and talent exchange.",
      "The visit reinforced CESC's mission of connecting member enterprises with one another — building a network where companies learn from each other's experience and create tangible business collaboration.",
    ],
  },
  {
    slug: "los-beans-enterprise-visit",
    title: "Enterprise Visit: Inside Los Beans — Sustainable Philosophy Behind Every Cup",
    category: "Enterprise Visit",
    date: "April 19, 2025",
    image: newsLosBeans,
    excerpt:
      "CESC members visited Los Beans to learn how the brand combines sustainable sourcing, considered design, and a clear brand story to stand out in Vancouver's coffee scene.",
    body: [
      "CESC's enterprise visit series took members inside Los Beans, a Vancouver coffee brand whose work spans sustainable sourcing, roasting craft, and a thoughtfully designed retail experience. The founders shared the brand philosophy that guides every part of the operation, from green-bean origin selection to in-store hospitality.",
      "Members heard about the team's approach to product development, customer experience, and building a brand identity that resonates with both local consumers and the broader specialty coffee community. The visit included a tasting and a candid discussion on the realities of running an independent food and beverage business in Canada.",
      "The session reflects CESC's enterprise visit program — bringing members into the working environments of innovative Chinese Canadian businesses and surfacing practical lessons in operations, branding, and sustainable growth.",
    ],
  },
  {
    slug: "cesc-visits-morocco-honorary-consul",
    title: "Deepening Business Cooperation: CESC Visits the Honorary Consul General of the Kingdom of Morocco",
    category: "Diplomatic Exchange",
    date: "January 13, 2025",
    image: newsMorocco,
    excerpt:
      "A CESC delegation met the Honorary Consul General of the Kingdom of Morocco to discuss bilateral trade opportunities and pathways for Canadian Chinese enterprises into the Moroccan and broader African market.",
    body: [
      "President Lenny Li led a CESC delegation to meet with the Honorary Consul General of the Kingdom of Morocco in Vancouver, exploring concrete ways to expand business cooperation between Canadian Chinese enterprises and Moroccan partners.",
      "Discussions covered Morocco's strategic role as a gateway to North Africa and the broader African continent, sectors of mutual interest including agriculture, energy, infrastructure, and consumer goods, and practical mechanisms for trade matchmaking and investment promotion.",
      "Both sides agreed to maintain close exchanges and to explore joint events, delegation visits, and information sharing that will help CESC members evaluate and act on opportunities in the Moroccan market.",
    ],
  },
  {
    slug: "cesc-visits-uk-consulate-vancouver",
    title: "CESC Invited to Visit the British Consulate-General in Vancouver",
    category: "Diplomatic Exchange",
    date: "December 19, 2024",
    image: newsUk,
    excerpt:
      "CESC leadership was invited to the British Consulate-General in Vancouver to exchange views on UK–Canada business opportunities and pathways for collaboration.",
    body: [
      "At the invitation of the British Consulate-General in Vancouver, CESC leaders attended a working meeting focused on UK–Canada business cooperation. The discussion examined priority sectors, market entry considerations, and how CESC's network can support members exploring opportunities in the United Kingdom.",
      "The two sides reviewed potential areas of collaboration including financial services, technology, education, sustainability, and creative industries, and explored ways to facilitate introductions between CESC members and UK counterparts.",
      "The visit reflects CESC's growing role as a recognized partner for consulates and trade missions seeking to engage with the Chinese Canadian business community in British Columbia.",
    ],
  },
  {
    slug: "cesc-sco-trade-center-collaboration",
    title: "Deepening Global Cooperation: CESC and the SCO Economic & Trade Center Chart a New International Blueprint",
    category: "International Collaboration",
    date: "December 7, 2024",
    image: newsSco,
    excerpt:
      "CESC and the SCO Economic & Trade Center agreed to deepen cooperation, opening new channels for member enterprises across the SCO region.",
    body: [
      "CESC met with leaders of the Shanghai Cooperation Organization (SCO) Economic & Trade Center to explore a long-term cooperation framework. The discussion focused on how the SCO platform can support CESC members in accessing markets, partners, and projects across the SCO member states.",
      "Both sides outlined practical areas of joint work including trade promotion, delegation exchanges, project matchmaking, and shared training programs. The collaboration is positioned to give Canadian Chinese enterprises a structured pathway into the broader Eurasian market.",
      "The meeting marks an important step in CESC's international strategy — building institutional partnerships that provide members with credible, on-the-ground support in priority regions.",
    ],
  },
  {
    slug: "laos-consul-general-visits-cesc",
    title: "Consul General of Laos and Senior Officials Visit CESC",
    category: "Diplomatic Exchange",
    date: "November 16, 2024",
    image: newsLaos,
    excerpt:
      "The Consul General of the Lao People's Democratic Republic in Canada and senior consulate officials visited CESC to discuss bilateral business cooperation.",
    body: [
      "The Consul General of the Lao People's Democratic Republic in Canada, together with senior officials of the consulate, paid an official visit to CESC. The delegation was welcomed by CESC President Lenny Li and Association leaders for an in-depth exchange on trade and investment opportunities between Canada, the Chinese Canadian business community, and Laos.",
      "Discussions covered priority sectors in the Lao economy, the consulate's role in facilitating business missions, and how CESC's network can support members interested in exploring opportunities in Southeast Asia. Both sides agreed to maintain regular communication and to organize follow-up activities for interested members.",
      "The visit underscores CESC's standing as a meeting point for diplomatic missions and Canadian Chinese enterprises seeking serious, well-structured international cooperation.",
    ],
  },
  {
    slug: "cesc-dalian-visit",
    title: "CESC Visits Dalian to Advance Canada–China Business Cooperation",
    category: "International Collaboration",
    date: "November 10, 2024",
    image: newsDalian,
    excerpt:
      "A CESC delegation travelled to Dalian to meet with government bodies and enterprises, exchanging views on cross-border investment, trade, and industry cooperation.",
    body: [
      "A CESC delegation led by the Association's leadership visited Dalian for a series of meetings with local government bodies, industry associations, and enterprises. The visit was aimed at deepening practical cooperation between Canadian Chinese enterprises and the Dalian business community.",
      "Throughout the visit the delegation discussed priority industries in Dalian — including advanced manufacturing, marine economy, food processing, and technology — and explored concrete pathways for trade and investment cooperation with Canadian counterparts.",
      "The trip reinforced CESC's position as an active connector between Canadian and Chinese local economies, supporting members with on-the-ground introductions and partnership opportunities in key Chinese cities.",
    ],
  },
  {
    slug: "cesc-bridge-china-canada-cooperation",
    title: "CESC: Building a Bridge for Canada–China Economic and Trade Cooperation",
    category: "International Collaboration",
    date: "September 20, 2024",
    image: newsBridge,
    excerpt:
      "An overview of CESC's role as a long-standing bridge between Canadian and Chinese business communities, supporting trade, investment, and member growth.",
    body: [
      "Since its founding, CESC has worked to build a bridge between the Canadian and Chinese business communities — providing a trusted platform for trade promotion, investment matchmaking, policy dialogue, and member development.",
      "Through partnerships with government bodies, consulates, industry associations, and enterprises on both sides of the Pacific, CESC has supported its members in exploring opportunities across sectors such as health and wellness, real estate, finance, technology, automotive, energy, and consumer goods.",
      "Looking forward, CESC will continue to invest in its core mission: connecting Canadian Chinese entrepreneurs to credible international partners, and acting as a long-term partner in their growth.",
    ],
  },
];
