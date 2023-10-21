'use client';

import type { AlertTypeEnum } from '@root/types/common';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import type { Dispatch } from 'react';
import { createContext, useReducer } from 'react';

export type ThemeContextState = { theme: DaisyUIThemeEnum };
export type ContentDataContextState = {
	contentData: {
		totalRecord: number;
		totalPage: number;
		refetch: undefined | (() => Promise<unknown>);
		isError: boolean;
	};
};
export type AlertContextState = { alert: { isOpen: boolean; message: string; type?: AlertTypeEnum } };

type StateType = ThemeContextState & ContentDataContextState & AlertContextState;

type ActionType =
	| ({ type: 'SET_THEME' } & ThemeContextState)
	| ({ type: 'UPDATE_CONTENT_DATA' } & ContentDataContextState)
	| ({ type: 'UPDATE_ALERT' } & AlertContextState);

const initialState: StateType = {
	theme: 'fantasy',
	contentData: { totalRecord: 0, totalPage: 0, refetch: undefined, isError: false },
	alert: { isOpen: false, message: '' },
};

const reducer = (state: StateType, action: ActionType) => {
	if (action.type === 'SET_THEME') return { ...state, theme: action.theme };

	if (action.type === 'UPDATE_CONTENT_DATA') return { ...state, contentData: action.contentData };

	if (action.type === 'UPDATE_ALERT') return { ...state, alert: action.alert };

	return state;
};

export const Context = createContext<{
	state: StateType;
	dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const ContextProvider = ({
	children,
	defaultState = {},
}: ChildrenProps & { defaultState?: Partial<StateType> }) => {
	const [state, dispatch] = useReducer(reducer, { ...initialState, ...defaultState });

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
