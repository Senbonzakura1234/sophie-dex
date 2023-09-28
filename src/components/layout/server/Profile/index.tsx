import Avatar from '@root/components/common/server/Avatar';
import CommonWrapper from '@root/components/common/server/CommonWrapper';
import FacebookSquareIcon from '@root/components/common/server/icons/brand/FacebookSquareIcon';
import TwitterSquareIcon from '@root/components/common/server/icons/brand/TwitterSquareIcon';
import MailIcon from '@root/components/common/server/icons/solid/MailIcon';
import MapPinIcon from '@root/components/common/server/icons/solid/MapPinIcon';
import OfficeIcon from '@root/components/common/server/icons/solid/OfficeIcon';
import { getGithubUserInfo } from '@root/utils/server';
import Link from 'next/link';

export default async function Profile() {
	const { avatar_url, login, bio, company, blog, email, location, twitter_username } = await getGithubUserInfo();

	return (
		<CommonWrapper>
			<div className='flex flex-wrap gap-4'>
				<Avatar
					url={avatar_url}
					size={150}
					className='w-16 bg-gradient-to-r from-accent to-primary p-1 shadow-lg shadow-primary'
				/>

				<div className='my-auto flex flex-col gap-1'>
					<Link
						className='link-hover link-primary link text-xl font-bold'
						href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: login }}
						target='_blank'
					>
						{login}
					</Link>

					<h2 className='whitespace-pre-wrap text-xs italic'>{bio}</h2>
				</div>

				<div className='flex flex-col gap-2 text-sm font-bold capitalize [&>p]:flex [&>p]:grow-0 [&>p]:items-end [&>p]:gap-2'>
					<p>
						<OfficeIcon className='mt-auto aspect-square w-5 text-primary' />

						{company}
					</p>

					<p>
						<MapPinIcon className='mt-auto aspect-square w-5 text-primary' />

						{location}
					</p>

					<p>
						<TwitterSquareIcon className='mt-auto aspect-square w-5 text-primary' />

						<Link
							className='link-hover link-primary link visited:link-accent'
							href={{ protocol: 'https', hostname: 'twitter', host: 'twitter.com', pathname: twitter_username }}
							target='_blank'
						>
							{twitter_username}
						</Link>
					</p>

					<p>
						<FacebookSquareIcon className='mt-auto aspect-square w-5 text-primary' />

						<Link
							className='link-hover link-primary link visited:link-accent'
							href={{ pathname: blog }}
							target='_blank'
						>
							My Blog
						</Link>
					</p>

					<p>
						<MailIcon className='mt-auto aspect-square w-5 text-primary' />

						<Link
							className='link-hover link-primary link visited:link-accent'
							href={{ pathname: `mailto:${email}` }}
							target='_blank'
						>
							{email}
						</Link>
					</p>
				</div>
			</div>
		</CommonWrapper>
	);
}
