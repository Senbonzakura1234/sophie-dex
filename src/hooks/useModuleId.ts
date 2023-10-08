import { moduleIdList } from '@root/types/model';
import { arrayInclude } from '@root/utils/common';
import usePageSegment from './usePageSegment';

export const useModuleId = () => {
	const { isDetailPage, segment } = usePageSegment();

	return { isDetailPage, moduleId: arrayInclude(moduleIdList, segment) ? segment : undefined };
};
