import Avatar from '@components/common/server/Avatar';
import CommonWrapper from '@components/common/server/CommonWrapper';
import type { GithubUserInfo } from '@root/types/common/zod';
import Link from 'next/link';
import type { ProfileFieldProps } from './ProfileField';
import ProfileField from './ProfileField';

type ProfileInfoProps = GithubUserInfo & JSX.IntrinsicAttributes;

export default function ProfileInfo({
	avatar_url,
	login,
	bio,
	company,
	blog,
	email,
	location,
	twitter_username,
}: ProfileInfoProps) {
	const fields: Array<ProfileFieldProps> = [
		{ label: company, type: 'company' },
		{ label: location, type: 'location' },
		{
			label: twitter_username,
			type: 'twitter',
			href: { protocol: 'https', hostname: 'twitter', host: 'twitter.com', pathname: twitter_username },
		},
		{ label: 'My Blog', type: 'blog', href: { pathname: blog } },
		{ label: email, type: 'mail', href: { pathname: `mailto:${email}` } },
	];

	return (
		<CommonWrapper className='m-auto w-full max-w-lg'>
			<div className='flex flex-wrap gap-4'>
				<div className='flex grow flex-wrap gap-4 self-baseline max-sm:text-center'>
					<div className='max-sm:w-full'>
						<Avatar
							url={avatar_url}
							size={200}
							className='w-16 bg-gradient-to-br from-accent to-primary p-1 shadow-lg shadow-primary max-sm:w-28'
						/>
					</div>

					<div className='my-auto flex flex-col gap-1 max-sm:w-full'>
						<Link
							className='link-hover link link-primary text-xl font-bold'
							href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: login }}
							target='_blank'
						>
							{login}
						</Link>

						<h2 className='whitespace-pre-wrap text-xs italic'>{bio}</h2>
					</div>
				</div>

				<div className='divider divider-vertical m-0 w-full before:bg-gradient-to-br before:from-accent before:to-primary after:bg-gradient-to-tl after:from-accent after:to-primary' />

				<div className='flex flex-col gap-2'>
					{fields.map((props, key) => (
						<p className='flex h-5 grow-0 items-end gap-2 text-sm font-bold capitalize' key={key}>
							<ProfileField {...props} />
						</p>
					))}
				</div>
			</div>
		</CommonWrapper>
	);
}
