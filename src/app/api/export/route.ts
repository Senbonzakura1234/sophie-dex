import { exportDBQueriesMap } from '@root/server/database';
import { LogProvider, evnIs, tryCatchHandler } from '@root/utils/common';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

const onExport = () =>
	Promise.all(
		Object.entries(exportDBQueriesMap).map(async ([table, query]) => {
			const exportData = await tryCatchHandler(query.execute());

			if (!exportData.isSuccess) {
				LogProvider.write({
					args: [`Error exporting data from table ${table}`, exportData.error],
					type: 'error',
				});

				return { table, error: 'read-error', isSuccess: false } as const;
			}

			const writeFileResult = await tryCatchHandler(
				writeFile(`backup/${table}.json`, JSON.stringify(exportData.data, null, 2)),
			);

			if (!writeFileResult.isSuccess) {
				LogProvider.write({
					args: [`Error writing data from table ${table}`, writeFileResult.error],
					type: 'error',
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