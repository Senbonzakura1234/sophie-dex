import EffectRecord from '@root/components/EffectRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const EffectDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading, isError, error } = apiContext.effect.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			isError={isError}
			isSuccess={!isLoading && isSuccess}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Effect'
			extraHead={
				!isLoading && isSuccess ? (
					<Head>
						<title>{data.name}</title>
						<meta name='description' content={data.description} />
					</Head>
				) : null
			}
		>
			{!isLoading && isSuccess && <EffectRecord record={data} />}
		</DetailLayout>
	);
};

export default EffectDetail;
