import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailRapidgest from "../../../assets/thumbnails/rapidgest.webp";
import thumbnailSmartsheets from "../../../assets/thumbnails/smartsheets.webp";
import thumbnailComparador from "../../../assets/thumbnails/comparador.webp";
import thumbnailWhistleblowing from "../../../assets/thumbnails/whistleblowing.webp";
import thumbnailDiscordBots from "../../../assets/thumbnails/discord-bots.webp";
import thumbnailMultiScraping from "../../../assets/thumbnails/multiscraping.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Rapidgest",
    slug: "rapidgest",
    thumbnail: thumbnailRapidgest,
    description: "SaaS de gestión empresarial",
  },
  {
    title: "SmartSheets Panel",
    slug: "smartsheets",
    thumbnail: thumbnailSmartsheets,
    description: "Capa de interfaz sobre Smartsheet",
  },
  {
    title: "Canal de denuncias",
    slug: "whistleblowing",
    thumbnail: thumbnailWhistleblowing,
    description: "Denuncias anónimas, Ley 2/2023",
  },
  {
    title: "Comparador y migrador",
    slug: "comparador",
    thumbnail: thumbnailComparador,
    description: "Extracción de tarifas con IA",
  },
  {
    title: "MultiScraping",
    slug: "multiscraping",
    thumbnail: thumbnailMultiScraping,
    description: "Captación de leads multiplataforma",
  },
  {
    title: "Bots de Discord",
    slug: "discord-bots",
    thumbnail: thumbnailDiscordBots,
    description: "Webhooks de GitHub y Jira",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer-Strategiespiel",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Multiplayer-Gaming-Plattform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D-Abenteuerspiel",
  },
  /**  {
    title: "WebGL Partikel",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamische 3D Partikel",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-Source Lernprojekt",
  },
] as const satisfies ProjectPreview[];
