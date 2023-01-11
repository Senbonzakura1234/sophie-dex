import ListLayout from '@root/components/Layout/ListLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess, isLoading, isError, error } = apiContext.trait.getAll.useQuery(securedQuery, {
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
			pageName='Trait'
			page={data?.page ?? 1}
			totalPage={data?.totalPage ?? 0}
			totalRecord={data?.totalRecord ?? 0}
		>
			{!isLoading && isSuccess && data.records.map(trait => <TraitRecord key={trait.id} record={trait} />)}
		</ListLayout>
	);
};

export default Traits;
