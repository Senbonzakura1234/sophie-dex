import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { SearchQuery } from '@root/types/common/zod';
import { improvedInclude } from '@root/utils/common';
import { useCallback, useMemo } from 'react';
import { useUpdateQuery } from './router';

type SelectQueryKey = 'category' | 'color' | 'rumorType' | 'recipeType' | 'page';

export function useQueryOnChange<V extends SearchQuery[SelectQueryKey]>(
	key: SelectQueryKey,
	list: SelectOptionItem<V | null>[],
	defaultValue: SelectOptionItem<V | null>,
): Readonly<[SelectOptionItem<V | null>, SetSelectOptionItem<V | null>]> {
	const { searchQuery, updateQuery, moduleId } = useUpdateQuery();

	const selectList = useMemo(() => {
		if (key !== 'category' || moduleId !== 'trait') return list;
		return list.filter(c => !improvedInclude(['MATERIAL', 'KEY_ITEM', 'BOOK', 'MACHINE'], c.value));
	}, [key, list, moduleId]);

	const selectOptionItem: SelectOptionItem<V | null> = useMemo(() => {
		return selectList.find(({ value }) => (value?.toString() || null) === searchQuery[key]) ?? defaultValue;
	}, [defaultValue, key, searchQuery, selectList]);

	const setSelectOptionItem: SetSelectOptionItem<V | null> = useCallback(
		s => {
			const cur = typeof s === 'function' ? s(defaultValue) : s;

			if (cur.value !== selectOptionItem.value) updateQuery({ [key]: cur.value });
		},
		[defaultValue, key, selectOptionItem.value, updateQuery],
	);

	return [selectOptionItem, setSelectOptionItem] as const;
}
