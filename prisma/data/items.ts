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
		noId: 0,
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
		noId: 1,
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
		noId: 2,
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
		noId: 3,
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
		noId: 4,
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
		noId: 5,
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
		noId: 6,
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
		noId: 7,
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
		noId: 8,
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
		noId: 9,
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
		noId: 10,
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
		noId: 11,
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
		noId: 12,
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
		noId: 13,
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
		noId: 14,
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
		noId: 15,
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
		noId: 16,
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
		noId: 17,
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
		noId: 18,
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
		noId: 19,
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
		noId: 20,
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
		noId: 21,
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
		noId: 22,
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
		noId: 23,
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
		noId: 24,
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
		noId: 25,
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
		noId: 26,
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
		noId: 27,
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
		noId: 28,
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
		noId: 29,
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
		noId: 30,
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
		noId: 31,
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
		noId: 32,
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
		noId: 33,
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
		noId: 34,
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
		noId: 35,
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
		noId: 36,
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
		noId: 37,
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
		noId: 38,
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
		noId: 39,
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
		noId: 40,
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
		noId: 41,
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
		noId: 42,
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
		noId: 43,
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
		noId: 44,
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
		noId: 45,
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
		noId: 46,
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
		noId: 47,
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
		noId: 48,
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
		noId: 49,
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
		noId: 50,
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
		noId: 51,
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
		noId: 52,
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
		noId: 53,
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
		noId: 54,
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
		noId: 55,
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
		noId: 56,
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
		noId: 57,
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
		noId: 58,
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
		noId: 59,
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
		noId: 60,
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
		noId: 61,
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
		noId: 62,
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
		noId: 63,
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
		noId: 64,
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
		noId: 65,
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
		noId: 66,
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
		noId: 67,
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
		noId: 68,
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
		noId: 69,
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
		noId: 70,
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
		noId: 71,
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
		noId: 72,
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
		noId: 73,
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
		noId: 74,
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
		noId: 75,
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
		noId: 76,
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
		noId: 77,
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
		noId: 78,
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
		noId: 79,
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
		noId: 80,
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
		noId: 81,
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
		noId: 82,
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
		noId: 83,
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
		noId: 84,
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
		noId: 85,
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
		noId: 86,
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
		noId: 87,
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
		noId: 88,
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
		noId: 89,
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
		noId: 90,
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
		noId: 91,
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
		noId: 92,
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
		noId: 93,
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
		noId: 94,
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
		noId: 95,
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
		noId: 142,
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
		noId: 143,
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
		noId: 144,
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
		noId: 145,
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
		noId: 146,
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
		noId: 147,
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
		noId: 148,
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
		noId: 149,
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
		noId: 150,
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
		noId: 151,
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
		noId: 152,
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
		noId: 153,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344969',
		itemCategories: [],
		name: 'Red Uni Bag',
		noId: 154,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496b',
		itemCategories: [],
		name: 'Blau Bomb',
		noId: 155,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496a',
		itemCategories: [],
		name: 'Vio Ice Bomb',
		noId: 156,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344976',
		itemCategories: [],
		name: 'Blitz Stone',
		noId: 157,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344971',
		itemCategories: [],
		name: 'Craft Bag',
		noId: 158,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834496f',
		itemCategories: [],
		name: 'Peta Bomb',
		noId: 159,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344974',
		itemCategories: [],
		name: 'Einsof Ice Bomb',
		noId: 160,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344973',
		itemCategories: [],
		name: 'Blitz Crystal',
		noId: 161,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344975',
		itemCategories: [],
		name: 'Black Puni Missile',
		noId: 162,
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
		noId: 163,
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
		noId: 164,
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
		noId: 165,
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
		noId: 216,
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
		noId: 217,
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
		noId: 218,
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
		noId: 219,
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
		noId: 220,
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
		noId: 221,
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
		noId: 222,
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
		noId: 223,
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
		noId: 224,
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
		noId: 225,
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
		noId: 226,
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
		noId: 227,
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
		noId: 228,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498b',
		itemCategories: [],
		name: 'Yellow Ointment',
		noId: 229,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498c',
		itemCategories: [],
		name: 'Relief Drink',
		noId: 230,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344982',
		itemCategories: [],
		name: 'Fairy Breath',
		noId: 231,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498a',
		itemCategories: [],
		name: 'Lifesteal Drops',
		noId: 232,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344989',
		itemCategories: [],
		name: 'Goddess Tear',
		noId: 233,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c8448344990',
		itemCategories: [],
		name: 'Rock Cookie',
		noId: 234,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498e',
		itemCategories: [],
		name: 'Black Sotea',
		noId: 235,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498f',
		itemCategories: [],
		name: 'Rainbow Puni Jelly',
		noId: 236,
	},
	{
		color: 'NONE',
		id: '638a47ba92862c844834498d',
		itemCategories: [],
		name: 'Medicinal Cake',
		noId: 237,
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
		noId: 238,
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
		noId: 239,
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
		noId: 290,
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
		noId: 291,
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
		noId: 292,
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
		noId: 293,
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
		noId: 294,
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
		noId: 295,
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
		noId: 296,
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
		noId: 297,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499b',
		itemCategories: [],
		name: 'Fallen Angel Bell',
		noId: 298,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c8448344999',
		itemCategories: [],
		name: 'Hunger Incense',
		noId: 299,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499e',
		itemCategories: [],
		name: 'Edible Mist',
		noId: 300,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499f',
		itemCategories: [],
		name: 'Mirage Film',
		noId: 301,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449aa',
		itemCategories: [],
		name: 'Leidenpruft',
		noId: 302,
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
		noId: 303,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c844834499d',
		itemCategories: [],
		name: "Demon's Mischief",
		noId: 304,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449a0',
		itemCategories: [],
		name: 'Berserker Medicine',
		noId: 305,
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
		noId: 356,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449a1',
		itemCategories: [],
		name: 'Restful Tent',
		noId: 357,
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
		noId: 358,
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
		noId: 359,
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
		noId: 360,
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
		noId: 361,
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
		noId: 362,
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
		noId: 363,
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
		noId: 364,
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
		noId: 365,
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
		noId: 366,
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
		noId: 367,
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
		noId: 368,
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
		noId: 369,
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
		noId: 420,
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
		noId: 421,
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
		noId: 422,
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
		noId: 423,
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
		noId: 424,
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
		noId: 425,
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
		noId: 426,
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
		noId: 427,
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
		noId: 428,
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
		noId: 429,
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
		noId: 430,
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
		noId: 431,
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
		noId: 432,
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
		noId: 433,
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
		noId: 434,
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
		noId: 435,
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
		noId: 436,
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
		noId: 437,
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
		noId: 438,
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
		noId: 439,
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
		noId: 440,
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
		noId: 441,
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
		noId: 442,
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
		noId: 443,
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
		noId: 444,
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
		noId: 445,
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
		noId: 446,
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
		noId: 447,
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
		noId: 448,
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
		noId: 449,
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
		noId: 450,
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
		noId: 451,
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
		noId: 452,
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
		noId: 453,
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
		noId: 454,
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
		noId: 455,
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
		noId: 456,
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
		noId: 457,
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
		noId: 458,
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
		noId: 459,
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
		noId: 460,
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
		noId: 461,
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
		noId: 509,
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
		noId: 510,
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
		noId: 511,
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
		noId: 512,
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
		noId: 513,
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
		noId: 514,
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
		noId: 515,
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
		noId: 516,
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
		noId: 517,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449de',
		itemCategories: [],
		name: 'Rein Gem',
		noId: 518,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e1',
		itemCategories: [],
		name: 'Forg Gem',
		noId: 519,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e5',
		itemCategories: [],
		name: 'Vax Gem',
		noId: 520,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e2',
		itemCategories: [],
		name: 'Samil Gem',
		noId: 521,
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
		noId: 522,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e6',
		itemCategories: [],
		name: 'Alchemy Glass Tool',
		noId: 523,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e9',
		itemCategories: [],
		name: 'Growth Accelerator',
		noId: 524,
	},
	{
		color: 'NONE',
		id: '638a47bb92862c84483449e8',
		itemCategories: [],
		name: 'Personal Mixing Rod',
		noId: 525,
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
		noId: 576,
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
		noId: 577,
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
		noId: 578,
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
		noId: 579,
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
		noId: 580,
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
		noId: 581,
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
		noId: 582,
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
		noId: 583,
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
		noId: 584,
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
		noId: 585,
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
		noId: 586,
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
		noId: 587,
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
		noId: 588,
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
		noId: 589,
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
		noId: 590,
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
		noId: 591,
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
		noId: 592,
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
		noId: 593,
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
		noId: 594,
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
		noId: 595,
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
		noId: 596,
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
		noId: 597,
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
		noId: 598,
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
		noId: 599,
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
		noId: 600,
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
		noId: 601,
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
		noId: 602,
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
		noId: 603,
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
		noId: 604,
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
		noId: 605,
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
		noId: 606,
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
		noId: 607,
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
		noId: 608,
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
		noId: 609,
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
		noId: 610,
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
		noId: 611,
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
		noId: 612,
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
		noId: 613,
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
		noId: 614,
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
		noId: 615,
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
		noId: 616,
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
		noId: 617,
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
		noId: 618,
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
		noId: 619,
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
		noId: 620,
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
		noId: 686,
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
		noId: 687,
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
		noId: 688,
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
		noId: 689,
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
		noId: 690,
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
		noId: 691,
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
		noId: 692,
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
		noId: 693,
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
		noId: 694,
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
		noId: 695,
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
		noId: 696,
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
		noId: 697,
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
		noId: 698,
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
		noId: 699,
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
		noId: 700,
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
		noId: 701,
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
		noId: 702,
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
		noId: 703,
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
		noId: 704,
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
		noId: 705,
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
		noId: 706,
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
		noId: 707,
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
		noId: 708,
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
		noId: 709,
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
		noId: 760,
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
		noId: 761,
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
		noId: 762,
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
		noId: 763,
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
		noId: 764,
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
		noId: 765,
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
		noId: 766,
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
		noId: 767,
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
		noId: 768,
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
		noId: 769,
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
		noId: 770,
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
		noId: 771,
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
		noId: 772,
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
		noId: 773,
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
		noId: 774,
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
		noId: 825,
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
		noId: 826,
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
		noId: 827,
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
		noId: 828,
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
		noId: 829,
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
		noId: 830,
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
		noId: 831,
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
		noId: 832,
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
		noId: 833,
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
		noId: 834,
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
		noId: 835,
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
		noId: 836,
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
		noId: 837,
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
		noId: 838,
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
		noId: 839,
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
		noId: 840,
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
		noId: 841,
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
		noId: 842,
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
		noId: 843,
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
		noId: 844,
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
		noId: 845,
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
		noId: 887,
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
		noId: 888,
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
		noId: 889,
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
		noId: 890,
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
		noId: 891,
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
		noId: 892,
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
		noId: 893,
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
		noId: 894,
	},
	{
		color: 'NONE',
		id: '638a47bd92862c8448344a5d',
		itemCategories: [],
		name: "Canaria's Note",
		noId: 895,
	},
	{
		color: 'NONE',
		id: '638a47bc92862c8448344a5c',
		itemCategories: [],
		name: 'Epigraph of All Creation',
		noId: 896,
	},
];

export default items;
