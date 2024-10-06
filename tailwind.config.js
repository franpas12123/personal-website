/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#121b2b",
        secondary: "#F9E2E9",
        grey: "#9A9A9A",
        "dark-grey": "#444444",
        highlight: "#f63a43",
        heading: "#343434",
        "icon-default": "#94a3b8",
        "icon-hover": "#c4d0ec",
      },
      backgroundColor: (theme) => ({
        default: theme("colors.background"),
        primary: theme("colors.primary"),
      }),
      fill: (theme) => theme("colors"),
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
