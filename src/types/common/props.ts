import type { MaybeData } from '@root/types/common';
import type { CommonRecord } from '@root/types/model';
import type { Maybe } from '@trpc/server';
import type { DefaultErrorData } from '@trpc/server/dist/error/formatter';
import type { ReactNode, RefObject, SVGProps } from 'react';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject?: RefObject<E> };
export type IsDataReadyProps = { isDataReady: boolean };
export type PageControlProps = { page: number; totalPage: number; totalRecord: number };

export type RecordProps<TRecord extends CommonRecord> = MaybeData<TRecord>;
export type ErrorResultProps = {
	isError: boolean;
	errorData: Maybe<DefaultErrorData>;
	errorMessage: string | undefined;
};

export type IconProps = SVGProps<SVGSVGElement>;
export type SharedModalProps = { isShow?: boolean; onClose?: () => void };
