import type { ModuleIdEnum } from '@root/types/common/zod';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export const useModuleId = () => {
	const pathname = usePathname();
	const { isDetailPage, moduleId } = useMemo(() => {
		const pathSegments = pathname.split('/');

		return { moduleId: pathSegments[1] as ModuleIdEnum | undefined, isDetailPage: Boolean(pathSegments[2]) };
	}, [pathname]);

	return { isDetailPage, moduleId };
};
