import bottomBg from '@root/assets/images/bottom.webp';
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
	ssr: false,
});

type PageFooterProps = { isDetailPage?: boolean };

export default function PageFooter({ isDetailPage }: PageFooterProps) {
	return (
		<section className='relative min-h-[18rem] w-full overflow-hidden shadow-inner'>
			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 2xl:gap-6'>
				{isDetailPage ? null : <Breadcrumb />}

				<AppInformation />
			</div>

			<div className='absolute inset-0 z-10 bg-gradient-to-br from-accent/10 to-primary/10' />

			<Image
				alt='sophie'
				className='object-cover'
				data-url={`${getBaseUrl(true)}/assets/images/bottom.jpg`}
				fill
				placeholder='blur'
				priority={isDetailPage}
				quality={50}
				sizes='(max-width: 640px) 70vw, (max-width: 1024px) 65vw, 55vw'
				src={bottomBg}
			/>
		</section>
	);
}
