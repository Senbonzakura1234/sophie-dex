import { categoryIconMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { CategoryEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';
import QueryLink from '../ui/static/QueryLink';

type CategoriesProps = { categories: CategoryEnum[] };

function Categories({ categories }: CategoriesProps) {
	const { searchQuery } = useSearchQuery();

	return (
		<nav className='mt-auto flex max-w-fit flex-wrap gap-2 2xl:pt-3'>
			{categories.map((category, key) => {
				const isActive = searchQuery.category === category;

				return (
					<div className='capitalize 2xl:tooltip 2xl:tooltip-bottom' data-tip={convertCode(category)} key={key}>
						<QueryLink
							aria-label={`Filter by ${convertCode(category)}`}
							href={{ query: { category } }}
							className={`btn btn-sm rounded-2xl  ${isActive ? 'btn-accent text-slate-50' : 'btn-primary'}`}
							isActive={isActive}
							resetPage
						>
							<div className={`w-5 font-atelier text-lg ${categoryIconMap[category]}`} />
						</QueryLink>
					</div>
				);
			})}
		</nav>
	);
}

export default Categories;
