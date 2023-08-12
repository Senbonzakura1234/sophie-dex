import RecordWrapper from '@root/components/RecordWrapper';
import type { Item } from '@root/server/db/schema';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';

import { recipeTypeColorMap } from '@root/constants';
import Category from './Category';
import Color from './Color';
import Description from './Description';
import Level from './Level';
import RecipeIdea from './RecipeIdea';
import RecipeType from './RecipeType';
import RelatedCategories from './RelatedCategories';
import TraitPresent from './TraitPresent';

type ItemRecordProps = RecordProps<Item> & { currentId: string | undefined };

export default function ItemRecord({ currentId, ...props }: ItemRecordProps) {
	return (
		<RecordWrapper
			{...nullableHandle(props)}
			colors={[props.data?.recipeType ? recipeTypeColorMap[props.data.recipeType] : undefined, props.data?.color]}
			currentId={currentId}
		>
			{({ category, color, description, level, recipeIdea, recipeType, relatedCategories, traitPresent }) => (
				<>
					<Level level={level} color={color} />

					{recipeType ? <RecipeType recipeType={recipeType} /> : null}

					<Category color={color} category={category} />

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
