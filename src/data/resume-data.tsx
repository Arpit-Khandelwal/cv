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
    "Node.js"
    ],
  projects: [
    {
      title: "Youtube Downloader",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "Next.js",
        "S3",
        "ffmpeg",
        
      ],
      description:
        "Minimal Youtube downloader for audio and video with custom quality and resolutions",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Arpit-Khandelwal/yt-downloader",
      },
    },
  ],
} as const;
