import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod/generic';
import { darkThemesList } from '@root/types/common/zod/generic';
import { arrayInclude, cn } from '@root/utils/common';

type Props = Readonly<ChildrenProps & ClassNameProps & { defaultTheme: DaisyUIThemeEnum }>;

export default function ThemeWrapper({ children, className, defaultTheme: theme }: Props) {
	const isDarkTheme = arrayInclude(darkThemesList, theme);

	return (
		<body className={cn(isDarkTheme ? 'dark' : '', className)} data-theme={theme}>
			{children}
		</body>
	);
}
