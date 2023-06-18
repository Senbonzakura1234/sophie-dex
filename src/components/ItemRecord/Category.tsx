import { categoryMap } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { CategoryEnum } from '@root/types/common/zod';

type CategoryProps = { category: CategoryEnum };

export default function Category({ category }: CategoryProps) {
	const { isRouterReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = !isRouterReady || securedQuery.category === category;

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
					className={`btn-accent btn-xs btn gap-1 font-extrabold capitalize ${
						isBtnDisabled && 'no-animation cursor-default !border-slate-300 !bg-slate-300 !text-slate-900'
					}`}
				>
					<div className={`font-atelier ${categoryMap.get(category)?.className}`} />
					{categoryMap.get(category)?.name}
				</button>
			</div>

			<div
				className={`absolute bottom-10 right-10 w-10 text-center font-atelier text-lg text-slate-50 md:text-4xl ${
					categoryMap.get(category)?.className
				}`}
			/>
		</>
	);
}
