'use client';

import Avatar from '@components/common/static/Avatar';
import Dropdown from '@components/common/static/Dropdown';
import ProfileIcon from '@components/icons/outline/ProfileIcon';
import SignOutIcon from '@components/icons/solid/SignOutIcon';
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const signInUrl = '/signin';

export default function AuthNav() {
	const { data: session } = useSession();
	const pathname = usePathname();

	if (session)
		return (
			<Dropdown
				anchor='right'
				items={[
					{
						type: 'static',
						label: (
							<>
								<Avatar
									url={session.user?.image || ''}
									username={session.user?.name || ''}
									size={48}
									className='aspect-square w-12'
								/>
								<div className='flex max-w-full flex-col items-start truncate hover:text-clip'>
									<div>{session.user?.name}</div>
									<div className='text-sm'>{session.user?.email}</div>
								</div>
							</>
						),
					},
					{ type: 'separator' },
					{
						type: 'link',
						label: (
							<>
								<ProfileIcon className='aspect-square w-5' /> Profile
							</>
						),
						href: '/profile',
					},
					{
						type: 'button',
						label: (
							<>
								<SignOutIcon className='aspect-square w-5' />
								Sign Out
							</>
						),
						onClick: () => signOut(),
					},
				]}
				buttonLabel={
					<>
						<Avatar
							url={session.user?.image || ''}
							username={session.user?.name || ''}
							size={20}
							className='aspect-square w-5'
						/>
						<span className='hidden sm:inline'>Profile</span>
					</>
				}
				className={{ menuBtn: 'bg-primary text-primary-content', dropdown: 'w-72' }}
			/>
		);

	if (pathname === signInUrl) return null;

	return (
		<button
			className='relative cursor-pointer rounded-lg bg-base-100 px-4 py-2 text-left text-xs font-bold shadow-lg shadow-base-content/20 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-base-100/75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary xl:text-sm'
			onClick={() => signIn()}
		>
			Sign In
		</button>
	);
}
