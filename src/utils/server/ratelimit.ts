import 'server-only';

import { redis } from '@root/server/database/redis';
import { publicEnv } from '@root/utils/common/env.mjs';
import { serverEnv } from '@root/utils/server/env.mjs';
import { Ratelimit } from '@upstash/ratelimit';

export const ratelimit = new Ratelimit({
	redis,
	limiter: Ratelimit.slidingWindow(serverEnv.REQUEST_COUNT_LIMIT, `${serverEnv.REQUEST_LIMIT_TIME_SPAN_S} s`),
	analytics: false,
	prefix: `${publicEnv.NEXT_PUBLIC_APP_CODE}/api`,
});
