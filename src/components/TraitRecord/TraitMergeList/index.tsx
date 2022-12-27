import type { TraitMergeListProps } from '@root/types/common/props';
import Link from 'next/link';
import type { FC } from 'react';

const TraitMergeList: FC<TraitMergeListProps> = ({ mergeFrom }) => (
	<nav className='grid place-content-center gap-2 2xl:grid-cols-2'>
		{mergeFrom.map(({ consist }, key) => (
			<ul className='steps gap-2 overflow-visible' key={key}>
				{consist.map(({ id, name, description }) => (
					<li key={id} className='step step-neutral' data-content='+'>
						<div className='2xl:tooltip tooltip-accent 2xl:tooltip-bottom 2xl:z-30' data-tip={description}>
							<Link
								href={{ pathname: `/traits/${id}` }}
								as={{ pathname: `/traits/${id}` }}
								aria-label={name}
								className='btn btn-sm px-5 capitalize'
							>
								{name}
							</Link>
						</div>
					</li>
				))}
			</ul>
		))}
	</nav>
);

export default TraitMergeList;
