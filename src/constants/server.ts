import 'server-only';

import type { NextResponse } from 'next/server';

export const publicResponseConfig: Parameters<typeof NextResponse.json>[1] = {
	status: 200,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
	},
};
