import type { Maybe } from '@trpc/server';
import type { DefaultErrorData } from '@trpc/server/dist/error/formatter';
import type { ReactNode, RefObject, SVGProps } from 'react';

import type { MaybeData } from '.';
import type { CommonRecord } from '../model';
import type { ModuleIdEnum } from './zod';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject?: RefObject<E> };
export type ModuleIdProps = { moduleId: ModuleIdEnum };
export type IsDataReadyProps = { isDataReady: boolean };
export type PageControlProps = { page: number; totalPage: number; totalRecord: number };

export type RecordProps<TRecord extends CommonRecord> = MaybeData<TRecord>;
export type DefaultLayoutProps = ModuleIdProps;
export type ErrorResultProps = {
	isError: boolean;
	errorData: Maybe<DefaultErrorData>;
	errorMessage: string | undefined;
};

export type IconProps = SVGProps<SVGSVGElement>;
export type SharedModalProps = { isShow?: boolean; onClose?: () => void };
