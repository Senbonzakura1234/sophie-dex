import ListLayout from '@root/components/Layout/ListLayout';
import RumorRecord from '@root/components/RumorRecord';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import { globalStore, moduleIdAtom } from '@root/utils/store';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

globalStore.set(moduleIdAtom, 'rumor');

const Rumors: NextPage = () => {
	const { securedQuery } = useSecuredRouter();
	const { data, isError, error } = apiContext.rumor.getAll.useQuery(securedQuery);

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <RumorRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Rumors;
