import RefreshButton from '@components/common/dynamic/RefeshButton';
import SignInRedirect from '@components/common/dynamic/SignInRedirect';
import { errorMap } from '@root/constants/common';
import type { APIError, ImprovePick } from '@root/types/common';
import { cn } from '@root/utils/common';
import Link from 'next/link';
import { Suspense } from 'react';

export type ErrorContentProps = Readonly<Partial<ImprovePick<APIError, 'code'>>>;

export default function ErrorContent({ code = 'INTERNAL_SERVER_ERROR' }: ErrorContentProps) {
	const { message, status } = errorMap[code];

	return (
		<div className='col-span-2 grid size-full grid-cols-1'>
			<div
				className={cn(
					'modal-box m-auto grid aspect-video w-11/12 cursor-default select-none place-content-center gap-1 text-center shadow-md shadow-current md:w-[600px]',
					status >= 500 ? 'text-error' : 'text-info dark:text-primary'
				)}
			>
				<div className='grid gap-1'>
					<h1 className='text-7xl font-bold tracking-widest md:text-8xl'>{status}</h1>

					<span className='font-bold md:text-lg'>
						{status === 401 ? '' : 'Sorry!'} {message}.
					</span>
				</div>

				{status === 401 ? (
					<div>
						<div className='text-base-content'>Redirecting you to SignIn </div>

						<span className='loading loading-dots loading-lg' />
					</div>
				) : (
					<div>
						<Link
							aria-label='Back to home'
							className='link-hover link text-xs text-base-content md:text-sm'
							href='/'
							replace
							scroll={false}
						>
							Back to home
						</Link>

						<RefreshButton />
					</div>
				)}
			</div>

			{code === 'UNAUTHORIZED' ? (
				<Suspense>
					<SignInRedirect />
				</Suspense>
			) : null}
		</div>
	);
}
