import { PrismaClient } from '@prisma/client';
import traits from 'prisma/data/traits';

const prisma = new PrismaClient();

async function seed() {
	traits
		.filter(trait => !trait.categories.includes('HEAL_ITEM') && trait.categories.includes('BUFF_ITEM'))
		.forEach(t => console.log(t.name));
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
