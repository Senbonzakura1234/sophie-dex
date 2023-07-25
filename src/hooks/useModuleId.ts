import { moduleIdAtom } from '@root/utils/store';
import { useStore } from 'jotai';

export const useModuleId = () => {
	const store = useStore();

	return store.get(moduleIdAtom);
};
