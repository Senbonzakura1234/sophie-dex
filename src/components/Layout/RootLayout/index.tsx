import ScrollWrapper from '@root/components/ScrollWrapper';
import type { ChildrenProps } from '@root/types/common/props';

import HeadLayout from './HeadLayout';

type RootLayoutProps = ChildrenProps;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<main>
			<HeadLayout />

			<ScrollWrapper className='bg-base-200 h-screen w-screen !antialiased' enableScrollTop>
				{children}
			</ScrollWrapper>
		</main>
	);
}
