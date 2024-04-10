'use client';

import usePushAlert from '@root/hooks/usePushAlert';
import type { SessionProviderProps } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';

export default function AuthProvider({ children, session }: SessionProviderProps) {
	const { pushAlert } = usePushAlert();

	useEffect(() => {
		if (session?.user?.name)
			pushAlert({ isOpen: true, message: `Welcome back! ${session?.user?.name}`, type: 'SUCCESS' });
	}, [session?.user?.name, pushAlert]);

	return <SessionProvider>{children}</SessionProvider>;
}
