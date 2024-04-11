import PageBanner from '@components/layout/static/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';
import { getServerSession } from 'next-auth';
import dynamic from 'next/dynamic';

const Alert = dynamic(() => import('@components/layout/dynamic/Alert'), { ssr: false });

export default async function ContentLayout({ children }: ChildrenProps) {
	const session = await getServerSession();

	return (
		<>
			<PageBanner bannerType='top' key='bannerTop' />

			{children}

			<PageBanner bannerType='bottom' key='bannerBottom' />

			<Alert />
		</>
	);
}
