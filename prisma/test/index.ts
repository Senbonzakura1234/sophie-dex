import { PrismaClient } from '@prisma/client';
import { evnIs, tryCatchHandler } from '@root/utils/common';
import { mkdir, writeFile } from 'fs/promises';

const prisma = new PrismaClient();

async function seed() {
	return await tryCatchHandler(
		mkdir('output').finally(
			async () =>
				await tryCatchHandler(
					Promise.all([
						writeFile('output/itemsOut.json', JSON.stringify({})),
						writeFile('output/traitsOut.json', JSON.stringify({})),
						writeFile('output/effectsOut.json', JSON.stringify({})),
						writeFile('output/rumorsOut.json', JSON.stringify({})),
					]),
				),
		),
	);
}

seed()
	.catch(e => {
		if (evnIs('development')) console.error(e);
		process.exit(1);
	})
	.finally(async () => await tryCatchHandler(prisma.$disconnect()));
