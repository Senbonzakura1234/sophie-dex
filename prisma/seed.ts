import { PrismaClient } from '@prisma/client';

import effects from './data/effects';
import items from './data/items';
import traits from './data/traits';

const prisma = new PrismaClient();

async function seed() {
	effects
		.sort((a, b) => a.grade - b.grade)
		.forEach(async effect => {
			await prisma.effect.create({ data: effect });
		});

	traits
		.sort((a, b) => a.grade - b.grade)
		.forEach(async trait => {
			await prisma.trait.create({ data: trait });
		});

	items
		.sort((a, b) => a.grade - b.grade)
		.forEach(async item => {
			await prisma.item.create({ data: item });
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
