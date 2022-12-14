import type { TRAIT_CATEGORY } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { TraitCategoriesProps } from '@root/types/common/props';
import { TraitCategoryMap } from '@root/types/model';
import clsx from 'clsx';
import type { FC } from 'react';
import { useCallback } from 'react';

const TraitCategories: FC<TraitCategoriesProps> = ({ traitCategories }) => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const isClickAble = useCallback(
		(code: TRAIT_CATEGORY) => traitCategories.includes(code) && isReady,
		[isReady, traitCategories],
	);

	return (
		<nav className='mb-7 flex max-w-fit flex-wrap gap-2'>
			{TraitCategoryMap.map(({ className, code, name }, key) => (
				<div
					className={clsx(
						{
							'2xl:tooltip-secondary': securedQuery.traitCategory === code && isClickAble(code),
							'2xl:tooltip-primary': securedQuery.traitCategory !== code && isClickAble(code),
						},
						'2xl:tooltip 2xl:tooltip-bottom',
					)}
					data-tip={name}
					key={key}
				>
					<button
						disabled={!isClickAble(code)}
						className={clsx(
							{
								'btn-secondary': securedQuery.traitCategory === code && isClickAble(code),
								'btn-primary': securedQuery.traitCategory !== code && isClickAble(code),
							},
							'btn btn-sm 2xl:btn-md',
						)}
						onClick={() => {
							if (isClickAble(code))
								updateQuery({
									page: '1',
									limit: defaultLimit,
									traitCategory: securedQuery.traitCategory === code ? null : code,
								});
						}}
					>
						<div className={clsx(className, 'font-atelier w-5 text-lg 2xl:w-6 2xl:text-xl')}></div>
					</button>
				</div>
			))}
		</nav>
	);
};

export default TraitCategories;
