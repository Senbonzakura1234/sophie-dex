import {
	ColorSelectList,
	defaultSelect,
	RelatedCategorySelectList,
	TraitCategorySelectList,
} from '@root/components/SubComponent';
import type {
	ColorSelected,
	FilterData,
	RelatedCateSelected,
	SetFilterData,
	TraitCateSelected,
} from '@root/types/common';
import { isEqualWithNullish } from '@root/utils/helper';
import { useEffect, useMemo, useState } from 'react';

import { useSearchQuery } from './useSecuredRouter';

export const useFilterControl = (): {
	filterData: FilterData;
	setFilterData: SetFilterData;
	isCanApplyFilter: boolean;
} => {
	const { securedQuery, isReady } = useSearchQuery();

	const defaultTraitCate = useMemo(
		() => TraitCategorySelectList.find(({ value }) => value === securedQuery.traitCategory) ?? defaultSelect,
		[securedQuery.traitCategory],
	);

	const defaultColor = useMemo(
		() => ColorSelectList.find(({ value }) => value === securedQuery.color) ?? defaultSelect,
		[securedQuery.color],
	);

	const defaultRelatedCate = useMemo(
		() => RelatedCategorySelectList.find(({ value }) => value === securedQuery.relatedCategory) ?? defaultSelect,
		[securedQuery.relatedCategory],
	);

	const [traitCateSelected, setTraitCateSelected] = useState<TraitCateSelected>(defaultTraitCate);

	const [colorSelected, setColorSelected] = useState<ColorSelected>(defaultColor);

	const [relatedCateSelected, setrelatedCateSelected] = useState<RelatedCateSelected>(defaultRelatedCate);

	const isTraitCateSelectValid = useMemo(
		() => !isEqualWithNullish(securedQuery.traitCategory, traitCateSelected.value),
		[traitCateSelected.value, securedQuery.traitCategory],
	);

	const isColorSelectValid = useMemo(
		() => !isEqualWithNullish(securedQuery.color, colorSelected.value),
		[colorSelected.value, securedQuery.color],
	);

	const isRelatedCateSelectValid = useMemo(
		() => !isEqualWithNullish(securedQuery.relatedCategory, relatedCateSelected.value),
		[relatedCateSelected.value, securedQuery.relatedCategory],
	);

	const isCanApplyFilter = useMemo(
		() => isReady && (isTraitCateSelectValid || isColorSelectValid || isRelatedCateSelectValid),
		[isColorSelectValid, isRelatedCateSelectValid, isReady, isTraitCateSelectValid],
	);

	useEffect(() => {
		setTraitCateSelected(() => defaultTraitCate);
	}, [defaultTraitCate]);

	useEffect(() => {
		setColorSelected(() => defaultColor);
	}, [defaultColor]);

	return {
		setFilterData: { setTraitCateSelected, setColorSelected, setrelatedCateSelected },
		filterData: { traitCateSelected, colorSelected, relatedCateSelected: relatedCateSelected },
		isCanApplyFilter,
	};
};
