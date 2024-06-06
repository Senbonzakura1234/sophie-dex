import { exportDBQueriesMap } from '@root/server/postgresql/repository';
import { entries, tryCatchHandler } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { ulid } from 'ulid';

const onExport = () =>
	Promise.all(
		entries(exportDBQueriesMap).map(async ([table, query]) => {
			const exportData = await tryCatchHandler(query.execute(), 'exportDataQuery.execute');

			if (!exportData.isSuccess) return { table, error: 'read-error', isSuccess: false } as const;

			const writeFileResult = await tryCatchHandler(
				writeFile(
					`backup/${table}.json`,
					JSON.stringify(
						exportData.data.map(item => ({ ...item, id: ulid() })),
						null,
						2
					)
				),
				'exportDataQuery.writeFile'
			);

			if (!writeFileResult.isSuccess) return { table, error: 'write-error', isSuccess: false } as const;

			return { table, error: null, isSuccess: true } as const;
		})
	);

export type ExportResult = Awaited<ReturnType<typeof onExport>>;

export async function GET() {
	if (env.NEXT_PUBLIC_NODE_ENV === 'production') return new Response('Forbidden resource', { status: 403 });
	return NextResponse.json({ exportResult: await onExport() });
}
