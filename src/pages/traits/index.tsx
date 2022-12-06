import type { Trait } from '@prisma/client';
import TraitCategories from '@root/components/TraitCategories';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { sortByValidator } from '@root/types/common/zod';
import { trpc } from '@root/utils/trpc';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import clsx from 'clsx';
import { type NextPage } from 'next';

const columnHelper = createColumnHelper<Trait>();

const Traits: NextPage = () => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();
	const { data, isSuccess } = trpc.trait.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	const columns = [
		columnHelper.accessor('noId', {
			cell: info => info.getValue(),
			footer: info => info.column.id,
		}),
		columnHelper.accessor('name', {
			cell: info => <div className='text-red-500'>{info.getValue()}</div>,
			footer: info => info.column.id,
		}),
		columnHelper.accessor('description', {
			cell: info => info.getValue(),
			footer: info => info.column.id,
		}),
		columnHelper.accessor('traitCategories', {
			cell: info => <TraitCategories traitCategories={info.getValue()} />,
			footer: info => info.column.id,
		}),
		columnHelper.accessor('mergeFrom', {
			cell: info =>
				info
					.getValue()
					.map(({ consist }) => consist.map(({ name }) => `"${name}"`).join(' + '))
					.join(', '),
			footer: info => info.column.id,
		}),
	];

	const table = useReactTable({
		data: isSuccess ? data.records : [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	const checkSortAble = (id: string) => sortByValidator.safeParse(id);

	return (
		<div className='p-2'>
			<table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th
									className={clsx({
										'cursor-pointer': checkSortAble(header.id).success,
									})}
									key={header.id}
									onClick={() => {
										const parseResult = checkSortAble(header.id);
										if (parseResult.success)
											updateQuery({
												sortBy: parseResult.data,
												direction: securedQuery.direction === 'asc' ? 'desc' : 'asc',
											});
									}}
								>
									{header.isPlaceholder
										? null
										: flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<tr key={row.id}>
							{row.getVisibleCells().map(cell => (
								<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div className='h-4' />
			{isSuccess && (
				<div className='btn-group grid grid-cols-2'>
					<button
						onClick={() => {
							if (parseInt(data.page ?? '1') <= 1) return;
							updateQuery({
								page: `${parseInt(data.page ?? '1') - 1}`,
							});
						}}
						className='btn btn-outline'
						disabled={parseInt(data.page ?? '1') <= 1}
					>
						Previous page
					</button>
					<button
						onClick={() => {
							if (data.totalPage <= parseInt(data.page ?? '0')) return;
							updateQuery({
								page: `${parseInt(data.page ?? '1') + 1}`,
							});
						}}
						className='btn btn-outline'
						disabled={data.totalPage <= parseInt(data.page ?? '0')}
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default Traits;
