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
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Rumor'
			rawData={data}
			extraFlag={isSuccess && !isLoading}
			extraHead={({ name }) => (
				<Head>
					<title>{name}</title>
				</Head>
			)}
		>
			{props => <RumorRecord {...props} />}
		</DetailLayout>
	);
};

export default RumorDetail;
