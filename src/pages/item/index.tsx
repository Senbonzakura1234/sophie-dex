import ItemRecord from '@root/components/ItemRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Items: NextPage = () => {
	const { securedQuery } = useSecuredRouter();
	const { data, isError, error } = apiContext.item.getAll.useQuery(securedQuery);

	useHydrateModuleId('item');

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <ItemRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Items;
