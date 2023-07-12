import EffectRecord from '@root/components/EffectRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { appRouter } from '@root/server/api/router/_app';
import { getAllEffectIds } from '@root/server/db';
import { apiContext } from '@root/utils/trpc';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
	const effectIds = await getAllEffectIds.execute();

	return { paths: effectIds.map(({ id }) => ({ params: { id } })), fallback: 'blocking' };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });
	const id = params?.id;

	await helpers.effect.getOne.prefetch({ id });

	return { props: { trpcState: helpers.dehydrate(), id }, revalidate: 100 };
};

export default function EffectDetail({ id }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data, isError, error } = apiContext.effect.getOne.useQuery({ id });

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			moduleId='effect'
			rawData={data}
		>
			{props => <EffectRecord {...props} currentId={id} />}
		</DetailLayout>
	);
}
