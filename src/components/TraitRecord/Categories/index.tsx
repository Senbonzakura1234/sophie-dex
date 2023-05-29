import { categoryMap, hideCategoryOnTrait } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { CategoryEnum } from '@root/types/common/zod';
import clsx from 'clsx';
import { useCallback } from 'react';

type CategoriesProps = { categories: CategoryEnum[] };

function Categories({ categories }: CategoriesProps) {
	const { securedQuery, updateQuery, isRouterReady } = useSearchQuery();

	const isClickAble = useCallback(
		(code: CategoryEnum) => categories.includes(code) && isRouterReady,
		[isRouterReady, categories],
	);

	return (
		<nav className='mt-auto flex max-w-fit flex-wrap gap-2 pt-3'>
			{[...categoryMap]
				.filter(([c]) => !hideCategoryOnTrait.includes(c))
				.map(([code, { className, name }], key) => (
					<div className='2xl:tooltip 2xl:tooltip-bottom' data-tip={name} key={key}>
						<button
							disabled={!isClickAble(code)}
							aria-label={`Filter by ${name}`}
							role='navigation'
							className={clsx(
								{
									'btn-primary text-slate-50': securedQuery.category !== code && isClickAble(code),
								},
								'btn-sm btn rounded-3xl 2xl:btn-md',
							)}
							onClick={() => {
								if (isClickAble(code))
									updateQuery({ page: null, category: securedQuery.category === code ? null : code });
							}}
						>
							<div className={clsx(className, 'w-5 font-atelier text-lg 2xl:w-6 2xl:text-xl')} />
						</button>
					</div>
				))}
		</nav>
	);
}

export default Categories;
