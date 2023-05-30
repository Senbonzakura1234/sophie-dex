import { evnIs } from '@root/utils/common';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useForbiddenClient = (redirectTo = '/') => {
	const { isReady, push } = useRouter();

	useEffect(() => {
		if (isReady && evnIs('production')) push(redirectTo);
	}, [isReady, push, redirectTo]);
};
