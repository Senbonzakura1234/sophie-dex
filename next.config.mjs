// @ts-check
import withMDX from '@next/mdx';

/** @type {import('@root/types/common/next').ChainingPlugin} */
const chainingPlugin = ({ plugins: configFnList, rootConfig: coreConfig }) =>
	configFnList.reduce((prev, cur) => cur(prev), coreConfig);

export default chainingPlugin({
	plugins: [withMDX()],
	rootConfig: {
		images: { remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '' }] },
		experimental: { typedRoutes: true }
	}
});
