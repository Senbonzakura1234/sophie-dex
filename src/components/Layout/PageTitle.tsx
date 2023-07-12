import sophieLogo from '@root/assets/images/sophie-logo.webp';
import topBg from '@root/assets/images/top.webp';
import type { ModuleIdProps } from '@root/types/common/props';
import { getBaseUrl } from '@root/utils/common';
import Image from 'next/image';

import dynamic from 'next/dynamic';

const Breadcrumb = dynamic(() => import('./Breadcrumb'));

type PageTitleProps = Partial<ModuleIdProps>;

export default function PageTitle({ moduleId }: PageTitleProps) {
	const isHomePage = typeof moduleId === 'undefined';

	return (
		<section className={`relative w-full overflow-hidden shadow-inner ${isHomePage ? 'h-full' : 'min-h-[300px]'}`}>
			<Image
				alt='sophie'
				className='object-cover'
				data-url={`${getBaseUrl(true)}/assets/images/top.jpg`}
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				src={topBg}
				placeholder='blur'
				priority={!isHomePage}
			/>

			<div className='absolute inset-0 z-10 bg-gradient-to-r from-primary/20 to-slate-700/20' />

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-4 px-4 pt-5 xl:gap-9 2xl:gap-6'>
				<div className='w-full text-center'>
					{isHomePage ? (
						<Image
							className='mx-auto w-[700px] max-w-full'
							src={sophieLogo}
							alt='home'
							priority={isHomePage}
							sizes='(max-width: 768px) 70vw, (max-width: 1200px) 400px, 600px'
							data-url={`${getBaseUrl(true)}/assets/images/sophie-logo.png`}
						/>
					) : (
						<div className='font-roboto text-5xl font-bold capitalize tracking-widest text-slate-50 text-shadow-dark xl:text-6xl 2xl:text-7xl'>
							{moduleId}
						</div>
					)}
				</div>
				<Breadcrumb isShowAuthor={isHomePage} moduleId={moduleId} />
			</div>
		</section>
	);
}
