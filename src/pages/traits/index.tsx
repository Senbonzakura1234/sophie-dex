import TraitItem from '@root/components/TraitItem';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();
	const { data, isSuccess } = trpc.trait.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<div className='grid grid-cols-3 gap-4'>
			{isSuccess ? data.records.map(trait => <TraitItem key={trait.id} trait={trait} />) : null}
		</div>
	);
};

export default Traits;
