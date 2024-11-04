import SignInTrigger from '@components/layout/dynamic/SignInTrigger';
import Loader from '@components/loading/Loader';
import { providerConfig } from '@root/auth';
import type { PageProps } from '@root/types/common/props';
import { signInQueryValidator } from '@root/types/common/zod';
import { resolveSearchParams } from '@root/utils/common';
import { Suspense } from 'react';

export default async function SignIn({ searchParams }: Readonly<PageProps>) {
	const { callbackUrl } = signInQueryValidator.parse(await resolveSearchParams(searchParams));

	return (
		<div className='fixed z-[100] flex h-screen w-screen place-content-center bg-base-100'>
			<Loader className='m-auto aspect-square w-1/6 text-primary' />

			<Suspense>
				<SignInTrigger callbackUrl={callbackUrl} {...providerConfig} />
			</Suspense>
		</div>
	);
}
