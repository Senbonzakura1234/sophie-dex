import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { TraitRecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import RecordHead from '../RecordHead';
import Categories from './Categories';
import TraitMergeList from './TraitMergeList';

const TraitRecord: FC<TraitRecordProps> = ({ record: { name, description, index, categories, mergeFrom, id } }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();
	return (
		<FadeWrapper show={isReady} appear={true}>
			<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
				<div className='card-body'>
					<RecordHead id={id} isCurrentRecord={securedIdQuery.id === id} name={name} pathname={pathname} />

					<span className='text-sm'>index: {index}</span>

					<span className='font-serif text-lg 2xl:h-16'>{description}</span>

					<Categories categories={categories} />

					<TraitMergeList mergeFrom={mergeFrom} />
				</div>
			</article>
		</FadeWrapper>
	);
};

export default TraitRecord;
