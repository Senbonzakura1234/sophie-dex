import type { ColorEnum, RecipeTypeEnum } from '@root/types/common/zod';
import colors from 'tailwindcss/colors';

export const APP_NAME = 'Sophie Dex';
export const APP_DESCRIPTION = 'Atelier Sophie: The Alchemist of the Mysterious Book DX - Wiki';
export const APP_KEYWORD = 'Atelier, Wiki, Sophie, Mysterious, DX';
export const APP_AUTHOR = 'Senbonzakura1234';

export const defaultLimit = 20;

export const colorTailwindMap = {
	BLUE: colors.blue[500],
	GREEN: colors.green[500],
	RED: colors.red[500],
	WHITE: colors.slate[500],
	YELLOW: colors.yellow[400],
} as const satisfies Record<ColorEnum, string>;

export const recipeTypeColorMap = {
	BEGINNER_RECIPES: colorTailwindMap['RED'],
	GROWTH_RECIPES: colorTailwindMap['BLUE'],
	HOPE_RECIPES: colorTailwindMap['GREEN'],
	DREAM_RECIPES: colorTailwindMap['YELLOW'],
	MYSTERY_RECIPES: colorTailwindMap['WHITE'],
} as const satisfies Record<RecipeTypeEnum, (typeof colorTailwindMap)[keyof typeof colorTailwindMap]>;
