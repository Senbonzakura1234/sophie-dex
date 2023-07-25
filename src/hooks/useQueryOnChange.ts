import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { SearchQuery } from '@root/types/common/zod';
import { improvedInclude } from '@root/utils/common';
import { useCallback, useMemo } from 'react';
import { useModuleId } from './useModuleId';
import { useSecuredRouter } from './useSecuredRouter';

type SelectQueryKey = 'category' | 'color' | 'rumorType' | 'recipeType' | 'page';

export function useQueryOnChange<V extends SearchQuery[SelectQueryKey]>(
	key: SelectQueryKey,
	list: SelectOptionItem<V | null>[],
	defaultValue: SelectOptionItem<V | null>,
): Readonly<[SelectOptionItem<V | null>, SetSelectOptionItem<V | null>]> {
	const { securedQuery, updateQuery } = useSecuredRouter();
	const moduleId = useModuleId();

	const selectList = useMemo(() => {
		if (key !== 'category' || moduleId !== 'trait') return list;
		return list.filter(c => !improvedInclude(['MATERIAL', 'KEY_ITEM', 'BOOK', 'MACHINE'], c.value));
	}, [key, list, moduleId]);

	const selectedValue: SelectOptionItem<V | null> = useMemo(
		() => selectList.find(({ value }) => value === securedQuery[key]) ?? defaultValue,
		[defaultValue, key, securedQuery, selectList],
	);

	const setRumorTypeSelected: SetSelectOptionItem<V | null> = useCallback(
		s => {
			const cur = typeof s === 'function' ? s(defaultValue) : s;

			if (cur.value !== selectedValue.value) updateQuery({ [key]: cur.value });
		},
		[defaultValue, key, selectedValue.value, updateQuery],
	);

	return [selectedValue, setRumorTypeSelected] as const;
}
