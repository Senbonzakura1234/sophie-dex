import MergeIcon from '@root/assets/icons/solid/MergeIcon';
import { CopyUrlButton } from '@root/components/ui/dynamic';
import type { HyperLinkRecord } from '@root/server/db/schema';
import Link from 'next/link';

type TraitMergeListProps = { mergeFrom: [HyperLinkRecord, HyperLinkRecord][] };

export default function TraitMergeList({ mergeFrom }: TraitMergeListProps) {
	return (
		<nav className={`relative flex flex-wrap gap-2 ${mergeFrom.length <= 0 ? 'max-xl:hidden' : ''}`}>
			<div className={`font-extrabold ${mergeFrom.length <= 0 ? 'hidden' : ''}`}>Merge from:</div>

			{mergeFrom.map(([firstTrait, lastTrait], key) => {
				const firstRecordUrlObj = { pathname: `/${firstTrait.table}/[id]`, query: { id: firstTrait.id } };
				const lastRecordUrlObj = { pathname: `/${lastTrait.table}/[id]`, query: { id: lastTrait.id } };

				return (
					<div className='join basis-auto' key={key}>
						<CopyUrlButton className='join-item' url={firstRecordUrlObj} />
						<Link
							aria-label={firstTrait.name}
							className='btn join-item btn-xs capitalize'
							href={firstRecordUrlObj}
							role='navigation'
						>
							{firstTrait.name}
						</Link>

						<button aria-label='Merge with' className='btn btn-accent join-item no-animation btn-xs'>
							<MergeIcon className='aspect-square h-4' />
						</button>

						<Link
							aria-label={lastTrait.name}
							className='btn join-item btn-xs capitalize'
							href={lastRecordUrlObj}
							role='navigation'
						>
							{lastTrait.name}
						</Link>
						<CopyUrlButton className='join-item' url={lastRecordUrlObj} />
					</div>
				);
			})}
		</nav>
	);
}
