import SignInProviders from '@components/common/dynamic/SignInProviders';
import type { PageProps } from '@root/types/common';
import { signInQueryValidator } from '@root/types/common/zod';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function SignIn({ searchParams }: PageProps) {
	const { callbackUrl } = signInQueryValidator.parse(searchParams);
	const session = await getServerSession();

	if (session) redirect('/');

	const providers = await getProviders();

	const providerList = Object.values(providers || {});

	return <SignInProviders callbackUrl={callbackUrl} providerList={providerList} />;
}
