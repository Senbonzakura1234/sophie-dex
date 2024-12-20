import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import TrpcProvider from '@components/layout/dynamic/TrpcProvider';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const PageRefresh = dynamic(() => import('@components/layout/dynamic/PageRefresh'));

export default function AboutLayout({ children }: ChildrenProps) {
	return (
		<TrpcProvider>
			<PageRefresh type='DEFAULT' />

			<ContentWrapper type='profile'>{children}</ContentWrapper>
		</TrpcProvider>
	);
}
