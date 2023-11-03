import './globals.css';

import '@total-typescript/ts-reset';

import ScrollWrapper from '@components/layout/client/ScrollWrapper';
import ThemeWrapper from '@components/layout/client/ThemeWrapper';
import { appleMediaConfig } from '@root/constants/server';
import { fontAtelier, fontComicSansMS } from '@root/fonts';
import type { ChildrenProps } from '@root/types/common/props';
import { daisyUIThemeEnumSchema } from '@root/types/common/zod';
import { ContextProvider } from '@root/utils/client/context';
import { getBaseUrl } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';

const ThemeSwitcher = dynamic(() => import('@components/layout/client/ThemeSwitcher'), { ssr: false });

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
	authors: { name: env.NEXT_PUBLIC_APP_AUTHOR, url: `https://github.com/${env.NEXT_PUBLIC_APP_AUTHOR}` },
	description: env.NEXT_PUBLIC_APP_DESCRIPTION,
	icons: {
		apple: '/assets/splash_screens/icon.png',
		icon: '/favicon.ico',
		shortcut: '/assets/splash_screens/icon.png',
	},
	keywords: env.NEXT_PUBLIC_APP_KEYWORD.split(','),
	manifest: '/manifest.json',
	metadataBase: new URL(getBaseUrl(true)),
	other: {
		google: 'notranslate',
		'og:title': `${env.NEXT_PUBLIC_APP_NAME} | ${env.NEXT_PUBLIC_APP_DESCRIPTION}`,
		'og:description': env.NEXT_PUBLIC_APP_DESCRIPTION,
		'og:url': getBaseUrl(true),
		'og:image': `${getBaseUrl()}/og`,
	},
	robots: 'all',
	title: `${env.NEXT_PUBLIC_APP_NAME} | ${env.NEXT_PUBLIC_APP_DESCRIPTION}`,
	twitter: {
		card: 'summary_large_image',
		description: env.NEXT_PUBLIC_APP_DESCRIPTION,
		images: `${getBaseUrl()}/og`,
		title: `${env.NEXT_PUBLIC_APP_NAME} | ${env.NEXT_PUBLIC_APP_DESCRIPTION}`,
	},
};

export const viewport: Viewport = { themeColor: '#996c254d', width: 'device-width', initialScale: 1 };

export default async function RootLayout({ children }: ChildrenProps) {
	const cookiesList = cookies();

	return (
		<html lang='en'>
			<body className={`${fontAtelier.variable} ${fontComicSansMS.className}`}>
				<ContextProvider defaultState={{ theme: daisyUIThemeEnumSchema.parse(cookiesList.get('theme')?.value) }}>
					<ThemeWrapper>
						<ScrollWrapper>
							<ThemeSwitcher />
							{children}
						</ScrollWrapper>
					</ThemeWrapper>
				</ContextProvider>
			</body>
		</html>
	);
}
