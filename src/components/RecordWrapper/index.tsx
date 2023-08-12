import { colorFilterTWClassMap } from '@root/constants';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import type { CommonRecord } from '@root/types/model';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const RecordHead = dynamic(() => import('./RecordHead'), {
	loading: () => <div className='h-7 w-40 max-w-full animate-pulse rounded' />,
});

type RecordWrapperProps<TRecord extends CommonRecord> = ClassNameProps & {
	colors?: [ColorEnum | undefined, ColorEnum | undefined];
	children?: RenderFunction<TRecord>;
	currentId?: string;
} & MaybeData<TRecord>;

export default function RecordWrapper<TRecord extends CommonRecord>({
	children,
	className,
	colors: [firstColor, lastColor] = [undefined, undefined],
	currentId,
	data,
	isDataReady,
}: RecordWrapperProps<TRecord>) {
	const renderChild = useMemo(() => (isDataReady && children ? children(data) : null), [isDataReady, children, data]);

	return (
		<article className={`card relative mb-auto h-full w-full p-1.5 2xl:max-h-96 ${className}`}>
			<div
				className={`absolute inset-y-0 left-0 w-1/3 rounded-2xl shadow-lg ${
					!!firstColor
						? `bg-current shadow-base-content ${colorFilterTWClassMap[firstColor]}`
						: 'bg-gradient-to-r from-accent to-primary shadow-primary'
				}`}
			></div>

			<div
				className={`absolute inset-y-0 right-0 w-1/3 rounded-2xl shadow-lg ${
					!!lastColor
						? `bg-current shadow-base-content ${colorFilterTWClassMap[lastColor]}`
						: 'bg-gradient-to-l from-accent to-primary shadow-primary'
				}`}
			></div>

			<div
				className={`card-body z-10 flex flex-col gap-3 rounded-xl bg-base-100 p-[1.625rem] text-base-content shadow-inner shadow-base-content ${
					!isDataReady ? 'min-h-[270px]' : ''
				}`}
			>
				{isDataReady ? <RecordHead id={data.id} name={data.name} currentId={currentId} /> : null}

				{renderChild}
			</div>
		</article>
	);
}
