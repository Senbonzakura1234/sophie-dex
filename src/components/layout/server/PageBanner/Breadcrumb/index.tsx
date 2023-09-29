'use client';

import HomeIcon from '@root/components/icons/solid/HomeIcon';
import InfoIcon from '@root/components/icons/solid/InfoIcon';
import LinkIcon from '@root/components/icons/solid/LinkIcon';
import { moduleIdList } from '@root/types/model';
import { usePathname } from 'next/navigation';
import { Fragment, useMemo } from 'react';
import LinkItem from './LinkItem';

export default function Breadcrumb() {
	const pathname = usePathname();
	const segment = useMemo(() => pathname.split('/')[1], [pathname]);

	return (
		<>
			<li>
				<LinkItem
					aria-label='Go to homepage'
					href='/'
					icon={<HomeIcon className='aspect-square h-4 !text-primary' />}
					isActive={!segment}
				>
					<span className='hidden sm:inline'>home</span>
				</LinkItem>
			</li>

			<li className='gap-2 before:!m-0 2xl:gap-3'>
				{moduleIdList.map((m, i) => (
					<Fragment key={m}>
						<LinkItem
							aria-label={`Go to ${i} Search`}
							href={`/${m}`}
							icon={<LinkIcon className='hidden aspect-square h-4 2xl:inline' />}
							isActive={m === segment}
						>
							{m}
						</LinkItem>

						{i < moduleIdList.length - 1 ? (
							<div className='aspect-square h-2/3 rounded-full bg-base-content/40 sm:h-1.5' />
						) : null}
					</Fragment>
				))}
			</li>

			<li className='gap-2 before:!m-0 2xl:gap-3'>
				<LinkItem
					aria-label={`Go to about page`}
					href='/about'
					icon={<InfoIcon className='aspect-square h-4 !text-primary' />}
					isActive={segment === 'about'}
				>
					<span className='hidden sm:inline'>about</span>
				</LinkItem>
			</li>
		</>
	);
}
