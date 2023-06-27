import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RelatedCategoryEnum } from '@root/types/common/zod';

type RelatedCategoriesProps = { relatedCategories: RelatedCategoryEnum[] };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { isRouterReady, updateQuery, securedQuery } = useSearchQuery();

	const formatRelateCategory = (r: RelatedCategoryEnum) => r.replaceAll('_', ' ').toLocaleLowerCase();

	const checkBtnDisable = (r: RelatedCategoryEnum) => !isRouterReady || r === securedQuery.relatedCategory;

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((relatedCategory, k) => (
				<button
					disabled={checkBtnDisable(relatedCategory)}
					aria-label={formatRelateCategory(relatedCategory)}
					className={`text-xs capitalize ${
						!checkBtnDisable(relatedCategory) ? 'link-hover link italic text-neutral/90' : 'font-semibold'
					}`}
					key={k}
					onClick={() => {
						if (!checkBtnDisable(relatedCategory)) updateQuery({ relatedCategory }, 'item');
					}}
					role='navigation'
				>
					{formatRelateCategory(relatedCategory)}
				</button>
			))}
		</div>
	);
}
