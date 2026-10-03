/**
 * Single source of truth for homepage copy.
 * PLACEHOLDER = not real client content; replace before launch
 * (client logos, testimonials, blog posts, social URLs).
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

export const STATS = [
  { value: 15, suffix: "+", label: "Industries Worked" },
  { value: 150, suffix: "+", label: "Campaigns Managed" },
  { value: 5, suffix: "X", label: "Lead Growth via Optimized Paid Ads" },
  { value: 25, suffix: "M+", label: "Client Organic Views" },
  { value: 100, suffix: "+", label: "Brands Served Across Dubai & UAE" },
];

export const INDUSTRIES = [
  { number: "01", title: "Logistics", description: "Lead generation and brand visibility for freight, courier, and supply chain businesses across the UAE. We build SEO and B2B campaigns that put your services in front of decision-makers actively searching for logistics partners.", tags: ["B2B", "SEO", "Lead Generation"] },
  { number: "02", title: "Beauty & Clinics", description: "Patient acquisition campaigns for aesthetic clinics, dermatology centers, and wellness brands. From Instagram-driven booking funnels to high-intent Google Ads, we help fill appointment calendars with qualified clients.", tags: ["Google Ads", "Social", "Bookings"] },
  { number: "03", title: "Hospitality", description: "Direct booking growth for hotels, resorts, and F&B brands across the UAE. We combine paid media, local SEO, content, and reputation management to help properties generate more direct demand.", tags: ["Hotels", "F&B", "Local SEO"] },
  { number: "04", title: "Education", description: "Enrollment-focused campaigns for schools, universities, and training institutes. We build lead-nurturing systems that guide prospective students and parents from their first enquiry to enrollment.", tags: ["Admissions", "SEO", "Funnels"] },
  { number: "05", title: "Real Estate", description: "Buyer and investor lead generation for developers, brokerages, and property businesses across Dubai and the UAE. Our campaigns focus on high-value leads and conversion-ready landing experiences.", tags: ["Property", "Performance", "Leads"] },
];

export const CASES = [
  { number: "01", client: "Maxline", industry: "Logistics", goal: "Increase qualified organic search visibility in a competitive Dubai market.", solution: "Technical SEO overhaul, local search optimization, and content authority strategy.", resultValue: "600%", resultLabel: "increase in organic traffic within 2 months", resultNote: "Long-tail keyword queries started in a week." },
  { number: "02", client: "Film Protection", industry: "Film Protection", goal: "Creating to-the-point content with audience, strategic content planning & executing.", solution: "Organic SEO results, AEO, increased leads/inquiries through Instagram.", resultValue: "5X", resultLabel: "lead growth versus unpaid marketing tactics", resultNote: "" },
];

export const SERVICES = [
  { number: "01", title: "Digital Marketing", description: "Build awareness, engagement, and demand across the digital channels that matter to your audience.", items: ["Video Marketing", "Google Ads", "Influencer Marketing", "WhatsApp Business API", "Email Marketing", "Social Media Marketing"] },
  { number: "02", title: "SEO", description: "Search strategies designed to increase visibility, attract high-intent traffic, and turn rankings into business growth.", items: ["Technical SEO", "On-Page SEO", "Local SEO / GMB", "Keyword Research", "Link Building", "SEO Audit"] },
  { number: "03", title: "Web Development", description: "Fast, modern, conversion-focused websites built around your brand and business goals.", items: ["Web Development", "Website Hosting"] },
  { number: "04", title: "App Development", description: "Mobile experiences designed and developed to make your products easier to access and use.", items: ["Mobile App Development", "Mobile App Design"] },
  { number: "05", title: "Digital Branding & Communication", description: "Create a consistent brand presence that communicates clearly and stays memorable across every touchpoint.", items: ["Branding", "PR & Outreach", "SMS Marketing"] },
  { number: "06", title: "Paid Media", description: "Performance campaigns across the platforms where your customers are already searching, watching, and engaging.", items: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "TikTok Ads", "YouTube Ads"] },
  { number: "07", title: "Video Production", description: "Purpose-built video content for brands that need to explain, educate, build trust, and convert attention.", items: ["Video Production", "Corporate Video Production", "Branded Video Production", "Financial Video Production", "Social Video Production", "Real Estate Video Production", "Healthcare Video Production", "B2B Explainer Videos", "Tech Explainer Videos", "Educational Explainer Videos", "Healthcare Explainer Videos"] },
  { number: "08", title: "Lead Generation", description: "Generate qualified opportunities with targeted acquisition strategies built around your industry and sales process.", items: ["LinkedIn Lead Generation", "Hospitals", "Logistics", "Beauty & Wellness Centers", "Medical Clinics", "Hotels", "Restaurants & Bars", "B2B Companies", "Real Estate", "Schools & Colleges", "Skills & Training Centers", "Insurance", "Fintech", "IT Companies", "Security Industry"] },
  { number: "09", title: "Design Services & Brand Identity", description: "Design systems and marketing assets that give your business a polished, consistent, and professional identity.", items: ["Graphic Design", "Website Design", "Brochure Design", "Pitch Deck Design", "Company Profile Design"] },
  { number: "10", title: "Corporate Gifting", description: "Branded physical experiences that help businesses build relationships and stay memorable.", items: ["Offset & Digital Printing", "Custom & Corporate Gifting", "Stationery & Corporate Identity", "Merchandise"] },
];

export const HOW_WE_WORK = [
  { number: "01", title: "UAE Market Expertise", description: "With a deep understanding of the UAE's diverse audience, we create strategies and content that resonate locally, strengthen your brand, and drive measurable business growth." },
  { number: "02", title: "Content That Converts", description: "Every design, caption, video, and campaign is created with one goal: turning attention into enquiries, leads, and sales — not just likes and impressions." },
  { number: "03", title: "Built Around Your Brand", description: "No templates. No recycled ideas. Every strategy is tailored to your industry, audience, and business goals so your brand can stand out in a crowded market." },
  { number: "04", title: "Optimised for Growth", description: "We continuously analyse performance, refine content, and optimise campaigns using real data to help your business achieve consistent and measurable growth." },
];

export const BENEFITS = [
  { number: "01", title: "Results-First Approach", description: "Every campaign is built around ROI, lead generation, and revenue growth — not vanity metrics." },
  { number: "02", title: "AI-Driven Marketing & Automation", description: "We integrate AI tools, CRM systems, WhatsApp automation, and smart funnels so your marketing keeps working around the clock." },
  { number: "03", title: "Industry-Specific Expertise", description: "From Logistics and Beauty Clinics to Hospitality, Education, and Real Estate, our strategies follow how customers in each industry actually buy." },
  { number: "04", title: "True Client Partnership", description: "Transparent reporting, clear KPIs, and a team that works as an extension of your business." },
];

export const COMPARISON = [
  { feature: "Skill Coverage", ziron: "Design, Dev, Marketing & Print", inHouse: "Limited to hires", agencies: "Depends on agency" },
  { feature: "Senior-Level Expertise", ziron: "Guaranteed", inHouse: "Hopefully", agencies: "Maybe" },
  { feature: "Turnaround Time", ziron: "48 hours for most requests", inHouse: "Weeks", agencies: "Weeks" },
  { feature: "Start Time", ziron: "Same day", inHouse: "Weeks to onboard", agencies: "Days to set up" },
  { feature: "Client Portal", ziron: "Yes", inHouse: "Often less accessible", agencies: "No consistent system" },
  { feature: "Scalability", ziron: "Scale up/down with ease", inHouse: "Possible", agencies: "Limited" },
  { feature: "Flexibility", ziron: "Pause/adjust anytime", inHouse: "Locked into salaries", agencies: "Contract-locked" },
];

/** PLACEHOLDER — not real client quotes. */
export const TESTIMONIALS = [
  { quote: "ZironPro brought structure and clarity to our digital marketing. The strategy was focused, the communication was clear, and the work was always connected to our business goals.", name: "Client Name", role: "Marketing Director", company: "Company Name" },
  { quote: "What stood out was their understanding of our market. They didn't use a generic approach — every campaign and piece of content was built around our audience.", name: "Client Name", role: "Business Owner", company: "Company Name" },
  { quote: "From strategy to execution, the team worked like an extension of our business, with clear communication and a much more consistent digital presence.", name: "Client Name", role: "Founder", company: "Company Name" },
];

/** PLACEHOLDER — swap for real recent blog posts. */
export const POSTS = [
  { category: "Digital Marketing", title: "How UAE Businesses Can Build a Stronger Digital Presence", description: "A practical look at the channels, content, and strategies businesses can use to build visibility and generate consistent demand.", href: "/blogs" },
  { category: "SEO", title: "Building Search Visibility in Dubai's Competitive Market", description: "The fundamentals behind technical SEO, local search, content authority, and high-intent keyword targeting.", href: "/blogs" },
  { category: "Performance Marketing", title: "From Ad Clicks to Qualified Leads: What Actually Matters", description: "Why performance marketing should go beyond impressions and clicks.", href: "/blogs" },
];

export const FAQS = [
  { question: "What makes ZironPro the best marketing agency in Dubai?", answer: "We combine AI-driven strategy, industry-specific expertise, and full-funnel marketing to build growth systems rather than isolated campaigns. Our approach covers strategy, creative, SEO, paid media, content, websites, lead generation, and automation." },
  { question: "Do you only work with businesses in Dubai, or across the UAE?", answer: "We work with businesses across Dubai, Abu Dhabi, Sharjah, and the wider UAE. Our strategies are adapted to the market, audience, and business goals of each client." },
  { question: "Which industries do you specialize in?", answer: "Our key areas include Logistics, Beauty & Clinics, Hospitality, Education, and Real Estate. We also work with growing businesses across other industries where digital marketing can create measurable growth." },
  { question: "How soon can we start?", answer: "Once the initial requirements and strategy are aligned, most projects can move into execution within days rather than weeks. The exact timeline depends on the scope and services required." },
];

export const CONTACT = { email: "info@zironpro.com", location: "Dubai, United Arab Emirates" };
