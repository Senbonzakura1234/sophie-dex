import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') import('server-only');

export const publicResponseConfig: Parameters<typeof Response.json>[1] = {
	status: 200,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization'
	}
};
