import localFont from '@next/font/local';
import type { TRAIT_CATEGORY } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { TraitCategoryMap } from '@root/types/model';
import clsx from 'clsx';
import type { FC } from 'react';
import { useCallback } from 'react';

const AtelierFont = localFont({ src: '../../../assets/fonts/Atelier.woff2' });

const TraitCategories: FC<{
	traitCategories: TRAIT_CATEGORY[];
}> = ({ traitCategories }) => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const isClickAble = useCallback(
		(code: TRAIT_CATEGORY) => traitCategories.includes(code) && isReady,
		[isReady, traitCategories],
	);

	return (
		<div className='mb-7 flex max-w-fit flex-wrap gap-2'>
			{TraitCategoryMap.map(({ className, code, name }, key) => (
				<div
					className={clsx(
						{
							'xl:tooltip-secondary': securedQuery.traitCategory === code && isClickAble(code),
							'xl:tooltip-primary': securedQuery.traitCategory !== code && isClickAble(code),
						},
						'xl:tooltip xl:tooltip-bottom',
					)}
					data-tip={name}
					key={key}
				>
					<button
						disabled={!isClickAble(code)}
						className={clsx(
							{
								'btn-secondary': securedQuery.traitCategory === code && isClickAble(code),
								'btn-primary': securedQuery.traitCategory !== code && isClickAble(code),
							},
							'btn btn-sm xl:btn-md',
						)}
						onClick={() => {
							if (isClickAble(code))
								updateQuery({
									page: '1',
									limit: '10',
									traitCategory: securedQuery.traitCategory === code ? null : code,
								});
						}}
					>
						<div style={AtelierFont.style} className={clsx(className, 'w-5 text-lg xl:w-6 xl:text-xl')}></div>
					</button>
				</div>
			))}
		</div>
	);
};

export default TraitCategories;
