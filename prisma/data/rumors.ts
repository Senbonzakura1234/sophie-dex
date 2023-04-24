import type { Rumor } from '@prisma/client';

const rumors: Rumor[] = [
	{
		id: '63bfbf04c3cd1c76194cb83a',
		price: 250,
		keyWords: 'pilgrim road,greatly grown magic grass,material,magic grass,jumbo size',
		location: 'Pilgrim Road',
		name: 'Greatly Grown Magic Grass',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47b992862c8448344910', name: 'Magic Grass', table: 'ITEM' },
				{ id: '638a4d49a44f4fa4b0deca3e', name: 'Jumbo Size', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb838',
		price: 300,
		keyWords: 'chick woods,downpour of uni,material,uni,enhance finisher++',
		location: 'Chick Woods',
		name: 'Downpour of Uni',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47ba92862c8448344934', name: 'Uni', table: 'ITEM' },
				{ id: '638a4d48a44f4fa4b0deca12', name: 'Enhance Finisher++', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb83b',
		price: 300,
		keyWords: 'chick woods,funny ghosts,monster,funny face',
		location: 'Chick Woods',
		name: 'Funny Ghosts',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Funny Face' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb839',
		price: 300,
		keyWords: 'merbert farm,care to taste some wheat?,material,ramel wheat,low price++',
		location: 'Merbert Farm',
		name: 'Care to Taste Some Wheat?',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47ba92862c8448344937', name: 'Ramel Wheat', table: 'ITEM' },
				{ id: '638a4d47a44f4fa4b0dec968', name: 'Low Price++', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb83c',
		price: 300,
		keyWords: 'open ruins,fruit that gives strength,material,bursting berry',
		location: 'Open Ruins',
		name: 'Fruit that Gives Strength',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47ba92862c8448344940', name: 'Bursting Berry', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb83e',
		price: 300,
		keyWords: "prospector's strand,shore of treasures,remnant of a past sea?,material,seabed soil",
		location: "Prospector's Strand - Shore of Treasures",
		name: 'Remnant of a Past Sea?',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47b992862c8448344917', name: 'Seabed Soil', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb841',
		price: 300,
		keyWords: 'green ruins,strange miniature eggs,material,unknown egg',
		location: 'Green Ruins',
		name: 'Strange Miniature Eggs',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47ba92862c844834493e', name: 'Unknown Egg', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb840',
		price: 300,
		keyWords: 'gathering of beasts,cursed ancient trees,material,kifa,inflict curse',
		location: 'Gathering of Beasts',
		name: 'Cursed Ancient Trees',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47b992862c8448344906', name: 'Kifa', table: 'ITEM' },
				{ id: '638a4d48a44f4fa4b0dec9fa', name: 'Inflict Curse', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb842',
		price: 300,
		keyWords:
			'fallen palace,inverse entrance, upside down corridor, opposite living room,vividly colored oil,material,zafloa oil,secret of health',
		location: 'Fallen Palace - Inverse Entrance, Upside Down Corridor, Opposite Living Room',
		name: 'Vividly Colored Oil',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47ba92862c844834493b', name: 'Zafloa Oil', table: 'ITEM' },
				{ id: '638a4d49a44f4fa4b0deca7b', name: 'Secret of Health', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb843',
		price: 350,
		keyWords: 'flower garden,not so whimsy strawberries?,material,whimsy strawberry,stable effect++',
		location: 'Flower Garden',
		name: 'Not So Whimsy Strawberries?',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47ba92862c8448344942', name: 'Whimsy Strawberry', table: 'ITEM' },
				{ id: '638a4d47a44f4fa4b0dec999', name: 'Stable Effect++', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb83f',
		price: 350,
		keyWords: 'puzzling path,thin line between poison and medicine,material,fairy poison grass',
		location: 'Puzzling Path',
		name: 'Thin Line Between Poison and Medicine',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47b992862c8448344905', name: 'Fairy Poison Grass', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb83d',
		price: 350,
		keyWords: 'three bridge springs,moss with sleep compounds,material,mossy driftwood,inflict sleep',
		location: 'Three Bridge Springs',
		name: 'Moss with Sleep Compounds',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47b992862c8448344903', name: 'Mossy Driftwood', table: 'ITEM' },
				{ id: '638a4d48a44f4fa4b0dec9f4', name: 'Inflict Sleep', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb846',
		price: 400,
		keyWords: 'verdant hill,icy cave,enormous hakurei stones,material,hakurei stone,jumbo size',
		location: 'Verdant Hill - Icy Cave',
		name: 'Enormous Hakurei Stones',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47b992862c8448344912', name: 'Hakurei Stone', table: 'ITEM' },
				{ id: '638a4d49a44f4fa4b0deca3e', name: 'Jumbo Size', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb844',
		price: 400,
		keyWords: 'rocky grove,herb effective for medicine,material,mystic herb,critical++',
		location: 'Rocky Grove',
		name: 'Herb Effective for Medicine',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47b992862c844834490a', name: 'Mystic Herb', table: 'ITEM' },
				{ id: '638a4d47a44f4fa4b0dec991', name: 'Critical++', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb849',
		price: 400,
		keyWords: 'pilgrim road,huge puni outbreak!?,monster,gold puni,black puni,punipuni?,super puni',
		location: 'Pilgrim Road',
		name: 'Huge Puni Outbreak!?',
		rumorType: 'MONSTER',
		description: {
			contentText: [
				'Spawn ',
				'highlightTextMap-0',
				', ',
				'highlightTextMap-1',
				', ',
				'highlightTextMap-2',
				' and ',
				'highlightTextMap-3',
			],
			highlightTextMap: [
				{ content: 'Gold Puni' },
				{ content: 'Black Puni' },
				{ content: 'Punipuni?' },
				{ content: 'Super Puni' },
			],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb847',
		price: 450,
		keyWords: 'underground lake,chalk white shell,material,pelem shell',
		location: 'Underground Lake',
		name: 'Chalk White Shell',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47ba92862c844834494b', name: 'Pelem Shell', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb84a',
		price: 450,
		keyWords: 'small islet,pure and clear spring water,material,good water,quality up++',
		location: 'Small Islet',
		name: 'Pure and Clear Spring Water',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47b992862c8448344928', name: 'Good Water', table: 'ITEM' },
				{ id: '638a4d47a44f4fa4b0dec972', name: 'Quality Up++', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb845',
		price: 450,
		keyWords: 'verdant hill,cotton disliked by dragons,material,mountain cotton,dragon slayer',
		location: 'Verdant Hill',
		name: 'Cotton Disliked by Dragons',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47b992862c8448344909', name: 'Mountain Cotton', table: 'ITEM' },
				{ id: '638a4d48a44f4fa4b0deca0b', name: 'Dragon Slayer', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb84c',
		price: 450,
		keyWords: 'sealed temple,stash of high grade flour?,material,weiss powder,super fine',
		location: 'Sealed Temple',
		name: 'Stash of High Grade Flour?',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47ba92862c8448344939', name: 'Weiss Powder', table: 'ITEM' },
				{ id: '638a4d49a44f4fa4b0deca73', name: 'Super Fine', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb848',
		price: 500,
		keyWords: 'forgotten nursery,ancient kitchen,book that steals souls,monster,lich order',
		location: 'Forgotten Nursery - Ancient Kitchen',
		name: 'Book that Steals Souls',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Lich Order' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb84b',
		price: 500,
		keyWords: 'calm banks,shell like gemstone,material,pretty shell,high price++',
		location: 'Calm Banks',
		name: 'Shell Like Gemstone',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0', ' with ', 'linkRecordMap-1'],
			highlightTextMap: [],
			linkRecordMap: [
				{ id: '638a47ba92862c8448344945', name: 'Pretty Shell', table: 'ITEM' },
				{ id: '638a4d47a44f4fa4b0dec966', name: 'High Price++', table: 'TRAIT' },
			],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb84d',
		price: 550,
		keyWords: 'moon sun moor,silent bedroom,fallen sorcerer,monster,sorcerer titus',
		location: 'Moon Sun Moor - Silent Bedroom',
		name: 'Fallen Sorcerer',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Sorcerer Titus' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb857',
		price: 600,
		keyWords: 'scar of the land,scab of the earth,brutal dragon,monster,dragonaire',
		location: 'Scar of the Land - Scab of the Earth',
		name: 'Brutal Dragon',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Dragonaire' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb84e',
		price: 600,
		keyWords: 'forgotten nursery,masterless gazebo,golden strong thread,material,gold steel web',
		location: 'Forgotten Nursery - Masterless Gazebo',
		name: 'Golden Strong Thread',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47ba92862c8448344944', name: 'Gold Steel Web', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb860',
		price: 600,
		keyWords: 'soul space,edge of pitch darkness,faintly shining ore,material,pendegrune',
		location: 'Soul Space - Edge of Pitch Darkness',
		name: 'Faintly Shining Ore',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47ba92862c844834494e', name: 'Pendegrune', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb854',
		price: 650,
		keyWords: 'fallen palace,blue sky altar,demon with horns,monster,devil horn',
		location: 'Fallen Palace - Blue Sky Altar',
		name: 'Demon with Horns',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Devil Horn' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb84f',
		price: 650,
		keyWords: "prospector's strand,prospector's hunt,brave master of water,monster,isanasius",
		location: "Prospector's Strand - Prospector's Hunt",
		name: 'Brave Master of Water',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Isanasius' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb851',
		price: 700,
		keyWords: 'small islet,prayerless altar,maiden full of grudges,monster,dark maiden',
		location: 'Small Islet - Prayerless Altar',
		name: 'Maiden Full of Grudges',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Dark Maiden' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb852',
		price: 700,
		keyWords: 'pilgrim road,puni among puni,monster,admiral puni',
		location: 'Pilgrim Road',
		name: 'Puni Among Puni',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Admiral Puni' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb853',
		price: 750,
		keyWords: 'sealed temple,beyond desired dreams,sealed disaster,monster,sealed demon lord',
		location: 'Sealed Temple - Beyond Desired Dreams',
		name: 'Sealed Disaster',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Sealed Demon Lord' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb856',
		price: 750,
		keyWords: 'moon sun moor,a shattered star?,material,star powder',
		location: 'Moon Sun Moor',
		name: 'A Shattered Star?',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47ba92862c8448344949', name: 'Star Powder', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb858',
		price: 750,
		keyWords: 'scar of the land,pierced ruins,soaring monster bird,monster,rok',
		location: 'Scar of the Land - Pierced Ruins',
		name: 'Soaring Monster Bird',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Rok' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb850',
		price: 1000,
		keyWords: 'verdant hill,icy cave,ruler of ice,monster,ice elemental',
		location: 'Verdant Hill - Icy Cave',
		name: 'Ruler of Ice',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Ice Elemental' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb855',
		price: 1000,
		keyWords: 'open ruins,ruler of wind,monster,wind elemental',
		location: 'Open Ruins',
		name: 'Ruler of Wind',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Wind Elemental' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb85e',
		price: 1000,
		keyWords: 'scar of the land,pierced ruins,crystal blessed by spirits,material,spirit crystal',
		location: 'Scar of the Land - Pierced Ruins',
		name: 'Crystal Blessed by Spirits',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47ba92862c8448344931', name: 'Spirit Crystal', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb859',
		price: 1000,
		keyWords: 'underground lake,damp banks,ruler of the ocean,monster,grand ocean',
		location: 'Underground Lake - Damp Banks',
		name: 'Ruler of the Ocean',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Grand Ocean' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb85c',
		price: 1100,
		keyWords: 'sealed temple,sacred bird, sharp fang of earth,monster,crimson fang,heavenly bird',
		location: 'Sealed Temple',
		name: 'Sacred Bird, Sharp Fang of Earth',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0', ' and ', 'highlightTextMap-1'],
			highlightTextMap: [{ content: 'Crimson Fang' }, { content: 'Heavenly Bird' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb85b',
		price: 1250,
		keyWords: "moon sun moor,prayerless church,heaven's twin dragons,monster,moon eater durak,sun destroyer yasuk",
		location: 'Moon Sun Moor - Prayerless Church',
		name: "Heaven's Twin Dragons",
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0', ' and ', 'highlightTextMap-1'],
			highlightTextMap: [{ content: 'Moon Eater Durak' }, { content: 'Sun Destroyer Yasuk' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb85f',
		price: 1500,
		keyWords: 'moon sun moor,sun waiting ring,ruler of light,monster,light elemental',
		location: 'Moon Sun Moor - Sun Waiting Ring',
		name: 'Ruler of Light',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Light Elemental' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb85d',
		price: 2000,
		keyWords: 'forest of fairies,flower blooming in silence,material,dunkelheit',
		location: 'Forest of Fairies',
		name: 'Flower Blooming in Silence',
		rumorType: 'MATERIAL',
		description: {
			contentText: ['Provide ', 'linkRecordMap-0'],
			highlightTextMap: [],
			linkRecordMap: [{ id: '638a47b992862c844834490e', name: 'Dunkelheit', table: 'ITEM' }],
			linkSearchMap: [],
		},
	},
	{
		id: '63bfbf04c3cd1c76194cb85a',
		price: 3000,
		keyWords: 'soul space,flash of darkness,monster,demon king',
		location: 'Soul Space',
		name: 'Flash of Darkness',
		rumorType: 'MONSTER',
		description: {
			contentText: ['Spawn ', 'highlightTextMap-0'],
			highlightTextMap: [{ content: 'Demon King' }],
			linkRecordMap: [],
			linkSearchMap: [],
		},
	},
];

export default rumors;
