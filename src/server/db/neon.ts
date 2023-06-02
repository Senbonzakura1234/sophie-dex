import { Pool } from '@neondatabase/serverless';
import { env } from '@root/utils/env.mjs';
import { drizzle } from 'drizzle-orm/neon-serverless';

import { evnIs } from '@root/utils/common';
import * as schema from './schema';

let neonDBConnection: Pool;

if (process.env.NODE_ENV === 'production') {
	neonDBConnection = new Pool({ connectionString: env.NEON_POSTGRES_URL });
} else {
	const neonDBGlobalConnection = global as typeof globalThis & {
		neonDBConnection: Pool;
	};

	if (!neonDBGlobalConnection.neonDBConnection)
		neonDBGlobalConnection.neonDBConnection = new Pool({ connectionString: env.NEON_POSTGRES_URL });

	neonDBConnection = neonDBGlobalConnection.neonDBConnection;
}

const neonDb = drizzle(neonDBConnection, { schema, logger: !evnIs('production') });

export default neonDb;
