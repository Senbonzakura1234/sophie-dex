import { PrismaClient } from '@prisma/client';

import { evnIs, tryCatchHandler } from '@root/utils/common';
import effects from './data/effects';
import items from './data/items';
import rumors from './data/rumors';
import traits from './data/traits';

const prisma = new PrismaClient();

async function seed() {
	effects.forEach(async effect => await tryCatchHandler(prisma.effect.create({ data: effect })));

	traits.forEach(async trait => await tryCatchHandler(prisma.trait.create({ data: trait })));

	items.forEach(async item => await tryCatchHandler(prisma.item.create({ data: item })));

	rumors.forEach(async rumor => await tryCatchHandler(prisma.rumor.create({ data: rumor })));
}

seed()
	.catch(e => {
		if (evnIs('development')) console.error(e);
		process.exit(1);
	})
	.finally(async () => await tryCatchHandler(prisma.$disconnect()));
