import type { ColorEnum } from '@root/types/common/zod';
import colors from 'tailwindcss/colors';

export const APP_NAME = 'Sophie Dex';
export const APP_DESCRIPTION = 'Atelier Sophie: The Alchemist of the Mysterious Book DX - Wiki';
export const APP_KEYWORD = 'Atelier, Wiki, Sophie, Mysterious, DX';
export const APP_AUTHOR = 'Senbonzakura1234';
export const defaultLimit = 20;

export const idRegex = /^[0-9A-F]{24}$/i;

export const colorTailwindMap: { [key in ColorEnum]: string } = {
	BLUE: colors.blue[500],
	GREEN: colors.green[500],
	RED: colors.red[500],
	WHITE: colors.slate[500],
	YELLOW: colors.yellow[400],
};
