import bottomBg from '@root/assets/images/bottom.webp';
import { getBaseUrl } from '@root/utils/common';
import Image from 'next/image';

import dynamic from 'next/dynamic';

const Breadcrumb = dynamic(() => import('./Breadcrumb'), {
	loading: () => (
		<div className='flex w-full'>
			<nav className='card mx-auto h-10 w-11/12 max-w-md bg-base-100 px-2 py-1 shadow-lg shadow-primary 2xl:w-2/5 2xl:max-w-none' />
		</div>
	),
	ssr: false,
});

export default function PageFooter() {
	return (
		<section className='relative min-h-[300px] w-full overflow-hidden shadow-inner'>
			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 2xl:gap-6'>
				<Breadcrumb isShowAuthor={true} />
			</div>

			<div className='absolute inset-0 z-10 bg-gradient-to-r from-accent/10 to-primary/10' />

			<Image
				alt='sophie'
				className='object-cover'
				data-url={`${getBaseUrl(true)}/assets/images/bottom.jpg`}
				fill
				placeholder='blur'
				priority={false}
				quality={70}
				sizes='(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw'
				src={bottomBg}
			/>
		</section>
	);
}
