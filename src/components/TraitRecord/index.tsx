import type { Trait } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import dynamic from 'next/dynamic';
import type { FC } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import RecordHead from '../RecordHead';
import TraitMergeList from './TraitMergeList';

const TraitCategories = dynamic(() => import('./TraitCategories'), {
	ssr: false,
});

const TraitRecord: FC<{ trait: Trait }> = ({ trait: { name, description, noId, traitCategories, mergeFrom, id } }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();
	return (
		<FadeWrapper show={isReady} appear={true}>
			<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
				<div className='card-body'>
					<RecordHead id={id} isCurrentRecord={securedIdQuery.id === id} name={name} pathname={pathname} />

					<span className='text-sm'>grade: {noId}</span>

					<span className='font-serif text-lg 2xl:h-16'>{description}</span>

					<TraitCategories traitCategories={traitCategories} />

					<TraitMergeList mergeFrom={mergeFrom} />
				</div>
			</article>
		</FadeWrapper>
	);
};

export default TraitRecord;
