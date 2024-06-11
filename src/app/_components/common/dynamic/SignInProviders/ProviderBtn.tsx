import ChevronDoubleRightIcon from '@components/icons/solid/ChevronDoubleRightIcon';
import type { providersData } from '@root/auth';
import { signIn } from '@root/auth';
import type { ImprovePick } from '@root/types/common';
import type { ChildrenProps } from '@root/types/common/props';
import type { SignInQuery } from '@root/types/common/zod';
import type { ProviderIdEnum } from '@root/types/common/zod/generic';
import { cn } from '@root/utils/common';

const classMapping = {
	apple: 'btn-atlassian',
	facebook: 'btn-facebook',
	github: '',
	google: '',
	instagram: ''
} satisfies Record<ProviderIdEnum, string>;

type Props = {
	providerId: ProviderIdEnum;
} & ImprovePick<SignInQuery, 'callbackUrl'> &
	(typeof providersData)[number] &
	ChildrenProps;

export default function ProviderBtn({ providerId, children, callbackUrl, id, name }: Props) {
	return (
		<form
			className='w-full max-w-64 self-center lg:max-w-80'
			action={async () => {
				'use server';

				return await signIn(id, { callbackUrl });
			}}
		>
			<button
				className={cn('group btn btn-brand btn-outline border-none w-full', classMapping[providerId])}
				type='submit'
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
		</form>
	);
}
