import ItemRecord from '@root/components/ItemRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const ItemDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess } = trpc.item.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			isSuccess={isSuccess}
			pageName='Item'
			extraHead={
				isSuccess ? (
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
			{isSuccess && <ItemRecord item={data} />}
		</DetailLayout>
	);
};

export default ItemDetail;
