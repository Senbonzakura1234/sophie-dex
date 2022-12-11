import FilterControl from '@root/components/FilterControl';
import ListLayout from '@root/components/Layout/ListLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess } = trpc.trait.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<ListLayout
			pageName='Trait'
			filterControl={
				isSuccess ? (
					<FilterControl
						pageName='Trait'
						page={data.page ?? '1'}
						totalPage={data.totalPage}
						limit={data.limit ?? '10'}
						totalRecord={data.totalRecord}
					/>
				) : null
			}
		>
			{isSuccess ? data.records.map(trait => <TraitRecord key={trait.id} trait={trait} />) : null}
		</ListLayout>
	);
};

export default Traits;
