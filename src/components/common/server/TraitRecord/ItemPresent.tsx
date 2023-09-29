import CopyUrlButton from '@root/components/common/client/CopyUrlButton';
import DocumentChartBarIcon from '@root/components/icons/solid/DocumentChartBarIcon';
import type { HyperLinkRecord } from '@root/server/database/schema';
import Link from 'next/link';

type ItemPresentProps = { itemPresent: HyperLinkRecord };

export default function ItemPresent({ itemPresent: { table: moduleId, id, name } }: ItemPresentProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='capitalize'>{moduleId}: </div>

			<Link
				aria-label={name}
				className='link-info link visited:link-accent'
				href={`/${moduleId}/${id}`}
				role='navigation'
			>
				<span className='flex gap-1 font-bold decoration-inherit'>
					<DocumentChartBarIcon className='my-auto aspect-square h-4' />
					{name}
				</span>
			</Link>

			<CopyUrlButton className='btn-ghost text-primary' url={`/${moduleId}/${id}`} />
		</div>
	);
}
