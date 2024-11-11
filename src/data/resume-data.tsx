import {
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
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I like to work on hard problems and figure out innovative solutions. I also love to implement designs and learn on the go. I firmly believe that there is always an extra mile to go, and strive to put in 110% of my time and effort to the projects I take on. Currently, I work mostly with TypeScript, React, Node.js, and Next.js.",
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
      company: "Hewlett Packard Enterprise",
      link: "",
      badges: ["Hybrid"],
      title: "Software Developer 1",
      // logo: ConsultlyLogo,
      start: "2023",
      end: "2024",
      description:
        "Worked with intgerations and developing microservices for DAST security tools like Webinspect, Burp, Zap, Openvas"
    },

  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Prisma",
    "Zod"
  ],
  projects: [
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
        "Minimal Youtube downloader for audio and video with custom quality and resolutions",
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
        "Leaderboard for github users based on their OSS contributions",
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
        "Trim multiple videos with custom start and end time with Frame level accuracy. Once trim is complete, merge all the videos into one taking care of different resolutions, frame rates, encodings, etc.",
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
        "Mint a free randomly generated NFT on ETH testnet. Starting point for onboarding new users to NFTs",
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
        "Multiple interactive blinks (Solana Actions) including Betting on a Coin toss, Gated NFTs and Conducting a Quiz on blinks",
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
        "Multiple interactive blinks (Solana Actions) including Betting on a Coin toss, Gated NFTs and Conducting a Quiz on blinks",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://arpitkhandelwal.com/",
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
        "Landing page for a Gourmet et al Store",
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
        "Get moticational quotes daily from Stoic philosophy",
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
        "Words of Wonder game helper to find words from the given letters.",
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
        "Typing speed test game to improve typing skills.",
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
        "Play drums using keyboard keys.",
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
        "Chatbot to buy/sell/list properties via WhatsApp.",
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
        "A workaround for scheduling meetings using Calendly.",
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
        "Automatically rename screenshots based on content.",
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
        "Test low power mode across devices - PoC for optimizing renders on devices with Low power mode enabled.",
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
        "Convert images to Excel format.",
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
        "Follow all followers recursively of a given Instagram account. PoC for a study on social graphs",
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
        "Ask questions about a tweet by replying to it and mentioning @bot using GPT and Twitter API.",
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
        "Create threads from predefined/random topics using GPT and Twitter API.",
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
        "Chat with GPT from the terminal.",
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
        "Detect face masks in images and real-time video.",
      logo: ParabolLogo,
      link: {
        label: "website",
        href: "https://facemaskdetection.arpitkhandelwal.com",
      },
    },
  ],
} as const;
