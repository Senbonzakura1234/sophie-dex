'use client';

import HomeIcon from '@root/assets/icons/solid/HomeIcon';
import LinkIcon from '@root/assets/icons/solid/LinkIcon';
import CircleDivider from '@root/components/common/server/CircleDivider';
import { useModuleId } from '@root/hooks/useModuleId';
import { moduleIdList } from '@root/types/model';
import { Fragment } from 'react';
import LinkItem from './LinkItem';

export default function Breadcrumb() {
	const moduleId = useModuleId();

	return (
		<div className='flex w-full'>
			<nav className='card mx-auto w-11/12 max-w-md bg-base-100 px-2 py-1 shadow-lg shadow-primary 2xl:w-2/5 2xl:max-w-none'>
				<div className='breadcrumbs mx-auto text-xs 2xl:text-base'>
					<ul className='gap-1 font-bold'>
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
										<CircleDivider className='h-1 w-1 bg-base-300 sm:h-2 sm:w-2' />
									) : null}
								</Fragment>
							))}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
