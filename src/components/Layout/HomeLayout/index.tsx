import { PageRefresh } from '@root/components/ui/dynamic';
import PageBanner from '../PageBanner';

export default function HomeLayout() {
	return (
		<>
			<PageRefresh />

			<div className='h-[100dvh] w-[100dvw] bg-base-200 !antialiased'>
				<PageBanner bannerType='full' />
			</div>
		</>
	);
}
