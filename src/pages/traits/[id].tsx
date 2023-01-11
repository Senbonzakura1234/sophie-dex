import DetailLayout from '@root/components/Layout/DetailLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const TraitDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading, isError, error } = apiContext.trait.getOne.useQuery(securedIdQuery, {
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
			pageName='Trait'
			extraHead={
				!isLoading && isSuccess ? (
					<Head>
						<title>{data.name}</title>
						<meta name='description' content={data.description} />
					</Head>
				) : null
			}
		>
			{!isLoading && isSuccess && <TraitRecord record={data} />}
		</DetailLayout>
	);
};

export default TraitDetail;
