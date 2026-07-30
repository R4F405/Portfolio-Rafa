import whistleblowing0 from "../../../assets/images/projects/whistleblowing/whistleblowing-0.webp";
import whistleblowing1 from "../../../assets/images/projects/whistleblowing/whistleblowing-1.webp";
import whistleblowing2 from "../../../assets/images/projects/whistleblowing/whistleblowing-2.webp";
import whistleblowing3 from "../../../assets/images/projects/whistleblowing/whistleblowing-3.webp";
import whistleblowing4 from "../../../assets/images/projects/whistleblowing/whistleblowing-4.webp";
import whistleblowing5 from "../../../assets/images/projects/whistleblowing/whistleblowing-5.webp";
import whistleblowing6 from "../../../assets/images/projects/whistleblowing/whistleblowing-6.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Anonymous whistleblowing channel",
  theme: "dark",
  tags: ["laravel", "livewire", "alpine", "tailwind", "mysql"],
  videoBorder: false,
  liveComingSoon: true,
  description:
    "A whistleblowing platform compliant with Spanish <strong>Law 2/2023</strong>, built on one simple idea: data the system never stores cannot leak.<br/><br/>Whistleblowers file a report without an account and get a tracking code to check its status and talk to the case handler over an encrypted chat. A middleware overwrites their IP and strips the User-Agent before the request reaches the controller, attachments go through EXIF and GPS metadata cleaning, and the subject, description and messages are stored encrypted with AES-256-CBC.<br/><br/>On the company side there is a role hierarchy with per-area permissions, mandatory 2FA, an immutable audit log of every access and download, and log exports to XLSX, CSV and PDF with preview. Rounded off with a dual honeypot against bots and submission rate limiting keyed on an irreversible IP hash.",
  components: [
    {
      type: "media",
      props: { type: "image", src: whistleblowing0, alt: "Company public channel", caption: "Company public channel" },
    },
    {
      type: "media",
      props: { type: "image", src: whistleblowing1, alt: "Filing a report", caption: "Filing a report" },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: whistleblowing2,
        alt: "Anonymous tracking code",
        caption: "Anonymous tracking code",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: whistleblowing3,
        alt: "Encrypted chat with the whistleblower",
        caption: "Encrypted chat with the whistleblower",
      },
    },
    {
      type: "media",
      props: { type: "image", src: whistleblowing4, alt: "Dashboard", caption: "Dashboard" },
    },
    {
      type: "media",
      props: { type: "image", src: whistleblowing5, alt: "Report inbox", caption: "Report inbox" },
    },
    {
      type: "media",
      props: { type: "image", src: whistleblowing6, alt: "Audit log", caption: "Audit log" },
    },
  ],
} as const satisfies ProjectContent;
