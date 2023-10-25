import 'server-only';

import { redis } from '@root/server/database/redis';
import { env } from '@root/utils/common/env.mjs';
import { Ratelimit } from '@upstash/ratelimit'; // for deno: see above

export const ratelimit = new Ratelimit({
	redis,
	limiter: Ratelimit.slidingWindow(env.REQUEST_COUNT_LIMIT, `${env.REQUEST_LIMIT_TIME_SPAN_S} s`),
	analytics: true,
	prefix: `${env.NEXT_PUBLIC_APP_CODE}/api`,
});
