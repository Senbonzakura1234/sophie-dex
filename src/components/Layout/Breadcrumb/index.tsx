import GithubIcon from '@root/assets/icons/solid/GithubIcon';
import HomeIcon from '@root/assets/icons/solid/HomeIcon';
import LinkIcon from '@root/assets/icons/solid/LinkIcon';
import CircleDivider from '@root/components/ui/static/CircleDivider';
import { APP_AUTHOR, APP_VERSION } from '@root/constants';
import { useModuleId } from '@root/hooks/useModuleId';
import { moduleIdList } from '@root/types/model';
import Link from 'next/link';
import { Fragment } from 'react';
import LinkItem from './LinkItem';

type BreadcrumbProps = { hideNavigation?: boolean; isShowAuthor?: boolean };

export default function Breadcrumb({ hideNavigation, isShowAuthor }: BreadcrumbProps) {
	const moduleId = useModuleId();

	return (
		<>
			{hideNavigation ? null : (
				<div className='flex w-full'>
					<nav className='card mx-auto w-11/12 max-w-md bg-base-100 px-2 py-1 shadow-lg shadow-primary 2xl:w-2/5 2xl:max-w-none'>
						<div className='breadcrumbs mx-auto text-xs 2xl:text-base'>
							<ul className='gap-1 font-roboto font-extrabold'>
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
			)}

			{isShowAuthor ? (
				<div className='grid gap-3 text-center'>
					<Link
						aria-label={`github@${APP_AUTHOR}`}
						className='btn btn-ghost h-auto min-h-0 gap-2 rounded-full bg-white fill-black py-2 capitalize text-black shadow-lg shadow-black hover:bg-black hover:fill-white hover:text-white hover:shadow hover:shadow-slate-700 max-lg:text-xs lg:py-3'
						href={{ protocol: 'https', hostname: 'github', host: 'github.com', pathname: APP_AUTHOR }}
						role='navigation'
						target='_blank'
					>
						<GithubIcon className='my-auto aspect-square h-4' />
						{APP_AUTHOR}
					</Link>

					<small className='mx-auto block rounded-xl bg-slate-800/80 px-3 font-bold text-slate-300'>
						{APP_VERSION}
					</small>
				</div>
			) : null}
		</>
	);
}
