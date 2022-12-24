import { HomeIcon, LinkIcon } from '@heroicons/react/24/solid';
import { APP_AUTHOR, pageNameList } from '@root/constants';
import { framerFadeUp } from '@root/constants/animations';
import type { BreadcrumbProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { Fragment } from 'react';

import CircleDivider from '../CircleDivider';

const Breadcrumb: FC<BreadcrumbProps> = ({ isShowAuthor }) => {
	const { pathname } = useRouter();

	return (
		<>
			<motion.div className='flex w-full' {...framerFadeUp}>
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
									as={{ pathname: '/' }}
									aria-label='Go to homepage'
								>
									<HomeIcon className='h-4 w-4' />
									<span className='hidden 2xl:inline'>Home</span>
								</Link>
							</li>
							<li className='flex gap-2 before:!m-0 2xl:gap-3'>
								{pageNameList.map((n, i) => (
									<Fragment key={n}>
										<Link
											className={clsx(
												{
													'link-hover text-primary': pathname !== `/${n.toLowerCase()}s`,
												},
												'link gap-1',
											)}
											href={{ pathname: `/${n.toLowerCase()}s` }}
											as={{ pathname: `/${n.toLowerCase()}s` }}
											aria-label={`Go to ${i} Search`}
										>
											<LinkIcon className='hidden h-4 w-4 2xl:block' />
											{n}
										</Link>
										{i < 2 && <CircleDivider className='bg-base-300 h-2 w-2' />}
									</Fragment>
								))}
							</li>
						</ul>
					</div>
				</nav>
			</motion.div>

			<motion.div className={clsx({ hidden: !isShowAuthor })} {...framerFadeUp}>
				<Link
					href={{
						protocol: 'https',
						hostname: 'github',
						host: 'github.com',
						pathname: APP_AUTHOR,
					}}
					as={{
						protocol: 'https',
						hostname: 'github',
						host: 'github.com',
						pathname: APP_AUTHOR,
					}}
					aria-label={`github@${APP_AUTHOR}`}
					className='btn h-auto min-h-0 gap-2 rounded-full bg-white fill-black py-3 capitalize text-black hover:bg-black hover:fill-white hover:text-white'
				>
					<svg className='my-auto h-4 w-4' viewBox='0 0 98 96' xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
						/>
					</svg>
					{APP_AUTHOR}
				</Link>
			</motion.div>
		</>
	);
};

export default Breadcrumb;
