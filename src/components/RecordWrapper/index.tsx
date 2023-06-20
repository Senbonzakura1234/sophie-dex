import { colorFilterMap } from '@root/constants';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ClassNameProps, PageNameProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import { useMemo } from 'react';

import dynamic from 'next/dynamic';

const RecordHead = dynamic(() => import('./RecordHead'), {
	loading: () => <div className='h-7 w-40 max-w-full animate-pulse rounded' />,
});

type RecordWrapperProps<TRecord extends { id: string; name: string }> = ClassNameProps &
	PageNameProps & {
		color?: ColorEnum;
		children?: RenderFunction<TRecord>;
	} & MaybeData<TRecord>;

export default function RecordWrapper<TRecord extends { id: string; name: string }>({
	children,
	className,
	color,
	isDataReady,
	pageName,
	data,
}: RecordWrapperProps<TRecord>) {
	const renderChild = useMemo(() => (isDataReady && children ? children(data) : null), [isDataReady, children, data]);

	return (
		<article
			className={`card relative mb-auto h-full w-full overflow-hidden shadow-lg 2xl:max-h-80 ${
				!!color
					? 'bg-gradient-to-r from-base-100 via-base-100 to-current shadow-current'
					: 'bg-base-100 shadow-primary'
			} ${className}`}
			style={color ? { color: colorFilterMap[color].primary } : undefined}
		>
			<div className={`card-body flex flex-col gap-3 text-base-content ${!isDataReady && 'min-h-[270px]'}`}>
				{isDataReady ? <RecordHead id={data.id} name={data.name} pageName={pageName} /> : null}

				{renderChild}
			</div>
		</article>
	);
}
