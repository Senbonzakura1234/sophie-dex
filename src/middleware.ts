import { auth } from '@root/auth';
import { customPages } from '@root/constants/common';
import { env } from '@root/utils/common/env';

export default auth(req => {
	if (!req.auth && !req.nextUrl.pathname.startsWith(customPages.signIn)) {
		const newUrl = new URL(customPages.signIn, req.nextUrl.origin);

		newUrl.searchParams.set('callbackUrl', req.nextUrl.href);

		return Response.redirect(newUrl);
	}

	if (
		(req.auth && req.nextUrl.pathname.startsWith(customPages.signIn)) ||
		(req.nextUrl.pathname.startsWith('/test') && env.NEXT_PUBLIC_NODE_ENV === 'production')
	) {
		const newUrl = new URL('/', req.nextUrl.origin);

		return Response.redirect(newUrl);
	}
});

export const config = { matcher: ['/profile/:path*', '/signin/:path*', '/test/:path*'] };
