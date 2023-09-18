'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';

export default function ThemeWrapper({ children }: ChildrenProps) {
	const { theme } = useSelector();
	return (
		<main
			className={(['forest', 'synthwave'] satisfies Array<DaisyUIThemeEnum>).includes(theme) ? 'dark' : ''}
			data-theme={theme}
		>
			{children}
		</main>
	);
}
