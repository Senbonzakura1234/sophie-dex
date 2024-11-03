'use client';

import { useNotification } from '@root/hooks/useNotification';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Notification = dynamic(() => import('@components/layout/dynamic/Notification'), { ssr: false });

export default function AuthNotification() {
	const session = useSession();

	const [welcomeNotification, setWelcomeNotification] = useNotification();

	useEffect(() => {
		if (session?.data?.user?.name)
			setWelcomeNotification({
				isOpen: true,
				message: `Welcome back! ${session?.data?.user?.name}`,
				type: 'SUCCESS'
			});
	}, [session?.data?.user?.name, setWelcomeNotification]);

	return <Notification {...welcomeNotification} />;
}
