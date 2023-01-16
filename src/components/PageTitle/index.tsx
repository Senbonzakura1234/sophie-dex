import { getFramerFadeUp } from '@root/animations';
import sophieLogo from '@root/assets/images/sophie-logo.png';
import topBg from '@root/assets/images/top.jpg';
import type { PageTitleProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';

import Breadcrumb from '../Breadcrumb';

const PageTitle: FC<PageTitleProps> = ({ pageName }) => (
	<section
		className={clsx(
			{
				'h-1/3 min-h-[300px]': pageName !== 'Home',
				'h-full': pageName === 'Home',
			},
			'relative w-full overflow-hidden shadow-inner',
		)}
	>
		<Image
			className='object-cover'
			fill
			placeholder='blur'
			src={topBg}
			alt='sophie'
			sizes='100vh'
			priority={pageName !== 'Home'}
		/>

		<div className='absolute inset-0 z-10 bg-slate-700/30' />

		<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-9 px-4 pt-5 2xl:gap-6'>
			<motion.div
				{...getFramerFadeUp(0.1)}
				className='text-secondary text-shadow-dark w-full text-center font-serif text-5xl font-bold xl:text-6xl 2xl:text-7xl'
			>
				<Image
					className={clsx(
						{
							hidden: pageName !== 'Home',
							block: pageName === 'Home',
						},
						'mx-auto',
					)}
					src={sophieLogo}
					alt={pageName}
					priority={pageName === 'Home'}
					sizes='30vw'
				/>

				<div
					className={clsx(
						{
							hidden: pageName === 'Home',
							block: pageName !== 'Home',
						},
						'tracking-widest text-slate-50',
					)}
				>
					{pageName}
				</div>
			</motion.div>

			<Breadcrumb isShowAuthor={pageName === 'Home'} />
		</div>
	</section>
);

export default PageTitle;
