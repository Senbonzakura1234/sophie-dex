import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';

const prisma = new PrismaClient();
const mapName: Record<number, string> = {
	1: 'backup/db/export/item.json',
	2: 'backup/db/export/trait.json',
	3: 'backup/db/export/effect.json',
	4: 'backup/db/export/rumor.json',
};

async function seed() {
	await Promise.all(
		(
			await prisma.$transaction([
				prisma.item.findMany(),
				prisma.trait.findMany(),
				prisma.effect.findMany(),
				prisma.rumor.findMany(),
			])
		).map(async (res, index) => {
			await writeFile(
				mapName[index + 1] ?? '',
				JSON.stringify(
					res.sort((a, b) => {
						if ('index' in a && 'index' in b) return a.index - b.index;
						if ('price' in a && 'price' in b) return a.price - b.price;
						return 0;
					}),
				),
			);
		}),
	);
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
