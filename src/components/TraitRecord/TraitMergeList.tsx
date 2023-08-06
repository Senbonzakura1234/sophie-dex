import MergeIcon from '@root/assets/icons/solid/MergeIcon';
import { CopyUrlButton } from '@root/components/ui/dynamic';
import type { HyperLinkRecord } from '@root/server/db/schema';
import Link from 'next/link';
import { Fragment } from 'react';

type TraitMergeListProps = { mergeFrom: HyperLinkRecord[][] };

export default function TraitMergeList({ mergeFrom }: TraitMergeListProps) {
	return (
		<nav className={`relative flex flex-wrap gap-2 ${mergeFrom.length <= 0 ? 'max-xl:hidden' : ''}`}>
			<div className={`font-extrabold ${mergeFrom.length <= 0 ? 'hidden' : ''}`}>Merge from:</div>

			{mergeFrom.map((traitRecords, key) => (
				<div className='join basis-auto' key={key}>
					{traitRecords.map(({ table: moduleId, name, id }, key) => {
						const recordUrlObj = { pathname: `/${moduleId}/[id]`, query: { id } };

						return (
							<Fragment key={key}>
								{key > 0 ? (
									<button aria-label='Merge with' className='btn btn-accent join-item no-animation btn-xs'>
										<MergeIcon className='aspect-square h-4' />
									</button>
								) : null}

								{key <= 0 ? <CopyUrlButton className='join-item' key={key} url={recordUrlObj} /> : null}

								<Link
									aria-label={name}
									className='btn join-item btn-xs capitalize'
									href={recordUrlObj}
									key={id}
									role='navigation'
								>
									{name}
								</Link>

								{key > 0 ? <CopyUrlButton className='join-item' key={key} url={recordUrlObj} /> : null}
							</Fragment>
						);
					})}
				</div>
			))}
		</nav>
	);
}
