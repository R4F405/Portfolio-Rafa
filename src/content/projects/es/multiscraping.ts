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
    "Suite de captación de leads B2B: un scraper independiente por plataforma, cada uno con su propia API FastAPI y su base SQLite, orquestados desde un panel web único que centraliza el login, la interfaz y el proxy a cada backend.<br/><br/>Los módulos operativos son <strong>Google Maps</strong> e <strong>Instagram</strong>. El de Maps busca negocios por categoría y radio sobre un mapa, pagina los resultados con curl_cffi imitando el fingerprint TLS de Chrome, entra en la web de cada negocio para encontrar su email y lo verifica antes de guardarlo. El de Instagram trabaja en dos modos: dorking de perfiles públicos sin sesión y extracción de seguidores de una cuenta objetivo.<br/><br/>Todo el scraping pasa por proxies rotativos con cooldown, límites diarios, delays aleatorios y deduplicación por ventana temporal, y cada lead termina en la base de datos con exportación a CSV. Los módulos de <strong>LinkedIn</strong> (Playwright stealth con resolución de CAPTCHA vía noVNC) y <strong>TikTok</strong> están en desarrollo. Se despliega con Docker Compose y Nginx sobre VPS, con sesiones bcrypt y whitelist de IP.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping0,
        alt: "Panel unificado con las cuatro plataformas",
        caption: "Panel unificado con las cuatro plataformas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping1,
        alt: "Búsqueda en Google Maps por radio",
        caption: "Búsqueda en Google Maps por radio",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping2,
        alt: "Leads con email verificado y export CSV",
        caption: "Leads con email verificado y export CSV",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping3,
        alt: "Scraper de Instagram por nicho y ubicación",
        caption: "Scraper de Instagram por nicho y ubicación",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping4,
        alt: "Perfiles de Instagram con email extraído",
        caption: "Perfiles de Instagram con email extraído",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping5,
        alt: "Contactos de LinkedIn, módulo en desarrollo",
        caption: "Contactos de LinkedIn, módulo en desarrollo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: multiscraping6,
        alt: "Bases de datos por plataforma",
        caption: "Bases de datos por plataforma",
      },
    },
  ],
} as const satisfies ProjectContent;
