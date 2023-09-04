import CopyUrlButton from '@root/components/common/client/CopyUrlButton';
import MergeIcon from '@root/components/common/server/icons/solid/MergeIcon';
import type { HyperLinkRecord } from '@root/server/database/schema';
import Link from 'next/link';

type TraitMergeListProps = { mergeFrom: Array<[HyperLinkRecord, HyperLinkRecord]> };

export default function TraitMergeList({ mergeFrom }: TraitMergeListProps) {
	return (
		<nav className={`relative flex flex-wrap gap-2 ${mergeFrom.length <= 0 ? 'max-xl:hidden' : ''}`}>
			<div className={`font-extrabold ${mergeFrom.length <= 0 ? 'hidden' : ''}`}>Merge from:</div>

			{mergeFrom.map(([firstTrait, lastTrait], key) => (
				<div className='join basis-auto' key={key}>
					<CopyUrlButton className='join-item' url={`/${firstTrait.table}/${firstTrait.id}`} />
					<Link
						aria-label={firstTrait.name}
						className='btn join-item btn-xs capitalize'
						href={`/${firstTrait.table}/${firstTrait.id}`}
						role='navigation'
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
						role='navigation'
					>
						<span className='max-sm:max-w-[4rem] max-sm:truncate'>{lastTrait.name}</span>
					</Link>
					<CopyUrlButton className='join-item' url={`/${lastTrait.table}/${lastTrait.id}`} />
				</div>
			))}
		</nav>
	);
}
