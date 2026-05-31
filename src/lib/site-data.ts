import eventSummit from "@/assets/event-summit.jpg";
import featuredEvent from "@/assets/featured-event.jpg";
import eventRomania from "@/assets/event-romania-day.jpg";
import eventSummerRetreat from "@/assets/event-summer-retreat.jpg";
import eventJulyJourney from "@/assets/event-july-journey.jpg";
import eventMexicoSummit from "@/assets/event-mexico-summit.jpg";
import eventAnnualGala from "@/assets/event-annual-gala-2025.jpg";
import eventLionsGateGala from "@/assets/event-lions-gate-gala.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

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
    slug: "future-of-chinese-canadian-entrepreneurship",
    title: "The Future of Chinese Canadian Entrepreneurship in a Global Economy",
    category: "Leadership",
    date: "February 2026",
    image: blog1,
    excerpt:
      "Exploring how the next generation of Chinese Canadian entrepreneurs is shaping innovation, leadership, and global business collaboration.",
    body: [
      "The landscape of entrepreneurship in Canada continues to evolve as a new generation of Chinese Canadian business leaders brings fresh perspectives, innovation, and international experience into the marketplace.",
      "From technology startups and real estate development to hospitality, healthcare, finance, and international trade, Chinese Canadian entrepreneurs continue to play an important role in shaping Canada's economic future.",
      "As global markets become increasingly interconnected, cross-cultural leadership and international collaboration have become essential skills for modern business growth. Entrepreneurs who understand both local communities and global opportunities are uniquely positioned to create meaningful impact across industries.",
      "At CESC, we believe that supporting entrepreneurship means creating platforms for mentorship, networking, collaboration, and long-term leadership development. By connecting experienced professionals with emerging entrepreneurs, we help strengthen the future of business leadership throughout Canada and beyond.",
    ],
  },
  {
    slug: "community-driven-business-networks",
    title: "Why Community-Driven Business Networks Matter More Than Ever",
    category: "Community",
    date: "January 2026",
    image: blog2,
    excerpt:
      "Strong business communities are built through trust, mentorship, collaboration, and long-term relationships.",
    body: [
      "Successful business ecosystems are rarely built in isolation. Behind every thriving entrepreneur, innovative startup, or growing company is often a network of mentors, collaborators, strategic partners, and community support.",
      "In today's rapidly changing economic environment, business leaders are increasingly recognizing the value of meaningful professional communities that encourage collaboration instead of competition.",
      "Organizations like CESC provide opportunities for entrepreneurs and professionals to exchange ideas, discover new opportunities, and build relationships that extend beyond transactional networking.",
      "Community-driven business networks also help create stronger local economies by encouraging mentorship, supporting emerging entrepreneurs, and fostering long-term partnerships between industries and communities.",
    ],
  },
  {
    slug: "canada-asia-markets",
    title: "Building Stronger Connections Between Canadian and Asian Markets",
    category: "International",
    date: "December 2025",
    image: blog3,
    excerpt:
      "International collaboration continues to create new opportunities for entrepreneurs, investors, and business leaders.",
    body: [
      "Canada's position as a multicultural and globally connected country continues to create valuable opportunities for international business collaboration and economic growth.",
      "As industries evolve and global markets become more interconnected, organizations and entrepreneurs that understand cross-border business relationships are better equipped to identify emerging opportunities and navigate international partnerships.",
      "CESC encourages meaningful dialogue and collaboration between Canadian and Asian business communities while supporting innovation, entrepreneurship, and sustainable long-term partnerships.",
      "By fostering stronger connections between industries, investors, entrepreneurs, and professionals, organizations can create greater opportunities for economic development and future growth.",
    ],
  },
];
