import { Pool } from '@neondatabase/serverless';
import { effects, items, rumors, traits } from '@root/server/database/schema';
import { evnIs } from '@root/utils/common';
import { drizzle } from 'drizzle-orm/neon-serverless';

let neonDBConnection: Pool;

if (evnIs('production')) {
	neonDBConnection = new Pool();
} else {
	const globalObj = global as typeof globalThis & { neonDBConnection: Pool };

	if (!globalObj.neonDBConnection) globalObj.neonDBConnection = new Pool();

	neonDBConnection = globalObj.neonDBConnection;
}

export const driver = drizzle(neonDBConnection, {
	schema: { effects, items, rumors, traits },
	logger: !evnIs('production'),
});
