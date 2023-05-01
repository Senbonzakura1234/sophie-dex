import type { HIGHLIGHT_TEXT, HYPER_LINK_RECORD, HYPER_LINK_SEARCH } from '@prisma/client';
import type { ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';

type HyperlinkProps = {
	input: HIGHLIGHT_TEXT | HYPER_LINK_RECORD | HYPER_LINK_SEARCH;
} & ClassNameProps;

export default function Hyperlink({ input, className }: HyperlinkProps) {
	const { href, label } = useMemo(() => {
		if ('content' in input) return { label: input.content };

		if ('searchQuery' in input)
			return {
				label: Object.values(input.searchQuery)
					.filter(Boolean)
					.map((s, key) => `${key > 0 ? ', ' : ''}${s?.toString().replaceAll('_', ' ').toLowerCase()}`)
					.join(),
				href: {
					pathname: `/${input.table.toLowerCase()}s`,
					query: input.searchQuery,
				},
			};

		return { label: input.name, href: { pathname: `/${input.table.toLowerCase()}s/${input.id}` } };
	}, [input]);

	if (!href) return <span className='font-bold capitalize'>{label}</span>;

	return (
		<Link className={clsx('font-bold capitalize', className)} href={href}>
			{label}
		</Link>
	);
}
