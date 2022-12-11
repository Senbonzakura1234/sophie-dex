import TraitRecord from '@root/components/TraitRecord';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import type { NextPage } from 'next';

const TraitDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess } = trpc.trait.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return isSuccess ? (
		<section className='grid h-full w-full grid-cols-1 place-content-center gap-4 p-2 xl:grid-cols-none'>
			<TraitRecord trait={data} />
		</section>
	) : null;
};

export default TraitDetail;
