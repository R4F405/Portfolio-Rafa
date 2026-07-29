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
    description: "SaaS de gestión empresarial",
  },
  {
    title: "SmartSheets Panel",
    slug: "smartsheets",
    thumbnail: thumbnailSmartsheets,
    description: "Capa de interfaz sobre Smartsheet",
  },
  {
    title: "Comparador y migrador",
    slug: "comparador",
    thumbnail: thumbnailComparador,
    description: "Extracción de tarifas con IA",
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
