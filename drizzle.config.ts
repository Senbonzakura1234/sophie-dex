import 'dotenv/config';

import { env } from '@root/utils/env.mjs';
import type { Config } from 'drizzle-kit';

export default {
	schema: './src/server/db/schema',
	out: './src/server/db/migration',
	driver: 'pg',
	breakpoints: true,
	dbCredentials: { connectionString: env.DIRECT_DB_URL },
} satisfies Config;
