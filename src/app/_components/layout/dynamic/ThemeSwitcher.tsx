'use client';

import SelectOption from '@components/common/static/SelectOption';
import { useTheme } from '@root/hooks/useTheme';
import type { SelectOptionItem } from '@root/types/common';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { daisyUIThemeList } from '@root/types/model';

type Props = { defaultTheme: DaisyUIThemeEnum };

const themeSelectList = daisyUIThemeList.map(theme => ({
	value: theme,
	icon: (
		<span
			aria-hidden
			key={theme}
			className='flex aspect-square h-4 flex-row gap-[2px] overflow-hidden rounded border-2 border-solid border-base-content bg-base-content shadow-lg shadow-base-content/30 xl:h-5'
		>
			<span aria-hidden className='grow bg-primary' data-theme={theme} />
			<span aria-hidden className='grow bg-accent' data-theme={theme} />
			<span aria-hidden className='grow bg-secondary' data-theme={theme} />
		</span>
	)
})) satisfies Array<SelectOptionItem<DaisyUIThemeEnum>>;

export default function ThemeSwitcher({ defaultTheme }: Props) {
	const [themeSelect, setThemeSelected] = useTheme<DaisyUIThemeEnum>(defaultTheme, themeSelectList);

	return (
		<SelectOption<DaisyUIThemeEnum>
			list={themeSelectList}
			setValue={setThemeSelected}
			value={themeSelect}
			className='min-w-[8.5rem]'
			useCustomIcon
			customLabelText='Theme'
		/>
	);
}
