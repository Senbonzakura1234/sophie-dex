import { PrismaClient } from '@prisma/client';

import effects from './data/effects';
import items from './data/items';
import traits from './data/traits';

const prisma = new PrismaClient();

async function seed() {
	effects.forEach(async effect => {
		await prisma.effect.create({ data: effect });
	});

	traits.forEach(async trait => {
		await prisma.trait.create({ data: trait });
	});

	items.forEach(async item => {
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
