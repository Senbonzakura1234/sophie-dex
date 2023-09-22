import CopyUrlButton from '@root/components/common/client/CopyUrlButton';
import type { HighlightText, HyperLinkRecord, HyperLinkSearch } from '@root/server/database/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { convertCode, queryToParamsString } from '@root/utils/common';
import Link from 'next/link';
import { useMemo } from 'react';

type HyperlinkProps = {
	input: HighlightText | HyperLinkRecord | HyperLinkSearch;
} & ClassNameProps;

export default function Hyperlink({ input, className }: HyperlinkProps) {
	const { href, label } = useMemo(() => {
		if ('content' in input) return { label: input.content } as const;

		if ('searchQuery' in input) {
			const query = input.searchQuery;

			return {
				label: Object.values(query)
					.filter(Boolean)
					.map((value, key) => `${key > 0 ? ', ' : ''}${typeof value === 'number' ? value : convertCode(value)}`)
					.join(),
				href: `/${input.table}${queryToParamsString(query)}`,
			} as const;
		}

		return { label: input.name, href: `/${input.table}/${input.id}` } as const;
	}, [input]);

	if (!href) return <span className='font-bold capitalize'>{label}</span>;

	return (
		<>
			<Link aria-label={label} className={`mr-0.5 font-bold capitalize ${className}`} href={href} role='navigation'>
				{label}
			</Link>

			<CopyUrlButton className='btn-ghost text-secondary' url={href} />
		</>
	);
}
