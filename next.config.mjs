// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/utils/env.mjs'));

import withPWA from 'next-pwa';
import { env } from './src/utils/env.mjs';

const pwaConfig = withPWA({
	dest: 'public',
	sw: 'service-worker.gen.js',
	register: true,
	cacheStartUrl: true,
	dynamicStartUrl: false,
	cacheOnFrontEndNav: true,
	cleanupOutdatedCaches: true,
	disable: env.NEXT_PUBLIC_NODE_ENV === 'development',
	skipWaiting: true,
	reloadOnOnline: true,
});

/** @type {import("next").NextConfig} */
const config = pwaConfig({
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	i18n: { locales: ['en'], defaultLocale: 'en' },
});

export default config;
