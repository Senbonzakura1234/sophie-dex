import './swagger.css';

import TrpcProvider from '@root/components/layout/client/TrpcProvider';
import PageBanner from '@root/components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';

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
