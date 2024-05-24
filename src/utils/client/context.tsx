'use client';

import type { AlertTypeEnum } from '@root/types/common';
import type { ChildrenProps } from '@root/types/common/props';
import { deleteNullableProperty } from '@root/utils/common';
import type { Dispatch } from 'react';
import { createContext, useReducer } from 'react';

export type AlertContextState = { alert: { isOpen: boolean; message: string; type?: AlertTypeEnum } };

type StateType = AlertContextState;

type Action<TKey extends string, TData = unknown> = { type: TKey; data: TData };

type ActionType = Action<'UPDATE_ALERT', StateType['alert']>;

const initialState: StateType = {
	alert: { isOpen: false, message: '' },
};

const reducer = (state: StateType, { data, type }: ActionType): StateType => {
	if (type === 'UPDATE_ALERT') return { ...state, alert: data };

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
	const [state, dispatch] = useReducer(reducer, { ...initialState, ...deleteNullableProperty(defaultState) });

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
