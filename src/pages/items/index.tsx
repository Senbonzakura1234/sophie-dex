import ListLayout from '@root/components/Layout/ListLayout';
import { FilterControlPlaceHolder, ListPlaceHolder } from '@root/components/SubComponent';
import { defaultLimit, defaultLimitInt } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';
import dynamic from 'next/dynamic';

const ItemRecord = dynamic(() => import('@root/components/ItemRecord'), {
	ssr: false,
});

const FilterControl = dynamic(() => import('@root/components/FilterControl'), {
	ssr: false,
});

const Items: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess, isLoading } = trpc.item.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<ListLayout
			pageName='Item'
			filterControl={
				!isLoading && isSuccess ? (
					<FilterControl
						pageName='Item'
						page={data.page ?? '1'}
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
				data.records.map(item => <ItemRecord key={item.id} item={item} />)
			) : (
				<ListPlaceHolder limit={defaultLimitInt} />
			)}
		</ListLayout>
	);
};

export default Items;
