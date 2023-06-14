import type { ChildrenProps } from '@root/types/common/props';

import HeadLayout from './HeadLayout';
import PageRefresh from './PageRefresh';

type RootLayoutProps = ChildrenProps;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<main>
			<HeadLayout />

			<PageRefresh />

			{children}
		</main>
	);
}
