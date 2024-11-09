import { moduleIdList } from '@root/constants/common';
import { arrayInclude } from '@root/utils/common';
import { usePageSegment } from './usePageSegment';

export const useModuleId = () => {
	const { segment } = usePageSegment();

	return { moduleId: arrayInclude(moduleIdList, segment) ? segment : undefined, segment };
};
