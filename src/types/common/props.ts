import type { ReactNode, RefObject, SVGProps } from 'react';

export type ClassNameProps = { className?: string };
export type ClassNamesProps<T extends string = 'wrapper' | 'content'> = {
	classNames?: { [K in T]?: string | undefined };
};
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject?: RefObject<E> };
export type IconProps = SVGProps<SVGSVGElement>;
