import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { ItemRecordProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

import RecordFieldWithHyperLink from '../RecordFieldWithHyperLink';
import RecordHead from '../RecordHead';
import RecordWrapper from '../RecordWrapper/RecordWrapper';
import Category from './Category';
import Color from './Color';
import Description from './Description';
import Level from './Level';
import RecipeType from './RecipeType';
import RelatedCategories from './RelatedCategories';
import TraitPresent from './TraitPresent';

const ItemRecord: FC<ItemRecordProps> = ({
	record: {
		name,
		index,
		id,
		color,
		relatedCategories,
		level,
		category,
		recipeType,
		description,
		traitPresent,
		recipeIdea,
	},
}) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper className={clsx({ hidden: !isReady })} color={color}>
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

			{recipeIdea ? (
				<RecordFieldWithHyperLink inputArr={recipeIdea} label='Idea' className='sm:max-w-[50%]' />
			) : null}

			{description ? <Description description={description} /> : null}

			{traitPresent ? <TraitPresent traitPresent={traitPresent} /> : null}

			<RelatedCategories relatedCategories={relatedCategories} />
		</RecordWrapper>
	);
};

export default ItemRecord;
