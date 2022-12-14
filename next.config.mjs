// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));

import withPWA from 'next-pwa';

const pwaConfig = withPWA({
	dest: 'public',
	register: true,
	skipWaiting: true,
	cacheOnFrontEndNav: true,
});

/** @type {import("next").NextConfig} */
const config = {
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	...pwaConfig,
};
export default config;
