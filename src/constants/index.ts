import type { COLOR, TABLE } from '@prisma/client';
import type { ListRecord } from '@root/types/model';
import colors from 'tailwindcss/colors';

export const APP_NAME = 'Sophie Dex';
export const APP_DESCRIPTION = 'Atelier Sophie: The Alchemist of the Mysterious Book - Wiki';
export const APP_KEYWORD = 'Atelier, Wiki, Sophie, Mysterious';

export const APP_AUTHOR = 'Senbonzakura1234';
export const defaultLimit = 20;
export function getDefaultListRecord<T>(): ListRecord<T> {
	return { page: 1, records: [], totalPage: 0, totalRecord: 0 };
}

export const idRegex = /^[0-9A-F]{24}$/i;

export const tableList = ['EFFECT', 'ITEM', 'TRAIT', 'RUMOR'] as const satisfies Readonly<TABLE[]>;

export const colorTailwindMap: { [key in COLOR]: string } = {
	BLUE: colors.blue[500],
	GREEN: colors.green[500],
	RED: colors.red[500],
	WHITE: colors.slate[500],
	YELLOW: colors.yellow[400],
};

export const specialSeparator = '<clcaiqscn000008jwhfw85ia7>';
export const specialPrefix = '<clcbr2xjm000008jngnabd04t>';
