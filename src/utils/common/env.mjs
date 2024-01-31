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

export const publicEnv = createEnv({
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
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
	isServer: typeof window === 'undefined',
});
