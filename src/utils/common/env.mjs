import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const appCodeSchema = z
	.string()
	.regex(/(?=\S*['-])([a-zA-Z'-]+)/)
	.catch('-');
const appKeyWordSchema = z.string().regex(/[^,]+/).catch('-');
const nodeEnumEnvSchema = z.enum(['development', 'test', 'production']).catch('production');

/** @type {(input: string) => string} */
const capitalize = input =>
	input
		? input.replace(/(^\w|\s\w)(\S*)/g, (_, firstLetter, rest) => firstLetter.toUpperCase() + rest.toLowerCase())
		: '';

export const env = createEnv({
	client: {
		NEXT_PUBLIC_NODE_ENV: nodeEnumEnvSchema,
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
	},
	server: {
		PGURL_NONPOOLING: z.string().catch(''),

		GITHUB_TOKEN: z.string().catch(''),
		GITHUB_APP_ID: z.string().catch(''),
		GITHUB_APP_SECRET: z.string().catch(''),

		NEXTAUTH_URL: z.string().catch(''),
		NEXTAUTH_SECRET: z.string().catch(''),

		REQUEST_COUNT_LIMIT: z.coerce.number().nonnegative().catch(10),
		REQUEST_LIMIT_TIME_SPAN_S: z.coerce.number().nonnegative().catch(10),

		REDIS_URL: z.string().catch(''),
		UPSTASH_REDIS_REST_TOKEN: z.string().catch(''),
		UPSTASH_REDIS_REST_URL: z.string().catch(''),
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

		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

		REQUEST_COUNT_LIMIT: process.env.REQUEST_COUNT_LIMIT,
		REQUEST_LIMIT_TIME_SPAN_S: process.env.REQUEST_LIMIT_TIME_SPAN_S,

		REDIS_URL: process.env.REDIS_URL,
		UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
		UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
