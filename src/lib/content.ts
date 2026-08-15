export const profile = {
  name: "Priyabrata Bera",
  initials: "PB",
  title: "Staff Frontend Engineer | Frontend Architect | AI Engineer",
  tagline: "React.js · Next.js · JavaScript · TypeScript · Tailwind CSS · Node.js · REST API · Python · FastAPI · GenAI · RAG · LLM",
  summary:
    "Frontend Architect and Tech Lead with 15+ years building scalable, high-performance web applications across media, banking, ecommerce, and enterprise platforms — now building end-to-end GenAI applications with LLM integration and RAG pipelines.",
  photoAlt: "Priyabrata Bera profile photo",
  email: "priyabrata.bera@gmail.com",
  phoneDisplay: "+91 9158617600",
  phoneTel: "+919158617600",
  whatsapp: "https://wa.me/919158617600",
  location: "Noida, India",
  website: "https://priyabrata.tech",
  linkedin: "https://www.linkedin.com/in/priyabrata-bera-6501b019/",
  github: "https://github.com/priyabratabera",
  resumeFile: "/assets/Priyabrata_Bera_Resume.pdf",
} as const;

export const professionalSummary =
  "Frontend Architect and Tech Lead with 15+ years of experience building scalable, high-performance web applications for media, banking, ecommerce, and enterprise platforms. Expert in React.js, Next.js, TypeScript, JavaScript, Node.js, frontend architecture, performance optimization, and engineering leadership. Led large-scale frontend modernization initiatives, mentored engineering teams, and delivered business-critical products used by millions of users. Hands-on with GenAI application development, including LLM integration, RAG pipelines, and AI-assisted engineering workflows using Claude, ChatGPT, Cursor, and Codex. Strong focus on Core Web Vitals, SSR, REST API design, and frontend performance optimization.";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/map", label: "Map" },
] as const;

export const socialLinks = [
  { href: profile.linkedin, label: "LinkedIn", icon: "linkedin" },
  { href: profile.github, label: "GitHub", icon: "github" },
  { href: profile.website, label: "Website", icon: "website" },
  { href: `mailto:${profile.email}`, label: "Email", icon: "envelope" },
  { href: profile.whatsapp, label: "WhatsApp", icon: "whatsapp" },
] as const;

export const heroStats = [
  { value: "15+", label: "Years Experience" },
  { value: "Core Web Vitals", label: "Performance Optimization" },
  { value: "4", label: "AI Dev Tools" },
  { value: "3", label: "GenAI Projects" },
] as const;

export const aboutHighlights = [
  "Frontend Architect and Tech Lead with 15+ years building scalable, high-performance web applications across media, banking, ecommerce, and enterprise platforms.",
  "Builds end-to-end GenAI applications — LLM integration, RAG pipelines, streaming responses, and local inference with Ollama.",
  "Led large-scale frontend migrations to React.js, Next.js, and TypeScript, improving Core Web Vitals across flagship products.",
  "Designed a centralized configuration management platform deployed across 8 repositories, standardizing implementation patterns for new properties.",
  "Migrated legacy XSLT applications to modern Next.js architecture, improving accessibility, maintainability, and performance.",
  "Mentors engineering teams and integrates AI-assisted tools (Claude, ChatGPT, Cursor, Codex) to accelerate delivery.",
] as const;

export const genAi = {
  copy:
    "Self-initiated projects built outside of professional work to explore end-to-end GenAI application development — LLM integration, RAG pipelines, streaming responses, and local inference with Ollama.",
  projects: [
    {
      title: "AI Conversational Assistant",
      stack: ["Next.js", "React.js", "Node.js / Python", "FastAPI", "Ollama", "Streaming", "LLM"],
      points: [
        "Built an end-to-end AI conversational application using Next.js/React.js and locally hosted Ollama LLMs.",
        "Developed backend APIs with FastAPI/Node.js for LLM interaction and conversation management.",
        "Implemented streaming AI responses for a real-time experience, with conversation memory to maintain context across interactions.",
        "Designed an LLM provider abstraction layer supporting multiple providers, with configurable system-prompt management to control model behavior.",
      ],
    },
    {
      title: "RAG-Based Document Intelligence Application",
      stack: ["Next.js", "React.js", "Python", "FastAPI", "ChromaDB", "Embeddings", "Ollama", "RAG"],
      points: [
        "Built an end-to-end Retrieval-Augmented Generation (RAG) application for intelligent question answering over PDF documents.",
        "Implemented PDF extraction, text chunking, embedding generation, and vector storage in ChromaDB with semantic retrieval of the most relevant chunks per query.",
        "Applied grounded prompting to constrain responses to retrieved context and reduce hallucinations; integrated Ollama for local inference with streaming through FastAPI.",
        "Added source citations with document name, page number, and relevant content snippets.",
        "Designed modular backend services separating document processing, embeddings, retrieval, prompt construction, and generation.",
      ],
    },
    {
      title: "AI Personalized News Intelligence Platform",
      stack: ["Next.js", "React.js", "Python", "FastAPI", "Embeddings", "Vector Search", "Ollama", "LLM"],
      points: [
        "Built a GenAI platform that aggregates news and delivers personalized, topic-aware feeds using embeddings and semantic vector search.",
        "Generated concise, LLM-powered summaries of long-form articles for faster reading, with streaming responses served through FastAPI.",
        "Modeled reader interests from engagement signals to rank and recommend the most relevant stories per user.",
        "Integrated locally hosted Ollama LLMs for summarization and semantic understanding, keeping inference private and low-cost.",
      ],
    },
  ],
} as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+/ES5)", "Redux", "HTML5", "CSS3", "jQuery", "Responsive Design", "Figma"],
  },
  {
    title: "Backend / API",
    skills: ["Node.js", "REST APIs", "JWT Authentication", "Axios", "JSON", "MongoDB", "Python", "FastAPI"],
  },
  {
    title: "GenAI / AI Engineering",
    skills: ["LLM Integration", "RAG", "Ollama", "ChromaDB", "Embeddings", "Prompt Engineering", "Streaming Responses", "Vector Search"],
  },
  {
    title: "Performance & SEO",
    skills: ["Core Web Vitals", "Lighthouse", "Google Search Console", "Chrome DevTools", "SSR"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Linode (Akamai Cloud)", "Git", "GitHub", "Bitbucket", "Jenkins"],
  },
  {
    title: "AI-Assisted Development",
    skills: ["Claude", "ChatGPT", "Cursor", "Codex"],
  },
] as const;

export const projects = [
  {
    tag: "Featured",
    title: "AI Conversational Assistant",
    description:
      "End-to-end AI conversational app using Next.js/React.js and locally hosted Ollama LLMs, with streaming responses and conversation memory.",
    stack: ["Next.js", "FastAPI", "Ollama", "LLM"],
    role: "Personal / Self-Driven",
    impact: "Real-time streaming chat with an LLM provider abstraction layer and configurable system prompts.",
  },
  {
    tag: "Featured",
    title: "RAG-Based Document Intelligence",
    description:
      "Retrieval-Augmented Generation app for question answering over PDFs, with embeddings, vector search, and grounded, cited answers.",
    stack: ["Next.js", "Python", "ChromaDB", "RAG"],
    role: "Personal / Self-Driven",
    impact: "Grounded responses with source citations (document, page, snippet) and reduced hallucinations.",
  },
  {
    tag: "Featured",
    title: "AI Personalized News Intelligence Platform",
    description:
      "GenAI platform delivering personalized, topic-aware news feeds with embeddings, semantic search, and LLM-powered article summaries.",
    stack: ["Next.js", "FastAPI", "Embeddings", "Ollama"],
    role: "Personal / Self-Driven",
    impact: "Personalized recommendations and concise summaries with private, local LLM inference.",
  },
  {
    tag: "Featured",
    title: "Centralized Configuration Management Platform",
    description:
      "Configuration management platform standardizing implementation patterns across 8 repositories at The Economic Times.",
    stack: ["Next.js", "React.js", "Node.js"],
    role: "Tech Lead",
    impact: "Cut integration time for new properties and standardized patterns across flagship products.",
  },
  {
    tag: "Project",
    title: "Internal Admin Panels",
    description:
      "Management and subscription admin panels giving business teams self-serve control over configurable content and data.",
    stack: ["Next.js", "React.js", "Node.js"],
    role: "Tech Lead",
    impact: "Removed engineering dependency for day-to-day content and subscription changes.",
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
    title: "RAG-Based Document Intelligence Application",
    problem:
      "Extracting reliable answers from large PDF documents is slow and error-prone, and general LLMs hallucinate without grounding in the source material.",
    solution:
      "Built an end-to-end RAG pipeline — PDF extraction, text chunking, embeddings, and ChromaDB vector storage — with semantic retrieval and grounded prompting, served through FastAPI and Ollama.",
    stack: ["Next.js", "Python", "FastAPI", "ChromaDB", "Ollama", "RAG"],
    role: "Personal / Self-Driven",
    features: [
      "PDF extraction and text chunking",
      "Embedding generation with ChromaDB vector search",
      "Grounded prompting to reduce hallucinations",
      "Source citations with document, page, and snippet",
    ],
    impact: "Accurate, cited answers grounded in document context, with local streaming inference via Ollama and FastAPI.",
  },
  {
    title: "AI Conversational Assistant",
    problem: "Building a real-time conversational AI that maintains context across turns without being locked to a single LLM provider.",
    solution:
      "Built a streaming chat application on Next.js/React.js with a FastAPI/Node.js backend, conversation memory, and an LLM provider abstraction layer.",
    stack: ["Next.js", "React.js", "FastAPI", "Node.js", "Ollama", "LLM"],
    role: "Personal / Self-Driven",
    features: [
      "Streaming AI responses",
      "Conversation memory across interactions",
      "LLM provider abstraction layer",
      "Configurable system-prompt management",
    ],
    impact: "A responsive, provider-agnostic conversational experience running on locally hosted Ollama models.",
  },
  {
    title: "Centralized Configuration Management Platform",
    problem: "Implementation patterns were inconsistent across properties and slow to extend to new repositories, lacking a single standard.",
    solution:
      "Designed and built a centralized configuration management platform (Next.js, React.js, Node.js) deployed across 8 repositories to standardize implementation.",
    stack: ["Next.js", "React.js", "Node.js"],
    role: "Tech Lead",
    features: [
      "Centralized configuration management",
      "Cross-repository standardization",
      "Self-serve business tooling",
      "Reusable implementation patterns",
    ],
    impact: "Standardized implementation across 8 repositories and cut integration time for new properties.",
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
] as const;

export const experience = [
  {
    period: "May 2019 to Present",
    company: "The Economic Times (Times Internet)",
    role: "Tech Lead – Front End Development",
    location: "Noida, India",
    points: [
      "Directed frontend architecture and led large-scale migration initiatives to React.js, Next.js, and TypeScript, improving Core Web Vitals scores and overall application performance across flagship products.",
      "Migrated legacy XSLT applications to modern Next.js architecture, improving accessibility, maintainability, and page performance.",
      "Designed and built a centralized configuration management platform (Next.js, React.js, Node.js) deployed across 8 repositories, standardizing implementation patterns and cutting integration time for new properties.",
      "Built and shipped multiple internal admin panels (Next.js, React.js) — including management and subscription tools — giving business teams self-serve control over configurable content and data.",
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
] as const;

export const aiWorkflow = [
  "Built self-driven GenAI applications: a streaming conversational assistant and a RAG document-intelligence app.",
  "ChatGPT and Claude for architecture planning, debugging, and technical documentation.",
  "Cursor and Codex for code generation, refactoring, and faster implementation.",
  "AI-assisted code review integrated into team workflows, improving turnaround and production velocity.",
  "Mentors engineers on integrating AI tools responsibly into day-to-day development.",
  "Actively expanding skills in Python, GenAI tooling, and automation.",
] as const;

export const blogPosts = [
  {
    tag: "RAG",
    title: "Building a RAG Document Intelligence App with ChromaDB and Ollama",
    excerpt: "PDF extraction, chunking, embeddings, and grounded prompting for accurate, cited answers over your own documents.",
  },
  {
    tag: "LLM",
    title: "Streaming Responses and Conversation Memory in a Next.js AI App",
    excerpt: "Designing a real-time conversational assistant with an LLM provider abstraction layer and configurable system prompts.",
  },
  {
    tag: "Next.js",
    title: "Migrating Legacy XSLT to Next.js at Scale",
    excerpt: "Lessons from migrating high-traffic pages to Next.js without sacrificing SEO or Core Web Vitals.",
  },
  {
    tag: "Performance",
    title: "Core Web Vitals for High-Traffic Content Sites",
    excerpt: "Practical techniques for improving LCP, INP, and CLS on content-dense pages.",
  },
  {
    tag: "AI Workflow",
    title: "Using Claude, ChatGPT, Cursor, and Codex in a Production Team",
    excerpt: "How AI-assisted development tools fit into a disciplined, review-driven engineering workflow.",
  },
] as const;

export const resumeStats = [
  { value: "15+", label: "Years Experience" },
  { value: "Core Web Vitals", label: "Performance Optimization" },
  { value: "4", label: "AI Dev Tools" },
  { value: "3", label: "GenAI Projects" },
  { value: "6", label: "Companies" },
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
      "Figma",
      "Pixel-perfect Design",
    ],
  },
  {
    title: "Backend / API",
    skills: ["Node.js", "REST APIs", "JWT Authentication", "Axios", "JSON", "MongoDB", "Python", "FastAPI", "Basics of Java"],
  },
  {
    title: "GenAI / AI Engineering",
    skills: [
      "LLM Integration",
      "RAG (Retrieval-Augmented Generation)",
      "Ollama",
      "ChromaDB",
      "Embeddings",
      "Prompt Engineering",
      "Streaming Responses",
      "Vector Search",
    ],
  },
  {
    title: "Performance & SEO",
    skills: ["Core Web Vitals", "Lighthouse", "Google Search Console", "Chrome DevTools", "Server-Side Rendering (SSR)"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Linode (Akamai Cloud)", "Git", "GitHub", "Bitbucket", "Jenkins"],
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
  "Actively expanding skills in Python, GenAI tooling, and automation.",
] as const;

export const heroPages = {
  about: {
    eyebrow: "Immediate Joiner",
    title: "About Priyabrata",
    subtitle: "Frontend Architect and AI Engineer specializing in scalable React/Next.js systems and GenAI applications",
    copy:
      "15+ years building scalable frontend systems across media, banking, ecommerce, and enterprise platforms — now building end-to-end GenAI applications with LLM integration and RAG pipelines.",
    actions: [
      { href: profile.resumeFile, label: "Download Resume", primary: true },
      { href: "/contact", label: "Let's Connect", primary: false },
    ],
  },
  work: {
    eyebrow: "Immediate Joiner",
    title: "Projects",
    subtitle: "GenAI applications, publisher tools, and large-scale frontend migrations",
    copy: "Selected work across GenAI apps, business admin tools, enterprise platforms, and Next.js migrations.",
    actions: [],
  },
  blog: {
    eyebrow: undefined,
    title: "Blog",
    subtitle: "GenAI, performance, and AI-assisted engineering topics",
    copy: "Article ideas drawn from real work in RAG, LLM apps, Next.js migrations, Core Web Vitals, and AI-assisted development.",
    actions: [],
  },
  contact: {
    eyebrow: "Immediate Joiner",
    title: "Contact",
    subtitle: "Immediate Joiner available for Staff/Lead frontend and AI engineering roles",
    copy:
      "Reach out for Staff Frontend Engineer, Frontend Architect, Full-Stack Developer, or AI Engineer roles, consulting, or product collaboration.",
    actions: [],
  },
  resume: {
    eyebrow: "Resume | Immediate Joiner",
    title: "Priyabrata Bera",
    resumeTitle: "Staff Frontend Engineer | Frontend Architect | Full-Stack Developer | AI Engineer",
    subtitle: "React.js · Next.js · TypeScript · Node.js · Python · GenAI",
    copy:
      "Immediate Joiner with 15+ years architecting scalable frontend applications, now building end-to-end GenAI applications with LLM integration and RAG pipelines.",
    actions: [
      { href: profile.resumeFile, label: "Download Resume", primary: true },
      { href: "/contact", label: "Contact Me", primary: false },
      { href: "/work", label: "View Projects", primary: false },
    ],
  },
  map: {
    eyebrow: undefined,
    title: "Map",
    subtitle: `Based in ${profile.location}`,
    copy: "Find my location on the map below, or reach out via the contact page to connect.",
    actions: [],
  },
} as const;
