import type { Trait } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import clsx from 'clsx';
import type { FC } from 'react';

import TraitCategories from './TraitCategories';
import { TraitMergeList } from './TraitMergeList';

const TraitItem: FC<{ trait: Trait }> = ({ trait: { name, description, noId, traitCategories, mergeFrom, id } }) => {
	const { isReady, updateIdQuery, securedIdQuery } = useIdQuery();
	return (
		<div className='card bg-base-100 grid w-full grow-0 shadow-xl'>
			<div className='card-body'>
				<h2
					onClick={() => {
						if (securedIdQuery.id === id) return;
						if (isReady) updateIdQuery({ id });
					}}
					className={clsx({ ['link']: securedIdQuery.id !== id }, 'card-title')}
				>
					{name}
				</h2>
				<small>grade: {noId}</small>
				<p className='text-lg'>{description}</p>
				<TraitCategories traitCategories={traitCategories} />
				<TraitMergeList mergeFrom={mergeFrom} />
			</div>
		</div>
	);
};

export default TraitItem;
