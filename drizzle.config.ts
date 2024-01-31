import { publicEnv } from '@root/utils/common/env.mjs';
import { serverEnv } from '@root/utils/server/env.mjs';
import type { Config } from 'drizzle-kit';

export default {
	schema: './src/server/database/postgresql/schema',
	out: './src/server/database/postgresql/migration',
	driver: 'pg',
	breakpoints: true,
	tablesFilter: [`${publicEnv.NEXT_PUBLIC_APP_DB_PREFIX}-_*`],
	dbCredentials: { connectionString: serverEnv.PGURL_NONPOOLING },
} satisfies Config;
