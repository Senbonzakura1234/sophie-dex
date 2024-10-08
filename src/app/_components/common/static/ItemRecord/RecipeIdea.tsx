import Hyperlink from '@components/layout/static/Hyperlink';
import type { HighlightText, HyperLinkMap, HyperLinkRecord, HyperLinkSearch } from '@root/server/postgresql/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import { Fragment } from 'react';

type Props = Readonly<{ recipeIdea: HyperLinkMap; search: string | undefined } & ClassNameProps>;

export default function RecipeIdea({ recipeIdea: { contentText, contentData }, className, search }: Props) {
	return (
		<div className={cn('max-w-[90%]', className)}>
			<span>Recipe Idea:&nbsp;&nbsp;</span>

			<span className='text-lg'>
				{contentText.map((text, key) => {
					let data: HighlightText | HyperLinkRecord | HyperLinkSearch | undefined = undefined;

					if (text.includes('keyMap-')) data = contentData[parseInt(text.replace('keyMap-', ''))];

					return data ? (
						<Hyperlink
							search={search}
							key={key}
							input={data}
							classNames={{ label: '', link: 'link link-primary visited:link-accent' }}
						/>
					) : (
						<Fragment key={key}>{text}</Fragment>
					);
				})}
			</span>
		</div>
	);
}
