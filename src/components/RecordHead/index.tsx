import { DocumentChartBarIcon, HomeIcon } from '@heroicons/react/24/outline';
import { ArrowLeftOnRectangleIcon, LinkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

const RecordHead: FC<{ name: string; id: string; isCurrentRecord: boolean; pathname: string }> = ({
	id,
	isCurrentRecord,
	pathname,
	name,
}) => {
	return (
		<>
			{isCurrentRecord && (
				<div className='card-actions mb-2 place-content-between'>
					<Link
						href={{ pathname: '/' }}
						className='btn btn-sm btn-outline btn-square gap-2 font-bold capitalize'
						aria-label='Go to homepage'
					>
						<HomeIcon className='my-auto h-4 w-4' />
					</Link>
					<Link
						href={{ pathname }}
						className='btn btn-outline btn-sm gap-2 font-bold capitalize'
						aria-label='Back to search'
					>
						<ArrowLeftOnRectangleIcon className='my-auto h-4 w-4' />
						<span className='hidden 2xl:inline'>Back to search</span>
					</Link>
				</div>
			)}

			<div className='card-title'>
				<Link
					href={{ pathname: `${pathname}/${id}` }}
					className={clsx({
						['link link-hover']: !isCurrentRecord,
						'pointer-events-none cursor-default': isCurrentRecord,
					})}
					aria-label={name}
				>
					<span className='flex gap-2 font-serif'>
						<LinkIcon className={clsx({ hidden: isCurrentRecord }, 'my-auto h-4 w-4')} />
						<DocumentChartBarIcon className={clsx({ hidden: !isCurrentRecord }, 'my-auto h-4 w-4')} />
						{name}
					</span>
				</Link>
			</div>
		</>
	);
};

export default RecordHead;
