import { getFramerFadeUp, getFramerInViewFadeUp } from '@root/animations';
import type { IsSuccessProps } from '@root/types/common/props';
import { domAnimation, LazyMotion, m as motion } from 'framer-motion';
import type { FC } from 'react';

import AnimationWrapper from '../AnimationWrapper';
import SearchInput from './SearchInput';

type SearchControlProps = IsSuccessProps;

const SearchControl: FC<SearchControlProps> = ({ isSuccess }) => (
	<section className='container mx-auto max-2xl:px-4'>
		<LazyMotion features={domAnimation} strict>
			<motion.div
				{...getFramerInViewFadeUp()}
				className='card bg-base-100 shadow-primary ml-auto overflow-hidden rounded-full shadow-lg md:w-1/4 md:min-w-[300px]'
			>
				<AnimationWrapper
					show={isSuccess}
					className='relative flex w-full flex-row gap-3 py-[9px] px-5'
					options={getFramerFadeUp(0, 10)}
					placeholder={<motion.div {...getFramerFadeUp(0, 10)} className='flex h-[50px] w-full animate-pulse' />}
				>
					<SearchInput />
				</AnimationWrapper>
			</motion.div>
		</LazyMotion>
	</section>
);

export default SearchControl;
