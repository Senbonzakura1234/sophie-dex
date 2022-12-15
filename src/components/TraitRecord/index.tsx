import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { TraitRecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import RecordHead from '../RecordHead';
import TraitCategories from './TraitCategories';
import TraitMergeList from './TraitMergeList';

const TraitRecord: FC<TraitRecordProps> = ({
	record: { name, description, grade, traitCategories, mergeFrom, id },
}) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();
	return (
		<FadeWrapper show={isReady} appear={true}>
			<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
				<div className='card-body'>
					<RecordHead id={id} isCurrentRecord={securedIdQuery.id === id} name={name} pathname={pathname} />

					<span className='text-sm'>grade: {grade}</span>

					<span className='font-serif text-lg 2xl:h-16'>{description}</span>

					<TraitCategories traitCategories={traitCategories} />

					<TraitMergeList mergeFrom={mergeFrom} />
				</div>
			</article>
		</FadeWrapper>
	);
};

export default TraitRecord;
