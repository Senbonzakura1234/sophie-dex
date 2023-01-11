import ItemRecord from '@root/components/ItemRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Items: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess, isLoading, isError, error } = apiContext.item.getAll.useQuery(securedQuery, {
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
			pageName='Item'
			page={data?.page ?? 1}
			totalPage={data?.totalPage ?? 0}
			totalRecord={data?.totalRecord ?? 0}
		>
			{!isLoading && isSuccess && data.records.map(item => <ItemRecord key={item.id} record={item} />)}
		</ListLayout>
	);
};

export default Items;
