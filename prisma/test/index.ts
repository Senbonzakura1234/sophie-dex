import type { Trait } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import traits from 'prisma/data/traits';

const prisma = new PrismaClient();

async function seed() {
	const data: Trait[] = traits.map(({ categories, ...trait }) => ({
		...trait,
		categories: [...categories, 'EXPLORATION', 'SYNTHESIS'],
	}));

	await writeFile('trait.json', JSON.stringify(data));
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
