import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const nodeEnumEnvSchema = z.enum(['development', 'test', 'production']).catch('production');
const dbListEnumSchema = z.enum(['NEON_DB', 'VERCEL_DB']).catch('NEON_DB');
const appCodeSchema = z
	.string()
	.regex(/(?=\S*['-])([a-zA-Z'-]+)/)
	.catch('-');
const appKeyWordSchema = z.string().regex(/[^,]+/).catch('-');

/** @type {Record<string, string | undefined>}*/
const dbURLMap = { NEON_DB: process.env.PGURL_NONPOOLING, VERCEL_DB: process.env.POSTGRES_URL_NON_POOLING };

export const env = createEnv({
	server: {
		PRIMARY_DB: dbListEnumSchema,
		SECONDARY_DB: dbListEnumSchema,
		DIRECT_DB_URL: z.string().catch(''),
	},
	client: {
		NEXT_PUBLIC_NODE_ENV: nodeEnumEnvSchema,
		NEXT_PUBLIC_PORT: z.coerce.number().nonnegative().catch(3000),
		NEXT_PUBLIC_VERCEL_URL: z.string().optional(),

		NEXT_PUBLIC_APP_HOST: z.string().optional(),

		NEXT_PUBLIC_APP_NAME: z.string().catch('-'),
		NEXT_PUBLIC_APP_CODE: appCodeSchema,
		NEXT_PUBLIC_APP_DESCRIPTION: z.string().catch('-'),
		NEXT_PUBLIC_APP_KEYWORD: appKeyWordSchema,
		NEXT_PUBLIC_APP_AUTHOR: z.string().catch('-'),
		NEXT_PUBLIC_APP_AUTHOR_EMAIL: z.string().email().catch('-'),
	},
	runtimeEnv: {
		PRIMARY_DB: process.env.PRIMARY_DB,
		SECONDARY_DB: process.env.SECONDARY_DB,
		DIRECT_DB_URL: dbURLMap[process.env.PRIMARY_DB || ''],

		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_PORT: process.env.PORT || '3000',
		NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,

		NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,

		NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
		NEXT_PUBLIC_APP_CODE: process.env.NEXT_PUBLIC_APP_CODE,
		NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
		NEXT_PUBLIC_APP_KEYWORD: process.env.NEXT_PUBLIC_APP_KEYWORD,
		NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
		NEXT_PUBLIC_APP_AUTHOR_EMAIL: process.env.NEXT_PUBLIC_APP_AUTHOR_EMAIL,
	},
});
