import type { Item } from '@prisma/client';

const items: Item[] = [
	{
		color: 'GREEN',
		id: '638a47b992862c8448344910',
		relatedCategories: [
			{
				count: 10,
				name: 'PLANT',
			},
			{
				count: 10,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Magic Grass',
		index: 0,
		level: 2,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344908',
		relatedCategories: [
			{
				count: 15,
				name: 'PLANT',
			},
			{
				count: 5,
				name: 'WATER',
			},
		],
		name: 'Cobalt Grass',
		index: 1,
		level: 3,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344905',
		relatedCategories: [
			{
				count: 10,
				name: 'PLANT',
			},
			{
				count: 10,
				name: 'POISON_MAT',
			},
		],
		name: 'Fairy Poison Grass',
		index: 2,
		level: 11,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490a',
		relatedCategories: [
			{
				count: 20,
				name: 'PLANT',
			},
			{
				count: 10,
				name: 'SECRET_POWER',
			},
			{
				count: 15,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Mystic Herb',
		index: 3,
		level: 15,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834490d',
		relatedCategories: [
			{
				count: 5,
				name: 'PLANT',
			},
			{
				count: 10,
				name: 'FUEL',
			},
		],
		name: 'Sunset Grass',
		index: 4,
		level: 2,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344904',
		relatedCategories: [
			{
				count: 20,
				name: 'PLANT',
			},
			{
				count: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Five Day Vine',
		index: 5,
		level: 10,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344909',
		relatedCategories: [
			{
				count: 20,
				name: 'PLANT',
			},
			{
				count: 15,
				name: 'THREAD',
			},
			{
				count: 10,
				name: 'FUEL',
			},
		],
		name: 'Mountain Cotton',
		index: 6,
		level: 7,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344903',
		relatedCategories: [
			{
				count: 10,
				name: 'WOOD',
			},
			{
				count: 5,
				name: 'PLANT',
			},
		],
		name: 'Mossy Driftwood',
		index: 7,
		level: 13,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344906',
		relatedCategories: [
			{
				count: 20,
				name: 'WOOD',
			},
			{
				count: 10,
				name: 'PLANT',
			},
		],
		name: 'Kifa',
		index: 8,
		level: 10,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344925',
		relatedCategories: [
			{
				count: 10,
				name: 'PLANT',
			},
			{
				count: 20,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Altare',
		index: 9,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834490b',
		relatedCategories: [
			{
				count: 15,
				name: 'PLANT',
			},
			{
				count: 25,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Crimson Herb',
		index: 10,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344907',
		relatedCategories: [
			{
				count: 30,
				name: 'PLANT',
			},
			{
				count: 30,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Princess Grass',
		index: 11,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490c',
		relatedCategories: [
			{
				count: 40,
				name: 'PLANT',
			},
			{
				count: 30,
				name: 'ELIXIR',
			},
		],
		name: 'Eternal Blossom',
		index: 12,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490e',
		relatedCategories: [
			{
				count: 50,
				name: 'PLANT',
			},
			{
				count: 50,
				name: 'MEDICINE_MAT',
			},
			{
				count: 50,
				name: 'ELIXIR',
			},
		],
		name: 'Dunkelheit',
		index: 13,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344914',
		relatedCategories: [
			{
				count: 40,
				name: 'PLANT',
			},
			{
				count: 40,
				name: 'POISON_MAT',
			},
			{
				count: 40,
				name: 'SECRET_POWER',
			},
		],
		name: 'Dunkelstern',
		index: 14,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344922',
		relatedCategories: [
			{
				count: 10,
				name: 'ORE',
			},
		],
		name: 'Aizen Ore',
		index: 15,
		level: 7,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344911',
		relatedCategories: [
			{
				count: 10,
				name: 'ORE',
			},
		],
		name: 'Raiden Ore',
		index: 16,
		level: 9,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834490f',
		relatedCategories: [
			{
				count: 15,
				name: 'ORE',
			},
		],
		name: 'Kupulf Ore',
		index: 17,
		level: 9,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344913',
		relatedCategories: [
			{
				count: 10,
				name: 'ORE',
			},
			{
				count: 5,
				name: 'GUNPOWDER',
			},
		],
		name: 'Kaen Stone',
		index: 18,
		level: 5,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344912',
		relatedCategories: [
			{
				count: 10,
				name: 'ORE',
			},
			{
				count: 5,
				name: 'GEM',
			},
		],
		name: 'Hakurei Stone',
		index: 19,
		level: 7,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344915',
		relatedCategories: [
			{
				count: 20,
				name: 'ORE',
			},
			{
				count: 10,
				name: 'METAL',
			},
		],
		name: 'Spirit Stone',
		index: 20,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834491d',
		relatedCategories: [
			{
				count: 30,
				name: 'ORE',
			},
			{
				count: 20,
				name: 'POISON_MAT',
			},
			{
				count: 15,
				name: 'FUEL',
			},
		],
		name: 'Black Orb',
		index: 21,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344919',
		relatedCategories: [
			{
				count: 10,
				name: 'CLAY',
			},
			{
				count: 20,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Fairy Ball',
		index: 22,
		level: 3,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344916',
		relatedCategories: [
			{
				count: 15,
				name: 'CLAY',
			},
		],
		name: 'Lakebottom Soil',
		index: 23,
		level: 9,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344917',
		relatedCategories: [
			{
				count: 25,
				name: 'CLAY',
			},
		],
		name: 'Seabed Soil',
		index: 24,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344921',
		relatedCategories: [
			{
				count: 10,
				name: 'ORE',
			},
			{
				count: 10,
				name: 'CLAY',
			},
			{
				count: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Ancient Tablet',
		index: 25,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834491b',
		relatedCategories: [
			{
				count: 15,
				name: 'ORE',
			},
			{
				count: 15,
				name: 'CLAY',
			},
		],
		name: 'Broken Stone',
		index: 26,
		level: 11,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344918',
		relatedCategories: [
			{
				count: 25,
				name: 'ORE',
			},
			{
				count: 5,
				name: 'PLANT',
			},
		],
		name: 'Ancient Pillar',
		index: 27,
		level: 21,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344920',
		relatedCategories: [
			{
				count: 25,
				name: 'ORE',
			},
			{
				count: 20,
				name: 'CLAY',
			},
			{
				count: 15,
				name: 'METAL',
			},
		],
		name: 'Smoldering Stone',
		index: 28,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834491a',
		relatedCategories: [
			{
				count: 15,
				name: 'ORE',
			},
			{
				count: 20,
				name: 'THREAD',
			},
		],
		name: 'Fardenlite',
		index: 29,
		level: 25,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492d',
		relatedCategories: [
			{
				count: 35,
				name: 'ORE',
			},
			{
				count: 15,
				name: 'GEM',
			},
		],
		name: 'Night Crystal',
		index: 30,
		level: 29,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834491f',
		relatedCategories: [
			{
				count: 40,
				name: 'ORE',
			},
			{
				count: 25,
				name: 'GEM',
			},
		],
		name: 'Shining Ore',
		index: 31,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834491c',
		relatedCategories: [
			{
				count: 35,
				name: 'ORE',
			},
			{
				count: 15,
				name: 'SECRET_POWER',
			},
		],
		name: 'Silver Crystal',
		index: 32,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344931',
		relatedCategories: [
			{
				count: 40,
				name: 'ORE',
			},
			{
				count: 30,
				name: 'GEM',
			},
			{
				count: 20,
				name: 'ELIXIR',
			},
			{
				count: 30,
				name: 'SECRET_POWER',
			},
		],
		name: 'Spirit Crystal',
		index: 33,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834491e',
		relatedCategories: [
			{
				count: 10,
				name: 'ANIMAL',
			},
			{
				count: 10,
				name: 'THREAD',
			},
		],
		name: 'Monster Feather',
		index: 34,
		level: 4,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344941',
		relatedCategories: [
			{
				count: 15,
				name: 'ANIMAL',
			},
			{
				count: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Strong Bone',
		index: 35,
		level: 6,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344923',
		relatedCategories: [
			{
				count: 15,
				name: 'ANIMAL',
			},
			{
				count: 10,
				name: 'INGREDIENT',
			},
			{
				count: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Island Fish Fin',
		index: 36,
		level: 14,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344924',
		relatedCategories: [
			{
				count: 20,
				name: 'ANIMAL',
			},
			{
				count: 10,
				name: 'THREAD',
			},
		],
		name: 'Animal Fur',
		index: 37,
		level: 8,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344926',
		relatedCategories: [
			{
				count: 30,
				name: 'ANIMAL',
			},
			{
				count: 20,
				name: 'THREAD',
			},
		],
		name: 'Dawn Fur',
		index: 38,
		level: 21,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834492a',
		relatedCategories: [
			{
				count: 20,
				name: 'THREAD',
			},
		],
		name: 'Silver Web',
		index: 39,
		level: 10,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344944',
		relatedCategories: [
			{
				count: 35,
				name: 'THREAD',
			},
		],
		name: 'Gold Steel Web',
		index: 40,
		level: 30,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344929',
		relatedCategories: [
			{
				count: 40,
				name: 'ANIMAL',
			},
			{
				count: 30,
				name: 'MEDICINE_MAT',
			},
			{
				count: 20,
				name: 'ELIXIR',
			},
		],
		name: 'Dragon Scale',
		index: 41,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344927',
		relatedCategories: [
			{
				count: 20,
				name: 'WATER',
			},
		],
		name: 'Well Water',
		index: 42,
		level: 1,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344928',
		relatedCategories: [
			{
				count: 25,
				name: 'WATER',
			},
		],
		name: 'Good Water',
		index: 43,
		level: 8,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492b',
		relatedCategories: [
			{
				count: 25,
				name: 'INGREDIENT',
			},
			{
				count: 15,
				name: 'WATER',
			},
		],
		name: 'Kirchen Milk',
		index: 44,
		level: 10,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c844834492e',
		relatedCategories: [
			{
				count: 30,
				name: 'WATER',
			},
			{
				count: 10,
				name: 'SECRET_POWER',
			},
		],
		name: 'Luminous Water',
		index: 45,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344930',
		relatedCategories: [
			{
				count: 25,
				name: 'GUNPOWDER',
			},
			{
				count: 10,
				name: 'WATER',
			},
			{
				count: 15,
				name: 'POISON_MAT',
			},
		],
		name: 'Nitro Water',
		index: 46,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834492c',
		relatedCategories: [
			{
				count: 15,
				name: 'WATER',
			},
			{
				count: 25,
				name: 'POISON_MAT',
			},
		],
		name: 'Suspicious Liquid',
		index: 47,
		level: 20,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492f',
		relatedCategories: [
			{
				count: 10,
				name: 'WATER',
			},
			{
				count: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Puni Fluid',
		index: 48,
		level: 9,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344932',
		relatedCategories: [
			{
				count: 35,
				name: 'WATER',
			},
			{
				count: 35,
				name: 'SECRET_POWER',
			},
			{
				count: 30,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Rainbow Puni Fluid',
		index: 49,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344933',
		relatedCategories: [
			{
				count: 20,
				name: 'WATER',
			},
			{
				count: 40,
				name: 'ELIXIR',
			},
			{
				count: 40,
				name: 'POISON_MAT',
			},
		],
		name: 'Dragon Bloodstone',
		index: 50,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834493a',
		relatedCategories: [
			{
				count: 20,
				name: 'WATER',
			},
			{
				count: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Holy Water',
		index: 51,
		level: 10,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344936',
		relatedCategories: [
			{
				count: 5,
				name: 'INGREDIENT',
			},
			{
				count: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Puniball',
		index: 52,
		level: 4,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344935',
		relatedCategories: [
			{
				count: 10,
				name: 'INGREDIENT',
			},
			{
				count: 20,
				name: 'SECRET_POWER',
			},
		],
		name: 'Golden Puniball',
		index: 53,
		level: 15,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344934',
		relatedCategories: [
			{
				count: 15,
				name: 'INGREDIENT',
			},
			{
				count: 10,
				name: 'PLANT',
			},
		],
		name: 'Uni',
		index: 54,
		level: 2,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344938',
		relatedCategories: [
			{
				count: 20,
				name: 'INGREDIENT',
			},
			{
				count: 15,
				name: 'PLANT',
			},
			{
				count: 15,
				name: 'GUNPOWDER',
			},
		],
		name: 'Red Uni',
		index: 55,
		level: 9,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344937',
		relatedCategories: [
			{
				count: 15,
				name: 'INGREDIENT',
			},
			{
				count: 10,
				name: 'PLANT',
			},
		],
		name: 'Ramel Wheat',
		index: 56,
		level: 6,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344939',
		relatedCategories: [
			{
				count: 20,
				name: 'INGREDIENT',
			},
			{
				count: 20,
				name: 'GUNPOWDER',
			},
		],
		name: 'Weiss Powder',
		index: 57,
		level: 14,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344947',
		relatedCategories: [
			{
				count: 15,
				name: 'INGREDIENT',
			},
			{
				count: 5,
				name: 'PLANT',
			},
		],
		name: 'Soil Potato',
		index: 58,
		level: 9,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493c',
		relatedCategories: [
			{
				count: 20,
				name: 'INGREDIENT',
			},
			{
				count: 5,
				name: 'METAL',
			},
		],
		name: 'Silver Potato',
		index: 59,
		level: 15,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493f',
		relatedCategories: [
			{
				count: 15,
				name: 'INGREDIENT',
			},
			{
				count: 10,
				name: 'GUNPOWDER',
			},
		],
		name: 'Beehive',
		index: 60,
		level: 9,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493e',
		relatedCategories: [
			{
				count: 25,
				name: 'INGREDIENT',
			},
			{
				count: 15,
				name: 'FUEL',
			},
			{
				count: 20,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Unknown Egg',
		index: 61,
		level: 17,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344942',
		relatedCategories: [
			{
				count: 15,
				name: 'INGREDIENT',
			},
			{
				count: 10,
				name: 'PLANT',
			},
		],
		name: 'Whimsy Strawberry',
		index: 62,
		level: 10,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344940',
		relatedCategories: [
			{
				count: 20,
				name: 'INGREDIENT',
			},
			{
				count: 15,
				name: 'PLANT',
			},
		],
		name: 'Bursting Berry',
		index: 63,
		level: 11,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344970',
		relatedCategories: [
			{
				count: 10,
				name: 'PAPER',
			},
			{
				count: 5,
				name: 'FUEL',
			},
		],
		name: 'Paper Scrap',
		index: 64,
		level: 5,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493d',
		relatedCategories: [
			{
				count: 20,
				name: 'FUEL',
			},
		],
		name: 'Natural Oil',
		index: 65,
		level: 9,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834493b',
		relatedCategories: [
			{
				count: 35,
				name: 'FUEL',
			},
		],
		name: 'Zafloa Oil',
		index: 66,
		level: 13,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344943',
		relatedCategories: [
			{
				count: 15,
				name: 'PAPER',
			},
			{
				count: 10,
				name: 'FUEL',
			},
		],
		name: 'Church Talisman',
		index: 67,
		level: 10,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344946',
		relatedCategories: [
			{
				count: 20,
				name: 'PAPER',
			},
			{
				count: 15,
				name: 'FUEL',
			},
		],
		name: 'High Class Talisman',
		index: 68,
		level: 17,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834496c',
		relatedCategories: [
			{
				count: 25,
				name: 'PAPER',
			},
			{
				count: 20,
				name: 'FUEL',
			},
			{
				count: 5,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Pious Talisman',
		index: 69,
		level: 26,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344945',
		relatedCategories: [
			{
				count: 15,
				name: 'GEM',
			},
			{
				count: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Pretty Shell',
		index: 70,
		level: 5,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494b',
		relatedCategories: [
			{
				count: 20,
				name: 'GEM',
			},
			{
				count: 15,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Pelem Shell',
		index: 71,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344948',
		relatedCategories: [
			{
				count: 25,
				name: 'GEM',
			},
			{
				count: 10,
				name: 'ORE',
			},
		],
		name: 'Blue Steel Stone',
		index: 72,
		level: 26,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344949',
		relatedCategories: [
			{
				count: 30,
				name: 'ELIXIR',
			},
			{
				count: 25,
				name: 'GUNPOWDER',
			},
		],
		name: 'Star Powder',
		index: 73,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834495d',
		relatedCategories: [
			{
				count: 35,
				name: 'ELIXIR',
			},
			{
				count: 30,
				name: 'GUNPOWDER',
			},
		],
		name: 'Sun Powder',
		index: 74,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c844834494a',
		relatedCategories: [
			{
				count: 10,
				name: 'GEM',
			},
			{
				count: 5,
				name: 'ORE',
			},
		],
		name: 'Crystal Shard',
		index: 75,
		level: 11,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494c',
		relatedCategories: [
			{
				count: 15,
				name: 'GEM',
			},
			{
				count: 10,
				name: 'ORE',
			},
			{
				count: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Rainbow Crystal',
		index: 76,
		level: 25,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344951',
		relatedCategories: [
			{
				count: 25,
				name: 'SECRET_POWER',
			},
			{
				count: 10,
				name: 'GEM',
			},
		],
		name: 'Pendeloch',
		index: 77,
		level: 14,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834494e',
		relatedCategories: [
			{
				count: 30,
				name: 'SECRET_POWER',
			},
			{
				count: 25,
				name: 'ELIXIR',
			},
		],
		name: 'Pendegrune',
		index: 78,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344952',
		relatedCategories: [
			{
				count: 15,
				name: 'GEM',
			},
			{
				count: 10,
				name: 'POISON_MAT',
			},
		],
		name: 'Evil Core',
		index: 79,
		level: 22,
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834494f',
		relatedCategories: [
			{
				count: 35,
				name: 'GEM',
			},
			{
				count: 30,
				name: 'SECRET_POWER',
			},
			{
				count: 25,
				name: 'ELIXIR',
			},
		],
		name: 'Dragon Heart',
		index: 80,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494d',
		relatedCategories: [
			{
				count: 50,
				name: 'WOOD',
			},
		],
		name: 'Forgotten Wood',
		index: 81,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344950',
		relatedCategories: [
			{
				count: 50,
				name: 'GEM',
			},
		],
		name: 'Forgotten Gem',
		index: 82,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344955',
		relatedCategories: [
			{
				count: 50,
				name: 'ORE',
			},
		],
		name: 'Forgotten Ore',
		index: 83,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344953',
		relatedCategories: [
			{
				count: 50,
				name: 'METAL',
			},
		],
		name: 'Forgotten Part',
		index: 84,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344954',
		relatedCategories: [
			{
				count: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Useless Fragment',
		index: 85,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344956',
		relatedCategories: [
			{
				count: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Burnt Fragment',
		index: 86,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344958',
		relatedCategories: [
			{
				count: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Stinky Fragment',
		index: 87,
		level: 3,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344957',
		relatedCategories: [
			{
				count: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Pretty Fragment',
		index: 88,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834495b',
		relatedCategories: [
			{
				count: 5,
				name: 'ELIXIR',
			},
			{
				count: 5,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Failure Ash',
		index: 89,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344959',
		relatedCategories: [
			{
				count: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Haze Grass Petal',
		index: 90,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834495a',
		relatedCategories: [
			{
				count: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Eternity Scale',
		index: 91,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344961',
		relatedCategories: [
			{
				count: 20,
				name: 'PAPER',
			},
			{
				count: 15,
				name: 'FUEL',
			},
			{
				count: 10,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Magic Page',
		index: 92,
		level: 18,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344972',
		relatedCategories: [
			{
				count: 20,
				name: 'MAGIC_ITEM',
			},
			{
				count: 10,
				name: 'FUEL',
			},
			{
				count: 10,
				name: 'PAPER',
			},
		],
		name: 'Torn Grimoire',
		index: 93,
		level: 25,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834495e',
		relatedCategories: [
			{
				count: 15,
				name: 'PAPER',
			},
			{
				count: 20,
				name: 'FUEL',
			},
			{
				count: 15,
				name: 'SECRET_POWER',
			},
		],
		name: 'Unknown Knowledge Scrap',
		index: 94,
		level: 21,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344965',
		relatedCategories: [
			{
				count: 15,
				name: 'PAPER',
			},
			{
				count: 15,
				name: 'FUEL',
			},
			{
				count: 20,
				name: 'SECRET_POWER',
			},
		],
		name: 'Sealed Knowledge Scrap',
		index: 95,
		level: 21,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834495c',
		relatedCategories: [
			{
				count: 10,
				name: 'BOMB',
			},
		],
		name: 'Uni Bag',
		index: 142,
		level: 4,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344963',
		relatedCategories: [
			{
				count: 20,
				name: 'BOMB',
			},
		],
		name: 'Bomb',
		index: 143,
		level: 10,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344960',
		relatedCategories: [
			{
				count: 15,
				name: 'BOMB',
			},
		],
		name: 'Ice Bomb',
		index: 144,
		level: 12,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344962',
		relatedCategories: [
			{
				count: 15,
				name: 'BOMB',
			},
		],
		name: 'Lightning Bomb',
		index: 145,
		level: 14,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834495f',
		relatedCategories: [
			{
				count: 15,
				name: 'BOMB',
			},
		],
		name: 'Craft',
		index: 146,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344967',
		relatedCategories: [
			{
				count: 30,
				name: 'BOMB',
			},
		],
		name: 'Ori Bomb',
		index: 147,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344964',
		relatedCategories: [
			{
				count: 25,
				name: 'BOMB',
			},
		],
		name: 'Stahl Ice Bomb',
		index: 148,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344966',
		relatedCategories: [
			{
				count: 25,
				name: 'BOMB',
			},
		],
		name: 'Lightning Crystal',
		index: 149,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344968',
		relatedCategories: [
			{
				count: 20,
				name: 'BOMB',
			},
		],
		name: 'Puni Missile',
		index: 150,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834497d',
		relatedCategories: [
			{
				count: 15,
				name: 'BOMB',
			},
			{
				count: 10,
				name: 'MAGIC_ITEM',
			},
		],
		name: "God's Gift",
		index: 151,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834496d',
		relatedCategories: [
			{
				count: 30,
				name: 'BOMB',
			},
			{
				count: 25,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Flame of Origin',
		index: 152,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834496e',
		relatedCategories: [
			{
				count: 30,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Magician's Flute",
		index: 153,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344969',
		relatedCategories: [],
		name: 'Red Uni Bag',
		index: 154,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496b',
		relatedCategories: [],
		name: 'Blau Bomb',
		index: 155,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496a',
		relatedCategories: [],
		name: 'Vio Ice Bomb',
		index: 156,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344976',
		relatedCategories: [],
		name: 'Blitz Stone',
		index: 157,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344971',
		relatedCategories: [],
		name: 'Craft Bag',
		index: 158,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496f',
		relatedCategories: [],
		name: 'Peta Bomb',
		index: 159,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344974',
		relatedCategories: [],
		name: 'Einsof Ice Bomb',
		index: 160,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344973',
		relatedCategories: [],
		name: 'Blitz Crystal',
		index: 161,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344975',
		relatedCategories: [],
		name: 'Black Puni Missile',
		index: 162,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344977',
		relatedCategories: [
			{
				count: 30,
				name: 'BOMB',
			},
			{
				count: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Heaven's Cleanser",
		index: 163,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344978',
		relatedCategories: [
			{
				count: 40,
				name: 'BOMB',
			},
			{
				count: 30,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Flame of the End',
		index: 164,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497b',
		relatedCategories: [
			{
				count: 35,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Necromancer Flute',
		index: 165,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497f',
		relatedCategories: [
			{
				count: 10,
				name: 'MEDICINE',
			},
		],
		name: 'Berg Medicine',
		index: 216,
		level: 1,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344979',
		relatedCategories: [
			{
				count: 15,
				name: 'MEDICINE',
			},
		],
		name: 'Refuel Bottle',
		index: 217,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497a',
		relatedCategories: [
			{
				count: 15,
				name: 'MEDICINE',
			},
		],
		name: 'Breezy Aroma',
		index: 218,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834497c',
		relatedCategories: [
			{
				count: 20,
				name: 'MEDICINE',
			},
			{
				count: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Nectar of Life',
		index: 219,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344986',
		relatedCategories: [
			{
				count: 25,
				name: 'MEDICINE',
			},
			{
				count: 25,
				name: 'ELIXIR',
			},
		],
		name: 'Mystery Elixir',
		index: 220,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497e',
		relatedCategories: [
			{
				count: 10,
				name: 'FOOD',
			},
			{
				count: 10,
				name: 'SWEETS',
			},
		],
		name: 'Simple Sweets',
		index: 221,
		level: 2,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344980',
		relatedCategories: [
			{
				count: 15,
				name: 'FOOD',
			},
			{
				count: 10,
				name: 'SWEETS',
			},
		],
		name: 'Sotea',
		index: 222,
		level: 3,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344983',
		relatedCategories: [
			{
				count: 15,
				name: 'FOOD',
			},
			{
				count: 15,
				name: 'SWEETS',
			},
			{
				count: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Puni Jelly',
		index: 223,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344981',
		relatedCategories: [
			{
				count: 35,
				name: 'FOOD',
			},
			{
				count: 30,
				name: 'SWEETS',
			},
		],
		name: 'Sofinancier',
		index: 224,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344985',
		relatedCategories: [
			{
				count: 30,
				name: 'FOOD',
			},
			{
				count: 10,
				name: 'SECRET_POWER',
			},
		],
		name: 'Piro Sotea',
		index: 225,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344987',
		relatedCategories: [
			{
				count: 10,
				name: 'FOOD',
			},
			{
				count: 15,
				name: 'SWEETS',
			},
			{
				count: 5,
				name: 'GEM',
			},
		],
		name: 'Alchemy Drops',
		index: 226,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344988',
		relatedCategories: [
			{
				count: 20,
				name: 'FOOD',
			},
		],
		name: 'Plain Waffle',
		index: 227,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344984',
		relatedCategories: [
			{
				count: 20,
				name: 'FOOD',
			},
		],
		name: 'Bagel Sandwich',
		index: 228,
		level: 9,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498b',
		relatedCategories: [],
		name: 'Yellow Ointment',
		index: 229,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498c',
		relatedCategories: [],
		name: 'Relief Drink',
		index: 230,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344982',
		relatedCategories: [],
		name: 'Fairy Breath',
		index: 231,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498a',
		relatedCategories: [],
		name: 'Lifesteal Drops',
		index: 232,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344989',
		relatedCategories: [],
		name: 'Goddess Tear',
		index: 233,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344990',
		relatedCategories: [],
		name: 'Rock Cookie',
		index: 234,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498e',
		relatedCategories: [],
		name: 'Black Sotea',
		index: 235,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498f',
		relatedCategories: [],
		name: 'Rainbow Puni Jelly',
		index: 236,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498d',
		relatedCategories: [],
		name: 'Medicinal Cake',
		index: 237,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344992',
		relatedCategories: [
			{
				count: 25,
				name: 'FOOD',
			},
		],
		name: 'Supreme Hot Milk',
		index: 238,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c8448344996',
		relatedCategories: [
			{
				count: 30,
				name: 'MEDICINE',
			},
		],
		name: 'Honey Syrup',
		index: 239,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c8448344998',
		relatedCategories: [
			{
				count: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Angel's Whisper",
		index: 290,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344991',
		relatedCategories: [
			{
				count: 10,
				name: 'MEDICINE',
			},
		],
		name: 'Warding Incense',
		index: 291,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c8448344993',
		relatedCategories: [
			{
				count: 20,
				name: 'MEDICINE',
			},
		],
		name: 'Bottled Misfortune',
		index: 292,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c8448344997',
		relatedCategories: [
			{
				count: 15,
				name: 'CLOTH',
			},
		],
		name: 'Spirit Weave Cloth',
		index: 293,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c8448344994',
		relatedCategories: [
			{
				count: 25,
				name: 'MEDICINE',
			},
		],
		name: 'Fire Dragon Medicine',
		index: 294,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c844834499a',
		relatedCategories: [
			{
				count: 30,
				name: 'MAGIC_ITEM',
			},
			{
				count: 10,
				name: 'PAPER',
			},
		],
		name: 'Codex of Creation',
		index: 295,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c8448344995',
		relatedCategories: [
			{
				count: 25,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Imp's Mischief",
		index: 296,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c844834499c',
		relatedCategories: [
			{
				count: 25,
				name: 'MEDICINE',
			},
		],
		name: "Hero's Medicine",
		index: 297,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499b',
		relatedCategories: [],
		name: 'Fallen Angel Bell',
		index: 298,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c8448344999',
		relatedCategories: [],
		name: 'Hunger Incense',
		index: 299,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499e',
		relatedCategories: [],
		name: 'Edible Mist',
		index: 300,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499f',
		relatedCategories: [],
		name: 'Mirage Film',
		index: 301,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449aa',
		relatedCategories: [],
		name: 'Leidenpruft',
		index: 302,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449a2',
		relatedCategories: [
			{
				count: 40,
				name: 'MAGIC_ITEM',
			},
			{
				count: 20,
				name: 'PAPER',
			},
		],
		name: 'Sealing Book',
		index: 303,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499d',
		relatedCategories: [],
		name: "Demon's Mischief",
		index: 304,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449a0',
		relatedCategories: [],
		name: 'Berserker Medicine',
		index: 305,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449a5',
		relatedCategories: [
			{
				count: 20,
				name: 'MEDICINE',
			},
		],
		name: 'Wonder Stimulant',
		index: 356,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449a1',
		relatedCategories: [],
		name: 'Restful Tent',
		index: 357,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a4',
		relatedCategories: [
			{
				count: 30,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Fairy Guide',
		index: 358,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ab',
		relatedCategories: [
			{
				count: 25,
				name: 'MAGIC_ITEM',
			},
			{
				count: 15,
				name: 'WOOD',
			},
		],
		name: 'Living Cart',
		index: 359,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449a7',
		relatedCategories: [
			{
				count: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Clear Drops',
		index: 360,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449a9',
		relatedCategories: [
			{
				count: 10,
				name: 'MAGIC_ITEM',
			},
			{
				count: 10,
				name: 'ANIMAL',
			},
		],
		name: 'Mana Feather',
		index: 361,
		level: 11,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449a3',
		relatedCategories: [
			{
				count: 10,
				name: 'CLOTH',
			},
		],
		name: "Traveler's Shoes",
		index: 362,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a6',
		relatedCategories: [
			{
				count: 20,
				name: 'CLOTH',
			},
		],
		name: 'Deluxe Backpack',
		index: 363,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a8',
		relatedCategories: [
			{
				count: 25,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Emergency Bag',
		index: 364,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ad',
		relatedCategories: [
			{
				count: 5,
				name: 'CLOTH',
			},
		],
		name: 'Gathering Gloves',
		index: 365,
		level: 16,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ac',
		relatedCategories: [
			{
				count: 10,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Victor's Charm",
		index: 366,
		level: 12,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b1',
		relatedCategories: [
			{
				count: 15,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Training Charm',
		index: 367,
		level: 17,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449af',
		relatedCategories: [
			{
				count: 20,
				name: 'MAGIC_ITEM',
			},
			{
				count: 15,
				name: 'PAPER',
			},
		],
		name: 'Warding Charm',
		index: 368,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449b0',
		relatedCategories: [
			{
				count: 25,
				name: 'METAL',
			},
		],
		name: 'Heart Pendant',
		index: 369,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ae',
		relatedCategories: [
			{
				count: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer R',
		index: 420,
		level: 2,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449b5',
		relatedCategories: [
			{
				count: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer B',
		index: 421,
		level: 2,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b6',
		relatedCategories: [
			{
				count: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer G',
		index: 422,
		level: 2,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b3',
		relatedCategories: [
			{
				count: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer Y',
		index: 423,
		level: 2,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449b2',
		relatedCategories: [
			{
				count: 50,
				name: 'WATER',
			},
		],
		name: 'Pure Water',
		index: 424,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449bf',
		relatedCategories: [
			{
				count: 30,
				name: 'WATER',
			},
			{
				count: 20,
				name: 'SECRET_POWER',
			},
		],
		name: 'Spirit Tears',
		index: 425,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b4',
		relatedCategories: [
			{
				count: 15,
				name: 'INGREDIENT',
			},
			{
				count: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Apcol',
		index: 426,
		level: 5,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bb',
		relatedCategories: [
			{
				count: 20,
				name: 'INGREDIENT',
			},
			{
				count: 15,
				name: 'GUNPOWDER',
			},
		],
		name: 'Ramel Flour',
		index: 427,
		level: 3,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b8',
		relatedCategories: [
			{
				count: 25,
				name: 'INGREDIENT',
			},
		],
		name: 'Honey',
		index: 428,
		level: 6,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b7',
		relatedCategories: [
			{
				count: 20,
				name: 'INGREDIENT',
			},
			{
				count: 20,
				name: 'GUNPOWDER',
			},
			{
				count: 10,
				name: 'POISON_MAT',
			},
		],
		name: 'Natural Yeast',
		index: 429,
		level: 23,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bd',
		relatedCategories: [
			{
				count: 30,
				name: 'MEDICINE_MAT',
			},
			{
				count: 20,
				name: 'POISON_MAT',
			},
		],
		name: 'Elixir Base',
		index: 430,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bc',
		relatedCategories: [
			{
				count: 40,
				name: 'PAPER',
			},
			{
				count: 20,
				name: 'FUEL',
			},
		],
		name: 'Zettel',
		index: 431,
		level: 5,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ba',
		relatedCategories: [
			{
				count: 35,
				name: 'FUEL',
			},
			{
				count: 10,
				name: 'WATER',
			},
		],
		name: 'Refresh Oil',
		index: 432,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449b9',
		relatedCategories: [
			{
				count: 40,
				name: 'GUNPOWDER',
			},
		],
		name: 'Flame Powder',
		index: 433,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449be',
		relatedCategories: [
			{
				count: 30,
				name: 'METAL',
			},
		],
		name: 'Blitzlite',
		index: 434,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449c0',
		relatedCategories: [
			{
				count: 35,
				name: 'METAL',
			},
			{
				count: 15,
				name: 'SECRET_POWER',
			},
		],
		name: 'Geist Aizen',
		index: 435,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449c2',
		relatedCategories: [
			{
				count: 40,
				name: 'CLAY',
			},
			{
				count: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Alchemic Clay',
		index: 436,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c1',
		relatedCategories: [
			{
				count: 45,
				name: 'THREAD',
			},
			{
				count: 10,
				name: 'METAL',
			},
		],
		name: 'Gold Thread',
		index: 437,
		level: 10,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449c3',
		relatedCategories: [
			{
				count: 30,
				name: 'WOOD',
			},
		],
		name: 'Spruce',
		index: 438,
		level: 9,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c4',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON_MAT',
			},
			{
				count: 10,
				name: 'METAL',
			},
		],
		name: 'Ingot',
		index: 439,
		level: 7,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c5',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON_MAT',
			},
			{
				count: 15,
				name: 'METAL',
			},
		],
		name: 'Stahl Metal',
		index: 440,
		level: 10,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c6',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON_MAT',
			},
			{
				count: 20,
				name: 'METAL',
			},
		],
		name: 'Silvalia',
		index: 441,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c7',
		relatedCategories: [
			{
				count: 35,
				name: 'WEAPON_MAT',
			},
			{
				count: 25,
				name: 'METAL',
			},
		],
		name: 'Rubilium',
		index: 442,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449cc',
		relatedCategories: [
			{
				count: 40,
				name: 'WEAPON_MAT',
			},
			{
				count: 30,
				name: 'METAL',
			},
		],
		name: 'Golt Aizen',
		index: 443,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ca',
		relatedCategories: [
			{
				count: 45,
				name: 'WEAPON_MAT',
			},
			{
				count: 35,
				name: 'METAL',
			},
		],
		name: 'Harmonium',
		index: 444,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c8',
		relatedCategories: [
			{
				count: 20,
				name: 'ARMOR_MAT',
			},
			{
				count: 20,
				name: 'CLOTH',
			},
		],
		name: 'Cloth',
		index: 445,
		level: 8,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cb',
		relatedCategories: [
			{
				count: 25,
				name: 'ARMOR_MAT',
			},
			{
				count: 25,
				name: 'CLOTH',
			},
		],
		name: 'Mofcott',
		index: 446,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ce',
		relatedCategories: [
			{
				count: 30,
				name: 'ARMOR_MAT',
			},
			{
				count: 30,
				name: 'CLOTH',
			},
		],
		name: 'Adal Cloth',
		index: 447,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c9',
		relatedCategories: [
			{
				count: 35,
				name: 'ARMOR_MAT',
			},
			{
				count: 35,
				name: 'CLOTH',
			},
		],
		name: 'Flugel',
		index: 448,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cd',
		relatedCategories: [
			{
				count: 40,
				name: 'ARMOR_MAT',
			},
			{
				count: 40,
				name: 'CLOTH',
			},
		],
		name: 'Fairheit',
		index: 449,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cf',
		relatedCategories: [
			{
				count: 45,
				name: 'ARMOR_MAT',
			},
			{
				count: 45,
				name: 'CLOTH',
			},
		],
		name: 'Velvetis',
		index: 450,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449d8',
		relatedCategories: [
			{
				count: 30,
				name: 'METAL',
			},
			{
				count: 20,
				name: 'GEM',
			},
		],
		name: 'Snowflake Crystal',
		index: 451,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449d0',
		relatedCategories: [
			{
				count: 40,
				name: 'GEM',
			},
		],
		name: 'Noble Sapphire',
		index: 452,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449d3',
		relatedCategories: [
			{
				count: 40,
				name: 'POISON_MAT',
			},
			{
				count: 40,
				name: 'WATER',
			},
			{
				count: 40,
				name: 'FUEL',
			},
			{
				count: 40,
				name: 'ORE',
			},
		],
		name: 'Dusk Drop',
		index: 453,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449d2',
		relatedCategories: [
			{
				count: 25,
				name: 'GEM',
			},
			{
				count: 10,
				name: 'SECRET_POWER',
			},
		],
		name: 'Crystal Ball',
		index: 454,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d1',
		relatedCategories: [
			{
				count: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Compass of Hades',
		index: 455,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449d6',
		relatedCategories: [
			{
				count: 35,
				name: 'ANIMAL',
			},
			{
				count: 35,
				name: 'GUNPOWDER',
			},
			{
				count: 35,
				name: 'ELIXIR',
			},
			{
				count: 35,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Crimson Stone',
		index: 456,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d7',
		relatedCategories: [
			{
				count: 99,
				name: 'METAL',
			},
			{
				count: 99,
				name: 'MEDICINE_MAT',
			},
			{
				count: 99,
				name: 'ELIXIR',
			},
			{
				count: 99,
				name: 'SECRET_POWER',
			},
		],
		name: 'Philosopher Stone',
		index: 457,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f4',
		relatedCategories: [
			{
				count: 40,
				name: 'SECRET_POWER',
			},
			{
				count: 40,
				name: 'FUEL',
			},
			{
				count: 40,
				name: 'MEDICINE_MAT',
			},
			{
				count: 40,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Sun Drop',
		index: 458,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449d5',
		relatedCategories: [
			{
				count: 20,
				name: 'MEDICINE_MAT',
			},
			{
				count: 10,
				name: 'WATER',
			},
			{
				count: 5,
				name: 'METAL',
			},
		],
		name: 'Mineral Extract',
		index: 459,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449e0',
		relatedCategories: [
			{
				count: 20,
				name: 'CLAY',
			},
		],
		name: 'Fertile Soil',
		index: 460,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d4',
		relatedCategories: [
			{
				count: 40,
				name: 'METAL',
			},
		],
		name: 'Precise Parts',
		index: 461,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449da',
		relatedCategories: [
			{
				count: 5,
				name: 'IMPORTANT',
			},
		],
		name: "Grandma's Cauldron",
		index: 509,
		level: 4,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d9',
		relatedCategories: [
			{
				count: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Practice Cauldron',
		index: 510,
		level: 4,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449ec',
		relatedCategories: [
			{
				count: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Tuned Cauldron',
		index: 511,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449db',
		relatedCategories: [
			{
				count: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Expert Cauldron',
		index: 512,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449dc',
		relatedCategories: [
			{
				count: 25,
				name: 'IMPORTANT',
			},
		],
		name: 'Fairy Cauldron',
		index: 513,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449dd',
		relatedCategories: [
			{
				count: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Ancient Cauldron',
		index: 514,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449df',
		relatedCategories: [
			{
				count: 15,
				name: 'IMPORTANT',
			},
		],
		name: "Teacher's Cauldron",
		index: 515,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e3',
		relatedCategories: [
			{
				count: 30,
				name: 'IMPORTANT',
			},
		],
		name: "Hermit's Cauldron",
		index: 516,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e4',
		relatedCategories: [
			{
				count: 45,
				name: 'IMPORTANT',
			},
		],
		name: 'Miraculous Cauldron',
		index: 517,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449de',
		relatedCategories: [],
		name: 'Rein Gem',
		index: 518,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e1',
		relatedCategories: [],
		name: 'Forg Gem',
		index: 519,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e5',
		relatedCategories: [],
		name: 'Vax Gem',
		index: 520,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e2',
		relatedCategories: [],
		name: 'Samil Gem',
		index: 521,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e7',
		relatedCategories: [
			{
				count: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Eye of Mercury',
		index: 522,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e6',
		relatedCategories: [],
		name: 'Alchemy Glass Tool',
		index: 523,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e9',
		relatedCategories: [],
		name: 'Growth Accelerator',
		index: 524,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e8',
		relatedCategories: [],
		name: 'Personal Mixing Rod',
		index: 525,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449eb',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: 'Starting Staff',
		index: 576,
		level: 6,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ea',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Flourish Heart',
		index: 577,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ed',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: 'Wandering Staff',
		index: 578,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449fa',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: 'Prosper Heart',
		index: 579,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449ef',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: 'Eternal Cycle Staff',
		index: 580,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449f6',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: 'Moon Caller',
		index: 581,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ee',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Aura Bangle',
		index: 582,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f7',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: 'Cosmo Caller',
		index: 583,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449f0',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: 'Arch Bangle',
		index: 584,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449f3',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: 'Bright Night',
		index: 585,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449f1',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: 'Formal Rapier',
		index: 586,
		level: 8,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c84483449f8',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Brave Rapier',
		index: 587,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f2',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: "Knight's Rapier",
		index: 588,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449f5',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: "Hero's Rapier",
		index: 589,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a0a',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: "Monika's Estoc",
		index: 590,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449fc',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: 'Earth Shovel',
		index: 591,
		level: 5,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c84483449fb',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Idle Shovel',
		index: 592,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c84483449ff',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: "Heaven's Shovel",
		index: 593,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449f9',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: 'Shovel of Hope',
		index: 594,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c84483449fd',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: 'Bountiful Harvester',
		index: 595,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a00',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: 'Knight Blade',
		index: 596,
		level: 9,
	},
	{
		color: 'RED',
		id: '638a47bc92862c84483449fe',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Breaker',
		index: 597,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a02',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: 'Paladin Blade',
		index: 598,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a01',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: 'Banisher',
		index: 599,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a05',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: 'Evandeit',
		index: 600,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a06',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: 'Demon Slayer',
		index: 601,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a03',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Dark Light',
		index: 602,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a09',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: 'Demon God Slayer',
		index: 603,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a04',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: 'True Dark Light',
		index: 604,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0c',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: 'Light of Dawn',
		index: 605,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a10',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: 'Steel Gauntlet',
		index: 606,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a07',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Roaring Thunder',
		index: 607,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a08',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: 'Puni Gauntlet',
		index: 608,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0e',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: 'Resplendent Frost',
		index: 609,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a19',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: 'Devouring Flame',
		index: 610,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a0b',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: 'Metal Bullets',
		index: 611,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a12',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Piercing Bullets',
		index: 612,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0f',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: 'Crystal Bullets',
		index: 613,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a1a',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: 'Diamant',
		index: 614,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a16',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: 'Wild Cat',
		index: 615,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0d',
		relatedCategories: [
			{
				count: 10,
				name: 'WEAPON',
			},
		],
		name: "Maiden's Spear",
		index: 616,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a14',
		relatedCategories: [
			{
				count: 15,
				name: 'WEAPON',
			},
		],
		name: 'Madcat Spear',
		index: 617,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a11',
		relatedCategories: [
			{
				count: 20,
				name: 'WEAPON',
			},
		],
		name: "Lady's Spear",
		index: 618,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a13',
		relatedCategories: [
			{
				count: 25,
				name: 'WEAPON',
			},
		],
		name: 'White Panther',
		index: 619,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a17',
		relatedCategories: [
			{
				count: 30,
				name: 'WEAPON',
			},
		],
		name: 'Vivid Spear',
		index: 620,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a15',
		relatedCategories: [
			{
				count: 5,
				name: 'ARMOR',
			},
		],
		name: "Traveler's Vest",
		index: 686,
		level: 6,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a18',
		relatedCategories: [
			{
				count: 10,
				name: 'ARMOR',
			},
		],
		name: 'Plate Vest',
		index: 687,
		level: 11,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a1d',
		relatedCategories: [
			{
				count: 15,
				name: 'ARMOR',
			},
		],
		name: 'Gold Jacket',
		index: 688,
		level: 28,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a1b',
		relatedCategories: [
			{
				count: 20,
				name: 'ARMOR',
			},
		],
		name: 'Colorful Vest',
		index: 689,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a20',
		relatedCategories: [
			{
				count: 25,
				name: 'ARMOR',
			},
		],
		name: 'Aegis Jacket',
		index: 690,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a1c',
		relatedCategories: [
			{
				count: 30,
				name: 'ARMOR',
			},
		],
		name: 'Alchemy Vest',
		index: 691,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a1e',
		relatedCategories: [
			{
				count: 5,
				name: 'ARMOR',
			},
		],
		name: 'Hard Coat',
		index: 692,
		level: 8,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a1f',
		relatedCategories: [
			{
				count: 10,
				name: 'ARMOR',
			},
		],
		name: 'Plate Coat',
		index: 693,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a23',
		relatedCategories: [
			{
				count: 15,
				name: 'ARMOR',
			},
		],
		name: 'Farden Coat',
		index: 694,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a29',
		relatedCategories: [
			{
				count: 20,
				name: 'ARMOR',
			},
		],
		name: 'Reactive Coat',
		index: 695,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a26',
		relatedCategories: [
			{
				count: 25,
				name: 'ARMOR',
			},
		],
		name: 'Dragonscale Coat',
		index: 696,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a28',
		relatedCategories: [
			{
				count: 30,
				name: 'ARMOR',
			},
		],
		name: 'Ancient Coat',
		index: 697,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a21',
		relatedCategories: [
			{
				count: 5,
				name: 'ARMOR',
			},
		],
		name: 'First Shirt',
		index: 698,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a22',
		relatedCategories: [
			{
				count: 10,
				name: 'ARMOR',
			},
		],
		name: 'Mixed Fur Shirt',
		index: 699,
		level: 8,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a2b',
		relatedCategories: [
			{
				count: 15,
				name: 'ARMOR',
			},
		],
		name: "Wanderer's Shirt",
		index: 700,
		level: 14,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a27',
		relatedCategories: [
			{
				count: 20,
				name: 'ARMOR',
			},
		],
		name: 'Weightless Shirt',
		index: 701,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a25',
		relatedCategories: [
			{
				count: 25,
				name: 'ARMOR',
			},
		],
		name: 'Natural Clothes',
		index: 702,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a24',
		relatedCategories: [
			{
				count: 30,
				name: 'ARMOR',
			},
		],
		name: 'Full Metal Shirt',
		index: 703,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2a',
		relatedCategories: [
			{
				count: 35,
				name: 'ARMOR',
			},
		],
		name: 'Paraselene Clothes',
		index: 704,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2e',
		relatedCategories: [
			{
				count: 40,
				name: 'ARMOR',
			},
		],
		name: 'Alchemy Mantle',
		index: 705,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a2f',
		relatedCategories: [
			{
				count: 45,
				name: 'ARMOR',
			},
		],
		name: 'Soft Armor',
		index: 706,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a33',
		relatedCategories: [
			{
				count: 45,
				name: 'ARMOR',
			},
		],
		name: 'Tight Shirt',
		index: 707,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2c',
		relatedCategories: [
			{
				count: 50,
				name: 'ARMOR',
			},
		],
		name: 'Bridal Blouse',
		index: 708,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2d',
		relatedCategories: [
			{
				count: 50,
				name: 'ARMOR',
			},
		],
		name: 'Resurrection Wear',
		index: 709,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a34',
		relatedCategories: [
			{
				count: 10,
				name: 'ACCESSORY',
			},
		],
		name: 'Life Bangle',
		index: 760,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a37',
		relatedCategories: [
			{
				count: 10,
				name: 'ACCESSORY',
			},
		],
		name: 'White-Hot Headband',
		index: 761,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a32',
		relatedCategories: [
			{
				count: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Angel Ribbon',
		index: 762,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a38',
		relatedCategories: [
			{
				count: 20,
				name: 'ACCESSORY',
			},
		],
		name: 'Feather Ornament',
		index: 763,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a31',
		relatedCategories: [
			{
				count: 25,
				name: 'ACCESSORY',
			},
		],
		name: 'Spirit Earrings',
		index: 764,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a30',
		relatedCategories: [
			{
				count: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Ambrosia Garland',
		index: 765,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a35',
		relatedCategories: [
			{
				count: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Meister Mittens',
		index: 766,
		level: 13,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a36',
		relatedCategories: [
			{
				count: 20,
				name: 'ACCESSORY',
			},
		],
		name: "Mind's Eye Monocle",
		index: 767,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a3a',
		relatedCategories: [
			{
				count: 25,
				name: 'ACCESSORY',
			},
		],
		name: 'Monochrome Glasses',
		index: 768,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a3b',
		relatedCategories: [
			{
				count: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Chronicle Mark',
		index: 769,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a39',
		relatedCategories: [
			{
				count: 35,
				name: 'ACCESSORY',
			},
		],
		name: 'Time Control Hourglass',
		index: 770,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a3c',
		relatedCategories: [
			{
				count: 20,
				name: 'ACCESSORY',
			},
		],
		name: 'Friendly Persona',
		index: 771,
		level: 16,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a42',
		relatedCategories: [
			{
				count: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Hustle Belt',
		index: 772,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a3e',
		relatedCategories: [
			{
				count: 35,
				name: 'ACCESSORY',
			},
		],
		name: 'Element Guard',
		index: 773,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a3f',
		relatedCategories: [
			{
				count: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Gunade Ring',
		index: 774,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a3d',
		relatedCategories: [
			{
				count: 20,
				name: 'IMPORTANT',
			},
		],
		name: "Plachta's Core",
		index: 825,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a44',
		relatedCategories: [
			{
				count: 20,
				name: 'IMPORTANT',
			},
		],
		name: "Plachta's Clothes",
		index: 826,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a40',
		relatedCategories: [
			{
				count: 10,
				name: 'IMPORTANT',
			},
		],
		name: 'Soul Stone',
		index: 827,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a41',
		relatedCategories: [
			{
				count: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Spirit Needle',
		index: 828,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a46',
		relatedCategories: [
			{
				count: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Key of Truth',
		index: 829,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4a',
		relatedCategories: [
			{
				count: 30,
				name: 'METAL',
			},
			{
				count: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Hexe Auris',
		index: 830,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a47',
		relatedCategories: [
			{
				count: 40,
				name: 'ACCESSORY',
			},
		],
		name: 'Ares Brooch',
		index: 831,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a43',
		relatedCategories: [
			{
				count: 40,
				name: 'IMPORTANT',
			},
		],
		name: 'Plachta Doll',
		index: 832,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a45',
		relatedCategories: [
			{
				count: 40,
				name: 'IMPORTANT',
			},
		],
		name: 'Music Box of Memory',
		index: 833,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a4b',
		relatedCategories: [
			{
				count: 25,
				name: 'THREAD',
			},
		],
		name: 'Puppeteer String',
		index: 834,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a48',
		relatedCategories: [
			{
				count: 30,
				name: 'CLAY',
			},
		],
		name: "Sage's Soil",
		index: 835,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4c',
		relatedCategories: [
			{
				count: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Prototype Fertilizer',
		index: 836,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a49',
		relatedCategories: [
			{
				count: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Date Ticket',
		index: 837,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a50',
		relatedCategories: [
			{
				count: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Moisture Grass',
		index: 838,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a52',
		relatedCategories: [
			{
				count: 50,
				name: 'IMPORTANT',
			},
		],
		name: "Sage's Emblem",
		index: 839,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4f',
		relatedCategories: [
			{
				count: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Atelier Tent',
		index: 840,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4e',
		relatedCategories: [
			{
				count: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Old Certificate',
		index: 841,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a51',
		relatedCategories: [
			{
				count: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Old Clothing',
		index: 842,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4d',
		relatedCategories: [
			{
				count: 25,
				name: 'IMPORTANT',
			},
		],
		name: "Grandma's Clothes",
		index: 843,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a5b',
		relatedCategories: [
			{
				count: 30,
				name: 'MAGIC_ITEM',
			},
			{
				count: 25,
				name: 'WOOD',
			},
			{
				count: 10,
				name: 'FUEL',
			},
		],
		name: 'Living Broom',
		index: 844,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a55',
		relatedCategories: [
			{
				count: 40,
				name: 'CLOTH',
			},
			{
				count: 30,
				name: 'SECRET_POWER',
			},
		],
		name: 'Corneria Doll',
		index: 845,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a54',
		relatedCategories: [
			{
				count: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Gathering Buddy',
		index: 887,
		level: 8,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a53',
		relatedCategories: [
			{
				count: 10,
				name: 'IMPORTANT',
			},
		],
		name: 'Eternal Brilliance',
		index: 888,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a57',
		relatedCategories: [
			{
				count: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Soul Techniques',
		index: 889,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a56',
		relatedCategories: [
			{
				count: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Alchemic Drive Guide',
		index: 890,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a59',
		relatedCategories: [
			{
				count: 25,
				name: 'IMPORTANT',
			},
		],
		name: 'Blessing of the Sun',
		index: 891,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a5a',
		relatedCategories: [
			{
				count: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Recipe of Origin',
		index: 892,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bd92862c8448344a5e',
		relatedCategories: [
			{
				count: 35,
				name: 'IMPORTANT',
			},
		],
		name: "Puppeteer's Tools",
		index: 893,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a58',
		relatedCategories: [
			{
				count: 40,
				name: 'IMPORTANT',
			},
		],
		name: "Alchemist's Book",
		index: 894,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bd92862c8448344a5d',
		relatedCategories: [],
		name: "Canaria's Note",
		index: 895,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bc92862c8448344a5c',
		relatedCategories: [],
		name: 'Epigraph of All Creation',
		index: 896,
		level: null,
	},
];

export default items;
