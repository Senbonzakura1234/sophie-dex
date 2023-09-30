import './globals.css';

import '@total-typescript/ts-reset';

import ScrollWrapper from '@root/components/layout/client/ScrollWrapper';
import ThemeSwitcher from '@root/components/layout/client/ThemeSwitcher';
import ThemeWrapper from '@root/components/layout/client/ThemeWrapper';
import TrpcProvider from '@root/components/layout/client/TrpcProvider';
import { APP_KEYWORD, APP_NAME, metaThemeColorMap } from '@root/constants/common';
import { appleMediaConfig } from '@root/constants/server';
import { fontAtelier, fontComicSansMS } from '@root/fonts';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { daisyUIThemeEnumSchema } from '@root/types/common/zod';
import { getBaseUrl, tryCatchHandler, writeLog } from '@root/utils/common';
import { ContextProvider } from '@root/utils/context';
import { getRepoInfo } from '@root/utils/server';
import { getCookie } from 'cookies-next';
import type { Metadata } from 'next';

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
	const [
		currentTheme,
		{
			description,
			owner: { html_url, login },
		},
	] = await Promise.all([getCurrentTheme(), getRepoInfo()]);

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
		authors: { name: login, url: html_url },
		description,
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
			'og:title': `${APP_NAME} | ${description}`,
			'og:description': description,
			'og:url': getBaseUrl(true),
		},
		robots: 'all',
		themeColor: metaThemeColorMap[currentTheme],
		title: `${APP_NAME} | ${description}`,
		twitter: {
			card: 'summary_large_image',
			description: description,
			images: `${getBaseUrl()}/opengraph-image`,
			title: `${APP_NAME} | ${description}`,
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
					<TrpcProvider>
						<ThemeWrapper>
							<ScrollWrapper>
								<ThemeSwitcher />
								{children}
							</ScrollWrapper>
						</ThemeWrapper>
					</TrpcProvider>
				</ContextProvider>
			</body>
		</html>
	);
}
