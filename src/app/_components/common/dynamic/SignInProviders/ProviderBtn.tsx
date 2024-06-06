'use client';

import ChevronDoubleRightIcon from '@components/icons/solid/ChevronDoubleRightIcon';
import type { ImprovePick } from '@root/types/common';
import type { ChildrenProps } from '@root/types/common/props';
import type { SignInQuery } from '@root/types/common/zod';
import type { ProviderIdEnum } from '@root/types/common/zod/generic';
import { cn } from '@root/utils/common';
import type { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';

const classMapping = {
	atlassian: 'btn-atlassian',
	facebook: 'btn-facebook',
	github: '',
	google: '',
	instagram: ''
} satisfies Record<ProviderIdEnum, string>;

type Props = {
	providerId: ProviderIdEnum;
} & ImprovePick<SignInQuery, 'callbackUrl'> &
	ImprovePick<ClientSafeProvider, 'id' | 'name'> &
	ChildrenProps;

export default function ProviderBtn({ providerId, children, callbackUrl, id, name }: Props) {
	return (
		<button
			className={cn(
				'btn btn-brand btn-outline border-none w-full max-w-64 lg:max-w-80 self-center group',
				classMapping[providerId]
			)}
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

				{children}
			</div>
		</button>
	);
}
