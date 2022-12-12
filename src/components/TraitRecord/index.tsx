import type { Trait } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import TraitCategories from './TraitCategories';
import TraitMergeList from './TraitMergeList';

const TraitRecord: FC<{ trait: Trait }> = ({ trait: { name, description, noId, traitCategories, mergeFrom, id } }) => {
	const { isReady, securedIdQuery } = useIdQuery();
	return (
		<FadeWrapper show={isReady} appear={true}>
			<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
				<div className='card-body'>
					{securedIdQuery.id === id && (
						<div className='card-actions place-content-end'>
							<Link href={{ pathname: '/traits' }} className='btn btn-sm btn-outline capitalize'>
								Back to search
							</Link>
						</div>
					)}

					<div className='card-title'>
						<Link
							href={{ pathname: `/traits${id}` }}
							className={clsx({ ['link link-hover']: securedIdQuery.id !== id })}
						>
							{name}
						</Link>
					</div>

					<span className='text-sm'>grade: {noId}</span>

					<span className='text-lg xl:h-16'>{description}</span>

					<TraitCategories traitCategories={traitCategories} />

					<TraitMergeList mergeFrom={mergeFrom} />
				</div>
			</article>
		</FadeWrapper>
	);
};

export default TraitRecord;
