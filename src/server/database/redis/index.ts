import 'server-only';

import { serverEnv } from '@root/utils/server/env.mjs';
import { Redis } from '@upstash/redis';

export const redis = new Redis({ url: serverEnv.UPSTASH_REDIS_REST_URL, token: serverEnv.UPSTASH_REDIS_REST_TOKEN });
