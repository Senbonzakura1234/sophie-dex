import RecordWrapper from '@components/common/static/RecordWrapper';
import { recipeTypeColorMap } from '@root/constants/common';
import type { Item } from '@root/server/postgresql/schema';

import Category from './Category';
import Color from './Color';
import Description from './Description';
import Level from './Level';
import RecipeIdea from './RecipeIdea';
import RecipeType from './RecipeType';
import RelatedCategories from './RelatedCategories';
import TraitPresent from './TraitPresent';

type Props = Readonly<{ data: Item } & { currentId?: string; search?: string }>;

export default function ItemRecord({ currentId, search, ...props }: Props) {
	return (
		<RecordWrapper
			{...props}
			colors={[props.data.recipeType ? recipeTypeColorMap[props.data.recipeType] : undefined, props.data?.color]}
			currentId={currentId}
			search={search}
		>
			{({ category, color, description, level, recipeIdea, recipeType, relatedCategories, traitPresent }) => (
				<>
					<Level level={level} color={color} />

					{recipeType ? <RecipeType recipeType={recipeType} /> : null}

					<Category color={color} category={category} />

					<Color color={color} />

					{recipeIdea ? <RecipeIdea recipeIdea={recipeIdea} search={search} /> : null}

					{description ? <Description description={description} search={search} /> : null}

					{traitPresent ? <TraitPresent traitPresent={traitPresent} search={search} /> : null}

					<RelatedCategories relatedCategories={relatedCategories} search={search} />
				</>
			)}
		</RecordWrapper>
	);
}
