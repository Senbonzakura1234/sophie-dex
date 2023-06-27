import type { ChildrenProps } from '@root/types/common/props';
import { Rubik } from 'next/font/google';
import HeadLayout from './HeadLayout';

const rubik = Rubik({ subsets: ['latin'] });
// const monoton = Monoton({ display: 'swap', weight: '400'  });

type RootLayoutProps = ChildrenProps;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<main className={rubik.className}>
			<HeadLayout />
			{children}
		</main>
	);
}
