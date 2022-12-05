import type { Trait } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trpc } from '@root/utils/trpc';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { type NextPage } from 'next';

const columnHelper = createColumnHelper<Trait>();

const columns = [
	columnHelper.accessor('noId', {
		cell: info => info.getValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('name', {
		cell: info => info.getValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('description', {
		cell: info => info.getValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('traitCategories', {
		cell: info => info.getValue().join(','),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('mergeFrom', {
		cell: info =>
			info
				.getValue()
				.map(({ consist }) => consist.map(({ name }) => name).join('+'))
				.join(''),
		footer: info => info.column.id,
	}),
];

const Traits: NextPage = () => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();
	const { data, isSuccess } = trpc.trait.getAll.useQuery(securedQuery, {
		retry: 3,
		enabled: isReady,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	const table = useReactTable({
		data: isSuccess ? data.records : [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className='p-2'>
			<table>
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th key={header.id}>
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
				<tfoot>
					{table.getFooterGroups().map(footerGroup => (
						<tr key={footerGroup.id}>
							{footerGroup.headers.map(header => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(header.column.columnDef.footer, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</tfoot>
			</table>
			<div className='h-4' />
			{isSuccess && (
				<div className='btn-group grid grid-cols-2'>
					<button
						onClick={() => {
							if (data.page <= 1) return;
							updateQuery({
								page: data.page - 1,
							});
						}}
						className='btn btn-outline'
						disabled={data.page <= 1}
					>
						Previous page
					</button>
					<button
						onClick={() => {
							if (data.totalPage <= data.page) return;
							updateQuery({
								page: data.page + 1,
							});
						}}
						className='btn btn-outline'
						disabled={data.totalPage <= data.page}
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default Traits;
