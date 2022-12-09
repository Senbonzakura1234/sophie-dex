import type { MergeTrait } from '@prisma/client';
import type { FC } from 'react';

export const TraitMergeList: FC<{ mergeFrom: MergeTrait[] }> = ({ mergeFrom }) => {
	return (
		<div className='grid-cols-traitMergeList grid gap-2'>
			{mergeFrom.map(({ consist }, key) => (
				<ul className='steps gap-2 overflow-visible' key={key}>
					{consist.map(({ id, name, description }) => (
						<li
							key={id}
							onClick={() => console.log('clicked ', name)}
							className='step step-primary'
							data-content=''
						>
							<div className='tooltip tooltip-bottom z-50 w-fit' data-tip={description}>
								<button className='btn btn-sm capitalize'>{name}</button>
							</div>
						</li>
					))}
				</ul>
			))}
		</div>
	);
};
