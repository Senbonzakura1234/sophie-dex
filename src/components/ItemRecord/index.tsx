import type { Item } from '@prisma/client';
import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
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

const ItemRecord: FC<ItemRecordProps> = props => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper {...nullableHandle(props, !isReady)} color={props.data?.color}>
			{({
				category,
				color,
				description,
				id,
				index,
				level,
				name,
				recipeIdea,
				recipeType,
				relatedCategories,
				traitPresent,
			}) => (
				<>
					<RecordHead
						id={id}
						isCurrentRecord={securedIdQuery.id === id}
						name={name}
						pathname={pathname}
						pageName='Item'
					/>

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
};

export default ItemRecord;
