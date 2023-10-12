import 'dotenv/config';

import { env } from '@root/utils/common/env.mjs';
import type { Config } from 'drizzle-kit';

export default {
	schema: './src/server/database/schema',
	out: './src/server/database/migration',
	driver: 'pg',
	breakpoints: true,
	dbCredentials: { connectionString: env.DIRECT_DB_URL },
} satisfies Config;
