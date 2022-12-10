import type { MergeTrait } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';

export const TraitMergeList: FC<{ mergeFrom: MergeTrait[] }> = ({ mergeFrom }) => {
	const { isReady, updateIdQuery } = useIdQuery();
	return (
		<div className='grid place-content-center gap-2 xl:grid-cols-3'>
			{mergeFrom.map(({ consist }, key) => (
				<ul className='steps gap-2 overflow-visible' key={key}>
					{consist.map(({ id, name, description }) => (
						<li key={id} className='step step-primary' data-content='+'>
							<div className='xl:tooltip xl:tooltip-bottom xl:z-50' data-tip={description}>
								<button
									onClick={() => {
										if (isReady) updateIdQuery({ id });
									}}
									className='btn btn-sm capitalize'
								>
									{name}
								</button>
							</div>
						</li>
					))}
				</ul>
			))}
		</div>
	);
};
