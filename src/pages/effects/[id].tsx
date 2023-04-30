import EffectRecord from '@root/components/EffectRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const EffectDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isError, error } = apiContext.effect.getOne.useQuery(securedIdQuery, {
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
			rawData={data}
			extraHead={({ name, description }) => (
				<Head>
					<title>{name}</title>
					<meta name='description' content={description} />
				</Head>
			)}
		>
			{props => <EffectRecord {...props} />}
		</DetailLayout>
	);
};

export default EffectDetail;
