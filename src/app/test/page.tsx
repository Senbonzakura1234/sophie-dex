import { getUserReadme } from '@root/utils/server/fetch';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Test() {
	const markdown = await getUserReadme();

	if (!markdown.isSuccess) return null;

	return <MDXRemote source={markdown.result} />;
}
