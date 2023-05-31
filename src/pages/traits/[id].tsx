import DetailLayout from '@root/components/Layout/DetailLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';

const TraitDetail: NextPage = () => {
	const { isRouterReady, securedIdQuery } = useIdQuery();

	const { data, isError, error } = apiContext.trait.getOne.useQuery(securedIdQuery, {
		retry: 1,
		enabled: isRouterReady,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Trait'
			rawData={data}
		>
			{props => <TraitRecord {...props} />}
		</DetailLayout>
	);
};

export default TraitDetail;
