import DetailLayout from '@root/components/Layout/DetailLayout';
import RumorRecord from '@root/components/RumorRecord';
import { appRouter } from '@root/server/api/router/_app';
import { getAllRumorIds } from '@root/server/db';
import { globalStore, moduleIdAtom } from '@root/utils/store';
import { apiContext } from '@root/utils/trpc';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
	const rumorIds = await getAllRumorIds.execute();

	return { paths: rumorIds.map(({ id }) => ({ params: { id } })), fallback: 'blocking' };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });
	const id = params?.id;

	await helpers.rumor.getOne.prefetch({ id });

	return { props: { trpcState: helpers.dehydrate(), id }, revalidate: 100 };
};

globalStore.set(moduleIdAtom, 'rumor');

export default function RumorDetail({ id }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data, isError, error } = apiContext.rumor.getOne.useQuery({ id });

	return (
		<DetailLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => <RumorRecord {...props} currentId={id} />}
		</DetailLayout>
	);
}
