import bottomBg from '@root/assets/images/bottom.webp';
import { getBaseUrl } from '@root/utils/client';
import Image from 'next/image';

import dynamic from 'next/dynamic';

const Breadcrumb = dynamic(() => import('@root/components/Breadcrumb'));

export default function PageFooter() {
	return (
		<section className='relative min-h-[300px] w-full overflow-hidden shadow-inner'>
			<Image
				className='object-cover'
				fill
				placeholder='blur'
				src={bottomBg}
				alt='sophie'
				sizes='50vw'
				data-url={`${getBaseUrl(true)}/assets/images/bottom.jpg`}
			/>

			<div className='absolute inset-0 z-10 bg-slate-700/30' />

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 2xl:gap-6'>
				<Breadcrumb isShowAuthor={true} />
			</div>
		</section>
	);
}
