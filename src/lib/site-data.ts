import eventSummit from "@/assets/event-summit.jpg";
import eventGala from "@/assets/event-gala.jpg";
import eventInnovation from "@/assets/event-innovation.jpg";
import eventPanel from "@/assets/event-panel.jpg";
import eventRoundtable from "@/assets/event-roundtable.jpg";
import featuredEvent from "@/assets/featured-event.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

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
  slug: "2026-leadership-summit",
  category: "Featured Event",
  title: "2026 CESC Business Leadership Summit",
  date: "September 18, 2026",
  location: "Vancouver Convention Centre",
  image: featuredEvent,
  shortDescription:
    "Join entrepreneurs, executives, investors, and community leaders for an evening of networking, leadership discussions, and international business collaboration focused on the future of Canadian entrepreneurship.",
  longDescription:
    "A premier gathering designed to connect entrepreneurs, executives, innovators, and business leaders through meaningful networking, leadership discussions, and international collaboration opportunities.",
  agenda: [
    { time: "5:30 PM", item: "Executive Reception & Networking" },
    { time: "6:30 PM", item: "Keynote: The Future of Canadian Entrepreneurship" },
    { time: "7:15 PM", item: "Leadership Panel — Global Markets & Innovation" },
    { time: "8:30 PM", item: "Gala Dinner & Member Roundtables" },
  ],
  speakers: [
    "Senior Executives from Canada's leading enterprises",
    "International business leaders from Asia-Pacific markets",
    "Founders shaping the next decade of innovation",
  ],
};

export const pastEvents = [
  {
    slug: "executive-gala",
    title: "CESC Executive Networking Gala",
    date: "May 2025",
    location: "Shangri-La Hotel, Vancouver",
    image: eventGala,
  },
  {
    slug: "innovation-forum",
    title: "Innovation & Entrepreneurship Forum",
    date: "November 2024",
    location: "Vancouver Convention Centre",
    image: eventInnovation,
  },
  {
    slug: "leadership-panel",
    title: "Cross-Cultural Business Leadership Panel",
    date: "September 2024",
    location: "Fairmont Pacific Rim, Vancouver",
    image: eventPanel,
  },
  {
    slug: "asian-roundtable",
    title: "Canadian Asian Business Roundtable",
    date: "April 2024",
    location: "Four Seasons, Toronto",
    image: eventRoundtable,
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
