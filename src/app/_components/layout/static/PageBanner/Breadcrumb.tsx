'use client';

import HomeIcon from '@components/icons/solid/HomeIcon';
import InfoIcon from '@components/icons/solid/InfoIcon';
import LinkIcon from '@components/icons/solid/LinkIcon';
import { listAboutPaths } from '@root/constants/common';
import usePageSegment from '@root/hooks/usePageSegment';
import { moduleIdList } from '@root/types/model';
import { arrayInclude } from '@root/utils/common';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Breadcrumb() {
	const { segment, isDetailPage } = usePageSegment();

	return (
		<>
			<li>
				<Link
					aria-label='Go to homepage'
					className={`link gap-1 capitalize ${
						!Boolean(segment)
							? 'no-animation pointer-events-none !cursor-default !no-underline'
							: 'link-hover link-primary visited:link-accent'
					}`}
					href='/'
				>
					<HomeIcon className='aspect-square h-4 !text-primary' />
					<span className='hidden sm:inline'>home</span>
				</Link>
			</li>

			<li className='gap-2 before:!m-0 2xl:gap-3'>
				{moduleIdList.map((m, i) => (
					<Fragment key={m}>
						<Link
							aria-label={`Go to ${m} Page`}
							className={`link gap-1 capitalize
								${m !== segment ? 'link-hover link-primary visited:link-accent' : '!no-underline'}
								${m === segment && !isDetailPage ? 'no-animation pointer-events-none !cursor-default' : ''}
							`}
							href={`/${m}`}
						>
							<LinkIcon className='hidden aspect-square h-4 2xl:inline' />
							{m}
						</Link>

						{i < moduleIdList.length - 1 ? (
							<div className='aspect-square h-2/3 rounded-full bg-base-content/40 sm:h-1.5' />
						) : null}
					</Fragment>
				))}
			</li>

			<li className='gap-2 before:!m-0 2xl:gap-3'>
				<Link
					aria-label='Go to about page'
					className={`link gap-1 capitalize ${
						arrayInclude(listAboutPaths, segment)
							? 'no-animation pointer-events-none !cursor-default !no-underline'
							: 'link-hover link-primary visited:link-accent'
					}`}
					href='/about'
				>
					<InfoIcon className='aspect-square h-4 !text-primary' />
					<span className='hidden sm:inline'>about</span>
				</Link>
			</li>
		</>
	);
}
