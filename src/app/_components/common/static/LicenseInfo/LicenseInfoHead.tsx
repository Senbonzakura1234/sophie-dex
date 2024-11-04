import MDXRenderer from '@components/common/static/MDXRenderer';
import ScaleIcon from '@components/icons/outline/ScaleIcon';
import ArrowTopRightOnSquareIcon from '@components/icons/solid/ArrowTopRightOnSquareIcon';
import type { ImprovePick } from '@root/types/common';
import type { LicenseInfo } from '@root/types/common/zod';
import { env } from '@root/utils/common/env';
import Link from 'next/link';
import { Suspense } from 'react';

type Props = Readonly<ImprovePick<LicenseInfo, 'description' | 'name'>>;

export default function LicenseInfoHead({ description, name }: Props) {
	return (
		<div className='flex grow flex-col gap-2'>
			<div className='flex gap-2'>
				<div className='aspect-square h-12 rounded-lg bg-gradient-to-br from-accent to-primary p-1.5'>
					<ScaleIcon className='my-auto size-full stroke-2 text-base-100' />
				</div>

				<div>
					<h2 className='text-[10px] italic md:text-xs'>This application is licensed under the</h2>

					<h1 className='flex gap-2 text-2xl font-bold text-primary'>
						{name}

						<Link
							aria-label='Go to license'
							className='btn btn-circle btn-link btn-primary btn-xs mb-auto'
							href={{
								protocol: 'https',
								hostname: 'github',
								host: 'github.com',
								pathname: `/${env.NEXT_PUBLIC_APP_PATH}/blob/main/LICENSE`
							}}
							scroll={false}
							target='_blank'
						>
							<ArrowTopRightOnSquareIcon className='aspect-square h-4' />
						</Link>
					</h1>
				</div>
			</div>

			<Suspense>
				<MDXRenderer body={description} className='!max-w-xl text-xs font-bold md:text-sm' />
			</Suspense>
		</div>
	);
}
