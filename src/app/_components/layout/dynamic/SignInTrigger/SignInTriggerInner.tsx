'use client';

import type { SignInTriggerProps } from '@components/layout/dynamic/SignInTrigger';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function SignInTriggerInner({ id, callbackUrl }: SignInTriggerProps) {
	useEffect(() => {
		const timer = setTimeout(() => {
			void signIn(id, { callbackUrl }).then();
		}, 0);

		return () => void clearTimeout(timer);
	}, [callbackUrl, id]);

	return null;
}
