import { auth } from '@root/auth';
import { customPages } from '@root/constants/common';
import { env } from '@root/utils/common/env';
import { genericModuleIdEnumSchema } from './types/common/zod/generic';

const testingPath = ['/test', '/api/test', '/api/export'];
const protectedPath = ['/profile'];
const homePath = '/';

export default auth(req => {
	// Prevent testing path access on production
	if (testingPath.some(p => req.nextUrl.pathname.startsWith(p)) && env.NEXT_PUBLIC_NODE_ENV === 'production')
		return Response.json('Forbidden resource', { status: 403 });

	// Redirect to login on UnAuthenticated when access Protected Page
	if (!req.auth && protectedPath.some(p => req.nextUrl.pathname.startsWith(p))) {
		const newUrl = new URL(customPages.signIn, req.nextUrl.origin);

		newUrl.searchParams.set('callbackUrl', req.nextUrl.href);

		return Response.redirect(newUrl);
	}

	// Redirect to home on Authenticated
	if (req.auth && req.nextUrl.pathname.startsWith(customPages.signIn)) {
		const newUrl = new URL('/', req.nextUrl.origin);

		return Response.redirect(newUrl);
	}

	// Redirect to list page on valid home page search params
	if (req.auth && req.nextUrl.pathname === homePath) {
		const searchParams = req.nextUrl.searchParams;

		const search = searchParams.get('search');

		if (search) {
			const [firstPart = '', secondPart] = search.split(':=');

			const moduleId = genericModuleIdEnumSchema.catch('item').parse(firstPart);

			const newUrl = new URL(`/${moduleId}`, req.nextUrl.origin);

			newUrl.searchParams.set('search', secondPart ? secondPart : search);

			return Response.redirect(newUrl);
		}
	}
});

export const config = {
	matcher: ['/profile/:path*', '/signin/:path*', '/test/:path*', '/api/test/:path*', '/api/export/:path*', '/']
};
