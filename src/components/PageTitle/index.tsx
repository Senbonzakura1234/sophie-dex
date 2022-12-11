import sophieBg from '@root/assets/pictures/sophie-bg.jpg';
import sophieLogo from '@root/assets/pictures/sophie-logo.png';
import type { PageName } from '@root/types/common';
import clsx from 'clsx';
import Image from 'next/image';
import type { FC } from 'react';

import Breadcrumb from './Breadcrumb';
import SearchInput from './SearchInput';

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
			<Image className='object-cover' fill placeholder='blur' src={sophieBg} alt='sophie' sizes='100vw' />
			<div className='bg-primary/75 absolute inset-0 z-10'></div>

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 xl:gap-6'>
				<div className='text-secondary w-full text-center text-5xl font-extrabold decoration-black decoration-2 xl:text-7xl'>
					{pageName === 'Atelier Dex' ? (
						<Image className='mx-auto' src={sophieLogo} alt={pageName} priority={false} />
					) : (
						pageName
					)}
				</div>
				{pageName !== 'Atelier Dex' && <SearchInput />}
				<Breadcrumb />
			</div>
		</section>
	);
};

export default PageTitle;
