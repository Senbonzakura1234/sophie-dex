import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const nodeEnvSchema = z.enum(['development', 'test', 'production']);

export const env = createEnv({
	server: { SUPABASE_POSTGRES_URL: z.string().nonempty() },
	client: {
		NEXT_PUBLIC_NODE_ENV: nodeEnvSchema.optional(),
		NEXT_PUBLIC_PORT: z.coerce.number().nonnegative().catch(3000),
		NEXT_PUBLIC_VERCEL_URL: z.coerce.number().nonnegative().catch(3000),
	},
	runtimeEnv: {
		SUPABASE_POSTGRES_URL: process.env.POSTGRES_URL,

		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_PORT: process.env.PORT || '3000',
		NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
	},
});
