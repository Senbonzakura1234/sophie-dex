import bottomBg from '@root/assets/images/bottom.jpg';
import Breadcrumb from '@root/components/Breadcrumb';
import Image from 'next/image';

export default function PageFooter() {
	return (
		<section className='2xl:h1/4 relative h-1/3 min-h-[300px] w-full overflow-hidden shadow-inner'>
			<Image
				className='object-cover'
				fill
				placeholder='blur'
				src={bottomBg}
				alt='sophie'
				sizes='100vh'
				priority={false}
			/>

			<div className='absolute inset-0 z-10 bg-slate-700/30' />

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-3 px-4 pt-5 2xl:gap-6'>
				<Breadcrumb isShowAuthor={true} />
			</div>
		</section>
	);
}
