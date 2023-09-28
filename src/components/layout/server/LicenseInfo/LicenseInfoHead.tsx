import ScaleIcon from '@root/components/common/server/icons/outline/ScaleIcon';
import ArrowTopRightOnSquareIcon from '@root/components/common/server/icons/solid/ArrowTopRightOnSquareIcon';
import { APP_PATH } from '@root/constants/common';
import type { LicenseInfo } from '@root/types/common/zod';
import Link from 'next/link';

type LicenseInfoHeadProps = Pick<LicenseInfo, 'description' | 'name'>;

export default function LicenseInfoHead({ description, name }: LicenseInfoHeadProps) {
	return (
		<div className='grow'>
			<div className='flex gap-2'>
				<ScaleIcon className='my-auto aspect-square h-12 text-primary' />

				<div>
					<h2 className='text-[10px] italic md:text-xs'>{APP_PATH} is licensed under the</h2>

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

			<div className='max-w-xl text-xs font-bold md:text-sm'>{description}</div>
		</div>
	);
}
