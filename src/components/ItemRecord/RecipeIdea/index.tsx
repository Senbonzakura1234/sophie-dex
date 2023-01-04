import { RecipeIdeaKey } from '@root/components/SubComponent';
import { hyperLinkSeparator } from '@root/constants';
import type { RecipeIdeaProps } from '@root/types/common/props';
import type { FC, ReactNode } from 'react';
import { Fragment, useMemo } from 'react';

const RecipeIdea: FC<RecipeIdeaProps> = ({ recipeIdea }) => {
	const processedIdea: ReactNode[] = useMemo(
		() =>
			recipeIdea
				.split(hyperLinkSeparator)
				.map((input, index) => (index % 2 === 0 ? input : <RecipeIdeaKey key={index} input={input} />)),
		[recipeIdea],
	);

	return (
		<div className='sm:max-w-[50%]'>
			<span className='font-bold'>Idea:&nbsp;&nbsp;</span>

			<span className='text-lg'>
				{processedIdea.map((el, key) => (
					<Fragment key={key}>{el}</Fragment>
				))}
			</span>
		</div>
	);
};

export default RecipeIdea;
