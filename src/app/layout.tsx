import './globals.css';

import '@total-typescript/ts-reset';

import ScrollWrapper from '@root/components/layout/client/ScrollWrapper';
import ThemeWrapper from '@root/components/layout/client/ThemeWrapper';
import { APP_AUTHOR, APP_DESCRIPTION, APP_KEYWORD, APP_NAME } from '@root/constants/common';
import { appleMediaConfig } from '@root/constants/server';
import { fontAtelier, fontComicSansMS } from '@root/fonts';
import type { ChildrenProps } from '@root/types/common/props';
import { daisyUIThemeEnumSchema } from '@root/types/common/zod';
import { ContextProvider } from '@root/utils/client/context';
import { getBaseUrl } from '@root/utils/common';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';

const ThemeSwitcher = dynamic(() => import('@root/components/layout/client/ThemeSwitcher'), { ssr: false });

// const getCurrentTheme = async (): Promise<DaisyUIThemeEnum> => {
// 	if (typeof window !== 'undefined') return daisyUIThemeEnumSchema.parse(getCookie('theme'));
// 	const headersResult = await tryCatchHandler(import('next/headers'));

// 	if (!headersResult.isSuccess) {
// 		writeLog({ args: [`Error importing next/headers:`, headersResult.error], type: 'error' });
// 		return 'fantasy';
// 	}

// 	return daisyUIThemeEnumSchema.parse(headersResult.data.cookies().get('theme')?.value);
// };

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
	themeColor: '#996c254d',
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
