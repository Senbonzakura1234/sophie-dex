import { PrismaClient } from '@prisma/client';
import { tryCatchHandler } from '@root/utils/common';
import { mkdir, writeFile } from 'fs/promises';

const prisma = new PrismaClient();

async function seed() {
	const { error, isSuccess } = await tryCatchHandler(
		mkdir('output').finally(async () => {
			const { error: writeFileError, isSuccess: writeFileIsSuccess } = await tryCatchHandler(
				Promise.all([
					writeFile('output/itemsOut.json', JSON.stringify({})),
					writeFile('output/traitsOut.json', JSON.stringify({})),
					writeFile('output/effectsOut.json', JSON.stringify({})),
					writeFile('output/rumorsOut.json', JSON.stringify({})),
				]),
			);

			if (!writeFileIsSuccess) console.log(writeFileError);
		}),
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
