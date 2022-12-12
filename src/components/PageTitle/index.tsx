import sophieBg from '@root/assets/pictures/sophie-bg.jpg';
import sophieLogo from '@root/assets/pictures/sophie-logo.png';
import type { PageName } from '@root/types/common';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { FC } from 'react';

const Breadcrumb = dynamic(() => import('./Breadcrumb'), {
	ssr: false,
});

const SearchInput = dynamic(() => import('./SearchInput'), {
	ssr: false,
});

const PageTitle: FC<{ pageName: PageName }> = ({ pageName }) => {
	return (
		<section
			className={clsx(
				{
					'h-1/3': pageName !== 'Atelier Dex',
					'h-full': pageName === 'Atelier Dex',
				},
				'relative w-full overflow-hidden',
			)}
		>
			<Image
				className='object-cover'
				fill
				placeholder='blur'
				src={sophieBg}
				alt='sophie'
				sizes='80vw'
				priority={false}
			/>
			<div className='bg-primary/75 absolute inset-0 z-10'></div>

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 xl:gap-6'>
				<div className='text-secondary w-full text-center text-5xl font-extrabold decoration-black decoration-2 xl:text-7xl'>
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
