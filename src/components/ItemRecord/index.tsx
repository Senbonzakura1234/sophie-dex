import type { Item } from '@prisma/client';
import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';

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

export default function ItemRecord(props: ItemRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)} color={props.data?.color} pageName='Item'>
			{({ category, color, description, index, level, recipeIdea, recipeType, relatedCategories, traitPresent }) => (
				<>
					<Level level={level} />

					<div className='text-sm'>index: {index}</div>

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
