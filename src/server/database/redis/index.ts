import { env } from '@root/utils/common/env.mjs';
import { Redis } from '@upstash/redis';

export const driver = new Redis({ url: env.UPSTASH_REDIS_REST_URL, token: env.UPSTASH_REDIS_REST_TOKEN });
