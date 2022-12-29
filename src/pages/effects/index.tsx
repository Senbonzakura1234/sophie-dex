import EffectRecord from '@root/components/EffectRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Effects: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess, isLoading, isError, error } = trpc.effect.getAll.useQuery(securedQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnWindowFocus: false,
	});

	return (
		<ListLayout
			isError={isError}
			isSuccess={!isLoading && isSuccess}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Effect'
			page={data?.page ?? 1}
			totalPage={data?.totalPage ?? 0}
			totalRecord={data?.totalRecord ?? 0}
		>
			{!isLoading && isSuccess && data.records.map(effect => <EffectRecord key={effect.id} record={effect} />)}
		</ListLayout>
	);
};

export default Effects;
