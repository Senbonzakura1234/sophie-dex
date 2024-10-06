import { exportDBQueriesMap } from '@root/server/postgresql/repository';
import { entries, tryCatchHandler } from '@root/utils/common';
import { writeFile } from 'node:fs/promises';

export async function GET() {
	const exportResult = await Promise.all(
		entries(exportDBQueriesMap).map(async ([table, query]) => {
			const exportData = await tryCatchHandler(query.execute(), 'exportDataQuery.execute');

			if (!exportData.isSuccess) return { table, error: 'read-error', isSuccess: false } as const;

			const writeFileResult = await tryCatchHandler(
				writeFile(`backup/${table}.json`, JSON.stringify(exportData.data, null, 2)),
				'exportDataQuery.writeFile'
			);

			if (!writeFileResult.isSuccess) return { table, error: 'write-error', isSuccess: false } as const;

			return { table, error: null, isSuccess: true } as const;
		})
	);

	return Response.json({ exportResult });
}
