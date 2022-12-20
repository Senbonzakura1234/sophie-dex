import type { Item } from '@prisma/client';

const items: Item[] = [
	{
		color: 'GREEN',
		id: '638a47b992862c8448344910',
		relatedCategories: [
			{
				grade: 10,
				name: 'PLANT',
			},
			{
				grade: 10,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Magic Grass',
		grade: 0,
		level: 2,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344908',
		relatedCategories: [
			{
				grade: 15,
				name: 'PLANT',
			},
			{
				grade: 5,
				name: 'WATER',
			},
		],
		name: 'Cobalt Grass',
		grade: 1,
		level: 3,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344905',
		relatedCategories: [
			{
				grade: 10,
				name: 'PLANT',
			},
			{
				grade: 10,
				name: 'POISON_MAT',
			},
		],
		name: 'Fairy Poison Grass',
		grade: 2,
		level: 11,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490a',
		relatedCategories: [
			{
				grade: 20,
				name: 'PLANT',
			},
			{
				grade: 10,
				name: 'SECRET_POWER',
			},
			{
				grade: 15,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Mystic Herb',
		grade: 3,
		level: 15,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834490d',
		relatedCategories: [
			{
				grade: 5,
				name: 'PLANT',
			},
			{
				grade: 10,
				name: 'FUEL',
			},
		],
		name: 'Sunset Grass',
		grade: 4,
		level: 2,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344904',
		relatedCategories: [
			{
				grade: 20,
				name: 'PLANT',
			},
			{
				grade: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Five Day Vine',
		grade: 5,
		level: 10,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344909',
		relatedCategories: [
			{
				grade: 20,
				name: 'PLANT',
			},
			{
				grade: 15,
				name: 'THREAD',
			},
			{
				grade: 10,
				name: 'FUEL',
			},
		],
		name: 'Mountain Cotton',
		grade: 6,
		level: 7,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344903',
		relatedCategories: [
			{
				grade: 10,
				name: 'WOOD',
			},
			{
				grade: 5,
				name: 'PLANT',
			},
		],
		name: 'Mossy Driftwood',
		grade: 7,
		level: 13,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344906',
		relatedCategories: [
			{
				grade: 20,
				name: 'WOOD',
			},
			{
				grade: 10,
				name: 'PLANT',
			},
		],
		name: 'Kifa',
		grade: 8,
		level: 10,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344925',
		relatedCategories: [
			{
				grade: 10,
				name: 'PLANT',
			},
			{
				grade: 20,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Altare',
		grade: 9,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834490b',
		relatedCategories: [
			{
				grade: 15,
				name: 'PLANT',
			},
			{
				grade: 25,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Crimson Herb',
		grade: 10,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344907',
		relatedCategories: [
			{
				grade: 30,
				name: 'PLANT',
			},
			{
				grade: 30,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Princess Grass',
		grade: 11,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490c',
		relatedCategories: [
			{
				grade: 40,
				name: 'PLANT',
			},
			{
				grade: 30,
				name: 'ELIXIR',
			},
		],
		name: 'Eternal Blossom',
		grade: 12,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490e',
		relatedCategories: [
			{
				grade: 50,
				name: 'PLANT',
			},
			{
				grade: 50,
				name: 'MEDICINE_MAT',
			},
			{
				grade: 50,
				name: 'ELIXIR',
			},
		],
		name: 'Dunkelheit',
		grade: 13,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344914',
		relatedCategories: [
			{
				grade: 40,
				name: 'PLANT',
			},
			{
				grade: 40,
				name: 'POISON_MAT',
			},
			{
				grade: 40,
				name: 'SECRET_POWER',
			},
		],
		name: 'Dunkelstern',
		grade: 14,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344922',
		relatedCategories: [
			{
				grade: 10,
				name: 'ORE',
			},
		],
		name: 'Aizen Ore',
		grade: 15,
		level: 7,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344911',
		relatedCategories: [
			{
				grade: 10,
				name: 'ORE',
			},
		],
		name: 'Raiden Ore',
		grade: 16,
		level: 9,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834490f',
		relatedCategories: [
			{
				grade: 15,
				name: 'ORE',
			},
		],
		name: 'Kupulf Ore',
		grade: 17,
		level: 9,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344913',
		relatedCategories: [
			{
				grade: 10,
				name: 'ORE',
			},
			{
				grade: 5,
				name: 'GUNPOWDER',
			},
		],
		name: 'Kaen Stone',
		grade: 18,
		level: 5,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344912',
		relatedCategories: [
			{
				grade: 10,
				name: 'ORE',
			},
			{
				grade: 5,
				name: 'GEM',
			},
		],
		name: 'Hakurei Stone',
		grade: 19,
		level: 7,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344915',
		relatedCategories: [
			{
				grade: 20,
				name: 'ORE',
			},
			{
				grade: 10,
				name: 'METAL',
			},
		],
		name: 'Spirit Stone',
		grade: 20,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834491d',
		relatedCategories: [
			{
				grade: 30,
				name: 'ORE',
			},
			{
				grade: 20,
				name: 'POISON_MAT',
			},
			{
				grade: 15,
				name: 'FUEL',
			},
		],
		name: 'Black Orb',
		grade: 21,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344919',
		relatedCategories: [
			{
				grade: 10,
				name: 'CLAY',
			},
			{
				grade: 20,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Fairy Ball',
		grade: 22,
		level: 3,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344916',
		relatedCategories: [
			{
				grade: 15,
				name: 'CLAY',
			},
		],
		name: 'Lakebottom Soil',
		grade: 23,
		level: 9,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344917',
		relatedCategories: [
			{
				grade: 25,
				name: 'CLAY',
			},
		],
		name: 'Seabed Soil',
		grade: 24,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344921',
		relatedCategories: [
			{
				grade: 10,
				name: 'ORE',
			},
			{
				grade: 10,
				name: 'CLAY',
			},
			{
				grade: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Ancient Tablet',
		grade: 25,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834491b',
		relatedCategories: [
			{
				grade: 15,
				name: 'ORE',
			},
			{
				grade: 15,
				name: 'CLAY',
			},
		],
		name: 'Broken Stone',
		grade: 26,
		level: 11,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344918',
		relatedCategories: [
			{
				grade: 25,
				name: 'ORE',
			},
			{
				grade: 5,
				name: 'PLANT',
			},
		],
		name: 'Ancient Pillar',
		grade: 27,
		level: 21,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344920',
		relatedCategories: [
			{
				grade: 25,
				name: 'ORE',
			},
			{
				grade: 20,
				name: 'CLAY',
			},
			{
				grade: 15,
				name: 'METAL',
			},
		],
		name: 'Smoldering Stone',
		grade: 28,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834491a',
		relatedCategories: [
			{
				grade: 15,
				name: 'ORE',
			},
			{
				grade: 20,
				name: 'THREAD',
			},
		],
		name: 'Fardenlite',
		grade: 29,
		level: 25,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492d',
		relatedCategories: [
			{
				grade: 35,
				name: 'ORE',
			},
			{
				grade: 15,
				name: 'GEM',
			},
		],
		name: 'Night Crystal',
		grade: 30,
		level: 29,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834491f',
		relatedCategories: [
			{
				grade: 40,
				name: 'ORE',
			},
			{
				grade: 25,
				name: 'GEM',
			},
		],
		name: 'Shining Ore',
		grade: 31,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834491c',
		relatedCategories: [
			{
				grade: 35,
				name: 'ORE',
			},
			{
				grade: 15,
				name: 'SECRET_POWER',
			},
		],
		name: 'Silver Crystal',
		grade: 32,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344931',
		relatedCategories: [
			{
				grade: 40,
				name: 'ORE',
			},
			{
				grade: 30,
				name: 'GEM',
			},
			{
				grade: 20,
				name: 'ELIXIR',
			},
			{
				grade: 30,
				name: 'SECRET_POWER',
			},
		],
		name: 'Spirit Crystal',
		grade: 33,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834491e',
		relatedCategories: [
			{
				grade: 10,
				name: 'ANIMAL',
			},
			{
				grade: 10,
				name: 'THREAD',
			},
		],
		name: 'Monster Feather',
		grade: 34,
		level: 4,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344941',
		relatedCategories: [
			{
				grade: 15,
				name: 'ANIMAL',
			},
			{
				grade: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Strong Bone',
		grade: 35,
		level: 6,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344923',
		relatedCategories: [
			{
				grade: 15,
				name: 'ANIMAL',
			},
			{
				grade: 10,
				name: 'INGREDIENT',
			},
			{
				grade: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Island Fish Fin',
		grade: 36,
		level: 14,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344924',
		relatedCategories: [
			{
				grade: 20,
				name: 'ANIMAL',
			},
			{
				grade: 10,
				name: 'THREAD',
			},
		],
		name: 'Animal Fur',
		grade: 37,
		level: 8,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344926',
		relatedCategories: [
			{
				grade: 30,
				name: 'ANIMAL',
			},
			{
				grade: 20,
				name: 'THREAD',
			},
		],
		name: 'Dawn Fur',
		grade: 38,
		level: 21,
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834492a',
		relatedCategories: [
			{
				grade: 20,
				name: 'THREAD',
			},
		],
		name: 'Silver Web',
		grade: 39,
		level: 10,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344944',
		relatedCategories: [
			{
				grade: 35,
				name: 'THREAD',
			},
		],
		name: 'Gold Steel Web',
		grade: 40,
		level: 30,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344929',
		relatedCategories: [
			{
				grade: 40,
				name: 'ANIMAL',
			},
			{
				grade: 30,
				name: 'MEDICINE_MAT',
			},
			{
				grade: 20,
				name: 'ELIXIR',
			},
		],
		name: 'Dragon Scale',
		grade: 41,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344927',
		relatedCategories: [
			{
				grade: 20,
				name: 'WATER',
			},
		],
		name: 'Well Water',
		grade: 42,
		level: 1,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344928',
		relatedCategories: [
			{
				grade: 25,
				name: 'WATER',
			},
		],
		name: 'Good Water',
		grade: 43,
		level: 8,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492b',
		relatedCategories: [
			{
				grade: 25,
				name: 'INGREDIENT',
			},
			{
				grade: 15,
				name: 'WATER',
			},
		],
		name: 'Kirchen Milk',
		grade: 44,
		level: 10,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c844834492e',
		relatedCategories: [
			{
				grade: 30,
				name: 'WATER',
			},
			{
				grade: 10,
				name: 'SECRET_POWER',
			},
		],
		name: 'Luminous Water',
		grade: 45,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344930',
		relatedCategories: [
			{
				grade: 25,
				name: 'GUNPOWDER',
			},
			{
				grade: 10,
				name: 'WATER',
			},
			{
				grade: 15,
				name: 'POISON_MAT',
			},
		],
		name: 'Nitro Water',
		grade: 46,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834492c',
		relatedCategories: [
			{
				grade: 15,
				name: 'WATER',
			},
			{
				grade: 25,
				name: 'POISON_MAT',
			},
		],
		name: 'Suspicious Liquid',
		grade: 47,
		level: 20,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492f',
		relatedCategories: [
			{
				grade: 10,
				name: 'WATER',
			},
			{
				grade: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Puni Fluid',
		grade: 48,
		level: 9,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344932',
		relatedCategories: [
			{
				grade: 35,
				name: 'WATER',
			},
			{
				grade: 35,
				name: 'SECRET_POWER',
			},
			{
				grade: 30,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Rainbow Puni Fluid',
		grade: 49,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344933',
		relatedCategories: [
			{
				grade: 20,
				name: 'WATER',
			},
			{
				grade: 40,
				name: 'ELIXIR',
			},
			{
				grade: 40,
				name: 'POISON_MAT',
			},
		],
		name: 'Dragon Bloodstone',
		grade: 50,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834493a',
		relatedCategories: [
			{
				grade: 20,
				name: 'WATER',
			},
			{
				grade: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Holy Water',
		grade: 51,
		level: 10,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344936',
		relatedCategories: [
			{
				grade: 5,
				name: 'INGREDIENT',
			},
			{
				grade: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Puniball',
		grade: 52,
		level: 4,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344935',
		relatedCategories: [
			{
				grade: 10,
				name: 'INGREDIENT',
			},
			{
				grade: 20,
				name: 'SECRET_POWER',
			},
		],
		name: 'Golden Puniball',
		grade: 53,
		level: 15,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344934',
		relatedCategories: [
			{
				grade: 15,
				name: 'INGREDIENT',
			},
			{
				grade: 10,
				name: 'PLANT',
			},
		],
		name: 'Uni',
		grade: 54,
		level: 2,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344938',
		relatedCategories: [
			{
				grade: 20,
				name: 'INGREDIENT',
			},
			{
				grade: 15,
				name: 'PLANT',
			},
			{
				grade: 15,
				name: 'GUNPOWDER',
			},
		],
		name: 'Red Uni',
		grade: 55,
		level: 9,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344937',
		relatedCategories: [
			{
				grade: 15,
				name: 'INGREDIENT',
			},
			{
				grade: 10,
				name: 'PLANT',
			},
		],
		name: 'Ramel Wheat',
		grade: 56,
		level: 6,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344939',
		relatedCategories: [
			{
				grade: 20,
				name: 'INGREDIENT',
			},
			{
				grade: 20,
				name: 'GUNPOWDER',
			},
		],
		name: 'Weiss Powder',
		grade: 57,
		level: 14,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344947',
		relatedCategories: [
			{
				grade: 15,
				name: 'INGREDIENT',
			},
			{
				grade: 5,
				name: 'PLANT',
			},
		],
		name: 'Soil Potato',
		grade: 58,
		level: 9,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493c',
		relatedCategories: [
			{
				grade: 20,
				name: 'INGREDIENT',
			},
			{
				grade: 5,
				name: 'METAL',
			},
		],
		name: 'Silver Potato',
		grade: 59,
		level: 15,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493f',
		relatedCategories: [
			{
				grade: 15,
				name: 'INGREDIENT',
			},
			{
				grade: 10,
				name: 'GUNPOWDER',
			},
		],
		name: 'Beehive',
		grade: 60,
		level: 9,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493e',
		relatedCategories: [
			{
				grade: 25,
				name: 'INGREDIENT',
			},
			{
				grade: 15,
				name: 'FUEL',
			},
			{
				grade: 20,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Unknown Egg',
		grade: 61,
		level: 17,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344942',
		relatedCategories: [
			{
				grade: 15,
				name: 'INGREDIENT',
			},
			{
				grade: 10,
				name: 'PLANT',
			},
		],
		name: 'Whimsy Strawberry',
		grade: 62,
		level: 10,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344940',
		relatedCategories: [
			{
				grade: 20,
				name: 'INGREDIENT',
			},
			{
				grade: 15,
				name: 'PLANT',
			},
		],
		name: 'Bursting Berry',
		grade: 63,
		level: 11,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344970',
		relatedCategories: [
			{
				grade: 10,
				name: 'PAPER',
			},
			{
				grade: 5,
				name: 'FUEL',
			},
		],
		name: 'Paper Scrap',
		grade: 64,
		level: 5,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493d',
		relatedCategories: [
			{
				grade: 20,
				name: 'FUEL',
			},
		],
		name: 'Natural Oil',
		grade: 65,
		level: 9,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834493b',
		relatedCategories: [
			{
				grade: 35,
				name: 'FUEL',
			},
		],
		name: 'Zafloa Oil',
		grade: 66,
		level: 13,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344943',
		relatedCategories: [
			{
				grade: 15,
				name: 'PAPER',
			},
			{
				grade: 10,
				name: 'FUEL',
			},
		],
		name: 'Church Talisman',
		grade: 67,
		level: 10,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344946',
		relatedCategories: [
			{
				grade: 20,
				name: 'PAPER',
			},
			{
				grade: 15,
				name: 'FUEL',
			},
		],
		name: 'High Class Talisman',
		grade: 68,
		level: 17,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834496c',
		relatedCategories: [
			{
				grade: 25,
				name: 'PAPER',
			},
			{
				grade: 20,
				name: 'FUEL',
			},
			{
				grade: 5,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Pious Talisman',
		grade: 69,
		level: 26,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344945',
		relatedCategories: [
			{
				grade: 15,
				name: 'GEM',
			},
			{
				grade: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Pretty Shell',
		grade: 70,
		level: 5,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494b',
		relatedCategories: [
			{
				grade: 20,
				name: 'GEM',
			},
			{
				grade: 15,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Pelem Shell',
		grade: 71,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344948',
		relatedCategories: [
			{
				grade: 25,
				name: 'GEM',
			},
			{
				grade: 10,
				name: 'ORE',
			},
		],
		name: 'Blue Steel Stone',
		grade: 72,
		level: 26,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344949',
		relatedCategories: [
			{
				grade: 30,
				name: 'ELIXIR',
			},
			{
				grade: 25,
				name: 'GUNPOWDER',
			},
		],
		name: 'Star Powder',
		grade: 73,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834495d',
		relatedCategories: [
			{
				grade: 35,
				name: 'ELIXIR',
			},
			{
				grade: 30,
				name: 'GUNPOWDER',
			},
		],
		name: 'Sun Powder',
		grade: 74,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c844834494a',
		relatedCategories: [
			{
				grade: 10,
				name: 'GEM',
			},
			{
				grade: 5,
				name: 'ORE',
			},
		],
		name: 'Crystal Shard',
		grade: 75,
		level: 11,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494c',
		relatedCategories: [
			{
				grade: 15,
				name: 'GEM',
			},
			{
				grade: 10,
				name: 'ORE',
			},
			{
				grade: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Rainbow Crystal',
		grade: 76,
		level: 25,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344951',
		relatedCategories: [
			{
				grade: 25,
				name: 'SECRET_POWER',
			},
			{
				grade: 10,
				name: 'GEM',
			},
		],
		name: 'Pendeloch',
		grade: 77,
		level: 14,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834494e',
		relatedCategories: [
			{
				grade: 30,
				name: 'SECRET_POWER',
			},
			{
				grade: 25,
				name: 'ELIXIR',
			},
		],
		name: 'Pendegrune',
		grade: 78,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344952',
		relatedCategories: [
			{
				grade: 15,
				name: 'GEM',
			},
			{
				grade: 10,
				name: 'POISON_MAT',
			},
		],
		name: 'Evil Core',
		grade: 79,
		level: 22,
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834494f',
		relatedCategories: [
			{
				grade: 35,
				name: 'GEM',
			},
			{
				grade: 30,
				name: 'SECRET_POWER',
			},
			{
				grade: 25,
				name: 'ELIXIR',
			},
		],
		name: 'Dragon Heart',
		grade: 80,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494d',
		relatedCategories: [
			{
				grade: 50,
				name: 'WOOD',
			},
		],
		name: 'Forgotten Wood',
		grade: 81,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344950',
		relatedCategories: [
			{
				grade: 50,
				name: 'GEM',
			},
		],
		name: 'Forgotten Gem',
		grade: 82,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344955',
		relatedCategories: [
			{
				grade: 50,
				name: 'ORE',
			},
		],
		name: 'Forgotten Ore',
		grade: 83,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344953',
		relatedCategories: [
			{
				grade: 50,
				name: 'METAL',
			},
		],
		name: 'Forgotten Part',
		grade: 84,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344954',
		relatedCategories: [
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Useless Fragment',
		grade: 85,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344956',
		relatedCategories: [
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Burnt Fragment',
		grade: 86,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344958',
		relatedCategories: [
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Stinky Fragment',
		grade: 87,
		level: 3,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344957',
		relatedCategories: [
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Pretty Fragment',
		grade: 88,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834495b',
		relatedCategories: [
			{
				grade: 5,
				name: 'ELIXIR',
			},
			{
				grade: 5,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Failure Ash',
		grade: 89,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344959',
		relatedCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Haze Grass Petal',
		grade: 90,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834495a',
		relatedCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Eternity Scale',
		grade: 91,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344961',
		relatedCategories: [
			{
				grade: 20,
				name: 'PAPER',
			},
			{
				grade: 15,
				name: 'FUEL',
			},
			{
				grade: 10,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Magic Page',
		grade: 92,
		level: 18,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344972',
		relatedCategories: [
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
			{
				grade: 10,
				name: 'FUEL',
			},
			{
				grade: 10,
				name: 'PAPER',
			},
		],
		name: 'Torn Grimoire',
		grade: 93,
		level: 25,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834495e',
		relatedCategories: [
			{
				grade: 15,
				name: 'PAPER',
			},
			{
				grade: 20,
				name: 'FUEL',
			},
			{
				grade: 15,
				name: 'SECRET_POWER',
			},
		],
		name: 'Unknown Knowledge Scrap',
		grade: 94,
		level: 21,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344965',
		relatedCategories: [
			{
				grade: 15,
				name: 'PAPER',
			},
			{
				grade: 15,
				name: 'FUEL',
			},
			{
				grade: 20,
				name: 'SECRET_POWER',
			},
		],
		name: 'Sealed Knowledge Scrap',
		grade: 95,
		level: 21,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834495c',
		relatedCategories: [
			{
				grade: 10,
				name: 'BOMB',
			},
		],
		name: 'Uni Bag',
		grade: 142,
		level: 4,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344963',
		relatedCategories: [
			{
				grade: 20,
				name: 'BOMB',
			},
		],
		name: 'Bomb',
		grade: 143,
		level: 10,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344960',
		relatedCategories: [
			{
				grade: 15,
				name: 'BOMB',
			},
		],
		name: 'Ice Bomb',
		grade: 144,
		level: 12,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344962',
		relatedCategories: [
			{
				grade: 15,
				name: 'BOMB',
			},
		],
		name: 'Lightning Bomb',
		grade: 145,
		level: 14,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834495f',
		relatedCategories: [
			{
				grade: 15,
				name: 'BOMB',
			},
		],
		name: 'Craft',
		grade: 146,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344967',
		relatedCategories: [
			{
				grade: 30,
				name: 'BOMB',
			},
		],
		name: 'Ori Bomb',
		grade: 147,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344964',
		relatedCategories: [
			{
				grade: 25,
				name: 'BOMB',
			},
		],
		name: 'Stahl Ice Bomb',
		grade: 148,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344966',
		relatedCategories: [
			{
				grade: 25,
				name: 'BOMB',
			},
		],
		name: 'Lightning Crystal',
		grade: 149,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344968',
		relatedCategories: [
			{
				grade: 20,
				name: 'BOMB',
			},
		],
		name: 'Puni Missile',
		grade: 150,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834497d',
		relatedCategories: [
			{
				grade: 15,
				name: 'BOMB',
			},
			{
				grade: 10,
				name: 'MAGIC_ITEM',
			},
		],
		name: "God's Gift",
		grade: 151,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834496d',
		relatedCategories: [
			{
				grade: 30,
				name: 'BOMB',
			},
			{
				grade: 25,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Flame of Origin',
		grade: 152,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834496e',
		relatedCategories: [
			{
				grade: 30,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Magician's Flute",
		grade: 153,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344969',
		relatedCategories: [],
		name: 'Red Uni Bag',
		grade: 154,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496b',
		relatedCategories: [],
		name: 'Blau Bomb',
		grade: 155,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496a',
		relatedCategories: [],
		name: 'Vio Ice Bomb',
		grade: 156,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344976',
		relatedCategories: [],
		name: 'Blitz Stone',
		grade: 157,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344971',
		relatedCategories: [],
		name: 'Craft Bag',
		grade: 158,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496f',
		relatedCategories: [],
		name: 'Peta Bomb',
		grade: 159,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344974',
		relatedCategories: [],
		name: 'Einsof Ice Bomb',
		grade: 160,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344973',
		relatedCategories: [],
		name: 'Blitz Crystal',
		grade: 161,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344975',
		relatedCategories: [],
		name: 'Black Puni Missile',
		grade: 162,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344977',
		relatedCategories: [
			{
				grade: 30,
				name: 'BOMB',
			},
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Heaven's Cleanser",
		grade: 163,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344978',
		relatedCategories: [
			{
				grade: 40,
				name: 'BOMB',
			},
			{
				grade: 30,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Flame of the End',
		grade: 164,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497b',
		relatedCategories: [
			{
				grade: 35,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Necromancer Flute',
		grade: 165,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497f',
		relatedCategories: [
			{
				grade: 10,
				name: 'MEDICINE',
			},
		],
		name: 'Berg Medicine',
		grade: 216,
		level: 1,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344979',
		relatedCategories: [
			{
				grade: 15,
				name: 'MEDICINE',
			},
		],
		name: 'Refuel Bottle',
		grade: 217,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497a',
		relatedCategories: [
			{
				grade: 15,
				name: 'MEDICINE',
			},
		],
		name: 'Breezy Aroma',
		grade: 218,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834497c',
		relatedCategories: [
			{
				grade: 20,
				name: 'MEDICINE',
			},
			{
				grade: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Nectar of Life',
		grade: 219,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344986',
		relatedCategories: [
			{
				grade: 25,
				name: 'MEDICINE',
			},
			{
				grade: 25,
				name: 'ELIXIR',
			},
		],
		name: 'Mystery Elixir',
		grade: 220,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497e',
		relatedCategories: [
			{
				grade: 10,
				name: 'FOOD',
			},
			{
				grade: 10,
				name: 'SWEETS',
			},
		],
		name: 'Simple Sweets',
		grade: 221,
		level: 2,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344980',
		relatedCategories: [
			{
				grade: 15,
				name: 'FOOD',
			},
			{
				grade: 10,
				name: 'SWEETS',
			},
		],
		name: 'Sotea',
		grade: 222,
		level: 3,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344983',
		relatedCategories: [
			{
				grade: 15,
				name: 'FOOD',
			},
			{
				grade: 15,
				name: 'SWEETS',
			},
			{
				grade: 5,
				name: 'SECRET_POWER',
			},
		],
		name: 'Puni Jelly',
		grade: 223,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344981',
		relatedCategories: [
			{
				grade: 35,
				name: 'FOOD',
			},
			{
				grade: 30,
				name: 'SWEETS',
			},
		],
		name: 'Sofinancier',
		grade: 224,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344985',
		relatedCategories: [
			{
				grade: 30,
				name: 'FOOD',
			},
			{
				grade: 10,
				name: 'SECRET_POWER',
			},
		],
		name: 'Piro Sotea',
		grade: 225,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344987',
		relatedCategories: [
			{
				grade: 10,
				name: 'FOOD',
			},
			{
				grade: 15,
				name: 'SWEETS',
			},
			{
				grade: 5,
				name: 'GEM',
			},
		],
		name: 'Alchemy Drops',
		grade: 226,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344988',
		relatedCategories: [
			{
				grade: 20,
				name: 'FOOD',
			},
		],
		name: 'Plain Waffle',
		grade: 227,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344984',
		relatedCategories: [
			{
				grade: 20,
				name: 'FOOD',
			},
		],
		name: 'Bagel Sandwich',
		grade: 228,
		level: 9,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498b',
		relatedCategories: [],
		name: 'Yellow Ointment',
		grade: 229,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498c',
		relatedCategories: [],
		name: 'Relief Drink',
		grade: 230,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344982',
		relatedCategories: [],
		name: 'Fairy Breath',
		grade: 231,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498a',
		relatedCategories: [],
		name: 'Lifesteal Drops',
		grade: 232,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344989',
		relatedCategories: [],
		name: 'Goddess Tear',
		grade: 233,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344990',
		relatedCategories: [],
		name: 'Rock Cookie',
		grade: 234,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498e',
		relatedCategories: [],
		name: 'Black Sotea',
		grade: 235,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498f',
		relatedCategories: [],
		name: 'Rainbow Puni Jelly',
		grade: 236,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498d',
		relatedCategories: [],
		name: 'Medicinal Cake',
		grade: 237,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344992',
		relatedCategories: [
			{
				grade: 25,
				name: 'FOOD',
			},
		],
		name: 'Supreme Hot Milk',
		grade: 238,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c8448344996',
		relatedCategories: [
			{
				grade: 30,
				name: 'MEDICINE',
			},
		],
		name: 'Honey Syrup',
		grade: 239,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c8448344998',
		relatedCategories: [
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Angel's Whisper",
		grade: 290,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344991',
		relatedCategories: [
			{
				grade: 10,
				name: 'MEDICINE',
			},
		],
		name: 'Warding Incense',
		grade: 291,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c8448344993',
		relatedCategories: [
			{
				grade: 20,
				name: 'MEDICINE',
			},
		],
		name: 'Bottled Misfortune',
		grade: 292,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c8448344997',
		relatedCategories: [
			{
				grade: 15,
				name: 'CLOTH',
			},
		],
		name: 'Spirit Weave Cloth',
		grade: 293,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c8448344994',
		relatedCategories: [
			{
				grade: 25,
				name: 'MEDICINE',
			},
		],
		name: 'Fire Dragon Medicine',
		grade: 294,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c844834499a',
		relatedCategories: [
			{
				grade: 30,
				name: 'MAGIC_ITEM',
			},
			{
				grade: 10,
				name: 'PAPER',
			},
		],
		name: 'Codex of Creation',
		grade: 295,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c8448344995',
		relatedCategories: [
			{
				grade: 25,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Imp's Mischief",
		grade: 296,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c844834499c',
		relatedCategories: [
			{
				grade: 25,
				name: 'MEDICINE',
			},
		],
		name: "Hero's Medicine",
		grade: 297,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499b',
		relatedCategories: [],
		name: 'Fallen Angel Bell',
		grade: 298,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c8448344999',
		relatedCategories: [],
		name: 'Hunger Incense',
		grade: 299,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499e',
		relatedCategories: [],
		name: 'Edible Mist',
		grade: 300,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499f',
		relatedCategories: [],
		name: 'Mirage Film',
		grade: 301,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449aa',
		relatedCategories: [],
		name: 'Leidenpruft',
		grade: 302,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449a2',
		relatedCategories: [
			{
				grade: 40,
				name: 'MAGIC_ITEM',
			},
			{
				grade: 20,
				name: 'PAPER',
			},
		],
		name: 'Sealing Book',
		grade: 303,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499d',
		relatedCategories: [],
		name: "Demon's Mischief",
		grade: 304,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449a0',
		relatedCategories: [],
		name: 'Berserker Medicine',
		grade: 305,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449a5',
		relatedCategories: [
			{
				grade: 20,
				name: 'MEDICINE',
			},
		],
		name: 'Wonder Stimulant',
		grade: 356,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449a1',
		relatedCategories: [],
		name: 'Restful Tent',
		grade: 357,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a4',
		relatedCategories: [
			{
				grade: 30,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Fairy Guide',
		grade: 358,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ab',
		relatedCategories: [
			{
				grade: 25,
				name: 'MAGIC_ITEM',
			},
			{
				grade: 15,
				name: 'WOOD',
			},
		],
		name: 'Living Cart',
		grade: 359,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449a7',
		relatedCategories: [
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Clear Drops',
		grade: 360,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449a9',
		relatedCategories: [
			{
				grade: 10,
				name: 'MAGIC_ITEM',
			},
			{
				grade: 10,
				name: 'ANIMAL',
			},
		],
		name: 'Mana Feather',
		grade: 361,
		level: 11,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449a3',
		relatedCategories: [
			{
				grade: 10,
				name: 'CLOTH',
			},
		],
		name: "Traveler's Shoes",
		grade: 362,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a6',
		relatedCategories: [
			{
				grade: 20,
				name: 'CLOTH',
			},
		],
		name: 'Deluxe Backpack',
		grade: 363,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a8',
		relatedCategories: [
			{
				grade: 25,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Emergency Bag',
		grade: 364,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ad',
		relatedCategories: [
			{
				grade: 5,
				name: 'CLOTH',
			},
		],
		name: 'Gathering Gloves',
		grade: 365,
		level: 16,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ac',
		relatedCategories: [
			{
				grade: 10,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Victor's Charm",
		grade: 366,
		level: 12,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b1',
		relatedCategories: [
			{
				grade: 15,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Training Charm',
		grade: 367,
		level: 17,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449af',
		relatedCategories: [
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
			{
				grade: 15,
				name: 'PAPER',
			},
		],
		name: 'Warding Charm',
		grade: 368,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449b0',
		relatedCategories: [
			{
				grade: 25,
				name: 'METAL',
			},
		],
		name: 'Heart Pendant',
		grade: 369,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ae',
		relatedCategories: [
			{
				grade: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer R',
		grade: 420,
		level: 2,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449b5',
		relatedCategories: [
			{
				grade: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer B',
		grade: 421,
		level: 2,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b6',
		relatedCategories: [
			{
				grade: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer G',
		grade: 422,
		level: 2,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b3',
		relatedCategories: [
			{
				grade: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer Y',
		grade: 423,
		level: 2,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449b2',
		relatedCategories: [
			{
				grade: 50,
				name: 'WATER',
			},
		],
		name: 'Pure Water',
		grade: 424,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449bf',
		relatedCategories: [
			{
				grade: 30,
				name: 'WATER',
			},
			{
				grade: 20,
				name: 'SECRET_POWER',
			},
		],
		name: 'Spirit Tears',
		grade: 425,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b4',
		relatedCategories: [
			{
				grade: 15,
				name: 'INGREDIENT',
			},
			{
				grade: 5,
				name: 'MEDICINE_MAT',
			},
		],
		name: 'Apcol',
		grade: 426,
		level: 5,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bb',
		relatedCategories: [
			{
				grade: 20,
				name: 'INGREDIENT',
			},
			{
				grade: 15,
				name: 'GUNPOWDER',
			},
		],
		name: 'Ramel Flour',
		grade: 427,
		level: 3,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b8',
		relatedCategories: [
			{
				grade: 25,
				name: 'INGREDIENT',
			},
		],
		name: 'Honey',
		grade: 428,
		level: 6,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b7',
		relatedCategories: [
			{
				grade: 20,
				name: 'INGREDIENT',
			},
			{
				grade: 20,
				name: 'GUNPOWDER',
			},
			{
				grade: 10,
				name: 'POISON_MAT',
			},
		],
		name: 'Natural Yeast',
		grade: 429,
		level: 23,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bd',
		relatedCategories: [
			{
				grade: 30,
				name: 'MEDICINE_MAT',
			},
			{
				grade: 20,
				name: 'POISON_MAT',
			},
		],
		name: 'Elixir Base',
		grade: 430,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bc',
		relatedCategories: [
			{
				grade: 40,
				name: 'PAPER',
			},
			{
				grade: 20,
				name: 'FUEL',
			},
		],
		name: 'Zettel',
		grade: 431,
		level: 5,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ba',
		relatedCategories: [
			{
				grade: 35,
				name: 'FUEL',
			},
			{
				grade: 10,
				name: 'WATER',
			},
		],
		name: 'Refresh Oil',
		grade: 432,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449b9',
		relatedCategories: [
			{
				grade: 40,
				name: 'GUNPOWDER',
			},
		],
		name: 'Flame Powder',
		grade: 433,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449be',
		relatedCategories: [
			{
				grade: 30,
				name: 'METAL',
			},
		],
		name: 'Blitzlite',
		grade: 434,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449c0',
		relatedCategories: [
			{
				grade: 35,
				name: 'METAL',
			},
			{
				grade: 15,
				name: 'SECRET_POWER',
			},
		],
		name: 'Geist Aizen',
		grade: 435,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449c2',
		relatedCategories: [
			{
				grade: 40,
				name: 'CLAY',
			},
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Alchemic Clay',
		grade: 436,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c1',
		relatedCategories: [
			{
				grade: 45,
				name: 'THREAD',
			},
			{
				grade: 10,
				name: 'METAL',
			},
		],
		name: 'Gold Thread',
		grade: 437,
		level: 10,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449c3',
		relatedCategories: [
			{
				grade: 30,
				name: 'WOOD',
			},
		],
		name: 'Spruce',
		grade: 438,
		level: 9,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c4',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON_MAT',
			},
			{
				grade: 10,
				name: 'METAL',
			},
		],
		name: 'Ingot',
		grade: 439,
		level: 7,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c5',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON_MAT',
			},
			{
				grade: 15,
				name: 'METAL',
			},
		],
		name: 'Stahl Metal',
		grade: 440,
		level: 10,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c6',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON_MAT',
			},
			{
				grade: 20,
				name: 'METAL',
			},
		],
		name: 'Silvalia',
		grade: 441,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c7',
		relatedCategories: [
			{
				grade: 35,
				name: 'WEAPON_MAT',
			},
			{
				grade: 25,
				name: 'METAL',
			},
		],
		name: 'Rubilium',
		grade: 442,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449cc',
		relatedCategories: [
			{
				grade: 40,
				name: 'WEAPON_MAT',
			},
			{
				grade: 30,
				name: 'METAL',
			},
		],
		name: 'Golt Aizen',
		grade: 443,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ca',
		relatedCategories: [
			{
				grade: 45,
				name: 'WEAPON_MAT',
			},
			{
				grade: 35,
				name: 'METAL',
			},
		],
		name: 'Harmonium',
		grade: 444,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c8',
		relatedCategories: [
			{
				grade: 20,
				name: 'ARMOR_MAT',
			},
			{
				grade: 20,
				name: 'CLOTH',
			},
		],
		name: 'Cloth',
		grade: 445,
		level: 8,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cb',
		relatedCategories: [
			{
				grade: 25,
				name: 'ARMOR_MAT',
			},
			{
				grade: 25,
				name: 'CLOTH',
			},
		],
		name: 'Mofcott',
		grade: 446,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ce',
		relatedCategories: [
			{
				grade: 30,
				name: 'ARMOR_MAT',
			},
			{
				grade: 30,
				name: 'CLOTH',
			},
		],
		name: 'Adal Cloth',
		grade: 447,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c9',
		relatedCategories: [
			{
				grade: 35,
				name: 'ARMOR_MAT',
			},
			{
				grade: 35,
				name: 'CLOTH',
			},
		],
		name: 'Flugel',
		grade: 448,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cd',
		relatedCategories: [
			{
				grade: 40,
				name: 'ARMOR_MAT',
			},
			{
				grade: 40,
				name: 'CLOTH',
			},
		],
		name: 'Fairheit',
		grade: 449,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cf',
		relatedCategories: [
			{
				grade: 45,
				name: 'ARMOR_MAT',
			},
			{
				grade: 45,
				name: 'CLOTH',
			},
		],
		name: 'Velvetis',
		grade: 450,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449d8',
		relatedCategories: [
			{
				grade: 30,
				name: 'METAL',
			},
			{
				grade: 20,
				name: 'GEM',
			},
		],
		name: 'Snowflake Crystal',
		grade: 451,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449d0',
		relatedCategories: [
			{
				grade: 40,
				name: 'GEM',
			},
		],
		name: 'Noble Sapphire',
		grade: 452,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449d3',
		relatedCategories: [
			{
				grade: 40,
				name: 'POISON_MAT',
			},
			{
				grade: 40,
				name: 'WATER',
			},
			{
				grade: 40,
				name: 'FUEL',
			},
			{
				grade: 40,
				name: 'ORE',
			},
		],
		name: 'Dusk Drop',
		grade: 453,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449d2',
		relatedCategories: [
			{
				grade: 25,
				name: 'GEM',
			},
			{
				grade: 10,
				name: 'SECRET_POWER',
			},
		],
		name: 'Crystal Ball',
		grade: 454,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d1',
		relatedCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Compass of Hades',
		grade: 455,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449d6',
		relatedCategories: [
			{
				grade: 35,
				name: 'ANIMAL',
			},
			{
				grade: 35,
				name: 'GUNPOWDER',
			},
			{
				grade: 35,
				name: 'ELIXIR',
			},
			{
				grade: 35,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Crimson Stone',
		grade: 456,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d7',
		relatedCategories: [
			{
				grade: 99,
				name: 'METAL',
			},
			{
				grade: 99,
				name: 'MEDICINE_MAT',
			},
			{
				grade: 99,
				name: 'ELIXIR',
			},
			{
				grade: 99,
				name: 'SECRET_POWER',
			},
		],
		name: 'Philosopher Stone',
		grade: 457,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f4',
		relatedCategories: [
			{
				grade: 40,
				name: 'SECRET_POWER',
			},
			{
				grade: 40,
				name: 'FUEL',
			},
			{
				grade: 40,
				name: 'MEDICINE_MAT',
			},
			{
				grade: 40,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Sun Drop',
		grade: 458,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449d5',
		relatedCategories: [
			{
				grade: 20,
				name: 'MEDICINE_MAT',
			},
			{
				grade: 10,
				name: 'WATER',
			},
			{
				grade: 5,
				name: 'METAL',
			},
		],
		name: 'Mineral Extract',
		grade: 459,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449e0',
		relatedCategories: [
			{
				grade: 20,
				name: 'CLAY',
			},
		],
		name: 'Fertile Soil',
		grade: 460,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d4',
		relatedCategories: [
			{
				grade: 40,
				name: 'METAL',
			},
		],
		name: 'Precise Parts',
		grade: 461,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449da',
		relatedCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: "Grandma's Cauldron",
		grade: 509,
		level: 4,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d9',
		relatedCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Practice Cauldron',
		grade: 510,
		level: 4,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449ec',
		relatedCategories: [
			{
				grade: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Tuned Cauldron',
		grade: 511,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449db',
		relatedCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Expert Cauldron',
		grade: 512,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449dc',
		relatedCategories: [
			{
				grade: 25,
				name: 'IMPORTANT',
			},
		],
		name: 'Fairy Cauldron',
		grade: 513,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449dd',
		relatedCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Ancient Cauldron',
		grade: 514,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449df',
		relatedCategories: [
			{
				grade: 15,
				name: 'IMPORTANT',
			},
		],
		name: "Teacher's Cauldron",
		grade: 515,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e3',
		relatedCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: "Hermit's Cauldron",
		grade: 516,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e4',
		relatedCategories: [
			{
				grade: 45,
				name: 'IMPORTANT',
			},
		],
		name: 'Miraculous Cauldron',
		grade: 517,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449de',
		relatedCategories: [],
		name: 'Rein Gem',
		grade: 518,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e1',
		relatedCategories: [],
		name: 'Forg Gem',
		grade: 519,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e5',
		relatedCategories: [],
		name: 'Vax Gem',
		grade: 520,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e2',
		relatedCategories: [],
		name: 'Samil Gem',
		grade: 521,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e7',
		relatedCategories: [
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Eye of Mercury',
		grade: 522,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e6',
		relatedCategories: [],
		name: 'Alchemy Glass Tool',
		grade: 523,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e9',
		relatedCategories: [],
		name: 'Growth Accelerator',
		grade: 524,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e8',
		relatedCategories: [],
		name: 'Personal Mixing Rod',
		grade: 525,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449eb',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Starting Staff',
		grade: 576,
		level: 6,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ea',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Flourish Heart',
		grade: 577,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ed',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Wandering Staff',
		grade: 578,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449fa',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Prosper Heart',
		grade: 579,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449ef',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Eternal Cycle Staff',
		grade: 580,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449f6',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Moon Caller',
		grade: 581,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ee',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Aura Bangle',
		grade: 582,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f7',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Cosmo Caller',
		grade: 583,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449f0',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Arch Bangle',
		grade: 584,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449f3',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Bright Night',
		grade: 585,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449f1',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Formal Rapier',
		grade: 586,
		level: 8,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c84483449f8',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Brave Rapier',
		grade: 587,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f2',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: "Knight's Rapier",
		grade: 588,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449f5',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: "Hero's Rapier",
		grade: 589,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a0a',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: "Monika's Estoc",
		grade: 590,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449fc',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Earth Shovel',
		grade: 591,
		level: 5,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c84483449fb',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Idle Shovel',
		grade: 592,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c84483449ff',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: "Heaven's Shovel",
		grade: 593,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449f9',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Shovel of Hope',
		grade: 594,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c84483449fd',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Bountiful Harvester',
		grade: 595,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a00',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Knight Blade',
		grade: 596,
		level: 9,
	},
	{
		color: 'RED',
		id: '638a47bc92862c84483449fe',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Breaker',
		grade: 597,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a02',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Paladin Blade',
		grade: 598,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a01',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Banisher',
		grade: 599,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a05',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Evandeit',
		grade: 600,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a06',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Demon Slayer',
		grade: 601,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a03',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Dark Light',
		grade: 602,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a09',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Demon God Slayer',
		grade: 603,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a04',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'True Dark Light',
		grade: 604,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0c',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Light of Dawn',
		grade: 605,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a10',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Steel Gauntlet',
		grade: 606,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a07',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Roaring Thunder',
		grade: 607,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a08',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Puni Gauntlet',
		grade: 608,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0e',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Resplendent Frost',
		grade: 609,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a19',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Devouring Flame',
		grade: 610,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a0b',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Metal Bullets',
		grade: 611,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a12',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Piercing Bullets',
		grade: 612,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0f',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Crystal Bullets',
		grade: 613,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a1a',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Diamant',
		grade: 614,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a16',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Wild Cat',
		grade: 615,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0d',
		relatedCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: "Maiden's Spear",
		grade: 616,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a14',
		relatedCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Madcat Spear',
		grade: 617,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a11',
		relatedCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: "Lady's Spear",
		grade: 618,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a13',
		relatedCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'White Panther',
		grade: 619,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a17',
		relatedCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Vivid Spear',
		grade: 620,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a15',
		relatedCategories: [
			{
				grade: 5,
				name: 'ARMOR',
			},
		],
		name: "Traveler's Vest",
		grade: 686,
		level: 6,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a18',
		relatedCategories: [
			{
				grade: 10,
				name: 'ARMOR',
			},
		],
		name: 'Plate Vest',
		grade: 687,
		level: 11,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a1d',
		relatedCategories: [
			{
				grade: 15,
				name: 'ARMOR',
			},
		],
		name: 'Gold Jacket',
		grade: 688,
		level: 28,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a1b',
		relatedCategories: [
			{
				grade: 20,
				name: 'ARMOR',
			},
		],
		name: 'Colorful Vest',
		grade: 689,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a20',
		relatedCategories: [
			{
				grade: 25,
				name: 'ARMOR',
			},
		],
		name: 'Aegis Jacket',
		grade: 690,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a1c',
		relatedCategories: [
			{
				grade: 30,
				name: 'ARMOR',
			},
		],
		name: 'Alchemy Vest',
		grade: 691,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a1e',
		relatedCategories: [
			{
				grade: 5,
				name: 'ARMOR',
			},
		],
		name: 'Hard Coat',
		grade: 692,
		level: 8,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a1f',
		relatedCategories: [
			{
				grade: 10,
				name: 'ARMOR',
			},
		],
		name: 'Plate Coat',
		grade: 693,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a23',
		relatedCategories: [
			{
				grade: 15,
				name: 'ARMOR',
			},
		],
		name: 'Farden Coat',
		grade: 694,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a29',
		relatedCategories: [
			{
				grade: 20,
				name: 'ARMOR',
			},
		],
		name: 'Reactive Coat',
		grade: 695,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a26',
		relatedCategories: [
			{
				grade: 25,
				name: 'ARMOR',
			},
		],
		name: 'Dragonscale Coat',
		grade: 696,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a28',
		relatedCategories: [
			{
				grade: 30,
				name: 'ARMOR',
			},
		],
		name: 'Ancient Coat',
		grade: 697,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a21',
		relatedCategories: [
			{
				grade: 5,
				name: 'ARMOR',
			},
		],
		name: 'First Shirt',
		grade: 698,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a22',
		relatedCategories: [
			{
				grade: 10,
				name: 'ARMOR',
			},
		],
		name: 'Mixed Fur Shirt',
		grade: 699,
		level: 8,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a2b',
		relatedCategories: [
			{
				grade: 15,
				name: 'ARMOR',
			},
		],
		name: "Wanderer's Shirt",
		grade: 700,
		level: 14,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a27',
		relatedCategories: [
			{
				grade: 20,
				name: 'ARMOR',
			},
		],
		name: 'Weightless Shirt',
		grade: 701,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a25',
		relatedCategories: [
			{
				grade: 25,
				name: 'ARMOR',
			},
		],
		name: 'Natural Clothes',
		grade: 702,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a24',
		relatedCategories: [
			{
				grade: 30,
				name: 'ARMOR',
			},
		],
		name: 'Full Metal Shirt',
		grade: 703,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2a',
		relatedCategories: [
			{
				grade: 35,
				name: 'ARMOR',
			},
		],
		name: 'Paraselene Clothes',
		grade: 704,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2e',
		relatedCategories: [
			{
				grade: 40,
				name: 'ARMOR',
			},
		],
		name: 'Alchemy Mantle',
		grade: 705,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a2f',
		relatedCategories: [
			{
				grade: 45,
				name: 'ARMOR',
			},
		],
		name: 'Soft Armor',
		grade: 706,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a33',
		relatedCategories: [
			{
				grade: 45,
				name: 'ARMOR',
			},
		],
		name: 'Tight Shirt',
		grade: 707,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2c',
		relatedCategories: [
			{
				grade: 50,
				name: 'ARMOR',
			},
		],
		name: 'Bridal Blouse',
		grade: 708,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2d',
		relatedCategories: [
			{
				grade: 50,
				name: 'ARMOR',
			},
		],
		name: 'Resurrection Wear',
		grade: 709,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a34',
		relatedCategories: [
			{
				grade: 10,
				name: 'ACCESSORY',
			},
		],
		name: 'Life Bangle',
		grade: 760,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a37',
		relatedCategories: [
			{
				grade: 10,
				name: 'ACCESSORY',
			},
		],
		name: 'White-Hot Headband',
		grade: 761,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a32',
		relatedCategories: [
			{
				grade: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Angel Ribbon',
		grade: 762,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a38',
		relatedCategories: [
			{
				grade: 20,
				name: 'ACCESSORY',
			},
		],
		name: 'Feather Ornament',
		grade: 763,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a31',
		relatedCategories: [
			{
				grade: 25,
				name: 'ACCESSORY',
			},
		],
		name: 'Spirit Earrings',
		grade: 764,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a30',
		relatedCategories: [
			{
				grade: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Ambrosia Garland',
		grade: 765,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a35',
		relatedCategories: [
			{
				grade: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Meister Mittens',
		grade: 766,
		level: 13,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a36',
		relatedCategories: [
			{
				grade: 20,
				name: 'ACCESSORY',
			},
		],
		name: "Mind's Eye Monocle",
		grade: 767,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a3a',
		relatedCategories: [
			{
				grade: 25,
				name: 'ACCESSORY',
			},
		],
		name: 'Monochrome Glasses',
		grade: 768,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a3b',
		relatedCategories: [
			{
				grade: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Chronicle Mark',
		grade: 769,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a39',
		relatedCategories: [
			{
				grade: 35,
				name: 'ACCESSORY',
			},
		],
		name: 'Time Control Hourglass',
		grade: 770,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a3c',
		relatedCategories: [
			{
				grade: 20,
				name: 'ACCESSORY',
			},
		],
		name: 'Friendly Persona',
		grade: 771,
		level: 16,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a42',
		relatedCategories: [
			{
				grade: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Hustle Belt',
		grade: 772,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a3e',
		relatedCategories: [
			{
				grade: 35,
				name: 'ACCESSORY',
			},
		],
		name: 'Element Guard',
		grade: 773,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a3f',
		relatedCategories: [
			{
				grade: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Gunade Ring',
		grade: 774,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a3d',
		relatedCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: "Plachta's Core",
		grade: 825,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a44',
		relatedCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: "Plachta's Clothes",
		grade: 826,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a40',
		relatedCategories: [
			{
				grade: 10,
				name: 'IMPORTANT',
			},
		],
		name: 'Soul Stone',
		grade: 827,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a41',
		relatedCategories: [
			{
				grade: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Spirit Needle',
		grade: 828,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a46',
		relatedCategories: [
			{
				grade: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Key of Truth',
		grade: 829,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4a',
		relatedCategories: [
			{
				grade: 30,
				name: 'METAL',
			},
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Hexe Auris',
		grade: 830,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a47',
		relatedCategories: [
			{
				grade: 40,
				name: 'ACCESSORY',
			},
		],
		name: 'Ares Brooch',
		grade: 831,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a43',
		relatedCategories: [
			{
				grade: 40,
				name: 'IMPORTANT',
			},
		],
		name: 'Plachta Doll',
		grade: 832,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a45',
		relatedCategories: [
			{
				grade: 40,
				name: 'IMPORTANT',
			},
		],
		name: 'Music Box of Memory',
		grade: 833,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a4b',
		relatedCategories: [
			{
				grade: 25,
				name: 'THREAD',
			},
		],
		name: 'Puppeteer String',
		grade: 834,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a48',
		relatedCategories: [
			{
				grade: 30,
				name: 'CLAY',
			},
		],
		name: "Sage's Soil",
		grade: 835,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4c',
		relatedCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Prototype Fertilizer',
		grade: 836,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a49',
		relatedCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Date Ticket',
		grade: 837,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a50',
		relatedCategories: [
			{
				grade: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Moisture Grass',
		grade: 838,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a52',
		relatedCategories: [
			{
				grade: 50,
				name: 'IMPORTANT',
			},
		],
		name: "Sage's Emblem",
		grade: 839,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4f',
		relatedCategories: [
			{
				grade: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Atelier Tent',
		grade: 840,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4e',
		relatedCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Old Certificate',
		grade: 841,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a51',
		relatedCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Old Clothing',
		grade: 842,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4d',
		relatedCategories: [
			{
				grade: 25,
				name: 'IMPORTANT',
			},
		],
		name: "Grandma's Clothes",
		grade: 843,
		level: null,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a5b',
		relatedCategories: [
			{
				grade: 30,
				name: 'MAGIC_ITEM',
			},
			{
				grade: 25,
				name: 'WOOD',
			},
			{
				grade: 10,
				name: 'FUEL',
			},
		],
		name: 'Living Broom',
		grade: 844,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a55',
		relatedCategories: [
			{
				grade: 40,
				name: 'CLOTH',
			},
			{
				grade: 30,
				name: 'SECRET_POWER',
			},
		],
		name: 'Corneria Doll',
		grade: 845,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a54',
		relatedCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Gathering Buddy',
		grade: 887,
		level: 8,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a53',
		relatedCategories: [
			{
				grade: 10,
				name: 'IMPORTANT',
			},
		],
		name: 'Eternal Brilliance',
		grade: 888,
		level: null,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a57',
		relatedCategories: [
			{
				grade: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Soul Techniques',
		grade: 889,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a56',
		relatedCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Alchemic Drive Guide',
		grade: 890,
		level: null,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a59',
		relatedCategories: [
			{
				grade: 25,
				name: 'IMPORTANT',
			},
		],
		name: 'Blessing of the Sun',
		grade: 891,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a5a',
		relatedCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Recipe of Origin',
		grade: 892,
		level: null,
	},
	{
		color: 'WHITE',
		id: '638a47bd92862c8448344a5e',
		relatedCategories: [
			{
				grade: 35,
				name: 'IMPORTANT',
			},
		],
		name: "Puppeteer's Tools",
		grade: 893,
		level: null,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a58',
		relatedCategories: [
			{
				grade: 40,
				name: 'IMPORTANT',
			},
		],
		name: "Alchemist's Book",
		grade: 894,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bd92862c8448344a5d',
		relatedCategories: [],
		name: "Canaria's Note",
		grade: 895,
		level: null,
	},
	{
		color: 'NONE',
		id: '638a47bc92862c8448344a5c',
		relatedCategories: [],
		name: 'Epigraph of All Creation',
		grade: 896,
		level: null,
	},
];

export default items;
