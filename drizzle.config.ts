import { env } from '@root/utils/common/env';
import type { Config } from 'drizzle-kit';

const config: Config = {
	schema: './src/server/postgresql/schema',
	out: './src/server/postgresql/migration',
	dialect: 'postgresql',
	breakpoints: true,
	tablesFilter: [`${env.NEXT_PUBLIC_APP_DB_PREFIX}-_*`],
	dbCredentials: { url: env.PGURL_NONPOOLING },
};

export default config;
