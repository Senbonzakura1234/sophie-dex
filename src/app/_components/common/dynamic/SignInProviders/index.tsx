import CommonWrapper from '@components/common/static/CommonWrapper';
import AtlassianIcon from '@components/icons/brand/Atlassian';
import FacebookSquareIcon from '@components/icons/brand/FacebookSquareIcon';
import GithubIcon from '@components/icons/brand/GithubIcon';
import GoogleIcon from '@components/icons/brand/GoogleIcon';
import InstagramIcon from '@components/icons/brand/InstagramIcon';
import ChevronDoubleRightIcon from '@components/icons/solid/ChevronDoubleRightIcon';
import sophieLogo from '@root/app/images/sophie-logo.webp';
import type { IconProps } from '@root/types/common/props';
import type { ProviderIdEnum, SignInQuery } from '@root/types/common/zod';
import { providerIdEnumValidator } from '@root/types/common/zod';
import { cn, getBaseUrl } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import type { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import type { FC } from 'react';
import SignInError from './SignInError';

type Props = {
	providerList: Array<ClientSafeProvider>;
} & SignInQuery;

const iconMapping = {
	atlassian: AtlassianIcon,
	facebook: FacebookSquareIcon,
	github: GithubIcon,
	google: GoogleIcon,
	instagram: InstagramIcon,
} satisfies Record<ProviderIdEnum, FC<IconProps>>;

const classMapping = {
	atlassian: 'btn-atlassian',
	facebook: 'btn-facebook',
	github: '',
	google: '',
	instagram: '',
} satisfies Record<ProviderIdEnum, string>;

export default function SignInProviders({ callbackUrl, providerList, error }: Props) {
	return (
		<>
			<CommonWrapper
				classNames={{
					wrapper: 'm-auto w-11/12 max-w-lg',
					content: 'pt-20 pb-12 lg:pt-32 lg:pb-20 gap-7 dark:bg-slate-950',
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
							<button
								className={cn(
									'btn btn-brand btn-outline border-none w-full max-w-64 lg:max-w-80 self-center group',
									classMapping[idParseResult.data],
								)}
								key={name}
								onClick={() => signIn(id, { callbackUrl })}
							>
								<div className='flex w-full items-center gap-3 overflow-hidden'>
									<div className='mr-auto flex translate-x-[-28px] items-center gap-2 transition-transform group-hover:translate-x-0 sm:translate-x-[-115px]'>
										<ChevronDoubleRightIcon className='size-5 text-inherit opacity-0 transition-opacity group-hover:opacity-100' />

										<span
											className='hidden text-nowrap opacity-0 transition-opacity group-hover:opacity-100 sm:inline'
											style={{ wordSpacing: 0 }}
										>
											Signin with
										</span>

										<span>{name}</span>
									</div>

									<Icon className='icon-provider my-auto size-6' />
								</div>
							</button>
						);
					})}
				</div>
			</CommonWrapper>

			<SignInError error={error} />
		</>
	);
}
