import type { Item } from '@prisma/client';

const items: Item[] = [
	{
		color: 'GREEN',
		id: '638a47b992862c8448344910',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344908',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344905',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490a',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834490d',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344904',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344909',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344903',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344906',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344925',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47b992862c844834490b',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344907',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490c',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834490e',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344914',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344922',
		itemCategories: [
			{
				grade: 10,
				name: 'ORE',
			},
		],
		name: 'Aizen Ore',
		grade: 15,
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344911',
		itemCategories: [
			{
				grade: 10,
				name: 'ORE',
			},
		],
		name: 'Raiden Ore',
		grade: 16,
	},
	{
		color: 'RED',
		id: '638a47b992862c844834490f',
		itemCategories: [
			{
				grade: 15,
				name: 'ORE',
			},
		],
		name: 'Kupulf Ore',
		grade: 17,
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344913',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344912',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344915',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834491d',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344919',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344916',
		itemCategories: [
			{
				grade: 15,
				name: 'CLAY',
			},
		],
		name: 'Lakebottom Soil',
		grade: 23,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344917',
		itemCategories: [
			{
				grade: 25,
				name: 'CLAY',
			},
		],
		name: 'Seabed Soil',
		grade: 24,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344921',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834491b',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344918',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344920',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47b992862c844834491a',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492d',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834491f',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834491c',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344931',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47b992862c844834491e',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344941',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47b992862c8448344923',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c8448344924',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344926',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47b992862c844834492a',
		itemCategories: [
			{
				grade: 20,
				name: 'THREAD',
			},
		],
		name: 'Silver Web',
		grade: 39,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344944',
		itemCategories: [
			{
				grade: 35,
				name: 'THREAD',
			},
		],
		name: 'Gold Steel Web',
		grade: 40,
	},
	{
		color: 'WHITE',
		id: '638a47b992862c8448344929',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344927',
		itemCategories: [
			{
				grade: 20,
				name: 'WATER',
			},
		],
		name: 'Well Water',
		grade: 42,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c8448344928',
		itemCategories: [
			{
				grade: 25,
				name: 'WATER',
			},
		],
		name: 'Good Water',
		grade: 43,
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492b',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47b992862c844834492e',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47b992862c8448344930',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47b992862c844834492c',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47b992862c844834492f',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344932',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344933',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834493a',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344936',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344935',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344934',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344938',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344937',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344939',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344947',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493c',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493f',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493e',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344942',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344940',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344970',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834493d',
		itemCategories: [
			{
				grade: 20,
				name: 'FUEL',
			},
		],
		name: 'Natural Oil',
		grade: 65,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834493b',
		itemCategories: [
			{
				grade: 35,
				name: 'FUEL',
			},
		],
		name: 'Zafloa Oil',
		grade: 66,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344943',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344946',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834496c',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344945',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494b',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344948',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344949',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834495d',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c844834494a',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494c',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344951',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834494e',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344952',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834494f',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834494d',
		itemCategories: [
			{
				grade: 50,
				name: 'WOOD',
			},
		],
		name: 'Forgotten Wood',
		grade: 81,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344950',
		itemCategories: [
			{
				grade: 50,
				name: 'GEM',
			},
		],
		name: 'Forgotten Gem',
		grade: 82,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344955',
		itemCategories: [
			{
				grade: 50,
				name: 'ORE',
			},
		],
		name: 'Forgotten Ore',
		grade: 83,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344953',
		itemCategories: [
			{
				grade: 50,
				name: 'METAL',
			},
		],
		name: 'Forgotten Part',
		grade: 84,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344954',
		itemCategories: [
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Useless Fragment',
		grade: 85,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344956',
		itemCategories: [
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Burnt Fragment',
		grade: 86,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344958',
		itemCategories: [
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Stinky Fragment',
		grade: 87,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344957',
		itemCategories: [
			{
				grade: 10,
				name: 'ELIXIR',
			},
		],
		name: 'Pretty Fragment',
		grade: 88,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834495b',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344959',
		itemCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Haze Grass Petal',
		grade: 90,
	},
	{
		color: 'RED',
		id: '638a47ba92862c844834495a',
		itemCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Eternity Scale',
		grade: 91,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344961',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344972',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834495e',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344965',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834495c',
		itemCategories: [
			{
				grade: 10,
				name: 'BOMB',
			},
		],
		name: 'Uni Bag',
		grade: 142,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344963',
		itemCategories: [
			{
				grade: 20,
				name: 'BOMB',
			},
		],
		name: 'Bomb',
		grade: 143,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344960',
		itemCategories: [
			{
				grade: 15,
				name: 'BOMB',
			},
		],
		name: 'Ice Bomb',
		grade: 144,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344962',
		itemCategories: [
			{
				grade: 15,
				name: 'BOMB',
			},
		],
		name: 'Lightning Bomb',
		grade: 145,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834495f',
		itemCategories: [
			{
				grade: 15,
				name: 'BOMB',
			},
		],
		name: 'Craft',
		grade: 146,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344967',
		itemCategories: [
			{
				grade: 30,
				name: 'BOMB',
			},
		],
		name: 'Ori Bomb',
		grade: 147,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344964',
		itemCategories: [
			{
				grade: 25,
				name: 'BOMB',
			},
		],
		name: 'Stahl Ice Bomb',
		grade: 148,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344966',
		itemCategories: [
			{
				grade: 25,
				name: 'BOMB',
			},
		],
		name: 'Lightning Crystal',
		grade: 149,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344968',
		itemCategories: [
			{
				grade: 20,
				name: 'BOMB',
			},
		],
		name: 'Puni Missile',
		grade: 150,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c844834497d',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834496d',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834496e',
		itemCategories: [
			{
				grade: 30,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Magician's Flute",
		grade: 153,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344969',
		itemCategories: [],
		name: 'Red Uni Bag',
		grade: 154,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496b',
		itemCategories: [],
		name: 'Blau Bomb',
		grade: 155,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496a',
		itemCategories: [],
		name: 'Vio Ice Bomb',
		grade: 156,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344976',
		itemCategories: [],
		name: 'Blitz Stone',
		grade: 157,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344971',
		itemCategories: [],
		name: 'Craft Bag',
		grade: 158,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496f',
		itemCategories: [],
		name: 'Peta Bomb',
		grade: 159,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344974',
		itemCategories: [],
		name: 'Einsof Ice Bomb',
		grade: 160,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344973',
		itemCategories: [],
		name: 'Blitz Crystal',
		grade: 161,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344975',
		itemCategories: [],
		name: 'Black Puni Missile',
		grade: 162,
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344977',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344978',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497b',
		itemCategories: [
			{
				grade: 35,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Necromancer Flute',
		grade: 165,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497f',
		itemCategories: [
			{
				grade: 10,
				name: 'MEDICINE',
			},
		],
		name: 'Berg Medicine',
		grade: 216,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344979',
		itemCategories: [
			{
				grade: 15,
				name: 'MEDICINE',
			},
		],
		name: 'Refuel Bottle',
		grade: 217,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497a',
		itemCategories: [
			{
				grade: 15,
				name: 'MEDICINE',
			},
		],
		name: 'Breezy Aroma',
		grade: 218,
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c844834497c',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47ba92862c8448344986',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c844834497e',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344980',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344983',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47ba92862c8448344981',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344985',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344987',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344988',
		itemCategories: [
			{
				grade: 20,
				name: 'FOOD',
			},
		],
		name: 'Plain Waffle',
		grade: 227,
	},
	{
		color: 'RED',
		id: '638a47ba92862c8448344984',
		itemCategories: [
			{
				grade: 20,
				name: 'FOOD',
			},
		],
		name: 'Bagel Sandwich',
		grade: 228,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498b',
		itemCategories: [],
		name: 'Yellow Ointment',
		grade: 229,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498c',
		itemCategories: [],
		name: 'Relief Drink',
		grade: 230,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344982',
		itemCategories: [],
		name: 'Fairy Breath',
		grade: 231,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498a',
		itemCategories: [],
		name: 'Lifesteal Drops',
		grade: 232,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344989',
		itemCategories: [],
		name: 'Goddess Tear',
		grade: 233,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344990',
		itemCategories: [],
		name: 'Rock Cookie',
		grade: 234,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498e',
		itemCategories: [],
		name: 'Black Sotea',
		grade: 235,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498f',
		itemCategories: [],
		name: 'Rainbow Puni Jelly',
		grade: 236,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498d',
		itemCategories: [],
		name: 'Medicinal Cake',
		grade: 237,
	},
	{
		color: 'BLUE',
		id: '638a47ba92862c8448344992',
		itemCategories: [
			{
				grade: 25,
				name: 'FOOD',
			},
		],
		name: 'Supreme Hot Milk',
		grade: 238,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c8448344996',
		itemCategories: [
			{
				grade: 30,
				name: 'MEDICINE',
			},
		],
		name: 'Honey Syrup',
		grade: 239,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c8448344998',
		itemCategories: [
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Angel's Whisper",
		grade: 290,
	},
	{
		color: 'GREEN',
		id: '638a47ba92862c8448344991',
		itemCategories: [
			{
				grade: 10,
				name: 'MEDICINE',
			},
		],
		name: 'Warding Incense',
		grade: 291,
	},
	{
		color: 'RED',
		id: '638a47bb92862c8448344993',
		itemCategories: [
			{
				grade: 20,
				name: 'MEDICINE',
			},
		],
		name: 'Bottled Misfortune',
		grade: 292,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c8448344997',
		itemCategories: [
			{
				grade: 15,
				name: 'CLOTH',
			},
		],
		name: 'Spirit Weave Cloth',
		grade: 293,
	},
	{
		color: 'RED',
		id: '638a47bb92862c8448344994',
		itemCategories: [
			{
				grade: 25,
				name: 'MEDICINE',
			},
		],
		name: 'Fire Dragon Medicine',
		grade: 294,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c844834499a',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c8448344995',
		itemCategories: [
			{
				grade: 25,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Imp's Mischief",
		grade: 296,
	},
	{
		color: 'RED',
		id: '638a47bb92862c844834499c',
		itemCategories: [
			{
				grade: 25,
				name: 'MEDICINE',
			},
		],
		name: "Hero's Medicine",
		grade: 297,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499b',
		itemCategories: [],
		name: 'Fallen Angel Bell',
		grade: 298,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c8448344999',
		itemCategories: [],
		name: 'Hunger Incense',
		grade: 299,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499e',
		itemCategories: [],
		name: 'Edible Mist',
		grade: 300,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499f',
		itemCategories: [],
		name: 'Mirage Film',
		grade: 301,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449aa',
		itemCategories: [],
		name: 'Leidenpruft',
		grade: 302,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449a2',
		itemCategories: [
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
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499d',
		itemCategories: [],
		name: "Demon's Mischief",
		grade: 304,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449a0',
		itemCategories: [],
		name: 'Berserker Medicine',
		grade: 305,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449a5',
		itemCategories: [
			{
				grade: 20,
				name: 'MEDICINE',
			},
		],
		name: 'Wonder Stimulant',
		grade: 356,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449a1',
		itemCategories: [],
		name: 'Restful Tent',
		grade: 357,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a4',
		itemCategories: [
			{
				grade: 30,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Fairy Guide',
		grade: 358,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ab',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449a7',
		itemCategories: [
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Clear Drops',
		grade: 360,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449a9',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449a3',
		itemCategories: [
			{
				grade: 10,
				name: 'CLOTH',
			},
		],
		name: "Traveler's Shoes",
		grade: 362,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a6',
		itemCategories: [
			{
				grade: 20,
				name: 'CLOTH',
			},
		],
		name: 'Deluxe Backpack',
		grade: 363,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449a8',
		itemCategories: [
			{
				grade: 25,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Emergency Bag',
		grade: 364,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ad',
		itemCategories: [
			{
				grade: 5,
				name: 'CLOTH',
			},
		],
		name: 'Gathering Gloves',
		grade: 365,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ac',
		itemCategories: [
			{
				grade: 10,
				name: 'MAGIC_ITEM',
			},
		],
		name: "Victor's Charm",
		grade: 366,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b1',
		itemCategories: [
			{
				grade: 15,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Training Charm',
		grade: 367,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449af',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449b0',
		itemCategories: [
			{
				grade: 25,
				name: 'METAL',
			},
		],
		name: 'Heart Pendant',
		grade: 369,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ae',
		itemCategories: [
			{
				grade: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer R',
		grade: 420,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449b5',
		itemCategories: [
			{
				grade: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer B',
		grade: 421,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b6',
		itemCategories: [
			{
				grade: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer G',
		grade: 422,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b3',
		itemCategories: [
			{
				grade: 25,
				name: 'NEUTRALIZER',
			},
		],
		name: 'Neutralizer Y',
		grade: 423,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449b2',
		itemCategories: [
			{
				grade: 50,
				name: 'WATER',
			},
		],
		name: 'Pure Water',
		grade: 424,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449bf',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b4',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bb',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449b8',
		itemCategories: [
			{
				grade: 25,
				name: 'INGREDIENT',
			},
		],
		name: 'Honey',
		grade: 428,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449b7',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bd',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449bc',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ba',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449b9',
		itemCategories: [
			{
				grade: 40,
				name: 'GUNPOWDER',
			},
		],
		name: 'Flame Powder',
		grade: 433,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449be',
		itemCategories: [
			{
				grade: 30,
				name: 'METAL',
			},
		],
		name: 'Blitzlite',
		grade: 434,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449c0',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449c2',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c1',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449c3',
		itemCategories: [
			{
				grade: 30,
				name: 'WOOD',
			},
		],
		name: 'Spruce',
		grade: 438,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c4',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c5',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c6',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449c7',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449cc',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ca',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c8',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cb',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449ce',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449c9',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cd',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449cf',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449d8',
		itemCategories: [
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
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449d0',
		itemCategories: [
			{
				grade: 40,
				name: 'GEM',
			},
		],
		name: 'Noble Sapphire',
		grade: 452,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449d3',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449d2',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d1',
		itemCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Compass of Hades',
		grade: 455,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449d6',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d7',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f4',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449d5',
		itemCategories: [
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
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449e0',
		itemCategories: [
			{
				grade: 20,
				name: 'CLAY',
			},
		],
		name: 'Fertile Soil',
		grade: 460,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d4',
		itemCategories: [
			{
				grade: 40,
				name: 'METAL',
			},
		],
		name: 'Precise Parts',
		grade: 461,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449da',
		itemCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: "Grandma's Cauldron",
		grade: 509,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449d9',
		itemCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Practice Cauldron',
		grade: 510,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449ec',
		itemCategories: [
			{
				grade: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Tuned Cauldron',
		grade: 511,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449db',
		itemCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Expert Cauldron',
		grade: 512,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449dc',
		itemCategories: [
			{
				grade: 25,
				name: 'IMPORTANT',
			},
		],
		name: 'Fairy Cauldron',
		grade: 513,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449dd',
		itemCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Ancient Cauldron',
		grade: 514,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449df',
		itemCategories: [
			{
				grade: 15,
				name: 'IMPORTANT',
			},
		],
		name: "Teacher's Cauldron",
		grade: 515,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e3',
		itemCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: "Hermit's Cauldron",
		grade: 516,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e4',
		itemCategories: [
			{
				grade: 45,
				name: 'IMPORTANT',
			},
		],
		name: 'Miraculous Cauldron',
		grade: 517,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449de',
		itemCategories: [],
		name: 'Rein Gem',
		grade: 518,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e1',
		itemCategories: [],
		name: 'Forg Gem',
		grade: 519,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e5',
		itemCategories: [],
		name: 'Vax Gem',
		grade: 520,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e2',
		itemCategories: [],
		name: 'Samil Gem',
		grade: 521,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449e7',
		itemCategories: [
			{
				grade: 20,
				name: 'MAGIC_ITEM',
			},
		],
		name: 'Eye of Mercury',
		grade: 522,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e6',
		itemCategories: [],
		name: 'Alchemy Glass Tool',
		grade: 523,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e9',
		itemCategories: [],
		name: 'Growth Accelerator',
		grade: 524,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e8',
		itemCategories: [],
		name: 'Personal Mixing Rod',
		grade: 525,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449eb',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Starting Staff',
		grade: 576,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ea',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Flourish Heart',
		grade: 577,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449ed',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Wandering Staff',
		grade: 578,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449fa',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Prosper Heart',
		grade: 579,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449ef',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Eternal Cycle Staff',
		grade: 580,
	},
	{
		color: 'YELLOW',
		id: '638a47bb92862c84483449f6',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Moon Caller',
		grade: 581,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449ee',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Aura Bangle',
		grade: 582,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f7',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Cosmo Caller',
		grade: 583,
	},
	{
		color: 'GREEN',
		id: '638a47bb92862c84483449f0',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Arch Bangle',
		grade: 584,
	},
	{
		color: 'WHITE',
		id: '638a47bb92862c84483449f3',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Bright Night',
		grade: 585,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449f1',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Formal Rapier',
		grade: 586,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c84483449f8',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Brave Rapier',
		grade: 587,
	},
	{
		color: 'RED',
		id: '638a47bb92862c84483449f2',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: "Knight's Rapier",
		grade: 588,
	},
	{
		color: 'BLUE',
		id: '638a47bb92862c84483449f5',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: "Hero's Rapier",
		grade: 589,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a0a',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: "Monika's Estoc",
		grade: 590,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449fc',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Earth Shovel',
		grade: 591,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c84483449fb',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Idle Shovel',
		grade: 592,
	},
	{
		color: 'RED',
		id: '638a47bc92862c84483449ff',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: "Heaven's Shovel",
		grade: 593,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c84483449f9',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Shovel of Hope',
		grade: 594,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c84483449fd',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Bountiful Harvester',
		grade: 595,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a00',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Knight Blade',
		grade: 596,
	},
	{
		color: 'RED',
		id: '638a47bc92862c84483449fe',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Breaker',
		grade: 597,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a02',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Paladin Blade',
		grade: 598,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a01',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Banisher',
		grade: 599,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a05',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Evandeit',
		grade: 600,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a06',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Demon Slayer',
		grade: 601,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a03',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Dark Light',
		grade: 602,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a09',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Demon God Slayer',
		grade: 603,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a04',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'True Dark Light',
		grade: 604,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0c',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Light of Dawn',
		grade: 605,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a10',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Steel Gauntlet',
		grade: 606,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a07',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Roaring Thunder',
		grade: 607,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a08',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Puni Gauntlet',
		grade: 608,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0e',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Resplendent Frost',
		grade: 609,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a19',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Devouring Flame',
		grade: 610,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a0b',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: 'Metal Bullets',
		grade: 611,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a12',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Piercing Bullets',
		grade: 612,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0f',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: 'Crystal Bullets',
		grade: 613,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a1a',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'Diamant',
		grade: 614,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a16',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Wild Cat',
		grade: 615,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a0d',
		itemCategories: [
			{
				grade: 10,
				name: 'WEAPON',
			},
		],
		name: "Maiden's Spear",
		grade: 616,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a14',
		itemCategories: [
			{
				grade: 15,
				name: 'WEAPON',
			},
		],
		name: 'Madcat Spear',
		grade: 617,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a11',
		itemCategories: [
			{
				grade: 20,
				name: 'WEAPON',
			},
		],
		name: "Lady's Spear",
		grade: 618,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a13',
		itemCategories: [
			{
				grade: 25,
				name: 'WEAPON',
			},
		],
		name: 'White Panther',
		grade: 619,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a17',
		itemCategories: [
			{
				grade: 30,
				name: 'WEAPON',
			},
		],
		name: 'Vivid Spear',
		grade: 620,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a15',
		itemCategories: [
			{
				grade: 5,
				name: 'ARMOR',
			},
		],
		name: "Traveler's Vest",
		grade: 686,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a18',
		itemCategories: [
			{
				grade: 10,
				name: 'ARMOR',
			},
		],
		name: 'Plate Vest',
		grade: 687,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a1d',
		itemCategories: [
			{
				grade: 15,
				name: 'ARMOR',
			},
		],
		name: 'Gold Jacket',
		grade: 688,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a1b',
		itemCategories: [
			{
				grade: 20,
				name: 'ARMOR',
			},
		],
		name: 'Colorful Vest',
		grade: 689,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a20',
		itemCategories: [
			{
				grade: 25,
				name: 'ARMOR',
			},
		],
		name: 'Aegis Jacket',
		grade: 690,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a1c',
		itemCategories: [
			{
				grade: 30,
				name: 'ARMOR',
			},
		],
		name: 'Alchemy Vest',
		grade: 691,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a1e',
		itemCategories: [
			{
				grade: 5,
				name: 'ARMOR',
			},
		],
		name: 'Hard Coat',
		grade: 692,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a1f',
		itemCategories: [
			{
				grade: 10,
				name: 'ARMOR',
			},
		],
		name: 'Plate Coat',
		grade: 693,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a23',
		itemCategories: [
			{
				grade: 15,
				name: 'ARMOR',
			},
		],
		name: 'Farden Coat',
		grade: 694,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a29',
		itemCategories: [
			{
				grade: 20,
				name: 'ARMOR',
			},
		],
		name: 'Reactive Coat',
		grade: 695,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a26',
		itemCategories: [
			{
				grade: 25,
				name: 'ARMOR',
			},
		],
		name: 'Dragonscale Coat',
		grade: 696,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a28',
		itemCategories: [
			{
				grade: 30,
				name: 'ARMOR',
			},
		],
		name: 'Ancient Coat',
		grade: 697,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a21',
		itemCategories: [
			{
				grade: 5,
				name: 'ARMOR',
			},
		],
		name: 'First Shirt',
		grade: 698,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a22',
		itemCategories: [
			{
				grade: 10,
				name: 'ARMOR',
			},
		],
		name: 'Mixed Fur Shirt',
		grade: 699,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a2b',
		itemCategories: [
			{
				grade: 15,
				name: 'ARMOR',
			},
		],
		name: "Wanderer's Shirt",
		grade: 700,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a27',
		itemCategories: [
			{
				grade: 20,
				name: 'ARMOR',
			},
		],
		name: 'Weightless Shirt',
		grade: 701,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a25',
		itemCategories: [
			{
				grade: 25,
				name: 'ARMOR',
			},
		],
		name: 'Natural Clothes',
		grade: 702,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a24',
		itemCategories: [
			{
				grade: 30,
				name: 'ARMOR',
			},
		],
		name: 'Full Metal Shirt',
		grade: 703,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2a',
		itemCategories: [
			{
				grade: 35,
				name: 'ARMOR',
			},
		],
		name: 'Paraselene Clothes',
		grade: 704,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2e',
		itemCategories: [
			{
				grade: 40,
				name: 'ARMOR',
			},
		],
		name: 'Alchemy Mantle',
		grade: 705,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a2f',
		itemCategories: [
			{
				grade: 45,
				name: 'ARMOR',
			},
		],
		name: 'Soft Armor',
		grade: 706,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a33',
		itemCategories: [
			{
				grade: 45,
				name: 'ARMOR',
			},
		],
		name: 'Tight Shirt',
		grade: 707,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2c',
		itemCategories: [
			{
				grade: 50,
				name: 'ARMOR',
			},
		],
		name: 'Bridal Blouse',
		grade: 708,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a2d',
		itemCategories: [
			{
				grade: 50,
				name: 'ARMOR',
			},
		],
		name: 'Resurrection Wear',
		grade: 709,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a34',
		itemCategories: [
			{
				grade: 10,
				name: 'ACCESSORY',
			},
		],
		name: 'Life Bangle',
		grade: 760,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a37',
		itemCategories: [
			{
				grade: 10,
				name: 'ACCESSORY',
			},
		],
		name: 'White-Hot Headband',
		grade: 761,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a32',
		itemCategories: [
			{
				grade: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Angel Ribbon',
		grade: 762,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a38',
		itemCategories: [
			{
				grade: 20,
				name: 'ACCESSORY',
			},
		],
		name: 'Feather Ornament',
		grade: 763,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a31',
		itemCategories: [
			{
				grade: 25,
				name: 'ACCESSORY',
			},
		],
		name: 'Spirit Earrings',
		grade: 764,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a30',
		itemCategories: [
			{
				grade: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Ambrosia Garland',
		grade: 765,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a35',
		itemCategories: [
			{
				grade: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Meister Mittens',
		grade: 766,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a36',
		itemCategories: [
			{
				grade: 20,
				name: 'ACCESSORY',
			},
		],
		name: "Mind's Eye Monocle",
		grade: 767,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a3a',
		itemCategories: [
			{
				grade: 25,
				name: 'ACCESSORY',
			},
		],
		name: 'Monochrome Glasses',
		grade: 768,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a3b',
		itemCategories: [
			{
				grade: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Chronicle Mark',
		grade: 769,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a39',
		itemCategories: [
			{
				grade: 35,
				name: 'ACCESSORY',
			},
		],
		name: 'Time Control Hourglass',
		grade: 770,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a3c',
		itemCategories: [
			{
				grade: 20,
				name: 'ACCESSORY',
			},
		],
		name: 'Friendly Persona',
		grade: 771,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a42',
		itemCategories: [
			{
				grade: 15,
				name: 'ACCESSORY',
			},
		],
		name: 'Hustle Belt',
		grade: 772,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a3e',
		itemCategories: [
			{
				grade: 35,
				name: 'ACCESSORY',
			},
		],
		name: 'Element Guard',
		grade: 773,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a3f',
		itemCategories: [
			{
				grade: 30,
				name: 'ACCESSORY',
			},
		],
		name: 'Gunade Ring',
		grade: 774,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a3d',
		itemCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: "Plachta's Core",
		grade: 825,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a44',
		itemCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: "Plachta's Clothes",
		grade: 826,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a40',
		itemCategories: [
			{
				grade: 10,
				name: 'IMPORTANT',
			},
		],
		name: 'Soul Stone',
		grade: 827,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a41',
		itemCategories: [
			{
				grade: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Spirit Needle',
		grade: 828,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a46',
		itemCategories: [
			{
				grade: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Key of Truth',
		grade: 829,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4a',
		itemCategories: [
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
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a47',
		itemCategories: [
			{
				grade: 40,
				name: 'ACCESSORY',
			},
		],
		name: 'Ares Brooch',
		grade: 831,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a43',
		itemCategories: [
			{
				grade: 40,
				name: 'IMPORTANT',
			},
		],
		name: 'Plachta Doll',
		grade: 832,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a45',
		itemCategories: [
			{
				grade: 40,
				name: 'IMPORTANT',
			},
		],
		name: 'Music Box of Memory',
		grade: 833,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a4b',
		itemCategories: [
			{
				grade: 25,
				name: 'THREAD',
			},
		],
		name: 'Puppeteer String',
		grade: 834,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a48',
		itemCategories: [
			{
				grade: 30,
				name: 'CLAY',
			},
		],
		name: "Sage's Soil",
		grade: 835,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4c',
		itemCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Prototype Fertilizer',
		grade: 836,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a49',
		itemCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Date Ticket',
		grade: 837,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a50',
		itemCategories: [
			{
				grade: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Moisture Grass',
		grade: 838,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a52',
		itemCategories: [
			{
				grade: 50,
				name: 'IMPORTANT',
			},
		],
		name: "Sage's Emblem",
		grade: 839,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4f',
		itemCategories: [
			{
				grade: 50,
				name: 'IMPORTANT',
			},
		],
		name: 'Atelier Tent',
		grade: 840,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4e',
		itemCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Old Certificate',
		grade: 841,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a51',
		itemCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Old Clothing',
		grade: 842,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a4d',
		itemCategories: [
			{
				grade: 25,
				name: 'IMPORTANT',
			},
		],
		name: "Grandma's Clothes",
		grade: 843,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a5b',
		itemCategories: [
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
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a55',
		itemCategories: [
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
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a54',
		itemCategories: [
			{
				grade: 5,
				name: 'IMPORTANT',
			},
		],
		name: 'Gathering Buddy',
		grade: 887,
	},
	{
		color: 'GREEN',
		id: '638a47bc92862c8448344a53',
		itemCategories: [
			{
				grade: 10,
				name: 'IMPORTANT',
			},
		],
		name: 'Eternal Brilliance',
		grade: 888,
	},
	{
		color: 'BLUE',
		id: '638a47bc92862c8448344a57',
		itemCategories: [
			{
				grade: 15,
				name: 'IMPORTANT',
			},
		],
		name: 'Soul Techniques',
		grade: 889,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a56',
		itemCategories: [
			{
				grade: 20,
				name: 'IMPORTANT',
			},
		],
		name: 'Alchemic Drive Guide',
		grade: 890,
	},
	{
		color: 'YELLOW',
		id: '638a47bc92862c8448344a59',
		itemCategories: [
			{
				grade: 25,
				name: 'IMPORTANT',
			},
		],
		name: 'Blessing of the Sun',
		grade: 891,
	},
	{
		color: 'WHITE',
		id: '638a47bc92862c8448344a5a',
		itemCategories: [
			{
				grade: 30,
				name: 'IMPORTANT',
			},
		],
		name: 'Recipe of Origin',
		grade: 892,
	},
	{
		color: 'WHITE',
		id: '638a47bd92862c8448344a5e',
		itemCategories: [
			{
				grade: 35,
				name: 'IMPORTANT',
			},
		],
		name: "Puppeteer's Tools",
		grade: 893,
	},
	{
		color: 'RED',
		id: '638a47bc92862c8448344a58',
		itemCategories: [
			{
				grade: 40,
				name: 'IMPORTANT',
			},
		],
		name: "Alchemist's Book",
		grade: 894,
	},
	{
		color: 'NONE',
		id: '638a47bd92862c8448344a5d',
		itemCategories: [],
		name: "Canaria's Note",
		grade: 895,
	},
	{
		color: 'NONE',
		id: '638a47bc92862c8448344a5c',
		itemCategories: [],
		name: 'Epigraph of All Creation',
		grade: 896,
	},
];

export default items;
