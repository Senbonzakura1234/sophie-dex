import MergeIcon from '@root/assets/icons/solid/MergeIcon';
import type { HyperLinkRecord } from '@root/server/db/schema';
import Link from 'next/link';
import { Fragment } from 'react';

type TraitMergeListProps = { mergeFrom: HyperLinkRecord[][] };

export default function TraitMergeList({ mergeFrom }: TraitMergeListProps) {
	return (
		<nav className={`relative flex flex-wrap gap-2 ${mergeFrom.length <= 0 ? 'max-xl:hidden' : ''}`}>
			<h5 className={`font-extrabold ${mergeFrom.length <= 0 ? 'hidden' : ''}`}>Merge from:</h5>

			{mergeFrom.map((traitRecords, key) => (
				<div className='join basis-auto' key={key}>
					{traitRecords.map(({ table: moduleId, name, id }, key) => (
						<Fragment key={key}>
							{key > 0 ? (
								<button role='none' className='btn btn-accent join-item no-animation btn-xs'>
									<MergeIcon className='aspect-square h-4' />
								</button>
							) : null}

							<Link
								aria-label={name}
								className='btn join-item btn-xs capitalize'
								href={{ pathname: `/${moduleId}/[id]`, query: { id } }}
								key={id}
								role='navigation'
							>
								{name}
							</Link>
						</Fragment>
					))}
				</div>
			))}
		</nav>
	);
}
