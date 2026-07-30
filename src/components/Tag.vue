<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-laravel {
      background-color: #f53003;
      color: white;
    }

    &-livewire {
      background-color: #4e56a6;
      color: white;
    }

    &-alpine {
      background-color: #77c1d2;
      color: #0f2e36;
    }

    &-php {
      background-color: #777bb4;
      color: white;
    }

    &-mysql {
      background-color: #00618a;
      color: white;
    }

    &-vue {
      background-color: #42b883;
      color: #0d2b1e;
    }

    &-inertia {
      background-color: #6c5ce7;
      color: white;
    }

    &-tailwind {
      background-color: #38bdf8;
      color: #06283a;
    }

    &-openai {
      background-color: #10a37f;
      color: white;
    }

    &-bootstrap {
      background-color: #7952b3;
      color: white;
    }

    &-python {
      background-color: #3776ab;
      color: white;
    }

    &-discord {
      background-color: #5865f2;
      color: white;
    }

    &-flask {
      background-color: #1a1a1a;
      color: white;
    }

    &-fastapi {
      background-color: #009688;
      color: white;
    }

    &-playwright {
      background-color: #2ead33;
      color: #06280a;
    }

    &-sqlite {
      background-color: #0f80cc;
      color: white;
    }

    &-docker {
      background-color: #2496ed;
      color: white;
    }

    &-unity {
      background-color: #222c37;
      color: white;
    }

    &-csharp {
      background-color: #68217a;
      color: white;
    }
  }
}
</style>
