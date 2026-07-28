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
    "Rapidgest es un software de gestión en la nube para autónomos, pymes y gestorías: facturación, fichaje, partes de trabajo, clientes y cobros en un solo lugar.<br/><br/>Trabajo sobre el producto completo: facturación adaptada a VeriFactu, control horario, agenda de trabajos y escaneo de gastos con OCR, construido con Laravel, Livewire, Alpine.js y MySQL.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest0,
        alt: "Panel de control",
        caption: "Panel de control",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest1,
        alt: "Facturación y VeriFactu",
        caption: "Facturación y VeriFactu",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest2,
        alt: "Fichaje y control horario",
        caption: "Fichaje y control horario",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest3,
        alt: "Calendario de órdenes de trabajo",
        caption: "Calendario de órdenes de trabajo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest4,
        alt: "Ficha de cliente",
        caption: "Ficha de cliente",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rapidgest5,
        alt: "Escaneo de gastos con IA",
        caption: "Escaneo de gastos con IA",
      },
    },
  ],
} as const satisfies ProjectContent;
