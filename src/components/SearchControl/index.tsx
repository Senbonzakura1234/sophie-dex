import { getFramerFadeUp, getFramerInViewFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import type { IsDataReadyProps } from '@root/types/common/props';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';

import SearchInput from './SearchInput';

type SearchControlProps = IsDataReadyProps;

export default function SearchControl({ isDataReady }: SearchControlProps) {
	return (
		<section className='container mx-auto max-2xl:px-4'>
			<LazyMotion features={domAnimation} strict>
				<motion.div
					{...getFramerInViewFadeUp()}
					className='card ml-auto overflow-hidden rounded-full bg-base-100 shadow-lg shadow-primary md:w-1/4 md:min-w-[300px]'
				>
					<AnimationWrapper
						show={isDataReady}
						className='relative flex w-full flex-row gap-3 px-5 py-[9px]'
						options={getFramerFadeUp(0, 10)}
						placeholder={
							<motion.div {...getFramerFadeUp(0, 10)} className='flex h-[50px] w-full animate-pulse' />
						}
					>
						<SearchInput />
					</AnimationWrapper>
				</motion.div>
			</LazyMotion>
		</section>
	);
}
