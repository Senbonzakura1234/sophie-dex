import { PrismaClient } from '@prisma/client';
import { tryCatchHandler } from '@root/utils/common';
import { writeFile } from 'fs/promises';

const prisma = new PrismaClient();
const mapName: Readonly<Record<number, string>> = {
	0: 'backup/export/item.json',
	1: 'backup/export/trait.json',
	2: 'backup/export/effect.json',
	3: 'backup/export/rumor.json',
} as const;

async function seed() {
	const {
		data: transactionsData,
		error: transactionsError,
		isSuccess: transactionsIsSuccess,
	} = await tryCatchHandler(
		prisma.$transaction([
			prisma.item.findMany(),
			prisma.trait.findMany(),
			prisma.effect.findMany(),
			prisma.rumor.findMany(),
		]),
	);

	if (!transactionsIsSuccess) return console.log(transactionsError);

	const { isSuccess, error } = await tryCatchHandler(
		Promise.all(
			transactionsData.map(async (res, index) => {
				const fileName = mapName[index];

				if (!fileName) return;

				const { isSuccess: writeFileIsSuccess, error: writeFileError } = await tryCatchHandler(
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

				if (!writeFileIsSuccess) console.log(writeFileError);
			}),
		),
	);

	if (!isSuccess) console.log(error);
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		const { error, isSuccess } = await tryCatchHandler(prisma.$disconnect());

		if (!isSuccess) console.log(error);
	});
