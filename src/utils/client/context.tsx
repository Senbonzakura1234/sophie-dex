'use client';

import type { AlertTypeEnum } from '@root/types/common';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { deleteNullableProperty } from '@root/utils/common';
import type { Dispatch, RefObject } from 'react';
import { createContext, useReducer } from 'react';

export type ScrollWrapperRefState = {
	scrollWrapper: { ref: null | RefObject<HTMLDivElement>; isDisabledPullToRefresh: boolean };
};
export type ThemeContextState = { theme: DaisyUIThemeEnum };
export type ContentDataContextState = {
	contentData: {
		totalRecord: number;
		totalPage: number;
		refetch: undefined | (() => Promise<unknown>);
		status: 'error' | 'success' | 'pending';
	};
};
export type AlertContextState = { alert: { isOpen: boolean; message: string; type?: AlertTypeEnum } };

type StateType = ThemeContextState & ContentDataContextState & AlertContextState & ScrollWrapperRefState;

type Action<TKey extends string, TData = unknown> = { type: TKey; data: TData };

type ActionType =
	| Action<'SET_THEME', StateType['theme']>
	| Action<'UPDATE_CONTENT_DATA', Partial<StateType['contentData']>>
	| Action<'UPDATE_ALERT', StateType['alert']>
	| Action<'UPDATE_SCROLL_WRAPPER_STATE', Partial<StateType['scrollWrapper']>>;

const initialState: StateType = {
	theme: 'fantasy',
	contentData: { totalRecord: 0, totalPage: 0, refetch: undefined, status: 'pending' },
	alert: { isOpen: false, message: '' },
	scrollWrapper: { ref: null, isDisabledPullToRefresh: false },
};

const reducer = (state: StateType, { data, type }: ActionType): StateType => {
	if (type === 'SET_THEME') return { ...state, theme: data };

	if (type === 'UPDATE_CONTENT_DATA') {
		return { ...state, contentData: { ...state.contentData, ...deleteNullableProperty(data) } };
	}

	if (type === 'UPDATE_ALERT') return { ...state, alert: data };

	if (type === 'UPDATE_SCROLL_WRAPPER_STATE')
		return { ...state, scrollWrapper: { ...state.scrollWrapper, ...deleteNullableProperty(data) } };

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
