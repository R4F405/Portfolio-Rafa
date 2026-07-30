# Portfolio — Rafa San Pablo

Sitio personal con los proyectos en los que trabajo: fichas de cada uno, capturas y algún experimento en 3D. Textos en **castellano e inglés**.

Publicado en <https://r4f405.github.io/Portfolio-Rafa/>.

Construido con **Vue 3**, **TypeScript** y **Vite**. Animación con **GSAP** y **Lenis**, 3D con **three.js**, audio con **Howler**. El GLSL se compila con **vite-plugin-glsl**.

## Scripts

Gestor de paquetes: **pnpm** (fijado con `packageManager` en `package.json`; `corepack enable` para usarlo).

| Comando          | Descripción                                     |
| ---------------- | ----------------------------------------------- |
| `pnpm install`   | Instala dependencias                            |
| `pnpm dev`       | Servidor de desarrollo en el puerto **3000**    |
| `pnpm build`     | `vue-tsc` y bundle de producción en `dist/`     |
| `pnpm preview`   | Sirve la build de producción en local           |
| `pnpm typecheck` | Solo comprobación de tipos (`vue-tsc -b`)       |

## Contenido

- **Proyectos**: `src/content/projects/{es,en}/<slug>.ts` — texto, tags, imágenes y enlaces. Cada slug debe estar en `projectIds` (`src/content/projects/index.ts`).
- **Listado**: `src/content/projects/previews/{es,en}.ts` — título, slug, miniatura y descripción corta de cada tarjeta.
- **Tags**: los variantes y sus etiquetas están en `src/components/tagVariants.ts`, y su color en `Tag.vue`.
- **Colores por proyecto**: una clase `.project-<slug>` en `src/assets/styles/projects.scss`.
- **Miniaturas**: 540×304 en `src/assets/thumbnails/`. Imágenes de proyecto: 900×506 en `src/assets/images/projects/<slug>/`.

## Despliegue

GitHub Pages sirve el sitio en la subcarpeta `/Portfolio-Rafa/`, por eso `vite.config.ts` define `base: "/Portfolio-Rafa/"`. Con un dominio propio hay que quitar esa línea.

Las rutas internas se escriben sin prefijo (`/project/<slug>`); `Link.vue` lo añade y `useRouteObserver.ts` lo descuenta.

## Páginas legales

`public/legal.html` y `public/privacy.html`, con su versión en castellano en `public/es/`. Son HTML estático, fuera de la SPA.

## Estructura

- Vue 3 con `<script setup>`, SCSS y mixins compartidos en `src/assets/styles/`
- i18n propio en `src/i18n/`, con las cadenas en `src/i18n/messages/namespaces/common/{es,en}.json`
- WebGL y GLSL en `src/three/`
