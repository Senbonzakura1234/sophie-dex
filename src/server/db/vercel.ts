import { evnIs } from '@root/utils/common';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import schema from './schema';

let vercelDBConnection: typeof sql;

if (evnIs('production')) {
	vercelDBConnection = sql;
} else {
	const connection = global as typeof globalThis & {
		vercelDBConnection: typeof sql;
	};

	if (!connection.vercelDBConnection) connection.vercelDBConnection = sql;

	vercelDBConnection = connection.vercelDBConnection;
}

const vercelDB = drizzle(vercelDBConnection, { schema, logger: !evnIs('production') });

export default vercelDB;
