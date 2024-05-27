import {
	appCodeSchema,
	appKeyWordSchema,
	genericBooleanishEnumSchema,
	genericStringSchema,
	nodeEnvEnumSchema,
	providerIdEnumValidator,
} from '@root/types/common/zod';
import { capitalize } from '@root/utils/common';
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	client: {
		NEXT_PUBLIC_NODE_ENV: nodeEnvEnumSchema,
		NEXT_PUBLIC_PORT: z.coerce.number().nonnegative().catch(3000),
		NEXT_PUBLIC_VERCEL_URL: genericStringSchema.optional(),

		NEXT_PUBLIC_APP_HOST: genericStringSchema.optional(),

		NEXT_PUBLIC_APP_AUTHOR: genericStringSchema.catch('-'),
		NEXT_PUBLIC_APP_AUTHOR_EMAIL: genericStringSchema.email().catch('-'),
		NEXT_PUBLIC_APP_CODE: appCodeSchema,
		NEXT_PUBLIC_APP_DB_PREFIX: appCodeSchema.transform(val => val.replaceAll('-', '_')),
		NEXT_PUBLIC_APP_DESCRIPTION: genericStringSchema.catch('-'),
		NEXT_PUBLIC_APP_KEYWORD: appKeyWordSchema,
		NEXT_PUBLIC_APP_LICENSE_CODE: genericStringSchema.catch('-'),
		NEXT_PUBLIC_APP_NAME: appCodeSchema.transform(val => capitalize(val.replaceAll('-', ' '))),
		NEXT_PUBLIC_APP_PATH: genericStringSchema.catch('-'),
		NEXT_PUBLIC_ALLOW_AUTH_PROVIDER: genericStringSchema
			.catch('')
			.transform(val => z.array(providerIdEnumValidator).catch([]).parse(val.split(','))),
	},
	server: {
		FUNCTION_ACCESS_TOKEN: genericStringSchema,
		PGURL_NONPOOLING: genericStringSchema.catch(''),

		GITHUB_TOKEN: genericStringSchema.catch(''),
		GITHUB_APP_ID: genericStringSchema.catch(''),
		GITHUB_PROD_APP_ID: genericStringSchema.catch(''),
		GITHUB_APP_SECRET: genericStringSchema.catch(''),
		GITHUB_PROD_APP_SECRET: genericStringSchema.catch(''),

		NEXTAUTH_URL: genericStringSchema.catch(''),
		NEXTAUTH_SECRET: genericStringSchema.catch(''),
		IS_NEXTJS_ENV: genericBooleanishEnumSchema.catch('true'),
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

		FUNCTION_ACCESS_TOKEN: process.env.FUNCTION_ACCESS_TOKEN,
		PGURL_NONPOOLING: process.env.PGURL_NONPOOLING,

		GITHUB_TOKEN: process.env.GITHUB_TOKEN,
		GITHUB_APP_ID: process.env.HTTPS === 'true' ? process.env.GITHUB_HTTPS_APP_ID : process.env.GITHUB_HTTP_APP_ID,
		GITHUB_APP_SECRET:
			process.env.HTTPS === 'true' ? process.env.GITHUB_HTTPS_APP_SECRET : process.env.GITHUB_HTTP_APP_SECRET,
		GITHUB_PROD_APP_ID: process.env.GITHUB_PROD_APP_ID,
		GITHUB_PROD_APP_SECRET: process.env.GITHUB_PROD_APP_SECRET,

		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		IS_NEXTJS_ENV: process.env.IS_NEXTJS_ENV,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
