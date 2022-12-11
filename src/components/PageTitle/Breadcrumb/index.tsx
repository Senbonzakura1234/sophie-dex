import { HomeModernIcon } from '@heroicons/react/20/solid';
import { PageNameList } from '@root/constants';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Breadcrumb = () => {
	const { pathname } = useRouter();

	return (
		<div className='flex w-full'>
			<nav className='card card-compact bg-base-100 mx-auto w-64 max-w-full py-1 xl:w-2/5'>
				<div className='breadcrumbs mx-auto text-xs font-extrabold xl:text-base'>
					<ul className='gap-1'>
						<li>
							<Link
								className={clsx(
									{
										'link-hover text-primary': pathname !== '/',
									},
									'link gap-1',
								)}
								href={{ pathname: '/' }}
							>
								<HomeModernIcon className='h-4 w-4' />
								<span className='hidden xl:inline'>Home</span>
							</Link>
						</li>
						<li className='flex gap-2 before:!m-0 xl:gap-3'>
							{PageNameList.map((n, index) => (
								<Fragment key={n}>
									<Link
										className={clsx(
											{
												'link-hover text-primary': pathname !== `/${n.toLowerCase()}s`,
											},
											'link',
										)}
										href={{ pathname: `/${n.toLowerCase()}s` }}
									>
										{n}
									</Link>
									{index < 2 && <span> / </span>}
								</Fragment>
							))}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Breadcrumb;
