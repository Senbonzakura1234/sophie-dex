import type { Effect } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import RecordHead from '../RecordHead';

const EffectRecord: FC<{ effect: Effect }> = ({ effect: { name, description, noId, id } }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();
	return (
		<FadeWrapper show={isReady} appear={true}>
			<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
				<div className='card-body'>
					<RecordHead id={id} isCurrentRecord={securedIdQuery.id === id} name={name} pathname={pathname} />

					<span className='text-sm'>grade: {noId}</span>

					<span className='font-serif text-lg 2xl:h-16'>{description}</span>
				</div>
			</article>
		</FadeWrapper>
	);
};

export default EffectRecord;
