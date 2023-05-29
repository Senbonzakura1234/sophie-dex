import ScrollWrapper from '@root/components/ScrollWrapper';
import type { ChildrenProps } from '@root/types/common/props';

import HeadLayout from './HeadLayout';
import PageRefresh from './PageRefresh';

type RootLayoutProps = ChildrenProps;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<main>
			<HeadLayout />

			<PageRefresh />

			<ScrollWrapper className='h-screen w-screen bg-base-200 !antialiased' enableScrollTop>
				{children}
			</ScrollWrapper>
		</main>
	);
}
