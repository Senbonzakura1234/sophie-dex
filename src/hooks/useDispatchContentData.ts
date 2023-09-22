import type { ContentDataContextState } from '@root/utils/context';
import { useEffect } from 'react';
import useDispatch from './useDispatch';

export default function useDispatchContentData({
	contentData: { totalPage = 0, totalRecord = 0, refetch = undefined, isError = false },
}: {
	contentData: Partial<ContentDataContextState['contentData']>;
}) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'UPDATE_CONTENT_DATA', contentData: { totalPage, totalRecord, refetch, isError } });
	}, [dispatch, isError, refetch, totalPage, totalRecord]);
}
