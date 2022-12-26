import { getFramerFadeUp } from '@root/animations';
import sophieLogo from '@root/assets/images/sophie-logo.png';
import topBg from '@root/assets/images/top.jpg';
import type { PageTitleProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { FC } from 'react';

import Breadcrumb from '../Breadcrumb';

const PageTitle: FC<PageTitleProps> = ({ pageName }) => {
	return (
		<section
			className={clsx(
				{
					'h-1/3 min-h-[340px]': pageName !== 'Atelier Dex',
					'h-full': pageName === 'Atelier Dex',
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
				priority={pageName !== 'Atelier Dex'}
			/>

			<div className='absolute inset-0 z-10 bg-slate-700/30'></div>

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-9 px-4 pt-5 2xl:gap-6'>
				<motion.div
					{...getFramerFadeUp(0.1)}
					className='text-secondary text-shadow-dark w-full text-center font-serif text-5xl font-bold xl:text-6xl 2xl:text-7xl'
				>
					<Image
						className={clsx(
							{
								hidden: pageName !== 'Atelier Dex',
								block: pageName === 'Atelier Dex',
							},
							'mx-auto',
						)}
						src={sophieLogo}
						alt={pageName}
						priority={pageName === 'Atelier Dex'}
						sizes='30vw'
					/>

					<div
						className={clsx(
							{
								hidden: pageName === 'Atelier Dex',
								block: pageName !== 'Atelier Dex',
							},
							'tracking-widest text-slate-50',
						)}
					>
						{pageName}
					</div>
				</motion.div>

				<Breadcrumb isShowAuthor={pageName === 'Atelier Dex'} />
			</div>
		</section>
	);
};

export default PageTitle;
