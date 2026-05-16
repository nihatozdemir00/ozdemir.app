import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Vuejs } from "@/components/ui/svgs/vuejs";
import { SpringBoot } from "@/components/ui/svgs/springboot";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Django } from "@/components/ui/svgs/django";
import { Java } from "@/components/ui/svgs/java";
import { Swift } from "@/components/ui/svgs/swift";

export const DATA = {
  name: "Nihat Ozdemir",
  initials: "NOZ",
  url: "https://dillion.io",
  location: "Ankara, Turkey",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Previously co-founded Stash. Now Solutions Manager at IOTIQ.",
  summary:
    "During my senior year at Bilkent University, I launched my first startup, [Stash](https://www.usestash.com/).  Currently working as Solutions Manager at [IOTIQ](https://www.iotiq.de/en/), and I'm also building [Swisswall](https://www.swisswall.app/) - a ski app for tracking runs with GPS and discovering resorts.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "Django", icon: Django },
    { name: "Vue.js", icon: Vuejs },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Swift", icon: Swift },
    { name: "Java", icon: Java },
    { name: "Springboot", icon: SpringBoot },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nihatozdemir00",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nihat-ozdemir/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nihattozdemirr",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nihat@ozdemir.app",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "IOTIQ",
      href: "https://www.iotiq.de/en/",
      badges: [],
      location: "Ankara, Turkey",
      title: "Solutions Manager",
      logoUrl: "/iotiq.png",
      start: "May 2026",
      end: "Present",
      description:
        "Responsible for new market development and enterprise customer acquisition for MobiVisor MDM platform. Managing full pre-sales cycle including lead generation, discovery calls, and technical demos.",
    },
    {
      company: "Stash",
      href: "https://www.usestash.com/",
      badges: [],
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "/stash.svg",
      start: "March 2024",
      end: "February 2026",
      description:
        "Co-founded and built a B2B SaaS developer productivity tool from scratch. Integrated with GitHub, Bitbucket, Jira and Confluence using LLMs to analyze codebases for enterprise engineering teams. Led go-to-market, raised pre-seed funding, and secured enterprise customers.",
    },
    {
      company: "Evreka",
      badges: [],
      href: "https://evreka.co",
      location: "Remote",
      title: "Customer Success Specialist",
      logoUrl: "/evreka.png",
      start: "July 2023",
      end: "September 2023",
      description:
        "Voluntary internship to gain experience of how a startup operates. Supported onboarding and account management for enterprise customers in the waste management industry.",
    },
    {
      company: "Innova",
      href: "https://www.innova.com.tr/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/innova.png",
      start: "January 2023",
      end: "May 2023",
      description:
        "Internship. Developed a full-stack learning management system (Udemy-like) using Java Spring Boot, PostgreSQL, and React.",
    },
    {
      company: "Orion Innovation",
      href: "https://www.orioninc.com/",
      badges: [],
      location: "San Jose, CA",
      title: "Platform Engineer",
      logoUrl: "/orion.png",
      start: "June 2022",
      end: "January 2023",
      description:
        "Started as an internship in my 2nd year of university, later turned into a part-time role. Built regression test suites and infrastructure automation for RHEL-based enterprise systems using Ansible and YAML.",
    },
  ],
  education: [
    {
      school: "Bilkent University",
      href: "https://w3.bilkent.edu.tr/",
      degree:
        "Bachelor's Degree of Information Systems and Technologies (CTIS)",
      logoUrl: "/bilkent.png",
      start: "2018",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Swisswall",
      href: "https://www.swisswall.app",
      active: true,
      description:
        "A ski app for tracking runs with GPS, discovering resorts, and connecting with friends on the mountain. Features run tracking, resort discovery, live friend locations, and a ski community.",
      technologies: [
        "Swift",
        "SwiftUI",
        "CoreLocation",
        "MapKit",
        "WatchKit",
        "HealthKit",
        "Supabase",
        "PostgreSQL",
        "PostGIS",
        "Next.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.swisswall.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/swisswall.png",
      video: "",
    },
    {
      title: "Stash",
      href: "https://www.usestash.com",
      active: false,
      description:
        "A B2B SaaS developer productivity tool that integrates with GitHub, Bitbucket, Jira, and Confluence. Uses LLMs to analyze codebases and technical wikis, enabling intelligent search and recommendations for enterprise engineering teams.",
      technologies: [
        "Django",
        "Django REST Framework",
        "Python",
        "PostgreSQL",
        "pgvector",
        "Vue.js",
        "Vuetify",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.usestash.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/launch-post.mp4",
    },
    {
      title: "Humanitarian Logistics Optimizer",
      href: "",
      active: false,
      description:
        "As a team of 4 senior student, design and build a distributed resource management system for humanitarian logistics scenarios. Awarded sustainability prize at CTIS Award Ceremony 2024.",
      technologies: [
        "Django",
        "Django REST Framework",
        "Python",
        "PostgreSQL",
        "React",
        "Docker",
      ],
      links: [],
      image: "/hlo.png",
      video: "",
    },
    {
      title: "eLearning",
      href: "",
      active: false,
      description:
        "Developed a learning management system like Udemy where instructors can create courses and students can enroll and learn.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "React",
        "Tailwind CSS",
      ],
      links: [],
      image: "/elearning.png",
      video: "",
    },
  ],
} as const;
