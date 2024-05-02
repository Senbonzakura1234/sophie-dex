import { env } from '@root/utils/common/env';
import type { Config } from 'drizzle-kit';

export default {
	schema: './src/server/database/postgresql/schema',
	out: './src/server/database/postgresql/migration',
	driver: 'pg',
	breakpoints: true,
	tablesFilter: [`${env.NEXT_PUBLIC_APP_DB_PREFIX}-_*`],
	dbCredentials: { connectionString: env.PGURL_NONPOOLING },
} satisfies Config;
