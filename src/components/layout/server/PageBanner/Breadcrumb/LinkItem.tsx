import type { ChildrenProps } from '@root/types/common/props';
import type { Route } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

type LinkItemProps = {
	'aria-label': string;
	isActive: boolean;
	href: Route;
	icon: ReactNode;
} & ChildrenProps;

export default function LinkItem({ isActive, icon, children, ...rest }: LinkItemProps) {
	return (
		<Link
			className={`link gap-1 capitalize ${
				isActive
					? 'no-animation pointer-events-none !cursor-default !no-underline'
					: 'link-hover link-primary visited:link-accent'
			}`}
			role='navigation'
			{...rest}
		>
			{icon}
			<span>{children}</span>
		</Link>
	);
}
