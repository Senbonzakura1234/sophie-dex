import SelectOption from '@root/components/ui/static/SelectOption';
import { daisyUIThemeList } from '@root/constants';
import { useLocalStorage } from '@root/hooks/useLocalStorage';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { DaisyUIThemeEnum } from '@root/types/common/tailwind';
import { useCallback } from 'react';

const defaultTheme = {
	value: 'fantasy',
	icon: (
		<span
			aria-hidden
			key='fantasy'
			className='flex aspect-square h-4 flex-row gap-[2px] overflow-hidden rounded border-[2px] border-solid border-base-content bg-base-content xl:h-5'
		>
			<span aria-hidden className='grow bg-primary' data-theme='fantasy' />
			<span aria-hidden className='grow bg-accent' data-theme='fantasy' />
			<span aria-hidden className='grow bg-secondary' data-theme='fantasy' />
		</span>
	),
} as const satisfies SelectOptionItem<DaisyUIThemeEnum>;

const themeSelectList: Array<SelectOptionItem<DaisyUIThemeEnum>> = [
	...daisyUIThemeList.map(theme => ({
		value: theme,
		icon: (
			<span
				aria-hidden
				key={theme}
				className='flex aspect-square h-4 flex-row gap-[2px] overflow-hidden rounded border-[2px] border-solid border-base-content bg-base-content xl:h-5'
			>
				<span aria-hidden className='grow bg-primary' data-theme={theme} />
				<span aria-hidden className='grow bg-accent' data-theme={theme} />
				<span aria-hidden className='grow bg-secondary' data-theme={theme} />
			</span>
		),
	})),
];

export default function ThemeSwitcher() {
	const [theme, setTheme] = useLocalStorage<DaisyUIThemeEnum>('theme', defaultTheme.value);

	const themeSelect = themeSelectList.find(t => t.value === theme) || defaultTheme;

	const setThemeSelected: SetSelectOptionItem<DaisyUIThemeEnum> = useCallback(
		s => {
			const cur = typeof s === 'function' ? s(themeSelect) : s;

			if (cur.value !== themeSelect.value) setTheme(cur.value || defaultTheme.value);
		},
		[setTheme, themeSelect],
	);

	return (
		<SelectOption<DaisyUIThemeEnum>
			list={themeSelectList}
			setValue={setThemeSelected}
			value={themeSelect}
			className='absolute right-3 top-3 z-30 min-w-[8.5rem]'
			useCustomIcon
			customLabel='Theme'
		/>
	);
}
