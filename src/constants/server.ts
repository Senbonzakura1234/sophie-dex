import type { ModuleIdEnum } from '@root/types/common/zod/generic';
import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

export const publicResponseConfig: Parameters<typeof Response.json>[1] = {
	status: 200,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization'
	}
};

export const sitemapPriorityArray = [
	'home',
	'list_effect',
	'list_item',
	'list_rumor',
	'list_trait',
	'detail_effect',
	'detail_item',
	'detail_rumor',
	'detail_trait',
	'about',
	'license'
] satisfies Array<'home' | `list_${ModuleIdEnum}` | `detail_${ModuleIdEnum}` | 'about' | 'license'>;
