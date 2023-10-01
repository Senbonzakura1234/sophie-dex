import TrpcProvider from '@root/components/layout/client/TrpcProvider';
import './swagger.css';

import PageBanner from '@root/components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';
import type { Metadata } from 'next';

export const metadata: Metadata = { viewport: 'width=1024' };

export default function ApiDocLayout({ children }: ChildrenProps) {
	return (
		<>
			<div className='flex grow items-center justify-center'>
				<TrpcProvider>{children}</TrpcProvider>
			</div>
			<PageBanner bannerType='bottom' />
		</>
	);
}
