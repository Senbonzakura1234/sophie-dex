import bottomBg from '@root/assets/pictures/bottom.jpg';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { FC } from 'react';

const Breadcrumb = dynamic(() => import('../Breadcrumb'), {
	ssr: false,
});

const PageFooter: FC = () => {
	return (
		<section className='2xl:h1/4 relative h-1/3 w-full overflow-hidden shadow-inner'>
			<Image
				className='object-cover'
				fill
				placeholder='blur'
				src={bottomBg}
				alt='sophie'
				sizes='100vh'
				priority={false}
			/>
			<div className='bg-primary/50 absolute inset-0 z-10'></div>

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 2xl:gap-6'>
				<Breadcrumb />
			</div>
		</section>
	);
};

export default PageFooter;
