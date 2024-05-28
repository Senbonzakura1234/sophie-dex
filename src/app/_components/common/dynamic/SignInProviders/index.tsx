import CommonWrapper from '@components/common/static/CommonWrapper';
import AtlassianIcon from '@components/icons/brand/Atlassian';
import FacebookSquareIcon from '@components/icons/brand/FacebookSquareIcon';
import GithubIcon from '@components/icons/brand/GithubIcon';
import GoogleIcon from '@components/icons/brand/GoogleIcon';
import InstagramIcon from '@components/icons/brand/InstagramIcon';
import sophieLogo from '@root/app/images/sophie-logo.webp';
import type { IconProps } from '@root/types/common/props';
import type { ProviderIdEnum, SignInQuery } from '@root/types/common/zod';
import { providerIdEnumValidator } from '@root/types/common/zod';
import { getBaseUrl } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import type { ClientSafeProvider } from 'next-auth/react';
import Image from 'next/image';
import type { FC } from 'react';
import ProviderBtn from './ProviderBtn';
import SignInError from './SignInError';

type Props = {
	providerList: Array<ClientSafeProvider>;
} & SignInQuery;

const iconMapping = {
	atlassian: AtlassianIcon,
	facebook: FacebookSquareIcon,
	github: GithubIcon,
	google: GoogleIcon,
	instagram: InstagramIcon
} satisfies Record<ProviderIdEnum, FC<IconProps>>;

export default function SignInProviders({ callbackUrl, providerList, error }: Props) {
	return (
		<>
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
					<h1 className='mx-auto text-lg lg:text-2xl'>Sign-in to {env.NEXT_PUBLIC_APP_NAME}</h1>

					{providerList.map(({ id, name }) => {
						const idParseResult = providerIdEnumValidator.safeParse(id);

						if (!idParseResult.success) return null;

						const Icon = iconMapping[idParseResult.data];

						return (
							<ProviderBtn
								callbackUrl={callbackUrl}
								id={id}
								key={id}
								name={name}
								providerId={idParseResult.data}
							>
								<Icon className='icon-provider my-auto size-6' />
							</ProviderBtn>
						);
					})}
				</div>
			</CommonWrapper>

			<SignInError error={error} />
		</>
	);
}
