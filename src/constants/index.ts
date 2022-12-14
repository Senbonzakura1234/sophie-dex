import type { PageName } from '@root/types/common';

export const APP_NAME = 'Sophie Dex';
export const APP_DESCRIPTION = 'Atelier Sophie: The Alchemist of the Mysterious Book - Wiki';
export const APP_KEYWORD = 'Atelier, Wiki, Sophie, Mysterious';

export const defaultLimit = 20;

export const idRegex = /^[0-9A-F]{24}$/i;

export const pageNameList = ['Effect', 'Item', 'Trait'] as const satisfies Readonly<PageName[]>;
