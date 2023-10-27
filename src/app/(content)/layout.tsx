import PageBanner from '@components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const Alert = dynamic(() => import('@components/layout/client/Alert'), { ssr: false });

export default function ContentLayout({ children }: ChildrenProps) {
	return (
		<>
			<PageBanner bannerType='top' key='bannerTop' />

			{children}

			<PageBanner bannerType='bottom' key='bannerBottom' />

			<Alert />
		</>
	);
}
