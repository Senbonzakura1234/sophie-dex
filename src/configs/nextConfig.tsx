import getConfig from 'next/config';
import { z } from 'zod';

const nextConfigSchema = z.object({
	appId: z.string(),
	author: z.object({ name: z.string(), email: z.string().email(), url: z.string().url() }),
	version: z.string(),
});

const result = nextConfigSchema.safeParse(getConfig()?.publicRuntimeConfig);

const DEFAULT_CONFIG: z.infer<typeof nextConfigSchema> = {
	appId: '',
	author: { name: 'foo', email: 'foo@bar.piece', url: 'https://foo.bar' },
	version: '',
};

export const NEXT_CONFIG = result.success ? result.data : DEFAULT_CONFIG;
