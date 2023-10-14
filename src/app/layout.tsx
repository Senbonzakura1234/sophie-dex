import './globals.css';

import '@total-typescript/ts-reset';

import ScrollWrapper from '@root/components/layout/client/ScrollWrapper';
import ThemeWrapper from '@root/components/layout/client/ThemeWrapper';
import { APP_AUTHOR, APP_DESCRIPTION, APP_KEYWORD, APP_NAME, metaThemeColorMap } from '@root/constants/common';
import { appleMediaConfig } from '@root/constants/server';
import { fontAtelier, fontComicSansMS } from '@root/fonts';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { daisyUIThemeEnumSchema } from '@root/types/common/zod';
import { ContextProvider } from '@root/utils/client/context';
import { getBaseUrl, tryCatchHandler, writeLog } from '@root/utils/common';
import { getCookie } from 'cookies-next';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ThemeSwitcher = dynamic(() => import('@root/components/layout/client/ThemeSwitcher'), { ssr: false });

const getCurrentTheme = async (): Promise<DaisyUIThemeEnum> => {
	if (typeof window !== 'undefined') return daisyUIThemeEnumSchema.parse(getCookie('theme', { path: '/' }));
	const headersResult = await tryCatchHandler(import('next/headers'));

	if (!headersResult.isSuccess) {
		writeLog({ args: [`Error importing next/headers:`, headersResult.error], type: 'error' });
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
		keywords: APP_KEYWORD.split(','),
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
			<body className={`${fontAtelier.variable} ${fontComicSansMS.className}`}>
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
