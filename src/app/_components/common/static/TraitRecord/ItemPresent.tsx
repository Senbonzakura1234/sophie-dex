import DocumentChartBarIcon from '@components/icons/solid/DocumentChartBarIcon';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import type { HyperLinkRecord } from '@root/server/database/postgresql/schema';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ShareButton = dynamic(() => import('@components/common/dynamic/ShareButton'), {
	ssr: false,
	loading: () => <PulsePlaceHolder className='aspect-square h-6 rounded-lg' />,
});

type ItemPresentProps = { itemPresent: HyperLinkRecord };

export default function ItemPresent({ itemPresent: { table: moduleId, id, name } }: ItemPresentProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='capitalize'>{moduleId}: </div>

			<Link aria-label={name} className='link link-primary visited:link-accent' href={`/${moduleId}/${id}`}>
				<span className='flex gap-1 font-bold decoration-inherit'>
					<DocumentChartBarIcon className='my-auto aspect-square h-4' />
					{name}
				</span>
			</Link>

			<ShareButton
				className='btn-ghost text-primary'
				input={{ text: name, title: name, url: `/${moduleId}/${id}` }}
			/>
		</div>
	);
}
