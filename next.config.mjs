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
		pageExtensions: ['ts', 'tsx', 'mdx'],
		images: { remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '' }] },
		experimental: { typedRoutes: true, mdxRs: true }
	}
});
