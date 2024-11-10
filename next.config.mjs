import withBundleAnalyzer from '@next/bundle-analyzer';
import withMDX from '@next/mdx';

/** @type {import('@root/types/common/next').ChainingPlugin} */
const chainingPlugin = ({ plugins: configFnList, rootConfig: coreConfig }) =>
	configFnList.reduce((prev, cur) => cur(prev), coreConfig);

export default chainingPlugin({
	plugins: [withBundleAnalyzer({ enabled: process.env.ENABLE_ANALYZE === 'true' }), withMDX()],
	rootConfig: {
		eslint: { ignoreDuringBuilds: process.env.DISABLE_LINTER === 'true' },
		experimental: { mdxRs: true, reactCompiler: true },
		images: { remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '' }] },
		pageExtensions: ['ts', 'tsx', 'mdx'],
		typescript: { ignoreBuildErrors: process.env.DISABLE_TYPE_CHECK === 'true' },
		transpilePackages: ['next-mdx-remote']
	}
});
