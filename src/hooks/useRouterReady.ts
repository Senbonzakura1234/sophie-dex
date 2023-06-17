import { useEffect, useState } from 'react';

export const useRouterReady = (isReady: boolean) => {
	const [isRouterReady, setIsRouterReady] = useState(isReady);

	useEffect(() => {
		setIsRouterReady(isReady);
	}, [isReady]);

	return isRouterReady;
};
