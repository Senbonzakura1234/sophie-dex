import useDebugger from '@root/hooks/useDebugger';
import { useForbiddenClient } from '@root/hooks/useForbiddenClient';
import { useRouterReady } from '@root/hooks/useRouterReady';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Export: NextPage = () => {
	const { isReady } = useRouter();

	const isRouterReady = useRouterReady(isReady);

	useForbiddenClient();

	const { data, isError, error } = apiContext.test.export.useQuery(
		{},
		{
			retry: false,
			enabled: isRouterReady,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retryOnMount: false,
		},
	);

	useDebugger(data, isError, error);

	return <div></div>;
};

export default Export;
