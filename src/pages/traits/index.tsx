import FilterControl from '@root/components/FilterControl';
import ListLayout from '@root/components/Layout/ListLayout';
import { FilterControlPlaceHolder, ListPlaceHolder } from '@root/components/SubComponent';
import TraitRecord from '@root/components/TraitRecord';
import { defaultLimit } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSercuredRouter';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess, isLoading } = trpc.trait.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<ListLayout
			pageName='Trait'
			filterControl={
				!isLoading && isSuccess ? (
					<FilterControl
						pageName='Trait'
						page={data.page ?? 1}
						totalPage={data.totalPage}
						limit={data.limit ?? defaultLimit}
						totalRecord={data.totalRecord}
					/>
				) : (
					<FilterControlPlaceHolder />
				)
			}
		>
			{!isLoading && isSuccess ? (
				data.records.map(trait => <TraitRecord key={trait.id} record={trait} />)
			) : (
				<ListPlaceHolder limit={defaultLimit} />
			)}
		</ListLayout>
	);
};

export default Traits;
