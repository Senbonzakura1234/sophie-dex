import { colorFilterMap } from '@root/constants';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import { useMemo } from 'react';

import dynamic from 'next/dynamic';

const RecordHead = dynamic(() => import('./RecordHead'), {
	loading: () => <div className='h-7 w-40 max-w-full animate-pulse rounded' />,
});

type RecordWrapperProps<TRecord extends { id: string; name: string }> = ClassNameProps & {
	color?: ColorEnum;
	children?: RenderFunction<TRecord>;
} & MaybeData<TRecord>;

export default function RecordWrapper<TRecord extends { id: string; name: string }>({
	children,
	className,
	color,
	isDataReady,
	data,
}: RecordWrapperProps<TRecord>) {
	const { securedIdQuery, pathname } = useIdQuery();

	const renderChild = useMemo(() => (isDataReady && children ? children(data) : null), [isDataReady, children, data]);

	return (
		<article
			className={`card relative mb-auto h-full 2xl:max-h-80 w-full overflow-hidden shadow-lg ${
				!!color
					? 'bg-gradient-to-r from-base-100 via-base-100 to-current shadow-current'
					: 'bg-base-100 shadow-primary'
			} ${className}`}
			style={color ? { color: colorFilterMap[color].primary } : undefined}
		>
			<div className={`card-body flex flex-col gap-3 text-base-content ${!isDataReady && 'min-h-[270px]'}`}>
				{isDataReady ? (
					<RecordHead
						id={data.id}
						isCurrentRecord={securedIdQuery.id === data.id}
						name={data.name}
						pathname={pathname}
					/>
				) : null}

				{renderChild}
			</div>
		</article>
	);
}
