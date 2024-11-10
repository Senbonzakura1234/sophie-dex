declare module 'server-only';

declare module 'mdx-to-md' {
	import type { ImprovePick } from '@root/types/common';
	import type { BundleMDX } from 'mdx-bundler/dist/types';

	async function mdxToMd<
		Frontmatter extends {
			[key: string]: unknown;
		}
	>(
		/** The path to the MDX file. */
		path: string,

		/** Configure internal library options. */
		options?: ImprovePick<BundleMDX<Frontmatter>, 'esbuildOptions' | 'grayMatterOptions' | 'mdxOptions'>
	): Promise<string>;
}
