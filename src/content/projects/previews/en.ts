//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailRapidgest from "../../../assets/thumbnails/rapidgest.webp";
import thumbnailSmartsheets from "../../../assets/thumbnails/smartsheets.webp";
import thumbnailComparador from "../../../assets/thumbnails/comparador.webp";
import thumbnailWhistleblowing from "../../../assets/thumbnails/whistleblowing.webp";
import thumbnailDiscordBots from "../../../assets/thumbnails/discord-bots.webp";
import thumbnailOrcAttack from "../../../assets/thumbnails/orc-attack.webp";
import thumbnailMultiScraping from "../../../assets/thumbnails/multiscraping.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Rapidgest",
    slug: "rapidgest",
    thumbnail: thumbnailRapidgest,
    description: "Business management SaaS",
  },
  {
    title: "SmartSheets Panel",
    slug: "smartsheets",
    thumbnail: thumbnailSmartsheets,
    description: "Interface layer for Smartsheet",
  },
  {
    title: "Whistleblowing channel",
    slug: "whistleblowing",
    thumbnail: thumbnailWhistleblowing,
    description: "Anonymous reports, Law 2/2023",
  },
  {
    title: "Comparator and migrator",
    slug: "comparador",
    thumbnail: thumbnailComparador,
    description: "AI tariff extraction",
  },
  {
    title: "MultiScraping",
    slug: "multiscraping",
    thumbnail: thumbnailMultiScraping,
    description: "Multi-platform lead generation",
  },
  {
    title: "Discord bots",
    slug: "discord-bots",
    thumbnail: thumbnailDiscordBots,
    description: "GitHub and Jira webhooks",
  },
  {
    title: "Orc Attack",
    slug: "orc-attack",
    thumbnail: thumbnailOrcAttack,
    description: "Unity rogue-like, final degree project",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
] as const satisfies ProjectPreview[];
