import { PrismaClient } from '@prisma/client';
import type { HyperLink } from '@root/types/common/zod';
import { writeFile } from 'fs/promises';
import items from 'prisma/data/items';
import traits from 'prisma/data/traits';

const prisma = new PrismaClient();

async function seed() {
	const data = traits.map(trait => {
		const search = items.find(({ traitPresent }) => traitPresent?.meta.id === trait.id);

		const itemPresent: HyperLink | null = search
			? {
					table: 'ITEM',
					meta: {
						type: 'RECORD',
						id: search.id,
						name: search.name,
					},
			  }
			: null;

		return { ...trait, itemPresent };
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
