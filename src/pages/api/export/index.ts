import { exportDBQueriesMap } from '@root/server/db';
import { evnIs } from '@root/utils/common';
import { writeFile } from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (evnIs('production')) return res.status(403).json({ error: 'forbidden' });

	if (req.method === 'GET') {
		await Promise.all(
			Object.entries(exportDBQueriesMap).map(async ([table, query]) => {
				const result = await query.execute();

				await writeFile(`backup/${table}.json`, JSON.stringify(result, null, 2));
			}),
		);

		return res.status(200).json({ status: 'OK' });
	}

	res.status(405).json({ error: 'method not allowed' });
}
