<script setup lang="ts">
const { ariaLabel } = defineProps<{
  ariaLabel: string;
  title: string;
}>();
</script>

<template>
  <div
    class="sticky top-0 scroll-mt-16 bg-slate-900/75 backdrop-blur"
    :aria-label="ariaLabel"
  >
    <h2
      class="text-md py-6 font-bold uppercase tracking-wide text-slate-200 lg:sr-only"
    >
      {{ title }}
    </h2>
  </div>
  <slot>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa incidunt
      similique vel quos, libero assumenda suscipit excepturi asperiores quas
      provident neque quisquam pariatur laudantium ipsa impedit placeat harum?
      Consequatur, labore!
    </p>
    <br />
  </slot>
</template>

<style scoped></style>
