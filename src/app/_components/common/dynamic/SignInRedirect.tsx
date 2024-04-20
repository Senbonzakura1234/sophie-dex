'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function SignInRedirect() {
	useEffect(() => {
		signIn();
	}, []);

	return null;
}
