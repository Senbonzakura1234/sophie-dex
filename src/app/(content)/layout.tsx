import TrpcProvider from '@root/components/layout/client/TrpcProvider';
import PageBanner from '@root/components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const Alert = dynamic(() => import('@root/components/layout/client/Alert'), { ssr: false });

export default function ContentLayout({ children }: ChildrenProps) {
	return (
		<>
			<PageBanner bannerType='top' key='bannerTop' />

			<TrpcProvider>{children}</TrpcProvider>

			<PageBanner bannerType='bottom' key='bannerBottom' />

			<Alert />
		</>
	);
}
