import FilterControl from '@root/components/FilterControl';
import ItemRecord from '@root/components/ItemRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Items: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess } = trpc.item.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<ListLayout
			pageName='Item'
			filterControl={
				isSuccess ? (
					<FilterControl
						pageName='Item'
						page={data.page ?? '1'}
						totalPage={data.totalPage}
						limit={data.limit ?? '10'}
						totalRecord={data.totalRecord}
					/>
				) : null
			}
		>
			{isSuccess ? data.records.map(item => <ItemRecord key={item.id} item={item} />) : null}
		</ListLayout>
	);
};

export default Items;
