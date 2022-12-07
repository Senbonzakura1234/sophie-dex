import type { Trait } from '@prisma/client';
import type { FC } from 'react';

import TraitCategories from './TraitCategories';

const TraitItem: FC<{ trait: Trait }> = ({ trait: { name, description, noId, traitCategories } }) => {
	return (
		<div className='card bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<p>{description}</p>
				<TraitCategories traitCategories={traitCategories} />
			</div>
		</div>
	);
};

export default TraitItem;
