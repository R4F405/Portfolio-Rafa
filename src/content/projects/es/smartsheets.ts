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
    "SaaS multi-tenant que funciona como capa de interfaz sobre <strong>Smartsheet</strong>. Cada empresa configura vistas a medida para sus operarios de campo, que trabajan sobre los datos sin necesitar una licencia de Smartsheet por usuario: una alternativa económica a Dynamic View.<br/><br/>Construido con Laravel 13, Vue 3 e Inertia.js, con multi-tenancy por equipos, sistema de roles y permisos por área, y un catálogo de elementos de vista (lectura, escritura, multimedia, temporizadores y listas dinámicas) que se combinan para montar cada pantalla.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets0,
        alt: "Editor de vistas",
        caption: "Editor de vistas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets1,
        alt: "Vista del operario en móvil",
        caption: "Vista del operario en móvil",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets2,
        alt: "Elementos de la vista",
        caption: "Elementos de la vista",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets3,
        alt: "Panel de plataforma",
        caption: "Panel de plataforma",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets4,
        alt: "Miembros y roles",
        caption: "Miembros y roles",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartsheets5,
        alt: "Conexión con Smartsheet por empresa",
        caption: "Conexión con Smartsheet por empresa",
      },
    },
  ],
} as const satisfies ProjectContent;
