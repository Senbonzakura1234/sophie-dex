import { HomeIcon, LinkIcon } from '@heroicons/react/24/solid';
import FadeWrapper from '@root/components/Animations/FadeWrapper';
import { pageNameList } from '@root/constants';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import CircleDivider from '../CircleDivider';

const Breadcrumb = () => {
	const { pathname, isReady } = useRouter();

	return (
		<FadeWrapper show={isReady} appear={true}>
			<div className='flex w-full'>
				<nav className='card card-compact bg-base-100 mx-auto w-64 max-w-full py-1 2xl:w-2/5'>
					<div className='breadcrumbs mx-auto text-xs font-extrabold 2xl:text-base'>
						<ul className='gap-1 font-serif font-extrabold'>
							<li>
								<Link
									className={clsx(
										{
											'link-hover text-primary': pathname !== '/',
										},
										'link gap-1',
									)}
									href={{ pathname: '/' }}
									aria-label='Go to homepage'
								>
									<HomeIcon className='h-4 w-4' />
									<span className='hidden 2xl:inline'>Home</span>
								</Link>
							</li>
							<li className='flex gap-2 before:!m-0 2xl:gap-3'>
								{pageNameList.map((n, index) => (
									<Fragment key={n}>
										<Link
											className={clsx(
												{
													'link-hover text-primary': pathname !== `/${n.toLowerCase()}s`,
												},
												'link gap-1',
											)}
											href={{ pathname: `/${n.toLowerCase()}s` }}
											aria-label={`Go to ${index} Search`}
										>
											<LinkIcon className='hidden h-4 w-4 2xl:block' />
											{n}
										</Link>
										{index < 2 && <CircleDivider className='bg-base-300 h-2 w-2' />}
									</Fragment>
								))}
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</FadeWrapper>
	);
};

export default Breadcrumb;
