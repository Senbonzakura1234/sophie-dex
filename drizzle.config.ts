import type { Config } from 'drizzle-kit';

export default {
	schema: './src/server/db/schema.ts',
	out: './drizzle',
} satisfies Config;
