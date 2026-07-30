import orcAttack0 from "../../../assets/images/projects/orc-attack/orc-attack-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Orc Attack",
  theme: "dark",
  tags: ["unity", "csharp"],
  videoBorder: false,
  source: "https://github.com/R4F405/Orc-attack",
  sources: [{ label: "Download for Windows", href: "https://github.com/R4F405/Orc-attack/releases/tag/v1.0" }],
  description:
    "A wave-survival rogue-like: hold out for the duration of each level, collect skulls from fallen enemies and spend them between rounds on weapons and upgrades. It was my <strong>final project for the DAM vocational degree</strong>.<br/><br/>I picked it precisely to step outside what I already knew: instead of handing in yet another business application, I went into Unity and C# from scratch so I would have to learn the engine along the way.<br/><br/>It features melee and ranged combat with automatic aiming at the nearest enemy, an experience system with a random upgrade panel on level up, a shop between levels, three enemy types with different behaviours (orcs, mages and tanks) and wave spawners that scale with the level. Audio runs through a global manager with per-scene adaptive music, and all 56 scripts are documented with C# XML comments.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: orcAttack0,
        alt: "Playing level 4",
        caption: "Playing level 4",
      },
    },
  ],
} as const satisfies ProjectContent;
