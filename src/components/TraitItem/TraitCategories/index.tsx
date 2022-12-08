import localFont from '@next/font/local';
import type { TRAIT_CATEGORY } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { TraitCategoryMap } from '@root/types/model';
import clsx from 'clsx';
import type { FC } from 'react';

const AtelierFont = localFont({ src: '../../../assets/fonts/Atelier.woff2' });

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
						'btn gap-2 rounded-full capitalize',
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
						style={AtelierFont.style}
						className={clsx(
							{
								'badge-error': securedQuery.traitCategory !== traitCategory,
							},
							'badge badge-lg',
						)}
					>
						<div className={clsx(TraitCategoryMap[traitCategory].className, 'text-lg')}></div>
					</div>
					{TraitCategoryMap[traitCategory].name}
				</button>
			))}
		</div>
	);
};

export default TraitCategories;
