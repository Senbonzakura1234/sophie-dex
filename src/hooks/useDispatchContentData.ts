import type { ContentDataContextState } from '@root/utils/client/context';
import { useEffect } from 'react';
import useDispatch from './useDispatch';

export default function useDispatchContentData({
	contentData: { isError = false, refetch, totalPage = 0, totalRecord = 0 },
}: {
	contentData: Partial<ContentDataContextState['contentData']>;
}) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'UPDATE_CONTENT_DATA', contentData: { isError, refetch, totalPage, totalRecord } });
	}, [dispatch, isError, refetch, totalPage, totalRecord]);
}
