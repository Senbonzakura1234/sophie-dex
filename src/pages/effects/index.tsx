import EffectRecord from '@root/components/EffectRecord';
import FilterControl from '@root/components/FilterControl';
import SubPageTitle from '@root/components/SubPageTitle';
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
		<>
			<SubPageTitle pageName={'Effect'} />
			{isSuccess && (
				<FilterControl
					page={data.page ?? '1'}
					totalPage={data.totalPage}
					limit={data.limit ?? '10'}
					totalRecord={data.totalRecord}
				/>
			)}
			<section className='container mx-auto grid auto-rows-fr gap-6 p-3 xl:grid-cols-2'>
				{isSuccess ? data.records.map(effect => <EffectRecord key={effect.id} effect={effect} />) : null}
			</section>
		</>
	);
};

export default Effects;
