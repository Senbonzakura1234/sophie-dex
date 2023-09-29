import Avatar from '@root/components/common/server/Avatar';
import GithubIcon from '@root/components/icons/brand/GithubIcon';
import { getGithubUserInfo, getVersion } from '@root/utils/server';
import Link from 'next/link';

export default async function AppInformation() {
	const [version, { login, avatar_url }] = await Promise.all([getVersion(), getGithubUserInfo()]);

	return (
		<div className='grid gap-3 text-center'>
			<Link
				aria-label={`github@${login}`}
				className='group/button btn btn-ghost btn-sm h-auto min-h-0 gap-2 rounded-full bg-white fill-black py-2 text-xs capitalize text-black shadow-lg shadow-black/30 hover:bg-black hover:fill-white hover:text-white hover:shadow hover:shadow-white/30 dark:bg-black dark:fill-white dark:text-white dark:shadow-white/30 dark:hover:bg-white dark:hover:fill-black dark:hover:text-black dark:hover:shadow-black/30'
				href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: login }}
				prefetch={false}
				role='navigation'
				target='_blank'
			>
				<GithubIcon className='my-auto aspect-square h-4' />
				{login}
				<Avatar
					url={avatar_url}
					size={64}
					className='w-5 bg-black to-primary p-0.5 shadow shadow-current group-hover/button:bg-white dark:bg-white dark:group-hover/button:bg-black'
				/>
			</Link>

			<div className='card mx-auto block bg-primary px-3 py-1 text-xs font-bold leading-none text-primary-content shadow-lg shadow-base-content/30'>
				v{version}
			</div>
		</div>
	);
}
