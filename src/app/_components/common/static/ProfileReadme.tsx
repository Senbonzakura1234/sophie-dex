import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Props = MDXRemoteProps;

export default function ProfileReadme(props: Props) {
	return <MDXRemote {...props} />;
}
