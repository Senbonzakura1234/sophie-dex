import { env } from '@root/utils/common/env.mjs';
import { Ratelimit } from '@upstash/ratelimit'; // for deno: see above
import { Redis } from '@upstash/redis';

export const ratelimit = new Ratelimit({
	redis: Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(env.REQUEST_COUNT_LIMIT, `${env.REQUEST_LIMIT_TIME_SPAN_S} s`),
	analytics: true,
	prefix: 'sophie-dex/api',
});
