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
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and Next.js.",
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
      // link: "https://film.io",
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
    "Node.js"
    ],
  projects: [
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
  ],
} as const;
