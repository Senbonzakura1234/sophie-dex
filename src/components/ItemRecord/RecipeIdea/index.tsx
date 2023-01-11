import { RecipeIdeaKey } from '@root/components/SubComponent';
import type { RecipeIdeaProps } from '@root/types/common/props';
import type { FC, ReactNode } from 'react';
import { Fragment, useMemo } from 'react';

const RecipeIdea: FC<RecipeIdeaProps> = ({ recipeIdea }) => {
	const processedIdea: ReactNode[] = useMemo(
		() => recipeIdea.map((input, index) => (index % 2 === 0 ? input : <RecipeIdeaKey key={index} input={input} />)),
		[recipeIdea],
	);

	return processedIdea.length ? (
		<div className='sm:max-w-[50%]'>
			<span className='font-bold'>Idea:&nbsp;&nbsp;</span>

			<span className='text-lg'>
				{processedIdea.map((el, key) => (
					<Fragment key={key}>{el}</Fragment>
				))}
			</span>
		</div>
	) : null;
};

export default RecipeIdea;
