import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import { useCallback, useMemo } from 'react';

export function useQueryOnChange<V>(
	defaultValue: SelectOptionItem<V>,
	onChange: (value: V) => void,
): readonly [SelectOptionItem<V>, SetSelectOptionItem<V>] {
	const state = useMemo(() => defaultValue, [defaultValue]);

	const setState: SetSelectOptionItem<V> = useCallback(
		s => {
			const cur = typeof s === 'function' ? s(state) : s;

			if (cur.value !== state.value) onChange(cur.value);
		},
		[state, onChange],
	);

	return [state, setState] as const;
}
