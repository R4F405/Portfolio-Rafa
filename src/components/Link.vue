<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { useRouter } from "../composables/useRouter";

const attrs = useAttrs();
const router = useRouter();

const props = defineProps<{
  external?: boolean;
  renderAs?: "a" | "button" | "div";
  href?: string;
  to?: string;
  replace?: boolean;
}>();

// Prefijo del despliegue. Las rutas se escriben sin él y se añade aquí.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const resolvedTo = computed(() => {
  let path = props.href || props.to || "/";

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Solo las rutas internas llevan prefijo; los enlaces externos van tal cual.
  if (BASE && path.startsWith("/") && !path.startsWith(`${BASE}/`)) {
    path = BASE + path;
  }

  return path;
});

const handleClick = (event: MouseEvent) => {
  // Don't interfere with external links or if modifier keys are pressed
  if (props.external || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
    return;
  }

  // Prevent default navigation
  event.preventDefault();

  // Use replace if specified, otherwise use push
  if (props.replace) {
    router.replace(resolvedTo.value);
  } else {
    router.push(resolvedTo.value);
  }
};
</script>

<template>
  <component
    v-if="props.external"
    :is="props.renderAs || 'a'"
    :href="resolvedTo"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="attrs"
  >
    <slot></slot>
  </component>

  <component
    v-else
    :is="props.renderAs || 'a'"
    :href="resolvedTo"
    @click="handleClick"
    v-bind="attrs"
  >
    <slot></slot>
  </component>
</template>
