import { auth } from '@root/auth';
import { customPages } from '@root/constants/common';
import { env } from '@root/utils/common/env';

const testingPath = ['/test', '/api/test', '/api/export'];

export default auth(req => {
	if (testingPath.some(p => req.nextUrl.pathname.startsWith(p)) && env.NEXT_PUBLIC_NODE_ENV === 'production')
		return Response.json('Forbidden resource', { status: 403 });

	if (!req.auth && !req.nextUrl.pathname.startsWith(customPages.signIn)) {
		const newUrl = new URL(customPages.signIn, req.nextUrl.origin);

		newUrl.searchParams.set('callbackUrl', req.nextUrl.href);

		return Response.redirect(newUrl);
	}

	if (req.auth && req.nextUrl.pathname.startsWith(customPages.signIn)) {
		const newUrl = new URL('/', req.nextUrl.origin);

		return Response.redirect(newUrl);
	}
});

export const config = {
	matcher: ['/profile/:path*', '/signin/:path*', '/test/:path*', '/api/test/:path*', '/api/export/:path*']
};
