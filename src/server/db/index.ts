import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/env.mjs';

import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
	connectionString: env.SUPABASE_POSTGRES_URL,
});

export const db = drizzle(pool, { logger: !evnIs('production') });
