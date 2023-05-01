import { DocumentChartBarIcon } from '@heroicons/react/24/solid';
import type { HYPER_LINK_RECORD } from '@prisma/client';
import Link from 'next/link';

type ItemPresentProps = { itemPresent: HYPER_LINK_RECORD };

function ItemPresent({ itemPresent: { table, id, name } }: ItemPresentProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold capitalize'>{table.toLowerCase()}: </div>

			<Link
				href={{ pathname: `/${table.toLowerCase()}s/${id}` }}
				as={{ pathname: `/${table.toLowerCase()}s/${id}` }}
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
}

export default ItemPresent;
