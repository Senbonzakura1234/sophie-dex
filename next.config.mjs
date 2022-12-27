// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));

import withPWA from 'next-pwa';

const pwaConfig = withPWA({
	dest: 'public',
	sw: 'service-worker.gen.js',
	register: true,
	cacheStartUrl: true,
	cacheOnFrontEndNav: true,
	cleanupOutdatedCaches: true,
	disable: process.env.NODE_ENV === 'development',
});

const config = pwaConfig({
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	i18n: { locales: ['en'], defaultLocale: 'en' },
});

export default config;
