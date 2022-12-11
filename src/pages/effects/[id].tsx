import DetailLayout from '@root/components/Layout/DetailLayout';
import { RecordPlaceHolder } from '@root/components/SubComponent';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const EffectRecord = dynamic(() => import('@root/components/EffectRecord'), {
	ssr: false,
});

const EffectDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading } = trpc.effect.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			pageName='Effect'
			extraHead={
				!isLoading && isSuccess ? (
					<Head>
						<title>Effect - {data.name}</title>
						<meta name='description' content={data.description} />
					</Head>
				) : null
			}
		>
			{!isLoading && isSuccess ? <EffectRecord effect={data} /> : <RecordPlaceHolder />}
		</DetailLayout>
	);
};

export default EffectDetail;
