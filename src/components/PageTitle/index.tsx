import { getFramerInViewFadeUp } from '@root/animations';
import sophieLogo from '@root/assets/images/sophie-logo.webp';
import topBg from '@root/assets/images/top.webp';
import Breadcrumb from '@root/components/Breadcrumb';
import type { PageNameProps } from '@root/types/common/props';
import { getBaseUrl } from '@root/utils/client';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import Image from 'next/image';

type PageTitleProps = PageNameProps;

export default function PageTitle({ pageName }: PageTitleProps) {
	return (
		<section
			className={`relative w-full overflow-hidden shadow-inner ${
				pageName === 'home' ? 'h-full' : 'h-1/3 min-h-[300px]'
			}`}
		>
			<Image
				className='object-cover'
				fill
				placeholder='blur'
				src={topBg}
				alt='sophie'
				sizes='50vh'
				priority={pageName !== 'home'}
				data-url={`${getBaseUrl(true)}/assets/images/top.jpg`}
			/>

			<div className='absolute inset-0 z-10 bg-slate-700/30' />

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-4 px-4 pt-5 xl:gap-9 2xl:gap-6'>
				<LazyMotion features={domAnimation} strict>
					<motion.div
						{...getFramerInViewFadeUp()}
						className='text-shadow-dark w-full text-center font-serif text-5xl font-bold text-secondary xl:text-6xl 2xl:text-7xl'
					>
						<Image
							className={`mx-auto ${pageName !== 'home' && 'hidden'}`}
							src={sophieLogo}
							alt={pageName}
							priority={pageName === 'home'}
							sizes='50vw'
							data-url={`${getBaseUrl(true)}/assets/images/sophie-logo.png`}
						/>

						<div className={`capitalize tracking-widest text-slate-50 ${pageName === 'home' && 'hidden'}`}>
							{pageName}
						</div>
					</motion.div>
				</LazyMotion>
				<Breadcrumb isShowAuthor={pageName === 'home'} />
			</div>
		</section>
	);
}
