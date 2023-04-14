import type { COLOR } from '@prisma/client';
import { getFramerInViewFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import type { ChildrenProps, ClassNameProps, IsSuccessProps } from '@root/types/common/props';
import clsx from 'clsx';
import { domAnimation, LazyMotion, m as motion } from 'framer-motion';
import type { FC } from 'react';

type RecordWrapperProps = ChildrenProps & ClassNameProps & { color?: COLOR } & IsSuccessProps;

const RecordWrapper: FC<RecordWrapperProps> = ({ children, className, color, isSuccess }) => (
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
				'card from-base-100 via-base-100 relative grid w-full grow-0 bg-gradient-to-r shadow-lg',
			)}
		>
			<AnimationWrapper
				show={isSuccess}
				options={getFramerInViewFadeUp()}
				className='card-body flex flex-col gap-3'
				placeholder={<motion.div {...getFramerInViewFadeUp()} className='card-body flex h-60 animate-pulse' />}
			>
				{children}
			</AnimationWrapper>
		</motion.article>
	</LazyMotion>
);

export default RecordWrapper;
