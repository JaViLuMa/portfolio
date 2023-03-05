/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      cursor: {
        'left-arrow-light': 'url(/icons/icon-arrow-left-light.svg), pointer',
        'right-arrow-light': 'url(/icons/icon-arrow-right-light.svg), pointer',
        'left-arrow-dark': 'url(/icons/icon-arrow-left-dark.svg), pointer',
        'right-arrow-dark': 'url(/icons/icon-arrow-right-dark.svg), pointer',
        'image-light': 'url(/icons/icon-image-light.svg), pointer',
        'image-dark': 'url(/icons/icon-image-dark.svg), pointer',
        'eye-light': 'url(/icons/icon-eye-light.svg), pointer',
        'eye-dark': 'url(/icons/icon-eye-dark.svg), pointer',
        contact: 'url(/icons/icon-contact.svg), pointer',
        file: 'url(/icons/icon-file.svg), pointer',
      },
      colors: {
        'philippine-yellow': '#ffC900',
        'lemon-glacier': '#fdff00',
        'pale-magenta': '#ff90e8',
        'electric-pink': '#fb2576',
        fandango: '#b23386',
        'dark-orchid': '#a31acb',
        'light-cobalt-blue': '#90a8ed',
        aqua: '#00f5ff',
        'jungle-green': '#23a094',
        'electric-green': '#16ff00',
        'outrageous-orange': '#ff7051',
        'red-ryb': '#ff1e1e',
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      gridTemplateAreas: {
        layout: [
          'about-me-header contact-me           misc',
          'about-me        projects-worked-on   misc',
          'me              projects-worked-on   cv',
        ],
        'layout-mobile': [
          'about-me-header',
          'about-me',
          'me',
          'contact-me',
          'contacts',
          'projects-worked-on',
          'misc',
          'cv',
        ],
      },
      gridTemplateColumns: { layout: '50% 30% 20%' },
      gridTemplateRows: {
        layout: '144px 2fr 320px',
        'layout-mobile': 'repeat(8, minmax(min-content,max-content))',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-scrollbar'),
    plugin(({ addUtilities, matchUtilities, theme }) => {
      const textStroke = {
        '.text-stroke-before': {
          '-webkit-text-fill-color': theme('colors.philippine-yellow'),
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#000000',
        },
        '.text-stroke-after': {
          '-webkit-text-fill-color': theme('colors.philippine-yellow'),
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#00000080',
        },
      };

      const transformCenter = {
        '.transform-center-x': { transform: 'translateX(-50%)' },
        '.transform-center-y': { transform: 'translateY(-50%)' },
        '.transform-center': { transform: 'translate(-50%, -50%)' },
      };

      matchUtilities(
        {
          'back-shadow-initial': (modifier) => ({
            transform: 'translate(-0.2rem, -0.2rem)',
            'box-shadow': `0.2rem 0.2rem 0 0 ${modifier}`,
          }),
        },
        { values: theme('colors') }
      );

      matchUtilities(
        {
          'back-shadow-hover': (modifier) => ({
            transform: 'translate(-0.4rem, -0.4rem)',
            'box-shadow': `0.4rem 0.4rem 0 0 ${modifier}`,
          }),
        },
        { values: theme('colors') }
      );

      addUtilities(textStroke);
      addUtilities(transformCenter);
    }),
  ],
};
