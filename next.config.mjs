// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/utils/common/env.mjs'));

import withMDX from '@next/mdx';

/** @type {import("next").NextConfig} */
const config = {
	images: { remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '' }] },
	experimental: { typedRoutes: true, mdxRs: true },
};

export default withMDX()(config);
