import type { HighlightText, HyperLinkRecord, HyperLinkSearch } from '@root/server/db/schema';
import type { ClassNameProps } from '@root/types/common/props';
import Link from 'next/link';
import { useMemo } from 'react';
import type { UrlObject } from 'url';

type HyperlinkProps = {
	input: HighlightText | HyperLinkRecord | HyperLinkSearch;
} & ClassNameProps;

export default function Hyperlink({ input, className }: HyperlinkProps) {
	const { href, label }: { href?: UrlObject; label: string } = useMemo(() => {
		if ('content' in input) return { label: input.content };

		if ('searchQuery' in input)
			return {
				label: Object.values(input.searchQuery)
					.filter(Boolean)
					.map((s, key) => `${key > 0 ? ', ' : ''}${s?.toString().replaceAll('_', ' ').toLowerCase()}`)
					.join(),
				href: {
					pathname: `/${input.table}s`,
					query: input.searchQuery,
				},
			};

		return { label: input.name, href: { pathname: `/${input.table}s/${input.id}` } };
	}, [input]);

	if (!href) return <span className='font-bold capitalize'>{label}</span>;

	return (
		<Link className={`font-bold capitalize ${className}`} href={href}>
			{label}
		</Link>
	);
}
