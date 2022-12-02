import { PrismaClient } from '@prisma/client';

import effects from './data/effects';
import items from './data/items';
import traits from './data/traits';

const prisma = new PrismaClient();

async function seed() {
	effects.forEach(async ({ id, ...effect }) => {
		await prisma.effect.upsert({
			where: { id },
			create: { id, ...effect },
			update: { ...effect },
		});
	});

	traits.forEach(async ({ id, ...trait }) => {
		await prisma.trait.upsert({
			where: { id },
			create: { id, ...trait },
			update: { ...trait },
		});
	});

	items.forEach(async ({ id, ...item }) => {
		await prisma.item.upsert({
			where: { id },
			create: { id, ...item },
			update: { ...item },
		});
	});
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
