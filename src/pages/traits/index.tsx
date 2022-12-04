import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';
import { useEffect } from 'react';

const Traits: NextPage = () => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();
	const { data, isSuccess, error, isError } = trpc.trait.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		if (isSuccess) console.log(data);
		if (isError) console.log(error);
	}, [data, error, isError, isSuccess]);

	return (
		<div>
			<button
				onClick={() => {
					updateQuery({ search: 'price' });
				}}
			>
				test
			</button>
		</div>
	);
};

export default Traits;
