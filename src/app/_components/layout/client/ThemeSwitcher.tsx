'use client';

import SelectOption from '@components/common/server/SelectOption';
import useDispatch from '@root/hooks/useDispatch';
import useSelector from '@root/hooks/useSelector';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { daisyUIThemeList } from '@root/types/model';
import { setCookie } from 'cookies-next';
import { useCallback, useMemo } from 'react';

const themeSelectList = daisyUIThemeList.map(theme => ({
	value: theme,
	icon: (
		<span
			aria-hidden
			key={theme}
			className='flex aspect-square h-4 flex-row gap-[2px] overflow-hidden rounded border-[2px] border-solid border-base-content bg-base-content shadow-lg shadow-base-content/30 xl:h-5'
		>
			<span aria-hidden className='grow bg-primary' data-theme={theme} />
			<span aria-hidden className='grow bg-accent' data-theme={theme} />
			<span aria-hidden className='grow bg-secondary' data-theme={theme} />
		</span>
	),
})) satisfies Array<SelectOptionItem<DaisyUIThemeEnum>>;

export default function ThemeSwitcher() {
	const { theme } = useSelector();
	const dispatch = useDispatch();

	const themeSelect = useMemo(() => themeSelectList.find(t => t.value === theme)!, [theme]);

	const setThemeSelected: SetSelectOptionItem<DaisyUIThemeEnum> = useCallback(
		s => {
			const cur = typeof s === 'function' ? s(themeSelect) : s;

			if (cur.value === themeSelect.value) return;

			setCookie('theme', cur.value!, { path: '/' });
			dispatch({ type: 'SET_THEME', theme: cur.value! });
		},
		[dispatch, themeSelect],
	);

	return (
		<SelectOption<DaisyUIThemeEnum>
			list={themeSelectList}
			setValue={setThemeSelected}
			value={themeSelect}
			className='absolute right-3 top-3 z-30 min-w-[8.5rem]'
			useCustomIcon
			customLabelText='Theme'
		/>
	);
}
