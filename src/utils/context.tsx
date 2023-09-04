'use client';

import { metaThemeColorMap } from '@root/constants';
import type { AlertTypeEnum } from '@root/types/common';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { setCookie } from 'cookies-next';
import type { Dispatch } from 'react';
import { createContext, useReducer } from 'react';

export type ThemeContextState = { theme: DaisyUIThemeEnum };
export type ListMetaContextState = { listMeta: { totalRecord: number; totalPage: number } };
export type AlertContextState = { alert: { isOpen: boolean; message: string; type?: AlertTypeEnum } };

type StateType = ThemeContextState & ListMetaContextState & AlertContextState;

type ActionType =
	| ({ type: 'SET_THEME' } & ThemeContextState)
	| ({ type: 'UPDATE_TOTAL_RECORD' } & ListMetaContextState)
	| ({ type: 'UPDATE_ALERT' } & AlertContextState);

const initialState: StateType = {
	theme: 'fantasy',
	listMeta: { totalRecord: 0, totalPage: 0 },
	alert: { isOpen: false, message: '' },
};

const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case 'SET_THEME': {
			if (window?.document?.querySelector)
				window?.document
					?.querySelector('meta[name="theme-color"]')
					?.setAttribute('content', metaThemeColorMap[action.theme]);

			setCookie('theme', action.theme, { path: '/' });
			return { ...state, theme: action.theme };
		}

		case 'UPDATE_TOTAL_RECORD': {
			return { ...state, listMeta: action.listMeta };
		}

		case 'UPDATE_ALERT': {
			return { ...state, alert: action.alert };
		}

		default: {
			return state;
		}
	}
};

export const Context = createContext<{
	state: StateType;
	dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const ContextProvider = ({ children, defaultState }: ChildrenProps & { defaultState?: Partial<StateType> }) => {
	const [state, dispatch] = useReducer(reducer, { ...initialState, ...defaultState });

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
