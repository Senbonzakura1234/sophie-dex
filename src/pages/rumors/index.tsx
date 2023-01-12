import ListLayout from '@root/components/Layout/ListLayout';
import RumorRecord from '@root/components/RumorRecord';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Rumors: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess, isLoading, isError, error } = apiContext.rumor.getAll.useQuery(securedQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnWindowFocus: false,
	});

	return (
		<ListLayout
			isError={isError}
			isSuccess={!isLoading && isSuccess}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Rumor'
			page={data?.page ?? 1}
			totalPage={data?.totalPage ?? 0}
			totalRecord={data?.totalRecord ?? 0}
		>
			{!isLoading && isSuccess && data.records.map(rumor => <RumorRecord key={rumor.id} record={rumor} />)}
		</ListLayout>
	);
};

export default Rumors;
