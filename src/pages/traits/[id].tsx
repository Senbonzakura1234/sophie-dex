import TraitItem from '@root/components/TraitItem';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';

const Trait: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess } = trpc.trait.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return isSuccess ? (
		<div className='grid h-full w-full place-content-center gap-4 p-2'>
			<TraitItem trait={data} />
		</div>
	) : null;
};

export default Trait;
