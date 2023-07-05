import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const nodeEnumEnvSchema = z.enum(['development', 'test', 'production']);
const dbListEnumSchema = z.enum(['NEON_DB', 'VERCEL_DB']);

/** @type {Record<string, string | undefined>}*/
const dbURLMap = { NEON_DB: process.env.PGURL_NONPOOLING, VERCEL_DB: process.env.POSTGRES_URL_NON_POOLING };

export const env = createEnv({
	server: {
		PRIMARY_DB: dbListEnumSchema,
		SECONDARY_DB: dbListEnumSchema,
		DIRECT_DB_URL: z.string().nonempty(),

		SUPABASE_POSTGRES_URL: z.string().nonempty(),
	},
	client: {
		NEXT_PUBLIC_NODE_ENV: nodeEnumEnvSchema.optional(),
		NEXT_PUBLIC_PORT: z.coerce.number().nonnegative().catch(3000),
		NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
	},
	runtimeEnv: {
		PRIMARY_DB: process.env.PRIMARY_DB,
		SECONDARY_DB: process.env.SECONDARY_DB,
		DIRECT_DB_URL: dbURLMap[process.env.PRIMARY_DB || ''],

		SUPABASE_POSTGRES_URL: process.env.SUPABASE_POSTGRES_URL,

		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_PORT: process.env.PORT || '3000',
		NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
	},
});
