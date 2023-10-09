import Hyperlink from '@root/components/layout/server/Hyperlink';
import type { HighlightText, HyperLinkMap, HyperLinkRecord, HyperLinkSearch } from '@root/server/database/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { Fragment } from 'react';

type RecipeIdeaProps = {
	recipeIdea: HyperLinkMap;
} & ClassNameProps;

export default function RecipeIdea({ recipeIdea: { contentText, contentData }, className }: RecipeIdeaProps) {
	return (
		<div className={`max-w-[90%] ${className}`}>
			<span>Recipe Idea:&nbsp;&nbsp;</span>

			<span className='text-lg'>
				{contentText.map((text, key) => {
					let data: HighlightText | HyperLinkRecord | HyperLinkSearch | undefined = undefined;

					if (text.includes('keyMap-')) data = contentData[parseInt(text.replace('keyMap-', ''))];

					return data ? (
						<Hyperlink key={key} input={data} className='link-primary link visited:link-accent' />
					) : (
						<Fragment key={key}>{text}</Fragment>
					);
				})}
			</span>
		</div>
	);
}
