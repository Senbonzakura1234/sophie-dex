import { exportDBQueriesMap } from '@root/server/db';
import { LogProvider, evnIs, tryCatchHandler } from '@root/utils/common';
import { writeFile } from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (evnIs('production')) return res.status(403).json({ error: 'forbidden' });

	if (req.method === 'GET') {
		await Promise.all(
			Object.entries(exportDBQueriesMap).map(async ([table, query]) => {
				const exportResult = await tryCatchHandler(query.execute());

				if (!exportResult.isSuccess)
					return LogProvider.write({
						args: [`Error exporting data from table ${table}`, exportResult.error],
						type: 'error',
					});

				const writeFileResult = await tryCatchHandler(
					writeFile(`backup/${table}.json`, JSON.stringify(exportResult.data, null, 2)),
				);

				if (!writeFileResult.isSuccess)
					return LogProvider.write({
						args: [`Error writing data from table ${table}`, writeFileResult.error],
						type: 'error',
					});
			}),
		);

		return res.status(200).json({ status: 'OK' });
	}

	res.status(405).json({ error: 'method not allowed' });
}
