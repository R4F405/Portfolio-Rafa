import discordBots0 from "../../../assets/images/projects/discord-bots/discord-bots-0.webp";
import discordBots1 from "../../../assets/images/projects/discord-bots/discord-bots-1.webp";
import discordBots2 from "../../../assets/images/projects/discord-bots/discord-bots-2.webp";
import discordBots3 from "../../../assets/images/projects/discord-bots/discord-bots-3.webp";
import discordBots4 from "../../../assets/images/projects/discord-bots/discord-bots-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Discord bots for the team",
  theme: "dark",
  tags: ["python", "discord", "flask"],
  videoBorder: false,
  sources: [
    { label: "GitHub bot", href: "https://github.com/R4F405/bot-discord-github" },
    { label: "Jira bot", href: "https://github.com/R4F405/discord-jira-bot" },
  ],
  description:
    "Two bots that bring into the team channel what used to require opening GitHub and Jira. Both written in Python with discord.py, each running its own web server inside the process to receive webhooks.<br/><br/>The <strong>GitHub bot</strong> starts an aiohttp server that validates every request with HMAC SHA-256 against the webhook secret before looking at the payload. It posts colour-coded embeds per event: pull requests opened and merged with branch, commits and changed lines; workflow results in green or red; and review comments pointing at the exact file and line.<br/><br/>The <strong>Jira bot</strong> adds slash commands to look up a ticket by key or list someone's tickets by state (backlog, in progress, blocked, done), resolving each query against the Jira REST API. In the other direction, a Flask server behind waitress receives Jira events and posts new tickets, status changes, reassignments, comments and attachments to the channel.<br/><br/><em>The screenshots are mockups: repos, tickets and names are invented.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots0,
        alt: "Pull request opened and merged notifications",
        caption: "Pull request opened and merged",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots1,
        alt: "Workflow results",
        caption: "Workflow results",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots2,
        alt: "Code review comments",
        caption: "Code review comments",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots3,
        alt: "Jira ticket lookup",
        caption: "Jira ticket lookup",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: discordBots4,
        alt: "Someone's in-progress tickets",
        caption: "In-progress tickets",
      },
    },
  ],
} as const satisfies ProjectContent;
