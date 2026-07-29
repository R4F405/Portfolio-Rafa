import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailRapidgest from "../../../assets/thumbnails/rapidgest.webp";
import thumbnailSmartsheets from "../../../assets/thumbnails/smartsheets.webp";
import thumbnailComparador from "../../../assets/thumbnails/comparador.webp";

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
    title: "Comparator and migrator",
    slug: "comparador",
    thumbnail: thumbnailComparador,
    description: "AI tariff extraction",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer strategy game",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Multiplayer gaming platform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D adventure game",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-source learning project",
  },
] as const satisfies ProjectPreview[];
