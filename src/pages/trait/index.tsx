import ListLayout from '@root/components/Layout/ListLayout';
import TraitRecord from '@root/components/TraitRecord';
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

export default function Traits({ searchQuery }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const { data, isError, error } = apiContext.trait.getAll.useQuery(searchQuery);

	useHydrateModuleId('trait');

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <TraitRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
}
