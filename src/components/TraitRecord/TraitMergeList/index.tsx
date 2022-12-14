import type { MergeTrait } from '@prisma/client';
import Link from 'next/link';
import type { FC } from 'react';

const TraitMergeList: FC<{ mergeFrom: MergeTrait[] }> = ({ mergeFrom }) => {
	return (
		<nav className='grid place-content-center gap-2 2xl:grid-cols-3'>
			{mergeFrom.map(({ consist }, key) => (
				<ul className='steps gap-2 overflow-visible' key={key}>
					{consist.map(({ id, name, description }) => (
						<li key={id} className='step step-primary' data-content='+'>
							<div className='2xl:tooltip 2xl:tooltip-bottom 2xl:z-50' data-tip={description}>
								<Link href={{ pathname: `/traits/${id}` }} aria-label={name} className='btn btn-sm capitalize'>
									{name}
								</Link>
							</div>
						</li>
					))}
				</ul>
			))}
		</nav>
	);
};

export default TraitMergeList;
