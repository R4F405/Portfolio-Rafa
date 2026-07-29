import comparador0 from "../../../assets/images/projects/comparador/comparador-0.webp";
import comparador1 from "../../../assets/images/projects/comparador/comparador-1.webp";
import comparador2 from "../../../assets/images/projects/comparador/comparador-2.webp";
import comparador3 from "../../../assets/images/projects/comparador/comparador-3.webp";
import comparador4 from "../../../assets/images/projects/comparador/comparador-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Comparador y migrador de tarifas",
  theme: "light",
  tags: ["php", "mysql", "javascript", "openai", "bootstrap"],
  videoBorder: false,
  description:
    "Dos módulos que desarrollé de principio a fin dentro del CRM de una comercializadora de energía, ambos apoyados en IA para eliminar trabajo manual de introducción de datos.<br/><br/>El <strong>comparador</strong> recibe la factura del cliente en PDF o imagen, la pasa por OCR y extracción con IA, y de ahí saca comercializadora, tarifa, potencias P1-P6, consumos y precios. Con esos datos cruza el catálogo de productos activos y calcula el estudio de ahorro en luz y gas, creando el cliente si aún no existía.<br/><br/>El <strong>migrador</strong> hace lo mismo con los PDF de tarifas que envían las comercializadoras: extrae todos los productos a CSV, los muestra para revisión antes de tocar la base de datos, e importa dando de alta los nuevos e inactivando los que ya no se ofertan. Las llamadas se estructuran en varios turnos para reutilizar la caché de prefijo del modelo y recortar coste y latencia.<br/><br/><em>Las capturas son maquetas con datos y comercializadoras inventados.</em>",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: comparador0,
        alt: "Datos extraídos de la factura",
        caption: "Datos extraídos de la factura",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: comparador1,
        alt: "Estudio de ahorro",
        caption: "Estudio de ahorro",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: comparador2,
        alt: "Subida del PDF de tarifas",
        caption: "Subida del PDF de tarifas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: comparador3,
        alt: "Revisión de productos extraídos",
        caption: "Revisión de productos extraídos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: comparador4,
        alt: "Resultado de la importación",
        caption: "Resultado de la importación",
      },
    },
  ],
} as const satisfies ProjectContent;
