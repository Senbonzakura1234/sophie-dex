import ItemRecord from '@root/components/ItemRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import type { SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { apiContext } from '@root/utils/trpc';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps<{
	searchQuery: Partial<SearchQuery>;
}> = async ({ query }) => {
	const result = searchQueryValidator.safeParse(query);
	return { props: { searchQuery: result.success ? result.data : {} } };
};

export default function Items({ searchQuery }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { data, isError, error } = apiContext.item.getAll.useQuery(searchQuery);

	useHydrateModuleId('item');

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <ItemRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
}
