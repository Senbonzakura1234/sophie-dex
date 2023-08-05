import ItemRecord from '@root/components/ItemRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useSearchQuery } from '@root/hooks/router';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Items: NextPage = () => {
	const { isReady, searchQuery } = useSearchQuery();
	const { data, isError, error } = apiContext.item.getAll.useQuery(searchQuery, { enabled: isReady });

	useHydrateModuleId('item');

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <ItemRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Items;
