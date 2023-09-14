import './globals.css';

import '@total-typescript/ts-reset';

import { APP_AUTHOR, APP_DESCRIPTION, APP_KEYWORD, APP_NAME, appleMediaConfig } from '@root/constants';
import type { ChildrenProps } from '@root/types/common/props';
import { getBaseUrl } from '@root/utils/common';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';

const rubik = Rubik({ subsets: ['latin'] });
const fontAtelier = localFont({ src: './Atelier.woff2', preload: true, variable: '--font-atelier' });

export const metadata: Metadata = {
	appleWebApp: {
		title: 'Apple Web App',
		statusBarStyle: 'black-translucent',
		startupImage: appleMediaConfig.map(({ media, url }) => ({
			media: media
				? `screen and (device-width: ${media.width}px) and (device-height: ${media.height}px) and (-webkit-device-pixel-ratio: ${media.ratio}) and (orientation: ${media.orientation})`
				: undefined,
			url: `/assets/splash_screens/${url}.png`,
		})),
	},
	authors: { name: APP_AUTHOR, url: `https://github.com/${APP_AUTHOR}` },
	description: APP_DESCRIPTION,
	icons: {
		apple: '/assets/splash_screens/icon.png',
		icon: '/favicon.ico',
		shortcut: '/assets/splash_screens/icon.png',
	},
	keywords: APP_KEYWORD,
	manifest: '/manifest.json',
	metadataBase: new URL(getBaseUrl(true)),
	other: {
		google: 'notranslate',
		'og:title': `${APP_NAME} | ${APP_DESCRIPTION}`,
		'og:description': APP_DESCRIPTION,
		'og:url': getBaseUrl(true),
	},
	robots: 'all',
	title: `${APP_NAME} | ${APP_DESCRIPTION}`,
	twitter: {
		card: 'summary_large_image',
		description: APP_DESCRIPTION,
		images: `${getBaseUrl()}/opengraph-image`,
		title: `${APP_NAME} | ${APP_DESCRIPTION}`,
	},
	viewport: 'width=device-width, initial-scale=1.0',
};

export default async function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang='en'>
			<body className={`${rubik.className} ${fontAtelier.variable}`}>{children}</body>
		</html>
	);
}
