import discordBots0 from "../../../assets/images/projects/discord-bots/discord-bots-0.webp";
import discordBots1 from "../../../assets/images/projects/discord-bots/discord-bots-1.webp";
import discordBots2 from "../../../assets/images/projects/discord-bots/discord-bots-2.webp";
import discordBots3 from "../../../assets/images/projects/discord-bots/discord-bots-3.webp";
import discordBots4 from "../../../assets/images/projects/discord-bots/discord-bots-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Bots de Discord para el equipo",
  theme: "dark",
  tags: ["python", "discord", "flask"],
  videoBorder: false,
  sources: [
    { label: "Bot de GitHub", href: "https://github.com/R4F405/bot-discord-github" },
    { label: "Bot de Jira", href: "https://github.com/R4F405/discord-jira-bot" },
  ],
  description:
    "Dos bots que llevan al canal del equipo lo que antes había que ir a buscar a GitHub y a Jira. Ambos en Python con discord.py, y con su propio servidor web dentro del proceso para recibir los webhooks.<br/><br/>El <strong>bot de GitHub</strong> levanta un servidor aiohttp que valida cada petición con HMAC SHA-256 contra el secreto del webhook antes de mirar el contenido. Publica embeds con color según el evento: pull request abierto y fusionado con rama, commits y líneas cambiadas; resultado de los workflows en verde o rojo; y comentarios de revisión indicando el archivo y la línea exacta.<br/><br/>El <strong>bot de Jira</strong> añade slash commands para consultar un ticket por su clave o listar los de una persona por estado (pendientes, en curso, bloqueados, finalizados), resolviendo cada consulta contra la API REST de Jira. En sentido inverso, un servidor Flask servido con waitress recibe los eventos de Jira y avisa en el canal de altas, cambios de estado, reasignaciones, comentarios y adjuntos.<br/><br/><em>Las capturas son maquetas: repos, tickets y nombres son inventados.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots0,
        alt: "Aviso de pull request abierto y fusionado",
        caption: "Pull request abierto y fusionado",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots1,
        alt: "Resultado de los workflows",
        caption: "Resultado de los workflows",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots2,
        alt: "Comentarios de revisión de código",
        caption: "Comentarios de revisión de código",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots3,
        alt: "Consulta de un ticket de Jira",
        caption: "Consulta de un ticket de Jira",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots4,
        alt: "Tickets en curso de una persona",
        caption: "Tickets en curso de una persona",
      },
    },
  ],
} as const satisfies ProjectContent;
