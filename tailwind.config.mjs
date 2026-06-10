/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        acc: {
          mist: '#f8fdfe',
          sky: '#97CAD8',
          blue: '#73A9BB',
          grayblue: '#AFC9CF',
          aqua: '#9FCBD0',
          deep: '#01293c',
          muted: '#527F8E',
          ice: '#B5E9F7',
          pale: '#C1EEF2',
          taupe: '#B2A081',
          gold: '#e8a600',
          ink: '#02293c',
        },
      },
      fontFamily: {
        sans: ['Aeonik', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Aeonik', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
