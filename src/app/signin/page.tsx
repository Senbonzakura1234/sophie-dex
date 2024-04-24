import SignInProviders from '@components/common/dynamic/SignInProviders';
import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import type { PageProps } from '@root/types/common';
import { signInQueryValidator } from '@root/types/common/zod';
import { getSessionResult } from '@root/utils/server';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function SignIn({ searchParams }: PageProps) {
	const signInQuery = signInQueryValidator.parse(searchParams);
	const { result: session } = await getSessionResult();

	if (session) redirect('/');

	const providers = await getProviders();

	const providerList = Object.values(providers || {});

	return (
		<ContentWrapper type='detail'>
			<SignInProviders {...signInQuery} providerList={providerList} />
		</ContentWrapper>
	);
}
