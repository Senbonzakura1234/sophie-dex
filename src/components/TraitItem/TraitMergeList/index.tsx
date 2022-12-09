import type { MergeTrait } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';

export const TraitMergeList: FC<{ mergeFrom: MergeTrait[] }> = ({ mergeFrom }) => {
	const { isReady, updateIdQuery } = useIdQuery();
	return (
		<div className='grid-cols-traitMergeList grid place-content-center gap-2'>
			{mergeFrom.map(({ consist }, key) => (
				<ul className='steps gap-2 overflow-visible' key={key}>
					{consist.map(({ id, name, description }) => (
						<li
							key={id}
							onClick={() => console.log('clicked ', name)}
							className='step step-primary'
							data-content=''
						>
							<div className='lg:tooltip lg:tooltip-bottom lg:z-50' data-tip={description}>
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
