import SubPageTitle from '@root/components/SubPageTitle';
import TraitItem from '@root/components/TraitItem';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { securedQuery, isReady } = useSearchQuery();
	const { data, isSuccess } = trpc.trait.getAllStub.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<>
			<SubPageTitle />
			<section className='grid-cols-cardList container mx-auto grid auto-rows-fr gap-6 p-3'>
				{isSuccess ? data.records.map(trait => <TraitItem key={trait.id} trait={trait} />) : null}
			</section>
		</>
	);
};

export default Traits;
