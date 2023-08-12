import { useSearchQuery } from '@root/hooks/router';
import { parseQuery } from '@root/utils/common';
import Link from 'next/link';
import type { ParsedUrlQueryInput } from 'querystring';

type QueryLinkProps = Omit<Parameters<typeof Link>[0], 'href'> & {
	disabled?: boolean;
	href: { query: ParsedUrlQueryInput; pathname?: string };
	isActive?: boolean;
	isOverridden?: boolean;
	resetPage?: boolean;
};

export default function QueryLink({
	children,
	className,
	disabled,
	href: { pathname, query },
	isActive,
	resetPage,
	isOverridden,
	...rest
}: QueryLinkProps) {
	const { searchQuery, moduleId } = useSearchQuery();

	return (
		<Link
			className={`${isActive ? '!no-animation !pointer-events-none !cursor-default' : ''} ${
				disabled ? 'btn-disabled' : ''
			} ${className}`}
			href={{
				pathname: pathname || `/${moduleId}`,
				query: parseQuery({ ...(isOverridden ? {} : searchQuery), ...query, ...(resetPage ? { page: null } : {}) }),
			}}
			role='navigation'
			{...rest}
		>
			{children}
		</Link>
	);
}
