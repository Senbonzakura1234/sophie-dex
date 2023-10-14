import GithubIcon from '@root/components/icons/brand/GithubIcon';
import { APP_AUTHOR } from '@root/constants/common';
import { getVersion } from '@root/utils/server/fetch';
import Link from 'next/link';

export default async function AppInformation() {
	const version = await getVersion();

	return (
		<div className='grid gap-3 text-center'>
			<Link
				aria-label={`github@${APP_AUTHOR}`}
				className='group/button btn btn-ghost btn-sm h-auto min-h-0 gap-2 rounded-full bg-white fill-black py-2 text-xs capitalize text-black shadow-lg shadow-black/30 hover:bg-black hover:fill-white hover:text-white hover:shadow hover:shadow-white/30 dark:bg-black dark:fill-white dark:text-white dark:shadow-white/30 dark:hover:bg-white dark:hover:fill-black dark:hover:text-black dark:hover:shadow-black/30'
				href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: APP_AUTHOR }}
				prefetch={false}
				target='_blank'
			>
				<GithubIcon className='my-auto aspect-square h-4' />
				{APP_AUTHOR}
			</Link>

			<div className='card mx-auto block bg-primary px-3 py-1 text-xs font-bold leading-none text-primary-content shadow-lg shadow-base-content/30'>
				v{version}
			</div>
		</div>
	);
}
