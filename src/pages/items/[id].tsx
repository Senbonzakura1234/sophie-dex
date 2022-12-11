import DetailLayout from '@root/components/Layout/DetailLayout';
import { RecordPlaceHolder } from '@root/components/SubComponent';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ItemRecord = dynamic(() => import('@root/components/ItemRecord'), {
	ssr: false,
});

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
			{!isLoading && isSuccess ? <ItemRecord item={data} /> : <RecordPlaceHolder />}
		</DetailLayout>
	);
};

export default ItemDetail;
