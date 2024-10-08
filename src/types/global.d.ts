declare module 'server-only';

declare module 'mdx-to-md' {
	// import type { ImprovePick } from './common';

	async function mdxToMd<
		Frontmatter extends {
			[key: string]: unknown;
		}
	>(
		/** The path to the MDX file. */
		path: string,

		/** Configure internal library options. */
		options?: Pick<BundleMDX<Frontmatter>, 'esbuildOptions' | 'grayMatterOptions' | 'mdxOptions'>
	): Promise<string>;
}
