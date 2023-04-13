import type { CATEGORY } from '@prisma/client';
import { categoryMap, hideCategoryOnTrait } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import clsx from 'clsx';
import type { FC } from 'react';
import { useCallback } from 'react';

type CategoriesProps = { categories: CATEGORY[] };

const Categories: FC<CategoriesProps> = ({ categories }) => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const isClickAble = useCallback((code: CATEGORY) => categories.includes(code) && isReady, [isReady, categories]);

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
								'btn btn-sm 2xl:btn-md rounded-3xl',
							)}
							onClick={() => {
								if (isClickAble(code))
									updateQuery({ page: null, category: securedQuery.category === code ? null : code });
							}}
						>
							<div className={clsx(className, 'font-atelier w-5 text-lg 2xl:w-6 2xl:text-xl')} />
						</button>
					</div>
				))}
		</nav>
	);
};

export default Categories;
