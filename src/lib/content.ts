export const profile = {
  name: "Priyabrata Bera",
  initials: "PB",
  title: "Staff Software Engineer | Frontend Tech Lead",
  tagline: "React.js · Next.js · TypeScript · Node.js · Ad Tech & Monetization",
  summary:
    "Frontend Tech Lead with 15+ years of experience architecting scalable web applications, and 7+ years as sole technical owner of a publisher monetization ecosystem serving 340M+ monthly views.",
  photoAlt: "Priyabrata Bera profile photo",
  email: "priyabrata.bera@gmail.com",
  phoneDisplay: "+91 9158617600",
  phoneTel: "+919158617600",
  whatsapp: "https://wa.me/919158617600",
  location: "Noida, India",
  linkedin: "https://www.linkedin.com/in/priyabrata-bera-6501b019/",
  github: "https://github.com/priyabratabera",
  resumeFile: "/assets/Priyabrata_Bera_Resume_Optimized_v2.pdf",
} as const;

export const professionalSummary =
  "Frontend Tech Lead with 15+ years of experience architecting and delivering scalable, high-performance web applications using React.js, Next.js, TypeScript, JavaScript, and Node.js. 7+ years as sole technical owner of a publisher monetization ecosystem serving 340M+ monthly views, driving ad tech strategy across Desktop Web, Mobile Web, and AMP through Google Ad Manager (GAM/DFP), Prebid.js, Amazon Publisher Services (APS), and Header Bidding. Proven track record leading large-scale Next.js migrations, mentoring engineering teams, and integrating AI-assisted development tools (ChatGPT, Claude, Cursor, Codex) to accelerate delivery. Strong focus on Core Web Vitals, SSR, REST API architecture, and revenue-driving ad optimization.";

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
  { value: "15+", label: "Years Experience" },
  { value: "340M+", label: "Monthly Views" },
  { value: "90-110M", label: "Monthly Visits" },
  { value: "7+", label: "Yrs Ad Tech Ownership" },
] as const;

export const aboutHighlights = [
  "Sole technical owner of a publisher monetization stack serving 340M+ monthly views across Desktop Web, Mobile Web, and AMP.",
  "Deep expertise in Google Ad Manager (GAM/DFP), Prebid.js, Amazon Publisher Services (APS), and Header Bidding strategy.",
  "Led large-scale frontend migrations to React.js, Next.js, and TypeScript, improving Core Web Vitals across flagship products.",
  "Designed a centralized ad configuration platform deployed across 8 repositories, standardizing implementation for new properties.",
  "Migrated legacy XSLT applications to modern Next.js architecture, improving accessibility, maintainability, and performance.",
  "Mentors frontend engineers and integrates AI-assisted tools (Claude, ChatGPT, Cursor, Codex) to accelerate delivery.",
] as const;

export const adTech = {
  copy:
    "As sole technical owner of The Economic Times' publisher monetization stack, I architect ad solutions across Desktop Web, Mobile Web, and AMP — driving header bidding strategy, yield optimization, and platform standardization across 8 repositories.",
  stats: [
    { value: "340M+", label: "Monthly Views" },
    { value: "90-110M", label: "Monthly Visits" },
    { value: "8", label: "Repos Standardized" },
    { value: "7+", label: "Years Ownership" },
  ],
  tools: [
    "Google Ad Manager (GAM/DFP)",
    "Prebid.js",
    "Amazon Publisher Services (APS)",
    "Header Bidding",
    "Taboola",
    "VDO.AI",
    "Magnite",
    "Columbia Ad Platform",
  ],
} as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+/ES5)", "Redux", "HTML5", "CSS3", "jQuery"],
  },
  {
    title: "Backend / API",
    skills: ["Node.js", "REST APIs", "JWT Authentication", "Axios", "JSON", "MongoDB"],
  },
  {
    title: "Ad Tech & Monetization",
    skills: [
      "Google Ad Manager (GAM/DFP)",
      "Prebid.js",
      "Amazon Publisher Services (APS)",
      "Header Bidding",
      "Taboola",
      "VDO.AI",
      "Magnite",
    ],
  },
  {
    title: "Performance & SEO",
    skills: ["Core Web Vitals", "Lighthouse", "Google Search Console", "Chrome DevTools", "SSR"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (S3)", "Linode (Akamai Cloud)", "Git", "GitHub", "Bitbucket", "Jenkins", "Webpack", "Babel"],
  },
  {
    title: "AI-Assisted Development",
    skills: ["Claude", "ChatGPT", "Cursor", "Codex"],
  },
] as const;

export const projects = [
  {
    tag: "Featured",
    title: "Publisher Ad Configuration Platform",
    description:
      "Centralized ad configuration management platform standardizing monetization implementation across 8 repositories for The Economic Times.",
    stack: ["Next.js", "React.js", "Node.js", "GAM/DFP"],
    role: "Tech Lead – Sole Technical Owner",
    impact: "Cut integration time for new properties and standardized ad implementation across flagship products.",
  },
  {
    tag: "Featured",
    title: "ET Ad Management Panel",
    description:
      "Self-serve admin panel giving business teams control over configurable ad placements and monetization rules.",
    stack: ["Next.js", "React.js", "Node.js"],
    role: "Tech Lead",
    impact: "Removed engineering dependency for day-to-day ad configuration changes.",
  },
  {
    tag: "Project",
    title: "IPO Management Panel",
    description: "Internal panel for managing IPO-related content and data across Economic Times properties.",
    stack: ["Next.js", "React.js"],
    role: "Tech Lead",
    impact: "Streamlined business-team publishing workflows for time-sensitive IPO content.",
  },
  {
    tag: "Project",
    title: "Subscription Management Panel",
    description: "Admin tool for configuring and managing subscription data and access rules.",
    stack: ["Next.js", "React.js", "Node.js"],
    role: "Tech Lead",
    impact: "Gave business teams self-serve control over subscription configuration.",
  },
  {
    tag: "Project",
    title: "XSLT to Next.js Migration",
    description:
      "Large-scale migration of legacy XSLT applications to a modern Next.js architecture across flagship Economic Times products.",
    stack: ["Next.js", "SSR", "Migration"],
    role: "Tech Lead",
    impact: "Improved accessibility, maintainability, and Core Web Vitals scores.",
  },
  {
    tag: "Project",
    title: "FedEx Print Online",
    description: "Enterprise document printing, customization, and order management platform built at Infogain.",
    stack: ["React.js", "JavaScript", "CanJS", "AJAX"],
    role: "Sr. Consultant",
    impact: "Delivered scalable printing and order management capabilities for a global enterprise customer.",
  },
] as const;

export const caseStudies = [
  {
    title: "Publisher Monetization Ecosystem",
    problem:
      "Ad implementation across Desktop Web, Mobile Web, and AMP was inconsistent, slow to extend to new properties, and lacked a single technical owner.",
    solution:
      "Took sole technical ownership of the monetization stack and built a centralized ad configuration platform deployed across 8 repositories using Next.js, React.js, and Node.js.",
    stack: ["Next.js", "React.js", "Node.js", "GAM/DFP", "Prebid.js", "APS"],
    role: "Tech Lead – Sole Technical Owner",
    features: [
      "Header Bidding via Prebid.js and APS",
      "Centralized ad configuration platform",
      "Cross-property standardization",
      "Desktop, Mobile Web, and AMP support",
    ],
    impact: "Sustained monetization for 340M+ monthly views and 90-110M monthly visits with faster rollout to new properties.",
  },
  {
    title: "Legacy XSLT to Next.js Migration",
    problem: "Flagship pages ran on legacy XSLT, limiting accessibility, maintainability, and further performance improvements.",
    solution: "Directed a large-scale migration to React.js, Next.js, and TypeScript with a focus on SSR and Core Web Vitals.",
    stack: ["Next.js", "React.js", "TypeScript", "SSR"],
    role: "Tech Lead",
    features: [
      "SSR-based rendering",
      "Improved Core Web Vitals",
      "Modern component architecture",
      "Accessibility improvements",
    ],
    impact: "Measurable Core Web Vitals gains and a more maintainable codebase across flagship products.",
  },
  {
    title: "Self-Serve Business Admin Panels",
    problem: "Business teams depended on engineering for routine ad, IPO, and subscription configuration changes.",
    solution: "Built the ET Ad Management Panel, IPO Management Panel, and Subscription Management Panel using Next.js and React.js.",
    stack: ["Next.js", "React.js", "Node.js"],
    role: "Tech Lead",
    features: [
      "Self-serve configuration UI",
      "Role-based access",
      "Real-time updates to production ad rules",
      "Subscription data management",
    ],
    impact: "Reduced engineering turnaround for business-driven configuration changes across ad, IPO, and subscription workflows.",
  },
  {
    title: "FedEx Print Online Enterprise Platform",
    problem: "FedEx needed a scalable enterprise platform for document printing, customization, and order management.",
    solution: "Built and enhanced the platform using React.js, JavaScript, CanJS, HTML5, CSS3, AJAX, and JSON.",
    stack: ["React.js", "JavaScript", "CanJS", "AJAX"],
    role: "Sr. Consultant",
    features: ["Document customization workflows", "Order management", "Enterprise-scale printing pipeline"],
    impact: "Delivered scalable printing and order management capabilities for a global enterprise customer.",
  },
] as const;

export const experience = [
  {
    period: "May 2019 to Present",
    company: "The Economic Times (Times Internet)",
    role: "Tech Lead – Front End Development",
    location: "Noida, India",
    points: [
      "Serve as sole technical owner of the publisher monetization stack supporting 340M+ monthly views and 90–110M monthly visits, architecting ad solutions across Desktop Web, Mobile Web, and AMP using GAM/DFP, Prebid.js, APS, and Header Bidding.",
      "Designed and built a centralized ad configuration management platform (Next.js, React.js, Node.js) deployed across 8 repositories, standardizing ad implementation and cutting integration time for new properties.",
      "Directed frontend architecture and large-scale migration initiatives to React.js, Next.js, and TypeScript, improving Core Web Vitals scores and overall application performance across flagship products.",
      "Migrated legacy XSLT applications to modern Next.js architecture, improving accessibility, maintainability, and page performance.",
      "Built and shipped the ET Ad Management Panel, IPO Management Panel, and Subscription Management Panel (Next.js, React.js), giving business teams self-serve control over configurable ads and subscription data.",
      "Mentored a team of frontend engineers, leading development for Economic Times Web and Mobile Web platforms and establishing engineering best practices.",
      "Integrated AI-assisted development tools (Claude, ChatGPT, Cursor, Codex) into team workflows, improving code review turnaround and production velocity.",
    ],
  },
  {
    period: "Mar 2016 to May 2019",
    company: "Infogain India Private Limited",
    role: "Sr. Consultant",
    location: "Noida, India",
    points: [
      "Developed and enhanced the FedEx Print Online enterprise platform using React.js, JavaScript, CanJS, HTML5, CSS3, AJAX, and JSON, delivering scalable document printing, customization, and order management capabilities.",
    ],
  },
  {
    period: "Jan 2014 to Mar 2016",
    company: "Capgemini India Private Limited",
    role: "Consultant",
    location: "Pune, India",
    points: [
      "Built secure, scalable online banking features for the HSBC Banking Platform using JavaScript, Dojo, jQuery, AJAX, HTML5, CSS3, and JSON.",
    ],
  },
  {
    period: "Oct 2011 to Sep 2013",
    company: "Samsung India Software Centre",
    role: "Senior Software Engineer",
    location: "Noida, India",
    points: [
      "Developed Smart TV applications using JavaScript, HTML5, and the Samsung SDK.",
      "Led a multithreading migration initiative across 200+ Smart TV applications.",
      "Received the Best Mentor Award (2012) for outstanding contribution to team development.",
    ],
  },
  {
    period: "Mar 2011 to Oct 2011",
    company: "ONS Interactive Solutions Pvt. Ltd",
    role: "Senior Software Engineer",
    location: "Noida, India",
    points: [
      "Enhanced enterprise e-commerce platforms using PHP, MySQL, JavaScript, jQuery, AJAX, and Magento, delivering new features, bug fixes, and performance improvements.",
    ],
  },
  {
    period: "Oct 2008 to Mar 2011",
    company: "Chetu (I) Pvt. Ltd",
    role: "Software Engineer",
    location: "Noida, India",
    points: [
      "Built scalable e-commerce solutions for PC Game Supply using PHP, MySQL, JavaScript, jQuery, and AJAX, including secure payment workflows and digital product delivery.",
    ],
  },
  {
    period: "Jan 2008 to Oct 2008",
    company: "KLG SYSTEL LTD",
    role: "Software Programmer",
    location: "Gurgaon, India",
    points: [
      "Developed enterprise web applications for Isha Foundation, including a contact management system and an online event registration portal, using PHP, MySQL, JavaScript, and AJAX.",
    ],
  },
  {
    period: "Apr 2007 to Jan 2008",
    company: "H114 Technologies",
    role: "Developer",
    location: "India",
    points: [
      "Built a recruitment management portal using PHP, MySQL, JavaScript, and AJAX for managing job openings and candidate resumes.",
    ],
  },
] as const;

export const aiWorkflow = [
  "ChatGPT and Claude for architecture planning, debugging, and technical documentation.",
  "Cursor and Codex for code generation, refactoring, and faster implementation.",
  "AI-assisted code review integrated into team workflows, improving turnaround and production velocity.",
  "Mentors engineers on integrating AI tools responsibly into day-to-day development.",
  "Actively expanding skills in Python, AI tooling, and automation.",
] as const;

export const blogPosts = [
  {
    tag: "Ad Tech",
    title: "Header Bidding with Prebid.js and GAM: A Practical Guide",
    excerpt: "Setting up Prebid.js alongside Google Ad Manager for header bidding, yield management, and demand partner integration.",
  },
  {
    tag: "Next.js",
    title: "Migrating Legacy XSLT to Next.js at Scale",
    excerpt: "Lessons from migrating high-traffic publisher pages to Next.js without sacrificing SEO or Core Web Vitals.",
  },
  {
    tag: "Performance",
    title: "Core Web Vitals for High-Traffic Publisher Sites",
    excerpt: "Practical techniques for improving LCP, INP, and CLS on ad-heavy, content-dense pages.",
  },
  {
    tag: "AI Workflow",
    title: "Using Claude, ChatGPT, Cursor, and Codex in a Production Team",
    excerpt: "How AI-assisted development tools fit into a disciplined, review-driven engineering workflow.",
  },
  {
    tag: "Architecture",
    title: "Building a Centralized Ad Configuration Platform",
    excerpt: "Design decisions behind standardizing ad implementation across 8 repositories and multiple properties.",
  },
] as const;

export const resumeStats = [
  { value: "15+", label: "Years Experience" },
  { value: "340M+", label: "Monthly Views" },
  { value: "90-110M", label: "Monthly Visits" },
  { value: "8", label: "Repos Standardized" },
  { value: "7+", label: "Yrs Ad Tech Ownership" },
] as const;

export const resumeSkillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+/ES5)",
      "Redux",
      "HTML5",
      "CSS3",
      "jQuery",
      "Responsive Design",
    ],
  },
  {
    title: "Backend / API",
    skills: ["Node.js", "REST APIs", "JWT Authentication", "Axios", "JSON", "MongoDB"],
  },
  {
    title: "Ad Tech / Monetization",
    skills: [
      "Google Ad Manager (GAM/DFP)",
      "Prebid.js",
      "Amazon Publisher Services (APS)",
      "Header Bidding",
      "Taboola",
      "VDO.AI",
      "Magnite",
      "Columbia Ad Platform",
    ],
  },
  {
    title: "Performance & SEO",
    skills: ["Core Web Vitals", "Lighthouse", "Google Search Console", "Chrome DevTools", "Server-Side Rendering (SSR)"],
  },
  {
    title: "Cloud & DevOps / Build Tools",
    skills: ["AWS (S3)", "Linode (Akamai Cloud)", "Git", "GitHub", "Bitbucket", "Jenkins", "Webpack", "Babel", "NPM", "Yarn"],
  },
  {
    title: "AI-Assisted Development",
    skills: ["Claude", "ChatGPT", "Cursor", "Codex"],
  },
  {
    title: "Practices",
    skills: ["Agile/Scrum", "Team Leadership & Mentoring", "Enterprise Application Architecture"],
  },
] as const;

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "B.P. Poddar Institute of Management & Technology",
    period: "2000 – 2006",
    detail: "75.2%",
  },
] as const;

export const additionalStrengths = [
  "Excellent debugging and problem-solving skills; quick learner with a strong work ethic.",
  "Strong mentorship track record, committed to deadlines and delivery quality.",
  "Actively expanding skills in Python, AI tooling, and automation.",
] as const;

export const heroPages = {
  about: {
    eyebrow: "Immediate Joiner",
    title: "About Priyabrata",
    subtitle: "Frontend Tech Lead specializing in Ad Tech, monetization, and large-scale Next.js migrations",
    copy:
      "7+ years as sole technical owner of a publisher monetization ecosystem at The Economic Times, with 15+ years overall building scalable frontend systems across enterprise, banking, and consumer platforms.",
    actions: [
      { href: profile.resumeFile, label: "Download Resume", primary: true },
      { href: "/contact", label: "Let's Connect", primary: false },
    ],
  },
  work: {
    eyebrow: "Immediate Joiner",
    title: "Projects",
    subtitle: "Ad tech platforms, publisher tools, and large-scale frontend migrations",
    copy: "Selected work across publisher monetization, business admin tools, enterprise platforms, and Next.js migrations.",
    actions: [],
  },
  blog: {
    eyebrow: undefined,
    title: "Blog",
    subtitle: "Ad tech, performance, and AI-assisted engineering topics",
    copy: "Article ideas drawn from real work in header bidding, Next.js migrations, Core Web Vitals, and AI-assisted development.",
    actions: [],
  },
  contact: {
    eyebrow: "Immediate Joiner",
    title: "Contact",
    subtitle: "Immediate Joiner available for Staff/Lead frontend and ad tech roles",
    copy:
      "Reach out for Staff Software Engineer, Frontend Tech Lead, Senior Frontend Engineer, Ad Tech, or Monetization-focused roles, consulting, or product collaboration.",
    actions: [],
  },
  resume: {
    eyebrow: "Resume | Immediate Joiner",
    title: "Priyabrata Bera",
    resumeTitle: "Staff Software Engineer | Frontend Tech Lead | Ad Tech & Monetization Specialist",
    subtitle: "React.js · Next.js · TypeScript · Node.js · Ad Tech",
    copy:
      "Immediate Joiner with 15+ years of experience architecting scalable frontend applications, and 7+ years as sole technical owner of a publisher monetization ecosystem serving 340M+ monthly views.",
    actions: [
      { href: profile.resumeFile, label: "Download Resume", primary: true },
      { href: "/contact", label: "Contact Me", primary: false },
      { href: "/work", label: "View Projects", primary: false },
    ],
  },
} as const;
