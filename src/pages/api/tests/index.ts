import { evnIs } from '@root/utils/common';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (evnIs('production')) return res.status(403).json({ error: 'forbidden' });

	if (req.method === 'POST') return res.status(200).json({ status: 'OK' });

	res.status(405).json({ error: 'method not allowed' });
}
