import { env } from '@root/utils/common/env';
import { track } from '@vercel/analytics';
import { tryCatchHandlerSync } from '../common';

export const trackEventClient = (...args: Parameters<typeof track>) => {
	if (env.NEXT_PUBLIC_NODE_ENV === 'production')
		return tryCatchHandlerSync(() => track(...args), 'trackEventClient.track');
};
