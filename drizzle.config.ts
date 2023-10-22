import { env } from '@root/utils/common/env.mjs';
import type { Config } from 'drizzle-kit';

export default {
	schema: './src/server/database/postgresql/schema',
	out: './src/server/database/postgresql/migration',
	driver: 'pg',
	breakpoints: true,
	tablesFilter: [`${env.NEXT_PUBLIC_APP_CODE}-_*`],
	dbCredentials: { connectionString: env.DIRECT_DB_URL },
} satisfies Config;
