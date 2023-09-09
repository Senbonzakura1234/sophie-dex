import type { ModuleIdEnum } from '@root/types/common/zod';
import { usePathname } from 'next/navigation';

export const useModuleId = () => {
	const pathname = usePathname();
	const pathSegments = pathname.split('/');

	return { moduleId: pathSegments[1] as ModuleIdEnum | undefined, isDetailPage: Boolean(pathSegments[2]) };
};
