// Single source of truth for all portfolio content.
//
// This used to be served from MongoDB through /api/portfolio + Redux on every
// page load, which made the site slow. It is now a static object that is
// bundled at build time, so the page renders instantly with no network calls.
//
// To update your portfolio, just edit the values below.

export interface ImageRef {
  public_id?: string
  url: string
}

export interface VideoRef {
  public_id?: string
  url: string
  duration?: number
  width?: number
  height?: number
  format?: string
  bytes?: number
}

export interface SocialLink {
  name: string
  url: string
  icon: ImageRef
  navbar: boolean
}

export interface Contact {
  email: string
  tel: string
  social: SocialLink[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface WorkItem {
  /** Job title / role — shown as the bold heading. */
  role: string
  /** Company / project / org name. */
  company: string
  link: string
  location: string
  logoUrl: ImageRef
  start: string
  end: string
  /** Optional one-line context about the company (shown under the title). */
  context?: string
  /** A single paragraph, or an array of bullet points. */
  description: string | string[]
}

export interface EducationItem {
  school: string
  link: string
  degree: string
  logoUrl: ImageRef
  start: string
  end: string
}

export interface ProjectLink {
  type: string
  link: string
}

export interface CaseStudy {
  youtubeVideoUrl?: string
  projectOverview?: string
  keyFeatures?: string[]
  databaseArchitectureImage?: ImageRef
  systemArchitectureImage?: ImageRef
  systemArchitecture?: { title: string; description: string }[]
  challengesAndSolutions?: { title: string; challenge: string; solution: string }[]
}

export interface Project {
  /** Used as the slug for the case-study route: /projects/[_id] */
  _id: string
  title: string
  link: string
  dates: string
  active: boolean
  description: string
  technologies: string[]
  links: ProjectLink[]
  video?: VideoRef
  caseStudy?: CaseStudy
  /** True for learning / course projects — shown in a separate "Practice Projects" section. */
  practice?: boolean
}

export interface Hackathon {
  title: string
  dates: string
  location: string
  description?: string
  image: ImageRef
}

export interface Portfolio {
  name: string
  initials: string
  headline: string
  location: string
  locationLink: string
  description: string
  summary: string
  avatarUrl: ImageRef
  resumeUrl: string
  skills: SkillGroup[]
  contact: Contact
  work: WorkItem[]
  education: EducationItem[]
  projects: Project[]
  hackathons: Hackathon[]
}

export const PORTFOLIO: Portfolio = {
  name: "Zain Ul Abedin",
  initials: "ZA",
  headline: "Full Stack Engineer & AI Engineer",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/Lahore",
  description:
    "Full Stack (MERN) & AI Engineer. I build LLM-powered apps with LangChain, RAG, and the OpenAI SDK, train large language models on competitive programming and reasoning, and ship pull requests to large open-source React Native projects like New Expensify and Joplin.",
  summary:
    "I'm a **Full Stack Engineer (MERN)** and **AI Engineer** who builds LLM-powered products end to end — from voice interfaces and RAG pipelines to scalable Node.js backends and React / React Native frontends.\n\nI'm the founder and maintainer of **VoiceyBill**, an open-source AI expense tracker; I train large language models at **Turing** to solve competitive-programming and multi-step reasoning problems; and I ship pull requests to large open-source projects like **New Expensify** and **Joplin**. Alongside the engineering, I mentor 50+ aspiring developers at **Dev Weekends** (one of Pakistan's largest dev communities, 20k+ members) and lead workshops as **Tech Lead at GDGoC-UE**.\n\nI care about clean architecture, strong written communication, and shipping things real people use.",
  avatarUrl: {
    public_id: "portfolio/x0vpzxbv2cekmy4rsutg",
    url: "https://res.cloudinary.com/do1vxto50/image/upload/v1760895606/portfolio/x0vpzxbv2cekmy4rsutg.jpg",
  },
  // Served from /public — clicking the button downloads it directly (no Google Drive).
  resumeUrl: "/Zain-Ul-Abedin-Resume.pdf",
  skills: [
    {
      category: "AI Engineering",
      items: [
        "LangChain",
        "LangGraph",
        "RAG",
        "CrewAI",
        "OpenAI SDK",
        "MCP",
        "OpenAI API",
        "Uplift AI (Voice)",
        "Prompt Engineering",
      ],
    },
    {
      category: "LLM & Evaluation",
      items: [
        "LLM Training & Evaluation",
        "AI Response Refinement",
        "Function-Calling / Tool Use",
        "Reasoning",
        "Competitive Programming",
      ],
    },
    {
      category: "Web & Mobile",
      items: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "React Native",
        "Redux",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "HTML & CSS",
      ],
    },
    {
      category: "Architecture, DevOps & Cloud",
      items: [
        "Microservices",
        "Event-Driven (NATS)",
        "REST APIs",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Jenkins",
        "Nginx",
        "AWS (EC2 / ECS / ECR / S3)",
        "Google Cloud",
      ],
    },
    {
      category: "Databases & Tooling",
      items: ["MongoDB", "SQL", "Redis", "Git & GitHub", "Code Review"],
    },
    {
      category: "CS Fundamentals",
      items: ["DSA", "OOP (C++)", "LeetCode 150+", "Problem-Solving", "APIs / JSON"],
    },
  ],
  contact: {
    email: "zain9175zain@gmail.com",
    tel: "+92 311 0861625",
    social: [
      {
        name: "Leetcode",
        url: "https://leetcode.com/u/zain4178/",
        navbar: true,
        icon: {
          public_id: "portfolio/welua39jhxbw2n07gq4f",
          url: "https://res.cloudinary.com/do1vxto50/image/upload/v1753976145/portfolio/welua39jhxbw2n07gq4f.png",
        },
      },
    ],
  },
  work: [
    {
      role: "Founder & Open-Source Maintainer",
      company: "VoiceyBill",
      link: "https://www.voiceybill.com/",
      location: "Remote",
      logoUrl: { url: "/voiceybill.png" },
      start: "April 2026",
      end: "Present",
      description: [
        "Built and released VoiceyBill, an open-source personal expense tracker spanning a mobile app, web app, and Node.js backend that lets users log income and expenses by voice.",
        "Integrated Uplift AI voice models and the OpenAI API to power voice input, AI receipt scanning, and smart auto-categorization, with analytics dashboards and scheduled email reports.",
        "Ran it as a project in Dev Weekends Summer of Code (DSOC): opened issues, reviewed contributor pull requests, mentored contributors, and selected finalists based on PR quality and codebase understanding.",
      ],
    },
    {
      role: "Open-Source Contributor",
      company: "Joplin & Open Source",
      link: "https://github.com/laurent22/joplin/",
      location: "Remote",
      logoUrl: { url: "/joplin.jpg" },
      start: "February 2026",
      end: "April 2026",
      description: [
        "Contributed to open-source projects including Joplin, an open-source note-taking app, submitting and shipping pull requests while preparing for Google Summer of Code (GSoC).",
        "Navigated large TypeScript and React Native codebases, fixed issues, and followed each project's contribution guidelines, code-review, and testing standards.",
      ],
    },
    {
      role: "LLM Trainer",
      company: "Turing",
      link: "https://www.turing.com/",
      location: "Remote",
      logoUrl: { url: "/turing.png" },
      start: "October 2025",
      end: "January 2026",
      context:
        "Turing is a leading applied-AI company and a key coding & training-data partner to OpenAI and other frontier LLM labs — Series E at a ~$2.2B valuation (~$300M ARR), powered by a 4M+ global developer network.",
      description: [
        "Worked within Turing's AGI Advancement program, producing expert human data used to train and evaluate frontier large language models.",
        "Trained LLMs to solve complex competitive-programming problems and strengthen multi-step reasoning, generating high-quality proprietary data for fine-tuning and benchmark evaluation.",
        "Created, evaluated, and refined AI-generated code responses for accuracy, efficiency, and alignment with high coding standards across multiple programming languages.",
        "Designed multi-turn conversations and agent-completion scenarios simulating realistic user–assistant interactions, including function-calling and tool use across calendar, email, maps, and drive.",
        "Authored edge-case scenarios and reference solutions, identifying model failure modes and iterating to improve correctness, reasoning, and instruction-following.",
      ],
    },
    {
      role: "Open-Source Contributor",
      company: "New Expensify (Expensify/App)",
      link: "https://github.com/Expensify/App",
      location: "Remote",
      logoUrl: { url: "/expensify.png" },
      start: "July 2025",
      end: "October 2025",
      description: [
        "Contributed to New Expensify, a large, widely-used open-source React Native expense-management and financial-collaboration platform.",
        "Authored and submitted pull requests addressing UI and functionality issues across a production-grade, offline-first codebase built on the Onyx state-management library.",
        "Collaborated through GitHub code review, adhering to strict contribution standards, linting, and testing requirements.",
      ],
    },
  ],
  education: [
    {
      school: "University of Education, Lahore",
      link: "https://ue.edu.pk/",
      degree: "B.S. in Computer Science · GPA 3.5",
      logoUrl: {
        public_id: "portfolio/u4argzw3y8kwwtftiupv",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1753976484/portfolio/u4argzw3y8kwwtftiupv.jpg",
      },
      start: "August 2023",
      end: "May 2027",
    },
    {
      school: "Govt. Graduate College Township, Lahore",
      link: "http://gctownship.edu.pk/",
      degree: "Faculty of Science (FSc, Pre-Engineering)",
      logoUrl: {
        public_id: "portfolio/qn13fsoydhfa6mvfpqtv",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754009780/portfolio/qn13fsoydhfa6mvfpqtv.jpg",
      },
      start: "March 2021",
      end: "July 2023",
    },
  ],
  // Listed in display order (most impressive / recent first).
  projects: [
    {
      _id: "marketnest",
      title: "MarketNest — Multi-Vendor E-Commerce",
      link: "https://multivendor-client.vercel.app/",
      dates: "April 2025 – June 2025",
      active: false,
      practice: true,
      description:
        "A full-stack, multi-vendor e-commerce platform (MERN) where vendors register, list products, and manage orders. Features real-time vendor–customer chat with Socket.io, JWT + Clerk authentication with email verification via NodeMailer, and secure payments through Stripe and PayPal. Complex global state is managed with Redux Toolkit, and the app is containerized with Docker and shipped through a Jenkins CI/CD pipeline to Vercel and AWS EC2.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Socket.io",
        "Stripe",
        "PayPal",
        "Docker",
        "Jenkins",
        "AWS EC2",
      ],
      links: [
        { type: "Website", link: "https://multivendor-client.vercel.app/" },
        { type: "Source", link: "https://github.com/zainAwan9175/Multi-Vendor-eCommerce-MERN-App" },
      ],
      video: {
        public_id: "videos/kwkkbq5ye8exto4mpzye",
        // Delivered as mp4 (Cloudinary transcodes on the fly) so it plays in all browsers.
        url: "https://res.cloudinary.com/do1vxto50/video/upload/v1754011610/videos/kwkkbq5ye8exto4mpzye.mp4",
      },
      caseStudy: {
        youtubeVideoUrl: "https://res.cloudinary.com/do1vxto50/video/upload/v1754099317/screen-capture_1_u1ur9w.mp4",
        projectOverview:
          "MarketNest is a comprehensive solution for modern online retail. Built with scalability and performance in mind, it handles everything from product catalog management to secure payment processing.\n\nThe platform features a responsive design that works seamlessly across devices, an intuitive admin dashboard for business owners, and analytics to track sales performance and customer behavior.\n\nKey focus areas include performance optimization, security best practices, and an exceptional user experience that converts visitors into customers.",
        keyFeatures: [
          "User Authentication & Authorization",
          "Shopping Cart & Wishlist",
          "Event Management with Countdown Timers",
          "Seller Dashboard & Analytics",
          "Review & Rating System",
          "Multi-vendor Support",
          "Product Catalog with Advanced Filtering",
          "Real-time Messaging System",
          "Order Processing & Tracking",
          "Payment Processing & Security",
          "Coupon & Discount Management",
          "Responsive Design",
        ],
        databaseArchitectureImage: {
          public_id: "portfolio/e5gfcvwg7l3nwzxnk248",
          url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754012140/portfolio/e5gfcvwg7l3nwzxnk248.png",
        },
        systemArchitectureImage: {
          public_id: "portfolio/pkg89ilwqtmcfjte1c1o",
          url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754045273/portfolio/pkg89ilwqtmcfjte1c1o.png",
        },
        systemArchitecture: [
          {
            title: "Frontend",
            description:
              "React.js with functional components and hooks, Redux Toolkit for state management, React Router for navigation, and Tailwind CSS for responsive styling.",
          },
          {
            title: "Backend",
            description:
              "Node.js & Express.js server architecture with MongoDB using Mongoose ODM. JWT authentication, Socket.io for real-time features, and RESTful API design.",
          },
          {
            title: "Integrations",
            description:
              "Cloudinary for media storage, Stripe for secure payments, Nodemailer for email services, and Socket.io for real-time messaging between vendors and customers.",
          },
        ],
        challengesAndSolutions: [
          {
            title: "Real-time Communication",
            challenge:
              "Implementing real-time messaging between multiple vendors and customers while maintaining performance.",
            solution:
              "Used Socket.io for real-time bidirectional communication, implemented proper room management, and optimized event handling for scalability.",
          },
          {
            title: "Multi-vendor Architecture",
            challenge:
              "Building a scalable multi-vendor system with separate dashboards, order management, and commission tracking.",
            solution:
              "Designed a flexible MongoDB schema with role-based access control, implemented vendor-specific analytics, and created automated commission calculations.",
          },
        ],
      },
    },
    {
      _id: "microservices-streaming-platform",
      title: "Microservices Streaming Platform",
      link: "https://github.com/zainAwan9175/ticketing",
      dates: "April 2026 – June 2026",
      active: false,
      practice: true,
      description:
        "An event-driven microservices architecture in Node.js and TypeScript, with independently deployable services that communicate asynchronously over a NATS streaming server (plus REST APIs for synchronous calls). Each service is containerized with Docker and orchestrated on Kubernetes for horizontal scaling, self-healing, and smooth rolling deployments.",
      technologies: ["Node.js", "TypeScript", "Microservices", "NATS", "Docker", "Kubernetes", "REST APIs"],
      links: [{ type: "Source", link: "https://github.com/zainAwan9175/ticketing" }],
    },
    {
      _id: "mama-marketplace",
      title: "Mama Marketplace",
      link: "https://mama-marketplace.ch/",
      dates: "January 2025 – February 2025",
      active: false,
      practice: true,
      description:
        "A high-performance e-commerce platform live in Germany. Built a TypeScript backend with Node.js, Express, and MongoDB, added Redis caching to cut response times, integrated the PayRex gateway for secure payments, and used Cloudinary for optimized image delivery. The Next.js + Tailwind frontend keeps the experience fast and SEO-friendly.",
      technologies: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "PayRex", "Cloudinary"],
      links: [
        { type: "Website", link: "https://mama-marketplace.ch/" },
        { type: "Source", link: "https://github.com/zainAwan9175/Mama-MarketPlace" },
      ],
      video: {
        public_id: "videos/rxmiy3s6dirm2yxdsy0t",
        url: "https://res.cloudinary.com/do1vxto50/video/upload/v1754011192/videos/rxmiy3s6dirm2yxdsy0t.mp4",
      },
    },
    {
      _id: "gdgoc-ue",
      title: "GDGoC UE Community Platform",
      link: "https://our-site-client.vercel.app/",
      dates: "September 2024 – October 2024",
      active: false,
      practice: true,
      description:
        "A community platform for Google Developer Group on Campus (GDGoC UE), University of Education, Lahore. SEO-friendly Next.js frontend, a scalable Node.js / Express backend, Clerk authentication, and Firebase-backed image uploads.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Clerk", "Firebase"],
      links: [
        { type: "Website", link: "https://our-site-client.vercel.app/" },
        { type: "Source", link: "https://github.com/zainAwan9175/GDGoC-UE" },
      ],
      video: {
        public_id: "videos/edyz78v81zx1pscnfruo",
        url: "https://res.cloudinary.com/do1vxto50/video/upload/v1753977126/videos/edyz78v81zx1pscnfruo.mp4",
      },
    },
    {
      _id: "ue-readers-club",
      title: "UE Readers Club",
      link: "https://ue-readers-club.vercel.app/",
      dates: "October 2024 – November 2024",
      active: false,
      practice: true,
      description:
        "A book-discussion platform with real-time chat that lets readers discuss literature together. Built with Next.js for SSR and SEO, Firebase for secure image storage, and the MERN stack for a scalable backend handling users and chat.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase"],
      links: [
        { type: "Website", link: "https://ue-readers-club.vercel.app/" },
        { type: "Source", link: "https://github.com/zainAwan9175/ue-book-club" },
      ],
      video: {
        public_id: "videos/lkpc5zcgs5tr2czkidkk",
        url: "https://res.cloudinary.com/do1vxto50/video/upload/v1754010634/videos/lkpc5zcgs5tr2czkidkk.mp4",
      },
    },
  ],
  hackathons: [
    {
      title: "DEVATHON",
      dates: "September 2024",
      location: "DEVSiNC, Lahore",
      description: "Finished in the top 25 with my team.",
      image: {
        public_id: "portfolio/zjoegnrrrolh1wlj6xfy",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1753976670/portfolio/zjoegnrrrolh1wlj6xfy.png",
      },
    },
    {
      title: "Forman Ignite",
      dates: "October 2024",
      location: "FCCU, Lahore",
      description: "Finished in the top 15 with my team.",
      image: {
        public_id: "portfolio/rdqsvjzpx977b2jedltx",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754062575/portfolio/rdqsvjzpx977b2jedltx.jpg",
      },
    },
    {
      title: "UE Code Quest",
      dates: "May 2024",
      location: "University of Education, Lahore",
      description: "2nd Runner-Up — solved 4 of 5 problems in a timed coding competition with my team.",
      image: {
        public_id: "portfolio/dqswel6hipzeojx3818s",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754062700/portfolio/dqswel6hipzeojx3818s.png",
      },
    },
    {
      title: "Electrocon 24",
      dates: "March 2024",
      location: "UET, Lahore",
      description: "Advanced to the final round with my team.",
      image: {
        public_id: "portfolio/sn2jc1bj7ohvdrlggf6n",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754062648/portfolio/sn2jc1bj7ohvdrlggf6n.jpg",
      },
    },
  ],
}
