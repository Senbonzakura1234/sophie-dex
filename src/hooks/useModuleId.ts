import { genericModuleIdEnumSchema } from '@root/types/common/zod/generic';
import { arrayInclude } from '@root/utils/common';
import { usePageSegment } from './usePageSegment';

export const useModuleId = () => {
	const { segment } = usePageSegment();

	return { moduleId: arrayInclude(genericModuleIdEnumSchema._def.values, segment) ? segment : undefined, segment };
};
