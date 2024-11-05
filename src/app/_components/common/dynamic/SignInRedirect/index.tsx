'use client';

import dynamic from 'next/dynamic';

const SignInRedirectInner = dynamic(() => import('@components/common/dynamic/SignInRedirect/SignInRedirectInner'), {
	ssr: false
});

export default function SignInRedirect() {
	return <SignInRedirectInner />;
}
