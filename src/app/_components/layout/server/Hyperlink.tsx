import type { HighlightText, HyperLinkRecord, HyperLinkSearch } from '@root/server/database/postgresql/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { convertCode, objectValues, queryToParamsString } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ShareButton = dynamic(() => import('@components/common/client/ShareButton'), { ssr: false });

type HyperlinkProps = {
	input: HighlightText | HyperLinkRecord | HyperLinkSearch;
} & ClassNameProps;

const getLinkProps = (input: HyperlinkProps['input']) => {
	if ('content' in input) return { label: input.content } as const;

	if ('searchQuery' in input) {
		const query = input.searchQuery;

		return {
			label: objectValues(query)
				.filter(Boolean)
				.map((value, key) => `${key > 0 ? ', ' : ''}${typeof value === 'number' ? value : convertCode(value)}`)
				.join(),
			href: `/${input.table}${queryToParamsString(query)}`,
		} as const;
	}

	return { label: input.name, href: `/${input.table}/${input.id}` } as const;
};

export default function Hyperlink({ input, className }: HyperlinkProps) {
	const { href, label } = getLinkProps(input);

	if (!href) return <span className={`font-bold capitalize text-primary ${className}`}>{label}</span>;

	return (
		<>
			<Link aria-label={label} className={`mr-0.5 font-bold capitalize ${className}`} href={href}>
				{label}
			</Link>

			<ShareButton className='btn-ghost text-secondary' input={{ text: label, title: label, url: href }} />
		</>
	);
}
