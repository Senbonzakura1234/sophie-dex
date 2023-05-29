import { useEffect, useState } from 'react';

export const useRouterReady = (isReady: boolean) => {
	const [isRouterReady, setIsRouterReady] = useState(false);

	useEffect(() => {
		setIsRouterReady(() => isReady);
	}, [isReady]);

	return isRouterReady;
};
