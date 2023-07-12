import bottomBg from '@root/assets/images/bottom.webp';
import { getBaseUrl } from '@root/utils/common';
import Image from 'next/image';

import type { ModuleIdProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const Breadcrumb = dynamic(() => import('./Breadcrumb'), { ssr: false });

type PageFooterProps = ModuleIdProps;

export default function PageFooter({ moduleId }: PageFooterProps) {
	return (
		<section className='relative min-h-[300px] w-full overflow-hidden shadow-inner'>
			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 2xl:gap-6'>
				<Breadcrumb isShowAuthor={true} moduleId={moduleId} />
			</div>

			<div className='absolute inset-0 z-10 bg-gradient-to-r from-accent/10 to-primary/10' />

			<Image
				alt='sophie'
				className='object-cover'
				data-url={`${getBaseUrl(true)}/assets/images/bottom.jpg`}
				fill
				placeholder='blur'
				quality={70}
				sizes='(max-width: 768px) 100vw, 50vw'
				src={bottomBg}
			/>
		</section>
	);
}
