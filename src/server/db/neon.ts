import { Pool } from '@neondatabase/serverless';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/env.mjs';
import { drizzle } from 'drizzle-orm/neon-serverless';

import schema from './schema';

let neonDBConnection: Pool;

if (evnIs('production')) {
	neonDBConnection = new Pool({ connectionString: env.NEON_POSTGRES_URL });
} else {
	const connection = global as typeof globalThis & {
		neonDBConnection: Pool;
	};

	if (!connection.neonDBConnection)
		connection.neonDBConnection = new Pool({ connectionString: env.NEON_POSTGRES_URL });

	neonDBConnection = connection.neonDBConnection;
}

const neonDb = drizzle(neonDBConnection, { schema, logger: !evnIs('production') });

export default neonDb;
