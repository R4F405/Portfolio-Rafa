import whistleblowing0 from "../../../assets/images/projects/whistleblowing/whistleblowing-0.webp";
import whistleblowing1 from "../../../assets/images/projects/whistleblowing/whistleblowing-1.webp";
import whistleblowing2 from "../../../assets/images/projects/whistleblowing/whistleblowing-2.webp";
import whistleblowing3 from "../../../assets/images/projects/whistleblowing/whistleblowing-3.webp";
import whistleblowing4 from "../../../assets/images/projects/whistleblowing/whistleblowing-4.webp";
import whistleblowing5 from "../../../assets/images/projects/whistleblowing/whistleblowing-5.webp";
import whistleblowing6 from "../../../assets/images/projects/whistleblowing/whistleblowing-6.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Canal de denuncias anónimo",
  theme: "dark",
  tags: ["laravel", "livewire", "alpine", "tailwind", "mysql"],
  videoBorder: false,
  description:
    "Plataforma de canal de denuncias conforme a la <strong>Ley 2/2023</strong>, construida sobre una idea simple: si el sistema no guarda el dato, nadie puede filtrarlo.<br/><br/>El informante envía la denuncia sin cuenta y recibe un código de seguimiento con el que consulta el estado y habla con el gestor por un chat cifrado. Un middleware sobrescribe su IP y borra el User-Agent antes de que la petición llegue al controlador, los adjuntos pasan por una limpieza de metadatos EXIF y GPS, y el asunto, la descripción y los mensajes se guardan cifrados con AES-256-CBC.<br/><br/>Del lado de la empresa hay jerarquía de roles con permisos por área, 2FA obligatorio, registro de auditoría inmutable de cada acceso y descarga, y exportación de logs a XLSX, CSV y PDF con previsualización. Se completa con honeypot doble contra bots y límite de envíos por hash irreversible de IP.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: whistleblowing0,
        alt: "Canal público de la empresa",
        caption: "Canal público de la empresa",
      },
    },
    {
      type: "media",
      props: { type: "image", src: whistleblowing1, alt: "Envío de la denuncia", caption: "Envío de la denuncia" },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: whistleblowing2,
        alt: "Seguimiento por código anónimo",
        caption: "Seguimiento por código anónimo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: whistleblowing3,
        alt: "Chat cifrado con el informante",
        caption: "Chat cifrado con el informante",
      },
    },
    {
      type: "media",
      props: { type: "image", src: whistleblowing4, alt: "Panel de control", caption: "Panel de control" },
    },
    {
      type: "media",
      props: { type: "image", src: whistleblowing5, alt: "Bandeja de denuncias", caption: "Bandeja de denuncias" },
    },
    {
      type: "media",
      props: { type: "image", src: whistleblowing6, alt: "Registro de auditoría", caption: "Registro de auditoría" },
    },
  ],
} as const satisfies ProjectContent;
