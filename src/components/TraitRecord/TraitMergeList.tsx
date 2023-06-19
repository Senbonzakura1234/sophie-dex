import type { HyperLinkRecord } from '@root/server/db/schema';
import Link from 'next/link';
import { Fragment } from 'react';

type TraitMergeListProps = { mergeFrom: HyperLinkRecord[][] };

export default function TraitMergeList({ mergeFrom }: TraitMergeListProps) {
	return (
		<nav className={`relative z-50 flex flex-wrap gap-2 ${mergeFrom.length <= 0 && 'max-xl:hidden'}`}>
			<h5 className={`my-auto font-extrabold ${mergeFrom.length <= 0 && 'hidden'}`}>Merge from:</h5>

			{mergeFrom.map((traitRecords, key) => (
				<div className='join basis-auto' key={key}>
					{traitRecords.map(({ table, name, id }, key) => (
						<Fragment key={key}>
							{key > 0 ? (
								<button className='btn-primary no-animation btn-xs join-item btn !border-primary/50 !bg-primary/50'>
									<svg
										aria-hidden='true'
										viewBox='0 0 16 16'
										version='1.1'
										data-view-component='true'
										className='h-4 w-4'
									>
										<path
											fillRule='evenodd'
											d='M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z'
										/>
									</svg>
								</button>
							) : null}

							<Link
								className='btn-xs join-item btn capitalize'
								href={{ pathname: `/${table}s/${id}` }}
								as={{ pathname: `/${table}s/${id}` }}
								key={id}
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