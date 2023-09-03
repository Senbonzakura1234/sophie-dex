'use client';

import useDispatch from '@root/hooks/useDispatch';
import type { ListMetaContextState } from '@root/utils/context';
import { useEffect } from 'react';

type DispatchListMetaProps = ListMetaContextState;

export default function DispatchListMeta({ listMeta: { totalPage, totalRecord } }: DispatchListMetaProps) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'UPDATE_TOTAL_RECORD', listMeta: { totalPage, totalRecord } });
	}, [dispatch, totalPage, totalRecord]);

	return null;
}
