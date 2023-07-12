// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/utils/env.mjs'));

/** @type {(import("@root/types/common/zod").ModuleIdEnum)[]} */
const moduleIdList = ['effect', 'item', 'rumor', 'trait'];

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	redirects: async () => [
		...moduleIdList
			.map(moduleId => [
				{ source: `/${moduleId}s`, destination: `/${moduleId}`, permanent: true },
				{ source: `/${moduleId}s/:id`, destination: `/${moduleId}/:id`, permanent: false },
			])
			.flat(),
	],
	i18n: { locales: ['en'], defaultLocale: 'en' },
};

export default config;
