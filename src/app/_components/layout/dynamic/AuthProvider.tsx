'use client';

import { useNotification } from '@root/hooks/useNotification';
import type { SessionProviderProps } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Notification = dynamic(() => import('@components/layout/dynamic/Notification'));

export default function AuthProvider({ children, ...props }: SessionProviderProps) {
	const [welcomeNotification, setWelcomeNotification] = useNotification();

	useEffect(() => {
		if (props.session?.user?.name)
			setWelcomeNotification({
				isOpen: true,
				message: `Welcome back! ${props.session?.user?.name}`,
				type: 'SUCCESS'
			});
	}, [props.session?.user?.name, setWelcomeNotification]);

	return (
		<>
			<SessionProvider {...props}>{children}</SessionProvider>
			<Notification {...welcomeNotification} />
		</>
	);
}
