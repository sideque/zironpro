/**
 * Single source of truth for ZironPro website content and navigation.
 * All brand information, services, client lists, industries, and FAQ reflect ZironPro AE.
 */

export const EASE = [0.22, 1, 0.36, 1] as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Contact", href: "/#contact" },
];

export const CLIENT_LOGOS = [
  { name: "Maxline Global Logistics", industry: "Logistics & Freight" },
  { name: "Piptan Investments", industry: "Investment & Capital" },
  { name: "100 Power", industry: "Energy & Infrastructure" },
  { name: "Qordz", industry: "Technology" },
  { name: "Direct Logic Systems", industry: "Enterprise IT" },
  { name: "Sphere IT Global", industry: "IT Solutions" },
  { name: "MC-Bauchemie", industry: "Construction Chemicals" },
  { name: "Simply KF", industry: "F&B / Hospitality" },
  { name: "Smart Kitchen", industry: "Retail & Commercial" },
  { name: "M2MTek", industry: "IoT & Connectivity" },
];

export const STATS = [
  { value: 600, suffix: "%", label: "Organic Traffic Growth" },
  { value: 5, suffix: "X", label: "Lead Growth via Paid Ads" },
  { value: 15, suffix: "+", label: "Key UAE Industries Served" },
  { value: 150, suffix: "+", label: "Successful Growth Campaigns" },
];

export const SERVICES = [
  {
    number: "01",
    id: "branding",
    title: "Branding & Digital Identity",
    description: "Build a authoritative, memorable brand identity that sets your business apart in the UAE market.",
    items: [
      "Brand Strategy & Positioning",
      "Corporate Identity Design",
      "Company Profile Design",
      "Brand Guidelines & Pitch Decks",
      "Graphic & Communication Design"
    ]
  },
  {
    number: "02",
    id: "web-dev",
    title: "Websites & Digital Platforms",
    description: "High-performance, conversion-focused websites engineered for speed, SEO, and user experience.",
    items: [
      "Custom Web Design & Development",
      "E-Commerce Solutions",
      "Web Hosting & Maintenance",
      "Mobile App UI/UX & Development"
    ]
  },
  {
    number: "03",
    id: "digital-marketing",
    title: "Digital Marketing & Performance",
    description: "Full-funnel marketing strategies that attract qualified prospects and convert attention into revenue.",
    items: [
      "Google Ads (Search, Shopping, Display)",
      "Paid Social (Meta, LinkedIn, TikTok)",
      "Lead Generation Campaigns",
      "Influencer & Creator Marketing",
      "Email & WhatsApp Marketing Automation"
    ]
  },
  {
    number: "04",
    id: "seo",
    title: "SEO & Organic Search Growth",
    description: "Dominate high-intent search terms across Dubai and the UAE with technical and content-led SEO.",
    items: [
      "Technical SEO Audits",
      "Local SEO & Google Business Profile",
      "On-Page & Off-Page Optimization",
      "Keyword Strategy & Authority Content"
    ]
  },
  {
    number: "05",
    id: "video",
    title: "Motion Design & Video Production",
    description: "High-impact video content tailored for corporate stories, product explainers, and performance ads.",
    items: [
      "Corporate Video Production",
      "Motion Design & 2D/3D Animation",
      "Social Video Content & Reels",
      "Real Estate & B2B Explainer Videos"
    ]
  },
  {
    number: "06",
    id: "printing",
    title: "Printing & Corporate Gifts",
    description: "Physical brand collateral and customized executive corporate gifting for events and client relations.",
    items: [
      "Offset & Digital Printing",
      "Custom Branded Corporate Gifts",
      "Stationery & Event Merchandise",
      "Packaging & Display Collateral"
    ]
  }
];

export const CASES = [
  {
    number: "01",
    client: "Maxline Global Logistics",
    industry: "Logistics",
    goal: "Dominate search visibility for freight forwarding and global logistics terms in Dubai.",
    solution: "Technical SEO overhaul, local search optimization, and targeted B2B content authority campaign.",
    resultValue: "600%",
    resultLabel: "Increase in organic search traffic within 2 months",
    resultNote: "Achieved top-3 rankings for high-intent B2B logistics search queries."
  },
  {
    number: "02",
    client: "Film Protection & Auto",
    industry: "Automotive & Film Protection",
    goal: "Drive direct inquiries and high-margin service bookings through targeted social and search ads.",
    solution: "High-converting video ads, Instagram lead funnels, and precision Google Search targeting.",
    resultValue: "5X",
    resultLabel: "Lead volume expansion compared to organic tactics",
    resultNote: "Streamlined inquiry-to-booking funnel with instant WhatsApp follow-up."
  }
];

export const INDUSTRIES = [
  { number: "01", title: "Real Estate & Property", description: "Investor and buyer lead generation for developers, brokerages, and luxury property firms across Dubai and the UAE." },
  { number: "02", title: "Healthcare & Medical", description: "Patient acquisition campaigns for aesthetic clinics, specialized medical centers, and wellness providers." },
  { number: "03", title: "Automotive & Fleet", description: "Demand generation and social performance campaigns for automotive protection, detailing, and dealership brands." },
  { number: "04", title: "Logistics & Supply Chain", description: "B2B lead acquisition for freight forwarders, warehousing providers, and courier operations across the GCC." },
  { number: "05", title: "Education & Training", description: "Enrollment-focused campaigns guiding prospective students and parents from inquiry to enrollment." },
  { number: "06", title: "SaaS & Technology", description: "B2B demand generation, product positioning, and trial acquisition for tech platforms." },
  { number: "07", title: "E-Commerce & Retail", description: "Full-funnel performance marketing designed to scale online sales, improve ROAS, and increase customer LTV." },
  { number: "08", title: "Hospitality & F&B", description: "Direct booking growth, brand awareness, and foot-traffic acceleration for hotels, resorts, and restaurants." },
  { number: "09", title: "B2B & Enterprise", description: "Authority-building campaigns that position your company in front of corporate key decision-makers." },
  { number: "10", title: "Luxury Brands", description: "Bespoke digital experiences and high-end visual marketing for discerning luxury consumers." },
  { number: "11", title: "Startups & SMEs", description: "Agile, high-ROI marketing strategies that help emerging UAE businesses launch and scale rapidly." }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Market & Competitor Research",
    description: "We analyze your UAE industry landscape, target buyer behavior, and competitors to find untapped growth opportunities."
  },
  {
    number: "02",
    title: "Custom Digital Roadmap",
    description: "We build a bespoke marketing blueprint tailored to your commercial KPIs — from traffic and leads to direct sales."
  },
  {
    number: "03",
    title: "Multi-Channel Execution",
    description: "Our specialist teams execute brand, SEO, web, paid media, and video campaigns simultaneously for maximum momentum."
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description: "We track performance daily using real conversion data, refining ad creative and landing pages to lower cost-per-lead."
  },
  {
    number: "05",
    title: "Scaling What Works",
    description: "We reallocate budget into top-performing channels to drive compounding, sustainable revenue growth over the long term."
  }
];

export const WHY_ZIRONPRO = [
  {
    number: "01",
    title: "Results-First Approach",
    description: "Every campaign is engineered around measurable revenue growth, lead volume, and ROI — never vanity metrics."
  },
  {
    number: "02",
    title: "AI & Marketing Automation",
    description: "We integrate smart CRM funnels, AI tools, and automated communication so your sales pipeline works 24/7."
  },
  {
    number: "03",
    title: "Deep UAE Market Expertise",
    description: "With years of experience in Dubai and the UAE, our strategies resonate with local audiences and GCC dynamics."
  },
  {
    number: "04",
    title: "True Business Partnership",
    description: "Transparent live reporting, direct communication, and a dedicated strategy team operating as an extension of your business."
  }
];

export const BENEFITS = WHY_ZIRONPRO;
export const HOW_WE_WORK = PROCESS_STEPS;

export const BLOGS = [
  {
    category: "Digital Growth",
    title: "How UAE Businesses Can Build a Stronger Digital Presence",
    description: "A practical guide to the channels, content strategies, and conversion tactics UAE brands use to capture market share.",
    href: "/#blogs"
  },
  {
    category: "SEO & Search",
    title: "Building Search Visibility in Dubai's Competitive Market",
    description: "Technical SEO fundamentals, local search optimization, and keyword authority strategies for GCC businesses.",
    href: "/#blogs"
  },
  {
    category: "Performance Marketing",
    title: "From Ad Clicks to Qualified Leads: What Actually Matters",
    description: "Why performance campaigns must focus on lead quality, nurture funnels, and bottom-line customer acquisition cost.",
    href: "/#blogs"
  }
];

export const POSTS = BLOGS;

export const COMPARISON = [
  {
    feature: "Strategy & Execution",
    ziron: "Dedicated UAE growth strategists & full-funnel execution",
    inHouse: "High overhead, slow hiring, limited single-skill focus",
    agencies: "Generic templates, vanity metrics, poor communication"
  },
  {
    feature: "AI & Automation",
    ziron: "Smart CRM integration, AI ad optimization & lead capture",
    inHouse: "Manual processes and disconnected tools",
    agencies: "Outdated traditional workflows without AI"
  },
  {
    feature: "Market Focus",
    ziron: "Deep Dubai & GCC B2B/B2C local market expertise",
    inHouse: "Limited broader market benchmark insights",
    agencies: "Offshore cookie-cutter campaigns"
  },
  {
    feature: "Speed to Launch",
    ziron: "Campaigns live & producing within 5–7 business days",
    inHouse: "Months of recruitment and onboarding",
    agencies: "Slow onboarding & bloated account management"
  },
  {
    feature: "Reporting & ROI",
    ziron: "Real-time revenue dashboard & lead conversion tracking",
    inHouse: "Fragmented internal reporting across tools",
    agencies: "Monthly PDF reports focused on impressions and clicks"
  }
];

export const TESTIMONIALS = [
  {
    quote: "ZironPro transformed our organic search visibility. Within 60 days, our qualified logistics inquiries grew exponentially across the UAE.",
    name: "Karam Al-Mansoori",
    role: "Managing Director",
    company: "Maxline Global Logistics"
  },
  {
    quote: "Their performance ads and lead generation funnels consistently deliver high-intent corporate prospects. The ROI speaks for itself.",
    name: "Sarah Jenkins",
    role: "Head of Growth",
    company: "Piptan Investments"
  },
  {
    quote: "From our brand identity redesign to our custom web application, ZironPro delivered world-class speed, aesthetics, and strategic clarity.",
    name: "Tariq Hasan",
    role: "Co-Founder & CEO",
    company: "Qordz Technologies"
  }
];

export const FAQS = [
  {
    question: "What makes ZironPro the leading digital marketing agency in Dubai?",
    answer: "We combine AI-powered marketing strategy, deep UAE market knowledge, and full-funnel execution across creative, SEO, web, paid media, and video to deliver revenue growth instead of vanity numbers."
  },
  {
    question: "Do you serve clients outside of Dubai?",
    answer: "Yes, we serve businesses across Dubai, Abu Dhabi, Sharjah, and the wider UAE, as well as regional GCC enterprises expanding their digital authority."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "Our core industry experience spans Real Estate, Healthcare & Clinics, Logistics, Automotive, Education, SaaS, Hospitality, and B2B Corporates."
  },
  {
    question: "How fast can we launch our campaigns?",
    answer: "Following strategy alignment and asset onboarding, most digital marketing and paid media campaigns go live within 5 to 7 business days."
  }
];

export const CONTACT = {
  email: "info@zironpro.com",
  location: "Dubai, United Arab Emirates",
  whatsapp: "https://wa.me/971500000000"
};

