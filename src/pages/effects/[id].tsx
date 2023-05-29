import EffectRecord from '@root/components/EffectRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';

const EffectDetail: NextPage = () => {
	const { isRouterReady, securedIdQuery } = useIdQuery();
	const { data, isError, error } = apiContext.effect.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isRouterReady,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Effect'
			rawData={data}
		>
			{props => <EffectRecord {...props} />}
		</DetailLayout>
	);
};

export default EffectDetail;
