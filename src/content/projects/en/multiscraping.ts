import multiscraping0 from "../../../assets/images/projects/multiscraping/multiscraping-0.webp";
import multiscraping1 from "../../../assets/images/projects/multiscraping/multiscraping-1.webp";
import multiscraping2 from "../../../assets/images/projects/multiscraping/multiscraping-2.webp";
import multiscraping3 from "../../../assets/images/projects/multiscraping/multiscraping-3.webp";
import multiscraping4 from "../../../assets/images/projects/multiscraping/multiscraping-4.webp";
import multiscraping5 from "../../../assets/images/projects/multiscraping/multiscraping-5.webp";
import multiscraping6 from "../../../assets/images/projects/multiscraping/multiscraping-6.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MultiScraping",
  theme: "light",
  tags: ["python", "fastapi", "playwright", "sqlite", "docker"],
  videoBorder: false,
  source: "https://github.com/R4F405/MultiScraping",
  description:
    "A B2B lead generation suite: one independent scraper per platform, each with its own FastAPI service and SQLite database, orchestrated from a single web panel that centralises login, UI and proxying to every backend.<br/><br/>The live modules are <strong>Google Maps</strong> and <strong>Instagram</strong>. The Maps one searches businesses by category and radius on a map, paginates results with curl_cffi impersonating Chrome's TLS fingerprint, visits each business website to find its email and verifies it before storing it. The Instagram one works in two modes: dorking public profiles without a session, and pulling the followers of a target account.<br/><br/>All scraping goes through rotating proxies with cooldown, daily caps, randomised delays and time-window deduplication, and every lead ends up in the database with CSV export. The <strong>LinkedIn</strong> (Playwright stealth with CAPTCHA solving over noVNC) and <strong>TikTok</strong> modules are still in development. It ships with Docker Compose and Nginx on a VPS, with bcrypt sessions and IP whitelisting.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping0,
        alt: "Unified panel with all four platforms",
        caption: "Unified panel with all four platforms",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping1,
        alt: "Google Maps search by radius",
        caption: "Google Maps search by radius",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping2,
        alt: "Leads with verified email and CSV export",
        caption: "Leads with verified email and CSV export",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping3,
        alt: "Instagram scraper by niche and location",
        caption: "Instagram scraper by niche and location",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping4,
        alt: "Instagram profiles with extracted email",
        caption: "Instagram profiles with extracted email",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping5,
        alt: "LinkedIn contacts, module in development",
        caption: "LinkedIn contacts, module in development",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping6,
        alt: "Databases per platform",
        caption: "Databases per platform",
      },
    },
  ],
} as const satisfies ProjectContent;
