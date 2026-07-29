import comparador0 from "../../../assets/images/projects/comparador/comparador-0.webp";
import comparador1 from "../../../assets/images/projects/comparador/comparador-1.webp";
import comparador2 from "../../../assets/images/projects/comparador/comparador-2.webp";
import comparador3 from "../../../assets/images/projects/comparador/comparador-3.webp";
import comparador4 from "../../../assets/images/projects/comparador/comparador-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Tariff comparator and migrator",
  theme: "light",
  tags: ["php", "mysql", "javascript", "openai", "bootstrap"],
  videoBorder: false,
  description:
    "Two modules I built end to end inside the CRM of an energy retailer, both backed by AI to remove manual data entry.<br/><br/>The <strong>comparator</strong> takes the customer's bill as a PDF or image, runs it through OCR and AI extraction, and pulls out the current retailer, tariff, P1-P6 power levels, consumption and prices. It then matches that against the catalogue of active products and computes the savings study for electricity and gas, creating the customer record if it did not exist yet.<br/><br/>The <strong>migrator</strong> does the same for the tariff PDFs retailers send over: it extracts every product into CSV, shows them for review before touching the database, and on import adds the new ones while deactivating those no longer offered. Calls are structured across several turns to reuse the model's prefix cache and cut cost and latency.<br/><br/><em>The screenshots are mockups with invented data and retailer names.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: comparador0,
        alt: "Data extracted from the bill",
        caption: "Data extracted from the bill",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: comparador1,
        alt: "Savings study",
        caption: "Savings study",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: comparador2,
        alt: "Tariff PDF upload",
        caption: "Tariff PDF upload",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: comparador3,
        alt: "Review of extracted products",
        caption: "Review of extracted products",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: comparador4,
        alt: "Import result",
        caption: "Import result",
      },
    },
  ],
} as const satisfies ProjectContent;
