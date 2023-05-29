import useDebugger from '@root/hooks/useDebugger';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { evnIs } from '@root/utils/common';
import { apiContext } from '@root/utils/trpc';
import type { GetServerSidePropsContext, NextPage } from 'next';

export function getServerSideProps(context: GetServerSidePropsContext) {
	if (evnIs('production')) context.res.statusCode = 403;
	return {
		props: {},
	};
}
const Tests: NextPage = () => {
	const { securedQuery, isRouterReady } = useSearchQuery();
	const { data, isError, error } = apiContext.test.test.useQuery(securedQuery, {
		retry: false,
		enabled: isRouterReady,
		refetchOnWindowFocus: false,
	});

	useDebugger(data, isError, error);

	return <div></div>;
};

export default Tests;
