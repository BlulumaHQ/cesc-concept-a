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
import newsAssembly from "@/assets/news/news-10th-assembly.jpg";
import newsSecretariatIntro from "@/assets/news/news-secretariat-intro.jpg";
import newsCarneyMeet from "@/assets/news/news-carney-meet.jpg";
import newsCarneyPin from "@/assets/news/news-carney-pin.jpg";
import newsXinxin from "@/assets/news/news-xinxin.jpg";
import newsNewyork from "@/assets/news/news-newyork-mission.jpg";
import newsEventForum from "@/assets/news/news-event-forum.jpg";
import newsEventRomania from "@/assets/news/news-event-romania.jpg";
import newsEventRetreat from "@/assets/news/news-event-retreat.jpg";
import newsEventJuly from "@/assets/news/news-event-july.jpg";
import newsEventMexico from "@/assets/news/news-event-mexico.jpg";
import newsEventGala from "@/assets/news/news-event-gala.jpg";
import newsEventLions from "@/assets/news/news-event-lions.jpg";

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
    title: "Strong Alliance Across Three Regions! Launching New York Business Visit, New Opportunities for Energy Storage and AI Industry Cooperation",
    category: "International Collaboration",
    date: "May 7, 2026",
    image: newsNewyork,
    excerpt:
      "Recently, the Canadian Entrepreneurs & Startups Council (CESC) was invited by the Fifth Avenue Entrepreneurs Foundation to visit several enterprises in the New York area and conduct in-depth business observations, fostering new opportunities for energy storage and AI industry collaboration.",
    body: [
      "Visions Media USA News: Recently, the Canadian Entrepreneurs & Startups Council (CESC) was invited by the Fifth Avenue Entrepreneurs Foundation to visit several enterprises in the New York area and conduct in-depth business observations.",
      "Mr. Yang Zhengjin, Chairman of the Fifth Avenue Entrepreneurs Foundation, stated in an interview with Visions reporter: \"The Canadian Entrepreneurs & Startups Council has long actively promoted exchanges and cooperation among Chinese enterprises, and we have always maintained a very friendly interactive relationship. We hope that through this New York business visit, we can further strengthen mutual assistance and cooperation among entrepreneurs from the U.S., China, and Canada, and jointly create more opportunities and platforms for the international development of Chinese enterprises.\"",
      "Jessie Xiao, Executive President of the Canadian Entrepreneurs & Startups Council, stated in an interview: \"Our visit to New York for observation aims not only to understand the development models of local U.S. enterprises but also to help more Chinese entrepreneurs find international cooperation opportunities and promote deeper interaction between the North American and Asian markets.\"",
      "Jessie Xiao, Executive President of the Canadian Entrepreneurs & Startups Council",
      "This event brought together entrepreneurs and investors from the U.S., China, and Canada. During the symposium, enterprise representatives introduced the development of the U.S. new energy and high-end manufacturing industries, and members of the delegation engaged in in-depth discussions on industry cooperation and future investment directions.",
      "As the lead host unit for this reception, the U.S.-China Photovoltaic Association and its founding president, Yuan Haiyang, excitedly stated: \"The global new energy industry is currently accelerating its development, and there is still vast room for cooperation between the U.S. and China in green energy and technological innovation. This visit has provided everyone with a more intuitive understanding of local U.S. high-end manufacturing.\"",
      "Subsequently, the delegation also visited the U.S. National Energy Storage Technology R&D Center and had the honor of meeting Professor M. Stanley Whittingham, a recipient of the 2019 Nobel Prize in Chemistry and one of the key founders of lithium-ion batteries.",
      "Professor Whittingham had a cordial exchange with the entrepreneur representatives and highly praised the development of China's new energy vehicle market: \"The development of China's new energy vehicle industry is impressive and holds great significance for the global green energy transition. Future energy storage technology and international cooperation will continue to drive changes in the world's energy structure.\"",
      "It is reported that the Canadian Entrepreneurs & Startups Council delegation will also visit Manhattan and other New York financial centers, tour security companies, attend the latest AI summit, and participate in other local events. Visions Media will continue to track and report on these activities.",
      "Canadian Entrepreneurs & Startups Council (CESC)",
      "Founded in 2003, the Canadian Entrepreneurs & Startups Council (CESC) has been deeply rooted in North America for over twenty years and has now developed into one of Canada's most influential and resource-integrating high-end platforms for Chinese businesses. The association gathers over 200 high-quality enterprises, covering core industry sectors such as financial capital, technological innovation, real estate investment, international trade, artificial intelligence, and healthcare, building a business network with a global perspective and industry depth. CESC is not only a platform for entrepreneurs to exchange ideas but also a high-end network focused on resource matching and value creation. With \"Connectivity, Synergy, and Win-Win\" as its core, through integrating global Chinese business resources, it continuously promotes cross-regional capital flow, industrial cooperation, and the implementation of strategic projects. Relying on an international cooperation network spanning North America, Europe, the Middle East, and Asia-Pacific, CESC maintains deep linkages with business associations and institutions from multiple countries, organizing high-level economic and trade forums, international business study tours, and precise project matching mechanisms to assist members in achieving resource breakthroughs and business upgrades in the global market.",
      "We sincerely invite entrepreneurs with vision and foresight to join CESC, to collectively enter a higher-level business network and expand their global footprint.",
    ],
  },
  {
    slug: "2026-vancouver-entrepreneurs-forum-recap",
    title: "Canada-China Economic and Trade Cooperation Embarks on a New Journey at the 2026 CESC Vancouver Entrepreneur Forum",
    category: "Signature Event",
    date: "April 12, 2026",
    image: newsEventForum,
    excerpt:
      "The 2026 CESC Vancouver Entrepreneur Forum successfully connected Canadian and Chinese entrepreneurs, fostering new opportunities and injecting vitality into the development of Chinese businesses in Canada, initiating a new chapter in Canada-China economic and trade cooperation.",
    body: [
      ", duration 06:09 Your browser does not support video tags",
      "The forum featured Mr. Wang Xuewei, CEO of the Indigenous International Trade Group Corporation (IITGC) and President of the Canada-China Business Council, as the keynote speaker, who delivered a professional and pragmatic presentation to the attendees.",
      "Mr. Wang Xuewei possesses nearly two decades of extensive experience in business development between Canada and Asia, particularly Greater China, deeply rooted in the forefront of China-Canada economic and trade cooperation.",
      "From 2007 to 2021, he served as the Head of China Affairs for the Government of Saskatchewan, leading efforts to promote economic cooperation and inter-governmental friendly relations between the Saskatchewan government and Greater China. From 2022 to November 2024, he was the Chief Representative of the Government of Alberta in China, overseeing and managing the provincial government's offices in Shanghai, Beijing, and Guangzhou, accumulating profound government and enterprise resources and practical experience. Currently, the Indigenous International Trade Group Corporation (IITGC), where he serves, specializes in government and corporate procurement and international trade, serving clients including the Saskatchewan Research Council, the Department of National Defence, the Royal Canadian Mounted Police (RCMP), the Government of Alberta, and many other government and enterprise organizations, with numerous successful cooperation cases.",
      "Wang Xuewei, President of the Canada-China Business Council",
      "The forum atmosphere was enthusiastic, with a full house of distinguished guests: Liang Yanmin, Commercial Counsellor of the Chinese Consulate General in Vancouver; Malcolm Brodie, Mayor of Richmond; and James Wang, Burnaby City Councillor, among other government officials, as well as entrepreneur representatives from various industries, gathered to engage in in-depth exchanges and discussions on the core theme of \"Development Trends of Chinese Enterprises Expanding into North America.\"",
      "President Wang Xuewei's keynote speech was packed with valuable insights, from an analysis of Canada's overall economic environment and key industries to a comprehensive overview of the main pathways for Chinese enterprises to enter the Canadian market; from a detailed introduction to Canada's government procurement system to an in-depth interpretation of Indigenous preferential procurement policies and cooperation models, and further to sharing practical experiences of enterprises establishing themselves in Canada. Each topic closely addressed the core needs of entrepreneurs, providing clear guidance for Chinese and Chinese-Canadian enterprises intending to expand into the North American market.",
      "Notably, this forum saw two major Chinese business organizations sign a strategic cooperation agreement, marking a significant step forward for CESC and the Canada-China Business Council in resource integration and strategic cooperation. By leveraging their complementary strengths, both parties will form synergies in areas such as enterprise services, project matching, policy interpretation, and international market expansion, further enhancing the overall influence and competitiveness of Chinese enterprises in Canada and North America.",
      "During the event, Li Guochao, President of CESC; Liang Yanmin, Commercial Counsellor of the Chinese Consulate General in Vancouver; Malcolm Brodie, Mayor of Richmond; Wang Xuewei, President of the Canada-China Business Council; James Wang, Burnaby City Councillor; Song Xianghou, Founding President of CESC; Executive Vice Presidents Xiao Jiawen and David Tan; and Vice President Cui Fan, among other guests, were interviewed. Drawing on their own experiences and industry insights, they shared their thoughts on new opportunities and challenges in Canada-China economic and trade cooperation, expressing high expectations and firm confidence in the development of Chinese enterprises in North America.",
      "Through complementary strengths, both parties will form synergies in enterprise services, project matching, policy interpretation, and international market expansion, further enhancing the overall influence and core competitiveness of Chinese enterprises in Canada and North America, ensuring the smooth development of Chinese enterprises expanding abroad.",
      "Attending entrepreneurs unanimously stated that the forum content was practical and informative, offering both professional policy interpretations and useful practical experiences, as well as excellent resource matching opportunities. They found it highly beneficial and of significant guiding importance for enterprises expanding into the North American market.",
      "After the forum concluded, invited guests and participating entrepreneurs gathered at Hao Ji Quan Yang Guan in Richmond for a relaxed and pleasant networking dinner.",
      "Accompanied by the ceremonial drumming for the roast lamb, everyone enjoyed the specialty cuisine in a cheerful and harmonious atmosphere, continuing to delve into topics such as Canada-China economic and trade cooperation and enterprise development opportunities. This further deepened friendships, built consensus, and facilitated resource matching, allowing the forum's outcomes to extend.",
      "At the dinner, Mr. Hao Zhengwen, proprietor of Hao Ji Quan Yang Guan, personally carved the lamb. Everyone raised their glasses and conversed joyfully, bringing the forum to a successful close.",
      "The successful staging of the \"2026 CESC Vancouver Entrepreneur Forum\" provided an efficient platform for exchange and cooperation for Chinese and Canadian entrepreneurs, further facilitating the channels for Chinese enterprises to expand into North America, and injecting new vitality into the development of Chinese enterprises in Canada.",
      "In the future, CESC will continue to leverage its platform advantages, connect various resources, and organize more high-quality exchange activities, contributing greater strength to promoting Canada-China economic and trade cooperation and assisting the development of Chinese enterprises. Together with entrepreneurs, we will embark on a new journey of Canada-China economic and trade cooperation!",
      "Phoenix Media and Canadian Multicultural Television provided in-depth coverage of the forum, documenting this grand event of Canada-China economic and trade exchange.",
      "CESC, established in 2003, has been deeply rooted in North America for over twenty years, and has now evolved into one of Canada's most influential and resource-integrating high-end platforms for Chinese businesses.",
      "The association brings together over 200 high-quality enterprises, spanning key industry sectors such as finance and capital, technological innovation, real estate investment, international trade, artificial intelligence, and healthcare, thereby building a business network with a global perspective and industry depth.",
      "CESC is not merely a platform for entrepreneurs to connect, but also a high-end network focused on resource integration and value creation. With \"connection, synergy, and win-win\" as its core principles, we continually promote cross-regional capital flow, industrial cooperation, and strategic project implementation by integrating global Chinese business resources.",
      "Relying on an international cooperation network covering North America, Europe, the Middle East, and Asia-Pacific, CESC maintains deep linkages with business associations and institutions in multiple countries, creating high-level economic and trade forums, international business delegations, and precise project matching mechanisms to help members achieve resource leapfrogging and business upgrading in the global market.",
      "We sincerely invite entrepreneurs with vision and foresight to join CESC, to collectively enter a higher-level business network and expand their global footprint.",
    ],
  },
  {
    slug: "cesc-pin-to-pm-carney",
    title: "CESC Presents Association Pin to Prime Minister Carney, Conveying Cooperation and Win-Win",
    category: "Government & Business",
    date: "December 29, 2025",
    image: newsCarneyPin,
    excerpt:
      "The Canadian Entrepreneurs & Startups Council (CESC) was recently invited to attend Prime Minister Carney's Christmas Celebration in Ottawa, an event that symbolized understanding, respect, and cooperation.",
    body: [
      "Recently, the Canadian Entrepreneurs & Startups Council (CESC) was invited to attend Prime Minister Carney's Christmas Celebration in Ottawa. This was not only a festive celebration but also an important moment of exchange symbolizing understanding, respect, and cooperation.",
      "CESC Presents Association Pin to Prime Minister Carney",
      "At the celebration, CESC President Tan, on behalf of the association, formally presented the Canadian Entrepreneurs & Startups Council pin to Prime Minister Carney.",
      "This pin encapsulates the collective aspirations of the Chinese-Canadian business community, deeply rooted locally and actively participating on the international stage for many years. It also symbolizes the willingness of Chinese entrepreneurs to continue serving as an important bridge for friendly exchanges and economic cooperation between China and Canada, connecting with each other and moving towards a shared future with a pragmatic, open, and cooperative attitude.",
      "The presentation of the pin is not just a formality but also an expression of stance –",
      "Cooperation, trust, and win-win are the directions that Chinese businesses have always upheld.",
      "Association President Li Guochao with Prime Minister Carney",
      "Association Vice President Jessie Xiao with Prime Minister Carney",
      "Association Vice President David Tan with Prime Minister Carney",
      "Association Director Abby Wang with Prime Minister Carney",
      "Important Signal: A New Direction Towards 2026",
      "During the event, the Prime Minister formally announced that Canada will actively re-engage with China in 2026.",
      "This clear statement sends a positive and unambiguous signal for the future development of Canada-China relations, and it aligns perfectly with the association's long-standing advocacy for \"mutual trust through exchange and win-win cooperation.\"",
      "During the exchange, the Antrodia camphorata products brought by the association received high praise from Ethiopian friends.",
      "This cross-cultural recognition once again verified that high-quality products and sincere cooperation possess the power to transcend national borders.",
      "This evening was an honor to be seen, and even more, a responsibility to bear.",
      "CESC will continue to take practical actions, unite the strength of Chinese businesses, connect diverse resources, and actively participate in and promote broader and deeper cooperation between Canada and China, as well as internationally.",
      "The Canadian Entrepreneurs & Startups Council (CESC) was registered in 2003. With over 130 formally registered member enterprises, covering various industries such as finance, technology, real estate, and trade, it is one of the core organizations for Chinese businesses in Canada. The association is dedicated to promoting cooperation and development among Chinese businesses in Canada and globally, building a platform for economic and cultural exchange between China and Canada. Over the years, the association has hosted numerous large-scale economic and trade forums and business collaborations with more than 20 business associations and chambers of commerce, including the American Chamber of Commerce in Canada, the EU Chamber of Commerce, the Mexican Chamber of Commerce, the Romanian Chamber of Commerce, and the Korean Chamber of Commerce, playing an active role in promoting diversified economic development and enhancing the influence of the Chinese community.",
    ],
  },
  {
    slug: "xinxin-enterprise-visit",
    title: "Company Visit - Exploring Hsin Hsin Holdings: The Aesthetic Power of Three Generations, the Mark of Chinese Enterprises in Vancouver",
    category: "Enterprise Visit",
    date: "November 23, 2025",
    image: newsXinxin,
    excerpt:
      "Led by Vice President Eric Wu, the Canadian Entrepreneurs & Startups Council visited Hsin Hsin Holdings, a company deeply rooted in Vancouver for 35 years, exploring its three-generation legacy of art and culture, the cross-industry story of entrepreneur Emily Lin, and a professional and warm visitation experience, showcasing the aesthetic power and social responsibility of Chinese enterprises.",
    body: [
      "Director Jin Gang, Lorna, President of Youth Tencent Club, Director Emily,",
      "Vice President Eric, Deputy Secretary General Alysa, Director Celine (from left to right)",
      "Led by Vice President Eric Wu, the Canadian Entrepreneurs & Startups Council (CESC) visited Hsin Hsin Holdings, a company deeply rooted in Vancouver for 35 years, exploring its three-generation legacy of art and culture, the cross-industry story of entrepreneur Emily Lin, and a professional and warm visitation experience, showcasing the aesthetic power and social responsibility of Chinese enterprises.",
      "To promote business exchanges and cross-industry connections among association members, the Canadian Entrepreneurs & Startups Council launched a new round of company visits on the morning of November 20. The company visited this time is Hsin Hsin Holdings, a diversified group deeply rooted in Metro Vancouver for 35 years and renowned in the art and culture field. It is a model Chinese enterprise that integrates art and business, tradition and innovation.",
      "Hsin Hsin Holdings was founded in 1995 as a diversified group spanning art and culture, brand marketing, design creativity, and sustainable lifestyle selection. Its brand matrix covers the entire aesthetic industry chain:",
      "Hsin Hsin Picture Frame, known for exquisite craftsmanship and professional framing, serves clients ranging from museum collections to Hermès scarves and high-end residential decor, setting the benchmark for art framing in the Greater Vancouver area.",
      "Cambridge Art Center, with its mission to \"gather creativity and inspire collecting,\" regularly hosts art exhibitions, educational workshops, and cultural exchange activities, serving as the cultural core of the enterprise.",
      "Hsin Hsin Marketing provides brand event execution, public relations marketing, and digital integration services, achieving cross-industry connections between art and business.",
      "Hsin Hsin Shop, a multi-concept store, focuses on sustainable lifestyle products, conveying an attitude toward life that combines environmental protection and aesthetics.",
      "Hsin Hsin Holdings takes \"Professional | Innovation | Extraordinary | Born for Value\" as its core spirit. Through workshops, art exhibitions, frame craftsmanship displays, and a vision wall, it outlines a brand image that integrates diverse fields and parallel cultural creativity, making art no longer distant but permeating every detail of life and business.",
      "【Exclusive Interview】 Emily Lin",
      "Emily, with nearly 20 years of international luxury client service experience, combined with her family's 70 years of business history, has injected new vitality into Hsin Hsin Holdings. She has not only expanded new horizons in art, culture, and brand marketing but also actively promoted charity and community cultural heritage (e.g., serving as a board member for the Vancouver Metropolitan Orchestra Foundation and the Canadian Liver Foundation), ensuring that the enterprise possesses deep social responsibility beyond its commercial value.",
      "This visit allowed association members to intimately experience Hsin Hsin Holdings' aesthetic DNA, featuring many highlights:",
      "From wooden frame manufacturing and acid-free framing to high-end art customization, Hsin Hsin Picture Frame has long served museums and international brands. Visitors observed the frame workshop, edge finishing, and scarf framing processes firsthand, witnessing the \"craftsmanship behind art.\"",
      "As the cultural heart of the enterprise, the art center displays a rich collection of artworks and regularly hosts artist lectures and workshops, immersing visitors in a strong creative atmosphere.",
      "The Emily team demonstrated on-site how to assist brands in event planning, public relations communication, and digital marketing, showcasing a practical path for integrating art and business.",
      "Hsin Hsin Holdings specially prepared Taiwanese-style bento boxes and handmade desserts, infusing warmth with Eastern hospitality, making the visit intimate and humanistic.",
      "This Taiwanese bento was not only a comfort to the palate but also a microcosm of the company's \"home\" culture – the aroma of the rice and the exquisite side dishes allowed members from various regions to feel a strong sense of Eastern warmth, adding an unforgettable touch to this business exchange.",
      "This company visit is an important initiative for the association to promote business exchange and cultural sharing. Through Emily's personal tour and sharing, members not only learned about a Chinese enterprise that has been deeply rooted for three generations but also witnessed how art and culture can create value in business and exert influence in the community.",
      "In the future, the association will continue to promote such high-quality company visits, connecting more outstanding Chinese enterprises, and jointly writing a new chapter of cross-industry exchange and value creation.",
      "The Canadian Entrepreneurs & Startups Council (CESC) was registered in 2003. With over 20 years of establishment, we have gathered more than a hundred member enterprises, covering various industries such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are committed to building a high-end business platform for resource sharing and win-win cooperation. Join us, and you will gain first-hand industry insights, policy interpretations, legal and tax consultations, and preferential access to investment opportunities and high-end networks. Additionally, you can participate in business study tours, industry summits, festive galas, and other high-end events to seize opportunities in the global market and explore infinite possibilities! Join now, walk with elites, and create a brilliant future together!",
    ],
  },
  {
    slug: "2025-romania-national-day-recap",
    title: "Celebrating the 2025 National Day of Romanian Cuisine & Wine",
    category: "Diplomatic Exchange",
    date: "November 5, 2025",
    image: newsEventRomania,
    excerpt:
      "CESC was invited to attend the National Day of Romanian Cuisine & Wine, hosted in Vancouver, where business leaders, dignitaries, and cultural representatives from Romania, Canada, and other nations gathered to savor traditional Romanian food and fine wines.",
    body: [
      "The National Day of Romanian Cuisine & Wine The National Day of Romanian Cuisine & Wine The National Day of Romanian Cuisine & Wine The National Day of Romanian Cuisine & Wine The National Day of Romanian Cuisine & Wine The National Day of Romanian Cuisine & Wine The National Day of Romanian Cuisine & Wine The National Day of Romanian Cuisine & Wine",
      "CESC Invited to Attend",
      "—CESC Invited to Attend the National Day of Romanian Cuisine & Wine",
      "In October, CESC was cordially invited by Adrian, the President of the Romanian-Canadian Chamber of Commerce in BC, to attend the National Day of Romanian Cuisine & Wine.",
      "The event was grandly held in Vancouver, bringing together business guests, dignitaries, and cultural representatives from Romania, Canada, and various other countries. They collectively savored traditional Romanian cuisine and aromatic wines, experiencing the charm of cross-border culture.",
      "At the event, the delicious aroma of traditional Romanian dishes filled the air, complemented by high-quality wines from the Carpathian Mountains, making guests feel as if they were immersed in the romantic atmosphere of Eastern Europe. CESC representatives engaged in friendly exchanges with guests from various sectors, exploring more possibilities for cooperation between the two associations in areas such as culture, tourism, education, and trade.",
      "“Using wine as a medium and culture as a bridge,” this was not only a feast for the senses but also a blend of hearts and cultures. CESC is always committed to promoting diverse cultural exchanges and mutual learning, enabling entrepreneurs from both associations to grow together on an open international stage.",
      "Left: Gabriel Rotaru, Consul General of Romania in Vancouver",
      "Right: Guo Chao Li, President of CESC",
      "As an important bridge connecting the two associations, CESC will continue to maintain close cooperation with international friendly organizations like the Romanian-Canadian Chamber of Commerce in BC. Through cultural activities, economic and trade exchanges, youth forums, and charitable projects, CESC aims to further deepen the commercial cooperation between the two associations.",
      "This event not only strengthened the friendship between the two associations but also laid a wonderful foundation for more cross-sector collaborations in the future.",
      "Email: cescvvip@gmail.com",
    ],
  },
  {
    slug: "2025-board-summer-retreat-recap",
    title: "CESC 10th Board of Directors Summer Team Building Event Successfully Concluded",
    category: "Association Activity",
    date: "September 18, 2025",
    image: newsEventRetreat,
    excerpt:
      "In the pleasant September sunshine of Vancouver, the CESC 10th Board of Directors gathered for a unique team building event themed \"Exchange, Cooperation, and Win-Win.\"",
    body: [
      "RURAL REVITALIZATION",
      "In the pleasant September sunshine of Vancouver, the CESC 10th Board of Directors gathered for a unique team building event.",
      "This event, themed \"Exchange, Cooperation, and Win-Win,\" allowed directors to unleash their vitality, deepen understanding, and strengthen friendships in a relaxed and joyful atmosphere through activities such as golfing ⛳️, Guandan card games ♠️, free discussions 💬, dinner and drinks 🥂, and a lucky draw 🎁.",
      "• Golfing: Enthusiastically competing on the green, full of passion and energy.",
      "• Guandan Card Games: A competition of wit and默契, filled with laughter and applause.",
      "• Dinner and Networking: Amidst toasts, ideas converged, and opportunities for cooperation quietly emerged.",
      "• Surprise Lucky Draw: Continuous luck and doubled joy.",
      "This team-building event not only brought joy to the directors through sports and gatherings but also further deepened their communication and trust, laying a solid foundation for the future development of the association.",
      "In the future, we will continue to uphold the principle of \"Capital Empowerment · Win-Win Cooperation · Resource Sharing · Complementary Strengths,\" working hand in hand to create a brilliant future!",
      "Registered in 2003, CESC has been established for over 20 years. We have gathered over a hundred member enterprises, covering various sectors such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are dedicated to building a high-end business platform for resource sharing and win-win cooperation. By joining us, you will gain first-hand industry information, policy interpretations, legal and tax consultations, priority access to investment opportunities, and expanded high-end professional networks. Furthermore, you can participate in business study tours, industry summits, festive dinners, and other high-end events to seize opportunities in the global market and explore unlimited possibilities! Join us now to walk with elites and create a glorious future!",
    ],
  },
  {
    slug: "cesc-attends-pm-carney-vancouver-meet",
    title: "CESC Invited to Meet with Prime Minister Carney in Vancouver",
    category: "Government & Business",
    date: "August 5, 2025",
    image: newsCarneyMeet,
    excerpt:
      "On August 3, 2025, CESC achieved a historic milestone as several directors and vice presidents were invited to a cordial meeting and photo opportunity with the Prime Minister of Canada.",
    body: [
      "On August 3, 2025, the Canadian Entrepreneurs & Startups Council (CESC) experienced a historic highlight: several directors and vice presidents were invited to a cordial reception and photo opportunity with the Prime Minister of Canada. As the invited Chinese-Canadian business organization, CESC not only represents the strength and wisdom of Canadian Chinese entrepreneurs but also showcases our unique influence and contemporary role on the international stage.",
      "Left 1: CESC Vice President David Tan",
      "Right 1: CESC Director Sophie Yan",
      "Right 2: CESC Vice President Eric Wu",
      "Right 4: CESC Director Reena (Qihua Wu)",
      "Prime Minister's Cordial Reception, Chinese Entrepreneurs Shine on the Canadian Stage",
      "Amidst the deepening exchange between China and Canada and the growing global influence of Chinese people, the Canadian Entrepreneurs & Startups Council (CESC) has once again made a significant mark.",
      "On August 3, 2025, several CESC directors were cordially received and photographed with the Prime Minister of Canada. This signifies a high-level recognition by the Canadian government of our association's long-standing efforts to promote economic and cultural exchange between China and Canada and foster diverse business cooperation.",
      "CESC was the Chinese-Canadian business organization to receive such a large-scale reception this time. This honor not only belongs to each of our members but also highlights the power and influence of Chinese businesses in Canada.",
      "Every member is an \"ambassador\" for Canada-China cooperation.",
      "During this event, CESC directors, with the active participation and coordination of Vice President David Tan, jointly attended the Prime Minister's reception, fully demonstrating the cohesion and professional demeanor of the association's members.",
      "During the exchange, the Prime Minister spoke cordially with each CESC representative, listening attentively to each entrepreneur's development philosophy and business direction.",
      "The Prime Minister highly affirmed everyone's active contributions and clearly stated:",
      "\"You are not only important participants in the Canadian economy but also crucial bridges connecting the world.\"",
      "He encouraged CESC directors to continue to exert their influence, lead Canadian enterprises to embrace the international stage, and tell the global story of Canadian Chinese entrepreneurs.",
      "We are not just a bridge for business connections but also a symbol of the spirit and strength of Chinese Canadians. This reception by the Prime Minister is an affirmation of CESC's efforts over the years and a new beginning.",
      "Identities may be diverse, but the mission is singular: to represent the voice of Canadian Chinese entrepreneurs and reach out to the world.",
      "The glorious moment has been recorded in history; the journey continues.",
      "Let us work hand in hand, with the strength of Chinese people, to build bridges to the world.",
      "The Canadian Entrepreneurs & Startups Council (CESC) was registered in 2003. With over 20 years of establishment, we have gathered more than a hundred member enterprises, covering various industries such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are committed to building a high-end business platform for resource sharing and win-win cooperation. Join us, and you will gain first-hand industry insights, policy interpretations, legal and tax consultations, and preferential access to investment opportunities and high-end networks. Additionally, you can participate in business study tours, industry summits, festive galas, and other high-end events to seize opportunities in the global market and explore infinite possibilities! Join now, walk with elites, and create a brilliant future together!",
    ],
  },
  {
    slug: "2025-cesc-july-journey-recap",
    title: "CESC's July Journey: An Expedition of Connection and Empowerment",
    category: "Association Activity",
    date: "August 4, 2025",
    image: newsEventJuly,
    excerpt:
      "CESC's July journey through China was a vibrant expedition of connection and empowerment, expanding the organization's reach and reinforcing its mission to unite global Chinese entrepreneurs for shared success and a new chapter of China-Canada business cooperation.",
    body: [
      "In July, as the Chinese summer flared, CESC's pace was equally fervent and resolute. We traversed cities, crossed industries, connected resources, and united forces, not only expanding our organizational footprint but also reaffirming our original mission in every exchange — to enable global Chinese entrepreneurs to meet, collaborate, and achieve mutual success here.",
      "July Chronicle | CESC China Tour Concludes Successfully: Connecting, Co-creating, Empowering the Future",
      "In July, enthusiasm arrived as scheduled, as a delegation from CESC embarked on a journey through China, visiting Shanghai, Hangzhou, Suzhou, Beijing, Tianjin, and Shenyang, with the initial aim of \"connecting resources and empowering cooperation.\" The visits involved exchanges, fostering relationships, and expanding its footprint, injecting new vitality and possibilities into Canada-China entrepreneurial cooperation.",
      "🇨🇳 Shanghai · Clash of Ideas, Warming Friendships",
      "CESC Chairman Gong and General Manager Wang facilitated this rare gathering of entrepreneurs in Shanghai. In a relaxed and pleasant atmosphere, everyone discussed industry trends and cooperation opportunities, with ideas clashing in exchanges and friendships quietly growing.",
      "Even more moving was Mr. Wang's generous gift to CESC of \"a pen like a great pillar,\" each word imbued with profound meaning, both a blessing and a responsibility. The vision and demeanor of this great entrepreneur are admirable, injecting profound strength into the association's development.",
      "To have had this journey together is the best gift of the era and destiny.",
      "🌇 Hangzhou · Adapting to the Times, Winning Together for the Future",
      "In mid-summer, CESC ventured into vibrant and innovative Hangzhou, witnessing the deep cultivation of the Chinese entrepreneurial spirit in the \"first city of the digital economy.\"",
      "From NetEase's technological accumulation to Alibaba's commercial ecosystem, Chinese and foreign business philosophies deeply intersected here, with innovation and practice taking root. The CESC Hangzhou Chapter was born in response to the times, committed to building a high-end exchange platform, connecting resources, empowering enterprises, and working together for a win-win future.",
      "In Suzhou, with its Jiangnan charm, CESC's footsteps moved forward. This is not only an expansion of the association's footprint but also a deep cultivation of the entrepreneurial spirit across regions.",
      "The unveiling of the CESC Suzhou Chapter marks the launch of more city nodes. Special thanks to Eileen and Principal Pan of Beta Education Group Canada for their warm reception, which made this exchange full of warmth and injected confidence and support into the establishment of the chapter.",
      "We always believe: connecting with each other enables mutual achievement.",
      "🎓 Beijing · Reuniting at Peking University, Peking Duck with the Aroma of Books",
      "Learning never stops. CESC President Li and Vice President Xiao successfully completed their Peking University executive education program. Reunited with President Zou on the Peking University campus, the three CESC presidents journeyed from Vancouver to Beijing, transforming from entrepreneurs to academic overachievers, deepening their friendship.",
      "At the Quanjude \"meet-up\" dinner, everyone discussed business strategies while reminiscing about their campus days, with Peking duck accompanied by the aroma of books, a perfectly balanced experience.",
      "🏙️ Tianjin · Deep Exchanges, Expanding Cooperation",
      "Leaving the campus, the CESC delegation traveled to Tianjin to visit Stereon Company, led by President Mi of the Mongolia Chapter. President Mi's composure, wisdom, and foresight made this exchange very fruitful.",
      "In the clash of ideas, we not only felt the vision for development but also saw the broad scope for cooperation between Chinese and Canadian enterprises. In the future, we look forward to working hand-in-hand with President Mi to explore new frontiers and achieve mutual success.",
      "🌆 Shenyang · Efficient Matching, Practical Implementation",
      "Starting from Beijing, and having concluded its visit to Tianjin, CESC promptly proceeded to Shenyang. The pace was tight but orderly, all to facilitate more efficient matching and substantive cooperation. Regardless of the changing cities, CESC consistently embodies its original intention through action:",
      "Conclusion · Uniting Chinese Strengths, Collaborating to Empower the Future",
      "The July China tour was not only an expansion journey for CESC but also a practice of its original mission to \"connect global Chinese entrepreneurs.\" Every gathering, every departure, is a firm response to the future.",
      "CESC will continue to build bridges for entrepreneurial exchange and cooperation globally, fostering consensus and promoting development, ensuring steady progress in the new era. Currently, more city chapters are in active preparation, and we look forward to collaborating with more like-minded entrepreneurs, pooling wisdom and resources, to jointly paint a new blueprint for Chinese business power on the global stage.",
      "Uniting global Chinese power · Building a Canada-China cooperation platform",
      "CESC was registered in 2003 and has been established for over 20 years. We have gathered over a hundred member enterprises, covering various industries such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are dedicated to building a high-end business platform for resource sharing and collaborative success. By joining us, you will gain first-hand industry information, policy interpretations, legal and tax consultations, priority access to investment opportunities, and expanded high-end networks. Furthermore, you can participate in business delegations, industry summits, festive galas, and other high-end events, seizing opportunities in the global market and exploring limitless possibilities! Join now, walk with elites, and create a brilliant future!",
    ],
  },
  {
    slug: "zhang-jian-sales-masterclass",
    title: "CESC Delegates Attend Zhang Jian's Practical Seminar, Gaining Insights into Sales Power in a Changing Era",
    category: "Enterprise Visit",
    date: "June 1, 2025",
    image: newsZhangJian,
    excerpt:
      "In the rapidly evolving landscape of AI, sales transcend mere technique, demanding a profound understanding of \"human nature,\" \"trust,\" and \"value\" to succeed now and in the future.",
    body: [
      "In the rapidly developing wave of AI technology, sales is no longer just a stack of techniques, but a deep understanding of “human nature,” “trust,” and “value.” On May 28, 2025, representatives from the Canadian Entrepreneurs & Startups Council (CESC) gathered in Vancouver to attend a high-level seminar titled “Winning in the AI Era with Sales Mindset,” lectured by Mr. Zhang Jian. This was a wisdom feast with insights into trends and mind-enlightenment, and moreover, an in-depth practical lesson on how to be people-centric and win in the future.",
      "People-Centric, Intellectually Winning the Future – Reflections on CESC Attending Mr. Zhang Jian’s Seminar “Winning in the AI Era with Sales Mindset”",
      "On May 28, a delegation of entrepreneurs from the Canadian Entrepreneurs & Startups Council (CESC) was invited to attend a themed seminar, “Winning in the AI Era with Sales Mindset,” hosted by Grizzly Bear Institute and lectured by sales strategy master Mr. Zhang Jian. This seminar was grandly held in Vancouver, attracting executives, sales elites, and entrepreneurs from various industries to participate.",
      "Mr. Zhang Jian, former Vice President of Cisco China and General Manager of HP’s Government Business Unit, possesses 30 years of practical experience in large account sales. With humorous language, rigorous logical systems, and practical case studies, he deeply analyzed how corporate sales teams can return to the essence of “human nature,” build trust mechanisms, and leverage AI tools to achieve a leap in sales conversion efficiency in the rapidly transforming era of artificial intelligence.",
      "Mr. Zhang proposed: “Technology can change tools, but it can never replace the human heart.” This view resonated widely among the attendees. We profoundly realized that future sales will no longer be mere “rhetorical competitions,” but rather “mindset first, tactics auxiliary,” especially in negotiations with complex high-value clients, where trust, resonance, and value alignment are the keys to successful deals.",
      "During the interactive session, CESC entrepreneurs actively asked questions and engaged in in-depth discussions with Mr. Zhang on popular topics such as “how AI empowers traditional sales management,” “how high-end clients make decisions,” and “how to build a personal brand.” The atmosphere was lively, and ideas flowed freely.",
      "Through this seminar, members of the association not only gained valuable practical sales experience but also saw new directions for business models in the AI era. We also deeply feel that an entrepreneurial community full of trust, learning, and sharing spirit is a strong backing for every entrepreneur to continuously advance.",
      "The Canadian Entrepreneurs & Startups Council will continue to connect high-quality resources, promote intellectual exchange, empower member growth, and help everyone stay clear-headed and vigilant in changing times, winning the future with wisdom and action!",
      "The Canadian Entrepreneurs & Startups Council was registered in 2003. With over 20 years of history, we have gathered over a hundred member companies, covering various industries such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are committed to building a high-end business platform for resource sharing and win-win cooperation. Join us, and you will gain first-hand industry information, policy interpretations, legal and tax consulting, and priority access to investment opportunities, expanding your high-end network. Additionally, you can participate in business study tours, industry summits, festive galas, and other high-end events to seize opportunities in the global market and explore unlimited possibilities! Join now, walk with elites, and create a brilliant future together!",
    ],
  },
  {
    slug: "fairbrothers-fw-visit",
    title: "CESC Visit Report | Exploring FAIRBROTHERS FW: Witnessing the Solid Strength of Chinese Enterprises",
    category: "Enterprise Visit",
    date: "May 24, 2025",
    image: newsFairbrothers,
    excerpt:
      "CESC recently visited its member company, FAIRBROTHERS FORMWORK, in Richmond, delving into its deep roots in the construction industry and showcasing the innovative spirit of Chinese enterprises.",
    body: [
      "Recently, CESC visited its member company, FAIRBROTHERS FORMWORK, in Richmond, exploring its deep footprint in the construction sector. From concrete formwork engineering to scaffolding steel bars, and the supply and pouring of concrete, how does this young enterprise interpret the striving spirit of Chinese businesses with professionalism and innovation?",
      "Established in Richmond in 2021, FAIRBROTHERS FORMWORK has rapidly grown into a significant player in the local construction industry with its core focus on concrete formwork engineering. From underground car parks to mid-to-high-rise buildings, the company precisely targets market demand, establishing a complete service chain that includes formwork system selection, detailed design, system stress analysis, material supply, and installation. Its supply chain advantage, covering a fully modular system, is particularly favored by developers, as it enhances construction efficiency and reduces project costs, demonstrating a profound understanding of industry pain points.",
      "In the highly competitive Greater Vancouver construction market, FAIRBROTHERS FORMWORK stands out through its specialized positioning. The company particularly emphasizes combining advanced material systems with actual project needs; matching high technical standards with schedule savings; and balancing efficient management concepts with local team experience. All projects are overseen by a professional team of engineers. This “technology-first, efficient and pragmatic” philosophy has enabled it to successfully undertake multiple high-quality landmark projects, becoming a designated partner for several general contractors and developers.",
      "The entrepreneurial story of Managing Director Eric Wu exemplifies the practical spirit of Chinese entrepreneurs. With 20 years of rich industry experience in high-rise building construction, he keenly identified a market gap for Chinese formwork teams in the construction management of high-rise concrete building main structures. He led his team to build a management and technical system from scratch. To overcome local industry barriers, he introduced international engineering management standards while strengthening employee skills training. In just three years, he built a professional team of over 50 people, all with high-rise construction management backgrounds, who are highly capable and ready to tackle tough challenges.",
      "During the visit and exchange, Eric particularly emphasized that “reliable delivery capability” is the foundation of the company. By establishing a 24/7 efficient response mechanism, implementing pre-planned projects, and full-cycle digital tracking, FAIRBROTHERS has significantly reduced the average project duration by 15%. Client repurchase rate and satisfaction are as high as 82%, and the company has gradually built a good reputation and excellent credibility in the local Western contractor market, proving its service quality with data.",
      "This CESC visit focused on resource matching and experience sharing. During the symposium, both parties discussed issues such as labor shortages and technological upgrades in the construction industry. The “joint vocational training program for technicians” proposed by FAIRBROTHERS received enthusiastic responses.",
      "President Li of the association pointed out that the deep cultivation of Chinese enterprises in niche sectors deserves more recognition in the mainstream market. In the future, CESC will assist member units like FAIRBROTHERS in building brand influence and jointly promoting the standardization of the construction industry through methods such as releasing industry white papers and holding technical salons.",
      "At FAIRBROTHERS construction sites, every project has professional safety management manuals and operating procedures, and hard hats are printed with bilingual English and Chinese emergency guidelines. This detail reflects the company's emphasis on safety culture. The company's tiered safety inspection system requires project managers and on-site management teams to submit visualized reports daily, maintaining a record of zero major accidents for three years.",
      "To ensure service reliability, the company has established the first self-owned formwork engineering emergency reserve warehouse on the Canadian West Coast, ensuring the efficient supply of formwork systems. As the company undertakes increasingly larger and taller building projects, its service advantage in the supply chain and strong back-end technical support become more apparent, laying a solid foundation for the company's long-term sustainable and high-quality development. When a project encountered extreme weather causing formwork damage, the reserve mechanism enabled material allocation within 12 hours, preventing millions of Canadian dollars in schedule losses for clients. This case has now become an industry benchmark for emergency management.",
      "Facing the trend of green building, FAIRBROTHERS is collaborating with relevant partners to research and develop composite formwork, including high-strength steel and carbon fiber new materials. The use of these new materials will significantly reduce the weight of formwork by 35% while increasing its strength twofold. It is expected to be piloted in projects in the near future. Concurrently, the company plans to expand into precast concrete business, creating a one-stop comprehensive solution for formwork + rebar + concrete engineering.",
      "CESC disclosed that it would assist the company in applying for provincial technology innovation funds and promote the establishment of joint laboratories with universities. As Eric said in the interview: “We not only want to do well in projects within the Chinese community but also become an indispensable professional force in the Canadian construction industry.” This vision is gradually being realized in every precisely calculated engineering drawing.",
      "CESC was registered in 2003, and over its 20-plus years of establishment, we have gathered over a hundred member enterprises covering various industries such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are dedicated to building a high-end business platform for resource sharing and win-win cooperation. By joining us, you will receive first-hand industry information, policy interpretations, legal and tax consultations, and priority access to investment opportunities and high-end networking. Additionally, you can participate in business study tours, industry summits, festive dinners, and other high-end events, seizing opportunities in the global market and expanding unlimited possibilities! Join now, associate with elites, and create a brilliant future together!",
    ],
  },
  {
    slug: "los-beans-enterprise-visit",
    title: "Company Visit --- Exploring Los Beans: The Sustainable Philosophy and Brand Depth Behind a Cup of Coffee",
    category: "Enterprise Visit",
    date: "April 19, 2025",
    image: newsLosBeans,
    excerpt:
      "CESC members visited the Los Beans roasting factory in Delta, British Columbia, uncovering the brand’s dedication to fair trade, sustainability, and ethical business practices.",
    body: [
      "Coffee & Sustainability",
      "Under the warm spring sun, a delegation from CESC visited the Los Beans roasting factory in Delta, British Columbia, Canada. This was not merely a sensory experience of coffee, but also a profound learning journey into the brand's soul and its operational philosophy.",
      "Los Beans is a coffee brand under Delta Coffee Works, focusing on fair trade and sustainable principles. Its beans primarily originate from high-altitude regions such as Chiapas and Oaxaca in Mexico, cultivated organically and in an environmentally friendly manner. The brand firmly believes that only by respecting the land and workers can truly soulful coffee be produced.",
      "Upon entering the factory, the aroma of roasting coffee permeated the air. The entire operation process was orderly, from raw bean inspection and roasting control to packaging and shipping; every step revealed professionalism and meticulousness. Los Beans utilizes professional roasting equipment to preserve the flavor layers and regional characteristics of each batch of coffee beans.",
      "Sustainability is not just a slogan, but the core of the brand's actions.",
      "Los Beans' guiding principle, \"Do the right thing, because it's the right thing to do,\" is not just a slogan but is woven into every detail of the company's operations.",
      "The brand works with local small-scale farmers over the long term, ensuring fair compensation and good working conditions, and participates in community development initiatives such as school construction and jungle restoration. Additionally, carbon emissions and packaging waste are minimized during the roasting and packaging processes, demonstrating the brand's profound commitment to society and the planet.",
      "This business model offers new insights for business operators like us – \"sustainability\" is no longer an appendage to ESG (Environmental, Social, and Governance), but rather a core culture that can be transformed into brand competitiveness.",
      "As part of the Delta Coffee Works brand matrix, Los Beans does not pursue large-scale mass production but focuses on building a boutique coffee brand with warmth and philosophy. Compared to Pacific Coffee Roasters (which targets commercial channels) and Best Gourmet Coffee (which caters to the mass market), Los Beans embodies the \"social value\" symbol of the brand, offering the market a choice with more depth and emotional connection.",
      "This strategic combination also makes us reconsider: the value of a brand lies not only in its products but also in the ideals it chooses to represent.",
      "We savored Los Beans' selected representative coffees, experiencing the fruit acidity and nutty aroma from the high-altitude lands, pure in flavor and layered. Through the warm aroma emanating from the cup, we felt the brand's dedication to raw bean quality and roasting craftsmanship.",
      "Each cup showcased the pure characteristics from high-altitude regions, as if narrating the deep connection between the land and its people. This was not just a taste experience, but it also allowed us to perceive the brand philosophy and values that Los Beans upholds.",
      "The visit to Los Beans left us deeply impressed: in a highly competitive consumer market, the brands that endure are often not the loudest, but those with the most soul.",
      "A good cup of coffee is a choice; a good brand is the steadfast adherence to a belief.",
      "Los Beans shows us through its tangible actions that businesses can be part of changing the world, and in doing so, achieve truly long-term value.",
      "CESC was registered in 2003, and over its 20-plus years of establishment, we have gathered over a hundred member enterprises covering various industries such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are dedicated to building a high-end business platform for resource sharing and win-win cooperation. By joining us, you will receive first-hand industry information, policy interpretations, legal and tax consultations, and priority access to investment opportunities and high-end networking. Additionally, you can participate in business study tours, industry summits, festive dinners, and other high-end events, seizing opportunities in the global market and expanding unlimited possibilities! Join now, associate with elites, and create a brilliant future together!",
    ],
  },
  {
    slug: "2025-mexico-investment-summit-recap",
    title: "Connecting North American Business Opportunities | Mexico Trade and Investment Summit, Empowering Enterprises for Global Expansion!",
    category: "International Collaboration",
    date: "March 13, 2025",
    image: newsEventMexico,
    excerpt:
      "CESC members were invited to a market information seminar on \"Mexico Trade and Investment Opportunities,\" co-hosted by the Consulate General of Mexico in Vancouver and the Government of British Columbia, which concluded successfully at the World Trade Centre.",
    body: [
      "The World Trade Centre Vancouver extended an invitation to members of CESC to attend a market information seminar on “Mexico Trade and Investment Opportunities,” jointly organized by the Consulate General of Mexico in Vancouver and the Government of British Columbia. The event concluded successfully at the World Trade Centre. This event attracted numerous entrepreneurs eager to explore business cooperation models between Canada and Mexico, providing valuable insights and strategies for enterprises seeking to expand into the North American market.",
      "As the world's 15th largest economy, Mexico, with its strong market demand, robust trade infrastructure, and close economic ties with Canada, has become an important choice for businesses looking to expand. Since the enforcement of the United States-Mexico-Canada Agreement (USMCA), it has become easier for Canadian enterprises to enter the Mexican market. Businesses can leverage free trade policies to reduce tariff costs and enhance product competitiveness.",
      "(E-Commerce & Digital Presence)",
      "Businesses can directly reach Mexican consumers through cross-border e-commerce, digital marketing, and social media advertising.",
      "(Commercial Representation)",
      "Establishing a representative office can foster client relationships and enhance brand influence.",
      "Leverage the network of local distributors to accelerate market penetration.",
      "Companies can authorize Mexican firms to use their brands and technologies to mitigate investment risks.",
      "Expand the market rapidly and enhance brand recognition through franchising models.",
      "(Strategic Alliances)",
      "Establish partnerships with local enterprises to share resources and market information.",
      "(Joint Ventures)",
      "(Mergers & Acquisitions, M&A)",
      "Acquire or merge with Mexican companies to accelerate market expansion.",
      "(Wholly Owned Subsidiaries)",
      "Enterprises can establish wholly owned subsidiaries to gain full control over local business operations.",
      "(Strategic Outsourcing & Offshoring)",
      "Reduce costs and improve operational efficiency through outsourcing.",
      "Tax and Legal Challenges – How Should Enterprises Respond?",
      "Experts emphasize that when entering the Mexican market, enterprises need to pay special attention to language barriers, partner selection, and the local tax and legal systems:",
      "It is recommended to hire professional consultants who are familiar with local culture and laws to ensure smooth communication.",
      "Enterprises should conduct thorough due diligence to ensure cooperation with trustworthy partners.",
      "Enterprises need to be familiar with Mexico's financial and tax regulations to avoid legal risks.",
      "This seminar provided participants with deep insights into the opportunities and challenges of the Mexican market. Many entrepreneurs expressed significant gains and confidence in future business expansion in Mexico.",
      "CESC will continue to share more trade and investment-related events and seminars, providing the latest market information and development opportunities for Chinese entrepreneurs. Please follow our official account for more business updates!",
      "CESC Welcomes Your Membership",
      "Registered in 2003, CESC has been established for over 20 years. We have gathered over a hundred member enterprises, covering various sectors such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are dedicated to building a high-end business platform for resource sharing and win-win cooperation. By joining us, you will gain first-hand industry information, policy interpretations, legal and tax consultations, priority access to investment opportunities, and expanded high-end professional networks. Furthermore, you can participate in business study tours, industry summits, festive dinners, and other high-end events to seize opportunities in the global market and explore unlimited possibilities! Join us now to walk with elites and create a glorious future!",
    ],
  },
  {
    slug: "10th-secretariat-introduction",
    title: "New Strength, New Journey — A Look at the 10th Secretariat of the Canadian Entrepreneurs & Startups Council",
    category: "Association Activity",
    date: "February 19, 2025",
    image: newsSecretariatIntro,
    excerpt:
      "The 10th Secretariat of the Canadian Entrepreneurs & Startups Council comprises a new team dedicated to enhancing operations, fostering member engagement and collaboration, and expanding the association’s influence.",
    body: [
      "Members of the 10th new Secretariat of the Canadian Entrepreneurs & Startups Council",
      "The Secretariat of the Canadian Entrepreneurs & Startups Council is mainly responsible for the daily operations and administrative affairs of the association. Its work includes organizing meetings, coordinating member activities, handling documents and financial management, maintaining member relations, and facilitating business matchmaking. The Secretariat is also responsible for external liaison, establishing cooperative relationships with government agencies, chambers of commerce, and partners to promote the influence of Chinese entrepreneurs in Canada. In addition, the Secretariat manages the association's publicity and promotion, maintains the official website and social media, publishes industry information, and provides policy interpretations and business consulting services for members, ensuring efficient operation of the association and assisting in the development of Chinese enterprises.",
      "As a resource integrator in the North American business community, he serves as the 10th Secretary-General of the Canadian Entrepreneurs & Startups Council. His professional capabilities and rich experience in resource integration will effectively coordinate and support the association's internal operations and external cooperation.",
      "The association's new leadership team will actively play its role as a bridge and link, promoting communication and cooperation among association members and advancing the smooth progress of various association tasks. We believe that with their efforts, the association's resource integration will be more efficient, providing a solid guarantee for the association's development.",
      "Alysa Chen, Deputy Secretary-General",
      "General Manager of Canadian United Investment Company and Regional Manager of Sheer Room Second-hand Luxury Goods, possessing rich experience in team management, sales strategy, and market growth, with deep roots in boutique retail, finance, high-end services, and the grand health industry. Specializes in building efficient operational systems, creating excellent sales teams, deepening customer relationships, and precisely positioning markets. Dedicated to promoting continuous business development and expanding industry influence through outstanding performance growth and market competitiveness.",
      "Patrick Pan, Deputy Secretary-General",
      "Marketing Director of JK World Group, a well-known local golf group in Vancouver, with educational backgrounds from the UK, US, and Canada. Proficient in market strategy, brand influence, and public relations operations. Possesses a global perspective and localized practical experience, focusing on promoting market expansion and brand building in the high-end sports industry, creating competitive marketing solutions for businesses, and fostering cross-industry cooperation and business growth.",
      "Currently serving as Bayou Winery Manager, responsible for label design and in-plant management, specializing in product design. Has won design concept awards at the Malaysia International Invention Exhibition. Skilled at integrating creativity with aesthetics to create products that are both practical and uniquely stylish. At the same time, deeply involved in the mind-body-spirit industry, dedicated to combining aesthetics with energy healing to create artistic and healing products. Hopes to inject the combination of aesthetics and healing into the association through an innovative perspective, enhancing the association's cultural depth and richness.",
      "Sylvia Lin, Secretary",
      "CEO of LZL Industrial Development Ltd., with extensive experience in engineering management and international trade, specializing in construction, earthwork, and demolition. Additionally, has accumulated profound experience in international trade and platform promotion, adept at resource integration and efficient collaboration. Drives continuous enterprise development with keen market insights and excellent execution, providing strong support for the association's development and internal operations.",
      "Anastasia Liu, Secretary",
      "A member of the Canadian Entrepreneurs & Startups Council Secretariat, holds a Bachelor's degree from UBC and a Master's from UCL, currently practicing at a law firm in Vancouver, specializing in corporate law, family law, and real estate law. Known for efficient execution and teamwork, also possesses media planning and bilingual hosting abilities. Enthusiastic about connecting community resources, committed to promoting innovative development of the association with professional expertise and cross-disciplinary experience, and assisting members in achieving win-win cooperation.",
      "A financial planner with ten years of experience typically possesses a profound professional background in wealth management, investment portfolio optimization, tax planning, and retirement planning. By assessing clients' financial status, risk tolerance, and long-term goals, they develop personalized financial plans to help clients achieve financial freedom and wealth accumulation while managing risk. Additionally, she is an experienced charity organizer with rich experience in public welfare projects and is well-versed in driving social welfare and change through effective resource management, fundraising, and social influence.",
      "The Canadian Entrepreneurs & Startups Council Welcomes Your Joining",
      "The Canadian Entrepreneurs & Startups Council was registered in 2003. With over 20 years of history, we have gathered over a hundred member companies, covering various industries such as biotechnology, IT, new energy, fashion and beauty, finance, trade, and real estate. We are committed to building a high-end business platform for resource sharing and win-win cooperation. Join us, and you will gain first-hand industry information, policy interpretations, legal and tax consulting, and priority access to investment opportunities, expanding your high-end network. Additionally, you can participate in business study tours, industry summits, festive galas, and other high-end events to seize opportunities in the global market and explore unlimited possibilities! Join now, walk with elites, and create a brilliant future together!",
    ],
  },
  {
    slug: "2025-cesc-annual-gala-recap",
    title: "CESC 2025 Annual Gala Successfully Held",
    category: "Signature Event",
    date: "February 4, 2025",
    image: newsEventGala,
    excerpt:
      "The CESC 2025 Annual Gala successfully brought together global entrepreneurs and investors to discuss new opportunities in international capital cooperation and promote the deeper development of Chinese enterprises in the global market.",
    body: [
      "CESC 2025 Annual Gala Successfully Held",
      "Capital Empowerment · Collaborative Win-Win, Charting a New Chapter of Development",
      "On February 2, 2025, the CESC Annual Gala, themed \"Capital Empowerment, Collaborative Win-Win,\" concluded successfully in a vibrant atmosphere! This conference convened entrepreneurs, investors, and elites from various sectors worldwide to jointly explore new opportunities in international capital cooperation and promote the deep development of Chinese enterprises in the global market.",
      "During the internal member exchange meeting in the afternoon, Mr. Song Xianghou, the Founding President of the association, delivered an important speech. He reviewed the association's development history and emphasized its significance as a platform, providing member enterprises with opportunities for resource matching, market expansion, and capital cooperation, enabling genuine mutual support and collaborative success.",
      "Subsequently, the conference completed the important handover ceremony, where Mr. Guo Zhiyong, the 9th President, officially transferred the association's affairs to Mr. Li Guochao, the 10th President, and the new board of directors. The new leadership team was formally appointed, and the Vice President and Secretary General teams made a collective appearance, marking the association's embarkation on a new journey towards a higher stage of development.",
      "Distinguished Guests Gather, Capital Wisdom Propels Enterprises to Soar",
      "This conference specially invited Mr. Guo Yafu, a seasoned Wall Street investment expert, as a guest speaker. With his profound industry experience, he delivered an insightful keynote speech. Mr. Guo deeply analyzed global capital market trends and offered unique perspectives on how Chinese enterprises can effectively utilize capital tools to achieve cross-border investment, mergers and acquisitions, and listings.",
      "Furthermore, Mr. Yuan Haiyang, founder of American Grape Solar and President of the US-China Photovoltaic Association, also attended in person. He shared insights into the future prospects of sustainable energy and discussed how to promote innovation and cooperation in the new energy industry through capital markets.",
      "During the conference, the association officially appointed Pan Xiaoxia (Lawrence Pan Xiaoxia) and Guo Yafu as mentors for CESC. The two mentors will leverage their advantages in international capital markets to provide more precise investment and financing guidance to member enterprises, assisting the globalization of Chinese enterprises.",
      "Deep Cooperation, Aiding Member Enterprises in Entering Wall Street",
      "One of the highlights of this conference was the signing of a letter of intent for cooperation between CESC member enterprise Canadian DDL Game and New York Skybound Capital Management. The two parties reached a strategic cooperation, embarking on a journey to enter the Wall Street capital market. This cooperation marks a significant step for the association in promoting the capitalization process of its member enterprises and offers new opportunities for Chinese enterprises to expand into international capital markets.",
      "During the afternoon's internal member exchange session, the association fully leveraged its platform role, encouraging member enterprises to showcase their products, business models, and innovative achievements. Entrepreneurs engaged in in-depth discussions on industry development trends, technological innovation, and capital operations, fostering cooperation and deepening understanding, laying a solid foundation for future business collaborations. This session not only demonstrated the diversified development of member enterprises but also further reinforced the association's role as a bridge for resource sharing and collaborative win-win outcomes.",
      "The association will continue to be committed to providing efficient business resource matching for members, helping enterprises expand markets, enhance competitiveness, and seize new opportunities in global competition.",
      "Congratulations from Multiple Countries' Political and Business Circles, Gala Showcases International Influence",
      "In 2025, CESC, with a more open and pragmatic attitude, gathers global capital power to create a broader international stage for Chinese enterprises. In the future, the association will continue to deepen resource integration, assist member enterprises in achieving global development, and jointly write a new chapter of Chinese business! We thank all guests and member enterprises for their active participation, and we look forward to meeting again next year!",
      "Thank you to all the guests and member enterprises for your active participation, and we look forward to reuniting next year!",
      "CESC Welcomes Your Membership",
      "CESC was registered in 2003, and it has over 130 officially registered member enterprises. These enterprises cover various industries such as biotechnology, medicine, IT, IoT, new energy, environmental protection, metallurgy, mining, real estate, logistics, warehousing, trade, agriculture, winemaking, finance, insurance, tourism, and education. This diverse membership provides the association with rich resources and broad opportunities for cooperation. Through the association's platform, members can fully utilize each other's advantages in geographical location, network, technology, management, and capital to achieve cross-regional and cross-industry cooperation. We welcome more entrepreneurs to join CESC and work together to explore and innovate for mutual success.",
    ],
  },
  {
    slug: "10th-term-general-assembly",
    title: "The 10th General Assembly of the Canadian Entrepreneurs & Startups Council Successfully Held",
    category: "Association Activity",
    date: "January 27, 2025",
    image: newsAssembly,
    excerpt:
      "The 10th General Assembly of the Canadian Entrepreneurs & Startups Council was successfully held, with a new leadership team set to guide the association into a new phase of development.",
    body: [
      "The 10th General Assembly of the Canadian Entrepreneurs & Startups Council (CESC) was successfully held, and the new leadership team will lead the association into a new stage of development. Let's learn more about the details of this transition.",
      "elected as the 10th President of the Canadian Entrepreneurs & Startups Council. He possesses rich experience in resource integration and has涉猎 (involved in) various fields such as grand health, international trade, and international real estate. President Li Guochao's outstanding talent and extensive experience will undoubtedly bring new vitality and opportunities to the association's development. He will leverage his professional knowledge and extensive network to integrate various resources, driving the association to achieve more significant accomplishments in all fields.",
      "We believe that under the leadership of President Li Guochao, the Canadian Entrepreneurs & Startups Council will play an even more crucial role in promoting economic exchange and cooperation between Canada and China. He will actively lead member enterprises to expand markets, strengthen cooperation with various sectors, and create more development opportunities for member enterprises, jointly writing a new chapter in the association's development.",
      "David Tan, Vice President",
      "has demonstrated outstanding performance in the grand health industry, and his involvement will provide strong support and guidance for the association's development in this area.",
      "focuses on the digital entertainment industry, bringing new development ideas and opportunities to the association, helping to open new ground in the digital entertainment sector.",
      "has deep roots in the North American automotive and energy storage industries, and his experience and insights will actively promote the association's development in related industries.",
      "Jessie Xiao, Vice President",
      "As an investor, she is involved in multiple fields including international real estate, import and export trade, second-hand luxury goods, grand health, catering, and liquor. Her diversified background will bring more possibilities to the association's development.",
      "Founder and investor of a high-tech enterprise, an ESG advocate, specializing in new energy, innovative technology, and financial investment, with rich experience. Enthusiastic about public welfare, she has long served community organizations and will play an important role in the association's development in emerging industries.",
      "Jiantian Cui, Vice President",
      "Focuses on family wealth inheritance, international trust planning, tax optimization, and dividend insurance design. Provides holding structures and investment and financing solutions for entrepreneurs; assists families in creating high-quality education plans to cultivate new generations of influential elites.",
      "Bowen Liu, Vice President",
      "Specializing in financial investment, with rich financial knowledge and keen industry insights, he assists the association in establishing investment and financing channels, working with member enterprises for mutual development and success.",
      "As a resource integrator in the North American business community, he serves as the 10th Secretary-General of the Canadian Entrepreneurs & Startups Council. His professional capabilities and rich experience in resource integration will effectively coordinate and support the association's internal operations and external cooperation.",
      "The association's new leadership team will actively play its role as a bridge and link, promoting communication and cooperation among association members and advancing the smooth progress of various association tasks. We believe that with their efforts, the association's resource integration will be more efficient, providing a solid guarantee for the association's development.",
      "Lawrence X. Pan",
      "Mr. Lawrence X. Pan is a founding partner of CITIC Shengquan Fund. He previously served as the Chief Representative for China at NASDAQ, NASDAQ's official spokesperson, Managing Director for Asia Pacific, and President for China. During his tenure at NASDAQ, he led over 30 Chinese companies, including Baidu, Focus Media, and Home Inns, to list on NASDAQ, achieving a total IPO financing of 5.3 billion USD and a peak market capitalization exceeding 1 trillion USD. Mr. Pan also held senior positions in Morgan Stanley's China department for many years. Mr. Lawrence X. Pan is a senior advisor to China’s State-owned Assets Supervision and Administration Commission, an invited advisor to the Growth Enterprise Market of the China Securities Regulatory Commission, a perennial invited senior advisor to Tsinghua Science Park, and an invited mentor for the Tsinghua University Entrepreneur Training Camp. Mr. Lawrence X. Pan possesses extensive experience in the securities and futures industries. He previously held senior positions in Morgan Stanley's corporate finance and asset management departments, providing targeted consulting services for companies and banks across various industries to access the U.S. capital markets.",
      "YAFU GUO, Mentor of the Canadian Entrepreneurs & Startups Council",
      "A seasoned investment expert from Wall Street and founder of TJ Capital Management in New York, he possesses 30 years of experience in Wall Street investment and financing, having worked as a trader, market maker, and hedge fund manager. He has long provided fund management services for high-net-worth individuals and institutional investors and financing advisory services for listed companies. He is the author of \"The Combined Investment Method for Stocks\" and \"Guide to the U.S. Securities Market.\" Since 2004, he has served as a special commentator on U.S. stocks for financial columns such as Phoenix Satellite Television in Hong Kong and is often a keynote speaker at major investment seminars.",
      "The Canadian Entrepreneurs & Startups Council Welcomes Your Joining",
      "The Canadian Entrepreneurs & Startups Council was registered in 2003, and has over 130 formally registered member enterprises. These enterprises cover various industries, including biotechnology, pharmaceuticals, IT, IoT, new energy, environmental protection, metallurgy, mining, real estate, logistics, warehousing, trade, agriculture, winemaking, finance, insurance, and tourism. This diverse membership provides the association with abundant resources and extensive cooperation opportunities. Through the association's platform, members can fully leverage their respective advantages in geography, networks, technology, management, and capital to achieve cross-regional and cross-industry cooperation. We welcome more entrepreneurial friends to join the Canadian Entrepreneurs & Startups Council to work together and achieve innovative win-win outcomes.",
    ],
  },
  {
    slug: "cesc-visits-morocco-honorary-consul",
    title: "Deepening Business Cooperation, Creating a Win-Win Future – CESC Visits the Honorary Consul of the Kingdom of Morocco",
    category: "Diplomatic Exchange",
    date: "January 13, 2025",
    image: newsMorocco,
    excerpt:
      "On December 19, 2024, CESC was invited to visit Ms. Christa Kucey, the Honorary Consul of the Kingdom of Morocco in Vancouver, marking a significant milestone in cross-border exchanges.",
    body: [
      "On December 19, 2024, CESC was invited to visit Ms. Christa Kucey, the Honorary Consul of the Kingdom of Morocco in Vancouver. This important meeting became a major event in year-end cross-border exchange, which not only enhanced the friendly relationship between the two sides but also opened up new, significant opportunities for business cooperation between Canadian and Moroccan enterprises.",
      "During the meeting, Consul General Christa Kucey elaborated on Morocco’s significant advantages and immense potential across various sectors.",
      "Firstly, in the jewelry and handicrafts sector, Moroccan jewelry designs feature exotic styles that blend traditional craftsmanship with modern concepts, highly favored by global consumers. Secondly, in energy and renewable resources, Morocco leads Africa in green energy, with its solar and wind power technologies being world-leading, setting an example for global sustainable development. Furthermore, in terms of import and export trade, Morocco, as a key hub connecting Europe, Africa, and the Middle East, holds a crucial position in international trade. Its well-developed infrastructure and policy support create an ideal investment environment for multinational corporations. Additionally, Morocco’s medical and healthcare industry is developing rapidly, offering new opportunities for international cooperation.",
      "This meeting symbolizes a new stage in business exchange between Canada and Morocco, laying a solid foundation for in-depth cooperation between enterprises. Morocco, with its crucial geopolitical advantages connecting Asia, Africa, Europe, and America, as well as its diversified economic characteristics, offers broad development prospects for Canadian enterprises. As an important platform for Canadian Chinese entrepreneurs, CESC will steadfastly promote bilateral business matching and cultural exchange.",
      "CESC will continue its efforts to facilitate business cooperation between Canada and various countries, building a broader platform for resource sharing. Morocco, a country full of opportunities, is expected to become a key springboard for more Canadian entrepreneurs entering the international market. This significant business exchange event has strongly enhanced the friendly relations between Canada and Morocco, injecting powerful momentum for entrepreneurs to explore new opportunities. We eagerly anticipate witnessing more fruitful cooperative outcomes in the future, enabling Canadian and Moroccan enterprises to join hands and build a brilliant future together!",
      "CESC welcomes you to join",
      "CESC was registered and established in 2003, with over 130 formally registered member enterprises. These enterprises cover various industries such as biotechnology, medicine, IT, IoT, new energy, environmental protection, metallurgy, mining, real estate, logistics, warehousing, trade, agriculture, brewing, finance, insurance, tourism, and education. This diversified membership structure provides the association with rich resources and extensive cooperation opportunities. Through the association's platform, members can fully utilize each other's advantages in geography, networks, technology, management, and capital to achieve cross-regional and cross-industry cooperation. We welcome more entrepreneurs and friends to join CESC, work together to explore, innovate, and achieve win-win results.",
    ],
  },
  {
    slug: "cesc-visits-uk-consulate-vancouver",
    title: "CESC Invited to Visit the British Consulate General in Vancouver to Discuss Business Opportunities and Cooperation",
    category: "Diplomatic Exchange",
    date: "December 19, 2024",
    image: newsUk,
    excerpt:
      "In a significant business exchange, CESC was invited to the British Consulate General in Vancouver on December 17, 2024, to explore opportunities for Canadian enterprises in the UK market.",
    body: [
      "Opportunities for Canadian Enterprises in the UK",
      "In the context of global economic integration, inter-enterprise communication and cooperation are becoming increasingly frequent. On December 17, 2024, CESC, the Canadian Entrepreneurs & Startups Council, was invited to visit the British Consulate General in Vancouver for a significant business exchange, opening new opportunities for Canadian enterprises to expand into the UK market.",
      "As one of the world's largest economies, the UK possesses a substantial and robust economic scale. The newly elected government actively encourages exports and investments from overseas enterprises, for which it has improved relevant investment support mechanisms to help overseas enterprises successfully choose partners. The UK boasts one of the best corporate tax systems globally, which reduces operational costs for businesses and enhances market competitiveness. Concurrently, multiple departments collaborate to provide comprehensive support for foreign-funded enterprises to conduct business smoothly, helping to resolve issues such as regulation.",
      "To help interested enterprises better understand and integrate into the UK market, Consul General Thomas Codrington recommended using the “Expand Your Business” online platform to find local partners and explore market scope. This platform undoubtedly provides a convenient and efficient channel for enterprises, helping them quickly adapt to the UK market environment and seize business opportunities.",
      "For Canadian enterprises, entering the UK market has two viable routes: export and investment. Exporting enterprises can receive dual support from the Canadian government and British trade commissioner services, which provides a strong guarantee for products to successfully enter the UK market. Investing enterprises can achieve market layout by acquiring UK companies or manufacturing products locally in the UK, thereby better integrating into the local industrial chain and enhancing the enterprise's influence.",
      "In the field of sustainable development, the UK market shows broad development prospects. Especially in areas such as green energy, the market is dynamic and flexible with strong demand, making it suitable for foreign-funded enterprises to showcase their capabilities. The UK government has introduced market-based mechanisms, providing corresponding subsidies to enterprises capable of producing green electricity, which incentivizes innovation and development. Furthermore, the real estate investment environment is relatively open, with no additional buyer taxes, but it requires compliance with source of funds regulations, providing a relatively relaxed investment environment for investors.",
      "The UK and Canada have signed a free trade agreement, achieving 99% tariff-free goods, which has greatly promoted the development of bilateral trade. Recently, the UK joined the CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership), further providing Canadian enterprises with a broader trading platform and expanding market space.",
      "As one of the main destinations for global foreign investment, the UK's new government is committed to promoting regional economic development, especially in London and the Southeast regions, where policy support is more evident. This provides more opportunities and choices for Canadian enterprises in the UK, helping them achieve greater commercial value.",
      "CESC welcomes you to join",
      "CESC was registered and established in 2003, with over 130 formally registered member enterprises. These enterprises cover various industries such as biotechnology, medicine, IT, IoT, new energy, environmental protection, metallurgy, mining, real estate, logistics, warehousing, trade, agriculture, brewing, finance, insurance, tourism, and education. This diversified membership structure provides the association with rich resources and extensive cooperation opportunities. Through the association's platform, members can fully utilize each other's advantages in geography, networks, technology, management, and capital to achieve cross-regional and cross-industry cooperation. We welcome more entrepreneurs and friends to join CESC, work together to explore, innovate, and achieve win-win results.",
    ],
  },
  {
    slug: "cesc-sco-trade-center-collaboration",
    title: "Deepening Global Cooperation: CESC and SCO Trade and Economic Cooperation Center Charting a New Blueprint for International Economic and Trade Exchanges",
    category: "International Collaboration",
    date: "December 7, 2024",
    image: newsSco,
    excerpt:
      "CESC and the Shanghai Cooperation Organization Trade and Economic Cooperation Center in Dalian recently met to usher in a new era of China-Canada economic and trade collaboration, focusing on resource integration and joint development plans.",
    body: [
      "New Cooperation in Economy and Trade",
      "Against the backdrop of global economic integration, international economic and trade cooperation is becoming increasingly important. Recently, a meeting between the Canadian Entrepreneurs & Startups Council (CESC) and the Dalian Representative Office of the China Shanghai Cooperation Organization Trade and Economic Cooperation Center has opened a new chapter for China-Canada economic and trade cooperation.",
      "CESC was invited to visit the Dalian Representative Office of the China Shanghai Cooperation Organization Trade and Economic Cooperation Center and received a warm reception from Mr. Li Wenyi, Deputy Director of the Dalian Representative Office. Mr. Li Wenyi holds important positions as the Northeast Regional Commander of the China-Africa International Emergency Center and Chairman of Guochu Mingyi Group. The meeting was held in a warm atmosphere, with both parties expressing sincere intentions for cooperation and engaging in in-depth discussions on a series of important issues.",
      "During the meeting, both sides fully expressed their respect for each other and their expectations for future cooperation. They recognized that in the context of constantly changing global economic patterns, strengthening cooperation and achieving complementary advantages are key to driving enterprise development and promoting economic growth. This open and proactive attitude laid a solid foundation for subsequent in-depth cooperation.",
      "The focus of this meeting was to promote international economic and trade cooperation and resource integration. Both sides agreed that through concerted efforts, they could achieve optimal allocation of resources, improve economic efficiency, and create more development opportunities for member enterprises. This consensus not only reflects the strategic vision of both parties but also their accurate grasp of global economic trends.",
      "To achieve this goal, both parties outlined a detailed joint development plan. This plan covers multiple key areas, including industrial matchmaking, technological innovation, and trade expansion. Industrial matchmaking will enable synergistic development among different industries, enhancing the competitiveness of the entire supply chain; technological innovation will inject new vitality into enterprises, promoting product upgrades and service optimization; and trade expansion will help open up broader markets, increasing trade volume and value.",
      "This cooperation marks a new height for both organizations in international economic cooperation. It is expected to further deepen China-Canada economic and trade relations, bringing more cooperation opportunities and development space for enterprises in both countries. By strengthening cooperation, both sides can jointly address global economic challenges and achieve mutual benefit and win-win outcomes.",
      "As cooperation continues to advance, it is believed that more development opportunities will be created. This will not only promote the growth of enterprises on both sides but also make a positive contribution to the economic development of both countries. In the coming days, we look forward to seeing this cooperation bear fruitful results, adding new impetus to the prosperity of the global economy.",
      "CESC Welcomes Your Participation",
      "CESC was registered and established in 2003, with over 130 officially registered member companies. These enterprises span across various industries including biotechnology, pharmaceuticals, IT, IoT, new energy, environmental protection, metallurgy, mining, real estate, logistics, warehousing, trade, agriculture, brewing, finance, insurance, tourism, and education. This diverse membership provides the association with rich resources and extensive collaboration opportunities. Through the association's platform, members can fully leverage each other's strengths in geographical presence, networks, technology, management, and capital to achieve cross-regional and cross-industry cooperation. We welcome more entrepreneurs to join CESC, to collaborate, innovate, and achieve win-win outcomes together.",
    ],
  },
  {
    slug: "laos-consul-general-visits-cesc",
    title: "Consul General and Key Officials from the Consulate General of the Lao PDR in Canada Visit CESC",
    category: "Diplomatic Exchange",
    date: "November 16, 2024",
    image: newsLaos,
    excerpt:
      "The recent visit of Consul General John Phanthoupheng and Helen Gardener from the Consulate General of the Lao PDR in Canada to CESC marks a significant step towards strengthening international cooperation and exploring joint ventures.",
    body: [
      "In an era of increasingly frequent international exchanges, friendly visits and cooperation between different nations are becoming ever more crucial. Recently, key representatives from the Consulate General of the Lao People's Democratic Republic in Canada visited the Canadian Entrepreneurs & Startups Council (CESC), an event that garnered widespread attention.",
      "The guests visiting CESC included Mr. John Phanthoupheng, Consul General of the Lao People's Democratic Republic in Canada, and Ms. Helen Gardener, Head of Liaison and Protocol for the Lao People's Democratic Republic. Both have extensive experience and remarkable achievements in their respective fields, and their visit undoubtedly added weight to the exchange between the two parties. Mr. John Phanthoupheng has demonstrated outstanding wisdom and leadership in diplomatic affairs, playing a vital role in promoting friendly relations between Laos and Canada. Ms. Helen Gardener's professionalism in liaison and protocol also provided strong support for the smooth conduct of this exchange.",
      "From left: Ms. Jessie Xiao, Vice President of CESC; Ms. Helen Gardener, Head of Liaison and Protocol for the Lao People's Democratic Republic; Mr. John Phanthoupheng, Consul General of the Lao People's Democratic Republic in Canada; Mr. Li Guochao, Executive President of CESC.",
      "The arrival of these two guests not only reflects Laos's emphasis on cooperation with Canada but also demonstrates both sides' determination to strengthen exchanges in various fields, including economic and cultural aspects. Their identities and responsibilities lend deep significance and potential cooperation opportunities to this visit, fostering anticipation for future collaborative achievements.",
      "This visit primarily focused on several important sectors, including catering, trade, and mining. In catering, discussions revolved around integrating the distinctive culinary cultures of both countries to enrich epicurean experiences. Trade exchanges were particularly crucial, covering cooperation opportunities in import and export, market expansion strategies, and ways to promote mutual benefit for businesses in both nations. In the mining sector, important issues such as resource development, technological cooperation, and sustainable development were discussed.",
      "These exchanges will not only help both sides uncover potential business opportunities but also drive innovation and development in related industries. Through in-depth discussions and exchanges, new development opportunities are expected to arise for businesses in both countries, while also injecting new vitality into economic growth.",
      "The visit by the Lao representatives has opened a new chapter for cooperation between CESC and Laos. In the future, both sides are expected to reach a series of substantive cooperation agreements in the discussed areas, providing broader scope for enterprise development. This collaboration will not only promote the economic prosperity of both parties but also have a positive impact on cultural exchanges, technological innovation, and more.",
      "By establishing closer cooperative relations, both sides can jointly address challenges, share experiences and resources, and achieve complementary advantages. It is believed that with the joint efforts of both parties, future cooperation will yield fruitful results, bringing greater well-being to the people of both nations and setting a model for friendly international cooperation.",
      "CESC was registered and established in 2003, with over 130 officially registered member companies. These enterprises span across various industries including biotechnology, pharmaceuticals, IT, IoT, new energy, environmental protection, metallurgy, mining, real estate, logistics, warehousing, trade, agriculture, brewing, finance, insurance, tourism, and education. This diverse membership provides the association with rich resources and extensive collaboration opportunities. Through the association's platform, members can fully leverage each other's strengths in geographical presence, networks, technology, management, and capital to achieve cross-regional and cross-industry cooperation. We welcome more entrepreneurs to join CESC, to collaborate, innovate, and achieve win-win outcomes together.",
    ],
  },
  {
    slug: "2024-lions-gate-charity-gala-recap",
    title: "CESC Supports the 7th Lions Gate Hospital \"Shine a Light on Lions Gate\" Charity Gala, Promoting Compassion and Positive Energy",
    category: "Community Impact",
    date: "November 6, 2024",
    image: newsEventLions,
    excerpt:
      "CESC actively participated in the 7th \"Shine a Light on Lions Gate\" Charity Gala by donating prizes and bidding actively in the auction, demonstrating its strong support and selfless dedication to local medical care and promoting the positive energy of compassion.",
    body: [
      "In Canada, Chinese entrepreneurs are actively engaged in philanthropy, spreading warmth through love and action, and contributing to social development. Let's embark on this journey of goodwill together.",
      "On November 2, 2024, the 7th \"Shine a Light on Lions Gate\" Charity Gala commenced, with CESC actively participating. It provided generous prize donations, energized the charity raffle activities, and successfully bid CAD 13,000 in the auction for the opportunity to have dinner with Dr. John Vyselaar, a renowned Canadian cardiologist. This series of actions fully demonstrates the strong support and selfless dedication of Chinese entrepreneurs to the local healthcare sector.",
      "Middle in the photo is Mr. David Tan, Chairman of Glorious International, raising his hand to bid.",
      "Mr. Joseph Akelian, Client Relations Manager for Burberry Canada.",
      "Ms. Coco Liu, Burberry Vancouver Area Manager, Canada.",
      "Ms. Xiao Jiawen, Committee Member of the Lions Gate Hospital Foundation Asian Advisory Committee and Vice President of CESC.",
      "At this gala, the renowned luxury brand Burberry, as a member enterprise of the association, also actively responded. It presented a charming and lively children's fashion show and donated a portion of the proceeds from charity purchases to the Lions Gate Hospital Foundation. This not only added highlights to the gala but also showcased the active role and high social responsibility of member enterprises in philanthropy.",
      "CESC has always been an important bridge between the Chinese community and the business sector. While assisting the development of Chinese enterprises, it consistently focuses on the well-being of the local community and public welfare. Its participation in this charity gala to raise funds for the Lions Gate Hospital Foundation conveyed the firm determination of Chinese entrepreneurs to support community health and give back to society.",
      "CESC deeply understands that the success of an enterprise is not only reflected in economic achievements but also in its care and contributions to society. This philosophy motivates it to continuously practice social responsibility, actively engage in public welfare, and contribute to social progress, becoming a role model and leader for other enterprises.",
      "CESC firmly believes that acts of kindness and love can spread to every corner of society. It hopes to inspire more Chinese entrepreneurs to join charitable efforts through continuous participation in public welfare activities. At the same time, the association will constantly promote various public welfare projects, integrating resources through cross-sector cooperation to build a win-win platform.",
      "In the future, the association will, as always, uphold the spirit of giving back to society, adding bricks to community development. It hopes to use love as a bridge, unite the power of enterprises, promote community prosperity, and bring lasting positive impact to society, jointly writing a new chapter full of love and hope.",
      "Share Resources, Create the Future: CESC Welcomes Your Membership",
      "CESC was registered in 2003, and it has over 130 officially registered member enterprises. These enterprises cover various industries such as biotechnology, medicine, IT, IoT, new energy, environmental protection, metallurgy, mining, real estate, logistics, warehousing, trade, agriculture, winemaking, finance, insurance, tourism, and education. This diverse membership provides the association with rich resources and broad opportunities for cooperation. Through the association's platform, members can fully utilize each other's advantages in geographical location, network, technology, management, and capital to achieve cross-regional and cross-industry cooperation. We welcome more entrepreneurs to join CESC and work together to explore and innovate for mutual success.",
    ],
  },
  {
    slug: "cesc-dalian-visit",
    title: "CESC Visits Dalian to Promote China-Canada Business Cooperation",
    category: "International Collaboration",
    date: "November 10, 2024",
    image: newsDalian,
    excerpt:
      "CESC, established in 2003 with over 130 diverse member companies, provides a platform for leveraging strengths in various sectors to foster cross-regional and cross-industry collaboration.",
    body: [
      "——————————————————————————",
      "CESC was registered and established in 2003, with over 130 officially registered member companies. These enterprises span across various industries including biotechnology, pharmaceuticals, IT, IoT, new energy, environmental protection, metallurgy, mining, real estate, logistics, warehousing, trade, agriculture, brewing, finance, insurance, tourism, and education. This diverse membership provides the association with rich resources and extensive collaboration opportunities. Through the association's platform, members can fully leverage each other's strengths in geographical presence, networks, technology, management, and capital to achieve cross-regional and cross-industry cooperation. We welcome more entrepreneurs to join CESC, to collaborate, innovate, and achieve win-win outcomes together.",
    ],
  },
  {
    slug: "cesc-bridge-china-canada-cooperation",
    title: "CESC: Bridging Economic and Trade Cooperation Between Canada and China",
    category: "International Collaboration",
    date: "September 20, 2024",
    image: newsBridge,
    excerpt:
      "CESC, since its establishment in 2003, has been a vital platform for promoting business, resource sharing, and project collaboration, serving as a crucial bridge for economic and trade exchanges between Canada and China.",
    body: [
      "In today's globalized world, cross-national cooperation has become a crucial force driving economic development. The Canadian Entrepreneurs & Startups Council (CESC) is precisely such a platform, dedicated to fostering business information exchange, resource sharing, and project collaboration between Canada and China. Since its establishment in 2003, the association has not only offered valuable business opportunities to its member companies but has also served as an important bridge for economic and trade interactions between the two countries.",
      "CESC boasts over 130 officially registered member companies, spanning various industries from biotechnology and pharmaceuticals to finance and insurance. This diverse membership provides the association with abundant resources and extensive collaboration opportunities. Through the association's platform, members can leverage each other's strengths in geography, networks, technology, management, and capital to achieve cross-regional and cross-industry cooperation. This model of collaboration not only enhances project scale and technological content but also improves management efficiency, enabling the successful implementation of projects that would otherwise be difficult to undertake individually.",
      "As a bridge between Canada and China, CESC has consistently been committed to promoting economic and trade exchanges and information flow between the two countries. Since its inception, the association has actively participated in China's reform and opening-up and its development, organizing delegations to visit various regions in China and engaging in investment cooperation across multiple sectors. These sectors include high-tech industries such as science parks, biopharmaceuticals, and new energy, as well as traditional industries like real estate and modern logistics. Through these investment projects, the association has not only contributed to China's development but also facilitated Canadian enterprises' entry into the Chinese market.",
      "Continuing to Leverage International Advantages, Contributing to Bilateral Development",
      "CESC and its member companies will continue to leverage their international outlook, capital strength, technical expertise, and collaborative potential to play an important role in promoting the construction and development of both China and Canada. By continuously strengthening ties with governments and other business organizations in both countries, the association aims to expand members' networks and business opportunities. Furthermore, the association actively participates in organizing cultural activities such as entertainment and sports events, holiday celebrations, and cultural galas, further deepening mutual understanding and friendship between the people of the two nations.",
    ],
  },
];
