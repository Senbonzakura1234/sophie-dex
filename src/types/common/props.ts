import type { Maybe } from '@trpc/server';
import type { DefaultErrorData } from '@trpc/server/dist/error/formatter';
import type { ReactNode, RefObject, SVGProps } from 'react';

import type { MaybeData, PageName } from '.';
import type { CommonRecord } from '../model';
import type { TableEnum } from './zod';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject?: RefObject<E> };
export type PageNameProps = { pageName: PageName };
export type IsDataReadyProps = { isDataReady: boolean };
export type PageControlProps = {
	page: number;
	totalPage: number;
	totalRecord: number;
};

export type RecordProps<TRecord extends CommonRecord> = MaybeData<TRecord>;
export type DefaultLayoutProps = { pageName: TableEnum };
export type ErrorResultProps = {
	isError: boolean;
	errorData: Maybe<DefaultErrorData>;
	errorMessage: string | undefined;
};

export type IconProps = SVGProps<SVGSVGElement>;
