import type { TRAIT_CATEGORY } from '@prisma/client';
import { defaultTraitCategorySelect, TraitCategorySelectList } from '@root/components/SubComponent';
import type { FilterData, SelectOptionItem, SetFilterData } from '@root/types/common';
import { useEffect, useMemo, useState } from 'react';

export const useFilterControl = ({
	traitCategory,
	page,
}: {
	traitCategory: TRAIT_CATEGORY | null | undefined;
	page: string;
}): { filterData: FilterData; setFilterData: SetFilterData } => {
	const defaultTraitCate = useMemo(() => {
		return TraitCategorySelectList.find(({ value }) => value === traitCategory) ?? defaultTraitCategorySelect;
	}, [traitCategory]);

	const [traitCateSelected, setTraitCateSelected] =
		useState<SelectOptionItem<TRAIT_CATEGORY | null>>(defaultTraitCate);

	const [goToPage, setGoToPage] = useState<SelectOptionItem<string>>({
		value: page,
		label: `Page ${page}`,
	});

	useEffect(() => {
		setTraitCateSelected(() => defaultTraitCate);
	}, [defaultTraitCate]);

	useEffect(() => {
		setGoToPage(() => ({
			value: page,
			label: `Page ${page}`,
		}));
	}, [page]);

	return {
		setFilterData: { setTraitCateSelected, setGoToPage },
		filterData: { traitCateSelected, goToPage },
	};
};
