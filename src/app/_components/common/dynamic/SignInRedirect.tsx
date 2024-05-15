'use client';

import { permanentRedirect } from 'next/navigation';

export default function SignInRedirect() {
	const url = new URL('/signin', window.location.href);

	url.searchParams.set('callbackUrl', new URL(window.location.href).toString());

	return permanentRedirect(url.toString());
}
