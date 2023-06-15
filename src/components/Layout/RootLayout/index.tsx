import type { ChildrenProps } from '@root/types/common/props';

import HeadLayout from './HeadLayout';

type RootLayoutProps = ChildrenProps;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<main>
			<HeadLayout />
			{children}
		</main>
	);
}
