import type { TRAIT_CATEGORY } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { TraitCategoryDisplay } from '@root/types/model';
import type { FC } from 'react';

const TraitCategories: FC<{
	traitCategories: TRAIT_CATEGORY[];
}> = ({ traitCategories }) => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	return (
		<div className='flex w-96 max-w-fit flex-wrap gap-2 p-2'>
			{traitCategories.map((traitCategory, key) => (
				<button
					disabled={!isReady || securedQuery.traitCategory === traitCategory}
					key={key}
					className='btn btn-primary btn-xs rounded-full'
					onClick={() =>
						updateQuery({
							page: '1',
							limit: '10',
							traitCategory,
						})
					}
				>
					{TraitCategoryDisplay[traitCategory]}
				</button>
			))}
		</div>
	);
};

export default TraitCategories;
