import { prisma } from '@root/server/db/client';
import { type NextApiRequest, type NextApiResponse } from 'next';

const effects = async (_: NextApiRequest, res: NextApiResponse) => {
	const effects = await prisma.effect.findMany();
	res.status(200).json(effects);
};

export default effects;
