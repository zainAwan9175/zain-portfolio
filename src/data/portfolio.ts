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

export interface WorkItem {
  company: string
  link: string
  location: string
  logoUrl: ImageRef
  start: string
  end: string
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
  video: VideoRef
  caseStudy?: CaseStudy
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
  location: string
  locationLink: string
  description: string
  summary: string
  avatarUrl: ImageRef
  resumeUrl: string
  skills: string[]
  contact: Contact
  work: WorkItem[]
  education: EducationItem[]
  projects: Project[]
  hackathons: Hackathon[]
}

export const PORTFOLIO: Portfolio = {
  name: "Zain Ul Abedin",
  initials: "ZA",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/Lahore",
  description:
    "Software Engineer by profession, builder by passion, mentor by choice. With a strong interest in psychology, I'm fascinated by how people think, grow, and connect and that curiosity shapes the way I build products, support others, and contribute to the tech community.",
  summary:
    "I love building real-world projects, participating in hackathons, and collaborating with others to solve meaningful problems. Over the years, I've been actively involved in tech communities like GDGoC-UE, DevWeekends, and UE IT Society, where I've led workshops, organized events, mentored students, and supported early-career developers. Being part of these initiatives has helped me grow while also giving back to the community, which is something I truly value. I'm always excited about learning new things, especially through hands-on experience, and I'm deeply interested in joining innovative teams at big tech companies to build impactful products and continue helping others succeed in their tech journeys.",
  avatarUrl: {
    public_id: "portfolio/x0vpzxbv2cekmy4rsutg",
    url: "https://res.cloudinary.com/do1vxto50/image/upload/v1760895606/portfolio/x0vpzxbv2cekmy4rsutg.jpg",
  },
  resumeUrl: "https://drive.google.com/file/d/1p3rcSkoJl2eYToHa7-79_xBTUYiHT3E3/view",
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Redis",
    "Cloudinary",
    "Clerk",
    "Docker",
    "Jenkins",
    "NGINX",
    "Amazon EC2",
    "Amazon ECS",
    "Amazon ECR",
    "Route 53",
    "GitHub",
    "C/C++",
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
      company: "Headstarter AI",
      link: "https://headstarter.co/",
      location: "Remote — Software Engineer Fellow",
      logoUrl: {
        public_id: "portfolio/u4olxdfvahedv6v1kcbn",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1753976371/portfolio/u4olxdfvahedv6v1kcbn.jpg",
      },
      start: "July 2024",
      end: "October 2024",
      description: [
        "Built and deployed 5 AI projects in 5 weeks using React, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and CI/CD practices for iterative deployment.",
        "Worked in a team of 3 to develop an interactive customer support agent using Next.js, with a custom RAG pipeline (OpenAI + Pinecone) that responds based on a company's knowledge base.",
        "Collaborated with 3 Fellows to build and deploy a SaaS product that generates dynamic flashcards for any topic using the Llama 3.1 LLM via the Groq API, with a paywall and custom pricing plans via the Stripe API.",
        "Implemented a web scraper that extracts data from Rate My Professor and upserts it to a Pinecone index, integrated with a RAG pipeline using LangChain and OpenAI GPT-4 for up-to-date, relevant answers.",
        "Scaled each web app to 200+ users and iterated on user feedback to make continuous optimizations.",
        "Participated in weekly sessions with engineers from Google, Y Combinator, Stanford, Amazon, and venture-backed startups.",
      ],
    },
  ],
  education: [
    {
      school: "University of Education, Lahore",
      link: "https://ue.edu.pk/",
      degree: "Bachelor of Science in Computer Science (BSCS)",
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
      degree: "Faculty of Science (FSc)",
      logoUrl: {
        public_id: "portfolio/qn13fsoydhfa6mvfpqtv",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754009780/portfolio/qn13fsoydhfa6mvfpqtv.jpg",
      },
      start: "March 2021",
      end: "July 2023",
    },
  ],
  projects: [
    {
      _id: "gdgoc-ue",
      title: "GDGoC UE",
      link: "https://our-site-client.vercel.app/",
      dates: "September 2024",
      active: false,
      description:
        "Google Developer Group on Campus (GDGoC UE) – University of Education, Lahore. Worked as a full-stack developer to build a community platform for students. Built the frontend with Next.js for a fast, SEO-friendly experience and the backend with Node.js and Express for scalable API handling. Integrated Clerk for secure authentication and Firebase for seamless image uploads.",
      technologies: ["Next.js", "TailwindCSS", "Firebase", "shadcn/ui", "Node.js", "Express", "MongoDB"],
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
      dates: "November 2024",
      active: false,
      description:
        "Developed a book discussion platform with real-time chat functionality, enabling users to engage in interactive discussions about literature. Built with Next.js for SEO optimization and efficient server-side rendering, Firebase for secure and scalable image storage, and the MERN stack (MongoDB, Express, Node.js) for a robust backend handling user data and chat.",
      technologies: ["Next.js", "TailwindCSS", "Firebase", "Node.js", "Express", "MongoDB"],
      links: [
        { type: "Website", link: "https://ue-readers-club.vercel.app/" },
        { type: "Source", link: "https://github.com/zainAwan9175/ue-book-club" },
      ],
      video: {
        public_id: "videos/lkpc5zcgs5tr2czkidkk",
        url: "https://res.cloudinary.com/do1vxto50/video/upload/v1754010634/videos/lkpc5zcgs5tr2czkidkk.mp4",
      },
    },
    {
      _id: "mama-marketplace",
      title: "Mama Marketplace",
      link: "https://mama-marketplace.ch/",
      dates: "February 2025",
      active: false,
      description:
        "Mama Marketplace (live in Germany) is a modern e-commerce platform built with Next.js for a fast, SEO-friendly frontend and Tailwind CSS for a sleek UI. The Node.js & Express backend, powered by MongoDB, ensures scalability and efficiency, while Redis enhances performance with caching. Secure transactions are enabled via the PayRex payment gateway, and Cloudinary handles optimized image uploads for a smooth user experience.",
      technologies: ["Next.js", "TailwindCSS", "Cloudinary", "Redis", "PayRex", "Node.js", "Express", "MongoDB"],
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
      _id: "marketnest",
      title: "MarketNest",
      link: "https://multivendor-client.vercel.app/",
      dates: "June 2025",
      active: false,
      description:
        "MarketNest is a full-stack multi-vendor e-commerce platform built with the MERN stack, featuring real-time messaging, event-based sales with countdown timers, and secure payment processing. The platform supports multiple sellers and buyers with real-time communication capabilities.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe",
        "PayPal",
        "Docker",
        "Jenkins",
        "Amazon EC2",
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
          "This e-commerce platform represents a comprehensive solution for modern online retail businesses. Built with scalability and performance in mind, it handles everything from product catalog management to secure payment processing.\n\nThe platform features a responsive design that works seamlessly across all devices, an intuitive admin dashboard for business owners, and advanced analytics to track sales performance and customer behavior.\n\nKey focus areas include performance optimization, security best practices, and providing an exceptional user experience that converts visitors into customers.",
        keyFeatures: [
          "User Authentication & Authorization",
          "Shopping Cart & Wishlist Functionality",
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
              "Utilized Socket.io for real-time bidirectional communication, implemented proper room management, and optimized event handling for scalability.",
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
      title: "Electrocon 24",
      dates: "March 2024",
      location: "UET, Lahore",
      description: "Advanced to the final round with my team.",
      image: {
        public_id: "portfolio/sn2jc1bj7ohvdrlggf6n",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754062648/portfolio/sn2jc1bj7ohvdrlggf6n.jpg",
      },
    },
    {
      title: "UE Code Quest",
      dates: "May 2024",
      location: "University of Education, Lahore",
      description: "2nd Runner-Up with my team.",
      image: {
        public_id: "portfolio/dqswel6hipzeojx3818s",
        url: "https://res.cloudinary.com/do1vxto50/image/upload/v1754062700/portfolio/dqswel6hipzeojx3818s.png",
      },
    },
  ],
}
