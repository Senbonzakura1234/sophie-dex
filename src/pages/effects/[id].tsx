import EffectRecord from '@root/components/EffectRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { RecordPlaceHolder } from '@root/components/SubComponent';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const EffectDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading, isError, error } = trpc.effect.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
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
			{!isLoading && isSuccess ? <EffectRecord record={data} /> : <RecordPlaceHolder />}
		</DetailLayout>
	);
};

export default EffectDetail;
