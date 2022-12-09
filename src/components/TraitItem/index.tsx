import type { Trait } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import clsx from 'clsx';
import type { FC } from 'react';

import TraitCategories from './TraitCategories';
import { TraitMergeList } from './TraitMergeList';

const TraitItem: FC<{ trait: Trait }> = ({ trait: { name, description, noId, traitCategories, mergeFrom, id } }) => {
	const { isReady, updateIdQuery, securedIdQuery, backToListPage } = useIdQuery();
	return (
		<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
			<div className='card-body'>
				{securedIdQuery.id === id && (
					<div className='card-actions place-content-end'>
						<button className='btn btn-sm btn-outline capitalize' onClick={backToListPage}>
							Back to search
						</button>
					</div>
				)}
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
		</article>
	);
};

export default TraitItem;
