import DetailLayout from '@root/components/Layout/DetailLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';

const TraitDetail: NextPage = () => {
	const { securedIdQuery } = useIdQuery();
	const { data, isError, error } = apiContext.trait.getOne.useQuery(securedIdQuery);

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			moduleId='trait'
			rawData={data}
		>
			{props => <TraitRecord {...props} />}
		</DetailLayout>
	);
};

export default TraitDetail;
