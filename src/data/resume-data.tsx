import
{
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Arpit Khandelwal",
  initials: "AK",
  location: "Banglore, IN",
  locationLink: "https://maps.app.goo.gl/zhMJcYT74CoPqhkd8",
  about:
    "Full Stack Engineer specializing in AI and Web3 applications, focused on delivering robust and user-centric products.",
  summary:
    "Experienced Full Stack Engineer passionate about tackling complex challenges and delivering innovative solutions, particularly in AI and Web3 domains. Proven ability to quickly learn and implement new technologies, consistently striving for excellence in project execution. Proficient across the stack, including TypeScript, React/Next.js, Node.js, Python, Solana, and various AI/LLM tools.",
  avatarUrl: "https://avatars.githubusercontent.com/u/68700864?v=4",
  personalWebsiteUrl: "https://arpitkhandelwal.com",
  contact: {
    email: "ak@arpitkhandelwal.com",
    tel: "+918224099125",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arpit-khandelwal",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arpit-khandelwal-0812aa1a3/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Arpitkhandelwa3",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Vellore Institute of Technology",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Avici Money",
      link: "https://avici.money",
      badges: ["Remote"],
      title: "AI and Backend Engineer",
      // logo: ConsultlyLogo,
      start: "January, 2025",
      end: "July, 2025",
      description:
        "Developing an AI concierge service enabling users to seamlessly order food, book tickets, and manage various tasks through natural language interaction.",
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remote"],
      title: "Software Developer",
      // logo: ConsultlyLogo,
      start: "2021",
      end: "Present",
      description:
        "Engineered automated solutions including FFmpeg video pipelines for creators, Reddit scraping/query bots, and custom AI-powered Discord/Twitter/Telegram bots leveraging knowledge integration and web scraping tools (Firecrawl/Playwright).",
    },
    {
      company: "Hewlett Packard Enterprise",
      link: "",
      badges: ["Hybrid"],
      title: "Software Developer 1",
      // logo: ConsultlyLogo,
      start: "2023",
      end: "2024",
      description:
        "Developed and integrated microservices for DAST security tools (Webinspect, Burp Suite, OWASP ZAP, OpenVAS), enhancing application security testing capabilities.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React/Next.js",
    "Node.js",
    "Solana",
    "AI/LLMs",
    "Vector DB",
    "Prisma",
    "Postgres",
    "Zod",
    "ffmpeg",
    "Playwright",
    "Web Scraping",
    "API Integration",
    "Docker",
    "Cloudflare Workers"
  ],
  projects: [
    {
      title: "Gossip DAO",
      techStack: [
        "Next.js",
        "TypeScript",
        "Solana",
        "Prisma",
        "Tailwind CSS",
      ],
      description:
        "Privacy-focused anonymous gossip platform built during Zugrama residency. Achieved 50+ users & 200+ gossips within 24 hours.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://gossip-dao.vercel.app",
      },
    },
    {
      title: "Sage Aadit",
      techStack: [
        "Next.js",
        "TypeScript",
        "AI",
        "LLMs",
        "Vector DB",
        "Tailwind CSS",
      ],
      description:
        "AI therapist providing personalized support through weekly check-ins and indexed journal entries.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://sage-aadit.arpitkhandelwal.com",
      },
    },
    {
      title: "100xNFT",
      techStack: [
        "Solana",
        "Next.js",
        "TypeScript",
        "NFT",
        "Tailwind CSS",
      ],
      description:
        "Gated Solana NFT minting platform exclusively for members of Harkirat's 100x Devs cohort.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://nft.arpitkhandelwal.com",
      },
    },
    {
      title: "Helius Indexer",
      techStack: [
        "Solana",
        "Helius API",
        "Postgres",
        "Node.js",
        "TypeScript",
        "React/Next.js"
      ],
      description:
        "Blockchain indexing platform simplifying Solana data integration into Postgres using Helius webhooks.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://helius-indexer.arpitkhandelwal.com",
      },
    },
    {
      title: "Atlas",
      techStack: [
        "LLMs",
        "Azure",
        "RAG",
        "Devops"
      ],
      description:
        "AI-powered chatbot for the Solana ecosystem, providing users with relevant information and assistance.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://solchat.arpitkhandelwal.com",
      },
    },
    {
      title: "Youtube Downloader",
      techStack: [
        "TypeScript",
        "React",
        "Node.js",
        "Next.js",
        "S3",
        "ffmpeg",
        "Chakra UI",
        "Tailwind CSS",
      ],
      description:
        "Minimalist tool for downloading YouTube audio and video at custom qualities and resolutions.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://yt.arpitkhandelwal.com",
      },
    },
    {
      title: "Github Leaderboard",
      techStack: [
        "TypeScript",
        "React",
        "Node.js",
        "Next.js",
        "Prisma",
        "Zod",
        "Postgres",
        "Github API"
      ],
      description:
        "Ranks GitHub users based on their open-source software contributions using the GitHub API.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://leaderboard.arpitkhandelwal.com",
      },
    },
    {
      title: "Video Trimmer",
      techStack: [
        "Flask",
        "Python",
        "ffmpeg",
      ],
      description:
        "Frame-accurate tool to trim and merge multiple videos, handling varying resolutions and encodings.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://video-trimmer.arpitkhandelwal.com",
      },
    },
    {
      title: "Mint Free NFT",
      techStack: [
        "React",
        "Ethers.js",
        "Hardhat",
      ],
      description:
        "Platform for minting free, randomly generated NFTs on the Ethereum testnet to onboard new users.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://mynft.arpitkhandelwal.com",
      },
    },
    {
      title: "Blinks",
      techStack: [
        "React",
        "Solana",
        "Typescript",
        "Next.js",
      ],
      description:
        "Collection of interactive Solana Actions (Blinks) including coin toss betting, gated NFTs, and quizzes.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://actions.arpitkhandelwal.com/api/actions",
      },
    },
    {
      title: "Blinkathon Leaderboard",
      techStack: [
        "Next.js",
        "Typescript",
        "Solana Actions",
        "Prisma",
      ],
      description:
        "Displays views and upvotes for community-submitted Blinks (Solana Actions).",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://blinkathon.vercel.app/",
      },
    },
    {
      title: "7 course mart",
      techStack: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Framer Motion"
      ],
      description:
        "Animated landing page developed for a gourmet food store.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://7cm.arpitkhandelwal.com",
      },
    },
    {
      title: "Daily Quote",
      techStack: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
      ],
      description:
        "Web application displaying daily motivational quotes from Stoic philosophy.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://quotes.arpitkhandelwal.com/",
      },
    },
    {
      title: "WoW Helper",
      techStack: [
        "React",
        "Node.js",
      ],
      description:
        "Utility to find valid words from given letters for the 'Words of Wonder' game.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://wowhelper.arpitkhandelwal.com",
      },
    },
    {
      title: "Typing Game",
      techStack: [
        "JavaScript",
        "HTML",
        "CSS",
      ],
      description:
        "Simple web-based game designed to test and improve typing speed and accuracy.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://typinggame.arpitkhandelwal.com",
      },
    },
    {
      title: "Drum Kit",
      techStack: [
        "JavaScript",
        "HTML",
        "CSS",
      ],
      description:
        "Interactive web application allowing users to play drum sounds using keyboard keys.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://drumkit.arpitkhandelwal.com",
      },
    },
    {
      title: "Real Estate WhatsApp Chatbot",
      techStack: [
        "Node.js",
        "WhatsApp API",
        "MongoDB",
        "OpenAI API",
        "Cloudflare Workers",
        "Hono"
      ],
      description:
        "AI-powered WhatsApp chatbot facilitating property buying, selling, and listing.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://realestatechatbot.arpitkhandelwal.com",
      },
    },
    {
      title: "Calendly Workaround",
      techStack: [
        "JavaScript",
        "Node.js",
        "Playwright"
      ],
      description:
        "Automated script using Playwright to overcome limitations in Calendly scheduling.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://calendlyworkaround.arpitkhandelwal.com",
      },
    },
    {
      title: "AI Screenshot Renamer",
      techStack: [
        "Python",
        "OpenCV",
      ],
      description:
        "Utility that automatically renames screenshot files based on their visual content using OpenCV.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://aiscreenshotrenamer.arpitkhandelwal.com",
      },
    },
    {
      title: "Low Power Mode Test",
      techStack: [
        "JavaScript",
        "React",
      ],
      description:
        "Proof-of-concept demonstrating render optimization for devices in low power mode.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://lowpowermodetest.arpitkhandelwal.com",
      },
    },
    {
      title: "Image to Excel",
      techStack: [
        "Python",
        "Pandas",
      ],
      description:
        "Tool to convert image data (e.g., tables) into structured Excel spreadsheets.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://imagetoxl.arpitkhandelwal.com",
      },
    },
    {
      title: "Insta Follow Frenzy",
      techStack: [
        "Python",
        "Instagram API",
      ],
      description:
        "Proof-of-concept script to recursively follow followers of an Instagram account for social graph analysis.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://instafollowfrenzy.arpitkhandelwal.com",
      },
    },
    {
      title: "Ask GPT Twitter",
      techStack: [
        "Node.js",
        "Twitter API",
        "OpenAI API",
      ],
      description:
        "Twitter bot that answers questions about a tweet when mentioned in a reply, using GPT.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://askgpttwitter.arpitkhandelwal.com",
      },
    },
    {
      title: "Twitter Thread Bot",
      techStack: [
        "Node.js",
        "Twitter API",
        "OpenAI API",
      ],
      description:
        "Automated bot creating Twitter threads on various topics using GPT and the Twitter API.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://twitterthreadbot.arpitkhandelwal.com",
      },
    },
    {
      title: "Terminal Chat GPT",
      techStack: [
        "Python",
        "OpenAI API",
      ],
      description:
        "Command-line interface application for interacting with OpenAI's GPT models directly from the terminal.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://terminalchatgpt.arpitkhandelwal.com",
      },
    },
    {
      title: "Face Mask Detection",
      techStack: [
        "Python",
        "OpenCV",
      ],
      description:
        "Application using OpenCV to detect face masks in images and real-time video streams.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://facemaskdetection.arpitkhandelwal.com",
      },
    },
  ],
} as const;
