import { APP_NAME } from '@root/constants/common';
import { genericModuleIdEnumSchema } from '@root/types/common/zod/generic';
import { capitalize } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import type { MetadataRoute } from 'next';

const icons: MetadataRoute.Manifest['icons'] = [
	{
		purpose: 'maskable',
		sizes: '72x72',
		src: 'assets/icons/icon-72x72.png',
		type: 'image/png'
	},
	{
		purpose: 'maskable',
		sizes: '96x96',
		src: 'assets/icons/icon-96x96.png',
		type: 'image/png'
	},
	{
		purpose: 'maskable',
		sizes: '128x128',
		src: 'assets/icons/icon-128x128.png',
		type: 'image/png'
	},
	{
		purpose: 'maskable',
		sizes: '144x144',
		src: 'assets/icons/icon-144x144.png',
		type: 'image/png'
	},
	{
		purpose: 'maskable',
		sizes: '152x152',
		src: 'assets/icons/icon-152x152.png',
		type: 'image/png'
	},
	{
		purpose: 'maskable',
		sizes: '192x192',
		src: 'assets/icons/icon-192x192.png',
		type: 'image/png'
	},
	{
		purpose: 'maskable',
		sizes: '384x384',
		src: 'assets/icons/icon-384x384.png',
		type: 'image/png'
	},
	{
		purpose: 'maskable',
		sizes: '512x512',
		src: 'assets/icons/icon-512x512.png',
		type: 'image/png'
	}
];

export default function manifest(): MetadataRoute.Manifest {
	return {
		background_color: '#F8FAFC',
		description: env.NEXT_PUBLIC_APP_DESCRIPTION,
		display: 'standalone',
		display_override: ['window-controls-overlay', 'standalone'],
		icons,
		id: '/?source=pwa',
		name: APP_NAME,
		scope: '/',
		short_name: APP_NAME,
		shortcuts: [
			...genericModuleIdEnumSchema._def.values.map(m => ({
				description: `View the ${capitalize(m)} Page`,
				icons,
				name: `Open ${capitalize(m)} Page`,
				short_name: `${capitalize(m)} Page`,
				url: `/${m}?utm_source=homescreen`
			})),
			{
				description: 'View the About Page',
				icons,
				name: 'Open About Page',
				short_name: 'About Page',
				url: '/about?utm_source=homescreen'
			}
		],
		start_url: '/?source=pwa',
		theme_color: '#996c254d'
	};
}
