import './globals.css';

import '@total-typescript/ts-reset';

import ScrollWrapper from '@root/components/layout/client/ScrollWrapper';
import ThemeSwitcher from '@root/components/layout/client/ThemeSwitcher';
import ThemeWrapper from '@root/components/layout/client/ThemeWrapper';
import {
	APP_AUTHOR,
	APP_DESCRIPTION,
	APP_KEYWORD,
	APP_NAME,
	appleMediaConfig,
	metaThemeColorMap,
} from '@root/constants';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { daisyUIThemeEnumSchema } from '@root/types/common/zod';
import { LogProvider, getBaseUrl, tryCatchHandler } from '@root/utils/common';
import { ContextProvider } from '@root/utils/context';
import { getCookie } from 'cookies-next';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';

const rubik = Rubik({ subsets: ['latin'] });
const fontAtelier = localFont({ src: './Atelier.woff2', preload: true, variable: '--font-atelier' });

const getCurrentTheme = async (): Promise<DaisyUIThemeEnum> => {
	if (typeof window !== 'undefined') return daisyUIThemeEnumSchema.parse(getCookie('theme', { path: '/' }));
	const headersResult = await tryCatchHandler(import('next/headers'));

	if (!headersResult.isSuccess) {
		LogProvider.write({ args: [`Error importing next/headers:`, headersResult.error], type: 'error' });
		return 'fantasy';
	}

	return daisyUIThemeEnumSchema.parse(headersResult.data.cookies().get('theme')?.value);
};

export async function generateMetadata(): Promise<Metadata> {
	const currentTheme = await getCurrentTheme();

	return {
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
		themeColor: metaThemeColorMap[currentTheme],
		title: `${APP_NAME} | ${APP_DESCRIPTION}`,
		twitter: {
			card: 'summary_large_image',
			description: APP_DESCRIPTION,
			images: `${getBaseUrl()}/opengraph-image`,
			title: `${APP_NAME} | ${APP_DESCRIPTION}`,
		},
		viewport: 'width=device-width, initial-scale=1.0',
	};
}

export default async function RootLayout({ children }: ChildrenProps) {
	const currentTheme = await getCurrentTheme();

	return (
		<html lang='en'>
			<body className={`${rubik.className} ${fontAtelier.variable}`}>
				<ContextProvider defaultState={{ theme: currentTheme }}>
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
