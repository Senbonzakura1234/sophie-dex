import type { Item } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import type { HyperLink } from '@root/types/common/zod';
import { hyperLinkValidator } from '@root/types/common/zod';
import { writeFile } from 'fs/promises';
import items from 'prisma/data/items';
import rumors from 'prisma/data/rumors';

const prisma = new PrismaClient();

async function seed() {
	const data: Item[] = items.map(({ description, ...item }) => {
		const search = rumors.find(r =>
			r.description.some(i => {
				try {
					const parseJson = JSON.parse(i);
					const test = hyperLinkValidator.safeParse(parseJson);
					if (!test.success) return false;

					if (test.data.table !== 'ITEM' || test.data.meta.type === 'SEARCH') return false;
					return test.data.meta.id === item.id;
				} catch (error) {
					return false;
				}
			}),
		);

		if (!search) return { description, ...item };

		const newR: HyperLink = {
			table: 'RUMOR',
			meta: {
				type: 'RECORD',
				id: search.id,
				name: search.name,
			},
		};

		return { description: { ...description, rumor: JSON.stringify(newR) }, ...item };
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
