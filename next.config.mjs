import withBundleAnalyzer from '@next/bundle-analyzer';
import withMDX from '@next/mdx';

/** @type {import('@root/types/common/next').ChainingPlugin} */
const chainingPlugin = ({ plugins: configFnList, rootConfig: coreConfig }) =>
	configFnList.reduce((prev, cur) => cur(prev), coreConfig);

export default chainingPlugin({
	plugins: [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }), withMDX()],
	rootConfig: {
		eslint: { ignoreDuringBuilds: true },
		experimental: { mdxRs: true },
		images: { remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '' }] },
		pageExtensions: ['ts', 'tsx', 'mdx'],
		typescript: { ignoreBuildErrors: true }
	}
});
