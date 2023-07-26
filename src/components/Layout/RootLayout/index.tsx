import type { ChildrenProps } from '@root/types/common/props';
import { globalStore } from '@root/utils/store';
import { Provider } from 'jotai';
import { Roboto_Slab, Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import HeadLayout from './HeadLayout';

const rubik = Rubik({ subsets: ['latin'] });
const robotoSlab = Roboto_Slab({ weight: ['600', '700', '800'], subsets: ['latin'], variable: '--font-roboto' });
const fontAtelier = localFont({ src: './Atelier.woff2', preload: true, variable: '--font-atelier' });

type RootLayoutProps = ChildrenProps;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<Provider store={globalStore}>
			<main className={`${rubik.className} ${fontAtelier.variable} ${robotoSlab.variable}`}>
				<HeadLayout />
				{children}
			</main>
		</Provider>
	);
}
