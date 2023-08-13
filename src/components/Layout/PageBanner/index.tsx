import sophieLogo from '@root/assets/images/sophie-logo.webp';
import topBg from '@root/assets/images/top.webp';
import { getBaseUrl } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import AppInformation from './AppInformation';

const Breadcrumb = dynamic(() => import('./Breadcrumb'), {
	loading: () => (
		<div className='flex w-full'>
			<nav className='card mx-auto h-10 w-11/12 max-w-md bg-base-100 px-2 py-1 shadow-lg shadow-primary 2xl:w-2/5 2xl:max-w-none' />
		</div>
	),
});

const PageTitle = dynamic(() => import('./PageTitle'), {
	loading: () => <div className='h-12 xl:h-[3.75rem] 2xl:h-[4.5rem]' />,
});

type PageTitleProps = {
	bannerType: 'full' | 'top' | 'bottom';
	isDetailPage?: boolean;
};

export default function PageBanner({ bannerType, isDetailPage }: PageTitleProps) {
	return (
		<section
			className={`relative w-full select-none overflow-hidden shadow-inner ${
				bannerType === 'full' ? 'h-full' : 'min-h-[18rem]'
			}`}
		>
			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-4 px-4 pt-5 xl:gap-9 2xl:gap-6'>
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

					{bannerType === 'top' ? <PageTitle /> : null}
				</div>

				{!isDetailPage || bannerType === 'top' ? <Breadcrumb /> : null}

				{bannerType === 'top' ? null : <AppInformation />}
			</div>

			<div
				className={`absolute inset-0 ${
					bannerType === 'top'
						? 'z-10 bg-gradient-to-br from-primary/20 to-slate-700/20 shadow-2xl'
						: 'background-lips text-base-300 [background-color:current-color] [background-size:4rem]'
				}`}
			/>

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
			) : null}
		</section>
	);
}
