import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
	server: {
		PGURL_NONPOOLING: z.string().catch(''),
		GITHUB_TOKEN: z.string().catch(''),

		REQUEST_COUNT_LIMIT: z.coerce.number().nonnegative().catch(10),
		REQUEST_LIMIT_TIME_SPAN_S: z.coerce.number().nonnegative().catch(10),

		REDIS_URL: z.string().catch(''),
		UPSTASH_REDIS_REST_TOKEN: z.string().catch(''),
		UPSTASH_REDIS_REST_URL: z.string().catch(''),
	},
	runtimeEnv: {
		REQUEST_COUNT_LIMIT: process.env.REQUEST_COUNT_LIMIT,
		REQUEST_LIMIT_TIME_SPAN_S: process.env.REQUEST_LIMIT_TIME_SPAN_S,

		GITHUB_TOKEN: process.env.GITHUB_TOKEN,
		PGURL_NONPOOLING: process.env.PGURL_NONPOOLING,
		REDIS_URL: process.env.REDIS_URL,
		UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
		UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
	isServer: typeof window === 'undefined',
});
