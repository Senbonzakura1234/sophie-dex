import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import items from 'prisma/data/items';

const prisma = new PrismaClient();

async function seed() {
	const data = items.map(({ description, ...rest }) => {
		description.location = description.location || [];
		description.hunt = description.hunt || [];

		return {
			...rest,
			description,
		};
	});
	await writeFile('out.json', JSON.stringify(data));
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
