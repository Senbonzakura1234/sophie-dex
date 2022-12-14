import ItemRecord from '@root/components/ItemRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { RecordPlaceHolder } from '@root/components/SubComponent';
import { useIdQuery } from '@root/hooks/useSercuredRouter';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const ItemDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading } = trpc.item.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			pageName='Item'
			extraHead={
				!isLoading && isSuccess ? (
					<Head>
						<title>Item - {data.name}</title>
						<meta
							name='description'
							content={data.itemCategories.map(c => `${c.name} (${c.grade})`).join(', ')}
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
