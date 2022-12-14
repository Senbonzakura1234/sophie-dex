import DetailLayout from '@root/components/Layout/DetailLayout';
import { RecordPlaceHolder } from '@root/components/SubComponent';
import TraitRecord from '@root/components/TraitRecord';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const TraitDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading } = trpc.trait.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			pageName='Trait'
			extraHead={
				!isLoading && isSuccess ? (
					<Head>
						<title>Trait - {data.name}</title>
						<meta name='description' content={data.description} />
					</Head>
				) : null
			}
		>
			{!isLoading && isSuccess ? <TraitRecord record={data} /> : <RecordPlaceHolder />}
		</DetailLayout>
	);
};

export default TraitDetail;
