import { PrismaClient } from '@prisma/client';
import { evnIs, tryCatchHandler } from '@root/utils/common';
import { writeFile } from 'fs/promises';

const prisma = new PrismaClient();
const mapName: Readonly<Record<number, string>> = {
	0: 'backup/export/item.json',
	1: 'backup/export/trait.json',
	2: 'backup/export/effect.json',
	3: 'backup/export/rumor.json',
} as const;

async function seed() {
	const { data: transactionsData, isSuccess: transactionsIsSuccess } = await tryCatchHandler(
		prisma.$transaction([
			prisma.item.findMany(),
			prisma.trait.findMany(),
			prisma.effect.findMany(),
			prisma.rumor.findMany(),
		]),
	);

	if (!transactionsIsSuccess) return;

	return await tryCatchHandler(
		Promise.all(
			transactionsData.map(async (res, index) => {
				const fileName = mapName[index];

				if (!fileName) return;

				return await tryCatchHandler(
					writeFile(
						fileName,
						JSON.stringify(
							res.sort((a, b) => {
								if ('index' in a && 'index' in b) return a.index - b.index;
								if ('price' in a && 'price' in b) return a.price - b.price;
								return 0;
							}),
						),
					),
				);
			}),
		),
	);
}

seed()
	.catch(e => {
		if (evnIs('development')) console.error(e);
		process.exit(1);
	})
	.finally(async () => await tryCatchHandler(prisma.$disconnect()));
