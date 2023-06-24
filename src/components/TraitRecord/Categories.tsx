import { categoryMap, hideCategoryOnTrait } from '@root/components/ui/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { CategoryEnum } from '@root/types/common/zod';

type CategoriesProps = { categories: CategoryEnum[] };

function Categories({ categories }: CategoriesProps) {
	const { securedQuery, updateQuery, isRouterReady } = useSearchQuery();

	const isClickAble = (code: CategoryEnum) => categories.includes(code) && isRouterReady;

	return (
		<nav className='mt-auto flex max-w-fit flex-wrap gap-2 2xl:pt-3'>
			{[...categoryMap]
				.filter(([c]) => !hideCategoryOnTrait.includes(c))
				.map(([code, { className, name }], key) => (
					<div className='2xl:tooltip 2xl:tooltip-bottom' data-tip={name} key={key}>
						<button
							disabled={!isClickAble(code)}
							aria-label={`Filter by ${name}`}
							role='navigation'
							className={`btn-sm btn rounded-3xl 2xl:btn-md ${
								securedQuery.category !== code && isClickAble(code) && 'btn-primary text-slate-50'
							}`}
							onClick={() => {
								if (isClickAble(code))
									updateQuery({ category: securedQuery.category === code ? null : code }, 'trait');
							}}
						>
							<div className={`w-5 font-atelier text-lg 2xl:w-6 2xl:text-xl ${className}`} />
						</button>
					</div>
				))}
		</nav>
	);
}

export default Categories;
