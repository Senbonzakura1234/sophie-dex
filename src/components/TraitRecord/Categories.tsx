import { categoryIconMap } from '@root/constants';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { CategoryEnum } from '@root/types/common/zod';
import { traitCategoryList } from '@root/types/model';
import { convertCode } from '@root/utils/common';

type CategoriesProps = { categories: CategoryEnum[] };

function Categories({ categories }: CategoriesProps) {
	const { securedQuery, updateQuery } = useSecuredRouter();

	const isClickAble = (code: CategoryEnum) => categories.includes(code);

	return (
		<nav className='mt-auto flex max-w-fit flex-wrap gap-2 2xl:pt-3'>
			{traitCategoryList.map((category, key) => (
				<div className='capitalize 2xl:tooltip 2xl:tooltip-bottom' data-tip={convertCode(category)} key={key}>
					<button
						disabled={!isClickAble(category)}
						aria-label={`Filter by ${convertCode(category)}`}
						role='navigation'
						className={`btn-sm btn rounded-3xl 2xl:btn-md ${
							securedQuery.category !== category && isClickAble(category) ? 'btn-primary text-slate-50' : ''
						} ${securedQuery.category === category ? 'btn-accent text-slate-50' : ''}`}
						onClick={() => {
							if (isClickAble(category))
								updateQuery({ category: securedQuery.category === category ? null : category }, 'trait');
						}}
					>
						<div className={`w-5 font-atelier text-lg 2xl:w-6 2xl:text-xl ${categoryIconMap[category]}`} />
					</button>
				</div>
			))}
		</nav>
	);
}

export default Categories;
