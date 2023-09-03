import { paramsToQuery } from '@root/utils/common';
import { useSearchParams } from 'next/navigation';
import { useModuleId } from './useModuleId';

export const useSearchQuery = () => {
	const moduleId = useModuleId();

	const searchParams = useSearchParams();

	return { moduleId, searchQuery: paramsToQuery(searchParams) };
};
