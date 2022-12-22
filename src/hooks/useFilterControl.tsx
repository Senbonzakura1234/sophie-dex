import {
	categorySelectList,
	ColorSelectList,
	defaultSelect,
	RelatedCategorySelectList,
} from '@root/components/SubComponent';
import type { cateSelected, ColorSelected, FilterData, RelatedCateSelected, SetFilterData } from '@root/types/common';
import { isEqualWithNullish } from '@root/utils/helper';
import { useEffect, useMemo, useState } from 'react';

import { useSearchQuery } from './useSecuredRouter';

export const useFilterControl = (): {
	filterData: FilterData;
	setFilterData: SetFilterData;
	isCanApplyFilter: boolean;
} => {
	const { securedQuery, isReady } = useSearchQuery();

	const defaultCate = useMemo(
		() => categorySelectList.find(({ value }) => value === securedQuery.category) ?? defaultSelect,
		[securedQuery.category],
	);

	const defaultColor = useMemo(
		() => ColorSelectList.find(({ value }) => value === securedQuery.color) ?? defaultSelect,
		[securedQuery.color],
	);

	const defaultRelatedCate = useMemo(
		() => RelatedCategorySelectList.find(({ value }) => value === securedQuery.relatedCategory) ?? defaultSelect,
		[securedQuery.relatedCategory],
	);

	const [cateSelected, setCateSelected] = useState<cateSelected>(defaultCate);

	const [colorSelected, setColorSelected] = useState<ColorSelected>(defaultColor);

	const [relatedCateSelected, setRelatedCateSelected] = useState<RelatedCateSelected>(defaultRelatedCate);

	const isCateSelectValid = useMemo(
		() => !isEqualWithNullish(securedQuery.category, cateSelected.value),
		[cateSelected.value, securedQuery.category],
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
		() => isReady && (isCateSelectValid || isColorSelectValid || isRelatedCateSelectValid),
		[isColorSelectValid, isRelatedCateSelectValid, isReady, isCateSelectValid],
	);

	useEffect(() => {
		setCateSelected(() => defaultCate);
	}, [defaultCate]);

	useEffect(() => {
		setColorSelected(() => defaultColor);
	}, [defaultColor]);

	return {
		setFilterData: { setCateSelected, setColorSelected, setRelatedCateSelected },
		filterData: { cateSelected: cateSelected, colorSelected, relatedCateSelected: relatedCateSelected },
		isCanApplyFilter,
	};
};
