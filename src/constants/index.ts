import type { COLOR } from '@prisma/client';
import type { PageName } from '@root/types/common';
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

export const pageNameList = ['Effect', 'Item', 'Trait'] as const satisfies Readonly<PageName[]>;

export const colorTailwindMap: { [key in COLOR]: string } = {
	BLUE: colors.blue[500],
	GREEN: colors.green[500],
	RED: colors.red[500],
	WHITE: colors.slate[500],
	YELLOW: colors.yellow[400],
};

export const specialSeparator = '<clcaiqscn000008jwhfw85ia7>';
export const specialPrefix = '<clcbr2xjm000008jngnabd04t>';
export const hyperLinkSeparator = '<clch0v6nl000008kx92vp1sw7>';

export const prefixItemLinkSearch = 'HyperLink:Item:Search:' as const;
export const prefixItemLinkRecord = 'HyperLink:Item:Record:' as const;
export const prefixEffectLinkRecord = 'HyperLink:Effect:Record:' as const;
export const prefixTraitLinkRecord = 'HyperLink:Trait:Record:' as const;
export const prefixMisc = 'Misc:' as const;
