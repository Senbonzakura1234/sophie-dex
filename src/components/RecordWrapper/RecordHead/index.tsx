import { DocumentChartBarIcon, HomeIcon } from '@heroicons/react/24/outline';
import { LinkIcon } from '@heroicons/react/24/solid';
import type { PageNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import Link from 'next/link';

type RecordHeadProps = { name: string; id: string; isCurrentRecord: boolean; pathname: string } & PageNameProps;

export default function RecordHead({ id, isCurrentRecord, pathname, name, pageName }: RecordHeadProps) {
	return (
		<>
			{isCurrentRecord && (
				<div className='breadcrumbs text-sm'>
					<ul>
						<li className='font-bold'>
							<Link
								href={{ pathname: '/' }}
								as={{ pathname: '/' }}
								className='flex gap-1'
								aria-label='Go to homepage'
							>
								<HomeIcon className='h-4 w-4' />
								<span className='hidden md:inline'>Home</span>
							</Link>
						</li>
						<li className='font-bold'>
							<Link href={{ pathname }} as={{ pathname }} aria-label='Back to search'>
								{pageName}s
							</Link>
						</li>
						<li>{name}</li>
					</ul>
				</div>
			)}

			<div className='card-title'>
				<Link
					href={{ pathname: `${pathname}/${id}` }}
					as={{ pathname: `${pathname}/${id}` }}
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
}
