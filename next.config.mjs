import withMDX from '@next/mdx';
import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';

const jiti = createJiti(fileURLToPath(import.meta.url), {});

jiti('./src/utils/common/env');

/** @type {import('@root/types/common/next').ChainingPlugin} */
const chainingPlugin = ({ plugins: configFnList, rootConfig: coreConfig }) =>
	configFnList.reduce((prev, cur) => cur(prev), coreConfig);

export default chainingPlugin({
	plugins: [withMDX()],
	rootConfig: {
		eslint: { ignoreDuringBuilds: true },
		experimental: { typedRoutes: true, mdxRs: true },
		images: { remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '' }] },
		pageExtensions: ['ts', 'tsx', 'mdx'],
		typescript: { ignoreBuildErrors: true }
	}
});
