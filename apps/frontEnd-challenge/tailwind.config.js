const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    // Include the content of shared libraries
    join(__dirname, '../../libs/**/src/**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#7328F6', // Custom color
        greyBorder:'#cccccc'
      },
      boxShadow:{
        'mainShadow':"rgba(115, 40, 246, 0.24) 0px 3px 8px;"
      }
    },
  },
  plugins: [],
};
