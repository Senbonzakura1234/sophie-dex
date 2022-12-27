import type { CATEGORY } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import type { UnicodeClass } from '@root/types/fonts/atelier';
import items from 'prisma/data/items';

const prisma = new PrismaClient();

async function seed() {
	const y: [
		CATEGORY,
		{
			name: string;
			className: UnicodeClass;
		},
	][] = [
		[
			'ATK_ITEM',
			{
				name: 'Attack Item',
				className: 'atelier__type-attack',
			},
		],
		[
			'HEAL_ITEM',
			{
				name: 'Heal Item',
				className: 'atelier__type-heal',
			},
		],
		[
			'DE_BUFF_ITEM',
			{
				name: 'De-Buff Item',
				className: 'atelier__type-debuff',
			},
		],
		[
			'BUFF_ITEM',
			{
				name: 'Buff Item',
				className: 'atelier__type-buff',
			},
		],
		[
			'WEAPON',
			{
				name: 'Weapon',
				className: 'atelier__type-weapon',
			},
		],
		[
			'ARMOR',
			{
				name: 'Armor',
				className: 'atelier__type-armor',
			},
		],
		[
			'ACCESSORY',
			{
				name: 'Accessory',
				className: 'atelier__type-accessory',
			},
		],
		[
			'MATERIAL',
			{
				name: 'Material',
				className: 'atelier__material',
			},
		],
		[
			'BOOK',
			{
				name: 'Book',
				className: 'atelier__book',
			},
		],
		[
			'EXPLORATION',
			{
				name: 'Exploration',
				className: 'atelier__tool-gather',
			},
		],
		[
			'MACHINE',
			{
				name: 'Machine',
				className: 'atelier__category-neutralizers',
			},
		],
		[
			'KEY_ITEM',
			{
				name: 'Key Item',
				className: 'atelier__category-key-items',
			},
		],
		[
			'SYNTHESIS',
			{
				name: 'Synthesis',
				className: 'atelier__type-synthesis',
			},
		],
	];

	const x = [...new Set(items.map(i => i.category))]
		.map(c => ({
			c,
			count: items.filter(it => it.category === c).length,
		}))
		.sort((a, b) => -a.count + b.count)
		.map(({ c }) => c);

	console.log(x.map(c => y.find(([cate]) => c === cate)));
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
