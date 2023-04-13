import type { Maybe } from '@trpc/server';
import type { DefaultErrorData } from '@trpc/server/dist/error/formatter';
import type { ReactNode, RefObject } from 'react';

import type { PageName } from '.';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject?: RefObject<E> };
export type PageNameProps = { pageName: PageName };
export type IsSuccessProps = { isSuccess: boolean };
export type IsErrorProps = { isError: boolean };
export type FetchStateProps = IsErrorProps & IsSuccessProps;
export type IsPaginateOnlyProps = { isPaginateOnly?: boolean };

export type RecordProps<T> = { record: T | undefined };
export type DefaultLayoutProps = ChildrenProps & PageNameProps;
export type ErrorResultProps = {
	isError: boolean;
	errorData: Maybe<DefaultErrorData>;
	errorMessage: string | undefined;
};
