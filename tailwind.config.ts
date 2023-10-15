import type { DefaultColors, TextShadowUtilities } from '@root/types/common/tailwind';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import tailwindPlugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: { fontFamily: { atelier: ['var(--font-atelier)'] } },
	},
	plugins: [
		tailwindPlugin(({ theme, addUtilities }) => {
			const colors = theme('colors') as DefaultColors | undefined;

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
				'.text-shadow-dark': {
					textShadow: `-2px 2px 0 ${colors.slate[950]}, 2px 2px 0 ${colors.slate[950]}, 2px -2px 0 ${colors.slate[950]}, -2px -2px 0 ${colors.slate[950]}, 0 0 15px ${colors.slate[950]}, 0 0 15px ${colors.slate[950]}`,
				},
				'.text-shadow-light': {
					textShadow: `-2px 2px 0 ${colors.slate[50]}, 2px 2px 0 ${colors.slate[50]}, 2px -2px 0 ${colors.slate[50]}, -2px -2px 0 ${colors.slate[50]}, 0 0 15px ${colors.slate[50]}, 0 0 15px ${colors.slate[50]}`,
				},
			});
		}),
		daisyui,
		typography,
	],
	daisyui: {
		themes: ['autumn', 'fantasy', 'forest', 'synthwave'],
	},
	darkMode: 'class',
};
export default config;
