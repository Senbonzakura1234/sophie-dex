import type { HighlightText, HyperLinkRecord, HyperLinkSearch } from '@root/server/postgresql/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { cn, convertCode, highlightSearchedText, objectValues, queryToParamsString } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ShareButton = dynamic(() => import('@components/common/dynamic/ShareButton'), { ssr: false });

type HyperlinkProps = { input: HighlightText | HyperLinkRecord | HyperLinkSearch; search?: string } & ClassNameProps;

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

export default function Hyperlink({ input, className, search }: HyperlinkProps) {
	const { href, label } = getLinkProps(input);

	if (!href)
		return (
			<span
				className={cn('font-bold capitalize text-primary', className, '!cursor-text')}
				dangerouslySetInnerHTML={{ __html: highlightSearchedText(label, search) }}
			/>
		);

	return (
		<>
			<Link
				aria-label={label}
				className={cn('mr-0.5 font-bold capitalize', className)}
				href={href}
				dangerouslySetInnerHTML={{ __html: highlightSearchedText(label, search) }}
			/>

			<ShareButton
				classNames={{ wrapper: 'btn-square btn-ghost text-secondary' }}
				input={{ text: label, title: label, url: href }}
			/>
		</>
	);
}
