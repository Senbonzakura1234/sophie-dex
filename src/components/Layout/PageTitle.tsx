import sophieLogo from '@root/assets/images/sophie-logo.webp';
import topBg from '@root/assets/images/top.webp';
import { useModuleId } from '@root/hooks/useModuleId';
import { getBaseUrl } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Breadcrumb = dynamic(() => import('./Breadcrumb'), {
	loading: () => (
		<div className='flex w-full'>
			<nav className='card mx-auto h-10 w-11/12 max-w-md bg-base-100 px-2 py-1 shadow-lg shadow-primary 2xl:w-2/5 2xl:max-w-none' />
		</div>
	),
});

export default function PageTitle() {
	const moduleId = useModuleId();
	const isHomePage = typeof moduleId === 'undefined';

	return (
		<section className={`relative w-full overflow-hidden shadow-inner ${isHomePage ? 'h-full' : 'min-h-[300px]'}`}>
			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-4 px-4 pt-5 xl:gap-9 2xl:gap-6'>
				<div className='w-full text-center'>
					{isHomePage ? (
						<Image
							alt='home'
							className='mx-auto w-[700px] max-w-full'
							data-url={`${getBaseUrl(true)}/assets/images/sophie-logo.png`}
							priority={true}
							quality={70}
							sizes='(max-width: 640px) 70vw, 400px'
							src={sophieLogo}
						/>
					) : (
						<div className='font-roboto text-5xl font-bold capitalize tracking-widest text-slate-50 text-shadow-dark xl:text-6xl 2xl:text-7xl'>
							{moduleId}
						</div>
					)}
				</div>
				<Breadcrumb isShowAuthor={isHomePage} />
			</div>

			<div className='absolute inset-0 z-10 bg-gradient-to-r from-primary/20 to-slate-700/20' />

			<Image
				alt='sophie'
				className='object-cover'
				data-url={`${getBaseUrl(true)}/assets/images/top.jpg`}
				fill
				placeholder='blur'
				priority={true}
				quality={70}
				sizes='(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw'
				src={topBg}
			/>
		</section>
	);
}
