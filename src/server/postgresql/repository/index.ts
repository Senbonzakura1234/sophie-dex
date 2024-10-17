import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { neon } from '@neondatabase/serverless';
import * as schema from '@root/server/postgresql/schema';
import { drizzle } from 'drizzle-orm/neon-http';

const connection = neon<boolean, boolean>(env.PGURL_NONPOOLING);

export const postgresql = drizzle(connection, { schema, logger: env.NEXT_PUBLIC_NODE_ENV !== 'production' });
