import { projectIds } from "./projects/index";

import type { TagVariant } from "../components/tagVariants";
import type { ProjectComponent } from "../features/projects/types";

export type ProjectId = (typeof projectIds)[number];

export interface ProjectContent {
  title: string;
  theme: "light" | "dark";
  tags: TagVariant[];
  description?: string;
  videoBorder?: boolean;
  live?: string;
  /** Muestra el botón "Ver en vivo" desactivado, con aviso de web en desarrollo al pasar el cursor. */
  liveComingSoon?: boolean;
  source?: string;
  components?: ProjectComponent[];
}

export interface SkillContent {
  name: string;
  bullets: string[];
}

export interface ProjectPreview {
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
}
