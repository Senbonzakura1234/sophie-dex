import { paramsToQuery } from '@root/utils/common';
import { useSearchParams } from 'next/navigation';
import { useModuleId } from './useModuleId';

export const useSearchQuery = () => {
	const { moduleId, isDetailPage } = useModuleId();

	const searchParams = useSearchParams();

	const searchQuery = paramsToQuery(searchParams);

	return { isDetailPage, moduleId, searchQuery };
};
