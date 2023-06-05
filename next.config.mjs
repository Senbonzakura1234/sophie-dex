// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/utils/env.mjs'));

/** @type {import("next").NextConfig} */
const config = {
	productionBrowserSourceMaps: true,
	reactStrictMode: true,
	swcMinify: true,
	i18n: { locales: ['en'], defaultLocale: 'en' },
};

export default config;
