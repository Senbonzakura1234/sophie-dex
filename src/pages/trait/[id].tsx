import DetailLayout from '@root/components/Layout/DetailLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import { appRouter } from '@root/server/api/router/_app';
import { getAllTraitIds } from '@root/server/db';
import { apiContext } from '@root/utils/trpc';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
	const traitIds = await getAllTraitIds.execute();

	return { paths: traitIds.map(({ id }) => ({ params: { id } })), fallback: 'blocking' };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });
	const id = params?.id;

	await helpers.trait.getOne.prefetch({ id });

	return { props: { trpcState: helpers.dehydrate(), id }, revalidate: 100 };
};

export default function TraitDetail({ id }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data, isError, error } = apiContext.trait.getOne.useQuery({ id });

	useHydrateModuleId('trait');

	return (
		<DetailLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => <TraitRecord {...props} currentId={id} />}
		</DetailLayout>
	);
}
