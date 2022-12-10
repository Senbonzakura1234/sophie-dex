import localFont from '@next/font/local';
import type { TRAIT_CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { defaultTraitCategorySelect, TraitCategorySelectList } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { SelectOptionItem } from '@root/types/common';
import type { FC } from 'react';
import { useMemo, useState } from 'react';

const AtelierFont = localFont({ src: '../../../assets/fonts/Atelier.woff2' });

const TraitCategoryFilter: FC = () => {
	const { updateQuery, securedQuery, isReady } = useSearchQuery();

	const defaultTraitCate = useMemo(() => {
		return (
			TraitCategorySelectList.find(({ value }) => value === securedQuery.traitCategory) ?? defaultTraitCategorySelect
		);
	}, [securedQuery.traitCategory]);

	const [traitCateSelected, setTraitCateSelected] =
		useState<SelectOptionItem<TRAIT_CATEGORY | null>>(defaultTraitCate);

	return (
		<div className='flex gap-2'>
			<small className='my-auto text-sm font-bold'>
				<span className='hidden xl:inline'>Trait </span>Category:{' '}
			</small>
			<SelectOption<TRAIT_CATEGORY | null>
				style={AtelierFont.style}
				list={TraitCategorySelectList}
				setValue={setTraitCateSelected}
				value={traitCateSelected}
				className='my-auto w-40'
				useCustomIcon={true}
				withIcon={true}
			/>
			<button
				onClick={() => {
					if (isReady && securedQuery.traitCategory !== traitCateSelected.value)
						updateQuery({ traitCategory: traitCateSelected.value });
				}}
				className='btn btn-xs btn-primary my-auto'
			>
				Filter
			</button>
		</div>
	);
};

export default TraitCategoryFilter;
