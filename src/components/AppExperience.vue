<script setup lang="ts">
const {
  dates,
  title,
  company = "",
  companyUrl = "",
  technologies = ["Vue", "Typescript", "Javascript"],
} = defineProps<{
  dates: string,
  title: string;
  company?: string;
  companyUrl?: string;
  technologies: string[];
}>();
</script>
<template>
  <div class="mb-10 flex">
    <header class="mb-2 mt-1 basis-1/4 text-xs uppercase mr-1.5">
      {{ dates }}
    </header>
    <div class="basis-3/4">
      <h3 class="text-slate-200 font-medium leading-snug">
        {{ title }}
        <a v-if="companyUrl" :href="companyUrl" target="_blank"  class="font-light text-sm">
          {{ company ? `at ${company}` : "" }}
        </a>
        <span v-else class="font-light text-sm">
          {{ company ? `at ${company}` : "" }}
        </span>
      </h3>
      <p class="my-2 text-sm">
        <slot />
      </p>
      <ul class="flex flex-wrap">
        <li v-for="technology in technologies" :key="technology">
          <div
            class="mr-2 mt-2 rounded-full bg-slate-400 bg-teal-400/10 px-3 py-1 text-xs font-light leading-5 text-teal-300"
          >
            {{ technology }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
