import { moduleIdList } from '@root/constants/common';
import { usePageSegment } from '@root/hooks/usePageSegment';
import { arrayInclude } from '@root/utils/common';

export const useModuleId = () => {
	const { segment } = usePageSegment();

	return { moduleId: arrayInclude(moduleIdList, segment) ? segment : undefined, segment };
};
