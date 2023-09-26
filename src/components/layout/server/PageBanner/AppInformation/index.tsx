import GithubIcon from '@root/components/common/server/icons/solid/GithubIcon';
import { getGithubUserInfo, getVersion } from '@root/utils/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function AppInformation() {
	const [version, { login, avatar_url }] = await Promise.all([getVersion(), getGithubUserInfo()]);

	return (
		<div className='grid gap-3 text-center'>
			<Link
				aria-label={`github@${login}`}
				className='group/button btn btn-ghost btn-sm h-auto min-h-0 gap-2 rounded-full bg-base-100 fill-base-content py-2 text-xs capitalize text-base-content shadow-lg shadow-base-content/30 hover:bg-base-content hover:fill-base-100 hover:text-base-100 hover:shadow hover:shadow-base-100/30'
				href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: login }}
				prefetch={false}
				role='navigation'
				target='_blank'
			>
				<GithubIcon className='my-auto aspect-square h-4' />
				{login}
				<div className='avatar'>
					<div className='w-5 overflow-hidden rounded-full ring-[0.1px] ring-primary ring-offset-2 ring-offset-transparent group-hover/button:ring-base-100'>
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

			<div className='card mx-auto block bg-primary px-3 py-1 text-xs font-bold leading-none text-primary-content shadow-lg shadow-base-content/30'>
				v{version}
			</div>
		</div>
	);
}
