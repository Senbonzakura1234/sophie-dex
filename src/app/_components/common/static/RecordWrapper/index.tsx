import { colorTWClassMap } from '@root/constants/common';
import type { CommonRecord } from '@root/server/postgresql/schema';
import type { ClassNameProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod/generic';
import { cn } from '@root/utils/common';
import type { ReactNode } from 'react';
import RecordHead from './RecordHead';

type Props<TRecord extends CommonRecord> = Readonly<
	ClassNameProps & {
		colors?: [ColorEnum | undefined, ColorEnum | undefined];
		children?: (record: TRecord) => ReactNode;
		currentId?: string;
		data: TRecord;
		search?: string;
	}
>;

export default function RecordWrapper<TRecord extends CommonRecord>({
	children,
	className,
	colors: [firstColor, lastColor] = [undefined, undefined],
	currentId,
	data,
	search
}: Props<TRecord>) {
	const renderChild = children ? children(data) : null;

	return (
		<article className={cn('card relative my-auto h-full p-1.5 2xl:max-h-96', className)}>
			<div
				className={cn(
					'absolute inset-y-0 left-0 w-1/3 rounded-[inherit] shadow-lg',
					typeof firstColor !== 'undefined'
						? `bg-current shadow-base-content ${colorTWClassMap[firstColor].background}`
						: 'bg-gradient-to-br from-accent to-primary shadow-primary'
				)}
			/>

			<div
				className={cn(
					'absolute inset-y-0 right-0 w-1/3 rounded-[inherit] shadow-lg',
					typeof lastColor !== 'undefined'
						? `bg-current shadow-base-content ${colorTWClassMap[lastColor].background}`
						: 'bg-gradient-to-tl from-accent to-primary shadow-primary'
				)}
			/>

			<div className='card-body z-10 gap-3 rounded-[inherit] bg-base-100 p-[1.625rem] text-base-content shadow-inner shadow-base-content'>
				<RecordHead id={data.id} name={data.name} currentId={currentId} search={search} moduleId={data.moduleId} />

				{renderChild}
			</div>
		</article>
	);
}
