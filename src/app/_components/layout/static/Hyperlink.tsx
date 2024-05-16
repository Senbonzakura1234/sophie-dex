import type { HyperLinkData } from '@root/server/postgresql/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { cn, highlightSearchedText, parseHyperLinkData } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ShareButton = dynamic(() => import('@components/common/dynamic/ShareButton'), { ssr: false });

type HyperlinkProps = { input: HyperLinkData; search?: string } & ClassNameProps;

export default function Hyperlink({ input, className, search }: HyperlinkProps) {
	const { href, label } = parseHyperLinkData(input);

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
