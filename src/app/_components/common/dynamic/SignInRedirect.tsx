'use client';

import { permanentRedirect } from 'next/navigation';

export default function SignInRedirect() {
	const url = new URL('/signin', globalThis.location.href);

	url.searchParams.set('callbackUrl', new URL(globalThis.location.href).toString());

	return permanentRedirect(url.toString());
}
