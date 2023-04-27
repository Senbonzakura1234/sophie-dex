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
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Trait'
			rawData={data}
			extraFlag={isSuccess && !isLoading}
			extraHead={({ name, description }) => (
				<Head>
					<title>{name}</title>
					<meta name='description' content={description} />
				</Head>
			)}
		>
			{props => <TraitRecord {...props} />}
		</DetailLayout>
	);
};

export default TraitDetail;
