import type { ChildrenProps } from '@root/types/common/props';
import { globalStore } from '@root/utils/store';
import { Provider } from 'jotai';
import dynamic from 'next/dynamic';
import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import HeadLayout from './HeadLayout';

const rubik = Rubik({ subsets: ['latin'] });
const fontAtelier = localFont({ src: './Atelier.woff2', preload: true, variable: '--font-atelier' });

const ThemeWrapper = dynamic(() => import('./ThemeWrapper'), { ssr: false });

type RootLayoutProps = ChildrenProps;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<Provider store={globalStore}>
			<main className={`${rubik.className} ${fontAtelier.variable}`}>
				<HeadLayout />
				<ThemeWrapper>{children}</ThemeWrapper>
			</main>
		</Provider>
	);
}
