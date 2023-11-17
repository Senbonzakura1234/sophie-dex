import ScaleIcon from '@components/icons/outline/ScaleIcon';
import ArrowTopRightOnSquareIcon from '@components/icons/solid/ArrowTopRightOnSquareIcon';
import type { LicenseInfo } from '@root/types/common/zod';
import { env } from '@root/utils/common/env.mjs';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const MDXRenderer = dynamic(() => import('@components/common/client/MDXRenderer'), { ssr: false });

type LicenseInfoHeadProps = Pick<LicenseInfo, 'description' | 'name'>;

export default function LicenseInfoHead({ description, name }: LicenseInfoHeadProps) {
	return (
		<div className='flex grow flex-col gap-2'>
			<div className='flex gap-2'>
				<div className='aspect-square h-12 rounded-lg bg-gradient-to-br from-accent to-primary p-1.5'>
					<ScaleIcon className='my-auto h-full w-full stroke-2 text-base-100' />
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
								pathname: `/${env.NEXT_PUBLIC_APP_PATH}/blob/main/LICENSE`,
							}}
							target='_blank'
						>
							<ArrowTopRightOnSquareIcon className='aspect-square h-4' />
						</Link>
					</h1>
				</div>
			</div>

			<MDXRenderer body={description} className='!max-w-xl text-xs font-bold md:text-sm' />
		</div>
	);
}
