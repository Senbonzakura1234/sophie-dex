import type { TextShadowUtilities } from '@root/types/common/tailwind';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import tailwindPlugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: { fontFamily: { atelier: ['var(--font-atelier)'] } },
	plugins: [
		daisyui,
		tailwindPlugin(({ theme, addUtilities }) => {
			const colors = theme('colors');
			if (!colors) return;

			const appTextShadows: TextShadowUtilities = {
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
				'.text-shadow-dark-xs': { textShadow: `0 0 ${theme('spacing.1')} ${colors.black}` },
				'.text-shadow-dark-sm': { textShadow: `0 0 ${theme('spacing.2')} ${colors.black}` },
				'.text-shadow-dark-md': { textShadow: `0 0 ${theme('spacing.3')} ${colors.black}` },
				'.text-shadow-dark-lg': { textShadow: `0 0 ${theme('spacing.4')} ${colors.black}` },
				'.text-shadow-dark-xl': { textShadow: `0 0 ${theme('spacing.5')} ${colors.black}` },

				'.text-shadow-light-xs': { textShadow: `0 0 ${theme('spacing.1')} ${colors.white}` },
				'.text-shadow-light-sm': { textShadow: `0 0 ${theme('spacing.2')} ${colors.white}` },
				'.text-shadow-light-md': { textShadow: `0 0 ${theme('spacing.3')} ${colors.white}` },
				'.text-shadow-light-lg': { textShadow: `0 0 ${theme('spacing.4')} ${colors.white}` },
				'.text-shadow-light-xl': { textShadow: `0 0 ${theme('spacing.5')} ${colors.white}` },
			});
		}),
	],
	daisyui: {
		themes: ['autumn', 'fantasy', 'forest', 'synthwave', 'wireframe'],
	},
	darkMode: 'class',
};
export default config;
