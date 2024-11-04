import Avatar from '@components/common/static/Avatar';
import CommonWrapper from '@components/common/static/CommonWrapper';
import MDXRenderer from '@components/common/static/MDXRenderer';
import Link from 'next/link';
import CreateProfileReadmeGuide from './CreateProfileReadmeGuide';
import type { ProfileFieldProps } from './ProfileField';
import ProfileField from './ProfileField';

import BriefcaseIcon from '@components/icons/solid/BriefcaseIcon';
import FollowIcon from '@components/icons/solid/FollowIcon';
import HandShakeIcon from '@components/icons/solid/HandShakeIcon';
import RepositoryIcon from '@components/icons/solid/RepositoryIcon';
import type { RouterOutputs } from '@root/server/router';
import { Suspense } from 'react';
import styles from './index.module.css';

type Props = Readonly<RouterOutputs['user']['getReadmeProfile']>;

export default function ProfileInfo({
	profile: {
		avatar_url,
		login,
		bio,
		company,
		blog,
		email,
		location,
		twitter_username,
		name,
		followers,
		following,
		public_repos,
		owned_private_repos,
		hireable,
		collaborators
	},
	readmeContent
}: Props) {
	const fields: Array<ProfileFieldProps> = [
		{ label: company || '', type: 'company' },
		{ label: location || '', type: 'location' },
		{
			label: `@${twitter_username}`,
			type: 'twitter',
			href: { protocol: 'https', hostname: 'twitter', host: 'twitter.com', pathname: twitter_username }
		},
		{ label: 'Facebook', type: 'blog', href: { pathname: blog } },
		{ label: email || '', type: 'mail', href: { pathname: `mailto:${email}` } }
	];

	return (
		<CommonWrapper classNames={{ wrapper: 'm-auto w-full max-w-4xl' }}>
			<div className='flex flex-wrap gap-4'>
				<div className='flex grow flex-wrap gap-4 self-baseline max-sm:text-center'>
					<div className='max-sm:w-full'>
						<Avatar
							username={login}
							url={avatar_url}
							size={200}
							className='w-16 bg-gradient-to-br from-accent to-primary p-1 shadow-lg shadow-primary max-sm:w-28'
						/>
					</div>

					<div className='my-auto flex flex-col gap-1 max-sm:w-full'>
						<Link
							className='link-hover link link-primary text-xl font-bold'
							href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: login }}
							scroll={false}
							target='_blank'
						>
							{login} ({name})
						</Link>

						<h2 className='whitespace-pre-wrap text-xs italic'>{bio}</h2>
					</div>
				</div>

				<div className='divider divider-vertical m-0 w-full before:bg-gradient-to-br before:from-accent before:to-primary after:bg-gradient-to-tl after:from-accent after:to-primary' />

				<div className='flex w-full flex-wrap justify-between gap-2'>
					<div className='flex flex-col gap-2'>
						{fields.map((props, key) => (
							<p className='flex h-5 grow-0 items-end gap-2 text-sm font-bold capitalize' key={key}>
								<ProfileField {...props} />
							</p>
						))}
					</div>

					{readmeContent ? (
						<Suspense>
							<MDXRenderer body={readmeContent} className={styles.readmeContent} />
						</Suspense>
					) : (
						<CreateProfileReadmeGuide />
					)}
				</div>

				<div className='divider divider-vertical m-0 w-full before:bg-gradient-to-br before:from-accent before:to-primary after:bg-gradient-to-tl after:from-accent after:to-primary' />

				<div className='flex flex-wrap items-center gap-2 font-bold'>
					{public_repos > 0 || owned_private_repos! > 0 ? (
						<div className='badge badge-ghost badge-outline flex h-6 items-center gap-2 rounded-3xl px-3 text-xs'>
							<RepositoryIcon className='aspect-square w-4 align-middle text-secondary' />

							{public_repos > 0 ? <span>{public_repos} public repos</span> : null}

							{owned_private_repos! > 0 ? (
								<>
									<div className='aspect-square w-1 rounded-full bg-base-content align-middle' />

									<span>{owned_private_repos} private repos</span>
								</>
							) : null}
						</div>
					) : null}

					{followers > 0 || following > 0 ? (
						<div className='badge badge-ghost badge-outline flex h-6 items-center gap-2 rounded-3xl px-3 text-xs'>
							<FollowIcon className='aspect-square w-4 align-middle text-secondary' />

							{followers > 0 ? <span>{followers} followers</span> : null}

							{following > 0 ? (
								<>
									<div className='aspect-square w-1 rounded-full bg-base-content align-middle' />
									<span>{following} following</span>
								</>
							) : null}
						</div>
					) : null}

					{collaborators! > 0 ? (
						<div className='badge badge-ghost badge-outline flex h-6 items-center gap-2 rounded-3xl px-3 text-xs'>
							<HandShakeIcon className='aspect-square w-4 align-middle text-secondary' />

							<span>{collaborators} collaborators</span>
						</div>
					) : null}

					{hireable ? (
						<div className='badge badge-ghost badge-outline flex h-6 items-center gap-2 rounded-3xl px-3 text-xs'>
							<BriefcaseIcon className='aspect-square w-4 align-middle text-secondary' />

							<span>Open for hired</span>
						</div>
					) : null}
				</div>

				<div className='divider divider-vertical m-0 w-full before:bg-gradient-to-br before:from-accent before:to-primary after:bg-gradient-to-tl after:from-accent after:to-primary' />
			</div>
		</CommonWrapper>
	);
}
