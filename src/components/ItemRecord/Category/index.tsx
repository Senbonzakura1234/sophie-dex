import { categoryMap } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { CategoryProps } from '@root/types/common/props';
import clsx from 'clsx';
import { FC, useMemo } from 'react';

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
					if (!isBtnDisabled) updateQuery({ category });
				}}
				role='navigation'
				disabled={!isReady}
				className={clsx(
					{
						'!no-animation !cursor-default !bg-slate-300 text-slate-900 !border-slate-300': isBtnDisabled,
					},
					'btn btn-xs font-extrabold capitalize gap-1 shadow-md shadow-slate-600',
				)}
			>
				<div className={clsx('font-atelier', categoryMap.get(category)?.className)}></div>
				{categoryMap.get(category)?.name}
			</button>
		</div>
	);
};

export default Category;
