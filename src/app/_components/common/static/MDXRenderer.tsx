import { MDXRemote } from 'next-mdx-remote/rsc';

import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type Props = Readonly<{ body: string } & ClassNameProps>;

export default function MDXRenderer({ body, className }: Props) {
	return (
		<div className={cn('prose max-w-none', className)}>
			<MDXRemote source={body} />
		</div>
	);
}
