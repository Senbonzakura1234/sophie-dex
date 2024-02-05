import 'server-only';

import type { NextRequest } from 'next/server';

export const getIpAddress = (headers: NextRequest['headers']) =>
	(headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0] || 'anonymous';
