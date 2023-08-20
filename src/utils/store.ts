import type { AlertTypeEnum } from '@root/types/common';
import type { ModuleIdEnum } from '@root/types/common/zod';
import { atom, createStore } from 'jotai';

type AlertAtom = { isOpen: boolean; message: string; type?: AlertTypeEnum };

export const globalStore = createStore();

export const alertAtom = atom<AlertAtom>({ isOpen: false, message: '' });
export const moduleIdAtom = atom<ModuleIdEnum | undefined>(undefined);
