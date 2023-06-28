import type { ChildrenProps } from '@root/types/common/props';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { UrlObject } from 'url';

type LinkItemProps = {
	'aria-label': string;
	isActive: boolean;
	href: UrlObject;
	icon: ReactNode;
} & ChildrenProps;

export default function LinkItem({ isActive, icon, children, ...rest }: LinkItemProps) {
	return (
		<Link
			className={`link gap-1 capitalize ${
				isActive ? 'no-animation !cursor-default !no-underline' : 'link-hover link-primary visited:link-accent'
			}`}
			role='navigation'
			{...rest}
		>
			{icon}
			<span>{children}</span>
		</Link>
	);
}
