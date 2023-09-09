import '@total-typescript/ts-reset';
import './globals.css';

import ScrollWrapper from '@root/components/layout/client/ScrollWrapper';
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
	const headersImport = await tryCatchHandler(import('next/headers'));

	if (!headersImport.isSuccess) {
		LogProvider.write({ args: [`Error importing next/headers:`, headersImport.error], type: 'error' });
		return 'fantasy';
	}

	const { cookies } = headersImport.data;

	return daisyUIThemeEnumSchema.parse(cookies().get('theme')?.value);
};

export async function generateMetadata(): Promise<Metadata> {
	const currentTheme = await getCurrentTheme();

	return {
		title: `${APP_NAME} | ${APP_DESCRIPTION}`,
		description: APP_DESCRIPTION,
		viewport: 'width=device-width, initial-scale=1.0',
		keywords: APP_KEYWORD,
		authors: { name: APP_AUTHOR, url: `https://github.com/${APP_AUTHOR}` },
		themeColor: metaThemeColorMap[currentTheme],
		robots: 'all',
		icons: {
			icon: '/favicon.ico',
			shortcut: '/assets/splash_screens/icon.png',
			apple: '/assets/splash_screens/icon.png',
		},
		manifest: '/manifest.json',
		twitter: {
			images: `${getBaseUrl()}/opengraph-image`,
			card: 'summary_large_image',
			title: `${APP_NAME} | ${APP_DESCRIPTION}`,
			description: APP_DESCRIPTION,
		},
		appleWebApp: {
			title: 'Apple Web App',
			statusBarStyle: 'black-translucent',
			startupImage: appleMediaConfig.map(({ url, media }) => ({
				url: `/assets/splash_screens/${url}.png`,
				media: media
					? `screen and (device-width: ${media.width}px) and (device-height: ${media.height}px) and (-webkit-device-pixel-ratio: ${media.ratio}) and (orientation: ${media.orientation})`
					: undefined,
			})),
		},
		other: {
			'og:title': `${APP_NAME} | ${APP_DESCRIPTION}`,
			'og:description': APP_DESCRIPTION,
			'og:url': getBaseUrl(true),
			google: 'notranslate',
		},
	};
}

export default async function RootLayout({ children }: ChildrenProps) {
	const currentTheme = await getCurrentTheme();

	return (
		<html lang='en'>
			<body className={`${rubik.className} ${fontAtelier.variable}`}>
				<ContextProvider defaultState={{ theme: currentTheme }}>
					<ThemeWrapper>
						<ScrollWrapper>{children}</ScrollWrapper>
					</ThemeWrapper>
				</ContextProvider>
			</body>
		</html>
	);
}
