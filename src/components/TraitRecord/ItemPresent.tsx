import DocumentChartBarIcon from '@root/assets/icons/solid/DocumentChartBarIcon';
import type { HyperLinkRecord } from '@root/server/db/schema';
import Link from 'next/link';

type ItemPresentProps = { itemPresent: HyperLinkRecord };

function ItemPresent({ itemPresent: { table: moduleId, id, name } }: ItemPresentProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold capitalize'>{moduleId}: </div>

			<Link
				aria-label={name}
				className='link-hover link'
				href={{ pathname: `/${moduleId}s/[id]`, query: { id } }}
				role='navigation'
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
