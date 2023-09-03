import DocumentChartBarIcon from '@root/assets/icons/solid/DocumentChartBarIcon';
import CopyUrlButton from '@root/components/common/client/CopyUrlButton';
import type { HyperLinkRecord } from '@root/db/schema';
import Link from 'next/link';

type ItemPresentProps = { itemPresent: HyperLinkRecord };

export default function ItemPresent({ itemPresent: { table: moduleId, id, name } }: ItemPresentProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold capitalize'>{moduleId}: </div>

			<Link aria-label={name} className='link-hover link' href={`/${moduleId}/${id}`} role='navigation'>
				<span className='flex gap-1 font-bold'>
					<DocumentChartBarIcon className='my-auto aspect-square h-4' />
					{name}
				</span>
			</Link>

			<CopyUrlButton className='btn-ghost text-primary' url={`/${moduleId}/${id}`} />
		</div>
	);
}
