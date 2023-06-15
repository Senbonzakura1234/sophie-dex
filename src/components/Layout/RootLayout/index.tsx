import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

import HeadLayout from './HeadLayout';

const PageRefresh = dynamic(() => import('./PageRefresh'));

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
