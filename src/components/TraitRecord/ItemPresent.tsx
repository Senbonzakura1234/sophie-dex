import DocumentChartBarIcon from '@root/assets/icons/solid/DocumentChartBarIcon';
import type { HyperLinkRecord } from '@root/server/db/schema';
import { Roboto_Slab } from 'next/font/google';
import Link from 'next/link';

const robotoSlab = Roboto_Slab({ weight: ['700'], subsets: ['latin'] });

type ItemPresentProps = { itemPresent: HyperLinkRecord };

function ItemPresent({ itemPresent: { table: moduleId, id, name } }: ItemPresentProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold capitalize'>{moduleId}: </div>

			<Link
				aria-label={name}
				className='link-hover link'
				href={{ pathname: `/${moduleId}/[id]`, query: { id } }}
				role='navigation'
			>
				<span className={`${robotoSlab.className} flex gap-1`}>
					<DocumentChartBarIcon className='my-auto h-4 w-4' />
					{name}
				</span>
			</Link>
		</div>
	);
}

export default ItemPresent;
