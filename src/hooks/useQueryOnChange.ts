import { useUpdateQuery } from '@root/hooks/useUpdateQuery';
import type { ImproveExclude, SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { SearchQuery } from '@root/types/common/zod';
import { arrayInclude } from '@root/utils/common';
import { useCallback, useMemo } from 'react';

type SelectQueryKey = ImproveExclude<keyof SearchQuery, 'direction' | 'relatedCategory' | 'search' | 'sortBy'>;

type Props<V extends SearchQuery[SelectQueryKey]> = Readonly<{
	filterKey: SelectQueryKey;
	filterList: Array<SelectOptionItem<V>>;
	filterDefValue: SelectOptionItem<V>;
}>;

export function useQueryOnChange<const V extends SearchQuery[SelectQueryKey]>({
	filterDefValue,
	filterKey,
	filterList
}: Props<V>): Readonly<[SelectOptionItem<V>, SetSelectOptionItem<V>]> {
	const { searchQuery, updateQuery, moduleId } = useUpdateQuery();

	const selectList = useMemo(() => {
		if (filterKey !== 'category' || moduleId !== 'trait') return filterList;
		return filterList.filter(c => !arrayInclude(['MATERIAL', 'KEY_ITEM', 'BOOK', 'MACHINE'], c.value));
	}, [filterKey, filterList, moduleId]);

	const selectOptionItem: SelectOptionItem<V> = useMemo(() => {
		const defVal = (
			filterKey === 'page'
				? { value: searchQuery[filterKey] || null, label: `Page ${searchQuery[filterKey] || 1}` }
				: filterDefValue
		) as SelectOptionItem<V>;

		return selectList.find(({ value }) => (value?.toString() || null) === searchQuery[filterKey]) ?? defVal;
	}, [filterDefValue, filterKey, searchQuery, selectList]);

	const setSelectOptionItem: SetSelectOptionItem<V> = useCallback(
		s => {
			const cur = typeof s === 'function' ? s(filterDefValue) : s;

			if (cur.value !== selectOptionItem.value) updateQuery({ [filterKey]: cur.value });
		},
		[filterDefValue, filterKey, selectOptionItem.value, updateQuery]
	);

	return [selectOptionItem, setSelectOptionItem] as const;
}
