import { Pool } from '@neondatabase/serverless';
import { evnIs } from '@root/utils/common';
import { drizzle } from 'drizzle-orm/neon-serverless';

import schema from './schema';

let neonDBConnection: Pool;

if (evnIs('production')) {
	neonDBConnection = new Pool();
} else {
	const globalObj = global as typeof globalThis & { neonDBConnection: Pool };

	if (!globalObj.neonDBConnection) globalObj.neonDBConnection = new Pool();

	neonDBConnection = globalObj.neonDBConnection;
}

const neonDb = drizzle(neonDBConnection, { schema, logger: !evnIs('production') });

export default neonDb;
