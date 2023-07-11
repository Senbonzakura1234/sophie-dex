import { colorFilterMap } from '@root/constants';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ClassNameProps, ModuleIdProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import type { CommonRecord } from '@root/types/model';
import { useMemo } from 'react';

import dynamic from 'next/dynamic';

const RecordHead = dynamic(() => import('./RecordHead'), {
	loading: () => <div className='h-7 w-40 max-w-full animate-pulse rounded' />,
});

type RecordWrapperProps<TRecord extends CommonRecord> = ClassNameProps &
	ModuleIdProps & {
		color?: ColorEnum;
		children?: RenderFunction<TRecord>;
	} & MaybeData<TRecord>;

export default function RecordWrapper<TRecord extends CommonRecord>({
	children,
	className,
	color,
	isDataReady,
	moduleId,
	data,
}: RecordWrapperProps<TRecord>) {
	const renderChild = useMemo(() => (isDataReady && children ? children(data) : null), [isDataReady, children, data]);

	return (
		<article
			className={`card relative mb-auto h-full w-full overflow-hidden p-1.5 shadow-lg 2xl:max-h-96 ${
				!!color
					? 'bg-gradient-to-r from-current to-current shadow-base-content'
					: 'bg-gradient-to-r from-accent to-primary shadow-primary'
			} ${className}`}
			style={color ? { color: colorFilterMap[color].primary } : undefined}
		>
			<div
				className={`card-body flex flex-col gap-3 rounded-xl bg-base-100 p-[1.625rem] text-base-content shadow-inner shadow-base-content ${
					!isDataReady ? 'min-h-[270px]' : ''
				}`}
			>
				{isDataReady ? <RecordHead id={data.id} name={data.name} moduleId={moduleId} /> : null}

				{renderChild}
			</div>
		</article>
	);
}
