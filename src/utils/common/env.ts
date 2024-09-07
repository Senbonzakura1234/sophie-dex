import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

console.log('Validating environment variables...');

const appCodeSchema = z
	.string()
	.regex(/(?=\S*['-])([a-zA-Z'-]+)/)
	.catch('-');

const appKeyWordSchema = z.string().regex(/[^,]+/).catch('-');

const nodeEnvEnumSchema = z.enum(['development', 'test', 'production', 'script']).catch('production');

export const env = createEnv({
	client: {
		NEXT_PUBLIC_NODE_ENV: nodeEnvEnumSchema,
		NEXT_PUBLIC_PORT: z.coerce.number().nonnegative().catch(3000),
		NEXT_PUBLIC_VERCEL_URL: z.string().optional(),

		NEXT_PUBLIC_APP_HOST: z.string().optional(),

		NEXT_PUBLIC_APP_AUTHOR: z.string().catch('-'),
		NEXT_PUBLIC_APP_AUTHOR_EMAIL: z.string().email().catch('-'),
		NEXT_PUBLIC_APP_CODE: appCodeSchema,
		NEXT_PUBLIC_APP_DESCRIPTION: z.string().catch('-'),
		NEXT_PUBLIC_APP_KEYWORD: appKeyWordSchema,
		NEXT_PUBLIC_APP_LICENSE_CODE: z.string().catch('-'),
		NEXT_PUBLIC_APP_PATH: z.string().catch('-')
	},
	server: {
		PGURL_NONPOOLING: z.string().catch(''),

		GITHUB_TOKEN: z.string().catch(''),
		GITHUB_APP_ID: z.string().catch(''),
		GITHUB_APP_SECRET: z.string().catch(''),

		AUTH_SECRET: z.string().catch(''),
		AUTH_URL: z.string().catch('')
	},
	runtimeEnv: {
		// client
		NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,
		NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
		NEXT_PUBLIC_APP_AUTHOR_EMAIL: process.env.NEXT_PUBLIC_APP_AUTHOR_EMAIL,
		NEXT_PUBLIC_APP_CODE: process.env.NEXT_PUBLIC_APP_CODE,
		NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
		NEXT_PUBLIC_APP_KEYWORD: process.env.NEXT_PUBLIC_APP_KEYWORD,
		NEXT_PUBLIC_APP_LICENSE_CODE: process.env.NEXT_PUBLIC_APP_LICENSE_CODE,
		NEXT_PUBLIC_APP_PATH: process.env.NEXT_PUBLIC_APP_PATH,
		NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,

		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_PORT: process.env.PORT,

		// server
		PGURL_NONPOOLING: process.env.PGURL_NONPOOLING,

		GITHUB_TOKEN: process.env.GITHUB_TOKEN,
		GITHUB_APP_ID: process.env.GITHUB_APP_ID,
		GITHUB_APP_SECRET: process.env.GITHUB_APP_SECRET,

		AUTH_SECRET: process.env.AUTH_SECRET,
		AUTH_URL: process.env.AUTH_URL
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION || nodeEnvEnumSchema.parse(process.env.NODE_ENV) === 'script'
});
