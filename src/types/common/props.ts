import type { ReactNode, RefObject, SVGProps } from 'react';
import type { UsePullToRefreshParams } from 'use-pull-to-refresh';
import type { AlertTypeEnum, ImprovePick } from '.';

export type ClassNameProps = Readonly<{ className?: string }>;
export type ClassNamesProps<T extends string = 'wrapper' | 'content'> = Readonly<{
	classNames?: { [K in T]?: string | undefined };
}>;
export type ChildrenProps = Readonly<{ children?: ReactNode }>;
export type RefProps<E> = Readonly<{ refObject?: RefObject<E> }>;
export type IconProps = Readonly<SVGProps<SVGSVGElement>>;
export type NotificationProps = Readonly<{ message: string; type?: AlertTypeEnum; isOpen: boolean }>;
export type PageProps = Readonly<{
	params: { id: string };
	searchParams: Record<string, string | Array<string> | undefined | null>;
}>;
export type RefreshProps = Readonly<ImprovePick<UsePullToRefreshParams, 'isDisabled'>>;
