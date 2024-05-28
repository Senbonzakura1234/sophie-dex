import MergeIcon from '@components/icons/solid/MergeIcon';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import type { HyperLinkRecord } from '@root/server/postgresql/schema';
import { cn, highlightSearchedText } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ShareButton = dynamic(() => import('@components/common/dynamic/ShareButton'), {
	loading: () => <PulsePlaceHolder className='aspect-square h-6 rounded-lg' />
});

type TraitMergeListProps = { mergeFrom: Array<[HyperLinkRecord, HyperLinkRecord]>; search: string | undefined };

export default function TraitMergeList({ mergeFrom, search }: TraitMergeListProps) {
	return (
		<nav className={cn('relative flex flex-wrap gap-2', { 'max-xl:hidden': mergeFrom.length <= 0 })}>
			<div className={cn({ ['hidden']: mergeFrom.length <= 0 })}>Merge from:</div>

			<div className='flex flex-col gap-2'>
				{mergeFrom.map(([firstTrait, lastTrait], key) => (
					<div className='join basis-auto shadow-lg shadow-base-content/30' key={key}>
						<ShareButton
							classNames={{ wrapper: 'btn-square join-item', icon: 'size-3' }}
							input={{
								text: firstTrait.name,
								title: firstTrait.name,
								url: `/${firstTrait.table}/${firstTrait.id}`
							}}
						/>

						<Link
							aria-label={firstTrait.name}
							className='btn join-item btn-xs capitalize'
							href={`/${firstTrait.table}/${firstTrait.id}`}
						>
							<span
								className='max-sm:max-w-16 max-sm:truncate'
								dangerouslySetInnerHTML={{ __html: highlightSearchedText(firstTrait.name, search) }}
							/>
						</Link>

						<button aria-label='Merge with' className='btn btn-accent join-item no-animation btn-xs'>
							<MergeIcon className='aspect-square h-4' />
						</button>

						<Link
							aria-label={lastTrait.name}
							className='btn join-item btn-xs capitalize'
							href={`/${lastTrait.table}/${lastTrait.id}`}
						>
							<span
								className='max-sm:max-w-16 max-sm:truncate'
								dangerouslySetInnerHTML={{ __html: highlightSearchedText(lastTrait.name, search) }}
							/>
						</Link>

						<ShareButton
							classNames={{ wrapper: 'btn-square join-item', icon: 'size-3' }}
							input={{
								text: lastTrait.name,
								title: lastTrait.name,
								url: `/${lastTrait.table}/${lastTrait.id}`
							}}
						/>
					</div>
				))}
			</div>
		</nav>
	);
}
