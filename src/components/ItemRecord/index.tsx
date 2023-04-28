import type { Item } from '@prisma/client';
import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import { nullableHandle } from '@root/utils/common';
import Category from './Category';
import Color from './Color';
import Description from './Description';
import Level from './Level';
import RecipeIdea from './RecipeIdea';
import RecipeType from './RecipeType';
import RelatedCategories from './RelatedCategories';
import TraitPresent from './TraitPresent';

type ItemRecordProps = RecordProps<Item>;

const ItemRecord: FC<ItemRecordProps> = props => (
	<RecordWrapper {...nullableHandle(props)} color={props.data?.color} pageName='Item'>
		{({ category, color, description, index, level, recipeIdea, recipeType, relatedCategories, traitPresent }) => (
			<>
				<Level level={level} />

				<div className='text-sm'>index: {index}</div>

				{recipeType ? <RecipeType recipeType={recipeType} /> : null}

				<Category category={category} />

				<Color color={color} />

				{recipeIdea ? <RecipeIdea recipeIdea={recipeIdea} className='sm:max-w-[50%]' /> : null}

				{description ? <Description description={description} /> : null}

				{traitPresent ? <TraitPresent traitPresent={traitPresent} /> : null}

				<RelatedCategories relatedCategories={relatedCategories} />
			</>
		)}
	</RecordWrapper>
);

export default ItemRecord;
