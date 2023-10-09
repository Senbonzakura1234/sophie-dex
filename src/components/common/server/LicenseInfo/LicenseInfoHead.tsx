import MDXWrapper from '@root/components/common/client/MDXWrapper';
import ScaleIcon from '@root/components/icons/outline/ScaleIcon';
import ArrowTopRightOnSquareIcon from '@root/components/icons/solid/ArrowTopRightOnSquareIcon';
import { APP_PATH } from '@root/constants/common';
import type { LicenseInfo } from '@root/types/common/zod';
import Link from 'next/link';

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
							className='btn btn-circle btn-primary btn-link btn-xs mb-auto'
							href={{
								protocol: 'https',
								hostname: 'github',
								host: 'github.com',
								pathname: `/${APP_PATH}/blob/main/LICENSE`,
							}}
							target='_blank'
						>
							<ArrowTopRightOnSquareIcon className='aspect-square h-4' />
						</Link>
					</h1>
				</div>
			</div>

			<MDXWrapper body={description} className='!max-w-xl text-xs font-bold md:text-sm' />
		</div>
	);
}
