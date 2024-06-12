'use client';

import type { providerConfig } from '@root/auth';
import type { ImprovePick } from '@root/types/common';
import type { SignInQuery } from '@root/types/common/zod';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

type Props = typeof providerConfig & ImprovePick<SignInQuery, 'callbackUrl'>;

export default function SignInTrigger({ id, callbackUrl }: Props) {
	useEffect(() => {
		void signIn(id, { callbackUrl });
	}, [callbackUrl, id]);

	return null;
}
