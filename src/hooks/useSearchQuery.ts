import { paramsToQuery } from '@root/utils/common';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export const useSearchQuery = () => {
	const searchParams = useSearchParams();

	const searchQuery = useMemo(() => paramsToQuery(searchParams), [searchParams]);

	return { searchQuery };
};
