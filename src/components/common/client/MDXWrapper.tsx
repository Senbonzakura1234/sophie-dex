'use client';

import type { MDXRendererProps } from '@root/components/dynamic/MDXRenderer';
import type { ClassNameProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const MDXRenderer = dynamic(() => import('@root/components/dynamic/MDXRenderer'), { ssr: false });

type MDXWrapperProps = MDXRendererProps & ClassNameProps;

export default function MDXWrapper({ body, className }: MDXWrapperProps) {
	return (
		<div className={`prose max-w-none ${className}`}>
			<MDXRenderer body={body} />
		</div>
	);
}
