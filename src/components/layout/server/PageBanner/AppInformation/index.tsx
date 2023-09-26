import GithubIcon from '@root/components/common/server/icons/solid/GithubIcon';
import { getGithubUserInfo, getVersion } from '@root/utils/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function AppInformation() {
	const [version, { login, avatar_url, email }] = await Promise.all([getVersion(), getGithubUserInfo()]);

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
				<div className='avatar'>
					<div className='w-5 overflow-hidden rounded-full ring-[0.1px] ring-black ring-offset-2 ring-offset-transparent group-hover/button:ring-white dark:ring-white dark:group-hover/button:ring-black'>
						<Image
							alt='sophie'
							data-url={avatar_url}
							placeholder='empty'
							priority={false}
							sizes='64px'
							width={18}
							height={18}
							src={avatar_url}
						/>
					</div>
				</div>
			</Link>

			<Link className='btn btn-info btn-xs normal-case' href={{ pathname: `mailto:${email}` }} target='_blank'>
				{email}
			</Link>

			<div className='card mx-auto block bg-primary px-3 py-1 text-xs font-bold leading-none text-primary-content shadow-lg shadow-base-content/30'>
				v{version}
			</div>
		</div>
	);
}
