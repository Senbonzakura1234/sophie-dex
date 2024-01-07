// import { APIError } from '@root/types/common';
// import { tryCatchHandler, writeLog } from '@root/utils/common';
// import { getIpAddress } from '@root/utils/server';
// import { ratelimit } from '@root/utils/server/ratelimit';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	// const ratelimitResult = await tryCatchHandler(ratelimit.limit(`IP_ADDRESS:${getIpAddress(request.headers)}`));

	// if (!ratelimitResult.isSuccess) {
	// 	writeLog({ args: [`Error get ratelimit data:`, ratelimitResult.error], type: 'error' });

	// 	return NextResponse.json({
	// 		data: null,
	// 		error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }),
	// 		isSuccess: false,
	// 	});
	// }

	// if (!ratelimitResult.data.success)
	// 	return NextResponse.json({
	// 		data: null,
	// 		error: new APIError({ code: 'TOO_MANY_REQUESTS' }),
	// 		isSuccess: false,
	// 	});

	return NextResponse.next();
}
