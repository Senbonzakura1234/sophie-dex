import CopyUrlButton from '@root/components/common/client/CopyUrlButton';
import DocumentChartBarIcon from '@root/components/icons/solid/DocumentChartBarIcon';
import type { HyperLinkRecord } from '@root/server/database/schema';
import Link from 'next/link';

type TraitPresentProps = { traitPresent: HyperLinkRecord };

export default function TraitPresent({ traitPresent: { table: moduleId, id, name } }: TraitPresentProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='capitalize'>{moduleId}: </div>

			<Link
				aria-label={name}
				className='link-primary link visited:link-accent'
				href={`/${moduleId}/${id}`}
				role='navigation'
			>
				<span className='flex gap-1 font-bold'>
					<DocumentChartBarIcon className='my-auto aspect-square h-4' />
					{name}
				</span>
			</Link>

			<CopyUrlButton className='btn-ghost text-primary' url={`/${moduleId}/${id}`} />
		</div>
	);
}
