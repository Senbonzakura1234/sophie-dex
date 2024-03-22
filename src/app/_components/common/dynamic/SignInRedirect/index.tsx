'use client';

import dynamic from 'next/dynamic';

const Redirect = dynamic(() => import('./Redirect'), { ssr: false });

export default function SignInRedirect() {
	return <Redirect />;
}
