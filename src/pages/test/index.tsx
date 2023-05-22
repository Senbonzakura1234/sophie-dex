import useDebugger from '@root/hooks/useDebugger';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Tests: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isError, error } = apiContext.test.test.useQuery(securedQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnWindowFocus: false,
	});

	useDebugger(data, isError, error);

	return <div></div>;
};

export default Tests;
