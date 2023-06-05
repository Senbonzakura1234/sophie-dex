import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';

import type { Item } from '@root/server/db/schema';
import { nullableHandle } from '@root/utils/common';

import dynamic from 'next/dynamic';

const Category = dynamic(() => import('./Category'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});
const Color = dynamic(() => import('./Color'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});
const Description = dynamic(() => import('./Description'), {
	loading: () => (
		<>
			<div className='h-7 w-40 max-w-full animate-pulse rounded' />
			<div className='h-7 w-40 max-w-full animate-pulse rounded' />
			<div className='h-7 w-40 max-w-full animate-pulse rounded' />
		</>
	),
});
const Level = dynamic(() => import('./Level'));
const RecipeIdea = dynamic(() => import('./RecipeIdea'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});
const RecipeType = dynamic(() => import('./RecipeType'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});
const RelatedCategories = dynamic(() => import('./RelatedCategories'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});
const TraitPresent = dynamic(() => import('./TraitPresent'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});

type ItemRecordProps = RecordProps<Item>;

export default function ItemRecord(props: ItemRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)} color={props.data?.color} pageName='item'>
			{({ category, color, description, level, recipeIdea, recipeType, relatedCategories, traitPresent }) => (
				<>
					<Level level={level} />

					{recipeType ? <RecipeType recipeType={recipeType} /> : null}

					<Category category={category} />

					<Color color={color} />

					{recipeIdea ? <RecipeIdea recipeIdea={recipeIdea} /> : null}

					{description ? <Description description={description} /> : null}

					{traitPresent ? <TraitPresent traitPresent={traitPresent} /> : null}

					<RelatedCategories relatedCategories={relatedCategories} />
				</>
			)}
		</RecordWrapper>
	);
}
