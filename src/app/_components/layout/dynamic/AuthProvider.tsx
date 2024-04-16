'use client';

import usePushAlert from '@root/hooks/usePushAlert';
import type { SessionProviderProps } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';

export default function AuthProvider({ children, ...props }: SessionProviderProps) {
	const { pushAlert } = usePushAlert();

	useEffect(() => {
		if (props.session?.user?.name)
			pushAlert({ isOpen: true, message: `Welcome back! ${props.session?.user?.name}`, type: 'SUCCESS' });
	}, [props.session?.user?.name, pushAlert]);

	return <SessionProvider {...props}>{children}</SessionProvider>;
}
