import { APP_DB_PREFIX } from '@root/constants/common';
import { env } from '@root/utils/common/env';
import type { Config } from 'drizzle-kit';

const config: Config = {
	schema: './src/server/postgresql/schema',
	out: './src/server/postgresql/migration',
	dialect: 'postgresql',
	breakpoints: true,
	tablesFilter: [`${APP_DB_PREFIX}-_*`],
	dbCredentials: { url: env.PGURL_NONPOOLING },
	strict: true
};

export default config;
