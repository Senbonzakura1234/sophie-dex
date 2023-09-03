import GithubIcon from '@root/assets/icons/solid/GithubIcon';
import { APP_AUTHOR, APP_VERSION } from '@root/constants';
import Link from 'next/link';

export default function AppInformation() {
	return (
		<div className='grid gap-3 text-center'>
			<Link
				aria-label={`github@${APP_AUTHOR}`}
				className='btn btn-ghost btn-sm h-auto min-h-0 gap-2 rounded-full bg-white fill-black py-2 text-xs capitalize text-black shadow-lg shadow-black hover:bg-black hover:fill-white hover:text-white hover:shadow hover:shadow-slate-700'
				href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: APP_AUTHOR }}
				prefetch={false}
				role='navigation'
				target='_blank'
			>
				<GithubIcon className='my-auto aspect-square h-4' />
				{APP_AUTHOR}
			</Link>

			<div className='card mx-auto block bg-slate-800/80 px-3 py-1 text-xs font-bold leading-none text-slate-300'>
				{APP_VERSION}
			</div>
		</div>
	);
}
