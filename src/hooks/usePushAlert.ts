import type { AlertContextState } from '@root/utils/client/context';
import { useCallback } from 'react';
import useDispatch from './useDispatch';

export default function usePushAlert() {
	const dispatch = useDispatch();

	const pushAlert = useCallback(
		(data: AlertContextState['alert']) => dispatch({ type: 'UPDATE_ALERT', data }),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	return { pushAlert };
}
