import type { ContentDataContextState } from '@root/utils/context';
import { useEffect } from 'react';
import useDispatch from './useDispatch';

export default function useDispatchContentData({
	contentData,
}: {
	contentData: ContentDataContextState['contentData'];
}) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'UPDATE_CONTENT_DATA', contentData });
	}, [contentData, dispatch]);
}
