import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import TrpcProvider from '@components/layout/dynamic/TrpcProvider';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const PageRefresh = dynamic(() => import('@components/layout/dynamic/PageRefresh'));

export default function DetailLayout({ children }: ChildrenProps) {
	return (
		<TrpcProvider>
			<PageRefresh type='DETAIL' />

			<ContentWrapper type='detail'>{children}</ContentWrapper>
		</TrpcProvider>
	);
}
