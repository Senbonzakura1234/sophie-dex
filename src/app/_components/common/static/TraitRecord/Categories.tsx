'use client';

import QueryLink from '@components/common/dynamic/QueryLink';
import { categoryIconMap } from '@root/constants/common';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { CategoryEnum } from '@root/types/common/zod/generic';
import { cn, convertCode } from '@root/utils/common';

type Props = Readonly<{ categories: Array<CategoryEnum> }>;

function Categories({ categories }: Props) {
	const { searchQuery } = useSearchQuery();

	return (
		<nav className='mt-auto flex max-w-fit flex-wrap gap-2 2xl:pt-3'>
			{categories.map((category, key) => {
				const isActive = category === searchQuery.category;

				return (
					<div className='capitalize 2xl:tooltip 2xl:tooltip-bottom' data-tip={convertCode(category)} key={key}>
						<QueryLink
							aria-label={`Filter by ${convertCode(category)}`}
							href={{ query: { category } }}
							className={cn(
								'btn btn-sm shadow-md',
								isActive ? 'btn-accent shadow-current dark:shadow-accent' : 'btn-primary shadow-primary'
							)}
							isActive={isActive}
							searchQuery={searchQuery}
							resetPage
						>
							<div className={cn('w-5 font-atelier text-lg', categoryIconMap[category])} />
						</QueryLink>
					</div>
				);
			})}
		</nav>
	);
}

export default Categories;
