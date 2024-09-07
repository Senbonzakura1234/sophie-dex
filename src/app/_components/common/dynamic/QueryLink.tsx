'use client';

import { useModuleId } from '@root/hooks/useModuleId';
import type { useSearchQuery } from '@root/hooks/useSearchQuery';
import { cn, queryToParamsString } from '@root/utils/common';
import Link from 'next/link';
import type { ParsedUrlQueryInput } from 'querystring';

type Props = Readonly<
	Omit<Parameters<typeof Link>[0], 'href'> & {
		searchQuery: ReturnType<typeof useSearchQuery>['searchQuery'];
		disabled?: boolean;
		href: { query: ParsedUrlQueryInput };
		isActive?: boolean;
		isOverridden?: boolean;
		resetPage?: boolean;
	}
>;

export default function QueryLink({
	children,
	className,
	disabled,
	href: { query },
	isActive,
	resetPage,
	isOverridden,
	searchQuery,
	...rest
}: Props) {
	const { moduleId } = useModuleId();

	return (
		<Link
			className={cn(
				{ '!no-animation !pointer-events-none !cursor-default': isActive },
				{ 'btn-disabled': disabled },
				className
			)}
			href={
				moduleId
					? `/${moduleId}${queryToParamsString({
							...(isOverridden ? {} : searchQuery),
							...query,
							...(resetPage ? { page: null } : {})
						})}`
					: '/'
			}
			{...rest}
		>
			{children}
		</Link>
	);
}
