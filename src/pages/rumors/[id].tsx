import DetailLayout from '@root/components/Layout/DetailLayout';
import RumorRecord from '@root/components/RumorRecord';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const RumorDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading, isError, error } = apiContext.rumor.getOne.useQuery(securedIdQuery, {
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
			pageName='Rumor'
			extraHead={
				!isLoading && isSuccess ? (
					<Head>
						<title>{data.name}</title>
					</Head>
				) : null
			}
		>
			{!isLoading && isSuccess && <RumorRecord record={data} />}
		</DetailLayout>
	);
};

export default RumorDetail;
