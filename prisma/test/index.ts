import { PrismaClient } from '@prisma/client';
import {
	hyperLinkSeparator,
	prefixEffectLinkRecord,
	prefixItemLinkRecord,
	prefixItemLinkSearch,
	prefixMisc,
	prefixTraitLinkRecord,
} from '@root/constants';
import { genericRelatedCategorySchema, hyperLinkValidator } from '@root/types/common/zod';
import { writeFile } from 'fs/promises';
import items from 'prisma/data/items';

const prisma = new PrismaClient();

async function seed() {
	const data = items.map(i => {
		if (!i.recipeIdea) return i;

		const recipe = i.recipeIdea
			.split(hyperLinkSeparator)
			.map((input, index) => {
				try {
					if (index % 2 === 0) return input;

					if (input.startsWith(prefixMisc)) return JSON.stringify({ content: input.replaceAll(prefixMisc, '') });

					let prefix = '';
					if (input.startsWith(prefixItemLinkSearch)) prefix = prefixItemLinkSearch;
					if (input.startsWith(prefixItemLinkRecord)) prefix = prefixItemLinkRecord;
					if (input.startsWith(prefixEffectLinkRecord)) prefix = prefixEffectLinkRecord;
					if (input.startsWith(prefixTraitLinkRecord)) prefix = prefixTraitLinkRecord;

					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					const prepend = (
						{
							[prefixItemLinkSearch]: {
								type: 'search',
								path: '/items',
							},
							[prefixItemLinkRecord]: {
								type: 'record',
								path: '/items',
							},
							[prefixEffectLinkRecord]: {
								type: 'record',
								path: '/effects',
							},
							[prefixTraitLinkRecord]: {
								type: 'record',
								path: '/traits',
							},
						} as const
					)[prefix]!;

					const parse = JSON.parse(input.replaceAll(prefix, ''));

					const record = hyperLinkValidator.safeParse(parse);

					if (record.success)
						return JSON.stringify({
							path: prepend.path,
							meta: {
								type: 'record',
								name: record.data.name,
								id: record.data.id,
							},
						});

					const search = genericRelatedCategorySchema.safeParse(parse);

					if (search.success)
						return JSON.stringify({
							path: prepend.path,
							meta: {
								type: 'search',
								search: { relatedCategory: search.data },
							},
						});

					return input;
				} catch (error) {
					console.log(input);

					return input;
				}
			})
			.filter(Boolean);

		return { ...i, recipeIdea: recipe };
	});

	await writeFile('output.json', JSON.stringify(data));
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
