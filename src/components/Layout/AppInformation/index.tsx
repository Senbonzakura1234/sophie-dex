import GithubIcon from '@root/assets/icons/solid/GithubIcon';
import { APP_AUTHOR, APP_VERSION } from '@root/constants';
import Link from 'next/link';

export default function AppInformation() {
	return (
		<div className='grid gap-3 text-center'>
			<Link
				aria-label={`github@${APP_AUTHOR}`}
				className='btn btn-ghost h-auto min-h-0 gap-2 rounded-full bg-white fill-black py-2 capitalize text-black shadow-lg shadow-black hover:bg-black hover:fill-white hover:text-white hover:shadow hover:shadow-slate-700 max-lg:text-xs lg:py-3'
				href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: APP_AUTHOR }}
				prefetch={false}
				role='navigation'
				target='_blank'
			>
				<GithubIcon className='my-auto aspect-square h-4' />
				{APP_AUTHOR}
			</Link>

			<small className='mx-auto block rounded-xl bg-slate-800/80 px-3 font-bold text-slate-300'>{APP_VERSION}</small>
		</div>
	);
}
