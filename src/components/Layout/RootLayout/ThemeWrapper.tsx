import { useLocalStorage } from '@root/hooks/useLocalStorage';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/tailwind';

type ThemeWrapperProps = ChildrenProps;

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
	const [theme] = useLocalStorage<DaisyUIThemeEnum>('theme', 'fantasy');

	return <main data-theme={theme}>{children}</main>;
}
