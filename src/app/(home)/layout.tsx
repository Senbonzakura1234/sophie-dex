import PageBanner from '@components/layout/static/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const PageRefresh = dynamic(() => import('@components/layout/dynamic/PageRefresh'));

export default async function HomeLayout({ children }: ChildrenProps) {
	return (
		<>
			<PageRefresh />

			<PageBanner bannerType='full' />

			{children}
		</>
	);
}
