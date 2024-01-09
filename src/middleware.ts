import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { APIError } from './types/common';
import { tryCatchHandler, writeLog } from './utils/common';
import { getIpAddress } from './utils/server';
import { ratelimit } from './utils/server/ratelimit';

export async function middleware(request: NextRequest) {
	const res = NextResponse.next();

	if (request.nextUrl.pathname.startsWith('/api/trpc/')) {
		const ratelimitResult = await tryCatchHandler(ratelimit.limit(`IP_ADDRESS:${getIpAddress(request.headers)}`));

		if (!ratelimitResult.isSuccess) {
			writeLog({ args: [`Error get ratelimit data:`, ratelimitResult.error], type: 'error' });

			return NextResponse.json({
				data: null,
				error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }),
				isSuccess: false,
			});
		}

		if (!ratelimitResult.data.success)
			return NextResponse.json({
				data: null,
				error: new APIError({ code: 'TOO_MANY_REQUESTS' }),
				isSuccess: false,
			});
	}

	return res;
}
