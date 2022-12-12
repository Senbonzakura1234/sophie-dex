import type { MergeTrait } from '@prisma/client';
import Link from 'next/link';
import type { FC } from 'react';

const TraitMergeList: FC<{ mergeFrom: MergeTrait[] }> = ({ mergeFrom }) => {
	return (
		<nav className='grid place-content-center gap-2 xl:grid-cols-3'>
			{mergeFrom.map(({ consist }, key) => (
				<ul className='steps gap-2 overflow-visible' key={key}>
					{consist.map(({ id, name, description }) => (
						<li key={id} className='step step-primary' data-content='+'>
							<div className='xl:tooltip xl:tooltip-bottom xl:z-50' data-tip={description}>
								<Link href={{ pathname: `/traits/${id}` }} className='btn btn-sm capitalize'>
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
