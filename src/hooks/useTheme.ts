import { KEY_BINDING_DICTIONARY } from '@root/constants/common';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import { useCallback, useMemo } from 'react';
import { useCookies } from './useCookies';

export function useTheme<const V extends string>(
	defaultTheme: V,
	themeSelectList: Array<SelectOptionItem<V>>,
): Readonly<[SelectOptionItem<V>, SetSelectOptionItem<V>]> {
	const [theme, setTheme] = useCookies<V>(KEY_BINDING_DICTIONARY.THEME_COOKIE_KEY, defaultTheme);

	const themeSelect = useMemo(() => themeSelectList.find(t => t.value === theme)!, [theme, themeSelectList]);

	const setThemeSelected: SetSelectOptionItem<V> = useCallback(
		s => {
			const cur = typeof s === 'function' ? s(themeSelect) : s;

			if (cur.value === themeSelect.value) return;

			if (typeof window !== 'undefined') window.document.body.setAttribute('data-theme', cur.value!);

			setTheme(cur.value!, { path: '/' });
		},
		[setTheme, themeSelect],
	);

	return [themeSelect, setThemeSelected] as const;
}
