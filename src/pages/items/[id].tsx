import ItemRecord from '@root/components/ItemRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { RecordPlaceHolder } from '@root/components/SubComponent';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const ItemDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading, isError, error } = trpc.item.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Item'
			extraHead={
				!isLoading && isSuccess ? (
					<Head>
						<title>Item - {data.name}</title>
						<meta
							name='description'
							content={data.relatedCategories.map(c => `${c.name} (${c.count})`).join(', ')}
						/>
					</Head>
				) : null
			}
		>
			{!isLoading && isSuccess ? <ItemRecord record={data} /> : <RecordPlaceHolder />}
		</DetailLayout>
	);
};

export default ItemDetail;
