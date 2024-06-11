import AtlassianIcon from '@components/icons/brand/Atlassian';
import FacebookSquareIcon from '@components/icons/brand/FacebookSquareIcon';
import GithubIcon from '@components/icons/brand/GithubIcon';
import GoogleIcon from '@components/icons/brand/GoogleIcon';
import InstagramIcon from '@components/icons/brand/InstagramIcon';
import type { providersData } from '@root/auth';
import type { IconProps } from '@root/types/common/props';
import type { SignInQuery } from '@root/types/common/zod';
import type { ProviderIdEnum } from '@root/types/common/zod/generic';
import { genericProviderIdEnumValidator } from '@root/types/common/zod/generic';
import { env } from '@root/utils/common/env';
import type { FC } from 'react';
import ProviderBtn from './ProviderBtn';
import SignInError from './SignInError';

type Props = { providerList: typeof providersData } & SignInQuery;

const iconMapping = {
	apple: AtlassianIcon,
	facebook: FacebookSquareIcon,
	github: GithubIcon,
	google: GoogleIcon,
	instagram: InstagramIcon
} satisfies Record<ProviderIdEnum, FC<IconProps>>;

export default function SignInProviders({ callbackUrl, providerList, error }: Props) {
	return (
		<>
			<h1 className='mx-auto text-lg lg:text-2xl'>Sign-in to {env.NEXT_PUBLIC_APP_NAME}</h1>

			{providerList.map(({ id, name }) => {
				const idParseResult = genericProviderIdEnumValidator.safeParse(id);

				if (!idParseResult.success) return null;

				const Icon = iconMapping[idParseResult.data];

				return (
					<ProviderBtn callbackUrl={callbackUrl} id={id} key={id} name={name} providerId={idParseResult.data}>
						<Icon className='icon-provider my-auto size-6' />
					</ProviderBtn>
				);
			})}

			<SignInError error={error} />
		</>
	);
}
