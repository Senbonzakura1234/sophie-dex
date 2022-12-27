/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Rubik', 'sans-serif'],
			serif: ['Roboto Slab', 'serif'],
			mono: ['Monoton', 'cursive'],
			atelier: ['Atelier'],
		},
		extend: {
			gridTemplateRows: { layoutMobile: '64px minmax(auto, 1fr)', layoutDesktop: '72px minmax(auto, 1fr)' },
			gridTemplateColumns: {
				searchBar: 'repeat(auto-fill, minmax(22rem, 1fr))',
				traitMergeList: 'repeat(auto-fit, minmax(14rem, 1fr))',
			},
			fill: { ['none']: 'none' },
			stroke: { ['none']: 'none' },
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		/** @type {import('@root/types/common/tailwind').TailwindTheme} */
		themes: ['bumblebee'],
		// darkTheme: 'dracula',
	},
	darkMode: 'class',
};
