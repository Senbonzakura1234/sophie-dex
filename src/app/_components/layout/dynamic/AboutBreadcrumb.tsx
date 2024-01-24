'use client';

import TabWrapper from '@components/common/static/TabWrapper';
import ProfileIcon from '@components/icons/outline/ProfileIcon';
import ScaleIcon from '@components/icons/outline/ScaleIcon';
import InfoIcon from '@components/icons/solid/InfoIcon';
import { listAboutPaths } from '@root/constants/common';
import usePageSegment from '@root/hooks/usePageSegment';
import { indexOf } from '@root/utils/common';
import Link from 'next/link';

export default function AboutBreadcrumb() {
	const { segment } = usePageSegment();

	return (
		<section className='container mx-auto grid max-w-6xl grid-cols-1 gap-6 max-2xl:px-4'>
			<TabWrapper
				activeStyleType='border'
				className='mx-auto'
				selectedIndex={indexOf(listAboutPaths, segment, 0)}
				tabListLength={listAboutPaths.length}
			>
				{listAboutPaths.map(path => (
					<Link
						key={path}
						href={`/${path}`}
						className={`btn btn-ghost no-animation z-10 h-auto rounded-none border-0 py-3 font-bold capitalize visited:text-accent
							${segment === path ? '!text-base-content' : ''}
						`}
					>
						{path === 'about' ? <InfoIcon className='aspect-square h-5 text-primary' /> : null}
						{path === 'profile' ? <ProfileIcon className='aspect-square h-5 text-primary' /> : null}
						{path === 'license' ? <ScaleIcon className='aspect-square h-5 text-primary' /> : null}
						<span className='w-14 capitalize'>{path}</span>
					</Link>
				))}
			</TabWrapper>
		</section>
	);
}
