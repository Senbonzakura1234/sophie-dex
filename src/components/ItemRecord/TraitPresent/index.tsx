import { DocumentChartBarIcon } from '@heroicons/react/24/solid';
import type { TraitPresentProps } from '@root/types/common/props';
import Link from 'next/link';
import type { FC } from 'react';

const TraitPresent: FC<TraitPresentProps> = ({ traitPresent: { name, id } }) => {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Trait: </div>

			<Link
				href={{ pathname: `/traits/${id}` }}
				as={{ pathname: `/traits/${id}` }}
				role='navigation'
				aria-label={name}
				className='link link-hover'
			>
				<span className='flex gap-1 font-serif font-bold'>
					<DocumentChartBarIcon className='my-auto h-4 w-4' />
					{name}
				</span>
			</Link>
		</div>
	);
};

export default TraitPresent;
