'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { arrayInclude, cn } from '@root/utils/common';

type Props = ChildrenProps & ClassNameProps;

export default function ThemeWrapper({ children, className }: Props) {
	const { theme } = useSelector();

	return (
		<body
			className={cn(
				arrayInclude(['forest', 'synthwave'] satisfies Array<DaisyUIThemeEnum>, theme) ? 'dark' : '',
				className,
			)}
			data-theme={theme}
		>
			{children}
		</body>
	);
}
