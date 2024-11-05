import SignInTrigger from '@components/layout/dynamic/SignInTrigger';
import { providerConfig } from '@root/auth';
import type { PageProps } from '@root/types/common/props';
import { signInQueryValidator } from '@root/types/common/zod';
import { resolveSearchParams } from '@root/utils/common';
import { Suspense } from 'react';

export default async function SignIn({ searchParams }: Readonly<PageProps>) {
	const { callbackUrl } = signInQueryValidator.parse(await resolveSearchParams(searchParams));

	return (
		<div className='fixed z-[100] flex h-screen w-screen place-content-center bg-base-100'>
			<div className='m-auto inline-flex flex-wrap items-center gap-2 text-center text-primary'>
				<span className='text-2xl capitalize xl:text-3xl'>please wait while we signing you in</span>

				<span className='loading loading-bars loading-md mx-auto xl:loading-lg' />
			</div>

			<Suspense>
				<SignInTrigger callbackUrl={callbackUrl} {...providerConfig} />
			</Suspense>
		</div>
	);
}
