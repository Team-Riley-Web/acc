/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        acc: {
          mist: '#eeefe8',
          sky: '#97CAD8',
          blue: '#73A9BB',
          grayblue: '#AFC9CF',
          aqua: '#9FCBD0',
          deep: '#01293c',
          muted: '#527F8E',
          ice: '#B5E9F7',
          pale: '#C1EEF2',
          taupe: '#B2A081',
          gold: '#B59F44',
        },
      },
      fontFamily: {
        heading: ['"Tactic Sans Extra Extended Italic"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
