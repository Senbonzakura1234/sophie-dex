import GithubIcon from '@components/icons/brand/GithubIcon';
import { publicEnv } from '@root/utils/common/env.mjs';
import Link from 'next/link';

export default function AuthorLink() {
	return (
		<Link
			aria-label={`github@${publicEnv.NEXT_PUBLIC_APP_AUTHOR}`}
			className='btn btn-ghost btn-sm h-auto min-h-0 gap-2 rounded-full bg-white fill-black py-2 text-xs capitalize text-black shadow-lg shadow-black/30 hover:bg-black hover:fill-white hover:text-white hover:shadow hover:shadow-white/30 dark:bg-black dark:fill-white dark:text-white dark:shadow-white/30 dark:hover:bg-white dark:hover:fill-black dark:hover:text-black dark:hover:shadow-black/30'
			href={{
				protocol: 'https',
				hostname: 'github',
				host: 'github.com',
				pathname: publicEnv.NEXT_PUBLIC_APP_AUTHOR,
			}}
			prefetch={false}
			target='_blank'
		>
			<GithubIcon className='my-auto aspect-square h-4' />
			{publicEnv.NEXT_PUBLIC_APP_AUTHOR}
		</Link>
	);
}
