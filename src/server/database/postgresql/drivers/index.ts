import { neon, neonConfig } from '@neondatabase/serverless';
import * as schema from '@root/server/database/postgresql/schema';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true;

const connection = neon(env.DIRECT_DB_URL);

export const driver = drizzle(connection, { schema, logger: !evnIs('production') });
