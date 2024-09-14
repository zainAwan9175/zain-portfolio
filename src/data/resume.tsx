import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { start } from "repl";

export const DATA = {
  name: "Zain Ul Abedin",
  initials: "DV",
  url: "https://dillion.io",
  location: "Lahore Pakistan",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer | Competitve Programmer | MERN | NextJs | C/C++",
  summary:
    "I am a software developer focused on full-stack web development, particularly the MERN stack. I'm currently pursuing a Bachelor's in Computer Science at the University of Education. Through my fellowship at Headstarter AI and various projects, I've gained experience in building user-friendly and scalable applications. I'm passionate about learning new technologies and solving real-world problems through code.",
  avatarUrl: "/me.png",

  
  
  skills: [
    "Html",
    "Css",
    "Bootstrap",
    "Tailwind Css",
    "MUI",
    "Swiper js",
    "Hyper UI",
    "JavaScript",
   
    "React",
    "Express",
    "Node.js",
    "MongoDb",
    "Redux",
    "Github",
    "Netlify",
    
    "C/C++",
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
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
   
    {
      company: "Headstarter AI",
      href: "https://headstarter.co/", 
      badges: [],
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
    
    
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
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
      title: "ZainEstate",
      href: "https://estate-liard.vercel.app/",
      dates: "Agust 2024",
      active: true,
      description:
        "Built a real estate web application using the MERN stack (MongoDB, Express.js, React, Node.js) Implemented Hyper UI and Swiper.js for a responsive and visually appealing user interface. Integrated Firebase for secure image storage and seamless account creation and login functionality. Developed key features including property listings, user authentication, and dynamic image sliders",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Fire base",
        "Redux",
        "",
     
        "Stripe",
        "MUI",
        "Hyper UI",
        "Node js",
        "Express",
        "mongo db",
      ],
      links: [
        {
          type: "Website",
          href: "https://estate-liard.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zainAwan9175/estate-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/1.webm",
    },
    {
      title: "Shop Cart",
      href: "https://25shop-cart.netlify.app",
      dates: "April 2024 ",
      active: true,
      description:
        "Developed a comprehensive e-commerce frontend application using HTML, CSS, Tailwind CSS, JavaScript, and React. Integrated MUI for a responsive and modern UI/UX design.  Implemented dynamic product sliders with Swiper.js for an interactive user experience. Deployed the project on Netlify for seamless access and performance optimization.",
      technologies: [
        "React.js",
   
      
        "TailwindCSS",
        "Swiper js",
        "MUI",
        "fontawesome.",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://25shop-cart.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/zainAwan9175/25-shop-cart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/2.webm",
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
      descric:\Users\Zain\Downloads\a zain ul abeidin  resume.pdfption:
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
