export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "laravel"
  | "livewire"
  | "alpine"
  | "php"
  | "mysql"
  | "vue"
  | "inertia"
  | "tailwind"
  | "openai"
  | "bootstrap";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  laravel: "Laravel",
  livewire: "Livewire",
  alpine: "Alpine.js",
  php: "PHP",
  mysql: "MySQL",
  vue: "Vue 3",
  inertia: "Inertia.js",
  tailwind: "Tailwind",
  openai: "OpenAI API",
  bootstrap: "Bootstrap",
} as const satisfies Record<TagVariant, string>;
