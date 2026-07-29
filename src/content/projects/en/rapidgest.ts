import rapidgest0 from "../../../assets/images/projects/rapidgest/rapidgest-0.webp";
import rapidgest1 from "../../../assets/images/projects/rapidgest/rapidgest-1.webp";
import rapidgest2 from "../../../assets/images/projects/rapidgest/rapidgest-2.webp";
import rapidgest3 from "../../../assets/images/projects/rapidgest/rapidgest-3.webp";
import rapidgest4 from "../../../assets/images/projects/rapidgest/rapidgest-4.webp";
import rapidgest5 from "../../../assets/images/projects/rapidgest/rapidgest-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Rapidgest",
  theme: "light",
  tags: ["laravel", "livewire", "alpine", "php", "mysql"],
  videoBorder: false,
  live: "https://rapidgest.com",
  description:
    "Rapidgest is the cloud business management platform built at <strong>Softtalia</strong>, the company I currently work for: invoicing, time tracking, work orders, customers and payments for freelancers, small companies and accounting firms, all in one place.<br/><br/>It is my day-to-day project, under active development every day across the whole product: VeriFactu-ready invoicing, digital time clock, work order calendar and AI-powered expense scanning, built with Laravel, Livewire, Alpine.js and MySQL.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest0,
        alt: "Dashboard",
        caption: "Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest1,
        alt: "Invoicing and VeriFactu",
        caption: "Invoicing and VeriFactu",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest2,
        alt: "Time clock and attendance",
        caption: "Time clock and attendance",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest3,
        alt: "Work order calendar",
        caption: "Work order calendar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest4,
        alt: "Customer profile",
        caption: "Customer profile",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest5,
        alt: "AI expense scanning",
        caption: "AI expense scanning",
      },
    },
  ],
} as const satisfies ProjectContent;
