import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod/generic';
import { arrayInclude, cn } from '@root/utils/common';

type Props = ChildrenProps & ClassNameProps & { defaultTheme: DaisyUIThemeEnum };

export default function ThemeWrapper({ children, className, defaultTheme: theme }: Props) {
	return (
		<body
			className={cn(
				arrayInclude(['forest', 'synthwave'] satisfies Array<DaisyUIThemeEnum>, theme) ? 'dark' : '',
				className
			)}
			data-theme={theme}
		>
			{children}
		</body>
	);
}
