import type { HighlightText, HyperLinkRecord, HyperLinkSearch } from '@root/server/db/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { convertCode, parseQuery } from '@root/utils/common';
import Link from 'next/link';
import { useMemo } from 'react';
import type { UrlObject } from 'url';
import CopyUrlButton from '../static/CopyUrlButton';

type HyperlinkProps = {
	input: HighlightText | HyperLinkRecord | HyperLinkSearch;
} & ClassNameProps;

export default function Hyperlink({ input, className }: HyperlinkProps) {
	const { href, label }: { href?: UrlObject; label: string } = useMemo(() => {
		if ('content' in input) return { label: input.content };

		if ('searchQuery' in input) {
			const query = parseQuery(input.searchQuery);

			return {
				label: Object.values(query)
					.filter(Boolean)
					.map((value, key) => `${key > 0 ? ', ' : ''}${typeof value === 'number' ? value : convertCode(value)}`)
					.join(),
				href: { pathname: `/${input.table}`, query },
			};
		}

		return { label: input.name, href: { pathname: `/${input.table}/[id]`, query: { id: `${input.id}` } } };
	}, [input]);

	if (!href) return <span className='font-bold capitalize'>{label}</span>;

	return (
		<>
			<Link aria-label={label} className={`mr-2 font-bold capitalize ${className}`} href={href} role='navigation'>
				{label}
			</Link>

			<CopyUrlButton className='btn-ghost text-secondary' url={href} />
		</>
	);
}
