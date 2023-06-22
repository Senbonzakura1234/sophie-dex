import sophieLogo from '@root/assets/images/sophie-logo.webp';
import topBg from '@root/assets/images/top.webp';
import type { ModuleIdProps } from '@root/types/common/props';
import { getBaseUrl } from '@root/utils/common';
import Image from 'next/image';

import dynamic from 'next/dynamic';

const Breadcrumb = dynamic(() => import('@root/components/Breadcrumb'));

type PageTitleProps = Partial<ModuleIdProps>;

export default function PageTitle({ moduleId }: PageTitleProps) {
	const isHomePage = typeof moduleId === 'undefined';

	return (
		<section className={`relative w-full overflow-hidden shadow-inner ${isHomePage ? 'h-full' : 'min-h-[300px]'}`}>
			<Image
				className='object-cover'
				fill
				placeholder='blur'
				src={topBg}
				alt='sophie'
				sizes={isHomePage ? '100vw' : '50vw'}
				data-url={`${getBaseUrl(true)}/assets/images/top.jpg`}
				priority={!isHomePage}
			/>

			<div className='absolute inset-0 z-10 bg-slate-700/30' />

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-4 px-4 pt-5 xl:gap-9 2xl:gap-6'>
				<div className='text-shadow-dark w-full text-center font-serif text-5xl font-bold text-secondary xl:text-6xl 2xl:text-7xl'>
					{isHomePage ? (
						<Image
							className='mx-auto w-[700px] max-w-full'
							src={sophieLogo}
							alt={moduleId ?? 'home'}
							priority={isHomePage}
							width={700}
							data-url={`${getBaseUrl(true)}/assets/images/sophie-logo.png`}
						/>
					) : (
						<div className='capitalize tracking-widest text-slate-50'>{moduleId}</div>
					)}
				</div>
				<Breadcrumb isShowAuthor={isHomePage} />
			</div>
		</section>
	);
}
