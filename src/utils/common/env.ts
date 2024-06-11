import { genericBooleanishEnumSchema, genericProviderIdEnumValidator } from '@root/types/common/zod/generic';
import { capitalize } from '@root/utils/common';
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const appCodeSchema = z
	.string()
	.regex(/(?=\S*['-])([a-zA-Z'-]+)/)
	.catch('-');

const appKeyWordSchema = z.string().regex(/[^,]+/).catch('-');

const nodeEnvEnumSchema = z.enum(['development', 'test', 'production']).catch('production');

export const env = createEnv({
	client: {
		NEXT_PUBLIC_NODE_ENV: nodeEnvEnumSchema,
		NEXT_PUBLIC_PORT: z.coerce.number().nonnegative().catch(3000),
		NEXT_PUBLIC_VERCEL_URL: z.string().optional(),

		NEXT_PUBLIC_APP_HOST: z.string().optional(),

		NEXT_PUBLIC_APP_AUTHOR: z.string().catch('-'),
		NEXT_PUBLIC_APP_AUTHOR_EMAIL: z.string().email().catch('-'),
		NEXT_PUBLIC_APP_CODE: appCodeSchema,
		NEXT_PUBLIC_APP_DB_PREFIX: appCodeSchema.transform(val => val.replaceAll('-', '_')),
		NEXT_PUBLIC_APP_DESCRIPTION: z.string().catch('-'),
		NEXT_PUBLIC_APP_KEYWORD: appKeyWordSchema,
		NEXT_PUBLIC_APP_LICENSE_CODE: z.string().catch('-'),
		NEXT_PUBLIC_APP_NAME: appCodeSchema.transform(val => capitalize(val.replaceAll('-', ' '))),
		NEXT_PUBLIC_APP_PATH: z.string().catch('-'),
		NEXT_PUBLIC_ALLOW_AUTH_PROVIDER: z
			.string()
			.catch('')
			.transform(val => z.array(genericProviderIdEnumValidator).catch([]).parse(val.split(',')))
	},
	server: {
		PGURL_NONPOOLING: z.string().catch(''),

		GITHUB_TOKEN: z.string().catch(''),
		GITHUB_APP_ID: z.string().catch(''),
		GITHUB_PROD_APP_ID: z.string().catch(''),
		GITHUB_APP_SECRET: z.string().catch(''),
		GITHUB_PROD_APP_SECRET: z.string().catch(''),

		AUTH_DRIZZLE_URL: z.string().catch(''),
		AUTH_SECRET: z.string().catch(''),
		AUTH_URL: z.string().catch(''),
		IS_NEXTJS_ENV: genericBooleanishEnumSchema.catch('true')
	},
	runtimeEnv: {
		NEXT_PUBLIC_APP_HOST: process.env.NEXT_PUBLIC_APP_HOST,
		NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
		NEXT_PUBLIC_APP_AUTHOR_EMAIL: process.env.NEXT_PUBLIC_APP_AUTHOR_EMAIL,
		NEXT_PUBLIC_APP_CODE: process.env.NEXT_PUBLIC_APP_CODE,
		NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
		NEXT_PUBLIC_APP_KEYWORD: process.env.NEXT_PUBLIC_APP_KEYWORD,
		NEXT_PUBLIC_APP_LICENSE_CODE: process.env.NEXT_PUBLIC_APP_LICENSE_CODE,
		NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
		NEXT_PUBLIC_ALLOW_AUTH_PROVIDER: process.env.NEXT_PUBLIC_ALLOW_AUTH_PROVIDER,

		NEXT_PUBLIC_APP_DB_PREFIX: process.env.NEXT_PUBLIC_APP_CODE,
		NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_CODE,
		NEXT_PUBLIC_APP_PATH: `${process.env.NEXT_PUBLIC_APP_AUTHOR || '-'}/${process.env.NEXT_PUBLIC_APP_CODE || '-'}`,
		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_PORT: process.env.PORT,

		PGURL_NONPOOLING: process.env.PGURL_NONPOOLING,

		GITHUB_TOKEN: process.env.GITHUB_TOKEN,
		GITHUB_APP_ID: process.env.HTTPS === 'true' ? process.env.GITHUB_HTTPS_APP_ID : process.env.GITHUB_HTTP_APP_ID,
		GITHUB_APP_SECRET:
			process.env.HTTPS === 'true' ? process.env.GITHUB_HTTPS_APP_SECRET : process.env.GITHUB_HTTP_APP_SECRET,
		GITHUB_PROD_APP_ID: process.env.GITHUB_PROD_APP_ID,
		GITHUB_PROD_APP_SECRET: process.env.GITHUB_PROD_APP_SECRET,

		AUTH_DRIZZLE_URL: process.env.PGURL_NONPOOLING,
		AUTH_SECRET: process.env.AUTH_SECRET,
		AUTH_URL: process.env.AUTH_URL,
		IS_NEXTJS_ENV: process.env.IS_NEXTJS_ENV
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION
});
