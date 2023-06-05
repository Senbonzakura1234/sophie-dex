import { evnIs } from '@root/utils/common';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import schema from './schema';

let vercelDBConnection: typeof sql;

if (process.env.NODE_ENV === 'production') {
	vercelDBConnection = sql;
} else {
	const vercelDBGlobalConnection = global as typeof globalThis & {
		vercelDBConnection: typeof sql;
	};

	if (!vercelDBGlobalConnection.vercelDBConnection) vercelDBGlobalConnection.vercelDBConnection = sql;

	vercelDBConnection = vercelDBGlobalConnection.vercelDBConnection;
}

const vercelDB = drizzle(vercelDBConnection, { schema, logger: !evnIs('production') });

export default vercelDB;
