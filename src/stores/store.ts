import { defineStore } from "pinia";
import { useElementVisibility } from "@vueuse/core";

// create a new store in composition api style
export const useStore = defineStore('store', () => {
  // state
  const navigation = {
    about: {
      name: "about",
      url: "#about",
      ref: 'about',
      ariaLabel: 'About me',
      isVisible: useElementVisibility(null)
    },
    experience: {
      name: "experience",
      url: "#work-experience",
      ref: 'work-experience',
      ariaLabel: 'Work experience',
      isVisible: useElementVisibility(null)
    },
    'frelance-experience': {
      name: "freelance experience",
      url: "#freelance-experience",
      ref: 'freelance-experience',
      ariaLabel: 'Freelance experience',
      isVisible: useElementVisibility(null)
    },
    projects: {
      name: "projects",
      url: "#projects",
      ref: 'projects',
      ariaLabel: 'Projects',
      isVisible: useElementVisibility(null)
    },
    contact: {
      name: "contact",
      url: "#contact",
      ref: 'contact',
      ariaLabel: 'Contact',
      isVisible: useElementVisibility(null)
    },
  }

  const setVisibility = (ref: string, isVisible: boolean) => {
  }

  return { navigation, setVisibility }
})