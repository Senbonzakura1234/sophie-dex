import ListLayout from '@root/components/Layout/ListLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useSearchQuery } from '@root/hooks/router';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { isReady, searchQuery } = useSearchQuery();
	const { data, isError, error } = apiContext.trait.getAll.useQuery(searchQuery, { enabled: isReady });

	useHydrateModuleId('trait');

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <TraitRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Traits;
