'use client';

import HomeIcon from '@root/components/common/server/icons/solid/HomeIcon';
import LinkIcon from '@root/components/common/server/icons/solid/LinkIcon';
import { useModuleId } from '@root/hooks/useModuleId';
import { moduleIdList } from '@root/types/model';
import { Fragment } from 'react';
import LinkItem from './LinkItem';

export default function Breadcrumb() {
	const moduleId = useModuleId();

	return (
		<>
			<li>
				<LinkItem
					aria-label='Go to homepage'
					href={{ pathname: '/' }}
					icon={<HomeIcon className='aspect-square h-4' />}
					isActive={!moduleId}
				>
					Home
				</LinkItem>
			</li>

			<li className='flex gap-2 before:!m-0 2xl:gap-3'>
				{moduleIdList.map((m, i) => (
					<Fragment key={m}>
						<LinkItem
							aria-label={`Go to ${i} Search`}
							href={{ pathname: `/${m}` }}
							icon={<LinkIcon className='hidden aspect-square h-4 2xl:inline' />}
							isActive={m === moduleId}
						>
							{m}
						</LinkItem>

						{i < moduleIdList.length - 1 ? (
							<div className='aspect-square h-2/3 rounded-full bg-base-content/40 sm:h-1.5' />
						) : null}
					</Fragment>
				))}
			</li>
		</>
	);
}
