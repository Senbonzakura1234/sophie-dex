import type { ReactNode, RefObject, SVGProps } from 'react';
import type { createDocument } from 'zod-openapi';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject?: RefObject<E> };
export type IconProps = SVGProps<SVGSVGElement>;
export type SwaggerClientProps = { spec: ReturnType<typeof createDocument> };
