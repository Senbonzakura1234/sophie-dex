import type { ReactNode, RefObject, SVGProps } from 'react';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject?: RefObject<E> };
export type IsDataReadyProps = { isDataReady: boolean };
export type PageControlProps = { totalPage: number; totalRecord: number };

export type IconProps = SVGProps<SVGSVGElement>;
export type SharedModalProps = { isShow?: boolean; onClose?: () => void };
