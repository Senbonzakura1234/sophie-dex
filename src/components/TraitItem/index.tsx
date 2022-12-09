import type { Trait } from '@prisma/client';
import type { FC } from 'react';

import TraitCategories from './TraitCategories';
import { TraitMergeList } from './TraitMergeList';

const TraitItem: FC<{ trait: Trait }> = ({ trait: { name, description, noId, traitCategories, mergeFrom } }) => {
	return (
		<div className='card bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<small>grade: {noId}</small>
				<p className='text-lg'>{description}</p>
				<TraitCategories traitCategories={traitCategories} />
				<TraitMergeList mergeFrom={mergeFrom} />
			</div>
		</div>
	);
};

export default TraitItem;
