import type { HyperLinkData } from '@root/server/postgresql/schema';
import type { ClassNamesProps } from '@root/types/common/props';
import { cn, highlightSearchedText, parseHyperLinkData } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ShareButton = dynamic(() => import('@components/common/dynamic/ShareButton'), { ssr: false });

type HyperlinkProps = { input: HyperLinkData; search?: string } & ClassNamesProps<'label' | 'link'>;

export default function Hyperlink({ input, classNames, search }: HyperlinkProps) {
	const { href, label } = parseHyperLinkData(input);

	if (!href)
		return (
			<span className='prose'>
				<code
					className={cn('font-bold text-primary', classNames?.label, '!cursor-text')}
					dangerouslySetInnerHTML={{ __html: highlightSearchedText(label, search) }}
				/>
			</span>
		);

	return (
		<>
			<Link
				aria-label={label}
				className={cn('mr-0.5 font-bold', classNames?.link)}
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
