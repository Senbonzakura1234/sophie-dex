import type { HYPER_LINK_MAP, Item } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { tryCatchHandler } from '@root/utils/common';
import { mkdir, writeFile } from 'fs/promises';
import effects from 'prisma/data/effects';
import items from 'prisma/data/items';
import rumors from 'prisma/data/rumors';
import traits from 'prisma/data/traits';

const prisma = new PrismaClient();

async function seed() {
	const itemsOut: Item[] = items.map(
		({ name, color, relatedCategories, category, recipeType, recipeIdea, traitPresent, ...rest }) => {
			const { contentText, highlightTextMap, linkRecordMap, linkSearchMap }: Record<keyof HYPER_LINK_MAP, string[]> =
				recipeIdea
					? {
							contentText: [],
							highlightTextMap: recipeIdea.highlightTextMap.map(({ content }) => content),
							linkRecordMap: recipeIdea.linkRecordMap.map(({ name }) => name),
							linkSearchMap: recipeIdea.linkSearchMap.map(({ searchQuery }) =>
								Object.values(searchQuery)
									.filter(Boolean)
									.map(i => i.toString().trim())
									.join(','),
							),
					  }
					: {
							contentText: [],
							highlightTextMap: [],
							linkRecordMap: [],
							linkSearchMap: [],
					  };

			const keyWords = [
				...new Set([
					name,
					color,
					...relatedCategories.map(({ name }) => name),
					category,
					recipeType,
					...contentText,
					...highlightTextMap,
					...linkRecordMap,
					...linkSearchMap,
					traitPresent?.name,
				]),
			]
				.filter(Boolean)
				.map(i => i.replaceAll('_', ' ').toLowerCase().trim());

			return {
				...rest,
				name,
				color,
				relatedCategories,
				category,
				recipeType,
				recipeIdea,
				traitPresent,
				keyWords: keyWords.join(','),
			};
		},
	);

	const traitsOut = traits.map(({ categories, itemPresent, mergeFrom, name, ...rest }) => {
		const keyWords = [
			...categories,
			itemPresent?.name,
			...mergeFrom.map(({ consist }) => consist.map(({ name }) => name)).flat(),
			name,
		]
			.filter(Boolean)
			.map(i => i.replaceAll('_', ' ').toLowerCase().trim());

		return {
			...rest,
			categories,
			itemPresent,
			mergeFrom,
			name,
			keyWords: keyWords.join(','),
		};
	});

	const effectsOut = effects.map(({ name, ...rest }) => ({
		...rest,
		name,
		keyWords: name.toLowerCase().trim(),
	}));

	const rumorsOut = rumors.map(({ location, name, rumorType, description, ...rest }) => {
		const { contentText, highlightTextMap, linkRecordMap, linkSearchMap }: Record<keyof HYPER_LINK_MAP, string[]> = {
			contentText: [],
			highlightTextMap: description.highlightTextMap.map(({ content }) => content),
			linkRecordMap: description.linkRecordMap.map(({ name }) => name),
			linkSearchMap: description.linkSearchMap.map(({ searchQuery }) =>
				Object.values(searchQuery)
					.filter(Boolean)
					.map(i => i.toString().trim())
					.join(','),
			),
		};

		const keyWords = [
			...location.split(' - '),
			name,
			rumorType,
			...contentText,
			...highlightTextMap,
			...linkRecordMap,
			...linkSearchMap,
		].map(i => i.replaceAll('_', ' ').toLowerCase().trim());

		return {
			...rest,
			location,
			name,
			rumorType,
			description,
			keyWords: keyWords.join(','),
		};
	});

	tryCatchHandler(
		mkdir('output').finally(async () => {
			await Promise.all([
				writeFile('output/itemsOut.json', JSON.stringify(itemsOut)),
				writeFile('output/traitsOut.json', JSON.stringify(traitsOut)),
				writeFile('output/effectsOut.json', JSON.stringify(effectsOut)),
				writeFile('output/rumorsOut.json', JSON.stringify(rumorsOut)),
			]);
		}),
	);
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
