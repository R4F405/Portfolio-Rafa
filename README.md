# Portfolio (2025)

Personal portfolio site: project case studies, lightweight 3D and shader demos, bilingual copy (English and German).

Built with **Vue 3**, **TypeScript**, and **Vite**. Motion via **GSAP** and **Lenis**, 3D via **three.js**, audio via **Howler**. GLSL is compiled through **vite-plugin-glsl**.

## Scripts

Package manager: **pnpm** (pinned via `packageManager` in `package.json`; `corepack enable` to use it).

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm install` | Install dependencies |
| `pnpm dev`   | Dev server on port **3000** (`strictPort`) |
| `pnpm build` | `vue-tsc` then production bundle to `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm typecheck` | Typecheck only (`vue-tsc -b`) |

## Content

- **Projects**: `src/content/projects/{en,de}/<slug>.ts` — copy, tags, media, links. Slugs must align with `projectIds` in `src/content/projects/index.ts`.
- **Previews / listing**: `src/content/projects/previews/`.
- **Tags**: variants and labels live in `src/components/tagVariants.ts` (used by `Tag.vue` and content types).

## Stack (high level)

- Vue 3 (`<script setup>`), SCSS with shared mixins (`src/assets/styles/`)
- i18n helpers under `src/i18n/`
- WebGL / GLSL under `src/three/` where applicable
