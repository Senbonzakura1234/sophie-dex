import type { ModuleIdEnum } from '@root/types/common/zod';
import { atom, createStore } from 'jotai';

export const globalStore = createStore();
export const moduleIdAtom = atom<ModuleIdEnum | undefined>(undefined);
