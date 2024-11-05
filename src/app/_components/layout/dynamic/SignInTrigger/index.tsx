'use client';

import type { providerConfig } from '@root/auth';
import type { ImprovePick } from '@root/types/common';
import type { SignInQuery } from '@root/types/common/zod';
import dynamic from 'next/dynamic';

const SignInTriggerInner = dynamic(() => import('@components/layout/dynamic/SignInTrigger/SignInTriggerInner'), {
	ssr: false
});

export type SignInTriggerProps = Readonly<typeof providerConfig & ImprovePick<SignInQuery, 'callbackUrl'>>;

export default function SignInTrigger(props: SignInTriggerProps) {
	return <SignInTriggerInner {...props} />;
}
