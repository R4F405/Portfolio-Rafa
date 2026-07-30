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
  | "bootstrap"
  | "python"
  | "discord"
  | "flask"
  | "fastapi"
  | "playwright"
  | "sqlite"
  | "docker";

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
  python: "Python",
  discord: "discord.py",
  flask: "Flask",
  fastapi: "FastAPI",
  playwright: "Playwright",
  sqlite: "SQLite",
  docker: "Docker",
} as const satisfies Record<TagVariant, string>;
