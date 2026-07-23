export const profile = {
  name: "Priyabrata Bera",
  initials: "PB",
  title: "Senior Frontend Engineer | Immediate Joiner",
  tagline: "Immediate Joiner | React.js | Next.js | TypeScript | Node.js",
  summary:
    "Immediate Joiner with 13+ years of experience building scalable enterprise applications, AI-powered tools, SEO-friendly web platforms, and high-performance frontend systems.",
  photoAlt: "Priyabrata Bera profile photo",
  email: "priyabrata.bera@gmail.com",
  phoneDisplay: "+91 9158617600",
  phoneTel: "+919158617600",
  whatsapp: "https://wa.me/919158617600",
  location: "Noida, India",
  linkedin: "https://www.linkedin.com/in/priyabrata-bera-6501b019/",
  github: "https://github.com/priyabratabera",
  resumeFile: "/priyabratafile/Priyabrata_Bera_Resume_Reactjs_Nextjs_Developer.pdf",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  { href: profile.linkedin, label: "LinkedIn", icon: "linkedin" },
  { href: profile.github, label: "GitHub", icon: "github" },
  { href: `mailto:${profile.email}`, label: "Email", icon: "envelope" },
  { href: profile.whatsapp, label: "WhatsApp", icon: "whatsapp" },
] as const;

export const heroStats = [
  { value: "13+", label: "Years Experience" },
  { value: "50+", label: "Projects" },
  { value: "100+", label: "Production Releases" },
  { value: "Expert", label: "React / Next.js" },
] as const;

export const aboutHighlights = [
  "Senior frontend engineer at Times Internet delivering React and Next.js products for high-traffic financial platforms.",
  "Hands-on with frontend architecture, modular component systems, reusable design patterns, and maintainable engineering workflows.",
  "Led and supported Next.js migrations focused on SEO, SSR, performance, and cleaner release velocity for business-critical properties.",
  "Built React interfaces and Node.js APIs for AI-assisted experiences, market intelligence tools, publishing flows, and conversion-focused web products.",
  "Strong focus on Core Web Vitals, accessibility, search visibility, analytics-friendly implementation, and long-term maintainability.",
  "Uses ChatGPT, Cursor AI, GitHub Copilot, Claude, and prompt engineering workflows to accelerate delivery while keeping code quality high.",
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS EC2", "PM2", "Nginx", "Vercel", "Railway"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jira", "Postman", "Chrome DevTools", "Lighthouse"],
  },
  {
    title: "AI Tools",
    skills: ["ChatGPT", "Cursor AI", "GitHub Copilot", "Claude", "Prompt Engineering"],
  },
] as const;

export const projects = [
  {
    tag: "Featured",
    title: "ET Markets GPT",
    description:
      "AI-assisted market intelligence experience helping users explore financial signals, summaries, and content faster.",
    stack: ["Next.js", "React", "Node.js", "AI Workflows"],
    role: "Senior Frontend Engineer",
    impact: "Helped shape a modern AI product experience for finance-focused audiences.",
  },
  {
    tag: "Featured",
    title: "AI Stock Screener",
    description:
      "Interactive screening interface for stock discovery with responsive filters, data-driven UI, and scalable component design.",
    stack: ["React", "Next.js", "TypeScript", "REST APIs"],
    role: "Frontend Architecture, UI Engineering",
    impact: "Improved discovery speed and clarity for complex stock research workflows.",
  },
  {
    tag: "Project",
    title: "ET Markets Watchlist",
    description:
      "Personalized watchlist product with real-time friendly interaction patterns and mobile-first usability.",
    stack: ["React", "JavaScript", "API Integration"],
    role: "Senior Frontend Engineer",
    impact: "Supported repeat engagement through streamlined portfolio tracking UX.",
  },
  {
    tag: "Project",
    title: "Mutual Funds Platform",
    description:
      "SEO-aware investment platform experiences designed for content depth, discoverability, and conversion-friendly navigation.",
    stack: ["Next.js", "SSR", "SEO", "Performance"],
    role: "Frontend Lead",
    impact: "Strengthened search visibility and improved page performance on key journeys.",
  },
  {
    tag: "Project",
    title: "Bank Holidays Migration",
    description:
      "Migration initiative modernizing legacy pages into a faster, cleaner, search-friendly frontend stack.",
    stack: ["Next.js", "Migration", "SSR"],
    role: "Migration Engineer",
    impact: "Reduced maintenance overhead while improving consistency and SEO readiness.",
  },
  {
    tag: "Project",
    title: "Company Page Revamp",
    description:
      "Redesigned company information pages with better performance, stronger content hierarchy, and modern responsive layouts.",
    stack: ["React", "Next.js", "CSS", "SEO"],
    role: "Frontend Engineer",
    impact: "Delivered a more professional presentation for business and search audiences.",
  },
] as const;

export const caseStudies = [
  {
    title: "ET Markets GPT",
    problem:
      "Financial users needed faster access to contextual insights without digging through multiple content surfaces.",
    solution:
      "Built a structured AI-first experience with reusable React components, content hierarchy, and scalable frontend patterns.",
    stack: ["Next.js", "React", "Node.js", "AI-assisted UX"],
    role: "Senior Frontend Engineer",
    features: [
      "AI-assisted discovery flows",
      "Modular UI patterns",
      "Performance-aware rendering",
      "Responsive interaction design",
    ],
    impact: "Improved usability for insight-heavy workflows and created a stronger foundation for future AI features.",
  },
  {
    title: "AI Stock Screener",
    problem: "Screening large volumes of stock data can become overwhelming without thoughtful information architecture.",
    solution: "Created filter-first interfaces, reusable data presentation components, and cleaner state-driven user flows.",
    stack: ["React", "Next.js", "TypeScript", "REST APIs"],
    role: "Frontend Architecture and Implementation",
    features: [
      "Advanced filter UI",
      "Reusable cards and tables",
      "Mobile-friendly layouts",
      "Scalable API integration",
    ],
    impact: "Made complex stock discovery tasks easier to use and simpler to maintain for future enhancements.",
  },
  {
    title: "Ishita Swim",
    problem: "The business needed a polished digital presence that felt credible, modern, and conversion-ready.",
    solution: "Delivered a clean branded website with clear CTAs, service communication, and responsive presentation.",
    stack: ["Next.js", "React", "CSS", "SEO"],
    role: "Frontend Developer",
    features: [
      "Modern hero section",
      "Service-led content structure",
      "Responsive design",
      "Lead-generation CTAs",
    ],
    impact: "Helped the brand present professionally online and support inquiry-driven growth.",
  },
  {
    title: "Luxyh E-commerce",
    problem: "The storefront needed a premium feel without sacrificing speed, clarity, or maintainability.",
    solution: "Built reusable commerce UI sections with strong visual hierarchy and lightweight interaction patterns.",
    stack: ["React", "Next.js", "E-commerce UX"],
    role: "Frontend Developer",
    features: [
      "Catalog-focused layout",
      "Premium visual treatment",
      "Reusable components",
      "Responsive shopping experience",
    ],
    impact: "Elevated presentation quality while keeping the frontend easier to scale and iterate on.",
  },
] as const;

export const experience = [
  {
    period: "2015 to Present",
    company: "Times Internet Limited",
    role: "Senior Frontend Engineer",
    points: [
      "Delivered senior frontend work across React and Next.js products for finance and media properties.",
      "Contributed to AI and financial product experiences including GPT-style discovery surfaces and data-heavy tools.",
      "Supported SEO migrations, SSR adoption, performance optimization, and maintainable frontend architecture.",
      "Led feature delivery, engineering coordination, and mentoring support across cross-functional teams.",
    ],
  },
  {
    period: "2014 to 2015",
    company: "Wincere Pvt Ltd",
    role: "Senior UI Consultant",
    points: ["Built enterprise-facing UI systems and responsive pages with strong frontend quality standards."],
  },
  {
    period: "2013 to 2014",
    company: "hCentive Pvt Ltd",
    role: "UI Developer",
    points: ["Worked on production web interfaces with focus on structure, usability, and browser compatibility."],
  },
  {
    period: "2012 to 2013",
    company: "Ophio Technologies",
    role: "Front End Developer",
    points: ["Developed frontend experiences for business websites and content-driven web properties."],
  },
  {
    period: "2011 to 2012",
    company: "Compare Infobase",
    role: "HTML Developer",
    points: ["Started professional web development work building standards-based pages and reusable UI assets."],
  },
] as const;

export const aiWorkflow = [
  "ChatGPT for debugging, architecture planning, and technical documentation.",
  "Cursor AI for code generation, refactoring, and implementation acceleration.",
  "GitHub Copilot for faster development during repetitive or well-defined engineering tasks.",
  "Claude for long-form code review, reasoning through larger files, and documentation support.",
  "AI-assisted PR review and prompt engineering to improve delivery quality and engineering clarity.",
  "Faster shipping with stronger code quality when AI tools are used as part of a disciplined workflow.",
] as const;

export const blogPosts = [
  {
    tag: "Next.js",
    title: "Next.js 15 Performance Optimization",
    excerpt:
      "Practical ways to improve rendering, bundle strategy, image handling, and Core Web Vitals in large Next.js apps.",
  },
  {
    tag: "React",
    title: "React Interview Questions",
    excerpt:
      "Senior-level React questions covering architecture, rendering, performance, state, and frontend problem-solving.",
  },
  {
    tag: "AI Workflow",
    title: "AI Tools for Frontend Developers",
    excerpt:
      "How ChatGPT, Cursor AI, GitHub Copilot, and Claude fit into a fast but quality-conscious engineering workflow.",
  },
  {
    tag: "Node.js",
    title: "Node.js API Best Practices",
    excerpt:
      "A practical guide to predictable API structure, validation, error handling, observability, and deployment readiness.",
  },
  {
    tag: "Performance",
    title: "How to Improve Core Web Vitals",
    excerpt: "Real-world techniques for reducing layout shift, improving input responsiveness, and shipping faster pages.",
  },
] as const;

export const resumeStats = [
  { value: "13+", label: "Years Experience" },
  { value: "8+", label: "Years React.js" },
  { value: "5+", label: "Years Next.js" },
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Production Releases" },
] as const;

export const resumeSkillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js 14/15",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "React Ecosystem",
    skills: [
      "React Hooks",
      "Custom Hooks",
      "Context API",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Axios",
      "Formik",
      "Yup",
    ],
  },
  {
    title: "Next.js",
    skills: [
      "App Router",
      "Pages Router",
      "SSR",
      "SSG",
      "ISR",
      "Dynamic Routing",
      "Middleware",
      "API Routes",
      "Metadata SEO",
      "Image Optimization",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MySQL", "MongoDB", "Sequelize", "Mongoose"],
  },
  {
    title: "Performance",
    skills: ["Core Web Vitals", "Lighthouse", "Lazy Loading", "Code Splitting", "Bundle Optimization", "SEO Optimization"],
  },
  {
    title: "Cloud / Deployment",
    skills: ["AWS EC2", "Nginx", "PM2", "Vercel", "Railway", "GitHub Deployment"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jira", "Postman", "Chrome DevTools", "VS Code", "Cursor AI"],
  },
  {
    title: "AI Tools",
    skills: ["ChatGPT", "Cursor AI", "GitHub Copilot", "Claude", "Prompt Engineering", "AI Code Review"],
  },
] as const;

export const resumeWorkExperience = {
  company: "Times Internet Limited",
  role: "Senior Frontend Engineer / Manager Frontend Technology",
  period: "2015 - Present",
  responsibilities: [
    "Built scalable frontend applications using React.js, Next.js and JavaScript.",
    "Migrated legacy XSLT pages to modern Next.js architecture.",
    "Developed SEO-friendly, high-performance pages using SSR and dynamic routing.",
    "Integrated REST APIs for real-time market data and subscription-based features.",
    "Worked on ET Markets, ET Wealth, AI Screener, Markets GPT, Watchlist and Mutual Funds platforms.",
    "Improved UI performance, responsiveness and Core Web Vitals.",
    "Led frontend development and mentored junior developers.",
  ],
} as const;

export const resumeMajorProjects = [
  {
    title: "ET Markets GPT",
    stack: ["Next.js", "React.js", "TypeScript", "REST APIs", "Subscription Access"],
    description: "AI-powered market assistant built for ET Markets users with login/subscription-based access.",
  },
  {
    title: "AI Stock Screener",
    stack: ["Next.js", "React.js", "APIs", "User Access Control"],
    description: "Stock screening platform with AI/manual mode, dynamic filters and user-based access.",
  },
  {
    title: "ET Markets Watchlist",
    stack: ["React.js", "Next.js", "JavaScript"],
    description: "Multi-watchlist platform with stocks, news, recommendations, alerts and corporate actions.",
  },
  {
    title: "Company Page Revamp",
    stack: ["Next.js", "React.js", "SSR", "SEO"],
    description: "Migrated company pages from legacy system to modern Next.js with real-time charts and market data.",
  },
  {
    title: "Mutual Funds Platform",
    stack: ["Next.js", "React.js", "APIs"],
    description: "Built mutual fund listing and data-driven sections with SEO-focused layout.",
  },
  {
    title: "Ishita Swim",
    stack: ["Next.js 15", "Node.js", "MongoDB"],
    description: "Full-stack swimming academy management system with booking, admin panel and user management.",
  },
  {
    title: "Luxyh E-commerce",
    stack: ["Next.js", "Node.js", "MongoDB", "Payment Gateway"],
    description: "Full-stack e-commerce platform with product management, order tracking and admin dashboard.",
  },
] as const;

export const freelanceWork = [
  "MindMajix: Next.js 14 migration and Node.js API improvements.",
  "Tekslate: Training platform migration to Next.js and backend optimization.",
  "Ishita Swim: Full-stack swimming management app.",
  "Luxyh: Full-stack e-commerce web app.",
] as const;

export const education = [
  "Master's in Political Science - MDU Rohtak",
  "Bachelor of Arts - Delhi University",
] as const;

export const certifications = {
  count: "15",
  period: "2024-2025",
  source: "LinkedIn Learning",
  items: [
    "JavaScript Essential Training",
    "Next.js: Creating and Hosting a Full-Stack Site",
    "Node.js: Microservices",
    "Explore Web Development with Node.js",
    "Building RESTful APIs with Node.js and Express",
    "Node: Authentication",
    "Node.js: Securing RESTful APIs",
    "Node.js: Web Servers, Tests, and Deployment",
    "Express Essentials: Build Powerful Web Apps with Node.js",
    "Databases for Node.js Developers",
    "Node.js: Testing and Code Quality",
    "Learning npm: A Package Manager",
    "Node.js Essential Training",
  ],
} as const;

export const heroPages = {
  about: {
    eyebrow: "Immediate Joiner",
    title: "About Priyabrata",
    subtitle: "Immediate Joiner for senior frontend engineering, SEO, and product delivery",
    copy:
      "From Times Internet to enterprise delivery, the focus has stayed consistent: build maintainable interfaces, improve performance, and help teams ship frontend systems that last as an Immediate Joiner.",
    actions: [
      { href: profile.resumeFile, label: "Download Resume", primary: true },
      { href: "/contact", label: "Let's Connect", primary: false },
    ],
  },
  work: {
    eyebrow: "Immediate Joiner",
    title: "Projects",
    subtitle: "Immediate Joiner frontend projects, migrations, and AI product work",
    copy: "Selected work across fintech, content platforms, business websites, e-commerce, and modernization programs.",
    actions: [],
  },
  blog: {
    eyebrow: undefined,
    title: "Blog",
    subtitle: "Frontend, performance, and AI writing topics",
    copy: "This page now features publish-ready article topics instead of pointing to an unconfigured Blogger API.",
    actions: [],
  },
  contact: {
    eyebrow: "Immediate Joiner",
    title: "Contact",
    subtitle: "Immediate Joiner available for senior frontend and full stack roles",
    copy:
      "Reach out for Immediate Joiner, Senior Frontend Engineer, Lead Frontend Engineer, React/Next.js Developer, and Full Stack Developer opportunities, consulting, or product collaboration.",
    actions: [],
  },
  resume: {
    eyebrow: "Resume | Immediate Joiner",
    title: "Priyabrata Bera",
    resumeTitle: "Senior Frontend Engineer | Immediate Joiner",
    subtitle: "Immediate Joiner | React.js | Next.js | TypeScript | Node.js",
    copy:
      "Immediate Joiner with 13+ years of experience building scalable frontend applications, enterprise platforms, SEO-friendly websites, and AI-powered tools.",
    actions: [
      { href: profile.resumeFile, label: "Download Resume", primary: true },
      { href: "/contact", label: "Contact Me", primary: false },
      { href: "/work", label: "View Projects", primary: false },
    ],
  },
} as const;
