import type { Rumor } from '@prisma/client';

const rumors: Rumor[] = [
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c8448344910","name":"Magic Grass"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d49a44f4fa4b0deca3e","name":"Jumbo Size"}}',
		],
		id: '63bfbf04c3cd1c76194cb83a',
		location: 'Pilgrim Road',
		name: 'Greatly Grown Magic Grass',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c8448344910',
					name: 'Magic Grass',
					table: 'ITEM',
				},
				{
					id: '638a4d49a44f4fa4b0deca3e',
					name: 'Jumbo Size',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 250,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344934","name":"Uni"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d48a44f4fa4b0deca12","name":"Enhance Finisher++"}}',
		],
		id: '63bfbf04c3cd1c76194cb838',
		location: 'Chick Woods',
		name: 'Downpour of Uni',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344934',
					name: 'Uni',
					table: 'ITEM',
				},
				{
					id: '638a4d48a44f4fa4b0deca12',
					name: 'Enhance Finisher++',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 300,
		rumorType: 'MATERIAL',
	},
	{
		description: ['Spawn ', '{"content":"Funny Face"}'],
		id: '63bfbf04c3cd1c76194cb83b',
		location: 'Chick Woods',
		name: 'Funny Ghosts',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Funny Face',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 300,
		rumorType: 'MONSTER',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344937","name":"Ramel Wheat"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d47a44f4fa4b0dec968","name":"Low Price++"}}',
		],
		id: '63bfbf04c3cd1c76194cb839',
		location: 'Merbert Farm',
		name: 'Care to Taste Some Wheat?',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344937',
					name: 'Ramel Wheat',
					table: 'ITEM',
				},
				{
					id: '638a4d47a44f4fa4b0dec968',
					name: 'Low Price++',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 300,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344940","name":"Bursting Berry"}}',
		],
		id: '63bfbf04c3cd1c76194cb83c',
		location: 'Open Ruins',
		name: 'Fruit that Gives Strength',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344940',
					name: 'Bursting Berry',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 300,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c8448344917","name":"Seabed Soil"}}',
		],
		id: '63bfbf04c3cd1c76194cb83e',
		location: "Prospector's Strand - Shore of Treasures",
		name: 'Remnant of a Past Sea?',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c8448344917',
					name: 'Seabed Soil',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 300,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c844834493e","name":"Unknown Egg"}}',
		],
		id: '63bfbf04c3cd1c76194cb841',
		location: 'Green Ruins',
		name: 'Strange Miniature Eggs',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c844834493e',
					name: 'Unknown Egg',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 300,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c8448344906","name":"Kifa"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d48a44f4fa4b0dec9fa","name":"Inflict Curse"}}',
		],
		id: '63bfbf04c3cd1c76194cb840',
		location: 'Gathering of Beasts',
		name: 'Cursed Ancient Trees',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c8448344906',
					name: 'Kifa',
					table: 'ITEM',
				},
				{
					id: '638a4d48a44f4fa4b0dec9fa',
					name: 'Inflict Curse',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 300,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c844834493b","name":"Zafloa Oil"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d49a44f4fa4b0deca7b","name":"Secret of Health"}}',
		],
		id: '63bfbf04c3cd1c76194cb842',
		location: 'Fallen Palace - Inverse Entrance, Upside Down Corridor, Opposite Living Room',
		name: 'Vividly Colored Oil',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c844834493b',
					name: 'Zafloa Oil',
					table: 'ITEM',
				},
				{
					id: '638a4d49a44f4fa4b0deca7b',
					name: 'Secret of Health',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 300,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344942","name":"Whimsy Strawberry"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d47a44f4fa4b0dec999","name":"Stable Effect++"}}',
		],
		id: '63bfbf04c3cd1c76194cb843',
		location: 'Flower Garden',
		name: 'Not So Whimsy Strawberries?',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344942',
					name: 'Whimsy Strawberry',
					table: 'ITEM',
				},
				{
					id: '638a4d47a44f4fa4b0dec999',
					name: 'Stable Effect++',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 350,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c8448344905","name":"Fairy Poison Grass"}}',
		],
		id: '63bfbf04c3cd1c76194cb83f',
		location: 'Puzzling Path',
		name: 'Thin Line Between Poison and Medicine',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c8448344905',
					name: 'Fairy Poison Grass',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 350,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c8448344903","name":"Mossy Driftwood"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d48a44f4fa4b0dec9f4","name":"Inflict Sleep"}}',
		],
		id: '63bfbf04c3cd1c76194cb83d',
		location: 'Three Bridge Springs',
		name: 'Moss with Sleep Compounds',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c8448344903',
					name: 'Mossy Driftwood',
					table: 'ITEM',
				},
				{
					id: '638a4d48a44f4fa4b0dec9f4',
					name: 'Inflict Sleep',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 350,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c8448344912","name":"Hakurei Stone"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d49a44f4fa4b0deca3e","name":"Jumbo Size"}}',
		],
		id: '63bfbf04c3cd1c76194cb846',
		location: 'Verdant Hill - Icy Cave',
		name: 'Enormous Hakurei Stones',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c8448344912',
					name: 'Hakurei Stone',
					table: 'ITEM',
				},
				{
					id: '638a4d49a44f4fa4b0deca3e',
					name: 'Jumbo Size',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 400,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c844834490a","name":"Mystic Herb"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d47a44f4fa4b0dec991","name":"Critical++"}}',
		],
		id: '63bfbf04c3cd1c76194cb844',
		location: 'Rocky Grove',
		name: 'Herb Effective for Medicine',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c844834490a',
					name: 'Mystic Herb',
					table: 'ITEM',
				},
				{
					id: '638a4d47a44f4fa4b0dec991',
					name: 'Critical++',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 400,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Spawn ',
			'{"content":"Gold Puni"}',
			', ',
			'{"content":"Black Puni"}',
			', ',
			'{"content":"Punipuni?"}',
			' and ',
			'{"content":"Super Puni"}',
		],
		id: '63bfbf04c3cd1c76194cb849',
		location: 'Pilgrim Road',
		name: 'Huge Puni Outbreak!?',
		newDescription: {
			contentText:
				'Spawn @{highlightTextMap-0}, @{highlightTextMap-1}, @{highlightTextMap-2} and @{highlightTextMap-3}',
			highlightTextMap: [
				{
					content: 'Gold Puni',
				},
				{
					content: 'Black Puni',
				},
				{
					content: 'Punipuni?',
				},
				{
					content: 'Super Puni',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 400,
		rumorType: 'MONSTER',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c844834494b","name":"Pelem Shell"}}',
		],
		id: '63bfbf04c3cd1c76194cb847',
		location: 'Underground Lake',
		name: 'Chalk White Shell',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c844834494b',
					name: 'Pelem Shell',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 450,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c8448344928","name":"Good Water"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d47a44f4fa4b0dec972","name":"Quality Up++"}}',
		],
		id: '63bfbf04c3cd1c76194cb84a',
		location: 'Small Islet',
		name: 'Pure and Clear Spring Water',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c8448344928',
					name: 'Good Water',
					table: 'ITEM',
				},
				{
					id: '638a4d47a44f4fa4b0dec972',
					name: 'Quality Up++',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 450,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c8448344909","name":"Mountain Cotton"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d48a44f4fa4b0deca0b","name":"Dragon Slayer"}}',
		],
		id: '63bfbf04c3cd1c76194cb845',
		location: 'Verdant Hill',
		name: 'Cotton Disliked by Dragons',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c8448344909',
					name: 'Mountain Cotton',
					table: 'ITEM',
				},
				{
					id: '638a4d48a44f4fa4b0deca0b',
					name: 'Dragon Slayer',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 450,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344939","name":"Weiss Powder"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d49a44f4fa4b0deca73","name":"Super Fine"}}',
		],
		id: '63bfbf04c3cd1c76194cb84c',
		location: 'Sealed Temple',
		name: 'Stash of High Grade Flour?',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344939',
					name: 'Weiss Powder',
					table: 'ITEM',
				},
				{
					id: '638a4d49a44f4fa4b0deca73',
					name: 'Super Fine',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 450,
		rumorType: 'MATERIAL',
	},
	{
		description: ['Spawn ', '{"content":"Lich Order"}'],
		id: '63bfbf04c3cd1c76194cb848',
		location: 'Forgotten Nursery - Ancient Kitchen',
		name: 'Book that Steals Souls',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Lich Order',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 500,
		rumorType: 'MONSTER',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344945","name":"Pretty Shell"}}',
			' with ',
			'{"table":"TRAIT","meta":{"type":"RECORD","id":"638a4d47a44f4fa4b0dec966","name":"High Price++"}}',
		],
		id: '63bfbf04c3cd1c76194cb84b',
		location: 'Calm Banks',
		name: 'Shell Like Gemstone',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0} with @{linkRecordMap-1}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344945',
					name: 'Pretty Shell',
					table: 'ITEM',
				},
				{
					id: '638a4d47a44f4fa4b0dec966',
					name: 'High Price++',
					table: 'TRAIT',
				},
			],
			linkSearchMap: [],
		},
		price: 500,
		rumorType: 'MATERIAL',
	},
	{
		description: ['Spawn ', '{"content":"Sorcerer Titus"}'],
		id: '63bfbf04c3cd1c76194cb84d',
		location: 'Moon Sun Moor - Silent Bedroom',
		name: 'Fallen Sorcerer',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Sorcerer Titus',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 550,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Dragonaire"}'],
		id: '63bfbf04c3cd1c76194cb857',
		location: 'Scar of the Land - Scab of the Earth',
		name: 'Brutal Dragon',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Dragonaire',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 600,
		rumorType: 'MONSTER',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344944","name":"Gold Steel Web"}}',
		],
		id: '63bfbf04c3cd1c76194cb84e',
		location: 'Forgotten Nursery - Masterless Gazebo',
		name: 'Golden Strong Thread',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344944',
					name: 'Gold Steel Web',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 600,
		rumorType: 'MATERIAL',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c844834494e","name":"Pendegrune"}}',
		],
		id: '63bfbf04c3cd1c76194cb860',
		location: 'Soul Space - Edge of Pitch Darkness',
		name: 'Faintly Shining Ore',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c844834494e',
					name: 'Pendegrune',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 600,
		rumorType: 'MATERIAL',
	},
	{
		description: ['Spawn ', '{"content":"Devil Horn"}'],
		id: '63bfbf04c3cd1c76194cb854',
		location: 'Fallen Palace - Blue Sky Altar',
		name: 'Demon with Horns',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Devil Horn',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 650,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Isanasius"}'],
		id: '63bfbf04c3cd1c76194cb84f',
		location: "Prospector's Strand - Prospector's Hunt",
		name: 'Brave Master of Water',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Isanasius',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 650,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Dark Maiden"}'],
		id: '63bfbf04c3cd1c76194cb851',
		location: 'Small Islet - Prayerless Altar',
		name: 'Maiden Full of Grudges',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Dark Maiden',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 700,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Admiral Puni"}'],
		id: '63bfbf04c3cd1c76194cb852',
		location: 'Pilgrim Road',
		name: 'Puni Among Puni',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Admiral Puni',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 700,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Sealed Demon Lord"}'],
		id: '63bfbf04c3cd1c76194cb853',
		location: 'Sealed Temple - Beyond Desired Dreams',
		name: 'Sealed Disaster',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Sealed Demon Lord',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 750,
		rumorType: 'MONSTER',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344949","name":"Star Powder"}}',
		],
		id: '63bfbf04c3cd1c76194cb856',
		location: 'Moon Sun Moor',
		name: 'A Shattered Star?',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344949',
					name: 'Star Powder',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 750,
		rumorType: 'MATERIAL',
	},
	{
		description: ['Spawn ', '{"content":"Rok"}'],
		id: '63bfbf04c3cd1c76194cb858',
		location: 'Scar of the Land - Pierced Ruins',
		name: 'Soaring Monster Bird',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Rok',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 750,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Ice Elemental"}'],
		id: '63bfbf04c3cd1c76194cb850',
		location: 'Verdant Hill - Icy Cave',
		name: 'Ruler of Ice',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Ice Elemental',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 1000,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Wind Elemental"}'],
		id: '63bfbf04c3cd1c76194cb855',
		location: 'Open Ruins',
		name: 'Ruler of Wind',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Wind Elemental',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 1000,
		rumorType: 'MONSTER',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47ba92862c8448344931","name":"Spirit Crystal"}}',
		],
		id: '63bfbf04c3cd1c76194cb85e',
		location: 'Scar of the Land - Pierced Ruins',
		name: 'Crystal Blessed by Spirits',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47ba92862c8448344931',
					name: 'Spirit Crystal',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 1000,
		rumorType: 'MATERIAL',
	},
	{
		description: ['Spawn ', '{"content":"Grand Ocean"}'],
		id: '63bfbf04c3cd1c76194cb859',
		location: 'Underground Lake - Damp Banks',
		name: 'Ruler of the Ocean',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Grand Ocean',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 1000,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Crimson Fang"}', ' and ', '{"content":"Heavenly Bird"}'],
		id: '63bfbf04c3cd1c76194cb85c',
		location: 'Sealed Temple',
		name: 'Sacred Bird, Sharp Fang of Earth',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0} and @{highlightTextMap-1}',
			highlightTextMap: [
				{
					content: 'Crimson Fang',
				},
				{
					content: 'Heavenly Bird',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 1100,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Moon Eater Durak"}', ' and ', '{"content":"Sun Destroyer Yasuk"}'],
		id: '63bfbf04c3cd1c76194cb85b',
		location: 'Moon Sun Moor - Prayerless Church',
		name: "Heaven's Twin Dragons",
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0} and @{highlightTextMap-1}',
			highlightTextMap: [
				{
					content: 'Moon Eater Durak',
				},
				{
					content: 'Sun Destroyer Yasuk',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 1250,
		rumorType: 'MONSTER',
	},
	{
		description: ['Spawn ', '{"content":"Light Elemental"}'],
		id: '63bfbf04c3cd1c76194cb85f',
		location: 'Moon Sun Moor - Sun Waiting Ring',
		name: 'Ruler of Light',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Light Elemental',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 1500,
		rumorType: 'MONSTER',
	},
	{
		description: [
			'Provide ',
			'{"table":"ITEM","meta":{"type":"RECORD","id":"638a47b992862c844834490e","name":"Dunkelheit"}}',
		],
		id: '63bfbf04c3cd1c76194cb85d',
		location: 'Forest of Fairies',
		name: 'Flower Blooming in Silence',
		newDescription: {
			contentText: 'Provide @{linkRecordMap-0}',
			highlightTextMap: [],
			linkRecordMap: [
				{
					id: '638a47b992862c844834490e',
					name: 'Dunkelheit',
					table: 'ITEM',
				},
			],
			linkSearchMap: [],
		},
		price: 2000,
		rumorType: 'MATERIAL',
	},
	{
		description: ['Spawn ', '{"content":"Demon King"}'],
		id: '63bfbf04c3cd1c76194cb85a',
		location: 'Soul Space',
		name: 'Flash of Darkness',
		newDescription: {
			contentText: 'Spawn @{highlightTextMap-0}',
			highlightTextMap: [
				{
					content: 'Demon King',
				},
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
		price: 3000,
		rumorType: 'MONSTER',
	},
];

export default rumors;
