import sophieLogo from '@root/assets/pictures/sophie-logo.png';
import topBg from '@root/assets/pictures/top.jpg';
import type { PageTitleProps } from '@root/types/common';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { FC } from 'react';

const Breadcrumb = dynamic(() => import('../Breadcrumb'), {
	ssr: false,
});

const SearchInput = dynamic(() => import('./SearchInput'), {
	ssr: false,
});

const PageTitle: FC<PageTitleProps> = ({ pageName }) => {
	return (
		<section
			className={clsx(
				{
					'h-1/3': pageName !== 'Atelier Dex',
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
				priority={false}
			/>
			<div className='bg-primary/50 absolute inset-0 z-10'></div>

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 2xl:gap-6'>
				<div className='text-secondary text-shadow-dark w-full text-center font-serif text-5xl font-bold 2xl:text-7xl'>
					{pageName === 'Atelier Dex' ? (
						<Image className='mx-auto' src={sophieLogo} alt={pageName} priority={true} sizes='30vw' />
					) : (
						<>{pageName}</>
					)}
				</div>
				{pageName !== 'Atelier Dex' ? <SearchInput /> : null}
				<Breadcrumb />
			</div>
		</section>
	);
};

export default PageTitle;
