import type { PageName } from '@root/types/common';
import type { FC } from 'react';
import { useMemo } from 'react';

import Paginate from './Paginate';
import ResetFilter from './ResetFilter';
import SortControl from './SortControl';

const FilterControl: FC<{
	page: string;
	totalPage: number;
	limit: string;
	totalRecord: number;
	pageName: PageName;
}> = ({ limit = '10', page = '1', totalPage = 0, totalRecord = 0 }) => {
	const { limitInt, pageInt } = useMemo(
		() => ({ limitInt: parseInt(limit) || 10, pageInt: parseInt(page) || 1 }),
		[limit, page],
	);

	const { from, to } = useMemo(
		() => ({
			from: (pageInt - 1) * limitInt + 1,
			to: pageInt * limitInt > totalRecord ? totalRecord : pageInt * limitInt,
		}),
		[limitInt, pageInt, totalRecord],
	);

	return (
		<section className='container mx-auto p-3'>
			<div className='card bg-base-100 flex w-full flex-row flex-wrap gap-2 py-3 px-5 shadow-2xl lg:place-content-end'>
				<SortControl />
				<div className='text-secondary-content my-auto text-xs font-bold'>
					{from} - {to} of {totalRecord} records
				</div>
				<Paginate page={pageInt} totalPage={totalPage} />
				<ResetFilter />
			</div>
		</section>
	);
};

export default FilterControl;
