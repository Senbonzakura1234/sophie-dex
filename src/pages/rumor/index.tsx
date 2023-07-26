import ListLayout from '@root/components/Layout/ListLayout';
import RumorRecord from '@root/components/RumorRecord';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Rumors: NextPage = () => {
	const { securedQuery } = useSecuredRouter();
	const { data, isError, error } = apiContext.rumor.getAll.useQuery(securedQuery);

	useHydrateModuleId('rumor');

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <RumorRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Rumors;
