import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/env.mjs';

import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

declare global {
	// eslint-disable-next-line no-var
	var db: NodePgDatabase | undefined;
}

const pool = new Pool({
	connectionString: env.SUPABASE_POSTGRES_URL,
});

export const db = global.db || drizzle(pool, { logger: !evnIs('production') });

if (evnIs('production')) global.db = db;
