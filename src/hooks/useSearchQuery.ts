import { paramsToQuery } from '@root/utils/common';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { useModuleId } from './useModuleId';

export const useSearchQuery = () => {
	const { moduleId, isDetailPage } = useModuleId();

	const searchParams = useSearchParams();

	const searchQuery = useMemo(() => paramsToQuery(searchParams), [searchParams]);

	return { isDetailPage, moduleId, searchQuery };
};
