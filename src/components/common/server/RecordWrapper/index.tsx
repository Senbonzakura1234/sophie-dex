import { colorTWClassMap } from '@root/constants';
import type { RenderFunction } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import type { CommonRecord } from '@root/types/model';
import { Suspense, useMemo } from 'react';
import RecordHead from './RecordHead';

type RecordWrapperProps<TRecord extends CommonRecord> = ClassNameProps & {
	colors?: [ColorEnum | undefined, ColorEnum | undefined];
	children?: RenderFunction<TRecord>;
	currentId: string | undefined;
	data: TRecord;
};

export default function RecordWrapper<TRecord extends CommonRecord>({
	children,
	className,
	colors: [firstColor, lastColor] = [undefined, undefined],
	currentId,
	data,
}: RecordWrapperProps<TRecord>) {
	const renderChild = useMemo(() => (children ? children(data) : null), [children, data]);

	return (
		<article className={`card relative mb-auto h-full w-full p-1.5 2xl:max-h-96 ${className}`}>
			<div
				className={`absolute inset-y-0 left-0 w-1/3 rounded-[inherit] shadow-lg ${
					!!firstColor
						? `bg-current shadow-base-content ${colorTWClassMap[firstColor]}`
						: 'bg-gradient-to-r from-accent to-primary shadow-primary'
				}`}
			/>

			<div
				className={`absolute inset-y-0 right-0 w-1/3 rounded-[inherit] shadow-lg ${
					!!lastColor
						? `bg-current shadow-base-content ${colorTWClassMap[lastColor]}`
						: 'bg-gradient-to-l from-accent to-primary shadow-primary'
				}`}
			/>

			<div className='card-body z-10 gap-3 rounded-[inherit] bg-base-100 p-[1.625rem] text-base-content shadow-inner shadow-base-content'>
				<Suspense fallback={<div className='h-7 w-40 max-w-full grow-0 animate-pulse rounded' />}>
					<RecordHead id={data.id} name={data.name} currentId={currentId} />
				</Suspense>

				{renderChild}
			</div>
		</article>
	);
}
