import FilterControl from '@root/components/FilterControl';
import ListLayout from '@root/components/Layout/ListLayout';
import TraitRecord from '@root/components/TraitRecord';
import { defaultLimit } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess, isLoading, isError, error } = trpc.trait.getAll.useQuery(securedQuery, {
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
			filterControl={
				!isLoading &&
				isSuccess && (
					<FilterControl
						pageName='Trait'
						page={data.page ?? 1}
						totalPage={data.totalPage}
						limit={data.limit ?? defaultLimit}
						totalRecord={data.totalRecord}
					/>
				)
			}
		>
			{!isLoading && isSuccess && data.records.map(trait => <TraitRecord key={trait.id} record={trait} />)}
		</ListLayout>
	);
};

export default Traits;
