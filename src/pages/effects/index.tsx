import EffectRecord from '@root/components/EffectRecord';
import FilterControl from '@root/components/FilterControl';
import ListLayout from '@root/components/Layout/ListLayout';
import { FilterControlPlaceHolder, ListPlaceHolder } from '@root/components/SubComponent';
import { defaultLimit } from '@root/constants';
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
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Effect'
			filterControl={
				!isLoading && isSuccess ? (
					<FilterControl
						pageName='Effect'
						page={data.page ?? 1}
						totalPage={data.totalPage}
						limit={data.limit ?? defaultLimit}
						totalRecord={data.totalRecord}
					/>
				) : (
					<FilterControlPlaceHolder />
				)
			}
		>
			{!isLoading && isSuccess ? (
				data.records.map(effect => <EffectRecord key={effect.id} record={effect} />)
			) : (
				<ListPlaceHolder limit={defaultLimit} />
			)}
		</ListLayout>
	);
};

export default Effects;
