import type { COLOR } from '@prisma/client';
import { getFramerInViewFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { useMemo } from 'react';
import { RecordPlaceholder } from '../SubComponent';

type RecordWrapperProps<TData = unknown> = ClassNameProps & {
	color?: COLOR;
	children?: RenderFunction<TData>;
} & MaybeData<TData>;

function RecordWrapper<TRecord extends { id: string; name: string }>({
	children,
	className,
	color,
	isDataReady,
	data,
}: RecordWrapperProps<TRecord>) {
	const renderChild = useMemo(() => {
		return isDataReady && children ? children(data) : null;
	}, [isDataReady, data, children]);

	return (
		<LazyMotion features={domAnimation} strict>
			<motion.article
				{...getFramerInViewFadeUp()}
				className={clsx(
					{
						'shadow-primary to-base-100': !color,
						'to-blue-500 shadow-blue-500': color === 'BLUE',
						'to-green-500 shadow-green-500': color === 'GREEN',
						'to-red-500 shadow-red-500': color === 'RED',
						'to-slate-500 shadow-slate-500': color === 'WHITE',
						'to-yellow-400 shadow-yellow-400': color === 'YELLOW',
					},
					className,
					'card from-base-100 via-base-100 relative grid w-full grow-0 overflow-hidden bg-gradient-to-r shadow-lg',
				)}
			>
				<AnimationWrapper
					show={isDataReady}
					options={getFramerInViewFadeUp()}
					className='card-body flex flex-col gap-3'
					placeholder={<RecordPlaceholder />}
				>
					{renderChild}
				</AnimationWrapper>
			</motion.article>
		</LazyMotion>
	);
}

export default RecordWrapper;
