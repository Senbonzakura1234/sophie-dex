import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { APIResult } from './types/common';
import { APIError } from './types/common';
import { tryCatchHandler, writeLog } from './utils/common';
import { getIpAddress } from './utils/server';
import { ratelimit } from './utils/server/ratelimit';

export async function middleware(request: NextRequest) {
	const ipAddress = getIpAddress(request.headers);

	writeLog({ args: [`Request from IP: [${ipAddress}]`], type: 'log' });

	const ratelimitResult = await tryCatchHandler(ratelimit.limit(ipAddress));

	if (!ratelimitResult.isSuccess) {
		return NextResponse.json({
			result: null,
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }),
			isSuccess: false,
		} satisfies APIResult);
	}

	if (!ratelimitResult.data.success) {
		return NextResponse.json({
			result: null,
			error: new APIError({ code: 'TOO_MANY_REQUESTS' }),
			isSuccess: false,
		} satisfies APIResult);
	}

	return NextResponse.next();
}

export const config = { matcher: '/api/trpc/:path*' };
