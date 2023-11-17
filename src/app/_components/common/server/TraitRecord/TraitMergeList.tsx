import MergeIcon from '@components/icons/solid/MergeIcon';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import type { HyperLinkRecord } from '@root/server/database/postgresql/schema';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ShareButton = dynamic(() => import('@components/common/client/ShareButton'), {
	ssr: false,
	loading: () => <PulsePlaceHolder className='aspect-square h-6 rounded-lg' />,
});

type TraitMergeListProps = { mergeFrom: Array<[HyperLinkRecord, HyperLinkRecord]> };

export default function TraitMergeList({ mergeFrom }: TraitMergeListProps) {
	return (
		<nav className={`relative flex flex-wrap gap-2 ${mergeFrom.length <= 0 ? 'max-xl:hidden' : ''}`}>
			<div className={`${mergeFrom.length <= 0 ? 'hidden' : ''}`}>Merge from:</div>

			<div className='flex flex-col gap-2'>
				{mergeFrom.map(([firstTrait, lastTrait], key) => (
					<div className='join basis-auto shadow-lg shadow-base-content/30' key={key}>
						<ShareButton
							className='join-item'
							input={{
								text: firstTrait.name,
								title: firstTrait.name,
								url: `/${firstTrait.table}/${firstTrait.id}`,
							}}
						/>
						<Link
							aria-label={firstTrait.name}
							className='btn join-item btn-xs capitalize'
							href={`/${firstTrait.table}/${firstTrait.id}`}
						>
							<span className='max-sm:max-w-[4rem] max-sm:truncate'>{firstTrait.name}</span>
						</Link>

						<button aria-label='Merge with' className='btn btn-accent join-item no-animation btn-xs'>
							<MergeIcon className='aspect-square h-4' />
						</button>

						<Link
							aria-label={lastTrait.name}
							className='btn join-item btn-xs capitalize'
							href={`/${lastTrait.table}/${lastTrait.id}`}
						>
							<span className='max-sm:max-w-[4rem] max-sm:truncate'>{lastTrait.name}</span>
						</Link>
						<ShareButton
							className='join-item'
							input={{
								text: lastTrait.name,
								title: lastTrait.name,
								url: `/${lastTrait.table}/${lastTrait.id}`,
							}}
						/>
					</div>
				))}
			</div>
		</nav>
	);
}
