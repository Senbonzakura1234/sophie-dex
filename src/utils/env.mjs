import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const nodeEnumEnvSchema = z.enum(['development', 'test', 'production']);
const useBackupDBEnumSchema = z.enum(['DISABLED', 'ENABLED']);

export const env = createEnv({
	server: {
		USE_BACKUP_DB_ON_ERROR: useBackupDBEnumSchema,

		NEON_POSTGRES_URL: z.string().nonempty(),
		SUPABASE_POSTGRES_URL: z.string().nonempty(),
	},
	client: {
		NEXT_PUBLIC_NODE_ENV: nodeEnumEnvSchema.optional(),
		NEXT_PUBLIC_PORT: z.coerce.number().nonnegative().catch(3000),
		NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
	},
	runtimeEnv: {
		USE_BACKUP_DB_ON_ERROR: process.env.USE_BACKUP_DB_ON_ERROR,

		NEON_POSTGRES_URL: process.env.NEON_POSTGRES_URL,
		SUPABASE_POSTGRES_URL: process.env.SUPABASE_POSTGRES_URL,

		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_PORT: process.env.PORT || '3000',
		NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
	},
});
