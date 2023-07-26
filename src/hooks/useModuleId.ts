import type { ModuleIdEnum } from '@root/types/common/zod';
import { globalStore, moduleIdAtom } from '@root/utils/store';
import { useStore } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

export const useModuleId = () => {
	const store = useStore();

	return store.get(moduleIdAtom);
};

export const useHydrateModuleId = (moduleId?: ModuleIdEnum) =>
	useHydrateAtoms([[moduleIdAtom, moduleId]], { dangerouslyForceHydrate: true, store: globalStore });
