import { exportDBQueriesMap } from '@root/server/postgresql';
import { entries, evnIs, tryCatchHandler, writeLog } from '@root/utils/common';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { ulid } from 'ulid';

const onExport = () =>
	Promise.all(
		entries(exportDBQueriesMap).map(async ([table, query]) => {
			const exportData = await tryCatchHandler(query.execute());

			if (!exportData.isSuccess) {
				writeLog({
					args: [`Error exporting data from table ${table}`, exportData.error],
					type: 'error',
					hideInProd: true,
				});

				return { table, error: 'read-error', isSuccess: false } as const;
			}

			const writeFileResult = await tryCatchHandler(
				writeFile(
					`backup/${table}.json`,
					JSON.stringify(
						exportData.data.map(item => ({ ...item, id: ulid() })),
						null,
						2,
					),
				),
			);

			if (!writeFileResult.isSuccess) {
				writeLog({
					args: [`Error writing data from table ${table}`, writeFileResult.error],
					type: 'error',
					hideInProd: true,
				});

				return { table, error: 'write-error', isSuccess: false } as const;
			}

			return { table, error: null, isSuccess: true } as const;
		}),
	);

export type ExportResult = Awaited<ReturnType<typeof onExport>>;

export async function GET() {
	if (evnIs('production')) return new Response('Forbidden resource', { status: 403 });
	return NextResponse.json({ exportResult: await onExport() });
}
