import EffectRecord from '@root/components/EffectRecord';
import FilterControl from '@root/components/FilterControl';
import ListLayout from '@root/components/Layout/ListLayout';
import { defaultLimit } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Effects: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess } = trpc.effect.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<ListLayout
			pageName='Effect'
			filterControl={
				isSuccess ? (
					<FilterControl
						pageName='Effect'
						page={data.page ?? '1'}
						totalPage={data.totalPage}
						limit={data.limit ?? defaultLimit}
						totalRecord={data.totalRecord}
					/>
				) : null
			}
		>
			{isSuccess ? data.records.map(effect => <EffectRecord key={effect.id} effect={effect} />) : null}
		</ListLayout>
	);
};

export default Effects;
