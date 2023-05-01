import type { COLOR } from '@prisma/client';
import { getFramerInViewFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import { RecordPlaceholder } from '@root/components/SubComponent';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ClassNameProps, PageNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { useMemo } from 'react';
import RecordHead from './RecordHead';

type RecordWrapperProps<TRecord extends { id: string; name: string }> = ClassNameProps &
	PageNameProps & {
		color?: COLOR;
		children?: RenderFunction<TRecord>;
	} & MaybeData<TRecord>;

function RecordWrapper<TRecord extends { id: string; name: string }>({
	children,
	className,
	color,
	isDataReady,
	data,
	pageName,
}: RecordWrapperProps<TRecord>) {
	const { securedIdQuery, pathname } = useIdQuery();

	const renderChild = useMemo(() => (isDataReady && children ? children(data) : null), [isDataReady, children, data]);

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
					options={getFramerInViewFadeUp(0, 50, 3)}
					className='card-body flex flex-col gap-3'
					placeholder={<RecordPlaceholder />}
				>
					{isDataReady ? (
						<RecordHead
							id={data.id}
							isCurrentRecord={securedIdQuery.id === data.id}
							name={data.name}
							pathname={pathname}
							pageName={pageName}
						/>
					) : null}

					{renderChild}
				</AnimationWrapper>
			</motion.article>
		</LazyMotion>
	);
}

export default RecordWrapper;
