import { categoryMap } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { CategoryEnum } from '@root/types/common/zod';
import clsx from 'clsx';
import { useMemo } from 'react';

type CategoryProps = { category: CategoryEnum };

export default function Category({ category }: CategoryProps) {
	const { isRouterReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(
		() => !isRouterReady || securedQuery.category === category,
		[category, isRouterReady, securedQuery.category],
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
					disabled={!isRouterReady}
					className={clsx(
						{
							'!no-animation !cursor-default !border-slate-300 !bg-slate-300 !text-slate-900': isBtnDisabled,
						},
						'btn-accent btn-xs btn gap-1 font-extrabold capitalize',
					)}
				>
					<div className={clsx('font-atelier', categoryMap.get(category)?.className)}></div>
					{categoryMap.get(category)?.name}
				</button>
			</div>

			<div
				className={clsx(
					'absolute bottom-10 right-10 w-10 text-center font-atelier text-lg text-slate-50 md:text-4xl',
					categoryMap.get(category)?.className,
				)}
			></div>
		</>
	);
}
