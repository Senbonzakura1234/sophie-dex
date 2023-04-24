import type { ClassNameProps } from '@root/types/common/props';
import { highlightTextValidator, hyperLinkRecordValidator, hyperLinkSearchValidator } from '@root/types/common/zod';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';
import { useMemo } from 'react';

type NewHyperlinkProps = {
	input: unknown;
} & ClassNameProps;

const NewHyperlink: FC<NewHyperlinkProps> = ({ input, className }) => {
	const { href, label } = useMemo(() => {
		const linkRecordResult = hyperLinkRecordValidator.safeParse(input);
		if (linkRecordResult.success)
			return {
				label: linkRecordResult.data.name,
				href: { pathname: `/${linkRecordResult.data.table.toLowerCase()}s/${linkRecordResult.data.id}` },
			};

		const linkSearchResult = hyperLinkSearchValidator.safeParse(input);
		if (linkSearchResult.success)
			return {
				label: Object.values(linkSearchResult.data.searchQuery)
					.filter(Boolean)
					.map((s, key) => `${key > 0 ? ', ' : ''}${s?.toString().replaceAll('_', ' ').toLowerCase()}`)
					.join(),
				href: {
					pathname: `/${linkSearchResult.data.table.toLowerCase()}s`,
					query: linkSearchResult.data.searchQuery,
				},
			};

		const textResult = highlightTextValidator.safeParse(input);
		if (textResult.success)
			return {
				label: textResult.data.content,
			};

		return { label: '' };
	}, [input]);

	if (!href) return <span className='font-bold capitalize'>{label}</span>;

	return (
		<Link className={clsx('font-bold capitalize', className)} href={href}>
			{label}
		</Link>
	);
};

export default NewHyperlink;
