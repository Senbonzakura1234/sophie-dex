import type { ModuleIdEnum } from '@root/types/common/zod';
import { usePathname } from 'next/navigation';

export const useModuleId = () => usePathname().split('/')[1] as ModuleIdEnum | undefined;
