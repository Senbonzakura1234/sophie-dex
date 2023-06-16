import ItemRecord from '@root/components/ItemRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Items: NextPage = () => {
	const { securedQuery } = useSearchQuery();
	const { data, isError, error } = apiContext.item.getAll.useQuery(securedQuery);

	return (
		<ListLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='item'
			rawData={data}
		>
			{props => props.data.map((rumor, key) => <ItemRecord key={key} {...rumor} />)}
		</ListLayout>
	);
};

export default Items;
