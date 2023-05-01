import type { Maybe } from '@trpc/server';
import type { DefaultErrorData } from '@trpc/server/dist/error/formatter';
import type { ReactNode, RefObject } from 'react';

import type { MaybeData, PageName } from '.';
import type { CommonRecord } from '../model';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject?: RefObject<E> };
export type PageNameProps = { pageName: PageName };
export type IsDataReadyProps = { isDataReady: boolean };
export type IsErrorProps = { isError: boolean };
export type IsBottomFilterProps = { isBottomFilter?: boolean };
export type PageControlProps = {
	page: number;
	totalPage: number;
	totalRecord: number;
};

export type RecordProps<TRecord extends CommonRecord> = MaybeData<TRecord>;
export type DefaultLayoutProps = PageNameProps;
export type ErrorResultProps = {
	isError: boolean;
	errorData: Maybe<DefaultErrorData>;
	errorMessage: string | undefined;
};
