'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { arrayInclude } from '@root/utils/common';

export default function ThemeWrapper({ children }: ChildrenProps) {
	const { theme } = useSelector();
	return (
		<main
			className={arrayInclude(['forest', 'synthwave'] satisfies Array<DaisyUIThemeEnum>, theme) ? 'dark' : ''}
			data-theme={theme}
		>
			{children}
		</main>
	);
}
