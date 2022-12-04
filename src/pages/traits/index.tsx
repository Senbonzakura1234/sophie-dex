import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { type NextPage } from 'next';
import { useEffect } from 'react';

const Traits: NextPage = () => {
	const searchQuery = useSearchQuery();
	const { data, isSuccess, error, isError } = trpc.trait.getAll.useQuery(searchQuery, {
		retry: 3,
	});

	useEffect(() => {
		if (isSuccess) console.log(data);
		if (isError) console.log(error);
	}, [data, error, isError, isSuccess]);

	return <div></div>;
};

export default Traits;
