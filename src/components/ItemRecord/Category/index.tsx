import type { CATEGORY } from '@prisma/client';
import { categoryMap } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

type CategoryProps = { category: CATEGORY };

const Category: FC<CategoryProps> = ({ category }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(
		() => !isReady || securedQuery.category === category,
		[category, isReady, securedQuery.category],
	);

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div className='font-bold !shadow-none'>Category: </div>
				<button
					onClick={() => {
						if (!isBtnDisabled) updateQuery({ category, page: null });
					}}
					aria-label={`Filter ${categoryMap.get(category)?.name} Item`}
					role='navigation'
					disabled={!isReady}
					className={clsx(
						{
							'!no-animation !cursor-default !border-slate-300 !bg-slate-300 !text-slate-900': isBtnDisabled,
						},
						'btn btn-xs btn-accent gap-1 font-extrabold capitalize',
					)}
				>
					<div className={clsx('font-atelier', categoryMap.get(category)?.className)}></div>
					{categoryMap.get(category)?.name}
				</button>
			</div>

			<div
				className={clsx(
					'font-atelier absolute bottom-10 right-10 w-10 text-center text-lg text-slate-50 md:text-4xl',
					categoryMap.get(category)?.className,
				)}
			></div>
		</>
	);
};

export default Category;
