import withBundleAnalyzer from '@next/bundle-analyzer';
import withMDX from '@next/mdx';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

/** @type {import('@root/types/common/next').ChainingPlugin} */
const chainingPlugin = ({ plugins: configFnList, rootConfig: coreConfig }) =>
	configFnList.reduce((prev, cur) => cur(prev), coreConfig);

export default chainingPlugin({
	plugins: [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }), withMDX()],
	rootConfig: {
		eslint: { ignoreDuringBuilds: true },
		experimental: { typedRoutes: true, mdxRs: true },
		images: { remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '' }] },
		pageExtensions: ['ts', 'tsx', 'mdx'],
		typescript: { ignoreBuildErrors: true }
	}
});
