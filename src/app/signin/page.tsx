import SignInProviders from '@components/common/dynamic/SignInProviders';
import CommonWrapper from '@components/common/static/CommonWrapper';
import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import sophieLogo from '@root/app/images/sophie-logo.webp';
import { providersData } from '@root/auth';
import type { PageProps } from '@root/types/common';
import { signInQueryValidator } from '@root/types/common/zod';
import { getBaseUrl } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import Image from 'next/image';

export default async function SignIn({ searchParams }: PageProps) {
	const signInQuery = signInQueryValidator.parse(searchParams);

	return (
		<ContentWrapper type='detail'>
			<CommonWrapper
				classNames={{
					wrapper: 'm-auto w-11/12 max-w-lg',
					content: 'pt-20 pb-12 lg:pt-32 lg:pb-20 gap-7 dark:bg-slate-950'
				}}
			>
				<Image
					alt={env.NEXT_PUBLIC_APP_CODE}
					className='mx-auto w-44 lg:w-72'
					data-url={`${getBaseUrl(true)}/assets/images/sophie-logo.png`}
					priority
					sizes='(max-width: 1024px) 176px, 288px'
					src={sophieLogo}
				/>

				<div className='flex flex-col gap-3'>
					<SignInProviders {...signInQuery} providerList={providersData} />
				</div>
			</CommonWrapper>
		</ContentWrapper>
	);
}
