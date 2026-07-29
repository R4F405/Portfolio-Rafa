import smartsheets0 from "../../../assets/images/projects/smartsheets/smartsheets-0.webp";
import smartsheets1 from "../../../assets/images/projects/smartsheets/smartsheets-1.webp";
import smartsheets2 from "../../../assets/images/projects/smartsheets/smartsheets-2.webp";
import smartsheets3 from "../../../assets/images/projects/smartsheets/smartsheets-3.webp";
import smartsheets4 from "../../../assets/images/projects/smartsheets/smartsheets-4.webp";
import smartsheets5 from "../../../assets/images/projects/smartsheets/smartsheets-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "SmartSheets Panel",
  theme: "light",
  tags: ["laravel", "vue", "inertia", "tailwind", "mysql"],
  videoBorder: false,
  liveComingSoon: true,
  description:
    "Multi-tenant SaaS that acts as a custom interface layer on top of <strong>Smartsheet</strong>. Each company builds tailored views for its field workers, who work on the data without needing a Smartsheet licence per user — an affordable alternative to Dynamic View.<br/><br/>Built with Laravel 13, Vue 3 and Inertia.js, with team-based multi-tenancy, a role and permission system per area, and a catalogue of view elements (read, write, media, timers and dynamic lists) that are combined to compose each screen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets0,
        alt: "View builder",
        caption: "View builder",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets1,
        alt: "Field worker view on mobile",
        caption: "Field worker view on mobile",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets2,
        alt: "View elements",
        caption: "View elements",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets3,
        alt: "Platform panel",
        caption: "Platform panel",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets4,
        alt: "Members and roles",
        caption: "Members and roles",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets5,
        alt: "Per-company Smartsheet connection",
        caption: "Per-company Smartsheet connection",
      },
    },
  ],
} as const satisfies ProjectContent;
