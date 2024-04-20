'use client';

import usePushAlert from '@root/hooks/usePushAlert';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function WelcomeBackAlertTrigger() {
	const { status, data } = useSession();
	const { pushAlert } = usePushAlert();

	useEffect(() => {
		if (status === 'authenticated')
			pushAlert({ isOpen: true, message: `Welcome back! ${data.user?.name}`, type: 'SUCCESS' });
	}, [data?.user?.name, pushAlert, status]);

	return null;
}
