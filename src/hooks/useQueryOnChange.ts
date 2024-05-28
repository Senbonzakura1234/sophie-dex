import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { SearchQuery } from '@root/types/common/zod';
import { arrayInclude } from '@root/utils/common';
import { useCallback, useMemo } from 'react';
import { useUpdateQuery } from './useUpdateQuery';

type SelectQueryKey = keyof Pick<
	SearchQuery,
	'category' | 'color' | 'rumorType' | 'recipeType' | 'page' | 'bookmarked'
>;

export function useQueryOnChange<const V extends SearchQuery[SelectQueryKey]>(
	key: SelectQueryKey,
	list: Array<SelectOptionItem<V>>,
	defaultValue: SelectOptionItem<V>
): Readonly<[SelectOptionItem<V>, SetSelectOptionItem<V>]> {
	const { searchQuery, updateQuery, moduleId } = useUpdateQuery();

	const selectList = useMemo(() => {
		if (key !== 'category' || moduleId !== 'trait') return list;
		return list.filter(c => !arrayInclude(['MATERIAL', 'KEY_ITEM', 'BOOK', 'MACHINE'], c.value));
	}, [key, list, moduleId]);

	const selectOptionItem: SelectOptionItem<V> = useMemo(() => {
		const defVal = (
			key === 'page' ? { value: searchQuery[key] || null, label: `Page ${searchQuery[key] || 1}` } : defaultValue
		) as SelectOptionItem<V>;

		return selectList.find(({ value }) => (value?.toString() || null) === searchQuery[key]) ?? defVal;
	}, [defaultValue, key, searchQuery, selectList]);

	const setSelectOptionItem: SetSelectOptionItem<V> = useCallback(
		s => {
			const cur = typeof s === 'function' ? s(defaultValue) : s;

			if (cur.value !== selectOptionItem.value) updateQuery({ [key]: cur.value });
		},
		[defaultValue, key, selectOptionItem.value, updateQuery]
	);

	return [selectOptionItem, setSelectOptionItem] as const;
}
