import sophieLogo from '@root/app/images/sophie-logo.webp';
import topBg from '@root/app/images/top.webp';
import { getBaseUrl } from '@root/utils/common';
import Image from 'next/image';
import { Suspense } from 'react';

import AppInformation from './AppInformation';
import Breadcrumb from './Breadcrumb';
import PageTitle from './PageTitle';

type PageTitleProps = { bannerType: 'full' | 'top' | 'bottom' };

export default function PageBanner({ bannerType }: PageTitleProps) {
	return (
		<section
			className={`relative w-full select-none overflow-hidden ${bannerType === 'full' ? 'h-full' : 'min-h-[18rem]'}`}
		>
			<div className='absolute inset-0 z-20 mx-auto flex w-full flex-wrap place-content-center gap-4 px-4 pt-5 xl:gap-5 2xl:gap-6'>
				<div className='w-full text-center'>
					{bannerType === 'full' ? (
						<Image
							alt='home'
							className='mx-auto w-[600px] max-sm:max-w-[80vw]'
							data-url={`${getBaseUrl(true)}/assets/images/sophie-logo.png`}
							priority
							sizes='(max-width: 640px) 60vw, 600px'
							src={sophieLogo}
						/>
					) : null}

					{bannerType === 'top' ? (
						<Suspense fallback={<div className='h-12 xl:h-[3.75rem] 2xl:h-[4.5rem]' />}>
							<PageTitle />
						</Suspense>
					) : null}
				</div>

				<div className='flex w-full'>
					<nav className='card mx-auto w-full max-w-md bg-base-100 px-2 py-1 shadow-lg shadow-primary 2xl:max-w-2xl'>
						<div className='breadcrumbs mx-auto text-xs 2xl:text-base'>
							<ul className='gap-1 font-bold'>
								<Breadcrumb />
							</ul>
						</div>
					</nav>
				</div>

				{bannerType === 'top' ? null : <AppInformation />}
			</div>

			{bannerType === 'top' ? (
				<div className='absolute inset-0 z-10 bg-gradient-to-b from-primary/10 via-primary/30 to-base-200' />
			) : null}

			{bannerType === 'bottom' ? (
				<div className='absolute inset-0 z-10 bg-gradient-to-b from-base-200 via-primary/10 to-primary/30' />
			) : null}

			{bannerType === 'top' ? (
				<Image
					alt='sophie'
					className='object-cover'
					data-url={`${getBaseUrl(true)}/assets/images/top.jpg`}
					fill
					placeholder='blur'
					priority
					sizes='(max-width: 640px) 80vh, (max-width: 1024px) 60vw, 50vw'
					src={topBg}
				/>
			) : (
				<div className='background-lips absolute inset-0 text-base-200 [background-color:currentColor] [background-size:4rem]' />
			)}
		</section>
	);
}
