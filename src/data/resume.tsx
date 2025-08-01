import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { start } from "repl";




export const DATA = {
  name: "Zain Ul Abedin",
  initials: "DV",
  location: "Lahore Pakistan",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer | Tech. Lead @GDGoC-UE | Trainer @Devweekends | LeetCode 150+ | MERN Stack Developer | C/C++ | Javascript | Typescript | Next js | React Native | AWS | DevOps |🥉 UE Code Quest",
  summary:
    "I’m a passionate Software Engineer and Full-Stack Developer with expertise in MERN Stack, React Native, Next.js, TypeScript, AWS, and DevOps tools. I specialize in building scalable, responsive, and production-grade applications that solve real-world problems.As a Tech Lead at GDGoC-UE and Trainer at DevWeekends, I’ve led numerous technical sessions, workshops, and mentoring programs aimed at helping students and early-career developers grow in the tech industry. I'm committed to giving back to the community by sharing knowledge, fostering growth, and empowering others to succeed.",
  avatarUrl: "/me.png",

  
  
  skills: [
   // Frontenddatt
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "MUI",
  "Swiper JS",
  "Hyper UI",
  "JavaScript",
  "React",
  "React Native",
  "Redux",

  // Backend
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Redis",
  "Cloudinary",
  "Clerk",

  // DevOps & Deployment
  "GitHub",
  "Netlify",
  "Docker",
  "Amazon EC2",
  "Amazon ECS",
  "Amazon ECR",
  "Jenkins",
  "NGINX",
  "Kubernetes",

  // Programming Languages
  "C/C++"

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zainAwan9175",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zain-ul-abedin-6641a12a7/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abedin_ul77210",
        icon: Icons.x,

        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/zain4178/",
        icon: Icons.Leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
 
   
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/", 
    
      location: "Remote",
      title: "Software Engineer Fellow",
      logoUrl: "/headstart.jpg",
      start: "July 2024",
      end: "September 2024",
      description: [
        "Built and deployed 5 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment. ",
        "Worked in a team of 3 to develop an interactive customer support agent using Next.js, integrated a custom RAG pipeline using OpenAI and Pinecone that responds based on a company's knowledge base. ",
        "Collaborated with 3 Fellows to build and deploy a SaaS product that generates dynamic flashcards based on any topic using the Llama 3.1 LLM via the Groq API, integrated a paywall and custom pricing plans using the Stripe API. ",
        "Implemented a web scraper that automatically extracts data from Rate my Professor and upserts to a Pinecone index, integrated with a RAG pipeline using LangChain and OpenAI GPT-4 to get up-to-date and relevant answers to user queries. ",
        "Scaled each web-app to 200+ users, iterated on user feedback to make continuous optimizations. ",
        "Participated in weekly sessions with engineers from Google, Y Combinator, Stanford, Amazon, and venture-backed startups."
    ]
    

    }
    
    
    
  ],
  education: [
    {
      school: "University Of Education",
      href: "https://ue.edu.pk/",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      logoUrl: "/buildspace.jpeg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Government College Township Lahore",
      href: "http://www.gctownship.edu.pk/",
      degree: "Faculty of Science (FSC)",
      logoUrl: "/waterloo.jpg",
      start: "2021",
      end: "2023",
    },

  ],
  projects: [
     {
      title: "Multivendor Ecommerce",
      href: "https://multivendor-client.vercel.app/",
      dates: "JUNE 2025 ",
      active: true,
      description:
        "Developed a full-featured Multi-Vendor E-commerce web application using the MERN stack (MongoDB, Express.js, React, Node.js), enabling multiple vendors to register, list products, manage orders, and chat with customers in real time using Socket.io. Implemented secure authentication with JWT and Clerk, complete order tracking, and payment integration with Stripe and PayPal. Designed a fully responsive UI using Tailwind CSS, MUI, and Swiper.js, with state managed via Redux Toolkit. Supported image uploads via Multer & Cloudinary, account activation with NodeMailer, and dynamic filtering for product discovery. The project is fully deployed on Vercel, with a parallel copy deployed to AWS EC2 using Docker and Jenkins to set up a production-grade CI/CD pipeline.",
      technologies: [
        "React",
          "Node js",
        "Express",
        "mongo db",
        "Redux",
        "Stripe",
        "paypal"
       
      ],
      links: [
        {
          type: "Website",
          href: "https://multivendor-client.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zainAwan9175/Multi-Vendor-eCommerce-MERN-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/4.mp4.webm",
    },
    {
      title: "Mama Marketplace",
      href: "https://mama-marketplace.ch/",
      dates: "January 2025",
      active: true,
      description:
        "Mama Marketplace (Live in Germany) is a modern e-commerce platform built with Next.js for a fast, SEO-friendly frontend, styled using Tailwind CSS for a sleek UI. The Node.js & Express.js backend, powered by MongoDB, ensures scalability and efficiency, while Redis enhances performance with caching. Secure transactions are enabled via PayRex payment gateway, meeting client requirements. Cloudinary is integrated for optimized image uploads, ensuring a smooth user experience. This project showcases my expertise in full-stack development, delivering a high-performance, scalable, and user-friendly marketplace solution. 🚀",
      technologies: [
        "Next.js",
   
      
        "TailwindCSS",
        "Cloudinary",
        "Redis",
        "Payrex",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://mama-marketplace.ch/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zainAwan9175/Mama-MarketPlace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/2.mp4",
    },
    {
      title: "UE Readers Club",
      href: "https://ue-readers-club.vercel.app/",
      dates: "october 2024",
      active: true,
      description:
        "Developed a book discussion platform with real-time chat functionality, enabling users to engage in interactive discussions about literature. Built with Next.js for SEO optimization and efficient server-side rendering. Integrated Firebase for secure and scalable image storage, ensuring seamless media uploads. Utilized MongoDB, Express, and Node.js (MERN stack) to create a robust and scalable backend, handling user data and chat functionality efficiently.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Fire base",
        "Node js",
        "Express",
        "mongo db",
      ],
      links: [
        {
          type: "Website",
          href: "https://ue-readers-club.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zainAwan9175/ue-book-club",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/3.mp4",
    },
    {
      title: "GDGoC UE",
      href: "https://our-site-client.vercel.app/",
      dates: "Agust 2024",
      active: true,
      description:
        "Google Developer Group On Campus (GDGoC UE) – University of Education, Lahore Worked as a full-stack developer to build a community platform for students. Developed the frontend using Next.js for a fast, SEO-friendly, and dynamic user experience. Built the backend with Node.js and Express for scalable API handling. Integrated Clerk for secure authentication and Firebase for seamless image uploads.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Fire base",
       
     
        
       "shadcn ui",
        "Node js",
        "Express",
        "mongo db",
      ],
      links: [
        {
          type: "Website",
          href: "https://our-site-client.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zainAwan9175/GDGoC-UE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/1.mp4",
    },
  
  
  ],
  hackathons: [
    {
      title: "DEVATHON",
      href: "https://headstarter.co/",
      dates: "SEP 7th 2024",
      location: "DEVSiNC, Lahore",
      description:
        "",
      image:
        "/devathon.png",
    
    },
    {
      title: "Forman Ignite",
      href: "https://headstarter.co/",
      dates: "June 25th - 28th, 2024",
      location: "FCCU, Lahore",
      description:
        "Ended up in top 15 with my team.",
      image:
        "/ignite.jpeg",
    
    },
  
    {
      title: "Electrocon 24",
      dates: "March 25th-26th, 2025",
      location: "UET, Lahore",
      description:
        "Advanced to final round with my team.",
      image:
        "/electrocon.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Ue Code Quest",
      dates: "April 18, 2024",
      location: "University of Education, Lahore",
      description:
        "2nd Runner-UP with my team.",
      icon: "public",
      image:
        "/codequest.png",
      links: [],
    },
 
  ],
} as const;
