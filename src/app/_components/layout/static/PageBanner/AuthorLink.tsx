import GithubIcon from '@components/icons/brand/GithubIcon';
import { env } from '@root/utils/common/env';
import Link from 'next/link';

export default function AuthorLink() {
	return (
		<Link
			aria-label={`github@${env.NEXT_PUBLIC_APP_AUTHOR}`}
			className='btn-brand btn btn-sm h-auto min-h-0 gap-2 rounded-full py-2 text-xs'
			href={{
				protocol: 'https',
				hostname: 'github',
				host: 'github.com',
				pathname: env.NEXT_PUBLIC_APP_AUTHOR,
			}}
			prefetch={false}
			target='_blank'
		>
			<GithubIcon className='my-auto aspect-square h-4' />
			{env.NEXT_PUBLIC_APP_AUTHOR}
		</Link>
	);
}
