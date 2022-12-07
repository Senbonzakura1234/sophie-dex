import type { TRAIT_CATEGORY } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { TraitCategoryMap } from '@root/types/model';
import clsx from 'clsx';
import type { FC } from 'react';

const TraitCategories: FC<{
	traitCategories: TRAIT_CATEGORY[];
}> = ({ traitCategories }) => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	return (
		<div className='flex max-w-fit flex-wrap gap-2 py-2'>
			{traitCategories.map((traitCategory, key) => (
				<button
					disabled={!isReady}
					key={key}
					className={clsx(
						{
							'btn-primary': securedQuery.traitCategory === traitCategory,
						},
						'btn btn-sm gap-2 rounded-full capitalize',
					)}
					onClick={() =>
						updateQuery({
							page: '1',
							limit: '10',
							traitCategory: securedQuery.traitCategory === traitCategory ? null : traitCategory,
						})
					}
				>
					<div
						className={clsx(
							{
								'badge-error': securedQuery.traitCategory !== traitCategory,
							},
							'badge',
						)}
					>
						<div className={TraitCategoryMap[traitCategory].className}></div>
					</div>
					{TraitCategoryMap[traitCategory].name}
				</button>
			))}
		</div>
	);
};

export default TraitCategories;
