import QueryLink from '@root/components/common/client/QueryLink';
import type { SearchQuery } from '@root/types/common/zod';

type SortItemBtnProps = { 'aria-label': string; label: string; isActive: boolean; query: Partial<SearchQuery> };

export default function SortBtn({ label, isActive, query, ...rest }: SortItemBtnProps) {
	return (
		<QueryLink
			className={`btn join-item btn-xs border-y-2 capitalize ${
				isActive ? 'btn-primary btn-active' : 'btn-ghost border-accent'
			}`}
			href={{ query }}
			isActive={isActive}
			resetPage
			{...rest}
		>
			{label}
		</QueryLink>
	);
}