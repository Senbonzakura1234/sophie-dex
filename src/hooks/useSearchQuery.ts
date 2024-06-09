import { paramsToQuery } from '@root/utils/common';
import { useSearchParams } from 'next/navigation';

export const useSearchQuery = () => {
	const searchParams = useSearchParams();

	return { searchQuery: paramsToQuery(searchParams) };
};
