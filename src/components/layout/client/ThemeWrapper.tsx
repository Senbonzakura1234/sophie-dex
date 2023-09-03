'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps } from '@root/types/common/props';

export default function ThemeWrapper({ children }: ChildrenProps) {
	const { theme } = useSelector();
	return <main data-theme={theme}>{children}</main>;
}
