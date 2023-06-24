import Hyperlink from '@root/components/ui/Hyperlink';
import type { HighlightText, HyperLinkMap, HyperLinkRecord, HyperLinkSearch } from '@root/server/db/schema';
import type { ClassNameProps } from '@root/types/common/props';
import { Fragment } from 'react';

type RecipeIdeaProps = {
	recipeIdea: HyperLinkMap;
} & ClassNameProps;

export default function RecipeIdea({ recipeIdea: { contentText, contentData }, className }: RecipeIdeaProps) {
	return (
		<div className={className}>
			<span className='font-bold'>RecipeIdea:&nbsp;&nbsp;</span>

			<span className='text-lg'>
				{contentText.map((text, key) => {
					let data: HighlightText | HyperLinkRecord | HyperLinkSearch | undefined = undefined;

					if (text.includes('keyMap-')) data = contentData[parseInt(text.replace('keyMap-', ''))];

					return data ? (
						<Hyperlink key={key} input={data} className='link-info link' />
					) : (
						<Fragment key={key}>{text}</Fragment>
					);
				})}
			</span>
		</div>
	);
}
