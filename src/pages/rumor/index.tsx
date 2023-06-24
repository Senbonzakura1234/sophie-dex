import ListLayout from '@root/components/Layout/ListLayout';
import RumorRecord from '@root/components/RumorRecord';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Rumors: NextPage = () => {
	const { securedQuery } = useSearchQuery();
	const { data, isError, error } = apiContext.rumor.getAll.useQuery(securedQuery);

	return (
		<ListLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			moduleId='rumor'
			rawData={data}
		>
			{props => props.data.map((rumor, key) => <RumorRecord key={key} {...rumor} />)}
		</ListLayout>
	);
};

export default Rumors;
