import PageRefresh from '@root/components/layout/client/PageRefresh';
import PageBanner from '@root/components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';

export default function HomeLayout({ children }: ChildrenProps) {
	return (
		<>
			<PageRefresh />

			<div className='h-[100dvh] w-[100dvw] bg-base-200 !antialiased'>
				<PageBanner bannerType='full' />
			</div>

			{children}
		</>
	);
}
