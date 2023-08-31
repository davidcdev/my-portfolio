/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      keyframes: {
        animategradient: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '-200%' }
        }
      },
      backgroundSize: {
        '200%': '200%'
      },
      animation: {
        gradient: 'animategradient 4s ease-in-out infinite'
      },
      borderRadius: {
        large: '2rem',
        extraLarge: '4rem'
      }
    },
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
