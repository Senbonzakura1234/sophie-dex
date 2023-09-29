import Avatar from '@root/components/common/server/Avatar';
import CommonWrapper from '@root/components/common/server/CommonWrapper';
import FacebookSquareIcon from '@root/components/icons/brand/FacebookSquareIcon';
import TwitterSquareIcon from '@root/components/icons/brand/TwitterSquareIcon';
import MailIcon from '@root/components/icons/solid/MailIcon';
import MapPinIcon from '@root/components/icons/solid/MapPinIcon';
import OfficeIcon from '@root/components/icons/solid/OfficeIcon';
import { getGithubUserInfo } from '@root/utils/server';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import ProfileField from './ProfileField';

export default async function Profile() {
	const { avatar_url, login, bio, company, blog, email, location, twitter_username } = await getGithubUserInfo();

	const fields: ComponentProps<typeof ProfileField>[] = [
		{ Icon: OfficeIcon, content: { type: 'text', label: company } },
		{ Icon: MapPinIcon, content: { type: 'text', label: location } },
		{
			Icon: TwitterSquareIcon,
			content: {
				type: 'link',
				href: { protocol: 'https', hostname: 'twitter', host: 'twitter.com', pathname: twitter_username },
				label: twitter_username,
			},
		},
		{ Icon: FacebookSquareIcon, content: { type: 'link', href: { pathname: blog }, label: 'My Blog' } },
		{ Icon: MailIcon, content: { type: 'link', href: { pathname: `mailto:${email}` }, label: email } },
	];

	return (
		<CommonWrapper>
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
							className='link-hover link-primary link text-xl font-bold'
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
					{fields.map((field, key) => (
						<ProfileField {...field} key={key} />
					))}
				</div>
			</div>
		</CommonWrapper>
	);
}
