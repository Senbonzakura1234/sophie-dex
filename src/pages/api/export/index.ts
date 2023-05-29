import { exportDBDataValidator } from '@root/types/common/zod';
import { evnIs } from '@root/utils/common';
import { writeFile } from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (evnIs('production')) return res.status(403).json({ error: 'forbidden' });

	if (req.method === 'POST') {
		console.log('export');
		const result = exportDBDataValidator.safeParse(req.body);
		if (!result.success) return res.status(400).json({ error: 'invalid data input' });

		await Promise.all(
			Object.entries(result.data).map(async ([key, value]) => {
				await writeFile(`backup/export/${key}.json`, JSON.stringify(value));
			}),
		);

		return res.status(200).json({ status: 'OK' });
	}

	res.status(405).json({ error: 'method not allowed' });
}
