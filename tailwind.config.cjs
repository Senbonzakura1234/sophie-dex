const tailwindPlugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: { fontFamily: { atelier: ['var(--font-atelier)'], roboto: ['var(--font-roboto)'] } },
	plugins: [
		require('daisyui'),
		tailwindPlugin(({ theme, addUtilities }) => {
			/** @type {import('@root/types/common/tailwind').DefaultColors | undefined}*/
			const colors = theme('colors');
			if (!colors) return;

			/** @type {import('@root/types/common/tailwind').TextShadowUtilities}*/
			const appTextShadows = {
				'.app-text-shadow-BLUE': {
					textShadow: `-2px 2px 0 ${colors.blue[600]}, 2px 2px 0 ${colors.blue[600]}, 2px -2px 0 ${colors.blue[600]}, -2px -2px 0 ${colors.blue[600]}, 0 0 15px ${colors.blue[600]}, 0 0 15px ${colors.blue[900]}`,
				},
				'.app-text-shadow-GREEN': {
					textShadow: `-2px 2px 0 ${colors.green[600]}, 2px 2px 0 ${colors.green[600]}, 2px -2px 0 ${colors.green[600]}, -2px -2px 0 ${colors.green[600]}, 0 0 15px ${colors.green[600]}, 0 0 15px ${colors.green[900]}`,
				},
				'.app-text-shadow-RED': {
					textShadow: `-2px 2px 0 ${colors.red[600]}, 2px 2px 0 ${colors.red[600]}, 2px -2px 0 ${colors.red[600]}, -2px -2px 0 ${colors.red[600]}, 0 0 15px ${colors.red[600]}, 0 0 15px ${colors.red[900]}`,
				},
				'.app-text-shadow-WHITE': {
					textShadow: `-2px 2px 0 ${colors.slate[600]}, 2px 2px 0 ${colors.slate[600]}, 2px -2px 0 ${colors.slate[600]}, -2px -2px 0 ${colors.slate[600]}, 0 0 15px ${colors.slate[600]}, 0 0 15px ${colors.slate[900]}`,
				},
				'.app-text-shadow-YELLOW': {
					textShadow: `-2px 2px 0 ${colors.yellow[600]}, 2px 2px 0 ${colors.yellow[600]}, 2px -2px 0 ${colors.yellow[600]}, -2px -2px 0 ${colors.yellow[600]}, 0 0 15px ${colors.yellow[600]}, 0 0 15px ${colors.yellow[900]}`,
				},
			};

			addUtilities({
				...appTextShadows,
				'.text-shadow-dark': { textShadow: `0 0 ${theme('spacing.3')} ${colors.black}` },
				'.text-shadow-light': { textShadow: `0 0 ${theme('spacing.3')} ${colors.white}` },
			});
		}),
	],
	daisyui: {
		/** @type {import('@root/types/common/tailwind').TailwindTheme} */
		themes: ['fantasy'],
	},
	darkMode: 'class',
};
