import type { HIGHLIGHT_TEXT, HYPER_LINK_MAP, HYPER_LINK_RECORD, HYPER_LINK_SEARCH } from '@prisma/client';
import Hyperlink from '@root/components/Hyperlink';
import type { ClassNameProps } from '@root/types/common/props';
import type { FC } from 'react';
import { Fragment } from 'react';

type RecipeIdeaProps = {
	recipeIdea: HYPER_LINK_MAP;
} & ClassNameProps;

const RecipeIdea: FC<RecipeIdeaProps> = ({
	recipeIdea: { contentText, highlightTextMap, linkRecordMap, linkSearchMap },
	className,
}) => (
	<div className={className}>
		<span className='font-bold'>RecipeIdea:&nbsp;&nbsp;</span>

		<span className='text-lg'>
			{contentText.map((text, key) => {
				let data: HYPER_LINK_RECORD | HIGHLIGHT_TEXT | HYPER_LINK_SEARCH | undefined = undefined;

				if (text.includes('linkRecordMap-')) data = linkRecordMap[parseInt(text.replace('linkRecordMap-', ''))];

				if (text.includes('linkSearchMap-')) data = linkSearchMap[parseInt(text.replace('linkSearchMap-', ''))];

				if (text.includes('highlightTextMap-'))
					data = highlightTextMap[parseInt(text.replace('highlightTextMap-', ''))];

				return data ? (
					<Hyperlink key={key} input={data} className='link link-info' />
				) : (
					<Fragment key={key}>{text}</Fragment>
				);
			})}
		</span>
	</div>
);

export default RecipeIdea;
