import type { ModuleIdEnum, SearchQuery } from '@root/types/common/zod';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useModuleId } from './useModuleId';

type UseSearchQuery = () => {
	isReady: boolean;
	moduleId: ModuleIdEnum | undefined;
	push: NextRouter['push'];
	searchQuery: Partial<SearchQuery>;
};

export const useSearchQuery: UseSearchQuery = () => {
	const { push, query, isReady } = useRouter();

	const moduleId = useModuleId();

	delete query['id'];

	const searchQuery = query as Partial<SearchQuery>;

	searchQuery.page = Number(query.page) || null;

	return { isReady, moduleId, push, searchQuery };
};
