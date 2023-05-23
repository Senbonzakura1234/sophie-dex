import useDebugger from '@root/hooks/useDebugger';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { GetServerSidePropsContext, NextPage } from 'next';

export function getServerSideProps(context: GetServerSidePropsContext) {
	context.res.statusCode = 403;
	return {
		props: {},
	};
}
const Tests: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isError, error } = apiContext.test.test.useQuery(securedQuery, {
		retry: false,
		enabled: isReady,
		refetchOnWindowFocus: false,
	});

	useDebugger(data, isError, error);

	return <div></div>;
};

export default Tests;
