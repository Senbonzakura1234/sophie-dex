import { PrismaClient } from '@prisma/client';

import { tryCatchHandler } from '@root/utils/common';
import effects from './data/effects';
import items from './data/items';
import rumors from './data/rumors';
import traits from './data/traits';

const prisma = new PrismaClient();

async function seed() {
	effects.forEach(async effect => {
		const { error, isSuccess: success } = await tryCatchHandler(prisma.effect.create({ data: effect }));
		if (!success) return console.log(error);
	});

	traits.forEach(async trait => {
		const { error, isSuccess: success } = await tryCatchHandler(prisma.trait.create({ data: trait }));
		if (!success) console.log(error);
	});

	items.forEach(async item => {
		const { error, isSuccess: success } = await tryCatchHandler(prisma.item.create({ data: item }));
		if (!success) console.log(error);
	});

	rumors.forEach(async rumor => {
		const { error, isSuccess: success } = await tryCatchHandler(prisma.rumor.create({ data: rumor }));
		if (!success) console.log(error);
	});
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		const { error, isSuccess: success } = await tryCatchHandler(prisma.$disconnect());
		if (!success) console.log(error);
	});
