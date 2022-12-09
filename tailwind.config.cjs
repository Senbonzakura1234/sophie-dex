/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Varela Round', 'sans-serif'],
			serif: ['Merriweather Sans', 'sans-serif'],
			mono: ['Monoton', 'cursive'],
		},
		extend: {
			gridTemplateRows: {
				layoutMobile: '64px minmax(auto, 1fr)',
				layoutDesktop: '72px minmax(auto, 1fr)',
			},
			gridTemplateColumns: {
				searchBar: 'minmax(auto, 1fr) 48px',
				cardList: 'repeat(auto-fit, minmax(24rem, 1fr))',
				traitMergeList: 'repeat(auto-fit, minmax(14rem, 1fr))',
			},
			fill: {
				['none']: 'none',
			},
			stroke: {
				['none']: 'none',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['garden'],
		// darkTheme: 'dracula',
	},
	darkMode: 'class',
};
