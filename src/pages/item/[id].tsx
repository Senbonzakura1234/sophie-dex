import ItemRecord from '@root/components/ItemRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { colorFilterMap } from '@root/constants';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import { appRouter } from '@root/server/api/router/_app';
import { getAllItemIds } from '@root/server/db';
import { apiContext } from '@root/utils/trpc';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
	const itemIds = await getAllItemIds.execute();

	return { paths: itemIds.map(({ id }) => ({ params: { id } })), fallback: 'blocking' };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });
	const id = params?.id;

	await helpers.item.getOne.prefetch({ id });

	return { props: { trpcState: helpers.dehydrate(), id }, revalidate: 100 };
};

export default function ItemDetail({ id }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data, isError, error } = apiContext.item.getOne.useQuery({ id });

	useHydrateModuleId('item');

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			rawData={data}
			extraHead={({ color }) => (
				<meta
					name='theme-color'
					property='og:theme-color'
					key='theme-color'
					content={colorFilterMap[color].primary}
				/>
			)}
		>
			{props => <ItemRecord {...props} currentId={id} />}
		</DetailLayout>
	);
}
