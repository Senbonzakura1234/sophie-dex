import Hyperlink from '@components/layout/static/Hyperlink';
import type { HighlightText, HyperLinkMap, HyperLinkRecord, HyperLinkSearch } from '@root/server/postgresql/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import { Fragment } from 'react';

type RecipeIdeaProps = {
	recipeIdea: HyperLinkMap;
} & ClassNameProps;

export default function RecipeIdea({ recipeIdea: { contentText, contentData }, className }: RecipeIdeaProps) {
	return (
		<div className={cn('max-w-[90%]', className)}>
			<span>Recipe Idea:&nbsp;&nbsp;</span>

			<span className='text-lg'>
				{contentText.map((text, key) => {
					let data: HighlightText | HyperLinkRecord | HyperLinkSearch | undefined = undefined;

					if (text.includes('keyMap-')) data = contentData[parseInt(text.replace('keyMap-', ''))];

					return data ? (
						<Hyperlink key={key} input={data} className='link link-primary visited:link-accent' />
					) : (
						<Fragment key={key}>{text}</Fragment>
					);
				})}
			</span>
		</div>
	);
}
