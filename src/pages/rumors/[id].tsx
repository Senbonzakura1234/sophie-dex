import DetailLayout from '@root/components/Layout/DetailLayout';
import RumorRecord from '@root/components/RumorRecord';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';

const RumorDetail: NextPage = () => {
	const { isRouterReady, securedIdQuery } = useIdQuery();
	const { data, isError, error } = apiContext.rumor.getOne.useQuery(securedIdQuery, {
		retry: 1,
		enabled: isRouterReady,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Rumor'
			rawData={data}
		>
			{props => <RumorRecord {...props} />}
		</DetailLayout>
	);
};

export default RumorDetail;
