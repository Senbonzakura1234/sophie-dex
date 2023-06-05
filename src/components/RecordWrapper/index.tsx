import { getFramerInViewFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import { RecordPlaceholder } from '@root/components/RecordPlaceholder';
import { colorFilterMap } from '@root/constants';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ClassNameProps, PageNameProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
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
	data,
	pageName,
}: RecordWrapperProps<TRecord>) {
	const { securedIdQuery, pathname } = useIdQuery();

	const renderChild = useMemo(() => (isDataReady && children ? children(data) : null), [isDataReady, children, data]);

	return (
		<LazyMotion features={domAnimation} strict>
			<motion.article
				{...getFramerInViewFadeUp()}
				className={`card relative grid w-full grow-0 overflow-hidden shadow-lg ${
					!!color
						? 'bg-gradient-to-r from-base-100 via-base-100 to-current shadow-current'
						: 'bg-base-100 shadow-primary'
				} ${className}`}
				style={color ? { color: colorFilterMap[color].primary } : undefined}
			>
				<AnimationWrapper
					show={isDataReady}
					options={getFramerInViewFadeUp()}
					className='card-body flex flex-col gap-3 text-base-content'
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
