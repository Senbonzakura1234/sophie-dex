import DocumentChartBarIcon from '@root/components/icons/solid/DocumentChartBarIcon';
import PulsePlaceHolder from '@root/components/loading/PulsePlaceHolder';
import type { HyperLinkRecord } from '@root/server/database/schema';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const CopyUrlButton = dynamic(() => import('@root/components/common/client/CopyUrlButton'), {
	ssr: false,
	loading: () => <PulsePlaceHolder className='aspect-square h-6 rounded-lg' />,
});

type ItemPresentProps = { itemPresent: HyperLinkRecord };

export default function ItemPresent({ itemPresent: { table: moduleId, id, name } }: ItemPresentProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='capitalize'>{moduleId}: </div>

			<Link
				aria-label={name}
				className='link-primary link visited:link-accent'
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
