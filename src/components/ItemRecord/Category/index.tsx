import { categoryMap } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { CategoryProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const Category: FC<CategoryProps> = ({ category }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(
		() => !isReady || securedQuery.category === category,
		[category, isReady, securedQuery.category],
	);

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold !shadow-none'>Category: </div>
			<button
				onClick={() => {
					if (!isBtnDisabled) updateQuery({ category, page: null, limit: null });
				}}
				role='navigation'
				disabled={!isReady}
				className={clsx(
					{
						'!no-animation !cursor-default !border-slate-300 !bg-slate-300 text-slate-900': isBtnDisabled,
					},
					'btn btn-xs gap-1 font-extrabold capitalize shadow-md shadow-slate-600',
				)}
			>
				<div className={clsx('font-atelier', categoryMap.get(category)?.className)}></div>
				{categoryMap.get(category)?.name}
			</button>
		</div>
	);
};

export default Category;
