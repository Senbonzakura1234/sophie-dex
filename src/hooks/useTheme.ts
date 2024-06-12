import { KEY_BINDING_DICTIONARY } from '@root/constants/common';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import { darkThemesList } from '@root/types/common/zod/generic';
import { arrayInclude } from '@root/utils/common';
import { useCookies } from './useCookies';

export function useTheme<const V extends string>(
	defaultTheme: V,
	themeSelectList: Array<SelectOptionItem<V>>
): Readonly<[SelectOptionItem<V>, SetSelectOptionItem<V>]> {
	const [theme, setTheme] = useCookies<V>(KEY_BINDING_DICTIONARY.THEME_COOKIE_KEY, defaultTheme);

	const themeSelect = themeSelectList.find(t => t.value === theme)!;

	const setThemeSelected: SetSelectOptionItem<V> = s => {
		const next = typeof s === 'function' ? s(themeSelect) : s;

		if (next.value === themeSelect.value) return;

		if (typeof window !== 'undefined') {
			const isDarkTheme = arrayInclude(darkThemesList, next.value || 'fantasy');

			window.document.body.setAttribute('data-theme', next.value!);
			window.document.body.classList[isDarkTheme ? 'add' : 'remove']('dark');
		}

		setTheme(next.value!, { path: '/' });
	};

	return [themeSelect, setThemeSelected] as const;
}
