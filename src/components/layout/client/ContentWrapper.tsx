'use client';

import { useModuleId } from '@root/hooks/useModuleId';
import type { ChildrenProps } from '@root/types/common/props';

type ContentWrapperProps = ChildrenProps & { type: 'detail' | 'list' };

export default function ContentWrapper({ children, type }: ContentWrapperProps) {
	const moduleId = useModuleId();

	return (
		<section
			className={`container mx-auto mb-auto grid grid-cols-1 gap-6 max-2xl:px-4 ${
				type === 'list' ? '' : 'mt-auto'
			} ${moduleId === 'item' && type === 'list' ? 'xl:grid-cols-2' : ''} ${
				moduleId === 'item' && type === 'detail' ? 'lg:max-w-[900px]' : ''
			}
			${moduleId !== 'item' && type === 'list' ? 'lg:grid-cols-2' : ''}
			${moduleId !== 'item' && type === 'detail' ? 'lg:max-w-[700px]' : ''}
			`}
		>
			{children}
		</section>
	);
}
