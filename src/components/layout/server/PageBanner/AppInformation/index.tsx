import GithubIcon from '@root/components/common/server/icons/solid/GithubIcon';
import { APP_AUTHOR } from '@root/constants';
import { getVersion } from '@root/utils/server';
import Link from 'next/link';

export default async function AppInformation() {
	const version = await getVersion();

	return (
		<div className='grid gap-3 text-center'>
			<Link
				aria-label={`github@${APP_AUTHOR}`}
				className='btn btn-ghost btn-sm h-auto min-h-0 gap-2 rounded-full bg-base-100 fill-base-content py-2 text-xs capitalize text-base-content shadow-lg shadow-base-content/30 hover:bg-base-content hover:fill-base-100 hover:text-base-100 hover:shadow hover:shadow-base-100/30'
				href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: APP_AUTHOR }}
				prefetch={false}
				role='navigation'
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
