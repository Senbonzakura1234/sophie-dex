// @ts-check
import withMDX from '@next/mdx';

export default withMDX()({
	images: { remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '' }] },
	experimental: { typedRoutes: true },
});
