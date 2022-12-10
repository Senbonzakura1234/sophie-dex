import {
	ArrowTopRightOnSquareIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';
import { useMemo, useState } from 'react';

const Paginate: FC<{ page: number; totalPage: number }> = ({ page, totalPage }) => {
	const { isReady, updateQuery } = useSearchQuery();

	const [goToPage, setGoToPage] = useState<string>(`${page}`);

	const isPreviousDisable = useMemo(() => !isReady || page === 1, [isReady, page]);
	const isNextDisable = useMemo(() => !isReady || page === totalPage, [isReady, page, totalPage]);
	const isJumpToDisable = useMemo(() => !isReady || goToPage === `${page}`, [goToPage, isReady, page]);

	return (
		<div className='form-control'>
			<div className='flex gap-2'>
				<button
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: '1' });
					}}
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronDoubleLeftIcon width={16} height={16} />
				</button>
				<button
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: `${page - 1}` });
					}}
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronLeftIcon width={16} height={16} />
				</button>

				<select
					className='select select-xs my-auto !outline-none'
					disabled={!isReady}
					value={goToPage}
					onChange={e => {
						if (!isReady || e.target.value === `${page}`) return;
						setGoToPage(() => e.target.value);
					}}
				>
					{Array(totalPage)
						.fill(0)
						.map((_, index) => (
							<option value={`${index + 1}`} key={index} disabled={!isReady || page === index + 1}>
								Page {index + 1}
							</option>
						))}
				</select>

				<button
					className='btn btn-ghost btn-circle btn-sm my-auto'
					onClick={() => {
						if (isJumpToDisable) return;
						updateQuery({ page: goToPage });
					}}
				>
					<ArrowTopRightOnSquareIcon width={16} height={16} />
				</button>

				<button
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: `${page + 1}` });
					}}
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronRightIcon width={16} height={16} />
				</button>

				<button
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: `${totalPage}` });
					}}
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronDoubleRightIcon width={16} height={16} />
				</button>
			</div>
		</div>
	);
};

export default Paginate;