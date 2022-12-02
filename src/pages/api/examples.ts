import { prisma } from '@root/server/db/client';
import { type NextApiRequest, type NextApiResponse } from 'next';

const examples = async (_: NextApiRequest, res: NextApiResponse) => {
	const examples = await prisma.item.findMany();
	res.status(200).json(examples);
};

export default examples;
