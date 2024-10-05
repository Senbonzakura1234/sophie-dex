'use client';

import Avatar from '@components/common/static/Avatar';
import Dropdown from '@components/common/static/Dropdown';
import GithubIcon from '@components/icons/brand/GithubIcon';
import ProfileIcon from '@components/icons/outline/ProfileIcon';
import SignOutIcon from '@components/icons/solid/SignOutIcon';
import { trackEventClient } from '@root/utils/client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function AuthNav() {
	const { data: session, status } = useSession();

	const pathname = usePathname();

	if (status === 'loading')
		return <div className='h-9 w-[108px] rounded-lg bg-base-100 shadow-lg shadow-base-content/20 xl:h-9' />;

	if (session)
		return (
			<Dropdown
				anchor='bottom end'
				items={[
					{
						type: 'static',
						label: (
							<>
								<Avatar
									url={session.user?.image || ''}
									username={session.user?.name || ''}
									size={48}
									className='aspect-square w-[50px] bg-gradient-to-br from-accent to-primary p-1 shadow-lg shadow-primary'
								/>
								<div className='flex max-w-full flex-col items-start truncate focus:text-clip'>
									<div className='font-bold text-primary'>{session.user?.name}</div>
									<div className='text-sm'>{session.user?.email}</div>
								</div>
							</>
						)
					},
					{ type: 'separator' },
					{
						type: 'link',
						label: (
							<>
								<ProfileIcon className='aspect-square w-5' /> Profile
							</>
						),
						href: '/profile'
					},
					{
						type: 'button',
						label: (
							<>
								<SignOutIcon className='aspect-square w-5' />
								Sign Out
							</>
						),
						onClick: () => {
							trackEventClient(
								'client.authentication.signOut',
								{ username: session.user?.name || '', email: session.user?.email || '' },
								{ flags: ['client.authentication'] }
							);

							return signOut({ callbackUrl: pathname.startsWith('/profile') ? '/' : pathname });
						},
						className: 'text-primary'
					}
				]}
				buttonLabel={
					<>
						<Avatar
							url={session.user?.image || ''}
							username={session.user?.name || ''}
							size={20}
							className='aspect-square w-6 bg-gradient-to-br from-slate-500 to-primary-content p-[3px] shadow-inner'
						/>
						<span className='hidden sm:inline'>Profile</span>
					</>
				}
				className={{ menuBtn: 'bg-primary text-primary-content', dropdown: 'w-72' }}
			/>
		);

	return (
		<button
			className='btn-brand flex cursor-pointer gap-2 rounded-lg px-4 py-2 text-left text-xs font-bold shadow-lg shadow-base-content/20 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-base-100/75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary xl:text-sm'
			onClick={() => {
				trackEventClient('client.authentication.signIn', { pathname }, { flags: ['client.authentication'] });

				return signIn();
			}}
		>
			<GithubIcon className='my-auto aspect-square w-4' />
			Sign In
		</button>
	);
}
