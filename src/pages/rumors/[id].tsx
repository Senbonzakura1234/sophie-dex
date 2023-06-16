import DetailLayout from '@root/components/Layout/DetailLayout';
import RumorRecord from '@root/components/RumorRecord';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';

const RumorDetail: NextPage = () => {
	const { securedIdQuery } = useIdQuery();
	const { data, isError, error } = apiContext.rumor.getOne.useQuery(securedIdQuery);

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='rumor'
			rawData={data}
		>
			{props => <RumorRecord {...props} />}
		</DetailLayout>
	);
};

export default RumorDetail;
