'use client';

import useNotification from '@root/hooks/useNotification';
import type { ImprovePick } from '@root/types/common';
import type { SignInQuery } from '@root/types/common/zod';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Notification = dynamic(() => import('@components/layout/dynamic/Notification'), { ssr: false });

type Props = ImprovePick<SignInQuery, 'error'>;

export default function SignInError({ error }: Props) {
	const [signInNotification, setSignInNotification] = useNotification();

	useEffect(() => {
		if (error) setSignInNotification({ isOpen: true, message: 'Provider Unsupported', type: 'ERROR' });
	}, [error, setSignInNotification]);

	return <Notification {...signInNotification} />;
}
