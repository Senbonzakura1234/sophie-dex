import type { COLOR, ITEM_CATEGORY, TRAIT_CATEGORY } from '@prisma/client';
import {
	ColorSelectList,
	defaultSelect,
	ItemCategorySelectList,
	TraitCategorySelectList,
} from '@root/components/SubComponent';
import type { FilterData, SelectOptionItem, SetFilterData } from '@root/types/common';
import { isEqualWithNullish } from '@root/utils/helper';
import { useEffect, useMemo, useState } from 'react';

import { useSearchQuery } from './useSearchQuery';

export const useFilterControl = (): {
	filterData: FilterData;
	setFilterData: SetFilterData;
	isCanApplyFilter: boolean;
} => {
	const { securedQuery, isReady } = useSearchQuery();

	const defaultTraitCate = useMemo(() => {
		return TraitCategorySelectList.find(({ value }) => value === securedQuery.traitCategory) ?? defaultSelect;
	}, [securedQuery.traitCategory]);

	const defaultColor = useMemo(() => {
		return ColorSelectList.find(({ value }) => value === securedQuery.color) ?? defaultSelect;
	}, [securedQuery.color]);

	const defaultItemCate = useMemo(() => {
		return ItemCategorySelectList.find(({ value }) => value === securedQuery.itemCategory) ?? defaultSelect;
	}, [securedQuery.itemCategory]);

	const [traitCateSelected, setTraitCateSelected] =
		useState<SelectOptionItem<TRAIT_CATEGORY | null>>(defaultTraitCate);

	const [colorSelected, setColorSelected] = useState<SelectOptionItem<COLOR | null>>(defaultColor);

	const [itemCateSelected, setItemCateSelected] = useState<SelectOptionItem<ITEM_CATEGORY | null>>(defaultItemCate);

	const isTraitCateSelectValid = useMemo(
		() => !isEqualWithNullish(securedQuery.traitCategory, traitCateSelected.value),
		[traitCateSelected.value, securedQuery.traitCategory],
	);

	const isColorSelectValid = useMemo(
		() => !isEqualWithNullish(securedQuery.color, colorSelected.value),
		[colorSelected.value, securedQuery.color],
	);

	const isItemCateSelectValid = useMemo(
		() => !isEqualWithNullish(securedQuery.itemCategory, itemCateSelected.value),
		[itemCateSelected.value, securedQuery.itemCategory],
	);

	const isCanApplyFilter = useMemo(
		() => isReady && (isTraitCateSelectValid || isColorSelectValid || isItemCateSelectValid),
		[isColorSelectValid, isItemCateSelectValid, isReady, isTraitCateSelectValid],
	);

	useEffect(() => {
		setTraitCateSelected(() => defaultTraitCate);
	}, [defaultTraitCate]);

	useEffect(() => {
		setColorSelected(() => defaultColor);
	}, [defaultColor]);

	return {
		setFilterData: { setTraitCateSelected, setColorSelected, setItemCateSelected },
		filterData: { traitCateSelected, colorSelected, itemCateSelected },
		isCanApplyFilter,
	};
};
