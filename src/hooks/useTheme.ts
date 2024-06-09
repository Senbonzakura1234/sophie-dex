import { KEY_BINDING_DICTIONARY } from '@root/constants/common';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import { useCookies } from './useCookies';

export function useTheme<const V extends string>(
	defaultTheme: V,
	themeSelectList: Array<SelectOptionItem<V>>
): Readonly<[SelectOptionItem<V>, SetSelectOptionItem<V>]> {
	const [theme, setTheme] = useCookies<V>(KEY_BINDING_DICTIONARY.THEME_COOKIE_KEY, defaultTheme);

	const themeSelect = themeSelectList.find(t => t.value === theme)!;

	const setThemeSelected: SetSelectOptionItem<V> = s => {
		const cur = typeof s === 'function' ? s(themeSelect) : s;

		if (cur.value === themeSelect.value) return;

		if (typeof window !== 'undefined') window.document.body.setAttribute('data-theme', cur.value!);

		setTheme(cur.value!, { path: '/' });
	};

	return [themeSelect, setThemeSelected] as const;
}
