import orcAttack0 from "../../../assets/images/projects/orc-attack/orc-attack-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Orc Attack",
  theme: "dark",
  tags: ["unity", "csharp"],
  videoBorder: false,
  source: "https://github.com/R4F405/Orc-attack",
  sources: [{ label: "Descargar para Windows", href: "https://github.com/R4F405/Orc-attack/releases/tag/v1.0" }],
  description:
    "Rogue-like de supervivencia por oleadas: aguantas el tiempo de cada nivel, recoges calaveras de los enemigos que caen y entre rondas las gastas en armas y mejoras. Fue mi <strong>TFG del ciclo de DAM</strong>.<br/><br/>Lo elegí precisamente por salir de lo que ya sabía hacer: en vez de entregar otra aplicación de gestión, me metí en Unity y C# desde cero para tener que aprender el motor durante el desarrollo.<br/><br/>Incluye combate cuerpo a cuerpo y a distancia con apuntado automático al enemigo más cercano, sistema de experiencia con panel de mejoras aleatorias al subir de nivel, tienda entre niveles, tres tipos de enemigo con comportamientos distintos (orcos, magos y tanques) y generadores de oleadas que escalan con el nivel. El audio va por un gestor global con música adaptativa según la escena, y los 56 scripts están documentados con comentarios XML de C#.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: orcAttack0,
        alt: "Partida en el nivel 4",
        caption: "Partida en el nivel 4",
      },
    },
  ],
} as const satisfies ProjectContent;
