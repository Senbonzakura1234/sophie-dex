'use client';

import ProfileIcon from '@root/components/icons/outline/ProfileIcon';
import ScaleIcon from '@root/components/icons/outline/ScaleIcon';
import InfoIcon from '@root/components/icons/solid/InfoIcon';
import useDispatchContentData from '@root/hooks/useDispatchContentData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function AboutNav() {
	const pathname = usePathname();
	const segment = useMemo(() => pathname.split('/')[1], [pathname]);

	useDispatchContentData({ contentData: {} });

	return (
		<section className='container mx-auto grid max-w-6xl grid-cols-1 gap-6 max-2xl:px-4'>
			<div className='tabs mx-auto'>
				<Link
					href='/about'
					className={`tab tab-bordered tab-lg flex gap-2
					${segment === 'about' ? 'tab-active text-primary' : ''}`}
				>
					<InfoIcon className='aspect-square h-5' />
					<span className='hidden lg:inline'>About</span>
				</Link>

				<Link
					href='/profile'
					className={`tab tab-bordered tab-lg flex gap-2
					${segment === 'profile' ? 'tab-active text-primary' : ''}`}
				>
					<ProfileIcon className='aspect-square h-5' />
					<span className='hidden lg:inline'>Profile</span>
				</Link>

				<Link
					href='/license'
					className={`tab tab-bordered tab-lg flex gap-2
					${segment === 'license' ? 'tab-active text-primary' : ''}`}
				>
					<ScaleIcon className='aspect-square h-5' />
					<span className='hidden lg:inline'>License</span>
				</Link>
			</div>
		</section>
	);
}
