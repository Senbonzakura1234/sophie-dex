import './styles/index.css';

import '@total-typescript/ts-reset';

import ScrollWrapper from '@components/layout/dynamic/ScrollWrapper';
import ThemeWrapper from '@components/layout/dynamic/ThemeWrapper';
import { fontAtelier, fontComicSansMS } from '@root/fonts';
import type { AppleMediaConfig } from '@root/types/common';
import type { ChildrenProps } from '@root/types/common/props';
import { daisyUIThemeEnumSchema } from '@root/types/common/zod';
import { ContextProvider } from '@root/utils/client/context';
import { cn, getBaseUrl } from '@root/utils/common';
import { publicEnv } from '@root/utils/common/env.mjs';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';

const ThemeSwitcher = dynamic(() => import('@components/layout/dynamic/ThemeSwitcher'), { ssr: false });

const appleMediaConfig: AppleMediaConfig = [
	{ url: 'iPhone_14_Pro_Max_landscape' },
	{
		url: 'iPhone_14_Pro_Max_landscape',
		media: { width: 430, height: 932, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Pro_landscape',
		media: { width: 393, height: 852, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape',
		media: { width: 428, height: 926, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape',
		media: { width: 390, height: 844, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape',
		media: { width: 375, height: 812, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_11_Pro_Max__iPhone_XS_Max_landscape',
		media: { width: 414, height: 896, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_11__iPhone_XR_landscape',
		media: { width: 414, height: 896, ratio: 2, orientation: 'landscape' },
	},
	{
		url: 'iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape',
		media: { width: 414, height: 736, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape',
		media: { width: 375, height: 667, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape',
		media: { width: 320, height: 568, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '12.9__iPad_Pro_landscape',
		media: { width: 1024, height: 1366, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '11__iPad_Pro__10.5__iPad_Pro_landscape',
		media: { width: 834, height: 1194, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.9__iPad_Air_landscape',
		media: { width: 820, height: 1180, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.5__iPad_Air_landscape',
		media: { width: 834, height: 1112, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.2__iPad_landscape',
		media: { width: 810, height: 1080, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape',
		media: { width: 768, height: 1024, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '8.3__iPad_Mini_landscape',
		media: { width: 744, height: 1133, ratio: 2, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Pro_Max_portrait',
		media: { width: 430, height: 932, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14_Pro_portrait',
		media: { width: 393, height: 852, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait',
		media: { width: 428, height: 926, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait',
		media: { width: 390, height: 844, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait',
		media: { width: 375, height: 812, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_11_Pro_Max__iPhone_XS_Max_portrait',
		media: { width: 414, height: 896, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_11__iPhone_XR_portrait',
		media: { width: 414, height: 896, ratio: 2, orientation: 'portrait' },
	},
	{
		url: 'iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait',
		media: { width: 414, height: 736, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait',
		media: { width: 375, height: 667, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait',
		media: { width: 320, height: 568, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '12.9__iPad_Pro_portrait',
		media: { width: 1024, height: 1366, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '11__iPad_Pro__10.5__iPad_Pro_portrait',
		media: { width: 834, height: 1194, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.9__iPad_Air_portrait',
		media: { width: 820, height: 1180, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.5__iPad_Air_portrait',
		media: { width: 834, height: 1112, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.2__iPad_portrait',
		media: { width: 810, height: 1080, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait',
		media: { width: 768, height: 1024, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '8.3__iPad_Mini_portrait',
		media: { width: 744, height: 1133, ratio: 2, orientation: 'portrait' },
	},
];

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
	authors: { name: publicEnv.NEXT_PUBLIC_APP_AUTHOR, url: `https://github.com/${publicEnv.NEXT_PUBLIC_APP_AUTHOR}` },
	description: publicEnv.NEXT_PUBLIC_APP_DESCRIPTION,
	icons: {
		apple: '/assets/splash_screens/icon.png',
		icon: '/favicon.ico',
		shortcut: '/assets/splash_screens/icon.png',
	},
	keywords: publicEnv.NEXT_PUBLIC_APP_KEYWORD.split(','),
	manifest: '/manifest.json',
	metadataBase: new URL(getBaseUrl(true)),
	other: {
		google: 'notranslate',
		'og:description': publicEnv.NEXT_PUBLIC_APP_DESCRIPTION,
		'og:image': `${getBaseUrl()}/api/og`,
		'og:title': `${publicEnv.NEXT_PUBLIC_APP_NAME} | ${publicEnv.NEXT_PUBLIC_APP_DESCRIPTION}`,
		'og:url': getBaseUrl(true),
	},
	robots: 'all',
	title: `${publicEnv.NEXT_PUBLIC_APP_NAME} | ${publicEnv.NEXT_PUBLIC_APP_DESCRIPTION}`,
	twitter: {
		card: 'summary_large_image',
		description: publicEnv.NEXT_PUBLIC_APP_DESCRIPTION,
		images: `${getBaseUrl()}/api/og`,
		title: `${publicEnv.NEXT_PUBLIC_APP_NAME} | ${publicEnv.NEXT_PUBLIC_APP_DESCRIPTION}`,
	},
};

export const viewport: Viewport = { themeColor: '#996c254d', width: 'device-width', initialScale: 1 };

export default async function RootLayout({ children }: ChildrenProps) {
	const cookiesList = cookies();

	return (
		<html lang='en'>
			<body className={cn(fontAtelier.variable, fontComicSansMS.className)}>
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
