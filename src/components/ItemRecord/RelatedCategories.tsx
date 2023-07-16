import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { RelatedCategoryEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';

type RelatedCategoriesProps = { relatedCategories: RelatedCategoryEnum[] };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { updateQuery, securedQuery } = useSecuredRouter();

	const checkBtnDisable = (r: RelatedCategoryEnum) => r === securedQuery.relatedCategory;

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((relatedCategory, k) => (
				<button
					disabled={checkBtnDisable(relatedCategory)}
					aria-label={convertCode(relatedCategory)}
					className={`text-xs capitalize ${
						!checkBtnDisable(relatedCategory) ? 'link-hover link italic text-neutral/90' : 'font-semibold'
					}`}
					key={k}
					onClick={() => {
						if (!checkBtnDisable(relatedCategory)) updateQuery({ relatedCategory }, 'item');
					}}
					role='navigation'
				>
					{convertCode(relatedCategory)}
				</button>
			))}
		</div>
	);
}
