<script setup lang="ts">
import { SOCIAL_ICONS_PATH } from "../constants.js";
import GithubIcon from "../assets/icons/socials/github.svg?raw";
import LinkedInIcon from "../assets/icons/socials/linkedin.svg?raw";
import UpworkIcon from "../assets/icons/socials/upwork.svg?raw";

import { useStore } from "../stores/store";

const socials = [
  {
    name: "Github",
    url: "https://github.com/franpas12123/",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/franz-pas/",
    icon: LinkedInIcon,
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01411fc85e1bb3fd4a",
    icon: UpworkIcon,
  },
];

const { navigation } = useStore();
</script>

<template>
  <header
    class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
  >
    <div>
      <div>
        <h1 class="text-4xl font-bold text-slate-200 sm:text-5xl">
          Frances Pasulohan
        </h1>
        <p class="my-2 text-lg font-medium tracking-wider text-slate-200">
          Full Stack Developer
        </p>
        <p class="mt-3 max-w-xs">
          I create visually appealing, user-friendly digital experiences.
        </p>
      </div>

      <nav class="mt-16 hidden lg:block">
        <ul class="flex flex-col justify-between">
          <li v-for="item in navigation" :key="item.name" class="mb-2">
            <a :href="item.url" :aria-label="`${item.name} section`">
              <span class="text-sm uppercase tracking-wider">
                {{ item.name }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="sticky bottom-0 mt-8 flex">
      <div v-for="social in socials" :key="social.name">
        <a
          class=""
          :href="social.url"
          target="_blank"
          :aria-label="`${social.name} (opens in a new tab)`"
        >
          <span class="sr-only">{{ social.name }}</span>
          <div
            class="mr-3 h-8 w-8 text-icon-default hover:text-icon-hover"
            v-html="social.icon"
          ></div>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
