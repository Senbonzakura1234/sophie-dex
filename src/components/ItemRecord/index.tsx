import type { Item } from '@prisma/client';
import RecordFieldWithHyperLink from '@root/components/RecordFieldWithHyperLink';
import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import Category from './Category';
import Color from './Color';
import Description from './Description';
import Level from './Level';
import RecipeType from './RecipeType';
import RelatedCategories from './RelatedCategories';
import TraitPresent from './TraitPresent';

type ItemRecordProps = RecordProps<Item>;

const ItemRecord: FC<ItemRecordProps> = ({ record }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper isSuccess={!!record && isReady} color={record?.color}>
			{record ? (
				<>
					<RecordHead
						id={record.id}
						isCurrentRecord={securedIdQuery.id === record.id}
						name={record.name}
						pathname={pathname}
						pageName='Item'
					/>

					<Level level={record.level} />

					<div className='text-sm'>index: {record.index}</div>

					{record.recipeType ? <RecipeType recipeType={record.recipeType} /> : null}

					<Category category={record.category} />

					<Color color={record.color} />

					{record.recipeIdea ? (
						<RecordFieldWithHyperLink inputArr={record.recipeIdea} label='Idea' className='sm:max-w-[50%]' />
					) : null}

					{record.description ? <Description description={record.description} /> : null}

					{record.traitPresent ? <TraitPresent traitPresent={record.traitPresent} /> : null}

					<RelatedCategories relatedCategories={record.relatedCategories} />
				</>
			) : null}
		</RecordWrapper>
	);
};

export default ItemRecord;
