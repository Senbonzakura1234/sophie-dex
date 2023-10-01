import { moduleIdList } from '@root/types/model';
import { improvedInclude } from '@root/utils/common';
import usePageSegment from './usePageSegment';

export const useModuleId = () => {
	const { isDetailPage, segment } = usePageSegment();

	return { isDetailPage, moduleId: improvedInclude(moduleIdList, segment) ? segment : undefined };
};
